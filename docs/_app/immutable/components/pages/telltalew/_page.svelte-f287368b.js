import{S as q,i as N,s as P,k as w,a as S,l as y,m as b,h as c,c as Y,n as _,b as g,G as v,t as C,d as z,f as E,H,P as Q,Q as U,R as V,g as W,B as Z,T as $,q as x,r as T,u as B,L as K,I,U as J,e as R,V as X,M as ee}from"../../../chunks/index-370d7403.js";import{w as te}from"../../../chunks/index-5afc817b.js";var M;const ae=(M=window.localStorage.getItem("story_id"))!=null?M:"1",j=te(ae);j.subscribe(l=>{window.localStorage.setItem("story_id",l),console.log(l)});let ie=[{id:"1",message:"You and your grandma is out taking a walk in the forest.",img:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/silhouettes-of-two-people-walking-away-down-forest-path-cavan-images.jpg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"After walking for a little bit the path splits, wich way will you choose?",img:"https://billmunncoaching.com/wp-content/uploads/2014/06/split-path-representing-the-multiple-routes-we-can-take-to-success.jpg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"},{id:"16",text:"Through the dense part of the forest"}]},{id:"3",message:"You take the left path. The forest gradually grows darker and you can't help but get a feeling that you are being watched. Suddenly you hear a sound comming from behind you, what do you do?",img:"https://wallpapercrafter.com/th800/163702-silhouette-artwork-forest-night-horror-Yeti-creepy-dark-fictional-creatures-creature-deep-forest-spooky-frontal-view.jpg",choices:[{id:"5",text:"Look behind you."},{id:"9",text:"Run. Everyman for themselves"}]},{id:"4",message:"You walk the right path. The path is calm and tranquil and you have a good time talking to your grandma. When a bear suddenly jumps out in front of you!",img:"https://files.worldwildlife.org/wwfcmsprod/images/Brown_Bear_/story_full_width/3box0qwlkk_brownbear_hero.jpg",choices:[{id:"7",text:"Fight the bear"},{id:"10",text:"Throw grandma to the bear."}]},{id:"5",message:"Behind you to your horror you see a big bad bear! What do you do now?",img:"https://www.collinsdictionary.com/images/full/brownbear_259894163.jpg",choices:[{id:"6",text:"Fight the bear"},{id:"10",text:"Push your grandma and run away"}]},{id:"6",message:"The bear goes in for attack, what do you do?",img:"https://www.cnet.com/a/img/resize/79c6633a7eec60f47f847e964226a058324f88ca/hub/2015/08/28/ed717fd4-ae69-48b9-bef8-d06a30718b3d/grizzly-bear.jpg?auto=webp&fit=crop&height=675&width=1200",choices:[{id:"7",text:"Tackle the bear."},{id:"8",text:"Dodge it's attack and counter attack."}]},{id:"7",message:"You are mauled to death by the bear.",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://thumbs.gfycat.com/SafeBlaringAmericanquarterhorse-size_restricted.gif" width="480"></iframe></div>',choices:[{id:"1",text:"Start over?"}]},{id:"8",message:"You dodge the bear! What now?",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://i.pinimg.com/originals/f9/ed/a8/f9eda8f91763ba8b2def51a79bf5343e.gif" width="480"></iframe></div>',choices:[{id:"7",text:"Wrestle the bear."},{id:"10",text:"Realising your mistake and you give grandma to the big bad bear and run away."}]},{id:"9",message:"You trip and hit your head on a rock and die.",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://media.tenor.com/tKLtM4Ym7YoAAAAC/tim-bernardes-o-terno.gif" width="480"></iframe></div>',choices:[{id:"1",text:"Start Over?"}]},{id:"10",message:"You throw grandma at the bear, you hear her old lady scream echo through the forest as you run away from the bear.",img:"https://media.istockphoto.com/id/183114652/photo/neurotic-grandma.jpg?s=170667a&w=0&k=20&c=ioFH6gOAMgeS_d7aQSjfLHB1KatP24Eor0_CC8yuZPQ=",choices:[{id:"7",text:"Go back for grandma?"},{id:"11",text:"Continue running"}]},{id:"11",message:"The screams still echo through the forest when they suddenly stop. ",img:"https://media.gettyimages.com/id/104566865/photo/businessman-running-looking-over-shoulder.jpg?s=612x612&w=gi&k=20&c=eThVjlLFLoLMA0FZROT2kxJXUTf_w4iQkUUZvtQp3xw= ",choices:[{id:"7",text:"Go back to see what happened?"},{id:"15",text:"Continue forward."}]},{id:"12",message:"You can see the end of the forest. ",img:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/light-at-the-end-of-the-forest-dawn-van-doorn.jpg",choices:[{id:"2",text:"Take another stroll through the forest?"},{id:"13",text:"Run towards the end of the forest?"}]},{id:"13",message:"You make it out of the forest, you feel refreshed and happy.",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://steamuserimages-a.akamaihd.net/ugc/940581010213045659/7F123BDEAF366C1E3DCC3925C801ABA7E5E4CB5C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]},{id:"14",message:"You make it out of the forest, you feel dreadful.",img:"https://bahaiteachings.s3.us-west-1.amazonaws.com/2017/11/That-Spreading-Sense-Dread-We-Feel.jpg",choices:[{id:"1",text:"Reset!"}]},{id:"15",message:"You can see the end of the forest. ",img:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/light-at-the-end-of-the-forest-dawn-van-doorn.jpg",choices:[{id:"7",text:"Take another stroll through the forest?"},{id:"14",text:"Run towards the end of the forest?"}]},{id:"16",message:"The forest is hard to walk trough.",img:"https://www.mountainphotography.com/images/xl/20081029-Fox-Glacier-Forest.jpg",choices:[{id:"17",text:"Go back to the path?"},{id:"12",text:"Continue forward!"}]},{id:"17",message:"You are back at where the path splits.",img:"https://billmunncoaching.com/wp-content/uploads/2014/06/split-path-representing-the-multiple-routes-we-can-take-to-success.jpg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]}];function oe(l){const e=l-1;return e*e*e+1}function A(l,{delay:e=0,duration:r=400,easing:i=oe,x:o=0,y:n=0,opacity:h=0}={}){const t=getComputedStyle(l),a=+t.opacity,d=t.transform==="none"?"":t.transform,p=a*(1-h);return{delay:e,duration:r,easing:i,css:(m,s)=>`
			transform: ${d} translate(${(1-m)*o}px, ${(1-m)*n}px);
			opacity: ${a-p*s}`}}function F(l,e,r){const i=l.slice();return i[4]=e[r],i}function se(l){let e,r,i,o;return{c(){e=w("p"),r=x("STORY FOR ID "),i=x(l[0]),o=x(" MISSING")},l(n){e=y(n,"P",{});var h=b(e);r=T(h,"STORY FOR ID "),i=T(h,l[0]),o=T(h," MISSING"),h.forEach(c)},m(n,h){g(n,e,h),v(e,r),v(e,i),v(e,o)},p(n,h){h&1&&B(i,n[0])},d(n){n&&c(e)}}}function re(l){let e,r,i,o=l[1].message+"",n,h,t,a=l[1].img&&D(l),d=l[1].html&&L(l),p=l[1].choices,m=[];for(let s=0;s<p.length;s+=1)m[s]=O(F(l,p,s));return{c(){a&&a.c(),e=S(),d&&d.c(),r=S(),i=w("p"),n=x(o),h=S(),t=w("div");for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){a&&a.l(s),e=Y(s),d&&d.l(s),r=Y(s),i=y(s,"P",{});var u=b(i);n=T(u,o),u.forEach(c),h=Y(s),t=y(s,"DIV",{class:!0});var f=b(t);for(let k=0;k<m.length;k+=1)m[k].l(f);f.forEach(c),this.h()},h(){_(t,"class","row svelte-n92ka1")},m(s,u){a&&a.m(s,u),g(s,e,u),d&&d.m(s,u),g(s,r,u),g(s,i,u),v(i,n),g(s,h,u),g(s,t,u);for(let f=0;f<m.length;f+=1)m[f].m(t,null)},p(s,u){if(s[1].img?a?a.p(s,u):(a=D(s),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),s[1].html?d?d.p(s,u):(d=L(s),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null),u&2&&o!==(o=s[1].message+"")&&B(n,o),u&6){p=s[1].choices;let f;for(f=0;f<p.length;f+=1){const k=F(s,p,f);m[f]?m[f].p(k,u):(m[f]=O(k),m[f].c(),m[f].m(t,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=p.length}},d(s){a&&a.d(s),s&&c(e),d&&d.d(s),s&&c(r),s&&c(i),s&&c(h),s&&c(t),K(m,s)}}}function D(l){let e,r,i;return{c(){e=w("img"),this.h()},l(o){e=y(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){I(e.src,r=l[1].img)||_(e,"src",r),_(e,"alt",i=l[1].message),_(e,"class","svelte-n92ka1")},m(o,n){g(o,e,n)},p(o,n){n&2&&!I(e.src,r=o[1].img)&&_(e,"src",r),n&2&&i!==(i=o[1].message)&&_(e,"alt",i)},d(o){o&&c(e)}}}function L(l){let e,r=l[1].html+"",i;return{c(){e=new J(!1),i=R(),this.h()},l(o){e=X(o,!1),i=R(),this.h()},h(){e.a=i},m(o,n){e.m(r,o,n),g(o,i,n)},p(o,n){n&2&&r!==(r=o[1].html+"")&&e.p(r)},d(o){o&&c(i),o&&e.d()}}}function O(l){let e,r=l[4].text+"",i,o,n;function h(){return l[3](l[4])}return{c(){e=w("button"),i=x(r)},l(t){e=y(t,"BUTTON",{});var a=b(e);i=T(a,r),a.forEach(c)},m(t,a){g(t,e,a),v(e,i),o||(n=ee(e,"click",h),o=!0)},p(t,a){l=t,a&2&&r!==(r=l[4].text+"")&&B(i,r)},d(t){t&&c(e),o=!1,n()}}}function G(l){let e,r,i,o;function n(a,d){return a[1]?re:se}let h=n(l),t=h(l);return{c(){e=w("div"),t.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var d=b(e);t.l(d),d.forEach(c),this.h()},h(){_(e,"class","container svelte-n92ka1")},m(a,d){g(a,e,d),t.m(e,null),o=!0},p(a,d){h===(h=n(a))&&t?t.p(a,d):(t.d(1),t=h(a),t&&(t.c(),t.m(e,null)))},i(a){o||(a&&Q(()=>{i&&i.end(1),r=U(e,A,{x:800,duration:750}),r.start()}),o=!0)},o(a){r&&r.invalidate(),a&&(i=V(e,A,{x:-800,duration:750})),o=!1},d(a){a&&c(e),t.d(),a&&i&&i.end()}}}function le(l){let e,r,i,o,n=l[0],h=G(l);return{c(){e=w("body"),r=S(),i=w("main"),o=w("div"),h.c(),this.h()},l(t){e=y(t,"BODY",{});var a=b(e);a.forEach(c),r=Y(t),i=y(t,"MAIN",{class:!0});var d=b(i);o=y(d,"DIV",{class:!0});var p=b(o);h.l(p),p.forEach(c),d.forEach(c),this.h()},h(){_(o,"class","grid svelte-n92ka1"),_(i,"class","svelte-n92ka1")},m(t,a){g(t,e,a),g(t,r,a),g(t,i,a),v(i,o),h.m(o,null)},p(t,[a]){a&1&&P(n,n=t[0])?(W(),C(h,1,1,Z),z(),h=G(t),h.c(),E(h,1),h.m(o,null)):h.p(t,a)},i(t){E(h)},o(t){C(h)},d(t){t&&c(e),t&&c(r),t&&c(i),h.d(t)}}}function ne(l,e,r){let i,o,n;H(l,j,t=>r(2,n=t));const h=t=>{$(j,n=t.id,n)};return l.$$.update=()=>{l.$$.dirty&4&&r(0,i=n),l.$$.dirty&1&&r(1,o=ie.find(t=>t.id==i))},[i,o,n,h]}class ce extends q{constructor(e){super(),N(this,e,ne,le,P,{})}}export{ce as default};
