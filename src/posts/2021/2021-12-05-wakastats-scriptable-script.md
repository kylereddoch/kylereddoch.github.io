---
title: 'WakaStats - A Scriptable Script for Your WakaTime Data'
description: "My first Scriptable script I created. It uses the WakaTime API and grabs the users data for the last 7 days in JSON format. Then displays the data in a widget."
tags: [scriptable, scripts, development, javascript]
date: 2021-12-12
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

![WakaStats Scriptable Widget](/assets/images/waka-stats.jpg)

### How to Download

As mentioned above, I have made the script open-source. It is available is on my GitHub account [here](https://github.com/kylereddoch/scriptable). There will find instructions on how to download and what you need to chage in the script for it to work.

### What's Next

The next Scriptable script I am working on is one for RescueTime. This one will be more in-depth design wise and will use the large sized widget.
