(this.webpackJsonpcollage=this.webpackJsonpcollage||[]).push([[0],{39:function(e,n,a){},40:function(e,n,a){},60:function(e,n,a){"use strict";a.r(n);var t=a(3),o=a.n(t),l=a(27),i=a.n(l),g=(a(39),a(40),a(28)),c=a(29),r=a(34),s=a(33),m=a(30),u=a.n(m),h=a(5),j=a(32).a.initializeApp({apiKey:"AIzaSyCxoRd2xv2CQZI869JCF9mWLd4BTZuRij0",authDomain:"collages-19c48.firebaseapp.com",projectId:"collages-19c48",storageBucket:"collages-19c48.appspot.com",messagingSenderId:"803762296517",appId:"1:803762296517:web:cc9c57cb0f94475ea002ac"}).firestore(),d=a(9),f=a(2);function b(e){var n=Object(t.useState)([]),a=Object(h.a)(n,2),o=a[0],l=a[1],i=Object(t.useState)(!1),g=Object(h.a)(i,2),c=g[0],r=g[1],s=Object(t.useState)(""),m=Object(h.a)(s,2),u=m[0],d=m[1],b=Object(t.useState)(""),y=Object(h.a)(b,2),O=y[0],v=y[1],C=Object(t.useState)(""),T=Object(h.a)(C,2),B=T[0],S=T[1],E=Object(t.useState)(!1),p=Object(h.a)(E,2),x=(p[0],p[1]),I=Object(t.useState)(e.clgName),N=Object(h.a)(I,2),M=N[0],A=N[1];Object(t.useEffect)((function(){A(e.clgName)}),[e.clgName]);var R=Object(t.useState)(""),k=Object(h.a)(R,2),w=(k[0],k[1],j.collection(M));return Object(t.useEffect)((function(){r(!0),w.onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(e.data())})),l(n),r(!1)}))}),[]),c?Object(f.jsx)("h1",{children:"Loading..."}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"clg-reviews",children:" All Reviews"}),o.map((function(e){return Object(f.jsxs)("div",{className:"rv-container",children:[Object(f.jsx)("h1",{className:"rv-arrow",children:">"}),Object(f.jsx)("h2",{className:"clg-rec",children:e.review}),Object(f.jsx)("u",{children:Object(f.jsx)("h2",{className:"clg-name",children:e.name})}),Object(f.jsx)("h2",{className:"clg-msg",children:e.email})]},e.name)})),Object(f.jsxs)("div",{className:"inputBox",children:[Object(f.jsx)("h3",{className:"clg-wrv",children:"Write Review"}),Object(f.jsx)("p",{className:"i-msg",children:"Select any one for Recommend to viewers"}),Object(f.jsxs)("select",{className:"rv-rec",value:B,onChange:function(e){var n=e.target.value;S(n)},children:[Object(f.jsx)("option",{value:"Select",children:"Select"}),Object(f.jsx)("option",{className:"rv-op",value:" \ud83d\udc4d Recommend",children:" Recommend"}),Object(f.jsx)("option",{className:"rv-op",value:" \ud83d\udc4e Not Recommend",children:" Not Recommend"})]}),Object(f.jsx)("input",{className:"rv-i-name",type:"text",value:u,placeholder:" Student or staffs ",onChange:function(e){return d(e.target.value)}}),Object(f.jsx)("textarea",{className:"rv-i-msg",value:O,placeholder:"Review",onChange:function(e){return v(e.target.value)}}),Object(f.jsx)("button",{className:"rv-button",onClick:function(){return e={name:u,email:O,review:B},void w.doc(e.id).set(e).then((function(){x(!1),alert("Your Review is submited Succesfully \ud83d\ude01 ")})).catch((function(e){console.error(e)}));var e},children:"Submit"})]})]})}var y=a(14);function O(){return Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsx)(y.b,{to:"/collage",children:Object(f.jsxs)("h1",{className:"f-head",children:["RateMy",Object(f.jsx)("span",{className:"f-h-c",children:"College"})]})}),Object(f.jsx)(y.b,{to:"/collage/Request",children:Object(f.jsx)("h2",{className:"f-ac",children:"Add college"})}),Object(f.jsx)(y.b,{children:Object(f.jsx)("h2",{className:"f-abt",children:"about us "})}),Object(f.jsx)("a",{href:"mailto:bjmanoj7@gmail.com",children:Object(f.jsx)("h2",{className:"f-c",children:"bjmanoj7@gmail.com"})})]})}var v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABbElEQVRIie2VPy9DYRSHn3N7G0lJmLC0A+IrWGg6CZdIJBazmCxVOooKE5pcm0R8BYOkZSBpMFmNGsOtoTaDdNHeY6pUW/Wvraj+tvfk/M7znve8yYH/JvmOaXovM6uqmwoiKmuJZf9RQ8GWnRkB3QaCZVWuUaLJcOCirmArfj+MR7dA52p6hDMKEklG/Dc/As/Yd30FMddVWQTMElPaNZgAMFxOFYZKbHkRDjya3zgODzx8CTy+k+30ep9XQKMKXVVM8UQ4sApg7TlxlEiVnCcV2c2ZHfHUUu9TTXAopqavx1kAiQH9NW6bzrsy6fUgruoJMPheLpAFjeUeA4epmOSLQbM0w9eTOQcJVnrfSmHIY+itqx9lAtAPsu/rzswDoWLQKOvEqLDVS0YDa/9tWbajlu1ovc7l+rV3b4Pb4NYDV2ynKdu5VBitM+QqEQ6Mlcaa0rEKn1snLa3XGTditlVgr7Nu6q9uz/p/6QVIGYSy88NO4QAAAABJRU5ErkJggg==",C=function(){return Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"nav-icon",src:v}),Object(f.jsx)(y.b,{to:"/collage",children:Object(f.jsxs)("h1",{className:"nav-head",children:["RateMy",Object(f.jsx)("span",{className:"f-h-c",children:"College"})]})})]}),Object(f.jsx)(N,{className:"nav-search"})]})};function T(e){var n=Object(t.useState)([]),a=Object(h.a)(n,2),o=a[0],l=a[1],i=Object(t.useState)(!1),g=Object(h.a)(i,2),c=g[0],r=g[1],s=Object(t.useState)(""),m=Object(h.a)(s,2),u=(m[0],m[1],Object(t.useState)("")),d=Object(h.a)(u,2),y=(d[0],d[1],Object(t.useState)("")),v=Object(h.a)(y,2),T=(v[0],v[1],j.collection("collages"));return Object(t.useEffect)((function(){r(!0),T.onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(e.data())})),l(n),r(!1)}))}),[]),c?Object(f.jsx)("h1",{children:"Loading..."}):Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),o.map((function(e){return Object(f.jsxs)("div",{className:"clg-container",children:[Object(f.jsx)("div",{className:"clg-name-container",children:Object(f.jsx)("h1",{className:"clg-head",children:e.name})}),Object(f.jsx)(b,{clgName:e.name})]},e.name)})),Object(f.jsx)(O,{})]})}var B=a.p+"static/media/search.ed5279fe.svg";function S(e){var n=Object(d.f)(),a=Object(t.useState)([]),o=Object(h.a)(a,2),l=o[0],i=o[1],g=Object(t.useState)(!1),c=Object(h.a)(g,2),r=(c[0],c[1]),s=Object(t.useState)(e.msg),m=Object(h.a)(s,2),u=m[0],b=m[1];Object(t.useEffect)((function(){b(e.msg)}),[e.msg]);var y=Object(t.useState)(""),O=Object(h.a)(y,2),v=(O[0],O[1],Object(t.useState)("")),C=Object(h.a)(v,2),T=(C[0],C[1],j.collection("collages"));function S(e){T.doc("college").set(e).then((function(){r(!1),alert("Your College is in the Collections \ud83e\udd1d "),n.push("/collage/Colleges")})).catch((function(e){console.error(e)}))}return Object(t.useEffect)((function(){r(!0),T.onSnapshot((function(e){var n=[];e.forEach((function(e){n.push(e.data())})),i(n),r(!1)}))}),[]),Object(f.jsxs)("div",{children:[l.map((function(e){return Object(f.jsx)("div",{},e.name)})),Object(f.jsxs)("div",{className:"input-b",children:[Object(f.jsx)("input",{className:"name-in",type:"text",value:u,onChange:function(e){return b(e.target.value)}}),Object(f.jsx)("button",{className:"button",onClick:function(){return S({name:u})},children:Object(f.jsx)("img",{rel:"icon",type:"image/svg+xml",className:"s-icon",src:B})})]})]})}var E=[{name:"Basaveshwar College of Engineering, Bagalkot"},{name:"B.M.S. College of Engineering, Bangalore"},{name:"Dr.Ambedkar Institute of Technology, Bangalore"},{name:"Dayananda Sagar College of Engineering, Bangalore"},{name:"K.L.S. Gogte Institute of Technology, Belgaum"},{name:"M.S. Ramaiah Institute of Technology, Bangalore"},{name:"Malnad College of Engineering, Hassan"},{name:"N.M.A.M. Institute of Technology, Nitte"},{name:"Nagarjuna College of Engineering and Technology, Bengaluru"},{name:"National Institute of Engineering, Mysore"},{name:"Nitte Meenakshi Institute of Technology, Bangalore"},{name:"PDA College of Engineering, Kalaburagi"},{name:"PES College of Engineering, Mandya"},{name:"R.V. College of Engineering, Bangalore"},{name:"RV Institute of Technology and Management, Bangalore"},{name:"Sri Siddhartha Institute of Technology, Tumkur"},{name:"Global Academy of Technology, Bangalore"},{name:"Government Engineering College, Hoovina Hadagali, Bellary district"},{name:"Government Engineering College, Chamarajnagar"},{name:"Government Engineering College, Hassan"},{name:"Government Engineering College, Haveri"},{name:"Government Engineering College, Karwar"},{name:"Government Engineering College, Krishnarajpet"},{name:"Government Engineering College, Kushalnagar"},{name:"Government Engineering College, Ramanagaram"},{name:"Government Engineering College, Raichur"},{name:"University B.D.T College of Engineering, Davangere"},{name:"Bangalore Institute of Technology, Bangalore"},{name:"Dayananda Sagar Academy of Technology and Management, Bangalore"},{name:"Sir M. Viveswaraya Institute of Technology, Bangalore"},{name:"J.S.S. Academy of Technical Education, Bangalore"},{name:"B.M.S. Institute of Technology, Bangalore"},{name:"C.M.R. Institute of Technology, Bangalore"},{name:"Acharya Institute of Technology, Bangalore"},{name:"New Horizon College of Engineering, Bangalore"},{name:"M.V. Jayaram College of Engineering, Bangalore"},{name:"SJB Institute of Technology, Bangalore"},{name:"R.N.S. Institute of Technology, Bangalore"},{name:"Sri Sairam College of Engineering, Bangalore"},{name:"Sri Venkateshwara College of Engineering, Bangalore"},{name:"The Oxford College of Engineering, Bangalore"},{name:"Vivekananda Institute of Technology, Bangalore"},{name:"B.T.L. Institute of Technology and Management, Bangalore"},{name:"Sri Revana Siddeshwara Institute of Technology, Bangalore"},{name:"B.N.M. Institute of Technology, Bangalore"},{name:"Sapthagiri College of Engineering, Bangalore"},{name:"Sai Vidya Institute of Technology, Bangalore"},{name:"Reva Institute of Technology and Management, Bangalore"},{name:"City Engineering College, Bangalore"},{name:"Kammavari Sangha Institute of Technology, Bangalore"},{name:"HKBK College of Engineering, Bangalore"},{name:"Bheemanna Khandre Institute of Technology, Bhalki"},{name:"Adichunchanagiri Institute of Technology, Chikmagalur"},{name:"Shri pillappa college of engineering Bangalore"},{name:"Vemana Institute of Technology, Bangalore"},{name:"AMC Institutions, Bangalore"},{name:"East Point College of Engineering and Technology, Bangalore"},{name:"Atria Institute of Technology, Bangalore"},{name:"K.N.S. Institute of Technology, Bangalore"},{name:"Don Bosco Institute of Technology, Bangalore"},{name:"Global Academy of Technology, Bangalore"},{name:"East West Institute of Technology, Bangalore"},{name:"Yellamma Dasappa Institute of Technology, Bangalore"},{name:"Sri Krishna Institute of Technology, Bangalore"},{name:"Sambhram Institute of Technology, Bangalore"},{name:"Sri Jagadguru Chandrasekaranathaswamiji Institute of Technology, Chickballapur"},{name:"Alpha College of Engineering, Bangalore"},{name:"A.P.S. College of Engineering, Bangalore"},{name:"Cambridge Institute of Technology, Bangalore"},{name:"Jnanavikasa Institute of Technology, Bangalore"},{name:"Amrutha Institute of Engineering and Management, Bangalore"},{name:"East Point College of Engineering for Women, Bangalore"},{name:"Brindavan College of Engineering, Bangalore"},{name:"R.R. Institute of Technology, Bangalore"},{name:"Islamia Institute of Technology, Bangalore"},{name:"ADARSHA Institute of Technology, Bangalore"},{name:"Bangalore College of Engineering and Technology, Bangalore"},{name:"Dr. Sri Sri Sri Shivakumara Mahaswamiji College of Engineering, Bangalore"},{name:"P.N.S. Women's Institute of Technology, Bangalore"},{name:"A.C.S. College of Engineering, Bangalore"},{name:"Vijaya Vittala Institute of Technology, Bangalore"},{name:"Gopalan College of Engineering and Management, Bangalore"},{name:"S.C.T. Institute of Technology, Bangalore"},{name:"Rajiv Gandhi Institute of Technology, Bangalore"},{name:"M.S. Engineering College, Bangalore"},{name:"Basava Academy of Engineering, Bangalore"},{name:"Nadgir Institute of Engineering and Technology, Bangalore"},{name:"Impact College of Engineering and Applied Sciences, Bangalore"},{name:"GSS Institute of Technology, Bangalore"},{name:"RajaRajeswari College of Engineering, Bangalore"},{name:"T John Institute of Technology, Bangalore"},{name:"Auden Technology and Management Academy, Bangalore"},{name:"S.E.A. College of Engineering and Technology, Bangalore"},{name:"K.L.E. Institute of Technology, Hubballi"},{name:"A.G.M. Rural Engineering College, Hubli"},{name:"H.M.S. Institute of Technology, Tumkur"},{name:"Shridevi Institute of Engineering and Technology, Tumkur"},{name:"Akshaya Institute of Technology, Tumkur"},{name:"Ghousia College of Engineering, Ramnagar"},{name:"S.J.C. Institute of Technology, Chickballapur"},{name:"Sha-shib College of Engineering, Chikballapur"},{name:"R.L. Jalappa Institute of Technology, Doddballapur"},{name:"Dr. T. Thimmaiah Institute of Technology, Kolar Gold Fields"},{name:"C. Byre Gowda Institute of Technology, Kolar"},{name:"Kalpatharu Institute of Technology, Tiptur"},{name:"Sri Basaveshwara Institute of Technology, Tiptur"},{name:"B.G.S. Institute of Technology, Mandya"},{name:"Tontadarya College of Engineering, Gadag"},{name:"Smt. Kamala and Sri. Venkappa Magadi College of Engineering and Technology, Gadag"},{name:"Maratha Mandal Engineering College, Belgaum"},{name:"K.L.E. Society College of Engineering and Technology, Belgaum"},{name:"S.G. Balekundri Institute of Technology, Belgaum"},{name:"Shaikh College of Engineering and Technology, Belgaum"},{name:"Angadi Institute of Technology and Management, Belgaum"},{name:"Jain College of Engineering, Belgaum"},{name:"KLE's College of Engineering and Technology, Chikkodi"},{name:"R.T.E. Society Rural Engineering College, Hulkoti"},{name:"Sri Taralabalu Jagadguru Institute of Technology, Ranebennur"},{name:"Anjuman Institute of Technology and Management, Bhatkal"},{name:"B.L.D.E.A's V.P. Dr. P.G. Halakatti College of Engineering and Technology, Bijapur"},{name:"SECAB Institute of Engineering & Technology, Bijapur"},{name:"Hirasugar Institute of Technology, Nidasoshi"},{name:"Khaja Banda Nawaz College of Engineering, Gulbarga"},{name:"K.C.T. Engineering College, Gulbarga"},{name:"Appa Institute of Engineering and Technology, Gulbarga"},{name:"Godutai Engineering College for Women, Gulbarga"},{name:"Guru Nanak Dev Engineering College, Bidar"},{name:"Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary"},{name:"Ballari Institute of Technology and Management, Bellary"},{name:"H.K.E's S.L.N. College of Engineering, Raichur"},{name:"Navodaya Institute of Technology, Raichur"},{name:"KVG College of Engineering, Sullia"},{name:"St. Joseph Engineering College, Mangalore"},{name:"P A College of Engineering, Mangalore"},{name:"Srinivas Institute of Technology, Mangalore"},{name:"Shreedevi Institute of Technology, Mangalore"},{name:"Karavali Institute of Technology, Mangalore"},{name:"Sahyadri Institute of Technology and Management, Mangalore"},{name:"Dr. M.V. Shetty Institute of Technology, Mangalore"},{name:"Bearys Institute of Technology, Mangalore"},{name:"A. Shama Rao Foundation, Srinivas School of Engineering, Mangalore"},{name:"Mangalore Marine College and Technology, Mangalore"},{name:"S.D.M. Institute of Technology, Ujire"},{name:"Alva's Institute of Engineering and Technology, Moodabidri"},{name:"Mangalore Institute of Technology and Engineering, Moodabidri"},{name:"Vivekananda College of Engineering Technology, Puttur"},{name:"Canara Engineering College, Bantwal"},{name:"Moodlakatte Institute of Technology, Kundapura"},{name:"K.L.S. Viswanathrao Deshpande Rural Institute of Technology, Haliyal"},{name:"Bapuji Institute of Engineering & Technology, Davanagere"},{name:"G M Institute of Technology, Davanagere"},{name:"Jawaharlal Nehru National College of Engineering, Shimoga"},{name:"P.E.S. Institute of Technology and Management, Shimoga"},{name:"S.J.M. Institute of Technology, Chitradurga"},{name:"Vidya Vardhaka College of Engineering, Mysore"},{name:"Vidya Vikas Institute of Engineering and Technology, Mysore"},{name:"GSSS Institute of Engineering & Technology for Women, Mysore"},{name:"Maharaja Institute of Technology Mysore"},{name:"N.I.E. Institute of Technology, Mysore"},{name:"Proudadevaraya Institute of Technology, Hospet"},{name:"Sri Belimatha Mahasamsthana Institute of Technology, Nelamangala"},{name:"Basavakalyana Engineering College, Basavakalyana"},{name:"Coorg Institute of Technology, Ponnampet"},{name:"Channabasaveshwara Institute of Technology, Gubbi"},{name:"Rajeev Institute of Technology, Hassan"},{name:"Yagachi Institute of Technology, Hassan"},{name:"Bahubali College of Engineering, Shravanabelagola"},{name:"Sampoorna Group of Institutions, Channapatna"},{name:"Veerappa Nisty Engineering College, Yadgir"},{name:"Ekalavya Institute of Technology, Chamarajnagar"},{name:"Sri Vidya Vinayaka Institute of Technology, Bangalore"},{name:"ATME College of Engineering, Mysuru"}],p=function(e){var n=e.trim().toLowerCase(),a=n.length;return 0===a?[]:E.filter((function(e){return e.name.toLowerCase().slice(0,a)===n}))},x=function(e){return e.name},I=function(e){return Object(f.jsx)("div",{children:e.name})},N=function(e){Object(r.a)(a,e);var n=Object(s.a)(a);function a(){var e;return Object(g.a)(this,a),(e=n.call(this)).onChange=function(n,a){var t=a.newValue;e.setState({value:t})},e.onSuggestionsFetchRequested=function(n){var a=n.value;e.setState({suggestions:p(a)})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={value:"",suggestions:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,n=e.value,a=e.suggestions,t={placeholder:" Search your College",value:n,onChange:this.onChange};return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:x,renderSuggestion:I,inputProps:t}),Object(f.jsx)(S,{msg:n})]})}}]),a}(o.a.Component);function M(){return Object(f.jsxs)("div",{className:"main-sub",children:[Object(f.jsxs)("h1",{className:"sub-head",children:["Know more about the",Object(f.jsx)("span",{className:"sub-head-c",children:" College"})]}),Object(f.jsxs)("p",{className:"sub-msg",children:["It\u2019s not just about finding the best College , it's figuring out the ones to avoid. Read student reviews and look over 200+ ",Object(f.jsx)("u",{className:"vtu",children:"VTU"})," under colleges in the karnataka."]})]})}function A(){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"main-icon",children:[Object(f.jsx)("img",{className:"icon",src:v}),Object(f.jsx)("h2",{className:"hello",children:"RateMyCollege"})]}),Object(f.jsx)("h1",{className:"main-head",children:"A better way to choose a college"}),Object(f.jsx)(N,{}),Object(f.jsx)("div",{className:"btm",children:Object(f.jsxs)("span",{children:[Object(f.jsx)(y.b,{to:"/collage/Colleges",children:Object(f.jsx)("span",{className:"wr",children:"Write rview"})}),Object(f.jsx)(y.b,{to:"/collage/Request",children:Object(f.jsx)("span",{className:"ac",children:"Add college"})})]})}),Object(f.jsx)(M,{}),Object(f.jsx)(O,{})]})}var R=function(){var e=Object(t.useState)(""),n=Object(h.a)(e,2),a=(n[0],n[1],Object(t.useState)("")),o=Object(h.a)(a,2),l=o[0],i=o[1],g=Object(t.useState)(""),c=Object(h.a)(g,2),r=c[0],s=c[1],m=Object(t.useState)(""),u=Object(h.a)(m,2),d=u[0],b=u[1],y=Object(t.useState)(!1),v=Object(h.a)(y,2),C=v[0],T=v[1];return Object(f.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),T(!0),j.collection("Requests").add({name:l,email:r,message:d}).then((function(){T(!1),alert("Your Request is submited \ud83d\udc4d")})).catch((function(e){alert(e.message),T(!1)})),i(""),s(""),b("")},id:"Contact",children:[Object(f.jsx)("h1",{className:"rq-contact",children:"Add College"}),Object(f.jsx)("p",{className:"rq-msg",children:"I'll verify and prove it  "}),Object(f.jsx)("input",{className:"rq-i",placeholder:"College Name",value:l,onChange:function(e){return i(e.target.value)}}),Object(f.jsx)("input",{className:"rq-i",placeholder:"Your Email",value:r,onChange:function(e){return s(e.target.value)}}),Object(f.jsx)("textarea",{className:"rq-txt",placeholder:"Message",value:d,onChange:function(e){return b(e.target.value)}}),Object(f.jsx)("button",{className:"rq-button",type:"submit",style:{background:C?"#ccc":" #0066ff00"},children:"Request"}),Object(f.jsx)(O,{})]})};var k=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(d.c,{children:Object(f.jsx)(d.a,{exact:!0,path:"/collage",children:Object(f.jsx)(A,{})})}),Object(f.jsx)(d.c,{children:Object(f.jsx)(d.a,{exact:!0,path:"/collage/Colleges",children:Object(f.jsx)(T,{})})}),Object(f.jsx)(d.c,{children:Object(f.jsx)(d.a,{exact:!0,path:"/collage/ReadDb",children:Object(f.jsx)(S,{})})}),Object(f.jsx)(d.c,{children:Object(f.jsx)(d.a,{exact:!0,path:"/collage/Request",children:Object(f.jsx)(R,{})})})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(n){var a=n.getCLS,t=n.getFID,o=n.getFCP,l=n.getLCP,i=n.getTTFB;a(e),t(e),o(e),l(e),i(e)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),w()}},[[60,1,2]]]);
//# sourceMappingURL=main.c37a8d80.chunk.js.map