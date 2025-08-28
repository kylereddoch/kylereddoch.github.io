---
date: 2024-11-21
title: 'Apple Music to Discord'
description: "Kyle tests out connecting Apple Music to Discord with an app for the Apple ecosystem and Windows ecosystem."
tags: [apple music, discord, tech, apps, lastfm]
---

I am a pretty big Discord user. I am active in various Discord communities and even run one myself, along with my co-admin of our Mastodon instance.

Since I live in the Apple ecosystem, I use the best music service, Apple Music. 😉 Unfortunately, due to how Apple Music’s API works, Discord doesn’t connect with it like it does Spotify and Amazon Music. I wanted to be able to let people see what I was listening to on Apple Music. So I went on a mission to find a solution.

<div align="center">

![Discord Profile showing listening to Apple Music.](/assets/images/DiscordPlayAppleMusic.png)

</div>

Therefore, I went to the socials, [Mastodon](https://allthingstech.social/@beardedtechguy) specifically because that’s where I am mostly nowadays, and asked if anyone knew of a way to get it working.

<blockquote class="mastodon-embed" data-embed-url="https://allthingstech.social/@beardedtechguy/113454374149108298/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://allthingstech.social/@beardedtechguy/113454374149108298" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> \<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"\><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @beardedtechguy@allthingstech.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://allthingstech.social/" async src="https://allthingstech.social/embed.js"></script>

A friend, Wesley ([0xWDG@mastodon.social](https://mastodon.social/@0xWDG)), replied to that post and told me that he had created an app for macOS that does just that.

I was so excited as I am not a user of Spotify nor a fan of it. And to be honest, I have been a little jealous of seeing my friends on Discord with their “listening to on…” status.

## macOS

<div align="center">

![AppleMusic2Discord App shown running in the macOS menu bar.](/assets/images/AppleMusicDiscord.png)

</div>

If you are using a Mac device, you can easily use the [Apple Music to Discord](https://github.com/0xWDG/Apple-Music-to-Discord) app that Wesley created. It is available on his GitHub account. Download the zip folder and put the .app file in your applications folder.

From there all you need to do is:

1. Open Discord
2. Open Apple Music
3. Open AM2D.app
4. Now your playing status should start being updated.

<br>
<div align="center">

This post is sponsored by PDF Expert - Get 30% off for Black Friday.

[![Get 30% of a year of PDF Expert for Black Friday](/assets/sponsors/pdfexpert/pdf_expert_blackfriday_2024.png)](https://readdle.8kpa2n.net/c/3120092/2221892/11051)

</div>

## Windows

<div align="center"><br>
![AMWin-Rich Presence app shown running in the Windows system tray.](/assets/images/AMWin-RP.png)
</div>

At work though, we run Windows machines, so the Apple to Discord app wouldn’t work on Discord there. Don’t worry—I found one for Windows that works great. It even scrobbles the Apple Music song to LastFM!

The app is called [AMWin-Rich Presence](https://github.com/PKBeam/AMWin-RP). I have been using it for about a week and it has been flawless.

It only works with the [Apple Music app](https://apps.microsoft.com/detail/9PFHDD62MXS1) from the Microsoft Store, so make sure you have that downloaded.

AMWin-RP is just a .exe file, so once you download and unzip the folder, you can place it anywhere you want, I placed it on my desktop. Just run the .exe file, and it runs in the background in the system tray.

## The Wrap-Up

Both of these apps have been great while I have been using them. I have run into bumps along the way, for instance, if I have the Windows one running at work but I come home and want to use the Apple one on my MBP, it will sometimes wig out due to the Discord DRC. Discord will still show the music that is paused by my Windows machine at work.

That may be specific to me since I span different OSes. I just have to remember to close out the Windows one when I leave work.
