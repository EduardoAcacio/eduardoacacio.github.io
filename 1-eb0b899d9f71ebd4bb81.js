(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(134),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(140),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(43);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},136:function(e,t,n){"use strict";var a=n(141),r=n(0),i=n.n(r),s=n(4),o=n.n(s),c=n(142),u=n.n(c),l=n(135),d=(n(137),n(6)),m=n.n(d),p=[{title:"Home",link:"/"},{title:"Projetos",link:"/projects"},{title:"Curriculo",link:"/curriculo"},{title:"Posts",link:"/posts"}],f=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMenu=function(){n.setState(function(e){return{isMenuOpen:!e.isMenuOpen}})},n.render=function(){var e=n.props.siteTitle,t=n.state.isMenuOpen?"is-active":"";return i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(l.Link,{className:"navbar-item is-size-4",to:"/"},e),i.a.createElement("button",{className:"navbar-burger has-text-light "+t,type:"button","aria-label":"menu",onClick:n.handleMenu},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+t},i.a.createElement("div",{className:"navbar-end"},p.map(function(e){return i.a.createElement(l.Link,{className:"navbar-item is-size-5",to:e.link,key:e.title},e.title)})))))},n.state={isMenuOpen:!1},n}return m()(t,e),t}(r.Component),h=(n(155),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Densenvolvedor FullStack, criando apps e sistemas web "},{name:"keywords",content:"JavaScript, Dotnet Core, React, Angular, API, PWA, Node, Asp .Net Core"}]},i.a.createElement("html",{lang:"pt"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/brands.css",integrity:"sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW",crossorigin:"anonymous"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/fontawesome.css",integrity:"sha384-u5J7JghGz0qUrmEsWzBQkfvc8nK3fUT7DCaQzNQ+q4oEXhGSx+P2OqjWsfIRB8QT",crossorigin:"anonymous"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),t)},data:a})});h.propTypes={children:o.a.node.isRequired};t.a=h},140:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},141:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Acacio"}}}}},153:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(63),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,n){}}]);
//# sourceMappingURL=1-eb0b899d9f71ebd4bb81.js.map