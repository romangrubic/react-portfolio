(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,a,t){e.exports={TextCenter:"ProjectPage_TextCenter__2DOlB",ProjectName:"ProjectPage_ProjectName__3K5A7",Center:"ProjectPage_Center__2XUHH",Pitch:"ProjectPage_Pitch__kLbFG",Picture:"ProjectPage_Picture__3S_GA",List:"ProjectPage_List__2j_Kd"}},,,,,,,,,function(e,a,t){},,function(e,a,t){e.exports={Header:"Contact_Header__1frr4",Paragraph:"Contact_Paragraph__Xp5GW",Center:"Contact_Center__1x-Rk",Form:"Contact_Form__3dXyt",Input:"Contact_Input__1EZlH",SubmitButton:"Contact_SubmitButton__36nIE",bg:"Contact_bg__1_x8h",slide:"Contact_slide__3_LTw"}},,,,function(e,a,t){e.exports={SideDrawer:"SideBar_SideDrawer__2CBQt",Name:"SideBar_Name__2OhFx",Open:"SideBar_Open__3RwEW",Close:"SideBar_Close__1m-QJ",Logo:"SideBar_Logo__Hq_Wb"}},,function(e,a,t){e.exports={SocialLinks:"SocialLinks_SocialLinks__30hCk",SocialLink:"SocialLinks_SocialLink__2sams"}},,function(e,a,t){e.exports={context:"Landing_context__3CQWS",area:"Landing_area__1VnEv",circles:"Landing_circles__3FEqT",animate:"Landing_animate__3s19b"}},,function(e,a,t){e.exports={Toolbar:"DesktopNav_Toolbar__T3yPT",Logo:"DesktopNav_Logo__1KYGT",Name:"DesktopNav_Name__1CcsR"}},function(e,a,t){e.exports={Content:"Layout_Content__PrDi6",MobileOnly:"Layout_MobileOnly__2qExE",DesktopOnly:"Layout_DesktopOnly__3u4g1"}},,function(e,a,t){e.exports={ProjectRow:"Portfolio_ProjectRow__3xtJm",bg:"Portfolio_bg__2kDE5",slide:"Portfolio_slide__1Z31W"}},function(e,a,t){e.exports={Project:"Projects_Project__2Zyyo",Logo:"Projects_Logo__grpz4"}},function(e,a,t){e.exports={NavItem:"NavItem_NavItem__23ull"}},,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/responsive-star-trek.dee73c71.png"},function(e,a,t){e.exports=t.p+"static/media/responsive-snoop.bd7aaeb1.png"},function(e,a,t){e.exports=t.p+"static/media/responsive-weather.96756ea6.png"},function(e,a,t){e.exports=t.p+"static/media/responsive-burger.a2ce0d0c.png"},function(e,a,t){e.exports=t.p+"static/media/responsive.01f751c4.png"},,,function(e,a,t){e.exports={Ul:"NavigationItems_Ul__PWirY"}},function(e,a,t){e.exports=t.p+"static/media/profilepic.173beb66.png"},function(e,a,t){e.exports={Logo:"Logo_Logo__3ME4O"}},,function(e,a,t){e.exports={Toolbar:"MobileNav_Toolbar__3xOHU",Logo:"MobileNav_Logo__1Z5Lf"}},function(e,a,t){e.exports={Hamburger:"Hamburger_Hamburger__cJ-XM"}},function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,,,function(e,a,t){e.exports=t(75)},,,,,function(e,a,t){},,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),o=t.n(l),c=t(17),i=(t(63),t(15)),s=(t(64),t(20)),m=t.n(s),u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.context},r.a.createElement("h1",null,"Hello!"),r.a.createElement("h1",null,"Looking for JS or Python developer?"),r.a.createElement("br",null),r.a.createElement("h1",null,"Check my portfolio and get in touch!")),r.a.createElement("div",{className:m.a.area},r.a.createElement("ul",{className:m.a.circles},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null))))},h=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"About page"))},d=t(35),p=t(36),E=t(37),g=t(57),f=t(55),b=t(38),_=t.n(b),k=t(12),v=t.n(k),y=function(e){Object(g.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",message:""},e.handleChange=function(a,t){e.setState(Object(d.a)({},a,t.target.value))},e}return Object(E.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t={from_name:a.name,from_email:a.email,project_request:a.message};_.a.send("gmail","contact",t,"user_wwo3XzSnMgSAR5hgP5jJv"),this.resetForm(),alert("Your inquiry has been successfully sent! We'll be in touch shortly!")}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.bg}),r.a.createElement("h1",{className:v.a.Header},"Get in Touch"),r.a.createElement("p",{className:v.a.Paragraph},"Or look me up on LinkedIn and Github"),r.a.createElement("form",{className:v.a.Form,onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",className:v.a.Input,required:!0,value:this.state.name,onChange:this.handleChange.bind(this,"name"),placeholder:"Name"})),r.a.createElement("div",null,r.a.createElement("input",{type:"email",name:"email",className:v.a.Input,required:!0,value:this.state.email,onChange:this.handleChange.bind(this,"email"),placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement("textarea",{type:"textarea",name:"message",className:v.a.Input,required:!0,rows:7,value:this.state.message,onChange:this.handleChange.bind(this,"message"),placeholder:"Message"})),r.a.createElement("div",{className:v.a.Center},r.a.createElement("button",{className:v.a.SubmitButton,type:"submit"},"Send!"))))}}]),t}(n.Component),N=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Experience page"))},w=t(25),P=t.n(w),S=t(39),j=t(26),L=t.n(j),x=function(e){return r.a.createElement(S.a,{xs:12,sm:6,className:L.a.Project},r.a.createElement("a",{href:e.link},r.a.createElement("div",{className:L.a.Logo},e.img)),r.a.createElement("h1",null,e.projectName))},C=t(8),I=t(5),T=t(41),A=t.n(T),D=t(10),O=t.n(D),B=function(e){return r.a.createElement("img",{className:O.a.Logo,src:A.a,alt:"Icon"})},W=t(42),F=t.n(W),H=function(e){return r.a.createElement("img",{className:O.a.Logo,src:F.a,alt:"Icon"})},G=t(43),M=t.n(G),R=function(e){return r.a.createElement("img",{className:O.a.Logo,src:M.a,alt:"Icon"})},J=t(44),q=t.n(J),U=function(e){return r.a.createElement("img",{className:O.a.Logo,src:q.a,alt:"Icon"})},Q=t(45),z=t.n(Q),V=function(e){return r.a.createElement("img",{className:O.a.Logo,src:z.a,alt:"Icon"})},X=function(e){return r.a.createElement(C.a,null,r.a.createElement("div",{className:P.a.bg}),r.a.createElement(I.a,{className:P.a.ProjectRow},r.a.createElement(x,{link:"/portfolio/Star-Trek-Project",projectName:"Star Trek",img:r.a.createElement(B,null)}),r.a.createElement(x,{link:"portfolio/Snoop",projectName:"Snoop",img:r.a.createElement(H,null)}),r.a.createElement(x,{link:"/portfolio/Weather-360",projectName:"Weather 360\xb0",img:r.a.createElement(R,null)}),r.a.createElement(x,{link:"/portfolio/Burger-Shack",projectName:"Burger Shack",img:r.a.createElement(U,null)}),r.a.createElement(x,{link:"/portfolio/Animals",projectName:"Animals",img:r.a.createElement(V,null)})))},Y=(t(67),t(56)),K=t(27),Z=t.n(K),$=function(e){return r.a.createElement("li",{className:Z.a.NavItem},r.a.createElement(c.b,{className:Z.a.customunderline,to:e.link},e.children))},ee=t(48),ae=t.n(ee),te=function(e){return r.a.createElement("ul",{className:ae.a.Ul},r.a.createElement($,{link:"/portfolio"},"Portfolio"),r.a.createElement($,{link:"/experience"},"Experience"),r.a.createElement($,{link:"/about"},"About me"),r.a.createElement($,{link:"/contact"},"Contact me!"))},ne=t(49),re=t.n(ne),le=t(50),oe=t.n(le),ce=function(e){return r.a.createElement("div",{className:oe.a.Logo},r.a.createElement("img",{src:re.a,alt:"Icon"}))},ie=t(21),se=t(31),me=t(51),ue=t(18),he=t.n(ue),de=r.a.createElement("a",{href:"https://www.linkedin.com/in/roman-grubic-b835ab67/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ie.a,{icon:se.b,size:"3x",className:he.a.SocialLink})),pe=r.a.createElement("a",{href:"https://github.com/romangrubic",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ie.a,{icon:se.a,size:"3x",className:he.a.SocialLink})),Ee=r.a.createElement("a",{href:"https://raw.githubusercontent.com/romangrubic/react-portfolio/master/src/assets/CV/RomanGrubic.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ie.a,{icon:me.a,size:"3x",className:he.a.SocialLink})),ge=function(e){return r.a.createElement("div",{className:he.a.SocialLinks},de,pe,Ee)},fe=t(22),be=t.n(fe),_e=function(e){return r.a.createElement("header",{className:be.a.Toolbar},r.a.createElement("div",{className:be.a.Logo},r.a.createElement("a",{href:"/"},r.a.createElement(ce,null))),r.a.createElement("div",{className:be.a.Name},r.a.createElement("h1",null,"Roman Grubic"),r.a.createElement("h4",null,"Full-stack developer")),r.a.createElement("br",null),r.a.createElement("nav",null,r.a.createElement(te,null)),r.a.createElement(ge,null))},ke=t(52),ve=t.n(ke),ye=t(53),Ne=t.n(ye),we=function(e){return r.a.createElement("div",{className:Ne.a.Hamburger,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},Pe=function(e){return r.a.createElement("header",{className:ve.a.Toolbar},r.a.createElement(we,{clicked:e.hamburgerClicked}))},Se=t(23),je=t.n(Se),Le=t(16),xe=t.n(Le),Ce=t(54),Ie=t.n(Ce),Te=function(e){return e.show?r.a.createElement("div",{className:Ie.a.Backdrop,onClick:e.clicked}):null},Ae=function(e){var a=[xe.a.SideDrawer,xe.a.Close];return e.open&&(a=[xe.a.SideDrawer,xe.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" ")},r.a.createElement("a",{href:"/"},r.a.createElement(ce,null)),r.a.createElement("div",{className:xe.a.Name},r.a.createElement("h1",null,"Roman Grubic"),r.a.createElement("h2",null,"Full-stack developer")),r.a.createElement("nav",{onClick:e.closed},r.a.createElement(te,null)),r.a.createElement(ge,null)))},De=function(e){var a=Object(n.useState)(!1),t=Object(Y.a)(a,2),l=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,{className:je.a.DesktopOnly}),r.a.createElement(Pe,{className:je.a.MobileOnly,hamburgerClicked:function(){o(!l)}}),r.a.createElement(Ae,{closed:function(){o(!1)},open:l}),r.a.createElement("main",{className:je.a.Content},e.children))},Oe=t(1),Be=t.n(Oe),We=t(6),Fe=function(e){return r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:Be.a.Picture},r.a.createElement(B,null))),r.a.createElement(I.a,{className:Be.a.Center},r.a.createElement("a",{href:"https://github.com/romangrubic/Star-Trek-Django",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"info"},"Source code")),r.a.createElement("a",{href:"https://star-trek-by-romangrubic.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"danger"},"Live website"))),r.a.createElement("div",{className:Be.a.TextCenter},r.a.createElement("h2",{className:Be.a.ProjectName},"Star Trek")),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("p",null,"Do you like Star Trek? Are you looking for a community of people who like Star Trek franchise as much as you? Then join our community! We have news from Star Trek franchise and Federation itself! You can find nice goodies for you or friends in our store. Yes, of course we have Raktajino mugs. Or just join for discussion about everything Star Trek in our Forum where you can chat with other Trekkies. Live long and prosper!")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,"The goal of this project was to allow the user to create an account and make a purchase of product/membership with Stripe. Database used is a SQL database PostgresSQL.",r.a.createElement("br",null),"I am a big Star Trek fan so for my last project with Code Institute, I decided to make a Star Trek web-site, where beside creating account and purchasing a product via Stripe, user can also read news from Star Trek franchise, find games about Star Trek and join discussions about Star Trek in a discussion forum. Users can also chat via private messaging system and edit their profiles so beside this project being a web-shop, it is also a social network for people who like Star Trek.")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Main Technology used"),r.a.createElement("ul",{className:Be.a.List},r.a.createElement("li",null,"Python - Django Framework"),r.a.createElement("li",null,"PostgresSQL"),r.a.createElement("li",null,"Stripe"),r.a.createElement("li",null,"Heroku"),r.a.createElement("li",null,"GitHub"),r.a.createElement("li",null,"TravisCI"),r.a.createElement("li",null,"AWS-S3"))))},He=function(e){return r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:Be.a.Picture},r.a.createElement(H,null))),r.a.createElement(I.a,{className:Be.a.Center},r.a.createElement("a",{href:"https://github.com/romangrubic/Snoop-Adverts-Flask",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"info"},"Source code")),r.a.createElement("a",{href:"https://adverts-project.herokuapp.com/home",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"danger"},"Live website"))),r.a.createElement("div",{className:Be.a.TextCenter},r.a.createElement("h2",{className:Be.a.ProjectName},"Snoop")),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("p",null,"Tired of signing up just to place your toaster or TV in order to get few bobs? Tired of unwanted spam mail in your e-mail about adverts that don't interest you? With Snoop you don't have to give your e-mail or phone number! No more long sign-up process and you have more time to snoop for a good deal on that car you like!")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,"The goal of this project was to allow the user to make simple operations where it could create, retrieve, update and delete data. Database used is a noSQL database MongoDB.",r.a.createElement("br",null),"The project is a web-site where user can post their adverts (similar to DoneDeal, Adverts, Gumtree...) and buy from others and also for companies or users to rent out side spaces on the pages to promote their bussines (that space is coloured in lightblue in order to be visible from rest of the site and is clickable. When it is clicked, it will open a contact modal).")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Main Technology used"),r.a.createElement("ul",{className:Be.a.List},r.a.createElement("li",null,"Python - Flask Framework"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"Heroku"),r.a.createElement("li",null,"GitHub"),r.a.createElement("li",null,"EmailJS"))))},Ge=function(e){return r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:Be.a.Picture},r.a.createElement(R,null))),r.a.createElement(I.a,{className:Be.a.Center},r.a.createElement("a",{href:"https://github.com/romangrubic/weather-app-openweather",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"info"},"Source code")),r.a.createElement("a",{href:"https://romangrubic.github.io/weather-app-openweather/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"danger"},"Live website"))),r.a.createElement("div",{className:Be.a.TextCenter},r.a.createElement("h2",{className:Be.a.ProjectName},"Weather 360\xb0")),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("p",null,"Since the beginning of time, humans used to predict weather just by looking into skies. Sometimes they would be right, more often wrong. But, no more!",r.a.createElement("br",null),"Introducing Weather 360\xb0, web-site that shows weather around the globe! Look for current and future weather for any city on Earth (hope to include Lunar colonies and even Martian colonies including Utopia Planitia in near future!). See the cities location on a map and even roam the city streets using Pegman in full-screen mode. Just like the simulations!")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,"This is made with collaboration between three different API's (OpenWeather API, DarkSky API and Google maps API) and a proxy. My choice in deciding which API's to use was mainly in their simplicity. I started this project using DarkSky API. In order to make the DarkSky API to work, I had to use a proxy to bypass CORS problem. I googled how to bypass cors and found this nice proxy CORS anywhere solution, which is described as an API that enables cross-origin requests to anywhere. After that problem, I found out that DarkSky API can only locate a city based on it's coordinates, which restricted it and made complicated for user to use (it is simpler to type city name instead of latitude and longtitude). This is when I found about OpenWeather API. This API uses only city name to search it's database of weather information but has restricted access to some information and in order to get same amount of data as in DarkSky API, I would need to pay. So, I faced dilemma about which one to use and finally decided to combine this two API's and make them work together in order to give the best user experience. I took from OpenWeather API it's capability to sort through database easily just by typing city name. Once the user types city name and selects country (country selection is optional), it feeds DarkSky API with coordinates of the city and in that way I can access more information that I thought would be desirable for user to see. Also, in same way OpenWeather API feeds coordinates into Google maps API to show the user exact location of the searched city. User can use the Google maps in full-screen mode and also can go into StreetView mode but each user has a certain amount of calls to Google maps and once he reaches the limit, has to wait for it to reset.",r.a.createElement("br",null),"All three API's and a proxy, work together to give the user as best experience and as intuitive design as they can.")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Main Technology used"),r.a.createElement("ul",{className:Be.a.List},r.a.createElement("li",null,"Javascript ES6"),r.a.createElement("li",null,"OpenWeather API"),r.a.createElement("li",null,"DarkSky API"),r.a.createElement("li",null,"Google maps API"),r.a.createElement("li",null,"GitHub"),r.a.createElement("li",null,"EmailJS"))))},Me=function(e){return r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:Be.a.Picture},r.a.createElement(V,null))),r.a.createElement(I.a,{className:Be.a.Center},r.a.createElement("a",{href:"https://github.com/romangrubic/memory-game-js",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"info"},"Source code")),r.a.createElement("a",{href:"https://romangrubic.github.io/memory-game-js/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"danger"},"Live website"))),r.a.createElement("div",{className:Be.a.TextCenter},r.a.createElement("h2",{className:Be.a.ProjectName},"Animals")),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("p",null,"Concentration, also known as Match, Memory, Pelmanism or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. It is a particularly good game for young children, though adults may find it challenging and stimulating as well. The invention of the memory game is sometimes attributed to Christopher Louis Pelman and the game is often called Pelmanism.")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Main Technology used"),r.a.createElement("ul",{className:Be.a.List},r.a.createElement("li",null,"Javascript ES6"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"GitHub"),r.a.createElement("li",null,"EmailJS"))))},Re=function(e){return r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("div",{className:Be.a.Picture},r.a.createElement(U,null))),r.a.createElement(I.a,{className:Be.a.Center},r.a.createElement("a",{href:"https://github.com/romangrubic/burger-shop",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"info"},"Source code")),r.a.createElement("a",{href:"https://romangrubic.github.io/burger-shop/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(We.a,{variant:"danger"},"Live website"))),r.a.createElement("div",{className:Be.a.TextCenter},r.a.createElement("h2",{className:Be.a.ProjectName},"Burger shack")),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("p",null,"Aching for a juicy burger? But there is not one to your liking? Burger shack to the rescue! With Burger shack you can make your own burger. Triple decker with cheese or extra salad and bacon? No problem, we make any burger you like! And deliver within 30min to your doors.",r.a.createElement("br",null),r.a.createElement("br",null),"* T&C may apply.")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,"The goal of this project was to learn ReactJS, React Hooks and Redux. Project is fully functional and allows user authorization through FirebaseDB. Every order is stored on the server and easily accessible.")),r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a.Pitch},r.a.createElement("h3",null,"Main Technology used"),r.a.createElement("ul",{className:Be.a.List},r.a.createElement("li",null,"ReactJS"),r.a.createElement("li",null,"Redux"),r.a.createElement("li",null,"Firebase"),r.a.createElement("li",null,"GitHub"))))},Je=function(){var e=r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/portfolio/Star-Trek-Project",component:Fe}),r.a.createElement(i.a,{path:"/portfolio/Snoop",component:He}),r.a.createElement(i.a,{path:"/portfolio/Weather-360",component:Ge}),r.a.createElement(i.a,{path:"/portfolio/Animals",component:Me}),r.a.createElement(i.a,{path:"/portfolio/Burger-shack",component:Re}),r.a.createElement(i.a,{path:"/portfolio",component:X}),r.a.createElement(i.a,{path:"/experience",component:N}),r.a.createElement(i.a,{path:"/about",component:h}),r.a.createElement(i.a,{path:"/contact",component:y}),r.a.createElement(i.a,{path:"/",component:u}));return r.a.createElement("div",null,r.a.createElement(De,null,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.f3090011.chunk.js.map