---
title: 'Adding Mastodon Comments to a Jekyll Blog'
description: "Learn how to add Mastodon comments to a Jekyll blog using the Jekyll Comments plugin."
tags: [mastodon, jekyll, tutorials]
date: 2023-02-13
---

With the crashing and burning happening at Twitter, I have made the personal decision to leave the platform that I have loved and enjoyed for the past 14 years. I have enjoyed great conversations, connections, and even learned in that timespan. but seeing how things are spawning out of control, I have decided to move to a platform that I have been wanting to learn for a while now. I have decided to move to [Mastodon](https://iosdev.space/@kylewritescode).

Now I have had a Mastodon account ever since 2016 but haven't used it until just a few days ago. Once I started using it, I realized that I really like the platform. It is a great alternative to Twitter and I am excited to learn more about it. I was off to the races. I have since learned quite a bit about the platform and have been enjoying it. I have also been enjoying the conversations I have been having with people on the platform. Somehow, I have been having more meaningful conversations on Mastodon than I have on Twitter. I have also moved (more about that in another post) to [iosdev.space](https://iosdev.space) which is a great instance to be on if you'rer interested in iOS or Swift development.

Well, since I have falling in love with Mastodon, it has gotten me intrigued with the idea of the [Fediverse](https://en.wikipedia.org/wiki/Fediverse) as a whole and I am 100% going down the rabbit hole. I am finding decentralized alternatives to centralized apps and services that I use on a daily basis. Because of that, I have decided to move my blogs commenting system away from disqus and over to Mastodon. The migrating is now complete and I am excited to share how I did it.

## Modifications made to Jekyll

There were two modifications that needed to be made to my Jekyll instance to get this working. First, I had to create a new html file. I named it ```fediverse_comments.html``` (you can name it whatever you like) and placed it in the ```_includes``` folder. Here's what that file looks like.

### \_includes\fediverse_comments.html

<script src="https://gist.github.com/kylereddoch/dabd00a4baa97ffa36ae40af4b91fd59.js"></script>

Second I needed to change the exising ```post.html``` file located in the ```_layouts``` folder. I added the following code which will tell Jekyll to use the ```fediverse_comments.html``` file when it is rendering the post if the ```comments``` variable is set in the front matter of the post (more on that in a bit).

You can add this code anywhere in the ```post.html``` file. I added it at the bottom of the file since I wanted the comments to be at the bottom of the post.

<script src="https://gist.github.com/kylereddoch/bafea27fd3ae9f0fd49b83a0c6f24118.js"></script>

### \_layouts\post.html

Here is what my ```post.html``` file looks like.

<script src="https://gist.github.com/kylereddoch/509fe375a32a514708e30a97fc89ff8a.js"></script>

## Enabling Comments on a Post

Now that we have the code in place to render the comments we need to tell Jekyll to render the comments on a post. To do this we need to add the ```comments``` variable to the front matter of the post.

```yaml
comments:
  host: iosdev.space
  username: kylewritescode
  id: 109325166591243911
```

Before that though, you will need to first create a post on Mastodon for the article (meaning you will have to come back and edit the post with the id) that you will be creating comments for. This is because the comments are tied to the post on Mastodon. After that post is created you will need to get the ID of the post. You can get the ID by going to the post on Mastodon and looking at the URL. The ID will be the number at the end of the URL. For example, if the URL is ```https://iosdev.space/@kylewritescode/106000000000000000``` the ID is ```106000000000000000```. Once you have the ID you can add the ```comments``` variable to the front matter of the post.

Here is an example of what the front matter of a post would look like.

``` yaml
comments:
  host: iosdev.space
  username: kylewritescode 
  id: 109325166591243911  
```

Host is the domain of the instance you want to pull comments from (the instance you're on). Username is the username of the user who created the post (you). Id is the id of the post. You can find the id of the post by going to the post on the instance and looking at the url. The id is the number at the end of the url.

And that is all! You should now have comments on your Jekyll site using Mastodon. If you have any questions or comments feel free to reach out to me on Mastodon [@kylewritecode@iosdev.space](https://iosdev.space/@kylewritescode).
