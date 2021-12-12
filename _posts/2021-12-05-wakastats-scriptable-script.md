---
layout: post
title: "WakaStats - A Scriptable Script for Your WakaTime Data"
description: My first Scriptable script I created. It uses the WakaTime API and grabs the users data for the last 7 days in JSON format. Then displays the data in a widget.
#color: brown # For a colored header
author: kylereddoch
#bootstrap: true # To use bootstrap alongside markdown
feature-img: "/assets/img/feature-img/waka-stats.jpg" # Featured image in post header
thumbnail: "/assets/img/thumbnails/feature-img/waka-stats.jpg" # Thumbnail for post in blog list
#hide_title: true # Hides post title when using an image with the title in it
tags: [scriptable, scripts, development, javascript]
#excerpt_separator: <!--more--> # Used if you want to use a custom seperator (put the seperator in the post where you want it)
date: 2021-12-12 17:40 -0600
---

I created my first script for the [Scriptable](https://scriptable.app) app. I had fun creating this script. I really created this script for personal use but thought other people could use it or find it useful so I decided to make it available and open-source.

Let's dive in...

So the script uses the WakaTime API and grabs the users data for the last 7 days in JSON format. The data that is pulled to be displayed is:

- Categories
- Editors
- Languages
- Daily Average Coding Time
- Total Coding Time
- Operating Systems

The data is them organized within the medium-sized iOS widget. Scriptable will refresh the widget at a normal refresh interval but if you would like to refresh it differently, you can setup [automations with Shortcuts](https://support.apple.com/guide/shortcuts/create-a-new-personal-automation-apdfbdbd7123/ios).

[WakaStats Scriptable Widget](/assets/img/feature-img/waka-stats.jpg)

### How to Download

As mentioned above, I have made the script open-source. It is available is on my GitHub account [here](https://github.com/kylereddoch/scriptable). There will find instructions on how to download and what you need to chage in the script for it to work.

### What's Next

The next Scriptable script I am working on is one for RescueTime. This one will be more in-depth design wise and will use the large sized widget.
