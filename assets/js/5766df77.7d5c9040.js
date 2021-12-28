(self.webpackChunk=self.webpackChunk||[]).push([[15996],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13120:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],l={id:"conversion-playbook",title:"Conversion Playbook",original_id:"conversion-playbook"},p=void 0,s={unversionedId:"conversion-playbook",id:"version-v3.0.0/conversion-playbook",isDocsHomePage:!1,title:"Conversion Playbook",description:"Incrementally modernize your Relay Classic app in these steps:",source:"@site/versioned_docs/version-v3.0.0/Modern-ConversionPlaybook.md",sourceDirName:".",slug:"/conversion-playbook",permalink:"/docs/v3.0.0/conversion-playbook",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v3.0.0/Modern-ConversionPlaybook.md",version:"v3.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1640725970,formattedLastUpdatedAt:"12/28/2021",frontMatter:{id:"conversion-playbook",title:"Conversion Playbook",original_id:"conversion-playbook"},sidebar:"version-v3.0.0/docs",previous:{title:"Migration Setup",permalink:"/docs/v3.0.0/migration-setup"},next:{title:"Conversion Scripts",permalink:"/docs/v3.0.0/conversion-scripts"}},c=[{value:"Step 0: Install and configure your environment",id:"step-0-install-and-configure-your-environment",children:[]},{value:"Step 1: Incrementally convert to Relay Compat",id:"step-1-incrementally-convert-to-relay-compat",children:[]},{value:"Step 2: Introduce <code>&lt;QueryRenderer&gt;</code>",id:"step-2-introduce-queryrenderer",children:[]},{value:"Step 3: Introduce Relay Modern runtime",id:"step-3-introduce-relay-modern-runtime",children:[]},{value:"Step 4: Clean up by replacing Relay Compat with Relay Modern.",id:"step-4-clean-up-by-replacing-relay-compat-with-relay-modern",children:[]},{value:"Note: Determining variable values at runtime",id:"note-determining-variable-values-at-runtime",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Incrementally modernize your Relay Classic app in these steps:"),(0,o.kt)("h2",{id:"step-0-install-and-configure-your-environment"},"Step 0: Install and configure your environment"),(0,o.kt)("p",null,"Follow the steps outlined in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v3.0.0/migration-setup"},"Migration Setup")," guide."),(0,o.kt)("h2",{id:"step-1-incrementally-convert-to-relay-compat"},"Step 1: Incrementally convert to Relay Compat"),(0,o.kt)("p",null,"Start converting your components and mutations to use the Relay Modern APIs from the ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/compat'")," module (",(0,o.kt)("inlineCode",{parentName:"p"},"createFragmentContainer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createRefetchContainer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createPaginationContainer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"commitMutation"),"). It will be easier to go from the leaf components up. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relayjs/relay-codemod"},"conversion scripts")," should make this step less tedious."),(0,o.kt)("p",null,"If a fragment uses variables that are determined at runtime, ",(0,o.kt)("a",{parentName:"p",href:"#note-determining-variable-values-at-runtime"},"see below"),"."),(0,o.kt)("h2",{id:"step-2-introduce-queryrenderer"},"Step 2: Introduce ",(0,o.kt)("inlineCode",{parentName:"h2"},"<QueryRenderer>")),(0,o.kt)("p",null,"Once all the components and mutations have been converted to use the Relay Modern APIs, convert to using ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay.Renderer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay.RootContainer"),". You may supply ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/classic'")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," for most cases."),(0,o.kt)("h2",{id:"step-3-introduce-relay-modern-runtime"},"Step 3: Introduce Relay Modern runtime"),(0,o.kt)("p",null,"Once a few or all of your views are using ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/classic'")," could be replaced with a ",(0,o.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment"),". Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," do not share any data. You might want to hold off on this step until views that have significant data overlap can be switched over at the same time. This step is what unlocks the perf wins for your app. Apps using the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," get to send persisted query IDs instead of the full query strings to the server, as well as much more optimized data normalizing and processing."),(0,o.kt)("h2",{id:"step-4-clean-up-by-replacing-relay-compat-with-relay-modern"},"Step 4: Clean up by replacing Relay Compat with Relay Modern."),(0,o.kt)("p",null,"Switch the ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/compat'")," references in your app to ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay'"),". This is more of a clean-up step that prevents your app from pulling in unnecessary ",(0,o.kt)("inlineCode",{parentName:"p"},"'react-relay/classic'")," code."),(0,o.kt)("h2",{id:"note-determining-variable-values-at-runtime"},"Note: Determining variable values at runtime"),(0,o.kt)("p",null,"There is currently only one supported way to set the initial value of a variable dynamically: using global variables defined on the query that includes the fragment (or via ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),")."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"currentDate")," is set in ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),", then $currentDate may be referenced in any fragment included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"createRefetchContainer")," then your ",(0,o.kt)("inlineCode",{parentName:"p"},"refetch")," method may also update these variables to render with new values."))}u.isMDXComponent=!0}}]);