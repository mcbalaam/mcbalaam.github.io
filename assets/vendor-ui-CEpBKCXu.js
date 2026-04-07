import{R as se,r as P,a as x}from"./vendor-core-BAtVbP0Y.js";function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function ln(e){if(Array.isArray(e))return e}function fn(e){if(Array.isArray(e))return je(e)}function un(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Bt(n.key),n)}}function dn(e,t,a){return t&&cn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ke(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function b(e,t,a){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function mn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(c){f=!0,r=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw r}}return s}}function hn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(a),!0).forEach(function(n){b(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ye(e,t){return ln(e)||vn(e,t)||Ke(e,t)||hn()}function N(e){return fn(e)||mn(e)||Ke(e)||pn()}function gn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bt(e){var t=gn(e,"string");return typeof t=="symbol"?t:t+""}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(e)}function Ke(e,t){if(e){if(typeof e=="string")return je(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?je(e,t):void 0}}var ft=function(){},Je={},Gt={},Xt=null,Kt={mark:ft,measure:ft};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Gt=document),typeof MutationObserver<"u"&&(Xt=MutationObserver),typeof performance<"u"&&(Kt=performance)}catch{}var bn=Je.navigator||{},ut=bn.userAgent,ct=ut===void 0?"":ut,W=Je,E=Gt,dt=Xt,ce=Kt;W.document;var z=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",Jt=~ct.indexOf("MSIE")||~ct.indexOf("Trident/"),Ie,yn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,qt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Sn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Qt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",le="duotone",Zt="sharp",ea="sharp-duotone",ta="chisel",aa="etch",na="graphite",ra="jelly",ia="jelly-duo",oa="jelly-fill",sa="notdog",la="notdog-duo",fa="slab",ua="slab-press",ca="thumbprint",da="utility",ma="utility-duo",va="utility-fill",ha="whiteboard",wn="Classic",kn="Duotone",An="Sharp",En="Sharp Duotone",In="Chisel",Pn="Etch",Cn="Graphite",Fn="Jelly",On="Jelly Duo",Nn="Jelly Fill",_n="Notdog",Tn="Notdog Duo",jn="Slab",Ln="Slab Press",Dn="Thumbprint",Mn="Utility",$n="Utility Duo",Rn="Utility Fill",zn="Whiteboard",pa=[I,le,Zt,ea,ta,aa,na,ra,ia,oa,sa,la,fa,ua,ca,da,ma,va,ha];Ie={},b(b(b(b(b(b(b(b(b(b(Ie,I,wn),le,kn),Zt,An),ea,En),ta,In),aa,Pn),na,Cn),ra,Fn),ia,On),oa,Nn),b(b(b(b(b(b(b(b(b(Ie,sa,_n),la,Tn),fa,jn),ua,Ln),ca,Dn),da,Mn),ma,$n),va,Rn),ha,zn);var Wn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Un={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Vn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Yn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ga=["fak","fa-kit","fakd","fa-kit-duotone"],mt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Hn=["kit"],Bn="kit",Gn="kit-duotone",Xn="Kit",Kn="Kit Duotone";b(b({},Bn,Xn),Gn,Kn);var Jn={kit:{"fa-kit":"fak"}},qn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qn={kit:{fak:"fa-kit"}},vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pe,de={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],er="classic",tr="duotone",ar="sharp",nr="sharp-duotone",rr="chisel",ir="etch",or="graphite",sr="jelly",lr="jelly-duo",fr="jelly-fill",ur="notdog",cr="notdog-duo",dr="slab",mr="slab-press",vr="thumbprint",hr="utility",pr="utility-duo",gr="utility-fill",br="whiteboard",yr="Classic",xr="Duotone",Sr="Sharp",wr="Sharp Duotone",kr="Chisel",Ar="Etch",Er="Graphite",Ir="Jelly",Pr="Jelly Duo",Cr="Jelly Fill",Fr="Notdog",Or="Notdog Duo",Nr="Slab",_r="Slab Press",Tr="Thumbprint",jr="Utility",Lr="Utility Duo",Dr="Utility Fill",Mr="Whiteboard";Pe={},b(b(b(b(b(b(b(b(b(b(Pe,er,yr),tr,xr),ar,Sr),nr,wr),rr,kr),ir,Ar),or,Er),sr,Ir),lr,Pr),fr,Cr),b(b(b(b(b(b(b(b(b(Pe,ur,Fr),cr,Or),dr,Nr),mr,_r),vr,Tr),hr,jr),pr,Lr),gr,Dr),br,Mr);var $r="kit",Rr="kit-duotone",zr="Kit",Wr="Kit Duotone";b(b({},$r,zr),Rr,Wr);var Ur={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Vr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Yr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ba=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Zn,Yr),Hr=["solid","regular","light","thin","duotone","brands","semibold"],ya=[1,2,3,4,5,6,7,8,9,10],Br=ya.concat([11,12,13,14,15,16,17,18,19,20]),Gr=["aw","fw","pull-left","pull-right"],Xr=[].concat(N(Object.keys(Vr)),Hr,Gr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",de.GROUP,de.SWAP_OPACITY,de.PRIMARY,de.SECONDARY]).concat(ya.map(function(e){return"".concat(e,"x")})).concat(Br.map(function(e){return"w-".concat(e)})),Kr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",De=16,xa="fa",Sa="svg-inline--fa",H="data-fa-i2svg",Me="data-fa-pseudo-element",Jr="data-fa-pseudo-element-pending",qe="data-prefix",Qe="data-icon",ht="fontawesome-i2svg",qr="async",Qr=["HTML","HEAD","STYLE","SCRIPT"],wa=["::before","::after",":before",":after"],ka=(function(){try{return!1}catch{return!1}})();function fe(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[I]}})}var Aa=d({},qt);Aa[I]=d(d(d(d({},{"fa-duotone":"duotone"}),qt[I]),mt.kit),mt["kit-duotone"]);var Zr=fe(Aa),$e=d({},Yn);$e[I]=d(d(d(d({},{duotone:"fad"}),$e[I]),vt.kit),vt["kit-duotone"]);var pt=fe($e),Re=d({},Le);Re[I]=d(d({},Re[I]),Qn.kit);var Ze=fe(Re),ze=d({},Ur);ze[I]=d(d({},ze[I]),Jn.kit);fe(ze);var ei=yn,Ea="fa-layers-text",ti=xn,ai=d({},Wn);fe(ai);var ni=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ce=Sn,ri=[].concat(N(Hn),N(Xr)),ae=W.FontAwesomeConfig||{};function ii(e){var t=E.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function oi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(E&&typeof E.querySelector=="function"){var si=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];si.forEach(function(e){var t=ye(e,2),a=t[0],n=t[1],r=oi(ii(a));r!=null&&(ae[n]=r)})}var Ia={styleDefault:"solid",familyDefault:I,cssPrefix:xa,replacementClass:Sa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ae.familyPrefix&&(ae.cssPrefix=ae.familyPrefix);var Q=d(d({},Ia),ae);Q.autoReplaceSvg||(Q.observeMutations=!1);var p={};Object.keys(Ia).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){Q[e]=a,ne.forEach(function(n){return n(p)})},get:function(){return Q[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,ne.forEach(function(a){return a(p)})},get:function(){return Q.cssPrefix}});W.FontAwesomeConfig=p;var ne=[];function li(e){return ne.push(e),function(){ne.splice(ne.indexOf(e),1)}}var G=De,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fi(e){if(!(!e||!z)){var t=E.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=E.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return E.head.insertBefore(t,n),e}}var ui="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){for(var e=12,t="";e-- >0;)t+=ui[Math.random()*62|0];return t}function Z(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function et(e){return e.classList?Z(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ci(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Pa(e[a]),'" ')},"").trim()}function xe(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tt(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function di(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:f}}function mi(e){var t=e.transform,a=e.width,n=a===void 0?De:a,r=e.height,i=r===void 0?De:r,o="";return Jt?o+="translate(".concat(t.x/G-n/2,"em, ").concat(t.y/G-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var vi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ca(){var e=xa,t=Sa,a=p.cssPrefix,n=p.replacementClass,r=vi;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var bt=!1;function Fe(){p.autoAddCss&&!bt&&(fi(Ca()),bt=!0)}var hi={mixout:function(){return{dom:{css:Ca,insertCss:Fe}}},hooks:function(){return{beforeDOMElementCreation:function(){Fe()},beforeI2svg:function(){Fe()}}}},R=W||{};R[$]||(R[$]={});R[$].styles||(R[$].styles={});R[$].hooks||(R[$].hooks={});R[$].shims||(R[$].shims=[]);var O=R[$],Fa=[],Oa=function(){E.removeEventListener("DOMContentLoaded",Oa),ge=1,Fa.map(function(t){return t()})},ge=!1;z&&(ge=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),ge||E.addEventListener("DOMContentLoaded",Oa));function pi(e){z&&(ge?setTimeout(e,0):Fa.push(e))}function ue(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Pa(e):"<".concat(t," ").concat(ci(n),">").concat(i.map(ue).join(""),"</").concat(t,">")}function yt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Oe=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,l,f,c;for(n===void 0?(l=1,c=t[i[0]]):(l=0,c=n);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Na(e){return N(e).length!==1?null:e.codePointAt(0).toString(16)}function xt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function We(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=xt(t);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(e,xt(t)):O.styles[e]=d(d({},O.styles[e]||{}),i),e==="fas"&&We("fa",t)}var oe=O.styles,gi=O.shims,_a=Object.keys(Ze),bi=_a.reduce(function(e,t){return e[t]=Object.keys(Ze[t]),e},{}),at=null,Ta={},ja={},La={},Da={},Ma={};function yi(e){return~ri.indexOf(e)}function xi(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!yi(r)?r:null}var $a=function(){var t=function(i){return Oe(oe,function(o,s,l){return o[l]=Oe(s,i,{}),o},{})};Ta=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),ja=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Ma=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in oe||p.autoFetchSvg,n=Oe(gi,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});La=n.names,Da=n.unicodes,at=Se(p.styleDefault,{family:p.familyDefault})};li(function(e){at=Se(e.styleDefault,{family:p.familyDefault})});$a();function nt(e,t){return(Ta[e]||{})[t]}function Si(e,t){return(ja[e]||{})[t]}function Y(e,t){return(Ma[e]||{})[t]}function Ra(e){return La[e]||{prefix:null,iconName:null}}function wi(e){var t=Da[e],a=nt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function U(){return at}var za=function(){return{prefix:null,iconName:null,rest:[]}};function ki(e){var t=I,a=_a.reduce(function(n,r){return n[r]="".concat(p.cssPrefix,"-").concat(r),n},{});return pa.forEach(function(n){(e.includes(a[n])||e.some(function(r){return bi[n].includes(r)}))&&(t=n)}),t}function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?I:a,r=Zr[n][e];if(n===le&&!e)return"fad";var i=pt[n][e]||pt[n][r],o=e in O.styles?e:null,s=i||o||null;return s}function Ai(e){var t=[],a=null;return e.forEach(function(n){var r=xi(p.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function St(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var wt=ba.concat(ga);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=St(e.filter(function(v){return wt.includes(v)})),o=St(e.filter(function(v){return!wt.includes(v)})),s=i.filter(function(v){return r=v,!Qt.includes(v)}),l=ye(s,1),f=l[0],c=f===void 0?null:f,u=ki(i),h=d(d({},Ai(o)),{},{prefix:Se(c,{family:u})});return d(d(d({},h),Ci({values:e,family:u,styles:oe,config:p,canonical:h,givenPrefix:r})),Ei(n,r,h))}function Ei(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?Ra(r):{},o=Y(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!oe.far&&oe.fas&&!p.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Ii=pa.filter(function(e){return e!==I||e!==le}),Pi=Object.keys(Le).filter(function(e){return e!==I}).map(function(e){return Object.keys(Le[e])}).flat();function Ci(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,c=a===le,u=t.includes("fa-duotone")||t.includes("fad"),h=f.familyDefault==="duotone",v=n.prefix==="fad"||n.prefix==="fa-duotone";if(!c&&(u||h||v)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Ii.includes(a)){var y=Object.keys(s).find(function(S){return Pi.includes(S)});if(y||f.autoFetchSvg){var g=Vn.get(a).defaultShortPrefixId;n.prefix=g,n.iconName=Y(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=U()||"fas"),n}var Fi=(function(){function e(){un(this,e),this.definitions={}}return dn(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=d(d({},a.definitions[s]||{}),o[s]),We(s,o[s]);var l=Ze[I][s];l&&We(l,o[s]),$a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(a[s][u]=f)}),a[s][l]=f}),a}}])})(),kt=[],J={},q={},Oi=Object.keys(q);function Ni(e,t){var a=t.mixoutsTo;return kt=e,J={},Object.keys(q).forEach(function(n){Oi.indexOf(n)===-1&&delete q[n]}),kt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}n.provides&&n.provides(q)}),a}function Ue(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=J[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function B(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=J[e]||[];r.forEach(function(i){i.apply(null,a)})}function V(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function Ve(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||U();if(t)return t=Y(a,t)||t,yt(Wa.definitions,a,t)||yt(O.styles,a,t)}var Wa=new Fi,_i=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,B("noAuto")},Ti={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(B("beforeI2svg",t),V("pseudoElements2svg",t),V("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,pi(function(){Li({autoReplaceSvgRoot:a}),B("watch",t)})}},ji={icon:function(t){if(t===null)return null;if(pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Se(t[0]);return{prefix:n,iconName:Y(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(ei))){var r=we(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:Y(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:Y(i,t)||t}}}},C={noAuto:_i,config:p,dom:Ti,parse:ji,library:Wa,findIconDefinition:Ve,toHtml:ue},Li=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?E:a;(Object.keys(O.styles).length>0||p.autoFetchSvg)&&z&&p.autoReplaceSvg&&C.dom.i2svg({node:n})};function ke(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ue(n)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var n=E.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Di(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(tt(o)&&a.found&&!n.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};r.style=xe(d(d({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Mi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:n}]}]}function $i(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function rt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,c=e.watchable,u=c===void 0?!1:c,h=n.found?n:a,v=h.width,y=h.height,g=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(m){return f.classes.indexOf(m)===-1}).filter(function(m){return m!==""||!!m}).concat(f.classes).join(" "),S={children:[],attributes:d(d({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:f.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(y)})};!$i(f.attributes)&&!f.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),u&&(S.attributes[H]="");var k=d(d({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:d({},f.styles)}),w=n.found&&a.found?V("generateAbstractMask",k)||{children:[],attributes:{}}:V("generateAbstractIcon",k)||{children:[],attributes:{}},A=w.children,F=w.attributes;return k.children=A,k.attributes=F,s?Mi(k):Di(k)}function At(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=d(d({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[H]="");var f=d({},i.styles);tt(r)&&(f.transform=mi({transform:r,width:a,height:n}),f["-webkit-transform"]=f.transform);var c=xe(f);c.length>0&&(l.style=c);var u=[];return u.push({tag:"span",attributes:l,children:[t]}),u}function Ri(e){var t=e.content,a=e.extra,n=d(d({},a.attributes),{},{class:a.classes.join(" ")}),r=xe(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var Ne=O.styles;function Ye(e){var t=e[0],a=e[1],n=e.slice(4),r=ye(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ce.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ce.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var zi={found:!1,width:512,height:512};function Wi(e,t){!ka&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function He(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=U()),new Promise(function(n,r){if(a==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ne[t]&&Ne[t][e]){var o=Ne[t][e];return n(Ye(o))}Wi(e,t),n(d(d({},zi),{},{icon:p.showMissingIcons&&e?V("missingIconAbstract")||{}:{}}))})}var Et=function(){},Be=p.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:Et,measure:Et},te='FA "7.2.0"',Ui=function(t){return Be.mark("".concat(te," ").concat(t," begins")),function(){return Ua(t)}},Ua=function(t){Be.mark("".concat(te," ").concat(t," ends")),Be.measure("".concat(te," ").concat(t),"".concat(te," ").concat(t," begins"),"".concat(te," ").concat(t," ends"))},it={begin:Ui,end:Ua},ve=function(){};function It(e){var t=e.getAttribute?e.getAttribute(H):null;return typeof t=="string"}function Vi(e){var t=e.getAttribute?e.getAttribute(qe):null,a=e.getAttribute?e.getAttribute(Qe):null;return t&&a}function Yi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Hi(){if(p.autoReplaceSvg===!0)return he.replace;var e=he[p.autoReplaceSvg];return e||he.replace}function Bi(e){return E.createElementNS("http://www.w3.org/2000/svg",e)}function Gi(e){return E.createElement(e)}function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Bi:Gi:a;if(typeof e=="string")return E.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Va(o,{ceFn:n}))}),r}function Xi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var he={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Va(r),a)}),a.getAttribute(H)===null&&p.keepOriginalSource){var n=E.createComment(Xi(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~et(a).indexOf(p.replacementClass))return he.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return ue(s)}).join(`
`);a.setAttribute(H,""),a.innerHTML=o}};function Pt(e){e()}function Ya(e,t){var a=typeof t=="function"?t:ve;if(e.length===0)a();else{var n=Pt;p.mutateApproach===qr&&(n=W.requestAnimationFrame||Pt),n(function(){var r=Hi(),i=it.begin("mutate");e.map(r),i(),a()})}}var ot=!1;function Ha(){ot=!0}function Ge(){ot=!1}var be=null;function Ct(e){if(dt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?ve:t,n=e.nodeCallback,r=n===void 0?ve:n,i=e.pseudoElementsCallback,o=i===void 0?ve:i,s=e.observeMutationsRoot,l=s===void 0?E:s;be=new dt(function(f){if(!ot){var c=U();Z(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!It(u.addedNodes[0])&&(p.searchPseudoElements&&o(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&It(u.target)&&~ni.indexOf(u.attributeName))if(u.attributeName==="class"&&Vi(u.target)){var h=we(et(u.target)),v=h.prefix,y=h.iconName;u.target.setAttribute(qe,v||c),y&&u.target.setAttribute(Qe,y)}else Yi(u.target)&&r(u.target)})}}),z&&be.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ki(){be&&be.disconnect()}function Ji(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function qi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=we(et(e));return r.prefix||(r.prefix=U()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Si(r.prefix,e.innerText)||nt(r.prefix,Na(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Qi(e){var t=Z(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function Zi(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=qi(e),n=a.iconName,r=a.prefix,i=a.rest,o=Qi(e),s=Ue("parseNodeAttributes",{},e),l=t.styleParser?Ji(e):[];return d({iconName:n,prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var eo=O.styles;function Ba(e){var t=p.autoReplaceSvg==="nest"?Ft(e,{styleParser:!1}):Ft(e);return~t.extra.classes.indexOf(Ea)?V("generateLayersText",e,t):V("generateSvgReplacementMutation",e,t)}function to(){return[].concat(N(ga),N(ba))}function Ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=E.documentElement.classList,n=function(u){return a.add("".concat(ht,"-").concat(u))},r=function(u){return a.remove("".concat(ht,"-").concat(u))},i=p.autoFetchSvg?to():Qt.concat(Object.keys(eo));i.includes("fa")||i.push("fa");var o=[".".concat(Ea,":not([").concat(H,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(H,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=it.begin("onTree"),f=s.reduce(function(c,u){try{var h=Ba(u);h&&c.push(h)}catch(v){ka||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,u){Promise.all(f).then(function(h){Ya(h,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),u(h)})})}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ba(e).then(function(a){a&&Ya([a],t)})}function no(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ve(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ve(r||{})),e(n,d(d({},a),{},{mask:r}))}}var ro=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?T:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,f=a.maskId,c=f===void 0?null:f,u=a.classes,h=u===void 0?[]:u,v=a.attributes,y=v===void 0?{}:v,g=a.styles,S=g===void 0?{}:g;if(t){var k=t.prefix,w=t.iconName,A=t.icon;return ke(d({type:"icon"},t),function(){return B("beforeDOMElementCreation",{iconDefinition:t,params:a}),rt({icons:{main:Ye(A),mask:l?Ye(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:w,transform:d(d({},T),r),symbol:o,maskId:c,extra:{attributes:y,styles:S,classes:h}})})}},io={mixout:function(){return{icon:no(ro)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ot,a.nodeCallback=ao,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?E:n,i=a.callback,o=i===void 0?function(){}:i;return Ot(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,f=n.maskId,c=n.extra;return new Promise(function(u,h){Promise.all([He(r,i),l.iconName?He(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=ye(v,2),g=y[0],S=y[1];u([a,rt({icons:{main:g,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:f,extra:c,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=xe(s);l.length>0&&(r.style=l);var f;return tt(o)&&(f=V("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(f||i.icon),{children:n,attributes:r}}}},oo={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ke({type:"layer"},function(){B("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(N(i)).join(" ")},children:o}]})}}}},so={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,l=n.styles,f=l===void 0?{}:l;return ke({type:"counter",content:a},function(){return B("beforeDOMElementCreation",{content:a,params:n}),Ri({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(N(i))}})})}}}},lo={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?T:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,f=l===void 0?{}:l,c=n.styles,u=c===void 0?{}:c;return ke({type:"text",content:a},function(){return B("beforeDOMElementCreation",{content:a,params:n}),At({content:a,transform:d(d({},T),i),extra:{attributes:f,styles:u,classes:["".concat(p.cssPrefix,"-layers-text")].concat(N(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(Jt){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([a,At({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ga=new RegExp('"',"ug"),Nt=[1105920,1112319],_t=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Un),Kr),qn),Xe=Object.keys(_t).reduce(function(e,t){return e[t.toLowerCase()]=_t[t],e},{}),fo=Object.keys(Xe).reduce(function(e,t){var a=Xe[t];return e[t]=a[900]||N(Object.entries(a))[0][1],e},{});function uo(e){var t=e.replace(Ga,"");return Na(N(t)[0]||"")}function co(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Ga,""),r=n.codePointAt(0),i=r>=Nt[0]&&r<=Nt[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function mo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Xe[a]||{})[r]||fo[a]}function Tt(e,t){var a="".concat(Jr).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=Z(e.children),o=i.filter(function(ee){return ee.getAttribute(Me)===t})[0],s=W.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(ti),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),v=mo(l,c),y=uo(h),g=f[0].startsWith("FontAwesome"),S=co(s),k=nt(v,y),w=k;if(g){var A=wi(y);A.iconName&&A.prefix&&(k=A.iconName,v=A.prefix)}if(k&&!S&&(!o||o.getAttribute(qe)!==v||o.getAttribute(Qe)!==w)){e.setAttribute(a,w),o&&e.removeChild(o);var F=Zi(),m=F.extra;m.attributes[Me]=t,He(k,v).then(function(ee){var on=rt(d(d({},F),{},{icons:{main:ee,mask:za()},prefix:v,iconName:w,extra:m,watchable:!0})),Ee=E.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=on.map(function(sn){return ue(sn)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function vo(e){return Promise.all([Tt(e,"::before"),Tt(e,"::after")])}function ho(e){return e.parentNode!==document.head&&!~Qr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Me)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var po=function(t){return!!t&&wa.some(function(a){return t.includes(a)})},go=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var r=me(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(po(o)){var s=wa.reduce(function(l,f){return l.replace(f,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=me(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=me(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,c=go(f.selectorText),u=me(c),h;try{for(u.s();!(h=u.n()).done;){var v=h.value;n.add(v)}}catch(g){u.e(g)}finally{u.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){r.e(g)}finally{r.f()}if(!n.size)return;var y=Array.from(n).join(", ");try{a=e.querySelectorAll(y)}catch{}}return new Promise(function(g,S){var k=Z(a).filter(ho).map(vo),w=it.begin("searchPseudoElements");Ha(),Promise.all(k).then(function(){w(),Ge(),g()}).catch(function(){w(),Ge(),S()})})}}var bo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=jt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?E:n;p.searchPseudoElements&&jt(r)}}},Lt=!1,yo={mixout:function(){return{dom:{unwatch:function(){Ha(),Lt=!0}}}},hooks:function(){return{bootstrap:function(){Ct(Ue("mutationObserverCallbacks",{}))},noAuto:function(){Ki()},watch:function(a){var n=a.observeMutationsRoot;Lt?Ge():Ct(Ue("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Dt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},xo={mixout:function(){return{parse:{transform:function(a){return Dt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Dt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:h};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),v.path)}]}]}}}},_e={x:0,y:0,width:"100%",height:"100%"};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function So(e){return e.tag==="g"?e.children:[e]}var wo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?we(r.split(" ").map(function(o){return o.trim()})):za();return i.prefix||(i.prefix=U()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,f=i.width,c=i.icon,u=o.width,h=o.icon,v=di({transform:l,containerWidth:u,iconWidth:f}),y={tag:"rect",attributes:d(d({},_e),{},{fill:"white"})},g=c.children?{children:c.children.map(Mt)}:{},S={tag:"g",attributes:d({},v.inner),children:[Mt(d({tag:c.tag,attributes:d(d({},c.attributes),v.path)},g))]},k={tag:"g",attributes:d({},v.outer),children:[S]},w="mask-".concat(s||gt()),A="clip-".concat(s||gt()),F={tag:"mask",attributes:d(d({},_e),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,k]},m={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:So(h)},F]};return n.push(m,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},_e)}),{children:n,attributes:r}}}},ko={provides:function(t){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ao={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Eo=[hi,io,oo,so,lo,bo,yo,xo,wo,ko,Ao];Ni(Eo,{mixoutsTo:C});C.noAuto;var _=C.config;C.library;C.dom;var Ae=C.parse;C.findIconDefinition;C.toHtml;var Xa=C.icon;C.layer;C.text;C.counter;function Io(e){return e=e-0,e===e}function Ka(e){return Io(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var Po=(e,t)=>se.createElement("stop",{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Co(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,Fo=1e3;function Oo(e){if(X.has(e))return X.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),f=o.slice(s+1).trim();if(l&&f){const c=Ka(l);t[c.startsWith("webkit")?Co(c):c]=f}}}a=i+1}if(X.size===Fo){const r=X.keys().next().value;r&&X.delete(r)}return X.set(e,t),t}function Ja(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(u=>{let h=u;return("fill"in a||a.gradientFill)&&u.tag==="path"&&"fill"in u.attributes&&(h={...u,attributes:{...u.attributes,fill:void 0}}),Ja(e,h)}),r=t.attributes||{},i={};for(const[u,h]of Object.entries(r))switch(!0){case u==="class":{i.className=h;break}case u==="style":{i.style=Oo(String(h));break}case u.startsWith("aria-"):case u.startsWith("data-"):{i[u.toLowerCase()]=h;break}default:i[Ka(u)]=h}const{style:o,role:s,"aria-label":l,gradientFill:f,...c}=a;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),f){i.fill=`url(#${f.id})`;const{type:u,stops:h=[],...v}=f;n.unshift(e(u==="linear"?"linearGradient":"radialGradient",{...v,id:f.id},h.map(Po)))}return e(t.tag,{...i,...c},...n)}var No=Ja.bind(null,se.createElement),$t=(e,t)=>{const a=P.useId();return e||(t?a:void 0)},_o=class{constructor(t="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!0}catch{}this.scope=t,this.enabled=a}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},To="searchPseudoElementsFullScan"in _&&typeof _.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",jo=Number.parseInt(To)>=7,Lo=()=>jo,re="fa",j={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Do={left:"fa-pull-left",right:"fa-pull-right"},Mo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},$o={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},L={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Ro(e){const t=_.cssPrefix||_.familyPrefix||re;return t===re?e:e.replace(new RegExp(String.raw`(?<=^|\s)${re}-`,"g"),`${t}-`)}function zo(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:f,fixedWidth:c,inverse:u,border:h,flip:v,size:y,rotation:g,pull:S,swapOpacity:k,rotateBy:w,widthAuto:A,className:F}=e,m=[];return F&&m.push(...F.split(" ")),t&&m.push(j.beat),a&&m.push(j.fade),n&&m.push(j.beatFade),r&&m.push(j.bounce),i&&m.push(j.shake),o&&m.push(j.spin),l&&m.push(j.spinReverse),s&&m.push(j.spinPulse),f&&m.push(j.pulse),c&&m.push(L.fixedWidth),u&&m.push(L.inverse),h&&m.push(L.border),v===!0&&m.push(L.flip),(v==="horizontal"||v==="both")&&m.push(L.flipHorizontal),(v==="vertical"||v==="both")&&m.push(L.flipVertical),y!=null&&m.push($o[y]),g!=null&&g!==0&&m.push(Mo[g]),S!=null&&m.push(Do[S]),k&&m.push(L.swapOpacity),Lo()?(w&&m.push(L.rotateBy),A&&m.push(L.widthAuto),(_.cssPrefix||_.familyPrefix||re)===re?m:m.map(Ro)):m}var Wo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Rt(e){if(e)return Wo(e)?e:Ae.icon(e)}function Uo(e){return Object.keys(e)}var zt=new _o("FontAwesomeIcon"),qa={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Vo=new Set(Object.keys(qa)),Yo=se.forwardRef((e,t)=>{const a={...qa,...e},{icon:n,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:f}=a,c=$t(l,!!r),u=$t(s,!!o),h=Rt(n);if(!h)return zt.error("Icon lookup is undefined",n),null;const v=zo(a),y=typeof f=="string"?Ae.transform(f):f,g=Rt(r),S=Xa(h,{...v.length>0&&{classes:v},...y&&{transform:y},...g&&{mask:g},symbol:i,title:o,titleId:u,maskId:c});if(!S)return zt.error("Could not find icon",h),null;const{abstract:k}=S,w={ref:t};for(const A of Uo(a))Vo.has(A)||(w[A]=a[A]);return No(k[0],w)});Yo.displayName="FontAwesomeIcon";var ws={prefix:"fas",iconName:"arrow-right-long",icon:[576,512,["long-arrow-right"],"f178","M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},ks={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},As={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},Es={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Is={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},Ps={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Cs={prefix:"fas",iconName:"language",icon:[576,512,[],"f1ab","M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]},Fs={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},Os={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]},Ns={prefix:"fas",iconName:"hashtag",icon:[512,512,[62098],"23","M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z"]},Ho=Object.create,Bo=Object.getPrototypeOf,Wt=Object.defineProperty,Go=Object.getOwnPropertyNames,Xo=Object.prototype.hasOwnProperty;function Ko(e){return this[e]}var Jo,Qa=(e,t,a)=>{var n=e!=null&&typeof e=="object";if(n){var r=Jo??=new WeakMap,i=r.get(e);if(i)return i}a=e!=null?Ho(Bo(e)):{};const o=Wt(a,"default",{value:e,enumerable:!0});for(let s of Go(e))Xo.call(o,s)||Wt(o,s,{get:Ko.bind(e,s),enumerable:!0});return n&&r.set(e,o),o},qo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Za=qo(e=>{Object.defineProperty(e,"__esModule",{value:!0});var t="fas",a="xmark",n=384,r=512,i=[128473,10005,10006,10060,215,"close","multiply","remove","times"],o="f00d",s="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z";e.definition={prefix:t,iconName:a,icon:[n,r,i,o,s]},e.faXmark=e.definition,e.prefix=t,e.iconName=a,e.width=n,e.height=r,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i});function Qo(e){return e=e-0,e===e}function en(e){return Qo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Zo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var K=new Map,es=1e3;function ts(e){if(K.has(e))return K.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),f=o.slice(s+1).trim();if(l&&f){const c=en(l);t[c.startsWith("webkit")?Zo(c):c]=f}}}a=i+1}if(K.size===es){const r=K.keys().next().value;r&&K.delete(r)}return K.set(e,t),t}function tn(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(c=>tn(e,c)),r=t.attributes||{},i={};for(const[c,u]of Object.entries(r))switch(!0){case c==="class":{i.className=u;break}case c==="style":{i.style=ts(String(u));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=u;break}default:i[en(c)]=u}const{style:o,role:s,"aria-label":l,...f}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(t.tag,{...i,...f},...n)}var as=tn.bind(null,se.createElement),Ut=(e,t)=>{const a=P.useId();return e||(t?a:void 0)},ns=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!0}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},rs="searchPseudoElementsFullScan"in _?"7.0.0":"6.0.0",is=Number.parseInt(rs)>=7,ie="fa",D={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},os={left:"fa-pull-left",right:"fa-pull-right"},ss={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},ls={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},M={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function fs(e){const t=_.cssPrefix||_.familyPrefix||ie;return t===ie?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ie}-`,"g"),`${t}-`)}function us(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:f,fixedWidth:c,inverse:u,border:h,flip:v,size:y,rotation:g,pull:S,swapOpacity:k,rotateBy:w,widthAuto:A,className:F}=e,m=[];return F&&m.push(...F.split(" ")),t&&m.push(D.beat),a&&m.push(D.fade),n&&m.push(D.beatFade),r&&m.push(D.bounce),i&&m.push(D.shake),o&&m.push(D.spin),l&&m.push(D.spinReverse),s&&m.push(D.spinPulse),f&&m.push(D.pulse),c&&m.push(M.fixedWidth),u&&m.push(M.inverse),h&&m.push(M.border),v===!0&&m.push(M.flip),(v==="horizontal"||v==="both")&&m.push(M.flipHorizontal),(v==="vertical"||v==="both")&&m.push(M.flipVertical),y!=null&&m.push(ls[y]),g!=null&&g!==0&&m.push(ss[g]),S!=null&&m.push(os[S]),k&&m.push(M.swapOpacity),is?(w&&m.push(M.rotateBy),A&&m.push(M.widthAuto),(_.cssPrefix||_.familyPrefix||ie)===ie?m:m.map(fs)):m}var cs=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Vt(e){if(e)return cs(e)?e:Ae.icon(e)}function ds(e){return Object.keys(e)}var Yt=new ns("FontAwesomeIcon"),an={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ms=new Set(Object.keys(an)),st=se.forwardRef((e,t)=>{const a={...an,...e},{icon:n,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:f}=a,c=Ut(l,!!r),u=Ut(s,!!o),h=Vt(n);if(!h)return Yt.error("Icon lookup is undefined",n),null;const v=us(a),y=typeof f=="string"?Ae.transform(f):f,g=Vt(r),S=Xa(h,{...v.length>0&&{classes:v},...y&&{transform:y},...g&&{mask:g},symbol:i,title:o,titleId:u,maskId:c});if(!S)return Yt.error("Could not find icon",h),null;const{abstract:k}=S,w={ref:t};for(const A of ds(a))ms.has(A)||(w[A]=a[A]);return as(k[0],w)});st.displayName="FontAwesomeIcon";function nn({children:e,color:t,fill:a,href:n,onClick:r,disabled:i,className:o,style:s,faIcon:l,tiny:f,keyboard:c,type:u="button"}){return x.jsxDEV("button",{className:`fancy-button${a?" fill":""}${o?" "+o:""}${" "+t}${f?" tiny":""}${c?" keyboard":""}`,onClick:r,disabled:i,style:s,type:u,children:[l&&x.jsxDEV(st,{className:"button-img icon",icon:l},void 0,!1,void 0,this),n&&x.jsxDEV("img",{className:"button-img",src:n,alt:"img"},void 0,!1,void 0,this),e&&x.jsxDEV("span",{className:"fancy-button-text",children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}function _s({children:e,src:t,contrast:a,small:n,href:r}){const i=x.jsxDEV(x.Fragment,{children:[t&&x.jsxDEV("img",{className:`badge-img ${n?" small":""}`,src:t},void 0,!1,void 0,this),e&&x.jsxDEV("p",{className:`badge-text ${n?" small":""}`,children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return r?x.jsxDEV("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:`badge${a?" blue":""}${n?" small":""}`,children:i},void 0,!1,void 0,this):x.jsxDEV("div",{className:`badge${a?" blue":""}${n?" small":""}`,children:i},void 0,!1,void 0,this)}function Ts({children:e,text:t,className:a}){return x.jsxDEV("span",{className:"tooltip-wrapper",children:[e,x.jsxDEV("span",{className:"tooltip-text "+a,children:t},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var vs=Qa(Za());function hs({children:e,icon:t,iconUrl:a,type:n="info",duration:r=5e3,onClose:i,showCloseButton:o=!0,className:s="",style:l,position:f="top-right",nowrap:c,closing:u=!1}){const[h,v]=P.useState(!1),y=P.useRef(null),g=u||h,S=()=>{g||(v(!0),y.current&&(clearTimeout(y.current),y.current=null),setTimeout(()=>{i?.()},200))};P.useEffect(()=>(r>0&&!g&&(y.current=setTimeout(S,r)),()=>{y.current&&clearTimeout(y.current)}),[r,g]);const k=()=>{switch(n){case"success":return"toast-success";case"warning":return"toast-warning";case"error":return"toast-error";default:return"toast-info"}};return x.jsxDEV("div",{className:`toast-notification ${k()} toast-${f} ${g?"closing":""}`,style:l,children:[x.jsxDEV("div",{className:"toast-content",children:[(t||a)&&x.jsxDEV("div",{className:"toast-icon",children:[t&&x.jsxDEV(st,{className:"toast-icon-svg",icon:t},void 0,!1,void 0,this),a&&x.jsxDEV("img",{className:"toast-icon-img",src:a,alt:""},void 0,!1,void 0,this)]},void 0,!0,void 0,this),x.jsxDEV("div",{className:`toast-message ${s} ${c?"nowrap":""}`,children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this),o&&x.jsxDEV(nn,{className:"toast-close-button",onClick:S,faIcon:vs.faXmark},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var rn=P.createContext(null);function ps(){const e=P.useContext(rn);if(!e)throw new Error("useToastStack must be used within a ToastStackProvider");return e}function js({children:e,maxToasts:t=5}){const[a,n]=P.useState([]),r=P.useCallback(l=>{const f=l.id||Math.random().toString(36).substring(2,9);return n(c=>[...t&&c.length>=t?c.slice(c.length-t+1):c,{...l,id:f}]),f},[t]),i=P.useCallback(l=>{n(f=>f.filter(c=>c.id!==l))},[]),o=a.reduce((l,f)=>{const c=f.position||"top-right";return l[c]||(l[c]=[]),l[c].push(f),l},{}),s=["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"];return x.jsxDEV(rn.Provider,{value:{addToast:r,removeToast:i},children:[e,x.jsxDEV("div",{className:"toast-stack-container",children:s.map(l=>(o[l]?.length??0)>0&&x.jsxDEV(gs,{position:l,toasts:o[l]??[],onRemove:i},l,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}function gs({position:e,toasts:t,onRemove:a}){const[n,r]=P.useState(new Set),i=s=>{r(l=>new Set(l).add(s)),setTimeout(()=>{a(s)},200)},o=e?.startsWith("bottom");return x.jsxDEV("div",{className:`toast-position-group toast-${e}`,children:t.map((s,l)=>{const f=o?l:t.length-1-l;return x.jsxDEV("div",{className:`toast-wrapper${n.has(s.id)?" removing":""} ${o?"bottom":"top"}`,style:{"--toast-depth":f},children:x.jsxDEV("div",{children:x.jsxDEV(hs,{...s,position:e,closing:n.has(s.id),onClose:()=>i(s.id)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},s.id,!1,void 0,this)})},void 0,!1,void 0,this)}function Ls(){const{addToast:e}=ps();return{createToast:e,createInfoToast:t=>e({...t,type:"info"}),createSuccessToast:t=>e({...t,type:"success"}),createWarningToast:t=>e({...t,type:"warning"}),createErrorToast:t=>e({...t,type:"error"})}}var bs=Qa(Za());function Ds({children:e,control:t,className:a=""}){const{isOpen:n,onClose:r,closeOnOverlayClick:i=!0,closeOnEscape:o=!0,showCloseButton:s=!0,title:l,footerButtons:f,size:c="medium"}=t,[u,h]=P.useState(!1),v=P.useRef(null),y=P.useRef(null);P.useEffect(()=>{const w=A=>{o&&A.key==="Escape"&&n&&!u&&g()};return n&&(document.addEventListener("keydown",w),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",w),document.body.style.overflow=""}},[n,o,u]);const g=()=>{u||(h(!0),setTimeout(()=>{h(!1),r()},200))},S=w=>{i&&w.target===y.current&&!u&&g()},k=w=>{w.stopPropagation()};return!n&&!u?null:x.jsxDEV("div",{ref:y,className:`modal-overlay ${u?"closing":""}`,onClick:S,children:x.jsxDEV("div",{ref:v,className:`modal-popup ${a} ${c} ${u?"closing":""}`,onClick:k,children:[(l||s)&&x.jsxDEV("div",{className:"modal-header",children:[l&&x.jsxDEV("h2",{className:"modal-title",children:l},void 0,!1,void 0,this),s&&x.jsxDEV(nn,{className:"modal-close-button",onClick:g,faIcon:bs.faXmark},void 0,!1,void 0,this)]},void 0,!0,void 0,this),x.jsxDEV("div",{className:"modal-content",children:e},void 0,!1,void 0,this),f&&x.jsxDEV("div",{className:"modal-footer",children:f},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}function Ms({children:e,title:t}){return x.jsxDEV("div",{className:"card",children:[t&&x.jsxDEV("div",{className:"card-title",children:t},void 0,!1,void 0,this),x.jsxDEV("div",{className:"card-content",children:e},void 0,!1,void 0,this)]},void 0,!0,void 0,this)}var Te={},Ht;function ys(){return Ht||(Ht=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",a="trash-can",n=448,r=512,i=[61460,"trash-alt"],o="f2ed",s="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z";e.definition={prefix:t,iconName:a,icon:[n,r,i,o,s]},e.faTrashCan=e.definition,e.prefix=t,e.iconName=a,e.width=n,e.height=r,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i})(Te)),Te}var $s=ys();export{_s as B,Ms as C,Yo as F,Ds as M,Ts as T,nn as a,Fs as b,$s as c,Ns as d,Os as e,Es as f,Cs as g,Ps as h,As as i,ws as j,ks as k,Is as l,js as m,Ls as u};
