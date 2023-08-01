!function(){"use strict";var e=window.wp.blocks,t=window.wp.element,n=window.wp.blockEditor,o=window.wp.components,r=window.wp.data,a=window.wp.i18n,l=JSON.parse('{"u2":"cap/coauthor-display-name"}');(0,e.registerBlockType)(l.u2,{edit:function(e){let{context:l,attributes:i,setAttributes:c}=e;const{author_name:s}=l,{isLink:u,rel:m}=i,[p,w]=(0,t.useState)({link:"#",display_name:"CoAuthor Name"}),h=(0,r.useDispatch)("core/notices");function d(e){"AbortError"!==e.name&&h.createErrorNotice(e.message,{isDismissible:!0})}(0,t.useEffect)((()=>{if(!s)return;const e=new AbortController;return apiFetch({path:`/coauthor-blocks/v1/coauthor/${s}`,signal:e.signal}).then(w).catch(d),()=>{e.abort()}}),[s]);const{link:k,display_name:g}=p;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("p",(0,n.useBlockProps)(),u?(0,t.createElement)("a",{href:k,rel:m,onClick:e=>e.preventDefault()},g):g),(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Settings")},(0,t.createElement)(o.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Make coauthor name a link"),onChange:()=>c({isLink:!u}),checked:u}),u&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.TextControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Link rel"),value:m,onChange:e=>c({rel:e})})))))}})}();