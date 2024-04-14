"use strict";(self.webpackChunkpmd_docs=self.webpackChunkpmd_docs||[]).push([[368],{3133:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(4848),s=i(8453);const a={sidebar_position:3},r="Setting KPI Structure",o={id:"application-roles/manager-dashboard/setting-kpi",title:"Setting KPI Structure",description:"KPIs, the fundamental components of a performance dashboard, are meticulously organized under strategic objectives, which are in turn grouped into perspectives. These KPIs must be well-identified, specific, measurable, and aligned with the organization\u2019s vision, mission, and objectives.",source:"@site/docs/application-roles/manager-dashboard/setting-kpi.md",sourceDirName:"application-roles/manager-dashboard",slug:"/application-roles/manager-dashboard/setting-kpi",permalink:"/pmd-docs/docs/application-roles/manager-dashboard/setting-kpi",draft:!1,unlisted:!1,editUrl:"https://github.com/tech-acs/pmd-docs/tree/main/docs/application-roles/manager-dashboard/setting-kpi.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuring Dashboard Variables",permalink:"/pmd-docs/docs/application-roles/manager-dashboard/config-dashboard"},next:{title:"Quarterly report generation and data processing",permalink:"/pmd-docs/docs/application-roles/manager-dashboard/gen-quarterly-report"}},c={},d=[{value:"Coding scheme of dashboard structure",id:"coding-scheme-of-dashboard-structure",level:2},{value:"STEP 1",id:"step-1",level:3},{value:"STEP 2:",id:"step-2",level:3},{value:"STEP 3:",id:"step-3",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setting-kpi-structure",children:"Setting KPI Structure"}),"\n",(0,n.jsxs)(t.p,{children:["KPIs, the fundamental components of a performance dashboard, are meticulously organized under ",(0,n.jsx)(t.strong,{children:"strategic objectives"}),", which are in turn grouped into perspectives. These KPIs must be well-identified, specific, measurable, and aligned with the organization\u2019s vision, mission, and objectives."]}),"\n",(0,n.jsx)(t.p,{children:"Additionally, they require defined formulas for their calculation and vertical aggregation into strategic objectives and perspectives. For effective time-based comparison, a longer lifespan for KPIs is crucial.The dashboard structure is defined starting from the top level, with perspectives, then moving down to strategic objectives, and finally to KPIs and its components."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Perspectives:"})," These are high-level categories or viewpoints from which an organization\u2019s performance is\nevaluated. Examples include financial perspective, customer perspective, internal processes, and learning\nand growth."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Strategic Objectives:"})," These are specific goals set within each perspective, aimed at achieving the\norganization\u2019s overall strategic plan. They translate the organization\u2019s vision and mission into actionable\ngoals."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"KPIs:"})," These are measurable values used to evaluate the success in achieving strategic objectives. KPIs provide\nquantifiable metrics directly linked to both strategic objectives and perspectives."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Components:"})," These atomic-level variables are integral for capturing raw data that is essential in measuring KPIs. They include elements like the numerator and denominator, which are necessary for converting a KPI into a percentage or rate, or for deriving KPI results through a formula. The strategic implementation of components in the dashboard system ensures that KPIs are calculated efficiently as rates and percentages internally, thereby streamlining the process. This approach also maintains consistency in data handling and\npreserves raw data, which is crucial for purposes of auditing and verification."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"coding-scheme-of-dashboard-structure",children:"Coding scheme of dashboard structure"}),"\n",(0,n.jsx)(t.p,{children:"Before starting In addition to the hierarchy mentioned previously, a coding scheme has been adopted to uniquely identify KPIs, strategic objectives, and perspectives. This scheme not only facilitates unique identification but also helps in determining the level of a specific measure, both by the system and the users. The application adheres to the following coding structure to ensure the proper functioning of the system:"}),"\n",(0,n.jsxs)(t.p,{children:["Perspectives are assigned one letter code. For example, ",(0,n.jsx)(t.code,{children:"B"})," represents the Business Processes Perspective."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Strategic objectives are identified by incorporating the code of the perspective they belong to, followed by an\nadditional letter representing the objective measure, and a digit from 1 to n, denoting the count of objectives.\nFor instance, ",(0,n.jsx)(t.code,{children:"BC1"})," might signify the first Customer Satisfaction strategic objective."]}),"\n",(0,n.jsxs)(t.li,{children:["KPIs under strategic objectives will adopt their respective strategic objective\u2019s code, followed by a decimal point\nand a sequential number. For example, ",(0,n.jsx)(t.code,{children:"BC1.1"})," denotes the first KPI under the Customer Satisfaction objective."]}),"\n",(0,n.jsxs)(t.li,{children:["Components under KPIs will use their parent KPI\u2019s code plus a decimal point and a sequential number. For example, ",(0,n.jsx)(t.code,{children:"BC1.1.1"})," refers to the first component under the first KPI of Customer Satisfaction."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In defining the structure, it is crucial to strictly adhere to this coding scheme, as the dashboard utilizes these codes to identify and map the relationships within the hierarchies. The precise use of these codes is essential for the accurate functioning of the system, ensuring that each element \u2013 whether a perspective, strategic objective, KPI, or component \u2013 is correctly classified and linked within the overall framework. This systematic approach aids in maintaining clarity and consistency across the dashboard, facilitating effective tracking, analysis, and reporting of\nthe respective scores."}),"\n",(0,n.jsx)(t.p,{children:"For details please refer annex I"}),"\n",(0,n.jsx)(t.h3,{id:"step-1",children:"STEP 1"}),"\n",(0,n.jsx)(t.p,{children:"To begin defining the dashboard structure, click the \u201cAPPS\u201d tab to view the available applications. Alternatively,\nselecting \u201cManage KPI\u201d from the left side menu will present a series of menu items, as illustrated below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Dashboard Home Page Management KPI",src:i(3889).A+"",width:"1406",height:"712"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2",children:"STEP 2:"}),"\n",(0,n.jsxs)(t.p,{children:["Select the specific structure you wish to define. For instance, to define ",(0,n.jsx)(t.code,{children:"Perspectives"})," click on its respective menu item on the left side show above or the corresponding app card. This action will lead you to the screen displayed below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Perspective Definition Page",src:i(4601).A+"",width:"1425",height:"668"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3",children:"STEP 3:"}),"\n",(0,n.jsxs)(t.p,{children:["To create a perspective, click the ",(0,n.jsx)(t.code,{children:"+ Add perspective"})," button located at the top right of the page. This action will bring up a new screen, as depicted in Figure 10, where you can enter the required details. After filling\nin this information, click the ",(0,n.jsx)(t.code,{children:"Add"})," button on the popup to save your entry. You will then be redirected back to the\n\u201cPerspective definition\u201d page."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Perspective Entry Popup Screen",src:i(5068).A+"",width:"1434",height:"682"})}),"\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.a,{href:"#step-2",children:"Perspective definition"})," page, you have a variety of functions at your disposal:"]}),"\n",(0,n.jsx)(t.p,{children:"(A) To view an existing entry, click the view icon (\ud83d\udc41\ufe0f) located in the action column."}),"\n",(0,n.jsx)(t.p,{children:"(B) For editing an entry, select the pencil icon (\ud83d\udd89), also found under the action column."}),"\n",(0,n.jsx)(t.p,{children:"(C) To remove an entry, click the delete icon (\ud83d\uddd1\ufe0f)."}),"\n",(0,n.jsx)(t.p,{children:"(D) Additionally, at the top of the page, there is a search box to help you filter and locate specific entries, making it easier to navigate through them."}),"\n",(0,n.jsx)(t.p,{children:"(E) If there are more entries than can fit on a single page, you will find page navigation controls at the bottom of the page to help you move through multiple pages."}),"\n",(0,n.jsx)(t.p,{children:"The procedure for defining strategic objectives, KPIs, and Components is quite similar. Simply choose the relevant\nmenu item to begin. You will notice that once you are accustomed to the process in one area, navigating the others\nbecomes much more intuitive. The key difference in each page is the specific information you need to input, but the\noverall user experience is designed to be uniform and user-friendly."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3889:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dashboard-home-page-mamage-kpi-bd2886bf664416f697ce39730ce28c6d.png"},4601:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/perspective-definition-page-b27218fc27be2878fafc5b8249b760d2.png"},5068:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/perspective-entry-popup-screen-372860e7605ffd680a8f105e4159899d.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);