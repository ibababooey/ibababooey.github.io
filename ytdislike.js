(function(e,t){"use strict";function f(e){o[o.length]=e}function l(e){var t=new RegExp("\\b"+e+"\\b");s.className=s.className.replace(t,"")}function c(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function E(){var t=e.innerWidth||s.clientWidth,n=e.outerWidth||e.screen.width;h.screen.innerWidth=t,h.screen.outerWidth=n;var r=e.outerWidth||s.clientWidth;s.className=s.className.replace(/ (w|lt|portrait|no-portrait|landscape|no-landscape)-\d+/g,""),f("w-"+Math.round(r/100)*100),c(u.screens,function(e){r<=e&&f("lt-"+e)});var i=e.innerHeight||s.clientHeight,o=e.outerHeight||e.screen.height;h.screen.innerHeight=i,h.screen.outerHeight=o,h.feature("portrait",i>t),h.feature("landscape",i<t)}function x(){e.clearTimeout(S),S=e.setTimeout(E,100)}var n=e.document,r=e.navigator,i=e.location,s=n.documentElement,o=[],u={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:"-section",page:"-page",head:"head"};if(e.head_conf)for(var a in e.head_conf)e.head_conf[a]!==t&&(u[a]=e.head_conf[a]);var h=e[u.head]=function(){h.ready.apply(null,arguments)};h.feature=function(e,t,n){return e?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),f((t?"":"no-")+e),h[e]=!!t,n||(l("no-"+e),l(e),h.feature()),h):(s.className+=" "+o.join(" "),o=[],h)},h.feature("js",!0);var p=r.userAgent.toLowerCase(),d=/mobile|midp/.test(p);h.feature("mobile",d,!0),h.feature("desktop",!d,!0),h.feature("touch","ontouchstart"in e,!0),p=/(chrome|firefox)[ \/]([\w.]+)/.exec(p)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(msie) ([\w.]+)/.exec(p)||[];var v=p[1],m=parseFloat(p[2]),g=0,y=0;switch(v){case"msie":v="ie",m=n.documentMode||m,g=6,y=10;break;case"chrome":g=8,y=22;break;case"firefox":v="ff",g=3,y=17;break;case"ipod":case"ipad":case"iphone":v="ios",g=3,y=6;break;case"android":g=2,y=4;break;case"webkit":v="safari",g=9,y=12;break;case"opera":g=9,y=12}h.browser={name:v,version:m},h.browser[v]=!0;var b=["ie"];c(b,function(e){e===v?f(e):f("no-"+e)});for(var w=g;w<=y;w++)m<w&&f("lt-"+v+w);v==="ie"&&m<9&&c("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(e){n.createElement(e)}),c(i.pathname.split("/"),function(e,n){if(this.length>2&&this[n+1]!==t)n&&f(this.slice(1,n+1).join("-").toLowerCase()+u.section);else{var r=e||"index",i=r.indexOf(".");i>0&&(r=r.substring(0,i)),s.id=r.toLowerCase()+u.page,n||f("root"+u.section)}}),h.screen={height:e.screen.height,width:e.screen.width},E();var S=0;e.addEventListener?e.addEventListener("resize",x,!1):e.attachEvent("onresize",x)})(window),function(e,t){"use strict";function l(e){for(var n in e)if(s[e[n]]!==t)return!0}function c(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" ");return!!l(n)}var n=e.document,r=e.navigator,i=n.createElement("i"),s=i.style,o=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),u="Webkit Moz O ms Khtml".split(" "),a=e.head_conf&&e.head_conf.head||"head",f=e[a],h={gradient:function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",n="linear-gradient(left top,#eee,#fff);";return s.cssText=(e+o.join(t+e)+o.join(n+e)).slice(0,-e.length),!!s.backgroundImage},rgba:function(){return s.cssText="background-color:rgba(0,0,0,0.5)",!!s.backgroundColor},opacity:function(){return i.style.opacity===""},textshadow:function(){return s.textShadow===""},multiplebgs:function(){return s.cssText="background:url(//:),url(//:),red url(//:)",(new RegExp("(url\\s*\\(.*?){3}")).test(s.background)},boxshadow:function(){return c("boxShadow")},borderimage:function(){return c("borderImage")},borderradius:function(){return c("borderRadius")},cssreflections:function(){return c("boxReflect")},csstransforms:function(){return c("transform")},csstransitions:function(){return c("transition")},fontface:function(){var e=navigator.userAgent,t;return(t=e.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))?t[1]>="4.0.249.4"||1*t[1].split(".")[0]>5:(t=e.match(/Safari\/(\d+\.\d+)/))&&!/iPhone/.test(e)?t[1]>="525.13":/Opera/.test({}.toString.call(window.opera))?opera.version()>="10.00":(t=e.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))?t[1]>="1.9.1":!1}};for(var p in h)h[p]&&f.feature(p,h[p].call(),!0);f.feature()}(window),function(e,t){"use strict";function y(e){if(e._done)return;e(),e._done=1}function b(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return r!=-1?n.substring(0,r):n}function w(e){var t;if(typeof e=="object")for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:b(e),url:e};var r=l[t.name];return r&&r.url===t.url?r:(l[t.name]=t,t)}function E(e,t){if(!e)return;typeof e=="object"&&(e=[].slice.call(e));for(var n=0;n<e.length;n++)t.call(e,e[n],n)}function S(e){return Object.prototype.toString.call(e)=="[object Function]"}function x(e){e=e||l;var t;for(var n in e){if(e.hasOwnProperty(n)&&e[n].state!=g)return!1;t=!0}return t}function T(e){e.state=d,E(e.onpreload,function(e){e.call()})}function N(e,n){e.state===t&&(e.state=v,e.onpreload=[],k({src:e.url,type:"cache"},function(){T(e)}))}function C(e,t){if(e.state==g)return t&&t();if(e.state==m)return p.ready(e.name,t);if(e.state==v)return e.onpreload.push(function(){C(e,t)});e.state=m,k(e.url,function(){e.state=g,t&&t(),E(f[e.name],function(e){y(e)}),x()&&o&&E(f.ALL,function(e){y(e)})})}function k(e,t){var r=n.createElement("script");r.type="text/"+(e.type||"javascript"),r.src=e.src||e,r.async=!1,r.onreadystatechange=r.onload=function(){var e=r.readyState;!t.done&&(!e||/loaded|complete/.test(e))&&(t.done=!0,t())},(n.body||i).appendChild(r)}function L(){o||(o=!0,E(u,function(e){y(e)}))}var n=e.document,r=e.navigator,i=n.documentElement,s,o,u=[],a=[],f={},l={},c=n.createElement("script").async===!0||"MozAppearance"in n.documentElement.style||e.opera,h=e.head_conf&&e.head_conf.head||"head",p=e[h]=e[h]||function(){p.ready.apply(null,arguments)},d=1,v=2,m=3,g=4;c?p.js=function(){var e=arguments,t=e[e.length-1],n={};return S(t)||(t=null),E(e,function(r,i){r!=t&&(r=w(r),n[r.name]=r,C(r,t&&i==e.length-2?function(){x(n)&&y(t)}:null))}),p}:p.js=function(){var e=arguments,t=[].slice.call(e,1),n=t[0];return s?(n?(E(t,function(e){S(e)||N(w(e))}),C(w(e[0]),S(n)?n:function(){p.js.apply(null,t)})):C(w(e[0])),p):(a.push(function(){p.js.apply(null,e)}),p)},p.ready=function(e,t){if(e==n)return o?y(t):u.push(t),p;S(e)&&(t=e,e="ALL");if(typeof e!="string"||!S(t))return p;var r=l[e];if(r&&r.state==g||e=="ALL"&&x()&&o)return y(t),p;var i=f[e];return i?i.push(t):i=f[e]=[t],p},p.ready(n,function(){x()&&E(f.ALL,function(e){y(e)}),p.feature&&p.feature("domloaded",!0)});if(e.addEventListener)n.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",L,!1);else if(e.attachEvent){n.attachEvent("onreadystatechange",function(){n.readyState==="complete"&&L()});var A=1;try{A=e.frameElement}catch(O){}!A&&i.doScroll&&function(){try{i.doScroll("left"),L()}catch(e){setTimeout(arguments.callee,1);return}}(),e.attachEvent("onload",L)}!n.readyState&&n.addEventListener&&(n.readyState="loading",n.addEventListener("DOMContentLoaded",handler=function(){n.removeEventListener("DOMContentLoaded",handler,!1),n.readyState="complete"},!1)),setTimeout(function(){s=!0,E(a,function(e){e()})},300)}(window)



  head.js("https://code.jquery.com/jquery.min.js", function() {
    const LIKED_STATE = "LIKED_STATE";
const DISLIKED_STATE = "DISLIKED_STATE";
const NEUTRAL_STATE = "NEUTRAL_STATE";
let previousState = 3; //1=LIKED, 2=DISLIKED, 3=NEUTRAL
let likesvalue = 0;
let dislikesvalue = 0;

let isMobile = location.hostname == "m.youtube.com";
let isShorts = () => location.pathname.startsWith("/shorts");
let mobileDislikes = 0;
function cLog(text, subtext = "") {
  subtext = subtext.trim() === "" ? "" : `(${subtext})`;
  console.log(`[Return YouTube Dislikes] ${text} ${subtext}`);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const height = innerHeight || document.documentElement.clientHeight;
  const width = innerWidth || document.documentElement.clientWidth;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= height &&
    rect.right <= width
  );
}

function getButtons() {
  if (isShorts()) {
    let elements = document.querySelectorAll(
      isMobile
        ? "ytm-like-button-renderer"
        : "#like-button > ytd-like-button-renderer"
    );
    for (let element of elements) {
      if (isInViewport(element)) {
        return element;
      }
    }
  }
  if (isMobile) {
    return document.querySelector(".slim-video-action-bar-actions");
  }
  if (document.getElementById("menu-container")?.offsetParent === null) {
    return document.querySelector("ytd-menu-renderer.ytd-watch-metadata > div");
  } else {
    return document
      .getElementById("menu-container")
      ?.querySelector("#top-level-buttons-computed");
  }
}

function getLikeButton() {
  return getButtons().children[0];
}

function getDislikeButton() {
  return getButtons().children[1];
}

function isVideoLiked() {
  if (isMobile) {
    return (
      getLikeButton().querySelector("button").getAttribute("aria-label") ==
      "true"
    );
  }
  return getLikeButton().classList.contains("style-default-active");
}

function isVideoDisliked() {
  if (isMobile) {
    return (
      getDislikeButton().querySelector("button").getAttribute("aria-label") ==
      "true"
    );
  }
  return getDislikeButton().classList.contains("style-default-active");
}

function isVideoNotLiked() {
  if (isMobile) {
    return !isVideoLiked();
  }
  return getLikeButton().classList.contains("style-text");
}

function isVideoNotDisliked() {
  if (isMobile) {
    return !isVideoDisliked();
  }
  return getDislikeButton().classList.contains("style-text");
}

function checkForUserAvatarButton() {
  if (isMobile) {
    return;
  }
  if (document.querySelector("#avatar-btn")) {
    return true;
  } else {
    return false;
  }
}

function getState() {
  if (isVideoLiked()) {
    return LIKED_STATE;
  }
  if (isVideoDisliked()) {
    return DISLIKED_STATE;
  }
  return NEUTRAL_STATE;
}

function setLikes(likesCount) {
  if (isMobile) {
    getButtons().children[0].querySelector(".button-renderer-text").innerText =
      likesCount;
    return;
  }
  getButtons().children[0].querySelector("#text").innerText = likesCount;
}

function setDislikes(dislikesCount) {
  if (isMobile) {
    mobileDislikes = dislikesCount;
    return;
  }
  getButtons().children[1].querySelector("#text").innerText = dislikesCount;
}

(typeof GM_addStyle != "undefined"
  ? GM_addStyle
  : (styles) => {
      let styleNode = document.createElement("style");
      styleNode.type = "text/css";
      styleNode.innerText = styles;
      document.head.appendChild(styleNode);
    })(`
    #return-youtube-dislike-bar-container {
      background: var(--yt-spec-icon-disabled);
      border-radius: 2px;
    }
    #return-youtube-dislike-bar {
      background: var(--yt-spec-text-primary);
      border-radius: 2px;
      transition: all 0.15s ease-in-out;
    }
    .ryd-tooltip {
      position: relative;
      display: block;
      height: 2px;
      top: 9px;
    }
    .ryd-tooltip-bar-container {
      width: 100%;
      height: 2px;
      position: absolute;
      padding-top: 6px;
      padding-bottom: 28px;
      top: -6px;
    }
  `);

function createRateBar(likes, dislikes) {
  if (isMobile) {
    return;
  }
  let rateBar = document.getElementById("return-youtube-dislike-bar-container");

  const widthPx =
    getButtons().children[0].clientWidth +
    getButtons().children[1].clientWidth +
    8;

  const widthPercent =
    likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50;

  if (!rateBar && !isMobile) {
    document.getElementById("menu-container").insertAdjacentHTML(
      "beforeend",
      `
        <div class="ryd-tooltip" style="width: ${widthPx}px">
        <div class="ryd-tooltip-bar-container">
           <div
              id="return-youtube-dislike-bar-container"
              style="width: 100%; height: 2px;"
              >
              <div
                 id="return-youtube-dislike-bar"
                 style="width: ${widthPercent}%; height: 100%"
                 ></div>
           </div>
        </div>
        <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">
           <!--css-build:shady-->${likes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}
        </tp-yt-paper-tooltip>
        </div>
`
    );
  } else {
    document.getElementById(
      "return-youtube-dislike-bar-container"
    ).style.width = widthPx + "px";
    document.getElementById("return-youtube-dislike-bar").style.width =
      widthPercent + "%";

    document.querySelector(
      "#ryd-dislike-tooltip > #tooltip"
    ).innerHTML = `${likes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}`;
  }
}

function setState() {
  cLog("Fetching votes...");
  let statsSet = false;

  fetch(
    `https://returnyoutubedislikeapi.com/votes?videoId=${getVideoId()}`
  ).then((response) => {
    response.json().then((json) => {
      if (json && !("traceId" in response) && !statsSet) {
        const { dislikes, likes } = json;
        cLog(`Received count: ${dislikes}`);
        likesvalue = likes;
        dislikesvalue = dislikes;
        setDislikes(numberFormat(dislikes));
        createRateBar(likes, dislikes);
      }
    });
  });
}

function likeClicked() {
  if (checkForUserAvatarButton() == true) {
    if (previousState == 1) {
      likesvalue--;
      createRateBar(likesvalue, dislikesvalue);
      setDislikes(numberFormat(dislikesvalue));
      previousState = 3;
    } else if (previousState == 2) {
      likesvalue++;
      dislikesvalue--;
      setDislikes(numberFormat(dislikesvalue));
      createRateBar(likesvalue, dislikesvalue);
      previousState = 1;
    } else if (previousState == 3) {
      likesvalue++;
      createRateBar(likesvalue, dislikesvalue);
      previousState = 1;
    }
  }
}

function dislikeClicked() {
  if (checkForUserAvatarButton() == true) {
    if (previousState == 3) {
      dislikesvalue++;
      setDislikes(numberFormat(dislikesvalue));
      createRateBar(likesvalue, dislikesvalue);
      previousState = 2;
    } else if (previousState == 2) {
      dislikesvalue--;
      setDislikes(numberFormat(dislikesvalue));
      createRateBar(likesvalue, dislikesvalue);
      previousState = 3;
    } else if (previousState == 1) {
      likesvalue--;
      dislikesvalue++;
      setDislikes(numberFormat(dislikesvalue));
      createRateBar(likesvalue, dislikesvalue);
      previousState = 2;
    }
  }
}

function setInitialState() {
  setState();
}

function getVideoId() {
  const urlObject = new URL(window.location.href);
  const pathname = urlObject.pathname;
  if (pathname.startsWith("/clip")) {
    return document.querySelector("meta[itemprop='videoId']").content;
  } else {
    if (pathname.startsWith("/shorts")) {
      return pathname.substr(8);
    }
    return urlObject.searchParams.get("v");
  }
}

function isVideoLoaded() {
  if (isMobile) {
    return document.getElementById("player").getAttribute("loading") == "false";
  }
  const videoId = getVideoId();

  return (
    document.querySelector(`ytd-watch-flexy[video-id='${videoId}']`) !== null
  );
}

function roundDown(num) {
  if (num < 1000) return num;
  const int = Math.floor(Math.log10(num) - 2);
  const decimal = int + (int % 3 ? 1 : 0);
  const value = Math.floor(num / 10 ** decimal);
  return value * 10 ** decimal;
}

function numberFormat(numberState) {
  let userLocales;
  try {
    userLocales = new URL(
      Array.from(document.querySelectorAll("head > link[rel='search']"))
        ?.find((n) => n?.getAttribute("href")?.includes("?locale="))
        ?.getAttribute("href")
    )?.searchParams?.get("locale");
  } catch {}
  const formatter = Intl.NumberFormat(
    document.documentElement.lang || userLocales || navigator.language,
    {
      notation: "compact",
    }
  );

  return formatter.format(roundDown(numberState));
}

function setEventListeners(evt) {
  let jsInitChecktimer;

  function checkForJS_Finish(check) {
    console.log();
    if (isShorts() || (getButtons()?.offsetParent && isVideoLoaded())) {
      const buttons = getButtons();

      if (!window.returnDislikeButtonlistenersSet) {
        cLog("Registering button listeners...");
        try {
          buttons.children[0].addEventListener("click", likeClicked);
          buttons.children[1].addEventListener("click", dislikeClicked);
          buttons.children[0].addEventListener("touchstart", likeClicked);
          buttons.children[1].addEventListener("touchstart", dislikeClicked);
        } catch {
          return;
        } //Don't spam errors into the console
        window.returnDislikeButtonlistenersSet = true;
      }
      setInitialState();
      clearInterval(jsInitChecktimer);
    }
  }

  cLog("Setting up...");
  jsInitChecktimer = setInterval(checkForJS_Finish, 111);
}

(function () {
  "use strict";
  window.addEventListener("yt-navigate-finish", setEventListeners, true);
  setEventListeners();
})();
if (isMobile) {
  let originalPush = history.pushState;
  history.pushState = function (...args) {
    window.returnDislikeButtonlistenersSet = false;
    setEventListeners(args[2]);
    return originalPush.apply(history, args);
  };
  setInterval(() => {
    getDislikeButton().querySelector(".button-renderer-text").innerText =
      mobileDislikes;
  }, 1000);
}
  });
