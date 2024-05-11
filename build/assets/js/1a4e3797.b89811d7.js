"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2138],{7824:(e,t,r)=>{r.d(t,{W:()=>u});var a=r(6540),n=r(7639);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},5849:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var a=r(6540),n=r(7639),l=r(5329),s=r(1141),c=r(5358),o=r(3230),u=r(7824),m=r(53),h=r(6347),i=r(1712);const p=function(){const e=(0,h.W6)(),t=(0,h.zy)(),{siteConfig:{baseUrl:r}}=(0,n.A)(),a=i.A.canUseDOM?new URLSearchParams(t.search):null,l=(null==a?void 0:a.get("q"))||"",s=(null==a?void 0:a.get("ctx"))||"",c=(null==a?void 0:a.get("version"))||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set("ctx",r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return r+"search?"+t.toString()}}};var g=r(3884),d=r(4867),f=r(3032),y=r(5928),E=r(6323),C=r(5990),S=r(5268),x=r(6277);const v={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function I(){const{siteConfig:{baseUrl:e}}=(0,n.A)(),{selectMessage:t}=(0,u.W)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,a.useState)(r),[E,S]=(0,a.useState)(),[I,R]=(0,a.useState)(),A=""+e+c,P=(0,a.useMemo)((()=>f?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,a.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{R(e)})):R(void 0))}),[f,E]);const b=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==f&&y(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.Z)(A,l);S((()=>(0,d.m)(e,t,100)))}()}),[l,A]),a.createElement(a.Fragment,null,a.createElement(s.A,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,P)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,P),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.A)("col",{[v.searchQueryColumn]:Array.isArray(x.Hg),"col--9":Array.isArray(x.Hg),"col--12":!Array.isArray(x.Hg)})},a.createElement("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:b,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(x.Hg)?a.createElement("div",{className:(0,m.A)("col","col--3","padding-left--none",v.searchContextColumn)},a.createElement("select",{name:"search-context",className:v.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},x.dz?(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),x.Hg.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!E&&f&&a.createElement("div",null,a.createElement(C.A,null)),I&&(I.length>0?a.createElement("p",null,t(I.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(w,{key:e.document.i,searchResult:e}))))))}function w(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(x.CU&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i="?"+e.toString()}return a.createElement("article",{className:v.searchResultItem},a.createElement("h2",null,a.createElement(c.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.Z)(h,l):(0,y.C)(h,(0,E.g)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:v.searchResultItemPath},(0,S.$)(m)),u&&a.createElement("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.C)(t.t,(0,E.g)(s,"t"),l,100)}}))}const R=function(){return a.createElement(l.A,null,a.createElement(I,null))}}}]);