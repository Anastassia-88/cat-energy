function pixelGlass(){"use strict";var p,d=document,b="controls-panel",y=[],a="pg",t=["none","invert"],e=["off","on"],v={state:u("state",e[1]),filter:u("filter",t[0]),opacity:u("opacity",.5)},g={state:{elem:d.documentElement,attr:"data"},filter:{elem:d.body,attr:"data"},opacity:{elem:d.body,attr:"style"}},i={elemTag:"button",elemText:"on",listName:"states",itemName:"state",target:g.state,type:"button",list:e,canDisableAll:!0,attrs:{tabindex:1}},l={elemTag:"button",elemText:"invert",listName:"filters",itemName:"filter",target:g.filter,type:"button",list:t,attrs:{tabindex:2}},r={itemName:"opacity",type:"number",target:g.opacity,setAttr:"style",attrs:{min:0,max:1,step:.1,tabindex:3}};function s(t){t.listName;var e=t.itemName,o=t.elemTag,a=t.elemText,n=t.type,i=t.list,l=(t.action,v[e]),r=t.attrs,s=i.indexOf(l),u=t.canDisableAll,c=e,f=d.createElement(o);if(E(f,[b+"__control",b+"__control--"+n]),f.setAttribute("type",n),f.setAttribute("id",c),_(f,"state-num",s),r)for(var m in r)f.setAttribute(m,r[m]);"button"===o&&(f.innerHTML=a),u||y.push(f),p.appendChild(f),f.onclick=function(){t.target&&(l=i[s=+!s],_(f,"state-num",s),_(t.target.elem,e,l),A(e,l),u&&!0===u&&("off"===l?(function(){for(var t in g){var e=g[t];"style"===e.attr&&(e.elem.style[t]="")}}(),h()):(x(),y.forEach(function(t){t.removeAttribute("disabled")}))))}}function h(){y.forEach(function(t){t.setAttribute("disabled","")})}function u(t,e){var o=[a,t].join("-");return localStorage[o]||e}function A(t,e){var o=[a,t].join("-");localStorage[o]=e}function x(){for(var t in g){var e=g[t],o=v[t];"style"===e.attr&&(e.elem.style[t]=o)}}function _(t,e,o){t&&(e="data-"+e,t.setAttribute(e,o))}function E(e,t){e&&0<t.length&&t.forEach(function(t){e.classList.add(t)})}(function(){var t,e,o,a=d.documentElement;if(e="has-sticky-point",(t=d.body)&&(e="data-"+e,void 0!==t.getAttribute(e)&&null!==t.getAttribute(e))){var n=d.querySelector(".sticky-point");n&&!localStorage["pg-released"]&&(a=n),v.state="off"}(p=d.createElement("div")).classList.add(b),a.appendChild(p),["top","right","bottom","left"].forEach(function(t){var e=u(t,"");e&&(p.style[t]=e)}),s(i),s(l),function(t){var e=t.itemName,o=t.attrs,a=t.type,n=t.setAttr,i=t.canDisableAll,l=e,r=d.createElement("input");for(var s in E(r,[b+"__control",b+"__control--"+a]),r.setAttribute("type",a),r.setAttribute("id",l),o)r.setAttribute(s,o[s]);r.setAttribute("value",v[e]),i||y.push(r),p.appendChild(r),r.oninput=function(){"style"===n&&(t.target.elem.style[e]=this.value,A(e,this.value))}}(r),E(o=d.createElement("button"),[b+"__control",b+"__control--drag-n-drop"]),o.setAttribute("type","button"),o.innerHTML=" ",p.appendChild(o),o.onmousedown=function(){this.offsetTop;var a=p.clientWidth-this.clientWidth,t=getComputedStyle(p);p.style.top=t.top,p.style.left=t.left,p.style.right="auto",p.style.bottom="auto",d.onmousemove=function(t){var e=t.clientX-a+"px",o=t.clientY+"px";p.style.left=e,p.style.top=o}},o.onmouseup=function(){var t=getComputedStyle(p),e=+t.left.replace(/px/,""),o=+t.right.replace(/px/,""),a=+t.top.replace(/px/,""),n=+t.bottom.replace(/px/,"");o<e?(A("left","auto"),A("right",t.right),p.style.right=t.right,p.style.left="auto"):(A("left",t.left),A("right","auto")),n<a?(A("top","auto"),A("bottom",t.bottom),p.style.bottom=t.bottom,p.style.top="auto"):(A("top",t.top),A("bottom","auto")),d.onmousemove=null}})(),function(){for(var t in g){var e=g[t],o=v[t];"data"===e.attr&&_(e.elem,t,o)}"off"===v.state&&h()}(),"on"===v.state&&x()}window.onload=function(){pixelGlass()};