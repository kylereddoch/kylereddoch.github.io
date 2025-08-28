---
title: 'How to Add a Mastodon Share Button to Your Website'
description: "Learn how to add a Mastodon share button to your website using a little bit of HTML and JavaScript."
tags: [mastodon, javascript, html, tutorial]
date: 2023-02-20
---

{% raw %}

Ever since Elon took over the helm of Twitter and causing quite an uproar, people have been flocking to Mastodon as their new social media platform. Mastdodon isn't showing any signs of going anywhere anytime soon, so it will be here for a long time. With this change, people have been looking for a way that would allow their readers to share their content to Mastodon, myself included.

Mastodon, though, is different than Twitter in that it is a decentralized network. This means that the mechanics of creating a share button is a _little_ bit more complicated than just using a URL (you need to know _where_ to send the user).

In this post, I will show you how I created a Mastodon share button for this website using a little bit of HTML and Javascript.

## The Challenge

Per the [Mastodon documentation](https://docs.joinmastodon.org/methods/statuses/), we need to send the button to the following URL `/share` url on the users Mastodon instance, but we don't know what instance the user is on; this could be anything from `iosdev.space` to `mastodon.social`. At this time, there is no way to automatically determine the users instance, at least not that I know of.

We can accomplish this by using a little bit of Javascript (with a `click` event) to prompt the user for their instance (via Javascript's `prompt()`) and then open a window onto the share page that prepopulates both the post title and URL of your article (these are editable by the user to whatever they what to post).

### The Javascript

For the Javascript, we will need to create a function that will prompt the user for their instance and then open a new window with the share URL. We will also need to add a `click` event to the button that will call this function.

```javascript
/* Generate a share link for the user's Mastodon domain */
function MastodonShare(e){

    // Gather the source text and URL
    src = e.target.getAttribute("data-src");

    // Gather the Mastodon domain
    domain = prompt("Enter your Mastodon domain", "mastodon.social");

    if (domain == "" || domain == null){
        return;
    }

    // Build the URL
    url = "https://" + domain + "/share?text=" + src;

    // Open a window on the share page
    window.open(url, '_blank');
}
```

<div align="center"><a class="button" href="https://donate.stripe.com/3cs7voeE46LX07e7ss" target="_blank">Support this site with a cup of coffee</a></div>

### The HTML

For the HTML, we will need to create a button that will call the function when clicked (the `onclick` attribute). We will also need to add a `data-src` attribute that will contain the text that we want to share. Here is what mine looks like, yours might look a little different.

```html
<a onclick="MastodonShare(this);"
            data-src="{{ page.title }}&amp;url={{ page.url | absolute_url }}" title="{{ site.data.social.language.str_share_on }} Mastodon">
                <i class="fab fa-mastodon fa-2x" aria-hidden="true"></i>
                <span class="sr-only">{{ site.data.social.language.str_share_on | default: "Share on" }} Mastodon</span>
            </a>
```

Okay, this is if you your share button is an icon or link, but what if you have them as an image? Well, you can do that too. It is a _little_ different, but I will show you how to do that as well.

### The Image Button

As with the icon button, we will use the `data-src` attribute to store the text that we want to share. Your image button can look something like this, but just came sure that is has the `data-src` attribute and whatever `class` you use in the same you use in the `javascript` below.

```html
<img class="mastodon-share" 
      style="display: none" 
      loading="lazy" 
      src="/images/social-icons/mastodon_share.jpg" 
      alt="Share this post on Mastodon" 
      title="Share this post on Mastodon" 
      data-src="{{ page.title }}&amp;url={{ page.url | absolute_url }}"
      >
```

Because the image share functionality is reliant on Javascript, it would be best to hide the image by defaulut that way if users do not have Javascript enabled, they will not see the image. To do this, we will add a `style` attribute to the image and set it to `display: none;`.

This way the image is revealed with Javescript using the following code (which also includes the `click` event listener):

```javascript
/* Call this on document.ready() */
function enableMastodonShare(){
    var eles = document.getElementsByClassName('mastodon-share');
    for (var i=0; i<eles.length; i++){
        eles[i].addEventListener('click', MastodonShare);
        /* Make visible by removing the original display: none */
        eles[i].style = '';
    }
}
```

<div align="center"><a class="button" href="https://donate.stripe.com/3cs7voeE46LX07e7ss" target="_blank">Support this site with a cup of coffee</a></div>

## The Result

After clicking your share button, the user will be prompted with a prompt to enter with Mastodon instance.

![Mastodon instance prompt](/assets/images/instance-popup.png)

Once they have entered thier instance and hit okay, a new window will open with the share page prepopulated with the title and URL of the post on their instance.

![Mastodon share box](/assets/images/mastodon-share-box.png)

## Conclusion

I hope this post has helped you create your own Mastodon share button. If you have any questions, feel free to reach out to me on Mastodon at [@kylewritescode](https://iosdev.space/@kylewritescode).

If you have enjoyed this post, please consider supporting the site.

{% endraw %}