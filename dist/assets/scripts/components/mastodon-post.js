(()=>{var s=document.createElement("template");s.innerHTML=`
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
`,s.id="mastodon-post-template",document.getElementById(s.id)||document.body.appendChild(s);var d=class i extends HTMLElement{static register(e){"customElements"in window&&customElements.define(e||"mastodon-post",i)}async connectedCallback(){this.append(this.template);let e={...await this.data,...this.linkData};this.querySelectorAll("[data-key]").forEach(async t=>{let{key:n}=t.dataset,a=e[n];n==="content"?t.innerHTML=a:typeof a=="string"&&a.startsWith("http")?(t.localName==="a"&&(t.href=a),t.localName==="img"&&(t.src=a)):t.textContent=a})}get template(){return document.getElementById(s.id).content.cloneNode(!0)}get link(){return this.querySelector("a").href}get linkData(){let e=new URL(this.link),t=e.pathname.split("/").filter(n=>n.length);return{url:this.link,hostname:e.hostname,username:t.find(n=>n.startsWith("@")),postId:t.find(n=>!n.startsWith("@"))}}get endpoint(){return`https://${this.linkData.hostname}/api/v1/statuses/${this.linkData.postId}`}get data(){return fetch(this.endpoint).then(e=>e.json())}};d.register();})();
