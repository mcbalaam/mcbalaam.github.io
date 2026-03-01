import{R as ja,r as Yt}from"./vendor-core-BJS15y1X.js";function Ee(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function Ht(e){if(Array.isArray(e))return e}function Xt(e){if(Array.isArray(e))return Ee(e)}function Bt(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Gt(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ma(r.key),r)}}function Vt(e,a,t){return a&&Gt(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Ue(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function h(e,a,t){return(a=Ma(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Kt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qt(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?ea(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ea(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function de(e,a){return Ht(e)||qt(e,a)||Ue(e,a)||Jt()}function F(e){return Xt(e)||Kt(e)||Ue(e)||Qt()}function Zt(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ma(e){var a=Zt(e,"string");return typeof a=="symbol"?a:a+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},fe(e)}function Ue(e,a){if(e){if(typeof e=="string")return Ee(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ee(e,a):void 0}}var aa=function(){},Ye={},za={},Ra=null,Da={mark:aa,measure:aa};try{typeof window<"u"&&(Ye=window),typeof document<"u"&&(za=document),typeof MutationObserver<"u"&&(Ra=MutationObserver),typeof performance<"u"&&(Da=performance)}catch{}var er=Ye.navigator||{},ta=er.userAgent,ra=ta===void 0?"":ta,M=Ye,x=za,na=Ra,ne=Da;M.document;var j=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",$a=~ra.indexOf("MSIE")||~ra.indexOf("Trident/"),be,ar=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Wa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},rr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ua=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",ee="duotone",Ya="sharp",Ha="sharp-duotone",Xa="chisel",Ba="etch",Ga="jelly",Va="jelly-duo",Ka="jelly-fill",qa="notdog",Ja="notdog-duo",Qa="slab",Za="slab-press",et="thumbprint",at="utility",tt="utility-duo",rt="utility-fill",nt="whiteboard",nr="Classic",ir="Duotone",or="Sharp",sr="Sharp Duotone",lr="Chisel",fr="Etch",ur="Jelly",cr="Jelly Duo",dr="Jelly Fill",mr="Notdog",vr="Notdog Duo",hr="Slab",gr="Slab Press",pr="Thumbprint",br="Utility",yr="Utility Duo",xr="Utility Fill",wr="Whiteboard",it=[P,ee,Ya,Ha,Xa,Ba,Ga,Va,Ka,qa,Ja,Qa,Za,et,at,tt,rt,nt];be={},h(h(h(h(h(h(h(h(h(h(be,P,nr),ee,ir),Ya,or),Ha,sr),Xa,lr),Ba,fr),Ga,ur),Va,cr),Ka,dr),qa,mr),h(h(h(h(h(h(h(h(be,Ja,vr),Qa,hr),Za,gr),et,pr),at,br),tt,yr),rt,xr),nt,wr);var Sr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Ar={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},kr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Pr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ot=["fak","fa-kit","fakd","fa-kit-duotone"],ia={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ir=["kit"],Er="kit",Fr="kit-duotone",Cr="Kit",Or="Kit Duotone";h(h({},Er,Cr),Fr,Or);var Nr={kit:{"fa-kit":"fak"}},Lr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Tr={kit:{fak:"fa-kit"}},oa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye,ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],jr="classic",Mr="duotone",zr="sharp",Rr="sharp-duotone",Dr="chisel",$r="etch",Wr="jelly",Ur="jelly-duo",Yr="jelly-fill",Hr="notdog",Xr="notdog-duo",Br="slab",Gr="slab-press",Vr="thumbprint",Kr="utility",qr="utility-duo",Jr="utility-fill",Qr="whiteboard",Zr="Classic",en="Duotone",an="Sharp",tn="Sharp Duotone",rn="Chisel",nn="Etch",on="Jelly",sn="Jelly Duo",ln="Jelly Fill",fn="Notdog",un="Notdog Duo",cn="Slab",dn="Slab Press",mn="Thumbprint",vn="Utility",hn="Utility Duo",gn="Utility Fill",pn="Whiteboard";ye={},h(h(h(h(h(h(h(h(h(h(ye,jr,Zr),Mr,en),zr,an),Rr,tn),Dr,rn),$r,nn),Wr,on),Ur,sn),Yr,ln),Hr,fn),h(h(h(h(h(h(h(h(ye,Xr,un),Br,cn),Gr,dn),Vr,mn),Kr,vn),qr,hn),Jr,gn),Qr,pn);var bn="kit",yn="kit-duotone",xn="Kit",wn="Kit Duotone";h(h({},bn,xn),yn,wn);var Sn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},An={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Fe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},kn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],st=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(_r,kn),Pn=["solid","regular","light","thin","duotone","brands","semibold"],lt=[1,2,3,4,5,6,7,8,9,10],In=lt.concat([11,12,13,14,15,16,17,18,19,20]),En=["aw","fw","pull-left","pull-right"],Fn=[].concat(F(Object.keys(An)),Pn,En,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(lt.map(function(e){return"".concat(e,"x")})).concat(In.map(function(e){return"w-".concat(e)})),Cn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",Ce=16,ft="fa",ut="svg-inline--fa",$="data-fa-i2svg",Oe="data-fa-pseudo-element",On="data-fa-pseudo-element-pending",He="data-prefix",Xe="data-icon",sa="fontawesome-i2svg",Nn="async",Ln=["HTML","HEAD","STYLE","SCRIPT"],ct=["::before","::after",":before",":after"],dt=(function(){try{return!1}catch{return!1}})();function ae(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[P]}})}var mt=f({},Wa);mt[P]=f(f(f(f({},{"fa-duotone":"duotone"}),Wa[P]),ia.kit),ia["kit-duotone"]);var Tn=ae(mt),Ne=f({},Pr);Ne[P]=f(f(f(f({},{duotone:"fad"}),Ne[P]),oa.kit),oa["kit-duotone"]);var la=ae(Ne),Le=f({},Fe);Le[P]=f(f({},Le[P]),Tr.kit);var Be=ae(Le),Te=f({},Sn);Te[P]=f(f({},Te[P]),Nr.kit);ae(Te);var _n=ar,vt="fa-layers-text",jn=tr,Mn=f({},Sr);ae(Mn);var zn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe=rr,Rn=[].concat(F(Ir),F(Fn)),K=M.FontAwesomeConfig||{};function Dn(e){var a=x.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function $n(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Wn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wn.forEach(function(e){var a=de(e,2),t=a[0],r=a[1],n=$n(Dn(t));n!=null&&(K[r]=n)})}var ht={styleDefault:"solid",familyDefault:P,cssPrefix:ft,replacementClass:ut,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var B=f(f({},ht),K);B.autoReplaceSvg||(B.observeMutations=!1);var m={};Object.keys(ht).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){B[e]=t,q.forEach(function(r){return r(m)})},get:function(){return B[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){B.cssPrefix=a,q.forEach(function(t){return t(m)})},get:function(){return B.cssPrefix}});M.FontAwesomeConfig=m;var q=[];function Un(e){return q.push(e),function(){q.splice(q.indexOf(e),1)}}var U=Ce,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yn(e){if(!(!e||!j)){var a=x.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=x.head.childNodes,r=null,n=t.length-1;n>-1;n--){var i=t[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return x.head.insertBefore(a,r),e}}var Hn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var e=12,a="";e-- >0;)a+=Hn[Math.random()*62|0];return a}function G(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function Ge(e){return e.classList?G(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function gt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(gt(e[t]),'" ')},"").trim()}function me(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Ve(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function Bn(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Gn(e){var a=e.transform,t=e.width,r=t===void 0?Ce:t,n=e.height,i=n===void 0?Ce:n,o="";return $a?o+="translate(".concat(a.x/U-r/2,"em, ").concat(a.y/U-i/2,"em) "):o+="translate(calc(-50% + ".concat(a.x/U,"em), calc(-50% + ").concat(a.y/U,"em)) "),o+="scale(".concat(a.size/U*(a.flipX?-1:1),", ").concat(a.size/U*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Vn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
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
}`;function pt(){var e=ft,a=ut,t=m.cssPrefix,r=m.replacementClass,n=Vn;if(t!==e||r!==a){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var ua=!1;function we(){m.autoAddCss&&!ua&&(Yn(pt()),ua=!0)}var Kn={mixout:function(){return{dom:{css:pt,insertCss:we}}},hooks:function(){return{beforeDOMElementCreation:function(){we()},beforeI2svg:function(){we()}}}},_=M||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var E=_[T],bt=[],yt=function(){x.removeEventListener("DOMContentLoaded",yt),ue=1,bt.map(function(a){return a()})},ue=!1;j&&(ue=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ue||x.addEventListener("DOMContentLoaded",yt));function qn(e){j&&(ue?setTimeout(e,0):bt.push(e))}function te(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?gt(e):"<".concat(a," ").concat(Xn(r),">").concat(i.map(te).join(""),"</").concat(a,">")}function ca(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var Se=function(a,t,r,n){var i=Object.keys(a),o=i.length,s=t,l,u,c;for(r===void 0?(l=1,c=a[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,a[u],u,a);return c};function xt(e){return F(e).length!==1?null:e.codePointAt(0).toString(16)}function da(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function _e(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,i=da(a);typeof E.hooks.addPack=="function"&&!n?E.hooks.addPack(e,da(a)):E.styles[e]=f(f({},E.styles[e]||{}),i),e==="fas"&&_e("fa",a)}var Q=E.styles,Jn=E.shims,wt=Object.keys(Be),Qn=wt.reduce(function(e,a){return e[a]=Object.keys(Be[a]),e},{}),Ke=null,St={},At={},kt={},Pt={},It={};function Zn(e){return~Rn.indexOf(e)}function ei(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!Zn(n)?n:null}var Et=function(){var a=function(i){return Se(Q,function(o,s,l){return o[l]=Se(s,i,{}),o},{})};St=a(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),At=a(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),It=a(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var t="far"in Q||m.autoFetchSvg,r=Se(Jn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});kt=r.names,Pt=r.unicodes,Ke=ve(m.styleDefault,{family:m.familyDefault})};Un(function(e){Ke=ve(e.styleDefault,{family:m.familyDefault})});Et();function qe(e,a){return(St[e]||{})[a]}function ai(e,a){return(At[e]||{})[a]}function D(e,a){return(It[e]||{})[a]}function Ft(e){return kt[e]||{prefix:null,iconName:null}}function ti(e){var a=Pt[e],t=qe("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function z(){return Ke}var Ct=function(){return{prefix:null,iconName:null,rest:[]}};function ri(e){var a=P,t=wt.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return it.forEach(function(r){(e.includes(t[r])||e.some(function(n){return Qn[r].includes(n)}))&&(a=r)}),a}function ve(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?P:t,n=Tn[r][e];if(r===ee&&!e)return"fad";var i=la[r][e]||la[r][n],o=e in E.styles?e:null,s=i||o||null;return s}function ni(e){var a=[],t=null;return e.forEach(function(r){var n=ei(m.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function ma(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var va=st.concat(ot);function he(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,i=ma(e.filter(function(v){return va.includes(v)})),o=ma(e.filter(function(v){return!va.includes(v)})),s=i.filter(function(v){return n=v,!Ua.includes(v)}),l=de(s,1),u=l[0],c=u===void 0?null:u,d=ri(i),g=f(f({},ni(o)),{},{prefix:ve(c,{family:d})});return f(f(f({},g),li({values:e,family:d,styles:Q,config:m,canonical:g,givenPrefix:n})),ii(r,n,g))}function ii(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=a==="fa"?Ft(n):{},o=D(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!Q.far&&Q.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var oi=it.filter(function(e){return e!==P||e!==ee}),si=Object.keys(Fe).filter(function(e){return e!==P}).map(function(e){return Object.keys(Fe[e])}).flat();function li(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=t===ee,d=a.includes("fa-duotone")||a.includes("fad"),g=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||g||v)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&oi.includes(t)){var y=Object.keys(s).find(function(w){return si.includes(w)});if(y||u.autoFetchSvg){var b=kr.get(t).defaultShortPrefixId;r.prefix=b,r.iconName=D(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=z()||"fas"),r}var fi=(function(){function e(){Bt(this,e),this.definitions={}}return Vt(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),_e(s,o[s]);var l=Be[P][s];l&&_e(l,o[s]),Et()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];t[s]||(t[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(t[s][d]=u)}),t[s][l]=u}),t}}])})(),ha=[],H={},X={},ui=Object.keys(X);function ci(e,a){var t=a.mixoutsTo;return ha=e,H={},Object.keys(X).forEach(function(r){ui.indexOf(r)===-1&&delete X[r]}),ha.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(t[o]=n[o]),fe(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}r.provides&&r.provides(X)}),t}function je(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var i=H[e]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(r))}),a}function W(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=H[e]||[];n.forEach(function(i){i.apply(null,t)})}function R(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,a):void 0}function Me(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||z();if(a)return a=D(t,a)||a,ca(Ot.definitions,t,a)||ca(E.styles,t,a)}var Ot=new fi,di=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},mi={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(W("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,qn(function(){hi({autoReplaceSvgRoot:t}),W("watch",a)})}},vi={icon:function(a){if(a===null)return null;if(fe(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:D(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=ve(a[0]);return{prefix:r,iconName:D(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(_n))){var n=he(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||z(),iconName:D(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var i=z();return{prefix:i,iconName:D(i,a)||a}}}},I={noAuto:di,config:m,dom:mi,parse:vi,library:Ot,findIconDefinition:Me,toHtml:te},hi=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?x:t;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&I.dom.i2svg({node:r})};function ge(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return te(r)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gi(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Ve(o)&&t.found&&!r.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};n.style=me(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function pi(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function bi(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function Je(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,g=r.found?r:t,v=g.width,y=g.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(p){return u.classes.indexOf(p)===-1}).filter(function(p){return p!==""||!!p}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(y)})};!bi(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),d&&(w.attributes[$]="");var S=f(f({},w),{},{prefix:n,iconName:i,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),A=r.found&&t.found?R("generateAbstractMask",S)||{children:[],attributes:{}}:R("generateAbstractIcon",S)||{children:[],attributes:{}},k=A.children,O=A.attributes;return S.children=k,S.attributes=O,s?pi(S):gi(S)}function ga(e){var a=e.content,t=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[$]="");var u=f({},i.styles);Ve(n)&&(u.transform=Gn({transform:n,width:t,height:r}),u["-webkit-transform"]=u.transform);var c=me(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[a]}),d}function yi(e){var a=e.content,t=e.extra,r=f(f({},t.attributes),{},{class:t.classes.join(" ")}),n=me(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),i}var Ae=E.styles;function ze(e){var a=e[0],t=e[1],r=e.slice(4),n=de(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:t,icon:o}}var xi={found:!1,width:512,height:512};function wi(e,a){!dt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Re(e,a){var t=a;return a==="fa"&&m.styleDefault!==null&&(a=z()),new Promise(function(r,n){if(t==="fa"){var i=Ft(e)||{};e=i.iconName||e,a=i.prefix||a}if(e&&a&&Ae[a]&&Ae[a][e]){var o=Ae[a][e];return r(ze(o))}wi(e,a),r(f(f({},xi),{},{icon:m.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var pa=function(){},De=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:pa,measure:pa},V='FA "7.1.0"',Si=function(a){return De.mark("".concat(V," ").concat(a," begins")),function(){return Nt(a)}},Nt=function(a){De.mark("".concat(V," ").concat(a," ends")),De.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},Qe={begin:Si,end:Nt},se=function(){};function ba(e){var a=e.getAttribute?e.getAttribute($):null;return typeof a=="string"}function Ai(e){var a=e.getAttribute?e.getAttribute(He):null,t=e.getAttribute?e.getAttribute(Xe):null;return a&&t}function ki(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Pi(){if(m.autoReplaceSvg===!0)return le.replace;var e=le[m.autoReplaceSvg];return e||le.replace}function Ii(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Ei(e){return x.createElement(e)}function Lt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?Ii:Ei:t;if(typeof e=="string")return x.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Lt(o,{ceFn:r}))}),n}function Fi(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var le={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(Lt(n),t)}),t.getAttribute($)===null&&m.keepOriginalSource){var r=x.createComment(Fi(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~Ge(t).indexOf(m.replacementClass))return le.replace(a);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return te(s)}).join(`
`);t.setAttribute($,""),t.innerHTML=o}};function ya(e){e()}function Tt(e,a){var t=typeof a=="function"?a:se;if(e.length===0)t();else{var r=ya;m.mutateApproach===Nn&&(r=M.requestAnimationFrame||ya),r(function(){var n=Pi(),i=Qe.begin("mutate");e.map(n),i(),t()})}}var Ze=!1;function _t(){Ze=!0}function $e(){Ze=!1}var ce=null;function xa(e){if(na&&m.observeMutations){var a=e.treeCallback,t=a===void 0?se:a,r=e.nodeCallback,n=r===void 0?se:r,i=e.pseudoElementsCallback,o=i===void 0?se:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ce=new na(function(u){if(!Ze){var c=z();G(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ba(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&ba(d.target)&&~zn.indexOf(d.attributeName))if(d.attributeName==="class"&&Ai(d.target)){var g=he(Ge(d.target)),v=g.prefix,y=g.iconName;d.target.setAttribute(He,v||c),y&&d.target.setAttribute(Xe,y)}else ki(d.target)&&n(d.target)})}}),j&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ci(){ce&&ce.disconnect()}function Oi(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function Ni(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=he(Ge(e));return n.prefix||(n.prefix=z()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ai(n.prefix,e.innerText)||qe(n.prefix,xt(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Li(e){var a=G(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function Ti(){return{iconName:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ni(e),r=t.iconName,n=t.prefix,i=t.rest,o=Li(e),s=je("parseNodeAttributes",{},e),l=a.styleParser?Oi(e):[];return f({iconName:r,prefix:n,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var _i=E.styles;function jt(e){var a=m.autoReplaceSvg==="nest"?wa(e,{styleParser:!1}):wa(e);return~a.extra.classes.indexOf(vt)?R("generateLayersText",e,a):R("generateSvgReplacementMutation",e,a)}function ji(){return[].concat(F(ot),F(st))}function Sa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var t=x.documentElement.classList,r=function(d){return t.add("".concat(sa,"-").concat(d))},n=function(d){return t.remove("".concat(sa,"-").concat(d))},i=m.autoFetchSvg?ji():Ua.concat(Object.keys(_i));i.includes("fa")||i.push("fa");var o=[".".concat(vt,":not([").concat($,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat($,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=G(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Qe.begin("onTree"),u=s.reduce(function(c,d){try{var g=jt(d);g&&c.push(g)}catch(v){dt||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(g){Tt(g,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),c()})}).catch(function(g){l(),d(g)})})}function Mi(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jt(e).then(function(t){t&&Tt([t],a)})}function zi(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Me(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Me(n||{})),e(r,f(f({},t),{},{mask:n}))}}var Ri=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?C:r,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,u=t.maskId,c=u===void 0?null:u,d=t.classes,g=d===void 0?[]:d,v=t.attributes,y=v===void 0?{}:v,b=t.styles,w=b===void 0?{}:b;if(a){var S=a.prefix,A=a.iconName,k=a.icon;return ge(f({type:"icon"},a),function(){return W("beforeDOMElementCreation",{iconDefinition:a,params:t}),Je({icons:{main:ze(k),mask:l?ze(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:f(f({},C),n),symbol:o,maskId:c,extra:{attributes:y,styles:w,classes:g}})})}},Di={mixout:function(){return{icon:zi(Ri)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Sa,t.nodeCallback=Mi,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?x:r,i=t.callback,o=i===void 0?function(){}:i;return Sa(n,o)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(d,g){Promise.all([Re(n,i),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=de(v,2),b=y[0],w=y[1];d([t,Je({icons:{main:b,mask:w},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.transform,s=t.styles,l=me(s);l.length>0&&(n.style=l);var u;return Ve(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},$i={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ge({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},Wi={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return ge({type:"counter",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:r}),yi({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(F(i))}})})}}}},Ui={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?C:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return ge({type:"text",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:r}),ga({content:t,transform:f(f({},C),i),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,i=r.extra,o=null,s=null;if($a){var l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([t,ga({content:t.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Mt=new RegExp('"',"ug"),Aa=[1105920,1112319],ka=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Ar),Cn),Lr),We=Object.keys(ka).reduce(function(e,a){return e[a.toLowerCase()]=ka[a],e},{}),Yi=Object.keys(We).reduce(function(e,a){var t=We[a];return e[a]=t[900]||F(Object.entries(t))[0][1],e},{});function Hi(e){var a=e.replace(Mt,"");return xt(F(a)[0]||"")}function Xi(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Mt,""),n=r.codePointAt(0),i=n>=Aa[0]&&n<=Aa[1],o=r.length===2?r[0]===r[1]:!1;return i||o||a}function Bi(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(We[t]||{})[n]||Yi[t]}function Pa(e,a){var t="".concat(On).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var i=G(e.children),o=i.filter(function(re){return re.getAttribute(Oe)===a})[0],s=M.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),u=l.match(jn),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){var g=s.getPropertyValue("content"),v=Bi(l,c),y=Hi(g),b=u[0].startsWith("FontAwesome"),w=Xi(s),S=qe(v,y),A=S;if(b){var k=ti(y);k.iconName&&k.prefix&&(S=k.iconName,v=k.prefix)}if(S&&!w&&(!o||o.getAttribute(He)!==v||o.getAttribute(Xe)!==A)){e.setAttribute(t,A),o&&e.removeChild(o);var O=Ti(),p=O.extra;p.attributes[Oe]=a,Re(S,v).then(function(re){var Wt=Je(f(f({},O),{},{icons:{main:re,mask:Ct()},prefix:v,iconName:A,extra:p,watchable:!0})),pe=x.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=Wt.map(function(Ut){return te(Ut)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Gi(e){return Promise.all([Pa(e,"::before"),Pa(e,"::after")])}function Vi(e){return e.parentNode!==document.head&&!~Ln.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ki=function(a){return!!a&&ct.some(function(t){return a.includes(t)})},qi=function(a){if(!a)return[];var t=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=oe(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Ki(o)){var s=ct.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function Ia(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var t;if(a)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=oe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=oe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=qi(u.selectorText),d=oe(c),g;try{for(d.s();!(g=d.n()).done;){var v=g.value;r.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{t=e.querySelectorAll(y)}catch{}}return new Promise(function(b,w){var S=G(t).filter(Vi).map(Gi),A=Qe.begin("searchPseudoElements");_t(),Promise.all(S).then(function(){A(),$e(),b()}).catch(function(){A(),$e(),w()})})}}var Ji={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ia,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?x:r;m.searchPseudoElements&&Ia(n)}}},Ea=!1,Qi={mixout:function(){return{dom:{unwatch:function(){_t(),Ea=!0}}}},hooks:function(){return{bootstrap:function(){xa(je("mutationObserverCallbacks",{}))},noAuto:function(){Ci()},watch:function(t){var r=t.observeMutationsRoot;Ea?$e():xa(je("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fa=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},Zi={mixout:function(){return{parse:{transform:function(t){return Fa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=Fa(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:g};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function Ca(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function eo(e){return e.tag==="g"?e.children:[e]}var ao={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),i=n?he(n.split(" ").map(function(o){return o.trim()})):Ct();return i.prefix||(i.prefix=z()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,u=i.width,c=i.icon,d=o.width,g=o.icon,v=Bn({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:f(f({},ke),{},{fill:"white"})},b=c.children?{children:c.children.map(Ca)}:{},w={tag:"g",attributes:f({},v.inner),children:[Ca(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},b))]},S={tag:"g",attributes:f({},v.outer),children:[w]},A="mask-".concat(s||fa()),k="clip-".concat(s||fa()),O={tag:"mask",attributes:f(f({},ke),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,S]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:eo(g)},O]};return r.push(p,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},ke)}),{children:r,attributes:n}}}},to={provides:function(a){var t=!1;M.matchMedia&&(t=M.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ro={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},no=[Kn,Di,$i,Wi,Ui,Ji,Qi,Zi,ao,to,ro];ci(no,{mixoutsTo:I});I.noAuto;var Z=I.config;I.library;I.dom;var zt=I.parse;I.findIconDefinition;I.toHtml;var io=I.icon;I.layer;I.text;I.counter;function oo(e){return e=e-0,e===e}function Rt(e){return oo(e)?e:(e=e.replace(/[_-]+(.)?/g,(a,t)=>t?t.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function so(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Y=new Map,lo=1e3;function fo(e){if(Y.has(e))return Y.get(e);const a={};let t=0;const r=e.length;for(;t<r;){const n=e.indexOf(";",t),i=n===-1?r:n,o=e.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const c=Rt(l);a[c.startsWith("webkit")?so(c):c]=u}}}t=i+1}if(Y.size===lo){const n=Y.keys().next().value;n&&Y.delete(n)}return Y.set(e,a),a}function Dt(e,a,t={}){if(typeof a=="string")return a;const r=(a.children||[]).map(c=>Dt(e,c)),n=a.attributes||{},i={};for(const[c,d]of Object.entries(n))switch(!0){case c==="class":{i.className=d;break}case c==="style":{i.style=fo(String(d));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=d;break}default:i[Rt(c)]=d}const{style:o,role:s,"aria-label":l,...u}=t;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(a.tag,{...u,...i},...r)}var uo=Dt.bind(null,ja.createElement),Oa=(e,a)=>{const t=Yt.useId();return e||(a?t:void 0)},co=class{constructor(e="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!0}catch{}this.scope=e,this.enabled=a}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},mo="searchPseudoElementsFullScan"in Z?"7.0.0":"6.0.0",vo=Number.parseInt(mo)>=7,J="fa",N={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},ho={left:"fa-pull-left",right:"fa-pull-right"},go={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},po={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},L={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function bo(e){const a=Z.cssPrefix||Z.familyPrefix||J;return a===J?e:e.replace(new RegExp(String.raw`(?<=^|\s)${J}-`,"g"),`${a}-`)}function yo(e){const{beat:a,fade:t,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:g,flip:v,size:y,rotation:b,pull:w,swapOpacity:S,rotateBy:A,widthAuto:k,className:O}=e,p=[];return O&&p.push(...O.split(" ")),a&&p.push(N.beat),t&&p.push(N.fade),r&&p.push(N.beatFade),n&&p.push(N.bounce),i&&p.push(N.shake),o&&p.push(N.spin),l&&p.push(N.spinReverse),s&&p.push(N.spinPulse),u&&p.push(N.pulse),c&&p.push(L.fixedWidth),d&&p.push(L.inverse),g&&p.push(L.border),v===!0&&p.push(L.flip),(v==="horizontal"||v==="both")&&p.push(L.flipHorizontal),(v==="vertical"||v==="both")&&p.push(L.flipVertical),y!=null&&p.push(po[y]),b!=null&&b!==0&&p.push(go[b]),w!=null&&p.push(ho[w]),S&&p.push(L.swapOpacity),vo?(A&&p.push(L.rotateBy),k&&p.push(L.widthAuto),(Z.cssPrefix||Z.familyPrefix||J)===J?p:p.map(bo)):p}var xo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Na(e){if(e)return xo(e)?e:zt.icon(e)}function wo(e){return Object.keys(e)}var La=new co("FontAwesomeIcon"),$t={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},So=new Set(Object.keys($t)),Ao=ja.forwardRef((e,a)=>{const t={...$t,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:u}=t,c=Oa(l,!!n),d=Oa(s,!!o),g=Na(r);if(!g)return La.error("Icon lookup is undefined",r),null;const v=yo(t),y=typeof u=="string"?zt.transform(u):u,b=Na(n),w=io(g,{...v.length>0&&{classes:v},...y&&{transform:y},...b&&{mask:b},symbol:i,title:o,titleId:d,maskId:c});if(!w)return La.error("Could not find icon",g),null;const{abstract:S}=w,A={ref:a};for(const k of wo(t))So.has(k)||(A[k]=t[k]);return uo(S[0],A)});Ao.displayName="FontAwesomeIcon";var Eo={prefix:"fas",iconName:"arrow-right-long",icon:[576,512,["long-arrow-right"],"f178","M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Fo={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},Co={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},Oo={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},No={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},Lo={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},To={prefix:"fas",iconName:"language",icon:[576,512,[],"f1ab","M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]},_o={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},jo={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]},Mo={prefix:"fas",iconName:"hashtag",icon:[512,512,[62098],"23","M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z"]},Pe={},Ta;function ko(){return Ta||(Ta=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var a="fas",t="xmark",r=384,n=512,i=[128473,10005,10006,10060,215,"close","multiply","remove","times"],o="f00d",s="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z";e.definition={prefix:a,iconName:t,icon:[r,n,i,o,s]},e.faXmark=e.definition,e.prefix=a,e.iconName=t,e.width=r,e.height=n,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i})(Pe)),Pe}var zo=ko(),Ie={},_a;function Po(){return _a||(_a=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var a="fas",t="trash-can",r=448,n=512,i=[61460,"trash-alt"],o="f2ed",s="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z";e.definition={prefix:a,iconName:t,icon:[r,n,i,o,s]},e.faTrashCan=e.definition,e.prefix=a,e.iconName=t,e.width=r,e.height=n,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i})(Ie)),Ie}var Ro=Po();export{Ao as F,zo as a,_o as b,Ro as c,Mo as d,To as e,Oo as f,Lo as g,Co as h,Eo as i,jo as j,No as k,Fo as l};
