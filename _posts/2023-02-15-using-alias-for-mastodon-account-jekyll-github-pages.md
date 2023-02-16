---
layout: post
title: "Using an Alias for Your Mastodon Account with Jekyll and GitHub Pages"
#color: blue # For a colored header
author: kylereddoch
description: Learn how to alias your Mastodon username to your own domain when using Jekyll and GitHub pages.
#bootstrap: true # To use bootstrap alongside markdown
feature-img: "/assets/img/feature-img/mastodon-planets.jpg" # Featured image in post header
thumbnail: "/assets/img/thumbnails/feature-img/mastodon-planets.jpg" # Thumbnail for post in blog list
#hide_title: true # Hides post title when using an image with the title in it
tags: [mastodon, jekyll, github-pages, tutorials]
date: 2023-02-15
comments:
  host: iosdev.space
  username: kylewritescode 
  id: 
#excerpt_separator: <!--more--> # Used if you want to use a custom seperator (put the seperator in the post where you want it)
---

If you are like myself and many other Birdsite users of past, you have began flocking to [Mastodon](https://joinmastodon.org){:target="_blank"} and making yourself a home there. Mastodon although is different than most mainstream social media platforms. It is a federated network, meaning that there are many different instances of Mastodon that are all connected to each other. This means that you can [choose which instance](https://joinmastodon.org/servers){:target="_blank"} you want to use and you can even [create your own instance](https://docs.joinmastodon.org/user/run-your-own/){:target="_blank"} if you want to. This is great because it means that you can choose an instance that you like and that you feel comfortable with.

So you decided to choose an instance you liked and created an account. In my case, I chose to use [iosdev.space](https://iosdev.space){:target="_blank"} as my instance and my username is kylewritescode. Therefore, my full Mastodon account is [@kylewritescode@iosdev.space](https://iosdev.space/@kylewritescode){:target="_blank"}.

What if you wanted to add a little more personalization to your username? What if you wanted to use a domain you already have without having to struggle with hosting an entire Mastodon server? With this personalization, it means that no matter what instance you use, or what instance you decide to use in the future, you will always be able to share the same username and have it pointed to your account.

Here is how I did it using GitHub Pages. Although, this can be done using any hosting service that allows you to create a .named folder.

## Using WebFinger

Mastodon uses [ActivityPub](https://blog.joinmastodon.org/2018/06/how-to-implement-a-basic-activitypub-server/){:target="_blank"} to communication with "actors" and those actors are found using WebFinger, a way to attach information to a specific email address or other online resource. So, to get my personalized username to work, I just needed to create a WebFinger spec on my domain.

```text
<yourinstaceaddress>/.well-known/webfinger?resource=acct:<yourusername>@<yourinstaceaddress>
```

So, if I wanted to get information about my account on iosdev.space, I would go to:

```text
https://iosdev.space/.well-known/webfinger?resource=acct:kylewritescode@iosdev.space
```

That means, when I go to that endpoint, I get a JSON response that looks like this:

```json
{
  "subject": "acct:kylewritescode@iosdev.space",
  "aliases": [
    "https://iosdev.space/@kylewritescode",
    "https://iosdev.space/users/kylewritescode"
  ],
  "links": [
    {
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html",
      "href": "https://iosdev.space/@kylewritescode"
    },
    {
      "rel": "self",
      "type": "application/activity+json",
      "href": "https://iosdev.space/users/kylewritescode"
    },
    {
      "rel": "http://ostatus.org/schema/1.0/subscribe",
      "template": "https://iosdev.space/authorize_interaction?uri={uri}"
    }
  ]
}
```

Now all I need to do is put that JSON reponse in the same directory and file and that's it!

<div align="center"><a class="button" href="https://donate.stripe.com/3cs7voeE46LX07e7ss" target="_blank">Support this site with a cup of coffee</a></div>

## Creating the WebFinger Spec with Jekyll

My blog runs on `Jekyll` and is hosted on `GitHub Pages`. To have your Mastodon alias work with your domain tied to your Jekyll site, you need to follow a few steps:

1. Create a folder in the root of your site called `.well-known`
2. Inside that folder, create a file called `webfinger`, with no file extension
3. Insided that file, paste the JSON response from the WebFinger endpoint
4. In your `_config.yml` file, add the following: (This allows Jekyll to include the `.well-known` folder in the build process.)

```yaml
include: ["/.well-known" ]
```

That's it! Just push your changes to GitHub and your alias will be ready to go. You can test it by going to `anything@yourdomain.whatever` on Mastodon and it will redirect you to your account.

---

#### References

During my research, I found out about this method thanks to the article by [Maarten Balliauw](https://blog.maartenballiauw.be){:target="_blank"} called [Mastodon on your own domain without hosting a server](https://blog.maartenballiauw.be/post/2022/11/05/mastodon-own-donain-without-hosting-server.html){:target="_blank"}.