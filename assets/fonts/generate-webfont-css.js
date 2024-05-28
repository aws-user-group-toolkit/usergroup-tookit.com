const fs = require('fs');
const path = require('path');

const fontsDir = './'; // replace with your fonts directory
const cssFilePath = './fonts.css'; // replace with your desired css file path

fs.readdir(fontsDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    } 

    let cssContent = '';
    let fontFamilies = {};

    files.forEach((file, index) => {
        const fontName = path.parse(file).name;
        const fontExtension = path.parse(file).ext;

        if (['.ttf', '.otf', '.woff', '.woff2', '.eot'].includes(fontExtension)) {
            if (!fontFamilies[fontName]) {
                fontFamilies[fontName] = [];
            }
            const format = fontExtension === '.eot' ? 'embedded-opentype' : fontExtension.slice(1);
            fontFamilies[fontName].push(`url('${fontsDir}/${file}') format('${format}')`);
        }
    });

    for (const [fontName, srcs] of Object.entries(fontFamilies)) {
        cssContent += `
@font-face {
    font-family: '${fontName}';
    src: ${srcs.join(',\n')};
}
        `;
    }

    fs.writeFile(cssFilePath, cssContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});