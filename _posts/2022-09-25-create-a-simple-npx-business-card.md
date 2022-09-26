---
layout: post
title: "Tutorial: Create a Simple npx Business Card"
color: red # For a colored header
author: kylereddoch
description: Let's learn how to create a nerdy npx business card using CLI, nodejs, and NPM.
#bootstrap: true # To use bootstrap alongside markdown
#feature-img: "/assets/img/feature-img/gridstudio-frames.jpg" # Featured image in post header
#thumbnail: "/assets/img/thumbnails/feature-img/gridstudio-frames.jpg" # Thumbnail for post in blog list
#hide_title: true # Hides post title when using an image with the title in it
tags: [coding, npx, json, cli, javascript, nodejs, tutorials]
date: 2022-09-25 19:30 -0500
#excerpt_separator: <!--more--> # Used if you want to use a custom seperator (put the seperator in the post where you want it)
---

One of the most common things we Software Engineers do is tinker with code. That is what I have done with Javascript and NodeJS.

I created a CLI tool that uses a custom npm package to display a nerdy style business card. Here is how I created it:

#### Using javascript for CLIs is easy

- the npm build, publish, and share cycle is so easy
- ``npx`` allows you to execute without installation
- the npm ecosystem is ripe for CLIs

## npx business card

**We will be using the command line to during part of this tutorial.**

Let's start creating this business card. The final output might look something like this: (I have customized this quite a bit to my needs)

![My npx Business Card](/assets/img/npx_sample.png)

### npm init

First, let's start off by creating a new ``node`` project and name it whatever you want. I would suggest naming it after the exectuable you want to expose. You don't have to but naming conventions are good and it makes it more ``npx`` friendly.

```bash
mkdir kylereddoch
cd kylereddoch
npm init -y
```

Now, let's get the neccessary CLI working. I named mine card.js but you can name yours whatever you want.

```bash
touch card.js
chmod +x card.js
```

Now that the file is created, open the file in your favorite editor. I am partial to ``vs code`` but you can use any editor you want.

Once you open the file, it will be blank. Let's add some ``test`` code.

```javascript
#!/usr/bin/env node

console.log('doing business')
```

Now within the same folder you created, you can execute the file like this:

```bash
./card.js
```

### ship it

You know have a functional first release of your CLI tool. Now, let's ship it.

If you do not already have a npm account you can create one either online at [npmjs.com](https://npmjs.com/) or by using cli as follows and following the directions:

```bash
npm adduser
```

Once you have created a user, you can login to npm by using the following command:

```bash
npm login
```

Once you are logged in, you can publish your CLI to the world!

```bash
npm publish
```

Once you have published your CLI, anyone can install it globally by using the following command:

```bash
npx kylereddoch
```

### making updates

Now that you have published your CLI, you can make updates to it and publish them. You can also update the version number in your ``package.json`` file and publish it as a new version.

If you want to update the version number using the command line, you can do so by using the following commands:

To update the version number to a major release:

```bash
npm version major
```

To update the version number to a minor release:

```bash
npm version minor
```

Or to update the version number to a patch release:

```bash
npm version patch
```
Once you have updated the version number, you can publish it to npm by using the following command:

```bash
npm publish
```

### Conclusion

I hope you enjoyed this tutorial. You can find the raw code for this tutorial on [GitHub](https://github.com/kylereddoch/npx_card). If you have any questions, please feel free to reach out to me on [Twitter](https://twitter.com/kylereddoch) or via [Email](kylereddoch@me.com).
