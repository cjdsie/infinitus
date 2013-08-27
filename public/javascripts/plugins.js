
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);



/*! Tab.js */
(function ($) {
  // hash change handler
  function hashchange () {
    var hash = window.location.hash
      , el = $('ul.tabs [href*="' + hash + '"]')
      , content = $(hash)

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);



/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);




/*! flexnav https://github.com/indyplanets/flexnav http://unlicense.org/ 2013-06-04 */
!function(){$.fn.flexNav=function(a){var b,c,d,e,f,g;return g=$.extend({animationSpeed:100},a),b=$(this),e=!1,d=!1,b.find("li").each(function(){return $(this).has("ul").length?$(this).addClass("item-with-ul").find("ul").hide():void 0}),b.data("breakpoint")&&(c=b.data("breakpoint")),f=function(){return $(window).width()<=c?(b.removeClass("lg-screen").addClass("sm-screen"),$(".one-page li a").on("click",function(){return b.removeClass("show")}),$(".item-with-ul").off()):(b.removeClass("sm-screen").addClass("lg-screen"),b.removeClass("show"),$(".item-with-ul").on("mouseenter",function(){return $(this).find(">ul").addClass("show").stop(!0,!0).slideDown(g.animationSpeed)}).on("mouseleave",function(){return $(this).find(">ul").removeClass("show").stop(!0,!0).slideUp(g.animationSpeed)}))},$(".item-with-ul, .menu-button").append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'),$(".menu-button, .menu-button .touch-button").on("touchstart mousedown",function(a){return a.preventDefault(),a.stopPropagation(),console.log(d),$(this).on("touchmove mousemove",function(a){var b;return b=a.pageX,d=!0,$(window).off("touchmove mousemove")})}).on("touchend mouseup",function(a){var c;return a.preventDefault(),a.stopPropagation(),d=!1,c=$(this).parent(),d===!1&&console.log("clicked"),e===!1?(b.addClass("show"),e=!0):e===!0?(b.removeClass("show"),e=!1):void 0}),$(".touch-button").on("touchstart mousedown",function(a){return a.stopPropagation(),a.preventDefault(),$(this).on("touchmove mousemove",function(){return d=!0,$(window).off("touchmove mousemove")})}).on("touchend mouseup",function(a){var c;return a.preventDefault(),a.stopPropagation(),c=$(this).parent(".item-with-ul").find(">ul"),b.hasClass("lg-screen")===!0&&$(this).parent(".item-with-ul").siblings().find("ul.show").removeClass("show").hide(),c.hasClass("show")===!0?c.removeClass("show").slideUp(g.animationSpeed):c.hasClass("show")===!1?c.addClass("show").slideDown(g.animationSpeed):void 0}),$(".item-with-ul *").focus(function(){return $(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(),$(this).parent(".item-with-ul").find(">ul").addClass("open").show()}),f(),$(window).on("resize",f)}}.call(this);


/*global jQuery *//*jshint multistr:true browser:true *//*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";i.parentNode.insertBefore(r,i);t&&e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);


/*! Superslides - v0.5.2 - 2013-01-20
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(){var e,t,n;n="superslides",e=jQuery,t=function(t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=this;return n==null&&(n={}),this.options=e.extend({play:!1,slide_speed:"normal",slide_easing:"linear",pagination:!0,hashchange:!1,scrollable:!0,classes:{preserve:"preserve",nav:"slides-navigation",container:"slides-container",pagination:"slides-pagination"}},n),A=this,u=e(window),this.el=e(t),i=e("."+this.options.classes.container,t),r=i.children(),o=e("<nav>",{"class":this.options.classes.pagination}),s=e("<div>",{"class":"slides-control"}),y=1,v=!1,_=u.width(),d=u.height(),m=function(){if(v)return;return y=p(),E(),D.mobile=/mobile/i.test(navigator.userAgent),s=i.wrap(s).parent(".slides-control"),k(),C(),O(),a(),D.start(),D},k=function(){return e("body").css({margin:0}),D.el.css({position:"relative",overflowX:"hidden",width:"100%"}),s.css({position:"relative",transform:"translate3d(0)"}),i.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative"}),i.find("img").not("."+D.options.classes.preserve).css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1"})},C=function(){e("body").css({margin:0,overflow:"hidden"}),D.el.css({height:d}),s.css({width:_*y,left:-_});if(D.options.scrollable)return r.each(function(){if(e(".scrollable",this).length)return;return e(this).wrapInner('<div class="scrollable" />'),e(this).find("img").not("."+D.options.classes.preserve).insertBefore(e(".scrollable",this))})},N=function(){return r.is("img")&&(r.wrap("<div>"),r=i.children()),r.css({display:"none",position:"absolute",overflow:"hidden",top:0,left:_,zIndex:0}),c(r)},O=function(){return D.size()>1?e("."+D.options.classes.nav).show():e("."+D.options.classes.nav).hide()},L=function(){return e("."+D.options.classes.nav+" a").each(function(){return e(this).hasClass("next")?this.hash=A.next:this.hash=A.prev})},f=function(t){return t>=0||(t=D.size()-1),o.append(e("<a>",{href:"#"+t,"class":D.current===o.children().length?"current":void 0}))},a=function(){var n,i;if(!D.options.pagination||D.size()===1)return;return e(t).find("."+D.options.classes.pagination).length?(i=o.children().last().index(),n=r):(i=0,n=new Array(D.size()-i),o=o.appendTo(D.el)),e.each(n,function(e){return f(e)})},g=function(t,n){return e("<img>",{src:t.attr("src")}).load(function(){if(n instanceof Function)return n(this)})},T=function(e){var t;return t=_/e.data("aspect-ratio"),t>=d?e.css({top:-(t-d)/2}):e.css({top:0})},x=function(e){var t;return t=d*e.data("aspect-ratio"),t>=_?e.css({left:-(t-_)/2}):e.css({left:0})},l=function(e){if(!e.data("aspect-ratio")){g(e,function(t){return e.removeAttr("width").removeAttr("height"),e.data("aspect-ratio",t.width/t.height),l(e)});return}return _/d>=e.data("aspect-ratio")?e.css({height:"auto",width:"100%"}):e.css({height:"100%",width:"auto"}),x(e),T(e)},c=function(t){return t.each(function(t){return e(this).width(_).height(d),e(this).css({left:_}),l(e("img",this).not("."+A.options.classes.preserve))})},p=function(){return D.size()===1?1:3},b=function(){var e;return e=D.current+1,e===D.size()&&(e=0),e},S=function(){var e;return e=D.current-1,e<0&&(e=D.size()-1),e},M=function(e){switch(!0){case/next/.test(e):return b();case/prev/.test(e):return S();case/\d/.test(e):return e;default:return!1}},w=function(e){e==null&&(e=window.location.hash),e=e.replace(/^#/,"");if(e)return+e},E=function(e){return e==null&&(e=-1),v&&D.current>=0&&e<0&&(e=D.current),D.current=e,D.next=b(),D.prev=S(),!1},h=function(t,n){var u,a,f,l,c;c=M(t);if(c>D.size()-1)return;f=_*2,u=-f,a=D.current;if(t==="prev"||t<a)f=0,u=0;return l=f,r.removeClass("current").eq(c).addClass("current").css({left:l,display:"block"}),o.children().removeClass("current").eq(c).addClass("current"),s.animate({useTranslate3d:D.mobile,left:u},D.options.slide_speed,D.options.slide_easing,function(){return E(c),D.size()>1&&(s.css({left:-_}),r.eq(c).css({left:_,zIndex:2}),a>=0&&r.eq(a).css({left:_,display:"none",zIndex:0})),D.options.hashchange&&(window.location.hash=D.current),typeof n=="function"&&n(),L(),D.animating=!1,v?i.trigger("animated.slides"):(v=!0,e("body").css("overflow","visible"),i.fadeIn("fast"),i.trigger("init.slides"))})},this.$el=e(t),this.animate=function(e,t){e==null&&(e="next");if(D.animating)return;return D.animating=!0,h(e,t)},this.update=function(){return E(D.current),a(),O(),i.trigger("updated.slides")},this.destroy=function(){return e(t).removeData()},this.size=function(){return i.children().length},this.stop=function(){return clearInterval(D.play_id),delete D.play_id,i.trigger("stopped.slides")},this.start=function(){return N(),D.options.hashchange&&u.trigger("hashchange"),D.animate("next"),D.options.play&&(D.play_id&&D.stop(),D.play_id=setInterval(function(){return D.animate("next")},D.options.play)),i.trigger("started.slides")},u.on("hashchange",function(e){var t;t=w();if(t>=0&&t!==D.current)return D.animate(t)}).on("resize",function(e){return _=u.width(),d=u.height(),C(),c(r)}),e(document).on("click","."+this.options.classes.nav+" a",function(t){return A.options.hashchange||t.preventDefault(),A.stop(),e(this).hasClass("next")?A.animate("next"):A.animate("prev")}).on("click","."+this.options.classes.pagination+" a",function(e){var t;if(!A.options.hashchange)return e.preventDefault(),t=w(this.hash),A.animate(t)}),m()},e.fn[n]=function(r,i){var s;return s=[],this.each(function(){var o,u,a;o=e(this),u=o.data(n),a=typeof r=="object"&&r,u||(s=o.data(n,u=new t(this,a)));if(typeof r=="string"){s=u[r];if(typeof s=="function")return s=s.call(this,i)}}),s}}).call(this);


/*
jquery.animate-enhanced plugin v0.99
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(c,I,J){function O(a,b,c,f,l,k,h,p,q){var t=!1,h=!0===h&&!0===p,b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};for(var p=b.meta,m=b.original,g=b.properties,P=b.secondary,B=r.length-1;0<=B;B--){var D=r[B]+"transition-property",E=r[B]+"transition-duration",i=r[B]+"transition-timing-function",c=h?r[B]+"transform":c;t&&(m[D]=a.css(D)||"",m[E]=a.css(E)||"",m[i]=a.css(i)||"");P[c]=h?(!0===q||!0===y&&!1!==q)&&K?"translate3d("+p.left+"px, "+p.top+
"px, 0)":"translate("+p.left+"px,"+p.top+"px)":k;g[D]=(g[D]?g[D]+",":"")+c;g[E]=(g[E]?g[E]+",":"")+f+"ms";g[i]=(g[i]?g[i]+",":"")+l}return b}function z(a){for(var c in a)return!1;return!0}function G(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function L(a){var c=!0;a.each(function(a,f){return c=c&&f.ownerDocument});return c}var Q="top right bottom left opacity height width".split(" "),H=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],R=["avoidTransforms","useTranslate3d","leaveTransforms"],
S=/^([+-]=)?([\d+-.]+)(.*)$/,T=/([A-Z])/g,U={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},M=null,F=!1,A=(document.body||document.documentElement).style,N=void 0!==A.WebkitTransition||void 0!==A.MozTransition||void 0!==A.OTransition||void 0!==A.transition,K="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=K;c.expr&&c.expr.filters&&(M=c.expr.filters.animated,c.expr.filters.animated=function(a){return c(a).data("events")&&c(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?
!0:M.call(this,a)});c.extend({toggle3DByDefault:function(){return y=!y},toggleDisabledByDefault:function(){return F=!F}});c.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),c={x:0,y:0};if(a)for(var n=r.length-1;0<=n;n--){var f=a.getPropertyValue(r[n]+"transform");if(f&&/matrix/i.test(f)){a=f.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return c};c.fn.animate=function(a,b,n,f){var a=a||{},l=!("undefined"!==
typeof a.bottom||"undefined"!==typeof a.right),k=c.speed(b,n,f),h=this,p=0,q=function(){p--;0===p&&"function"===typeof k.complete&&k.complete.apply(h,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:F)))if(!(t=!N))if(!(t=z(a))){var m;a:{for(m in a)if(("width"==m||"height"==m)&&("show"==a[m]||"hide"==a[m]||"toggle"==a[m])){m=!0;break a}m=!1}t=m||0>=k.duration||!0===c.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms}return t?I.apply(this,arguments):
this[!0===k.queue?"queue":"each"](function(){var g=c(this),b=c.extend({},k),h=function(b){var f=g.data("jQe")||{original:{}},e={};if(2==b.eventPhase){if(!0!==a.leaveTransforms){for(b=r.length-1;0<=b;b--)e[r[b]+"transform"]="";if(l&&"undefined"!==typeof f.meta)for(var b=0,d;d=H[b];++b)e[d]=f.meta[d+"_o"]+"px",c(this).css(d,e[d])}g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(f.original).css(e).data("jQe",null);"hide"===a.opacity&&g.css({display:"none",opacity:""});q.call(this)}},
f={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",
easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},m={},f=f[b.easing||"swing"]?f[b.easing||"swing"]:b.easing||"swing",i;for(i in a)if(-1===c.inArray(i,R)){var n=-1<c.inArray(i,H),j;var d=g,w=a[i],u=i,s=n&&!0!==
a.avoidTransforms;if("d"==u)j=void 0;else if(L(d)){var e=S.exec(w);j="auto"===d.css(u)?0:d.css(u);j="string"==typeof j?G(j):j;"string"==typeof w&&G(w);var s=!0===s?0:j,t=d.is(":hidden"),v=d.translation();"left"==u&&(s=parseInt(j,10)+v.x);"right"==u&&(s=parseInt(j,10)+v.x);"top"==u&&(s=parseInt(j,10)+v.y);"bottom"==u&&(s=parseInt(j,10)+v.y);!e&&"show"==w?(s=1,t&&d.css({display:"LI"==d.context.tagName?"list-item":"block",opacity:0})):!e&&"hide"==w&&(s=0);e?(d=parseFloat(e[2]),e[1]&&(d=("-="===e[1]?
-1:1)*d+parseInt(s,10)),j=d):j=s}else j=void 0;if(e=!0!==a.avoidTransforms)if(e=i,d=j,w=g,L(w)){u=-1<c.inArray(e,Q);if(("width"==e||"height"==e||"opacity"==e)&&parseFloat(d)===parseFloat(w.css(e)))u=!1;e=u}else e=!1;if(e){e=g;d=i;w=b.duration;u=f;j=n&&!0===a.avoidTransforms?j+"px":j;var n=n&&!0!==a.avoidTransforms,s=l,t=!0===a.useTranslate3d,v=(v=e.data("jQe"))&&!z(v)?v:c.extend(!0,{},U),x=j;if(-1<c.inArray(d,H)){var C=v.meta,A=G(e.css(d))||0,y=d+"_o",x=j-A;C[d]=x;C[y]="auto"==e.css(d)?0+x:A+x||0;
v.meta=C;s&&0===x&&(x=0-C[y],C[d]=x,C[y]=0)}e.data("jQe",O(e,v,d,w,u,x,n,s,t))}else m[i]=a[i]}g.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((i=g.data("jQe"))&&!z(i)&&!z(i.secondary)){p++;g.css(i.properties);var F=i.secondary;setTimeout(function(){g.bind("webkitTransitionEnd oTransitionEnd transitionend",h).css(F)})}else b.queue=!1;z(m)||(p++,I.apply(g,[m,{duration:b.duration,easing:c.easing[b.easing]?b.easing:c.easing.swing?"swing":"linear",complete:q,queue:b.queue}]));return!0})};
c.fn.animate.defaults={};c.fn.stop=function(a,b,n){if(!N)return J.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var f=c(this),l=f.data("jQe");if(l&&!z(l)){var k,h={};if(b){if(h=l.secondary,!n&&void 0!==typeof l.meta.left_o||void 0!==typeof l.meta.top_o){h.left=void 0!==typeof l.meta.left_o?l.meta.left_o:"auto";h.top=void 0!==typeof l.meta.top_o?l.meta.top_o:"auto";for(k=r.length-1;0<=k;k--)h[r[k]+"transform"]=""}}else if(!z(l.secondary)){var p=window.getComputedStyle(f[0],null);if(p)for(var q in l.secondary)if(l.secondary.hasOwnProperty(q)&&
(q=q.replace(T,"-$1").toLowerCase(),h[q]=p.getPropertyValue(q),!n&&/matrix/i.test(h[q]))){k=h[q].replace(/^matrix\(/i,"").split(/, |\)$/g);h.left=parseFloat(k[4])+parseFloat(f.css("left"))+"px"||"auto";h.top=parseFloat(k[5])+parseFloat(f.css("top"))+"px"||"auto";for(k=r.length-1;0<=k;k--)h[r[k]+"transform"]=""}}f.unbind("webkitTransitionEnd oTransitionEnd transitionend");f.css(l.original).css(h).data("jQe",null)}else J.apply(f,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);



/*! SimpleStateManager 2013-06-23 */
!function(a,b){"use strict";var c=(a.ssm,{}),d=[],e=!1,f=0,g=null,h=function(){var a=null;f=j();for(var c=0;c<d.length;c++)if(a=d[c],d[c].width>=f){null!==g?g.id!==d[c].id&&(g.onLeave(),g=d[c],g.onEnter()):(g=d[c],g.onEnter()),d[c].onResize();break}e&&(b.getElementById("ssmDebug").innerHTML=f+"px")};c.enableDebug=function(){return e=!0,b.body.innerHTML+='<div id="ssmDebug" style="z-index: 99999999; position: fixed; bottom: 0px; right: 0px; width: 100px; line-height: 30px; font-size: 12px; background: #fff; border: 1px solid #000; text-align: center;">'+f+"px</div>",this},c.addState=function(a){var b={id:i(),width:0,onEnter:function(){},onLeave:function(){},onResize:function(){}};return a=k(b,a),d.push(a),d=l(d,"width"),this},c.removeState=function(a){for(var b=d.length-1;b>=0;b--)d[b].id===a&&d.splice(b,1);return this},c.addStates=function(a){for(var b=a.length-1;b>=0;b--)c.addState(a[b]);return this},c.ready=function(){for(var a=null,b=0;b<d.length;b++)if(a=d[b],d[b].width>=f){g=d[b],g.onEnter();break}return this},c.states=function(){return d};var i=function(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;10>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a},j=function(){var a=0;return self.innerHeight?a=self.innerWidth:b.documentElement&&b.documentElement.clientHeight?a=b.documentElement.clientWidth:b.body&&(a=b.body.clientWidth),a},k=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c},l=function(a,b){return a.sort(function(a,c){var d=a[b],e=c[b];return e>d?-1:d>e?1:0})};f=j(),a.ssm=c,a.attachEvent?a.attachEvent("onresize",h):a.addEventListener&&a.addEventListener("resize",h,!0)}(window,document);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


/* Current Page Plugin */

/* jQuery plugin for setting the class of a particular element to
 * "current" based on the current page. Useful for navigation menus
 * that are part of a server side include for the whole site.
 *
 * By Rob Watts, http://tractionsys.com
 * Version 1.3, May 10, 2011
 *
 * Modified by Chris Osborn, http://tractionsys.com
 * Version 2.0, Dec 16, 2011
 * Now constructs complete URL and compares to current location
 *
 * Provided under the MIT license. Feel free to use it however you like.
 *
 * Example:
 * $("ul.nav a").currentPage();
 *
 * To override defaults, pass in a defaults object:
 * $("ul.nav a").currentPage({
 *    attr: "href",
 *    defaultClass: "selected"
 * });
 *
 */

ME_cpBase = $('base').attr('href');
ME_cpPath = window.location.href;

function ME_cpCompleteURL(base, path, index, uri)
{
  var array;
  var i;
  

  /* This looks stupid but it's the easiest way to make sure uri is a string */
  uri = uri + '';
  
  if (uri.indexOf(':') < 0) {
    if (base == undefined)
      base = path.substr(path.lastIndexOf('/') + 1);

    if (uri.charAt(0) == '/') {
      i = base.indexOf(':');
      i = base.indexOf('/', i + 3);
      uri = base.substr(0, i) + uri;
    }
    else
      uri = base + uri;
  }

  if (uri.search('/\\.\\./') >= 0) {
    array = uri.split('/');
    if (array.length > 3) {
      for (i = 4; i < array.length; i++)
	if (array[i] == '..') {
	  array.splice(i-1, 2);
	  i--;
	}
      for (i = 3; i < array.length && array[i] == '..'; i++)
	;
      if (i - 3)
	array.splice(3, i - 3);
      uri = array.join('/');
    }
  }

  if (uri.charAt(uri.length - 1) == '/')
    uri = uri + index;

  return uri;
}

jQuery.fn.currentPage = function(options) {
  var currentPage = "";
  var thisClass = "";
  var thisHref = "";
  var settings = jQuery.extend({
    defaultClass: "current",       // Default class to add to current link
	attr: "href",              // Default attribute to compare with current page URL (not usually used)
	appendToFirstClass: false, // Append the defaultClass to the first class on the element.
	                              // E.g. class="monkey" becomes class="monkey monkeycurrent"
	indexFile: "index.html"
	}, options);

  currentPage = ME_cpCompleteURL(ME_cpBase, ME_cpPath,
				 settings.indexFile, window.location.href);

  this.each(function() {
      thisHref = ME_cpCompleteURL(ME_cpBase, ME_cpPath, settings.indexFile,
				  $(this).attr(settings.attr));
      thisClass = "";

      if (thisHref == currentPage) {
	if (settings.appendToFirstClass) {
	  /* Conditional to support jQuery 1.6 */
	  if ($(this).attr("class")) 
	    thisClass = $(this).attr("class").split(" ")[0];
	  thisClass = thisClass + settings.defaultClass;
	}
	else 
	  thisClass = settings.defaultClass;

	$(this).addClass(thisClass);
      }
    });
};
