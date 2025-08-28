---
date: 2025-02-25
title: 'Enhancing My Terminal Experience'
description: "Discover how I enhanced my terminal experience by switching to Ghostty and customizing it with Fish shell, Homebrew, and essential plugins. Learn how to set up a fast, efficient, and visually appealing terminal on macOS."
tags: [editorials, ghostty, apps, tech]
mastodon_url: https://infosec.exchange/@beardedtechguy/114066301852528023
---

I spend a decent amount of time in a terminal window throughout the day, whether it be running build scripts to automate tasks for endpoint mangement, git commands or SSHing (is that a word or did I just create one?) into servers.

However, until about a week or so ago, I have been just using the iTerm app for my terminal needs and have absolutely loved it. I had customized a little by using [fish shell](https://fishshell.com/) and [homebrew](https://brew.sh). I was content with it, it fit my needs and worked. Although, like any tech nerd, I came across a new terminal emulator on Mastodon called [Ghostty](https://ghostty.org/). I took a look at and bookmarked it but that was about it. It’s hard for me to move to something new, especially something like a terminal app that I use almost daily.

Last week though I had to completely wipe and reinstall macOS on my MacBook Pro. I’ll spare you the long store, but this gave me the opportunity to start fresh with a new terminal app so I decided to move over to Ghostty.

Now that I have my terminal env setup using Ghostty with the fish shell, I am noticing the speed difference is definitely faster. I am also in love with the interface of it.

Here is my current setup.

![My Ghostty Terminal](/assets/images/ghostty-terminal.png)

## Ghostty

If you are not aware of [Ghostty](https://ghostty.org/) it is a new terminal emulator written by [Mitchell Hashimoto](https://mitchellh.com/).

I must admit I have barely scratched the surface of what Ghostty can do, and I have mainly just been using it as it comes. I am sure as I continue to dig into it, my terminal will become more in-depth.,

As such my Ghostty config file (`~/.config/ghostty/config`) just has this:

`
theme = catpuccin-mocha
command = /opt/homebrew/bin/fish
`

I have removed all the other stuff that came in the default config file.

## My Setup

If you like how my terminal looks and wanted to set up something similar then this how to do it. You will need to be on a Mac to be able to follow this, but I am sure the steps will be similar if you are using Windows or Linux.

1. Install [Ghostty](https://ghostty.org/download) by downloading it from the website (sorry Windows users you will need to skip this step).
2. Install `fish`, `fisher`, `grc` and `fastfetch`: `brew install fish fisher grc fastfetch`
   * `fish`
   * `fisher` — A plugin manager for fish: [jorgebucaran/fisher](https://github.com/jorgebucaran/fisher)
   * `grc` — [Generic Colouriser](http://kassiopeia.juls.savba.sk/~garabik/software/grc.html)
   * `fastfetch` — To get the greeting with the logo and stats.
3. Add `fish` to the available shells by editing `/etc/shells` and adding `/opt/homebrew/bin/fish` to the bottom.
4. Make `fish` the default shell by running `chsh -s /opt/homebrew/bin/fish`
5. Restart Ghostty and make sure you are now in the fish shell.
6. Install some fish plugins:

```sh
fisher install oh-my-fish/plugin-brew
fisher install oh-my-fish/plugin-osx
fisher install oh-my-fish/theme-bobthefish
fisher install oh-my-fish/plugin-grc
```

7. Generate a config for `fastfetch`: `fastfetch --gen-config-force`. This will be created as `~/.config/fastfetch/config.jsonc`.
8. Edit the config removing anything you don't want. This is what mine looks like:

```json
{
  "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",
  "modules": [
    "title",
    "separator",
    "os",
    "host",
    "kernel",
    "uptime",
    "packages",
    "shell",
    "display",
    "terminal",
    "cpu",
    "gpu",
    "memory",
    "disk",
    "localip",
    "battery",
    "poweradapter",
    "break",
    "break"
  ]
}
```

9. Edit your fish config file `~/.config/fish/config.fish`. Mine looks like this:

```sh
## Settings
set -g theme_display_git_stashed_verbose yes
set -g theme_display_git_master_branch yes
set -g theme_display_git_untracked yes
set -g theme_display_git_dirty yes
set -g theme_display_nvm yes
set -g theme_display_virtualenv yes
set -g theme_display_user yes
set -g theme_display_hostname yes
set -g theme_color_scheme catpuccin-mocha
set -g theme_date_format "+%Y-%m-%d %H:%M:%S"

function fish_greeting
    fastfetch
end

function ls
    /bin/ls -G $argv
end
```

If you are wondering about the `ls` mapping, for some reason `ls` had no colors when running it. So folders and executables were all grey, this seemed to fix it.

If you want you can also store your fish config somewhere else and just reference it from the main fish file:

```sh
source ~/Projects/setup/fish/main.fish
```

I often do this, so I can put my config file in a git repository and share it amongst my computers.