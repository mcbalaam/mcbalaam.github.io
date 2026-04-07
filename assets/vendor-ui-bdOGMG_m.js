import{R as We,r as Ua}from"./vendor-core-INiL64Sb.js";function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function Ya(e){if(Array.isArray(e))return e}function Ha(e){if(Array.isArray(e))return Pe(e)}function Ga(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_t(n.key),n)}}function Ba(e,t,a){return t&&Xa(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ue(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=_t(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Va(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ka(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){u=!0,r=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Ja(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?et(Object(a),!0).forEach(function(n){g(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function de(e,t){return Ya(e)||Ka(e,t)||Ue(e,t)||Ja()}function F(e){return Ha(e)||Va(e)||Ue(e)||qa()}function Qa(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _t(e){var t=Qa(e,"string");return typeof t=="symbol"?t:t+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}function Ue(e,t){if(e){if(typeof e=="string")return Pe(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Pe(e,t):void 0}}var tt=function(){},Ye={},jt={},Mt=null,zt={mark:tt,measure:tt};try{typeof window<"u"&&(Ye=window),typeof document<"u"&&(jt=document),typeof MutationObserver<"u"&&(Mt=MutationObserver),typeof performance<"u"&&(zt=performance)}catch{}var Za=Ye.navigator||{},at=Za.userAgent,nt=at===void 0?"":at,M=Ye,x=jt,rt=Mt,re=zt;M.document;var j=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Rt=~nt.indexOf("MSIE")||~nt.indexOf("Trident/"),be,en=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,tn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Dt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},an={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$t=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",ee="duotone",Wt="sharp",Ut="sharp-duotone",Yt="chisel",Ht="etch",Gt="graphite",Xt="jelly",Bt="jelly-duo",Vt="jelly-fill",Kt="notdog",Jt="notdog-duo",qt="slab",Qt="slab-press",Zt="thumbprint",ea="utility",ta="utility-duo",aa="utility-fill",na="whiteboard",nn="Classic",rn="Duotone",on="Sharp",sn="Sharp Duotone",ln="Chisel",fn="Etch",un="Graphite",cn="Jelly",dn="Jelly Duo",mn="Jelly Fill",vn="Notdog",hn="Notdog Duo",gn="Slab",pn="Slab Press",bn="Thumbprint",yn="Utility",xn="Utility Duo",Sn="Utility Fill",wn="Whiteboard",ra=[I,ee,Wt,Ut,Yt,Ht,Gt,Xt,Bt,Vt,Kt,Jt,qt,Qt,Zt,ea,ta,aa,na];be={},g(g(g(g(g(g(g(g(g(g(be,I,nn),ee,rn),Wt,on),Ut,sn),Yt,ln),Ht,fn),Gt,un),Xt,cn),Bt,dn),Vt,mn),g(g(g(g(g(g(g(g(g(be,Kt,vn),Jt,hn),qt,gn),Qt,pn),Zt,bn),ea,yn),ta,xn),aa,Sn),na,wn);var An={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},kn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},In=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Pn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ia=["fak","fa-kit","fakd","fa-kit-duotone"],it={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},En=["kit"],Fn="kit",Cn="kit-duotone",On="Kit",Nn="Kit Duotone";g(g({},Fn,On),Cn,Nn);var Tn={kit:{"fa-kit":"fak"}},Ln={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_n={kit:{fak:"fa-kit"}},ot={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye,ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Mn="classic",zn="duotone",Rn="sharp",Dn="sharp-duotone",$n="chisel",Wn="etch",Un="graphite",Yn="jelly",Hn="jelly-duo",Gn="jelly-fill",Xn="notdog",Bn="notdog-duo",Vn="slab",Kn="slab-press",Jn="thumbprint",qn="utility",Qn="utility-duo",Zn="utility-fill",er="whiteboard",tr="Classic",ar="Duotone",nr="Sharp",rr="Sharp Duotone",ir="Chisel",or="Etch",sr="Graphite",lr="Jelly",fr="Jelly Duo",ur="Jelly Fill",cr="Notdog",dr="Notdog Duo",mr="Slab",vr="Slab Press",hr="Thumbprint",gr="Utility",pr="Utility Duo",br="Utility Fill",yr="Whiteboard";ye={},g(g(g(g(g(g(g(g(g(g(ye,Mn,tr),zn,ar),Rn,nr),Dn,rr),$n,ir),Wn,or),Un,sr),Yn,lr),Hn,fr),Gn,ur),g(g(g(g(g(g(g(g(g(ye,Xn,cr),Bn,dr),Vn,mr),Kn,vr),Jn,hr),qn,gr),Qn,pr),Zn,br),er,yr);var xr="kit",Sr="kit-duotone",wr="Kit",Ar="Kit Duotone";g(g({},xr,wr),Sr,Ar);var kr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ir={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Pr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],oa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(jn,Pr),Er=["solid","regular","light","thin","duotone","brands","semibold"],sa=[1,2,3,4,5,6,7,8,9,10],Fr=sa.concat([11,12,13,14,15,16,17,18,19,20]),Cr=["aw","fw","pull-left","pull-right"],Or=[].concat(F(Object.keys(Ir)),Er,Cr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(sa.map(function(e){return"".concat(e,"x")})).concat(Fr.map(function(e){return"w-".concat(e)})),Nr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",Fe=16,la="fa",fa="svg-inline--fa",$="data-fa-i2svg",Ce="data-fa-pseudo-element",Tr="data-fa-pseudo-element-pending",He="data-prefix",Ge="data-icon",st="fontawesome-i2svg",Lr="async",_r=["HTML","HEAD","STYLE","SCRIPT"],ua=["::before","::after",":before",":after"],ca=(function(){try{return!1}catch{return!1}})();function te(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[I]}})}var da=f({},Dt);da[I]=f(f(f(f({},{"fa-duotone":"duotone"}),Dt[I]),it.kit),it["kit-duotone"]);var jr=te(da),Oe=f({},Pn);Oe[I]=f(f(f(f({},{duotone:"fad"}),Oe[I]),ot.kit),ot["kit-duotone"]);var lt=te(Oe),Ne=f({},Ee);Ne[I]=f(f({},Ne[I]),_n.kit);var Xe=te(Ne),Te=f({},kr);Te[I]=f(f({},Te[I]),Tn.kit);te(Te);var Mr=en,ma="fa-layers-text",zr=tn,Rr=f({},An);te(Rr);var Dr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe=an,$r=[].concat(F(En),F(Or)),J=M.FontAwesomeConfig||{};function Wr(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ur(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Yr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yr.forEach(function(e){var t=de(e,2),a=t[0],n=t[1],r=Ur(Wr(a));r!=null&&(J[n]=r)})}var va={styleDefault:"solid",familyDefault:I,cssPrefix:la,replacementClass:fa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var X=f(f({},va),J);X.autoReplaceSvg||(X.observeMutations=!1);var m={};Object.keys(va).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){X[e]=a,q.forEach(function(n){return n(m)})},get:function(){return X[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,q.forEach(function(a){return a(m)})},get:function(){return X.cssPrefix}});M.FontAwesomeConfig=m;var q=[];function Hr(e){return q.push(e),function(){q.splice(q.indexOf(e),1)}}var U=Fe,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gr(e){if(!(!e||!j)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return x.head.insertBefore(t,n),e}}var Xr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var e=12,t="";e-- >0;)t+=Xr[Math.random()*62|0];return t}function V(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Be(e){return e.classList?V(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ha(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Br(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ha(e[a]),'" ')},"").trim()}function me(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Ve(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function Vr(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Kr(e){var t=e.transform,a=e.width,n=a===void 0?Fe:a,r=e.height,i=r===void 0?Fe:r,o="";return Rt?o+="translate(".concat(t.x/U-n/2,"em, ").concat(t.y/U-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/U,"em), calc(-50% + ").concat(t.y/U,"em)) "),o+="scale(".concat(t.size/U*(t.flipX?-1:1),", ").concat(t.size/U*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Jr=`:root, :host {
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
}`;function ga(){var e=la,t=fa,a=m.cssPrefix,n=m.replacementClass,r=Jr;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var ut=!1;function Se(){m.autoAddCss&&!ut&&(Gr(ga()),ut=!0)}var qr={mixout:function(){return{dom:{css:ga,insertCss:Se}}},hooks:function(){return{beforeDOMElementCreation:function(){Se()},beforeI2svg:function(){Se()}}}},_=M||{};_[L]||(_[L]={});_[L].styles||(_[L].styles={});_[L].hooks||(_[L].hooks={});_[L].shims||(_[L].shims=[]);var E=_[L],pa=[],ba=function(){x.removeEventListener("DOMContentLoaded",ba),ue=1,pa.map(function(t){return t()})},ue=!1;j&&(ue=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ue||x.addEventListener("DOMContentLoaded",ba));function Qr(e){j&&(ue?setTimeout(e,0):pa.push(e))}function ae(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?ha(e):"<".concat(t," ").concat(Br(n),">").concat(i.map(ae).join(""),"</").concat(t,">")}function ct(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var we=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(n===void 0?(l=1,d=t[i[0]]):(l=0,d=n);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ya(e){return F(e).length!==1?null:e.codePointAt(0).toString(16)}function dt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Le(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=dt(t);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(e,dt(t)):E.styles[e]=f(f({},E.styles[e]||{}),i),e==="fas"&&Le("fa",t)}var Z=E.styles,Zr=E.shims,xa=Object.keys(Xe),ei=xa.reduce(function(e,t){return e[t]=Object.keys(Xe[t]),e},{}),Ke=null,Sa={},wa={},Aa={},ka={},Ia={};function ti(e){return~$r.indexOf(e)}function ai(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!ti(r)?r:null}var Pa=function(){var t=function(i){return we(Z,function(o,s,l){return o[l]=we(s,i,{}),o},{})};Sa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),wa=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Ia=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in Z||m.autoFetchSvg,n=we(Zr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Aa=n.names,ka=n.unicodes,Ke=ve(m.styleDefault,{family:m.familyDefault})};Hr(function(e){Ke=ve(e.styleDefault,{family:m.familyDefault})});Pa();function Je(e,t){return(Sa[e]||{})[t]}function ni(e,t){return(wa[e]||{})[t]}function D(e,t){return(Ia[e]||{})[t]}function Ea(e){return Aa[e]||{prefix:null,iconName:null}}function ri(e){var t=ka[e],a=Je("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function z(){return Ke}var Fa=function(){return{prefix:null,iconName:null,rest:[]}};function ii(e){var t=I,a=xa.reduce(function(n,r){return n[r]="".concat(m.cssPrefix,"-").concat(r),n},{});return ra.forEach(function(n){(e.includes(a[n])||e.some(function(r){return ei[n].includes(r)}))&&(t=n)}),t}function ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?I:a,r=jr[n][e];if(n===ee&&!e)return"fad";var i=lt[n][e]||lt[n][r],o=e in E.styles?e:null,s=i||o||null;return s}function oi(e){var t=[],a=null;return e.forEach(function(n){var r=ai(m.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function mt(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var vt=oa.concat(ia);function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=mt(e.filter(function(h){return vt.includes(h)})),o=mt(e.filter(function(h){return!vt.includes(h)})),s=i.filter(function(h){return r=h,!$t.includes(h)}),l=de(s,1),u=l[0],d=u===void 0?null:u,c=ii(i),v=f(f({},oi(o)),{},{prefix:ve(d,{family:c})});return f(f(f({},v),ui({values:e,family:c,styles:Z,config:m,canonical:v,givenPrefix:r})),si(n,r,v))}function si(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?Ea(r):{},o=D(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var li=ra.filter(function(e){return e!==I||e!==ee}),fi=Object.keys(Ee).filter(function(e){return e!==I}).map(function(e){return Object.keys(Ee[e])}).flat();function ui(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===ee,c=t.includes("fa-duotone")||t.includes("fad"),v=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(c||v||h)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&li.includes(a)){var y=Object.keys(s).find(function(S){return fi.includes(S)});if(y||u.autoFetchSvg){var b=In.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=D(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=z()||"fas"),n}var ci=(function(){function e(){Ga(this,e),this.definitions={}}return Ba(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Le(s,o[s]);var l=Xe[I][s];l&&Le(l,o[s]),Pa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),ht=[],H={},G={},di=Object.keys(G);function mi(e,t){var a=t.mixoutsTo;return ht=e,H={},Object.keys(G).forEach(function(n){di.indexOf(n)===-1&&delete G[n]}),ht.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),fe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){H[o]||(H[o]=[]),H[o].push(i[o])})}n.provides&&n.provides(G)}),a}function _e(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=H[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function W(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=H[e]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function je(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||z();if(t)return t=D(a,t)||t,ct(Ca.definitions,a,t)||ct(E.styles,a,t)}var Ca=new ci,vi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},hi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(W("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Qr(function(){pi({autoReplaceSvgRoot:a}),W("watch",t)})}},gi={icon:function(t){if(t===null)return null;if(fe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ve(t[0]);return{prefix:n,iconName:D(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Mr))){var r=he(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||z(),iconName:D(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=z();return{prefix:i,iconName:D(i,t)||t}}}},P={noAuto:vi,config:m,dom:hi,parse:gi,library:Ca,findIconDefinition:je,toHtml:ae},pi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?x:a;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&P.dom.i2svg({node:n})};function ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ae(n)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var n=x.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function bi(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Ve(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=me(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function yi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function xi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function qe(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,v=n.found?n:a,h=v.width,y=v.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(p){return u.classes.indexOf(p)===-1}).filter(function(p){return p!==""||!!p}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!xi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[$]="");var w=f(f({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),A=n.found&&a.found?R("generateAbstractMask",w)||{children:[],attributes:{}}:R("generateAbstractIcon",w)||{children:[],attributes:{}},k=A.children,O=A.attributes;return w.children=k,w.attributes=O,s?yi(w):bi(w)}function gt(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[$]="");var u=f({},i.styles);Ve(r)&&(u.transform=Kr({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var d=me(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function Si(e){var t=e.content,a=e.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=me(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var Ae=E.styles;function Me(e){var t=e[0],a=e[1],n=e.slice(4),r=de(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var wi={found:!1,width:512,height:512};function Ai(e,t){!ca&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ze(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=z()),new Promise(function(n,r){if(a==="fa"){var i=Ea(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ae[t]&&Ae[t][e]){var o=Ae[t][e];return n(Me(o))}Ai(e,t),n(f(f({},wi),{},{icon:m.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var pt=function(){},Re=m.measurePerformance&&re&&re.mark&&re.measure?re:{mark:pt,measure:pt},K='FA "7.2.0"',ki=function(t){return Re.mark("".concat(K," ").concat(t," begins")),function(){return Oa(t)}},Oa=function(t){Re.mark("".concat(K," ").concat(t," ends")),Re.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))},Qe={begin:ki,end:Oa},se=function(){};function bt(e){var t=e.getAttribute?e.getAttribute($):null;return typeof t=="string"}function Ii(e){var t=e.getAttribute?e.getAttribute(He):null,a=e.getAttribute?e.getAttribute(Ge):null;return t&&a}function Pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ei(){if(m.autoReplaceSvg===!0)return le.replace;var e=le[m.autoReplaceSvg];return e||le.replace}function Fi(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Ci(e){return x.createElement(e)}function Na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Fi:Ci:a;if(typeof e=="string")return x.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Na(o,{ceFn:n}))}),r}function Oi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var le={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Na(r),a)}),a.getAttribute($)===null&&m.keepOriginalSource){var n=x.createComment(Oi(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Be(a).indexOf(m.replacementClass))return le.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return ae(s)}).join(`
`);a.setAttribute($,""),a.innerHTML=o}};function yt(e){e()}function Ta(e,t){var a=typeof t=="function"?t:se;if(e.length===0)a();else{var n=yt;m.mutateApproach===Lr&&(n=M.requestAnimationFrame||yt),n(function(){var r=Ei(),i=Qe.begin("mutate");e.map(r),i(),a()})}}var Ze=!1;function La(){Ze=!0}function De(){Ze=!1}var ce=null;function xt(e){if(rt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?se:t,n=e.nodeCallback,r=n===void 0?se:n,i=e.pseudoElementsCallback,o=i===void 0?se:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ce=new rt(function(u){if(!Ze){var d=z();V(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!bt(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&bt(c.target)&&~Dr.indexOf(c.attributeName))if(c.attributeName==="class"&&Ii(c.target)){var v=he(Be(c.target)),h=v.prefix,y=v.iconName;c.target.setAttribute(He,h||d),y&&c.target.setAttribute(Ge,y)}else Pi(c.target)&&r(c.target)})}}),j&&ce.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ni(){ce&&ce.disconnect()}function Ti(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Li(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=he(Be(e));return r.prefix||(r.prefix=z()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=ni(r.prefix,e.innerText)||Je(r.prefix,ya(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function _i(e){var t=V(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function ji(){return{iconName:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function St(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Li(e),n=a.iconName,r=a.prefix,i=a.rest,o=_i(e),s=_e("parseNodeAttributes",{},e),l=t.styleParser?Ti(e):[];return f({iconName:n,prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mi=E.styles;function _a(e){var t=m.autoReplaceSvg==="nest"?St(e,{styleParser:!1}):St(e);return~t.extra.classes.indexOf(ma)?R("generateLayersText",e,t):R("generateSvgReplacementMutation",e,t)}function zi(){return[].concat(F(ia),F(oa))}function wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var a=x.documentElement.classList,n=function(c){return a.add("".concat(st,"-").concat(c))},r=function(c){return a.remove("".concat(st,"-").concat(c))},i=m.autoFetchSvg?zi():$t.concat(Object.keys(Mi));i.includes("fa")||i.push("fa");var o=[".".concat(ma,":not([").concat($,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat($,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Qe.begin("onTree"),u=s.reduce(function(d,c){try{var v=_a(c);v&&d.push(v)}catch(h){ca||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(v){Ta(v,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),c(v)})})}function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_a(e).then(function(a){a&&Ta([a],t)})}function Di(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:je(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:je(r||{})),e(n,f(f({},a),{},{mask:r}))}}var $i=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?C:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,v=c===void 0?[]:c,h=a.attributes,y=h===void 0?{}:h,b=a.styles,S=b===void 0?{}:b;if(t){var w=t.prefix,A=t.iconName,k=t.icon;return ge(f({type:"icon"},t),function(){return W("beforeDOMElementCreation",{iconDefinition:t,params:a}),qe({icons:{main:Me(k),mask:l?Me(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:A,transform:f(f({},C),r),symbol:o,maskId:d,extra:{attributes:y,styles:S,classes:v}})})}},Wi={mixout:function(){return{icon:Di($i)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=wt,a.nodeCallback=Ri,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?x:n,i=a.callback,o=i===void 0?function(){}:i;return wt(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,d=n.extra;return new Promise(function(c,v){Promise.all([ze(r,i),l.iconName?ze(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=de(h,2),b=y[0],S=y[1];c([a,qe({icons:{main:b,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=me(s);l.length>0&&(r.style=l);var u;return Ve(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Ui={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ge({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},Yi={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,l=n.styles,u=l===void 0?{}:l;return ge({type:"counter",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),Si({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(F(i))}})})}}}},Hi={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?C:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,d=n.styles,c=d===void 0?{}:d;return ge({type:"text",content:a},function(){return W("beforeDOMElementCreation",{content:a,params:n}),gt({content:a,transform:f(f({},C),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(Rt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,gt({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},ja=new RegExp('"',"ug"),At=[1105920,1112319],kt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),kn),Nr),Ln),$e=Object.keys(kt).reduce(function(e,t){return e[t.toLowerCase()]=kt[t],e},{}),Gi=Object.keys($e).reduce(function(e,t){var a=$e[t];return e[t]=a[900]||F(Object.entries(a))[0][1],e},{});function Xi(e){var t=e.replace(ja,"");return ya(F(t)[0]||"")}function Bi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(ja,""),r=n.codePointAt(0),i=r>=At[0]&&r<=At[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function Vi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return($e[a]||{})[r]||Gi[a]}function It(e,t){var a="".concat(Tr).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=V(e.children),o=i.filter(function(ne){return ne.getAttribute(Ce)===t})[0],s=M.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(zr),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),n();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),h=Vi(l,d),y=Xi(v),b=u[0].startsWith("FontAwesome"),S=Bi(s),w=Je(h,y),A=w;if(b){var k=ri(y);k.iconName&&k.prefix&&(w=k.iconName,h=k.prefix)}if(w&&!S&&(!o||o.getAttribute(He)!==h||o.getAttribute(Ge)!==A)){e.setAttribute(a,A),o&&e.removeChild(o);var O=ji(),p=O.extra;p.attributes[Ce]=t,ze(w,h).then(function(ne){var $a=qe(f(f({},O),{},{icons:{main:ne,mask:Fa()},prefix:h,iconName:A,extra:p,watchable:!0})),pe=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=$a.map(function(Wa){return ae(Wa)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Ki(e){return Promise.all([It(e,"::before"),It(e,"::after")])}function Ji(e){return e.parentNode!==document.head&&!~_r.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ce)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var qi=function(t){return!!t&&ua.some(function(a){return t.includes(a)})},Qi=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=oe(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(qi(o)){var s=ua.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=oe(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=oe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=Qi(u.selectorText),c=oe(d),v;try{for(c.s();!(v=c.n()).done;){var h=v.value;n.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var y=Array.from(n).join(", ");try{a=e.querySelectorAll(y)}catch{}}return new Promise(function(b,S){var w=V(a).filter(Ji).map(Ki),A=Qe.begin("searchPseudoElements");La(),Promise.all(w).then(function(){A(),De(),b()}).catch(function(){A(),De(),S()})})}}var Zi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Pt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?x:n;m.searchPseudoElements&&Pt(r)}}},Et=!1,eo={mixout:function(){return{dom:{unwatch:function(){La(),Et=!0}}}},hooks:function(){return{bootstrap:function(){xt(_e("mutationObserverCallbacks",{}))},noAuto:function(){Ni()},watch:function(a){var n=a.observeMutationsRoot;Et?De():xt(_e("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ft=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},to={mixout:function(){return{parse:{transform:function(a){return Ft(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ft(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ao(e){return e.tag==="g"?e.children:[e]}var no={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?he(r.split(" ").map(function(o){return o.trim()})):Fa();return i.prefix||(i.prefix=z()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,v=o.icon,h=Vr({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},ke),{},{fill:"white"})},b=d.children?{children:d.children.map(Ct)}:{},S={tag:"g",attributes:f({},h.inner),children:[Ct(f({tag:d.tag,attributes:f(f({},d.attributes),h.path)},b))]},w={tag:"g",attributes:f({},h.outer),children:[S]},A="mask-".concat(s||ft()),k="clip-".concat(s||ft()),O={tag:"mask",attributes:f(f({},ke),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,w]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:ao(v)},O]};return n.push(p,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},ke)}),{children:n,attributes:r}}}},ro={provides:function(t){var a=!1;M.matchMedia&&(a=M.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},io={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},oo=[qr,Wi,Ui,Yi,Hi,Zi,eo,to,no,ro,io];mi(oo,{mixoutsTo:P});P.noAuto;var B=P.config;P.library;P.dom;var Ma=P.parse;P.findIconDefinition;P.toHtml;var so=P.icon;P.layer;P.text;P.counter;function lo(e){return e=e-0,e===e}function za(e){return lo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var fo=(e,t)=>We.createElement("stop",{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function uo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Y=new Map,co=1e3;function mo(e){if(Y.has(e))return Y.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const d=za(l);t[d.startsWith("webkit")?uo(d):d]=u}}}a=i+1}if(Y.size===co){const r=Y.keys().next().value;r&&Y.delete(r)}return Y.set(e,t),t}function Ra(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(c=>{let v=c;return("fill"in a||a.gradientFill)&&c.tag==="path"&&"fill"in c.attributes&&(v={...c,attributes:{...c.attributes,fill:void 0}}),Ra(e,v)}),r=t.attributes||{},i={};for(const[c,v]of Object.entries(r))switch(!0){case c==="class":{i.className=v;break}case c==="style":{i.style=mo(String(v));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=v;break}default:i[za(c)]=v}const{style:o,role:s,"aria-label":l,gradientFill:u,...d}=a;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:c,stops:v=[],...h}=u;n.unshift(e(c==="linear"?"linearGradient":"radialGradient",{...h,id:u.id},v.map(fo)))}return e(t.tag,{...i,...d},...n)}var vo=Ra.bind(null,We.createElement),Ot=(e,t)=>{const a=Ua.useId();return e||(t?a:void 0)},ho=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!0}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},go="searchPseudoElementsFullScan"in B&&typeof B.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",po=Number.parseInt(go)>=7,bo=()=>po,Q="fa",N={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},yo={left:"fa-pull-left",right:"fa-pull-right"},xo={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},So={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},T={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function wo(e){const t=B.cssPrefix||B.familyPrefix||Q;return t===Q?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Q}-`,"g"),`${t}-`)}function Ao(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:d,inverse:c,border:v,flip:h,size:y,rotation:b,pull:S,swapOpacity:w,rotateBy:A,widthAuto:k,className:O}=e,p=[];return O&&p.push(...O.split(" ")),t&&p.push(N.beat),a&&p.push(N.fade),n&&p.push(N.beatFade),r&&p.push(N.bounce),i&&p.push(N.shake),o&&p.push(N.spin),l&&p.push(N.spinReverse),s&&p.push(N.spinPulse),u&&p.push(N.pulse),d&&p.push(T.fixedWidth),c&&p.push(T.inverse),v&&p.push(T.border),h===!0&&p.push(T.flip),(h==="horizontal"||h==="both")&&p.push(T.flipHorizontal),(h==="vertical"||h==="both")&&p.push(T.flipVertical),y!=null&&p.push(So[y]),b!=null&&b!==0&&p.push(xo[b]),S!=null&&p.push(yo[S]),w&&p.push(T.swapOpacity),bo()?(A&&p.push(T.rotateBy),k&&p.push(T.widthAuto),(B.cssPrefix||B.familyPrefix||Q)===Q?p:p.map(wo)):p}var ko=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Nt(e){if(e)return ko(e)?e:Ma.icon(e)}function Io(e){return Object.keys(e)}var Tt=new ho("FontAwesomeIcon"),Da={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Po=new Set(Object.keys(Da)),Eo=We.forwardRef((e,t)=>{const a={...Da,...e},{icon:n,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,d=Ot(l,!!r),c=Ot(s,!!o),v=Nt(n);if(!v)return Tt.error("Icon lookup is undefined",n),null;const h=Ao(a),y=typeof u=="string"?Ma.transform(u):u,b=Nt(r),S=so(v,{...h.length>0&&{classes:h},...y&&{transform:y},...b&&{mask:b},symbol:i,title:o,titleId:c,maskId:d});if(!S)return Tt.error("Could not find icon",v),null;const{abstract:w}=S,A={ref:t};for(const k of Io(a))Po.has(k)||(A[k]=a[k]);return vo(w[0],A)});Eo.displayName="FontAwesomeIcon";var Oo={prefix:"fas",iconName:"arrow-right-long",icon:[576,512,["long-arrow-right"],"f178","M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},No={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},To={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},Lo={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},_o={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},jo={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Mo={prefix:"fas",iconName:"language",icon:[576,512,[],"f1ab","M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]},zo={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},Ro={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]},Do={prefix:"fas",iconName:"hashtag",icon:[512,512,[62098],"23","M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z"]},Ie={},Lt;function Fo(){return Lt||(Lt=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",a="trash-can",n=448,r=512,i=[61460,"trash-alt"],o="f2ed",s="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z";e.definition={prefix:t,iconName:a,icon:[n,r,i,o,s]},e.faTrashCan=e.definition,e.prefix=t,e.iconName=a,e.width=n,e.height=r,e.ligatures=i,e.unicode=o,e.svgPathData=s,e.aliases=i})(Ie)),Ie}var $o=Fo();export{Eo as F,zo as a,$o as b,B as c,Do as d,Ro as e,Lo as f,Mo as g,jo as h,so as i,To as j,Oo as k,No as l,_o as m,Ma as p};
