---
title: "Welcome to the User Group Toolkit"
layout: splash
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/intro_header_user_group_toolkit2.webp
excerpt: "Empowering Collaboration: Your Open Source Toolset for Building Thriving Communities"
feature_row:
  - title: "Meetup Header Image Generator"
    excerpt: "Create captivating meetup headers"
    url: "https://github.com/aws-user-group-toolkit/image-generator"
    btn_label: "Read the docs"
    btn_class: "btn--primary"
  - title: "User Group Templates"
    excerpt: "Ready-to-use templates for diverse content needs"
    url: "https://github.com/aws-user-group-toolkit/user-group-templates"
    btn_label: "Read the docs"
    btn_class: "btn--primary"
  - title: "Asset Generator (coming soon)"
    excerpt: "Streamline your community content creation process with our tools"
---

## Toolkit Components

{% include feature_row %}

## Latest Blog Posts

{% for post in site.posts limit: 3 %}
  {% include archive-single.html %}
{% endfor %}