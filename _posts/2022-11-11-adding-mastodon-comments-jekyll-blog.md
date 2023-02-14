---
layout: post
title: "Adding Mastodon Comments to a Jekyll Blog"
#color: blue # For a colored header
author: kylereddoch
description: Learn how to add Mastodon comments to a Jekyll blog using the Jekyll Comments plugin.
#bootstrap: true # To use bootstrap alongside markdown
feature-img: "/assets/img/feature-img/mastodon-welcome.jpg" # Featured image in post header
thumbnail: "/assets/img/thumbnails/feature-img/mastodon-welcome.jpg" # Thumbnail for post in blog list
#hide_title: true # Hides post title when using an image with the title in it
tags: [mastodon, jekyll, tutorials]
date: 2023-02-13
comments:
  host: iosdev.space
  username: kylewritescode 
  id:  
#excerpt_separator: <!--more--> # Used if you want to use a custom seperator (put the seperator in the post where you want it)
---

With the crashing and burning happening at Twitter, I have made the personal decision to leave the platform that I have loved and enjoyed for the past 14 years. I have enjoyed great conversations, connections, and even learned in that timespan. but seeing how things are spawning out of control, I have decided to move to a platform that I have been wanting to learn for a while now. I have decided to move to [Mastodon](https://iosdev.space/@kylewritescode).

Now I have had a Mastodon account ever since 2016 but haven't used it until just a few days ago. Once I started using it, I realized that I really like the platform. It is a great alternative to Twitter and I am excited to learn more about it. I was off to the races. I have since learned quite a bit about the platform and have been enjoying it. I have also been enjoying the conversations I have been having with people on the platform. Somehow, I have been having more meaningful conversations on Mastodon than I have on Twitter. I have also moved (more about that in another post) to [iosdev.space](https://iosdev.space) which is a great instance to be on if you'rer interested in iOS or Swift development.

Well, since I have falling in love with Mastodon, it has gotten me intrigued with the idea of the [Fediverse](https://en.wikipedia.org/wiki/Fediverse) as a whole and I am 100% going down the rabbit hole. I am finding decentralized alternatives to centralized apps and services that I use on a daily basis. Because of that, I have decided to move my blogs commenting system away from disqus and over to Mastodon. The migrating is now complete and I am excited to share how I did it.

## Modifications made to Jekyll

There were two modifications that needed to be made to my Jekyll instance to get this working. First, I had to create a new html file. I named it ```fediverse_comments.html``` (you can name it whatever you like) and placed it in the ```_includes``` folder. Here's what that file looks like.

### \_includes\fediverse_comments.html

{% raw %}

```html
<div class="comments">
    <h2>Comments</h2>
    <p>You can use your [Mastodon](https://joinmastodon.org) account to comment on this article by replying to the associated Mastodon <a class="link" href="https://{{ page.comments.host }}/@{{ page.comments.username }}/{{ page.comments.id }}">post</a>.</p>
    <p>
    <a class="button" href="https://{{ page.comments.host }}/@{{ page.comments.username }}/{{ page.comments.id }}">Reply via Mastodon></a>
    </p>
    <p id="mastodon-comments-list"><a class="button" id="load-comment">Load comments from Mastodon</a></p>
    <noscript><p>You need JavaScript to view the comments.</p></noscript>
    <script src="/assets/js/purify.min.js"></script>
    <script type="text/javascript">
      function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
     }
  
      document.getElementById("load-comment").addEventListener("click", function() {
        document.getElementById("load-comment").innerHTML = "Loading";
        fetch('https://{{ page.comments.host }}/api/v1/statuses/{{ page.comments.id }}/context')
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            if(data['descendants'] &&
               Array.isArray(data['descendants']) && 
              data['descendants'].length > 0) {
                document.getElementById('mastodon-comments-list').innerHTML = "";
                data['descendants'].forEach(function(reply) {
                  reply.account.display_name = escapeHtml(reply.account.display_name);
                  reply.account.emojis.forEach(emoji => {
                    reply.account.display_name = reply.account.display_name.replace(`:${emoji.shortcode}:`,
                      `<img src="${escapeHtml(emoji.static_url)}" alt="Emoji ${emoji.shortcode}" height="20" width="20" />`);
                  });
                  mastodonComment =
                    `<div class="mastodon-comment">
                       <div class="avatar">
                         <img src="${escapeHtml(reply.account.avatar_static)}" height=60 width=60 alt="">
                       </div>
                       <div class="content">
                         <div class="author">
                           <a href="${reply.account.url}" rel="nofollow">
                             <span>${reply.account.display_name}</span>
                             <span class="disabled">${escapeHtml(reply.account.acct)}</span>
                           </a>
                           <a class="date" href="${reply.uri}" rel="nofollow">
                             ${reply.created_at.substr(0, 10)}
                           </a>
                         </div>
                         <div class="mastodon-comment-content">${reply.content}</div> 
                       </div>
                     </div>`;
                  document.getElementById('mastodon-comments-list').appendChild(DOMPurify.sanitize(mastodonComment, {'RETURN_DOM_FRAGMENT': true}));
                });
            } else {
              document.getElementById('mastodon-comments-list').innerHTML = "<p>Not comments found</p>";
            }
          });
        });
    </script>
  </div>
```

{% endraw %}

Second I needed to change the exising ```post.html``` file locaed in the ```_layouts``` folder. I added the following code which will tell Jekyll to use the ```fediverse_comments.html``` file when it is rendering the post if the ```comments``` variable is set in the front matter of the post (more on that in a bit).

{% raw %}

```liquid
{% if page.comments %}
    {% include social/fediverse_comments.html %}
{%-endif %}
```

{% endraw %}

You can add this code anywhere in the ```post.html``` file. I added it at the bottom of the file since I wanted the comments to be at the bottom of the post.

Here is what my ```post.html``` file looks like.

### \_layouts\post.html

{% raw %}

```html
<article {% if page.feature-img or page.color %} class="feature-image" {% endif %} itemscope itemtype="http://schema.org/BlogPosting">
  <header id="main" style="">
    <div class="title-padder">
      {% if page.hide_title %}
      <div class="feature-image-padding"></div>
      {% else %}
      <h1 id="{{ page.title | cgi_escape }}" class="title">{{ page.title }}</h1>
      {% include blog/post_info.html author=page.author date=page.date %}
      {% endif %}
    </div>
  </header>

  <section class="post-content">
  {% if page.bootstrap %}
    <div class="bootstrap-iso">
    {% endif %}
      {{ content }}
    {% if page.bootstrap %}
    </div>
  {% endif %}
  </section>

   <!-- Tag list -->
  {% capture tag_list %}{{ page.tags | join: "|"}}{% endcapture %}
  {% include default/tags_list.html tags=tag_list %}

  <!-- Social media shares -->
  {% include social/share_buttons.html %}

</article>

<!-- Fediverse -->
{%- if page.comments -%}
{%- include social/fediverse_comments.html -%}
{%- endif -%}

<!--Utterances-->
{% if site.comments.utterances.repo and site.comments.utterances.issue-term %} {% include social/utterances.html %} {% endif %}

<!-- Cusdis -->
{% if site.comments.cusdis_app_id or site.cusdis_app_id %}{% include social/cusdis.html %}{% endif %}

<!-- Disqus -->
{% if site.comments.disqus_shortname or site.theme_settings.disqus_shortname or site.disqus_shortname %}
{% include social/disqus.html %}{% endif %}

<!-- Post navigation -->
{% if site.post_navigation  or site.theme_settings.post_navigation %}
{% include blog/post_nav.html %}
{% endif %}

<!-- To change color of links in the page -->
<style>
  header#main {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
  }
  
  {% if page.color %}
  {% comment %}.feature-image a { color: {{ page.color }} !important; }{% endcomment %}
  {% comment %}div#post-nav a { color: {{ page.color }} !important; }{% endcomment %}
  {% comment %}footer a { color: {{ page.color }} !important; }{% endcomment %}
  {% comment %}.site-header nav a:hover {  color: {{ page.color }} !important; }{% endcomment %}
  header#main { 
      background-color: {{ page.color }} !important;
      background-image: url('{{ site.color_image | relative_url }}');
  }
  {% endif %}
  
  {% if page.feature-img %}
  header#main { background-image: url('{{ page.feature-img | relative_url }}'); }
  {% endif %}
</style>
{% endif %}
```

{% endraw %}

## Enabling Comments on a Post

Now that we have the code in place to render the comments we need to tell Jekyll to render the comments on a post. To do this we need to add the ```comments``` variable to the front matter of the post.

Before that though, you will need to first create a post on Mastodon for the article (meaning you will have to come back and edit the post with the id) that you will be creating comments for. This is because the comments are tied to the post on Mastodon. After that post is created you will need to get the ID of the post. You can get the ID by going to the post on Mastodon and looking at the URL. The ID will be the number at the end of the URL. For example, if the URL is ```https://iosdev.space/@kylewritescode/106000000000000000``` the ID is ```106000000000000000```. Once you have the ID you can add the ```comments``` variable to the front matter of the post.

Here is an example of what the front matter of a post would look like.

```
comments:
  host: iosdev.space
  username: kylewritescode 
  id: 109325166591243911  
```

Host is the domain of the instance you want to pull comments from (the instance you're on). Username is the username of the user who created the post (you). Id is the id of the post. You can find the id of the post by going to the post on the instance and looking at the url. The id is the number at the end of the url.

And that is all! You should now have comments on your Jekyll site using Mastodon. If you have any questions or comments feel free to reach out to me on Mastodon [@kylewritecode@iosdev.space](https://iosdev.space/@kylewritescode).
