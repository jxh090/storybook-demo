import{j as n}from"./iframe-DISEpOVT.js";import{useMDXComponents as t}from"./index-FywDQmQC.js";import{M as a,A as d,C as s}from"./blocks-CS2h05jS.js";import{H as i,L as l,a as c}from"./Header.stories-tljEFUZs.js";import"./index-xushhb0_.js";import"./Button-BTGb1Dqk.js";function r(o){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:i}),`
`,n.jsx(e.h1,{id:"header",children:"Header"}),`
`,n.jsxs(e.p,{children:["The Header component displays the top navigation bar of your application.",n.jsx(e.br,{}),`
`,"It typically includes branding, navigation links, and user authentication actions such as login, logout, and account creation."]}),`
`,n.jsx(e.p,{children:"Use the Header to provide users with consistent access to key navigation and account features across your app."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Branding:"})," Display your application's logo or name prominently."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigation:"})," Provide links to key sections of your application."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"User Actions:"})," Include buttons or menus for login, logout, and account creation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Responsiveness:"})," Adapts to different screen sizes for mobile and desktop users."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility:"})," Designed to be accessible for all users, including keyboard and screen reader support."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use the Header component, import it and include it at the top of your application's layout.",n.jsx(e.br,{}),`
`,"You can customize the navigation links and user actions by passing the appropriate props."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Header } from './Header';

<Header
  user={user}
  onLogin={handleLogin}
  onLogout={handleLogout}
  onCreateAccount={handleCreateAccount}
/>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(e.h2,{id:"customization",children:"Customization"}),`
`,n.jsxs(e.p,{children:["You can customize the Header by providing your own branding, navigation links, or user menu.",n.jsx(e.br,{}),`
`,"For advanced customization, consider extending the Header component or using composition."]}),`
`,n.jsx(e.h3,{id:"example-custom-navigation",children:"Example: Custom Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Header
  user={user}
  onLogin={handleLogin}
  onLogout={handleLogout}
  onCreateAccount={handleCreateAccount}
  navLinks={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep navigation simple and intuitive."}),`
`,n.jsx(e.li,{children:"Ensure the Header is visible and accessible on all pages."}),`
`,n.jsx(e.li,{children:"Use clear labels for navigation and user actions."}),`
`,n.jsx(e.li,{children:"Test the Header on different devices and screen sizes."}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:"Below are examples of the Header component in different states:"}),`
`,n.jsx(e.h3,{id:"logged-in",children:"Logged In"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h3,{id:"logged-out",children:"Logged Out"}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sidebar:"})," For additional navigation options."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Footer:"})," For secondary navigation and information."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"UserMenu:"})," For user-specific actions and settings."]}),`
`]}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"If the Header does not appear, ensure it is imported and rendered in your layout."}),`
`,n.jsx(e.li,{children:"Check that all required props are provided."}),`
`,n.jsx(e.li,{children:"Review the browser console for any errors or warnings."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["For more information, see the ",n.jsx(e.a,{href:"https://storybook.js.org/docs",rel:"nofollow",children:"Storybook documentation"}),"."]})]})}function m(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{m as default};
