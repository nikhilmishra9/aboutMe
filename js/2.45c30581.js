(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"4c45":function(t,e,s){},8368:function(t,e,s){"use strict";s("9f81")},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",[e("section",{attrs:{id:"home"}},[e("Home")],1),e("section",{attrs:{id:"about"}},[e("About")],1),e("section",{attrs:{id:"experience"}},[e("Experience")],1),e("section",{attrs:{id:"contact"}},[e("Contact")],1)])},l=[],n=function(){var t=this,e=t._self._c;return e("q-page",{class:t.$q.screen.lt.xs?"":"flex flex-center"},[e("div",{staticClass:"row q-pa-md q-col-gutter-md"},[e("div",{staticClass:"bg-transparent col-sm-6 col-xs-12"},[e("div",{staticClass:"flex flex-center"},[e("img",{class:t.$q.screen.gt.xs?"profilepic_desktop":"profilepic_mobile",attrs:{src:"pic.jpg"}})])]),e("div",{staticClass:"col-sm-6 col-xs-12 flex items-center"},[e("div",{staticClass:"column",style:t.$q.screen.gt.xs?"":"width:100%;"},[e("div",{class:t.$q.screen.gt.xs?"col my_title stroke":"col my_title stroke flex flex-center"},[t._v("\n              "+t._s(t.getHomeDetails.fname)+"\n          ")]),e("div",{class:t.$q.screen.gt.xs?"col my_title":"col my_title flex flex-center"},[t._v("\n              "+t._s(t.getHomeDetails.lname)+"\n          ")]),e("div",{staticClass:"col flex flex-center designation text-weight-medium q-pa-md text-grey-7 bg-grey-3"},t._l(t.getHomeDetails.jobs,(function(s,a){return e("span",{key:s},[t._v("\n                  "+t._s(s)+"\n                  "),a<t.getHomeDetails.jobs.length-1?e("span",{staticClass:"text-grey-5 q-mx-sm"},[t._v("•")]):t._e()])})),0)])])])])},i=[],c=s("2f62"),o={name:"Home",data(){return{}},computed:{...Object(c["b"])("homeStore",["getHomeDetails"])}},r=o,u=(s("e117"),s("2877")),m=s("9989"),d=s("eebe"),p=s.n(d),b=Object(u["a"])(r,n,i,!1,null,null,null),g=b.exports;p()(b,"components",{QPage:m["a"]});var x=function(){var t=this,e=t._self._c;return e("q-page",{class:t.$q.screen.gt.xs?"flex flex-center q-px-xl":"flex flex-center"},[e("div",{staticClass:"row q-pa-md q-col-gutter-xl"},[e("q-card",{staticClass:"bg-transparent col-sm-6 col-xs-12",attrs:{flat:""}},[e("q-card-section",[e("div",{staticClass:"row items-center no-wrap"},[e("div",{staticClass:"col"},[e("component-title",{attrs:{title:t.getAboutDetails.name}}),e("div",{staticClass:"text-h3"},[t._v(t._s(t.getAboutDetails.designation))]),e("div",{staticClass:"text-subtitle2 text-grey-7 q-mt-"},[t._v("with "+t._s(t.getAboutDetails.experience_years)+" years of experience")]),e("div",{staticClass:"text-subtitle2 text-grey-7"},[t._v("based in "+t._s(t.getAboutDetails.country))])],1)])]),e("q-card-section",{staticClass:"designation text-grey-7 text-weight-medium"},[t._v("\n          "+t._s(t.getAboutDetails.intro)+"\n        ")]),e("q-card-actions",{staticClass:"q-mt-md"},[e("q-btn",{staticClass:"text-white bg-dark q-ml-sm q-px-md q-py-xs",attrs:{"no-caps":"",flat:"",href:t.getAboutDetails.resume_path,download:""}},[t._v("Download CV")])],1)],1),e("q-card",{staticClass:"bg-transparent col-md-6 col-xs-12",attrs:{flat:""}},[e("component-title",{attrs:{title:"Skills"}}),e("Skills")],1)],1)])},f=[],_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row text-uppercase designation text-weight-medium text-grey-7 q-pb-md"},[e("div",{class:t.full?"col-1 flex flex-center":"col-2 flex flex-center"},[e("hr",{staticStyle:{width:"70%"},attrs:{align:"left"}})]),e("div",{staticClass:"col"},[t._v(" "+t._s(t.title)+" ")])])},v=[],q={name:"ComponentTitle",props:{title:{type:String,required:!0},full:{type:Boolean,default:!1}}},h=q,C=Object(u["a"])(h,_,v,!1,null,null,null),y=C.exports,k=function(){var t=this,e=t._self._c;return e("div",t._l(this.getAboutDetails.skills,(function(s){return e("q-card",{key:s,attrs:{flat:""}},[e("div",{staticClass:"q-px-md q-py-sm text-caption text-grey-7"},[t._v("\n            "+t._s(s.label)+"\n        ")]),e("div",{staticClass:"row q-gutter-md q-pa-md"},t._l(s.skill,(function(s){return e("div",{key:s,staticClass:"col-3 q-pa-sm text-center radical_gradient",attrs:{flat:""}},[e("div",{staticClass:"q-pt-xs"},[e("img",{staticStyle:{width:"40%"},attrs:{src:"skills/"+s+".png"}})]),e("div",{staticClass:"q-mt-xs text-grey-7 text-weight-medium"},[t._v(" "+t._s(s)+" ")])])})),0)])})),1)},D=[],w={name:"Skills",data(){return{}},computed:{...Object(c["b"])("aboutStore",["getAboutDetails"])},created(){this.personal_details=[{label:"Website",value:this.getAboutDetails.website,icon:"rss_feed"},{label:"Location",value:this.getAboutDetails.city+", "+this.getAboutDetails.country,icon:"location_on"},{label:"Languages",value:this.getAboutDetails.languages,icon:"language"},{label:"Date of Birth",value:this.getAboutDetails.dob,icon:"cake"}]}},j=w,A=(s("994d"),s("f09f")),Q=Object(u["a"])(j,k,D,!1,null,"0d50f1ec",null),S=Q.exports;p()(Q,"components",{QCard:A["a"]});var O={name:"About",components:{ComponentTitle:y,Skills:S},data(){return{}},computed:{...Object(c["b"])("aboutStore",["getAboutDetails"])}},P=O,$=s("a370"),z=s("4b7e"),H=s("9c40"),E=Object(u["a"])(P,x,f,!1,null,null,null),T=E.exports;p()(E,"components",{QPage:m["a"],QCard:A["a"],QCardSection:$["a"],QCardActions:z["a"],QBtn:H["a"]});var B=function(){var t=this,e=t._self._c;return e("q-page",{class:t.$q.screen.gt.xs?"flex flex-center q-px-xl":"flex flex-center"},[e("div",{staticClass:"q-px-lg"},[e("q-timeline",{staticClass:"timeline",attrs:{color:"grey"}},[e("component-title",{attrs:{title:"Work Experience",full:""}}),t._l(t.getExperienceDetails,(function(s){return e("q-timeline-entry",{key:s.company,attrs:{avatar:s.logo},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        "+t._s(s.designation)+"\n        "),t.$q.screen.gt.xs?e("span",{staticClass:"float-right text-body2 text-weight-medium"},[t._v(t._s(s.skills))]):t._e()]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n        "+t._s(s.company)+"\n        "),e("span",{staticClass:"float-right text-caption text-capitalize"},[s.left_date?e("span",[t._v("("+t._s(s.join_date)+" - "+t._s(s.left_date)+")")]):e("span",[t._v("("+t._s(s.join_date)+" - Present)")])])]},proxy:!0}],null,!0)},[e("div",{staticClass:"text-grey-7 text-weight-medium"},[t._v("\n        "+t._s(s.description)+"\n      ")])])}))],2)],1)])},I=[],L={name:"Experience",components:{ComponentTitle:y},data(){return{}},computed:{...Object(c["b"])("experienceStore",["getExperienceDetails"])}},F=L,R=(s("8368"),s("05eb")),W=s("74af"),J=Object(u["a"])(F,B,I,!1,null,"142297ae",null),M=J.exports;p()(J,"components",{QPage:m["a"],QTimeline:R["a"],QTimelineEntry:W["a"]});var G=function(){var t=this,e=t._self._c;return e("q-page",{class:t.$q.screen.gt.xs?"flex flex-center q-px-xl":"flex flex-center"},[e("div",{staticClass:"row q-pa-md q-col-gutter-xl"},[e("q-card",{staticClass:"bg-transparent col-md-6 col-xs-12",attrs:{flat:""}},[e("component-title",{attrs:{title:"Personal Details"}}),e("personal-details")],1),e("q-card",{staticClass:"bg-transparent col-md-6 col-xs-12",attrs:{flat:""}},[e("component-title",{attrs:{title:"Get in Touch"}}),e("contact-form")],1)],1)])},N=[],V=function(){var t=this,e=t._self._c;return e("q-form",{staticClass:"q-col-gutter-md row",on:{submit:t.onSubmit,reset:t.onReset}},[e("q-input",{ref:"name",staticClass:"col-sm-6 col-xs-12",attrs:{color:"black",label:"Name","lazy-rules":"",filled:"",rules:[t=>t&&t.length>0||"Please enter your name"]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("q-input",{ref:"email",staticClass:"col-sm-6 col-xs-12",attrs:{filled:"",color:"black",type:"email",label:"Email","lazy-rules":"",rules:[t=>null!==t&&""!==t||"Please enter your email"]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("q-input",{ref:"subject",staticClass:"col-sm-6 col-xs-12",attrs:{color:"black",filled:"",label:"Subject","lazy-rules":"",rules:[t=>t&&t.length>0||"Please enter the subject"]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),e("q-input",{ref:"phone",staticClass:"col-sm-6 col-xs-12",attrs:{color:"black",filled:"",label:"Phone","lazy-rules":"",rules:[t=>t&&t.length>0||"Please enter your phone number"]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),e("q-input",{ref:"message",staticClass:"col-12",attrs:{color:"black",filled:"",type:"textarea",label:"Message","lazy-rules":"",rules:[t=>t&&t.length>0||"Please enter the message"]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e("div",{staticClass:"col-12"},[e("q-btn",{staticClass:"q-px-md q-py-xs",attrs:{"no-caps":"",label:"Say Hello!",type:"submit",color:"dark"}}),e("q-btn",{staticClass:"q-px-md q-py-xs q-ml-md",attrs:{label:"Reset",type:"reset",color:"dark",outline:""}})],1)],1)},K=[],U={name:"ContactForm",data(){return{name:null,email:null,subject:null,phone:null,message:null}},methods:{onSubmit(){this.$q.notify({message:"Message sent. Thank you!",icon:"check"})},onReset(){this.name=null,this.email=null,this.subject=null,this.phone=null,this.message=null}}},X=U,Y=s("0378"),Z=s("27f9"),tt=Object(u["a"])(X,V,K,!1,null,null,null),et=tt.exports;p()(tt,"components",{QForm:Y["a"],QInput:Z["a"],QBtn:H["a"]});var st=function(){var t=this,e=t._self._c;return e("div",[e("q-card",{attrs:{flat:""}},[e("q-card-section",{staticClass:"flex flex-center"},[e("q-item",[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{size:"50px"}},[e("img",{attrs:{src:"avatar.jpg"}})])],1),e("q-item-section",[e("q-item-label",{staticClass:"designation text-weight-medium"},[t._v(" "+t._s(t.getAboutDetails.name)+" ")]),e("q-item-label",{staticClass:"text-grey-8"},[t._v(" "+t._s(t.getAboutDetails.email)+" ")])],1)],1)],1),e("q-card-section",{staticClass:"flex flex-center q-gutter-md"},t._l(t.getAboutDetails.social,(function(s){return e("q-btn",{key:s.name,staticClass:"bg-grey-2 q-py-sm",attrs:{flat:"","no-caps":"",type:"a",href:s.link,target:"_blank"}},[e("q-avatar",{attrs:{square:"",size:"28px"}},[e("img",{attrs:{src:s.img}})]),t.$q.screen.gt.xs?e("span",{staticClass:"q-pl-sm text-grey-9"},[t._v(t._s(s.name))]):t._e()],1)})),1),e("q-card-section",[e("q-separator",{attrs:{inset:""}})],1),e("q-card-section",{staticClass:"flex flex-center row q-gutter-md q-pb-lg"},t._l(t.personal_details,(function(s){return e("q-card",{key:s.label,staticClass:"col-5 q-pa-md bg-grey-2",attrs:{flat:""}},[e("div",{staticClass:"text-weight-medium text-capitalize"},[t._v("\n                    "+t._s(s.label)+"\n                    ")]),e("div",{staticClass:"text-caption text-grey-8"},[t._v("\n                    "+t._s(s.value)+"\n                ")])])})),1)],1)],1)},at=[],lt={name:"PersonalDetails",data(){return{personal_details:{}}},created(){this.personal_details=[{label:"Website",value:this.getAboutDetails.website,icon:"rss_feed"},{label:"Location",value:this.getAboutDetails.city+", "+this.getAboutDetails.country,icon:"location_on"},{label:"Languages",value:this.getAboutDetails.languages,icon:"language"},{label:"Date of Birth",value:this.getAboutDetails.dob,icon:"cake"}]},computed:{...Object(c["b"])("aboutStore",["getAboutDetails"])}},nt=lt,it=s("66e5"),ct=s("4074"),ot=s("cb32"),rt=s("0170"),ut=s("eb85"),mt=s("0016"),dt=Object(u["a"])(nt,st,at,!1,null,null,null),pt=dt.exports;p()(dt,"components",{QCard:A["a"],QCardSection:$["a"],QItem:it["a"],QItemSection:ct["a"],QAvatar:ot["a"],QItemLabel:rt["a"],QSeparator:ut["a"],QBtn:H["a"],QIcon:mt["a"]});var bt={name:"Contact",components:{ContactForm:et,ComponentTitle:y,PersonalDetails:pt},data(){return{}},computed:{...Object(c["b"])("aboutStore",["getAboutDetails"])}},gt=bt,xt=Object(u["a"])(gt,G,N,!1,null,null,null),ft=xt.exports;p()(xt,"components",{QPage:m["a"],QCard:A["a"]});var _t={name:"Index",components:{Home:g,About:T,Experience:M,Contact:ft}},vt=_t,qt=(s("d41a"),Object(u["a"])(vt,a,l,!1,null,"65f4279f",null));e["default"]=qt.exports;p()(qt,"components",{QPage:m["a"]})},"994d":function(t,e,s){"use strict";s("b0fc")},"9f81":function(t,e,s){},b0fc:function(t,e,s){},d41a:function(t,e,s){"use strict";s("4c45")},e117:function(t,e,s){"use strict";s("f3bb")},f3bb:function(t,e,s){}}]);