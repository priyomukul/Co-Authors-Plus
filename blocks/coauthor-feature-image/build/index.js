!function(){"use strict";var e,t={983:function(){var e=window.wp.blocks,t=window.wp.element,l=window.wp.i18n,i=window.wp.blockEditor,a=window.wp.components,n=window.wp.data,o=window.wp.coreData;const r=(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.__experimentalToggleGroupControlOption,{value:"cover",label:(0,l._x)("Cover","Scale option for Image dimension control")}),(0,t.createElement)(a.__experimentalToggleGroupControlOption,{value:"contain",label:(0,l._x)("Contain","Scale option for Image dimension control")}),(0,t.createElement)(a.__experimentalToggleGroupControlOption,{value:"fill",label:(0,l._x)("Fill","Scale option for Image dimension control")})),s="cover",c={cover:(0,l.__)("Image is scaled and cropped to fill the entire space without being distorted."),contain:(0,l.__)("Image is scaled to fill the space without clipping nor distorting."),fill:(0,l.__)("Image will be stretched and distorted to completely fill the space.")};var u=e=>{let{clientId:n,attributes:{aspectRatio:o,width:u,height:h,scale:g,sizeSlug:m},setAttributes:d,imageSizeOptions:p=[]}=e;const _=(0,a.__experimentalUseCustomUnits)({availableUnits:(0,i.useSetting)("spacing.units")||["px","%","vw","em","rem"]}),v=(e,t)=>{const l=parseFloat(t);isNaN(l)&&t||d({[e]:l<0?"0":t})},w=(0,l._x)("Scale","Image scaling options"),f=h||o&&"auto"!==o;return(0,t.createElement)(i.InspectorControls,{group:"dimensions"},(0,t.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>!!o,label:(0,l.__)("Aspect ratio"),onDeselect:()=>d({aspectRatio:void 0}),resetAllFilter:()=>({aspectRatio:void 0}),isShownByDefault:!0,panelId:n},(0,t.createElement)(a.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Aspect ratio"),value:o,options:[{label:(0,l.__)("Original"),value:"auto"},{label:(0,l.__)("Square"),value:"1"},{label:(0,l.__)("16:9"),value:"16/9"},{label:(0,l.__)("4:3"),value:"4/3"},{label:(0,l.__)("3:2"),value:"3/2"},{label:(0,l.__)("9:16"),value:"9/16"},{label:(0,l.__)("3:4"),value:"3/4"},{label:(0,l.__)("2:3"),value:"2/3"}],onChange:e=>d({aspectRatio:e})})),(0,t.createElement)(a.__experimentalToolsPanelItem,{className:"single-column",hasValue:()=>!!h,label:(0,l.__)("Height"),onDeselect:()=>d({height:void 0}),resetAllFilter:()=>({height:void 0}),isShownByDefault:!0,panelId:n},(0,t.createElement)(a.__experimentalUnitControl,{label:(0,l.__)("Height"),labelPosition:"top",value:h||"",min:0,onChange:e=>v("height",e),units:_})),(0,t.createElement)(a.__experimentalToolsPanelItem,{className:"single-column",hasValue:()=>!!u,label:(0,l.__)("Width"),onDeselect:()=>d({width:void 0}),resetAllFilter:()=>({width:void 0}),isShownByDefault:!0,panelId:n},(0,t.createElement)(a.__experimentalUnitControl,{label:(0,l.__)("Width"),labelPosition:"top",value:u||"",min:0,onChange:e=>v("width",e),units:_})),f&&(0,t.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>!!g&&g!==s,label:w,onDeselect:()=>d({scale:s}),resetAllFilter:()=>({scale:s}),isShownByDefault:!0,panelId:n},(0,t.createElement)(a.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:w,value:g,help:c[g],onChange:e=>d({scale:e}),isBlock:!0},r)),!!p.length&&(0,t.createElement)(a.__experimentalToolsPanelItem,{hasValue:()=>!!m,label:(0,l.__)("Resolution"),onDeselect:()=>d({sizeSlug:void 0}),resetAllFilter:()=>({sizeSlug:void 0}),isShownByDefault:!1,panelId:n},(0,t.createElement)(a.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Resolution"),value:m||"full",options:p,onChange:e=>d({sizeSlug:e}),help:(0,l.__)("Select the size of the source image.")})))};function h(e){let{dimensions:i,style:a,className:n}=e;const o=(0,t.useMemo)((()=>function(e){let{width:t,height:l}=e;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${t}" height="${l}" viewBox="0 0 ${t} ${t}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<rect width="${t}" height="${t}" fill="#eeeeee"></rect>\n\t\t\t<path stroke="black" vector-effect="non-scaling-stroke" d="M ${t} ${t} 0 0" />\n\t\t</svg>`.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ")).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}(i)),[i]);return(0,t.createElement)("img",{alt:(0,l.__)("Placeholder image"),className:n,src:o,style:a,width:i.width,height:i.height})}function g(e,t){var l,i;return null==e||null===(l=e.media_details)||void 0===l||null===(i=l.sizes[t])||void 0===i?void 0:i.source_url}var m=JSON.parse('{"u2":"cap/coauthor-feature-image"}');(0,e.registerBlockType)(m.u2,{edit:function(e){let{attributes:r,setAttributes:s,context:c,clientId:m}=e;const{aspectRatio:d,height:p,isLink:_,rel:v,scale:w,sizeSlug:f,verticalAlign:b,width:x}=r,S=(0,n.useSelect)((e=>e("cap/blocks").getAuthorPlaceholder()),[]),E=c["cap/author"]||S,C=(0,n.useSelect)((e=>0!==E.featured_media&&e(o.store).getMedia(E.featured_media,{context:"view"})),[E.featured_media]),{imageSizes:y,imageDimensions:I}=(0,n.useSelect)((e=>e(i.store).getSettings()),[]),k=y.map((e=>{let{name:t,slug:l}=e;return{value:l,label:t}})),O=function(e,t,l){if(e&&"full"===l)return l;const i=function(e,t){if(!e)return Object.keys(t);const l=Object.keys(e.media_details.sizes),i=Object.keys(t);return Array.from(new Set([...l.filter((e=>i.includes(e)))]))}(e,t);return l&&i.includes(l)?l:i[Math.max(0,i.length-1)]}(C,I,f),B=function(e,t,l){if(!e)return{};const i=e.media_details.sizes[l];if("full"===l)return{width:i.width,height:i.height};const a=t[l];if(!0===a.crop||a.width===a.height)return{width:a.width,height:a.height};const n=i.width/i.height;return a.width>a.height?{width:a.width,height:a.width/n}:{width:a.height*n,height:a.height}}(C,I,O),A=C?{}:function(e,t){const l=e[t];return!0===l.crop||l.width===l.height?{width:l.width,height:l.height}:l.width>l.height?{width:l.width,height:l.width}:{width:l.height,height:l.height}}(I,O),T=(0,i.__experimentalUseBorderProps)(r),N=0!==E.id&&!1===C;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(u,{clientId:m,attributes:r,setAttributes:s,imageSizeOptions:k}),N?null:(0,t.createElement)("figure",(0,i.useBlockProps)(),C?(0,t.createElement)("img",{alt:(0,l.__)("Author feature image"),className:T.className,src:g(C,O),style:{width:!x&&p?"auto":x,height:!p&&x?"auto":p,aspectRatio:d,objectFit:w,verticalAlign:b,...T.style},width:B.width,height:B.height}):(0,t.createElement)(h,{className:T.className,dimensions:A,style:{width:!x&&p?"auto":x,height:!p&&x?"auto":p,aspectRatio:d,objectFit:w,verticalAlign:b,...T.style}})),(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,l.__)("Feature Image Settings")},(0,t.createElement)(a.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Make feature image a link to author archive."),onChange:()=>s({isLink:!_}),checked:_}),_&&(0,t.createElement)(a.TextControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Link rel"),value:v,onChange:e=>s({rel:e})})),(0,t.createElement)(a.PanelBody,{initialOpen:!1,title:(0,l.__)("Coauthors Layout")},(0,t.createElement)(a.SelectControl,{label:(0,l.__)("Vertical align"),value:b,options:[{value:"",label:"Middle ( Default )"},{value:"baseline",label:"Baseline"},{value:"bottom",label:"Bottom"},{value:"sub",label:"Sub"},{value:"super",label:"Super"},{value:"text-bottom",label:"Text Bottom"},{value:"text-top",label:"Text Top"},{value:"top",label:"Top"}],onChange:e=>{s({verticalAlign:""===e?void 0:e})},help:(0,l.__)('Vertical alignment applies when displaying coauthors in the "inline" layout.')}))))}})}},l={};function i(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,e=[],i.O=function(t,l,a,n){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],a=e[u][1],n=e[u][2];for(var r=!0,s=0;s<l.length;s++)(!1&n||o>=n)&&Object.keys(i.O).every((function(e){return i.O[e](l[s])}))?l.splice(s--,1):(r=!1,n<o&&(o=n));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,a,n]},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,n,o=l[0],r=l[1],s=l[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(s)var u=s(i)}for(t&&t(l);c<o.length;c++)n=o[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},l=self.webpackChunk=self.webpackChunk||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=i.O(void 0,[431],(function(){return i(983)}));a=i.O(a)}();