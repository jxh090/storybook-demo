import{j as e}from"./iframe-TBkqYGYO.js";import{useMDXComponents as i}from"./index-4VLrByV5.js";import{M as l}from"./blocks-Dkwo_4ug.js";import"./index-YdiKGdgz.js";const c={"Primary/Default":"#ab0c0c","Secondary/Default":"#f4c900","Tertiary/Default":"#ae79ff"};function o(n){const t={br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design Tokens/Colors"}),`
`,e.jsx(t.h1,{id:"color-tokens",children:"Color Tokens"}),`
`,e.jsxs(t.p,{children:["This page documents the color tokens used in this design system.",e.jsx(t.br,{}),`
`,"Each color is shown with its name and hex value."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"palette",children:"Palette"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left"},children:"Token Name"}),e.jsx("th",{style:{textAlign:"left"},children:"Color"}),e.jsx("th",{style:{textAlign:"left"},children:"Hex Value"})]})}),e.jsx("tbody",{children:Object.entries(c).map(([s,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:e.jsx("span",{style:{background:r,display:"inline-block",width:32,height:32,border:"1px solid #ccc",borderRadius:4,verticalAlign:"middle",margin:2}})}),e.jsx("td",{children:e.jsx("code",{children:r})})]},s))})]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["*To update this table, edit ",e.jsx(t.code,{children:"tokens/colors.json"})," and re-generate"]})]})}function j(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
