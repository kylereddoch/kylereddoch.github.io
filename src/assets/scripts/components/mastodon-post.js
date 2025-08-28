const mastodonPostTemplate=document.createElement("template");mastodonPostTemplate.innerHTML=`
<figure>
  <blockquote data-key="content"></blockquote>
  <figcaption>
    <cite>
      <a data-key="url"><span data-key="username"></span>@<span data-key="hostname"></span></a>
    </cite>
    <dl>
      <dt>Reposts</dt><dd data-key="reblogs_count"></dd>
      <dt>Replies</dt><dd data-key="replies_count"></dd>
      <dt>Favourites</dt><dd data-key="favourites_count"></dd>
    </dl>
  </figcaption>
</figure>
`,mastodonPostTemplate.id="mastodon-post-template",document.getElementById(mastodonPostTemplate.id)||document.body.appendChild(mastodonPostTemplate);class MastodonPost extends HTMLElement{static register(e){"customElements"in window&&customElements.define(e||"mastodon-post",MastodonPost)}async connectedCallback(){this.append(this.template);const e={...await this.data,...this.linkData};this.querySelectorAll("[data-key]").forEach(async t=>{const{key:s}=t.dataset,n=e[s];s==="content"?t.innerHTML=n:typeof n=="string"&&n.startsWith("http")?(t.localName==="a"&&(t.href=n),t.localName==="img"&&(t.src=n)):t.textContent=n})}get template(){return document.getElementById(mastodonPostTemplate.id).content.cloneNode(!0)}get link(){return this.querySelector("a").href}get linkData(){const e=new URL(this.link),t=e.pathname.split("/").filter(e=>e.length);return{url:this.link,hostname:e.hostname,username:t.find(e=>e.startsWith("@")),postId:t.find(e=>!e.startsWith("@"))}}get endpoint(){return`https://${this.linkData.hostname}/api/v1/statuses/${this.linkData.postId}`}get data(){return fetch(this.endpoint).then(e=>e.json())}}MastodonPost.register()
