(this["webpackJsonpassignment.github.io"]=this["webpackJsonpassignment.github.io"]||[]).push([[0],{157:function(e,a,t){e.exports=t(371)},164:function(e,a,t){},227:function(e,a,t){},371:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(41),c=t.n(l),i=(t(162),t(163),t(164),t(27)),o=t(28),s=t(30),m=t(29),u=t(377),d=t(378),E=t(379),h=t(380),p=t(381),b=t(382),f=t(383),g=t(384),v=t(12);function N(e){var a=e.car,t=e.index;return r.a.createElement(u.a,{className:"carlistcards"},r.a.createElement(d.a,null,r.a.createElement(E.a,{md:3},r.a.createElement(h.a,{top:!0,width:"100%",src:a.image,alt:a.carModal,className:"cardimg"})),r.a.createElement(E.a,{md:9},r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{md:8},r.a.createElement(b.a,{className:"carmodal"},a.carModal),r.a.createElement(f.a,{className:"cardetails"},r.a.createElement("span",{className:"color"},r.a.createElement("span",{className:"fa fa-eyedropper fa-sm"})," ",a.color),r.a.createElement("span",{className:"seatingcapacity"},r.a.createElement("span",{className:"fa fa-car fa-sm"}),a.seatingCapacity," Seater"),r.a.createElement("span",{className:"rentperday"},r.a.createElement("span",{className:"fa fa-inr fa-sm"})," ",a.rentPerDay," / Day"))),r.a.createElement(E.a,{md:4,className:"carlistbuttonsContiner"},r.a.createElement(v.b,{to:"/bookings/".concat(a.id,"/").concat(t)},r.a.createElement(g.a,{disabled:!a.availability,style:{margin:"10%"}},"Book now")),r.a.createElement(v.b,{to:"/cars/".concat(a.id,"/").concat(t)},r.a.createElement(g.a,{outline:!0,color:"secondary"},"Details")),a.availability?r.a.createElement("p",null):r.a.createElement("p",{className:"unavailableHomepage"},"Currently unavailable!")))))))}var y=function(e){var a=e.cars.map((function(e,a){return r.a.createElement("div",{className:"cards"},r.a.createElement(N,{car:e,index:a}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Cars for rent"),r.a.createElement("hr",null))),r.a.createElement("div",null,a))},k=t(385),D=t(386),w=t(387);function C(e){var a=e.carDetails,t=e.index;return null!=a?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"cardetailscard"},r.a.createElement(d.a,null,r.a.createElement(E.a,{md:7},r.a.createElement(h.a,{top:!0,width:"100%",src:a.image,alt:a.carModal,className:"cardetailsimg"})),r.a.createElement(E.a,{md:5},r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"carmodal"},a.carModal),r.a.createElement(f.a,{className:"fullcardetails"},r.a.createElement("span",{className:"color"},r.a.createElement("span",{className:"fa fa-eyedropper fa-sm"})," ",a.color),r.a.createElement("span",{className:"seatingcapacity"},r.a.createElement("span",{className:"fa fa-car fa-sm"}),a.seatingCapacity," Seater")),r.a.createElement("h5",{className:"mt-3"}," Rent Per Day: ",r.a.createElement("span",{className:"fa fa-inr fa-sm"})," ",a.rentPerDay),r.a.createElement(v.b,{to:"/bookings/".concat(a.id,"/").concat(t)},r.a.createElement(g.a,{className:"bookbuttoncardetails",disabled:!a.availability},"Book now")),a.availability?r.a.createElement("p",null):r.a.createElement("p",{className:"unavailable"},"Currently unavailable!"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mt-5"},r.a.createElement("h3",{className:"heading"},"Car Details"),r.a.createElement("hr",{className:"horizontalline"}),a.availability?r.a.createElement("div",null):r.a.createElement(g.a,{disabled:!0,className:"mb-2"},"Not Available "),r.a.createElement("p",null,"Vehicle number: ",a.vehicleNumber),r.a.createElement("p",null,"Fuel type: ",a.fuelType),r.a.createElement("p",null,"Engine: ",a.engine),r.a.createElement("p",null,a.details)))):r.a.createElement("div",null)}function S(e){var a=e.bookings;return 0!=a.length?(console.log(a),r.a.createElement("div",null,r.a.createElement(k.a,{borderless:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"PHONE NUMBER"),r.a.createElement("th",null,"ISSUE DATE"),r.a.createElement("th",null,"RETURN DATE"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a[0].name),r.a.createElement("td",null,a[0].contactNo),r.a.createElement("td",null,a[0].issueDate.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})),r.a.createElement("td",null,a[0].returnDate.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}))))),r.a.createElement(v.b,{to:"/"},r.a.createElement(g.a,{outline:!0,color:"secondary"},"Back")))):r.a.createElement("div",null)}var I=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(D.a,null,r.a.createElement(w.a,null,r.a.createElement(v.b,{to:"/cars"},"Cars")),r.a.createElement(w.a,{active:!0},e.car.carModal))),r.a.createElement(C,{carDetails:e.car,index:e.index}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mt-5"},r.a.createElement("h4",{className:"heading"},"Current Booking"),r.a.createElement("hr",{className:"horizontalline"}),r.a.createElement(S,{bookings:e.bookings}))))},O=t(388),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{fluid:!0,className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",{className:"mainheading"},"RentVroom"))))))}}]),t}(n.Component);var M=function(e){return r.a.createElement("div",{className:"footer mt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Rent Vroom "),r.a.createElement("address",null,"RentVroom Pvt. Ltd.",r.a.createElement("br",null),"No: 296, 3rd Cross Rd, Jakkasandra,",r.a.createElement("br",null),"1st Block, Kormangla Bengaluru,",r.a.createElement("br",null),"Karnataka 560034",r.a.createElement("br",null))),r.a.createElement("div",{className:"col-5 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"})))))))},B=t(63),x=t(44),A=t(389),P=t(390),T=t(391),L=t(392),F=t(102),R=t.n(F),z=(t(169),t(49)),G=t(32),H=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).validate=function(){var e=[],a="";/^\d+$/.test(n.state.contact)||e.push("Alphabates are not allowed"),10!==n.state.contact.length&&e.push("Number Length should be 10");return/^[a-zA-Z]+[a-zA-Z]+$/.test(n.state.name.trim())||(a="Should not contain number"),!(a||e.length>0)||(n.setState({nameError:a,contactError:e}),!1)},n.handleIssueDate=function(e){n.setState({issueDate:e,isDisable:!1})},n.handleReturnDate=function(e){n.setState({returnDate:e})},n.state={isDisable:!0,name:"",contact:"",issueDate:"",returnDate:"",nameError:"",contactError:[]},n.handleInputChange=n.handleInputChange.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n.checkIsBooked=n.checkIsBooked.bind(Object(x.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.validate()?(this.props.addbooking(this.props.car.id,this.state.name,this.state.contact,this.state.issueDate,this.state.returnDate),this.props.changeavailability(this.props.index)):alert("Invalid form values")}},{key:"handleInputChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(B.a)({},n,t))}},{key:"BookingForm",value:function(){var e=this;return r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement(A.a,{onSubmit:this.handleSubmit},r.a.createElement(d.a,{className:"formrow"},r.a.createElement(E.a,{md:5},r.a.createElement(P.a,null,r.a.createElement(T.a,{htmlFor:"name"},"Name"),r.a.createElement(L.a,{type:"text",id:"name",className:"inputfield",name:"name",placeholder:"John Doe",required:!0,value:this.state.firstname,onChange:this.handleInputChange}),r.a.createElement("p",{className:"unavailable"},this.state.nameError))),r.a.createElement(E.a,{md:5},r.a.createElement(P.a,null,r.a.createElement(T.a,{htmlFor:"contact"},"Contact Tel."),r.a.createElement(L.a,{type:"text",id:"contact",className:"inputfield",name:"contact",placeholder:"+91",required:!0,value:this.state.telnum,onChange:this.handleInputChange}),this.state.contactError.map((function(e){return r.a.createElement("p",{className:"unavailable"},e)}))))),r.a.createElement(d.a,null,r.a.createElement(E.a,{md:5},r.a.createElement(P.a,null,r.a.createElement(T.a,{htmlFor:"issueDate"},"Issue Date"),r.a.createElement("br",null),r.a.createElement(R.a,{className:"form-control inputfield",selected:this.state.issueDate,required:!0,placeholderText:"MM/DD/YYYY",onChange:this.handleIssueDate,minDate:new Date}))),r.a.createElement(E.a,{md:5},r.a.createElement(P.a,null,r.a.createElement(T.a,{htmlFor:"returndate"},"Return Date"),r.a.createElement("br",null),r.a.createElement(R.a,{className:"form-control inputfield",selected:this.state.returnDate,placeholderText:"MM/DD/YYYY",required:!0,minDate:Object(z.default)(this.state.issueDate,1),onChange:this.handleReturnDate,disabled:this.state.isDisable})))),r.a.createElement(d.a,null,r.a.createElement(E.a,{md:10},r.a.createElement(P.a,null,r.a.createElement(g.a,{type:"submit",color:"secondary",className:"submitbutton",onClick:function(){return e.setState({isbooked:!0})}},"Book Car"))))),r.a.createElement(g.a,{outline:!0,color:"secondary",className:"backbutton",onClick:this.props.history.goBack},"Back")))}},{key:"checkIsBooked",value:function(){return 0==this.props.bookings.length?this.BookingForm():this.props.bookings[this.props.bookings.length-1].carId==parseInt(this.props.match.params.carId)?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("strong",null,"Your Booking has been Confirmed!")),r.a.createElement(v.b,{to:"/cars"},r.a.createElement(g.a,{outline:!0,color:"secondary"},"Continue"))):this.BookingForm()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(D.a,null,r.a.createElement(w.a,null,r.a.createElement(v.b,{to:"/"},"Cars")),r.a.createElement(w.a,{active:!0},"Booking details")),this.checkIsBooked())}}]),t}(n.Component),Y=Object(G.g)(H),_=t(69),V=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(G.d,null,r.a.createElement(G.b,{exact:!0,path:"/cars",component:function(){return r.a.createElement(y,{cars:e.props.cars})}}),r.a.createElement(G.b,{path:"/cars/:carId/:index",component:function(a){var t=a.match;return r.a.createElement(I,{car:e.props.cars.filter((function(e){return e.id===parseInt(t.params.carId,10)}))[0],bookings:e.props.bookings.filter((function(e){return e.carId===parseInt(t.params.carId,10)})),index:t.params.index})}}),r.a.createElement(G.b,{path:"/bookings/:carId/:index",component:function(a){var t=a.match;return r.a.createElement(Y,{car:e.props.cars.filter((function(e){return e.id===parseInt(t.params.carId,10)}))[0],addbooking:e.props.addbooking,changeavailability:e.props.changeavailability,index:t.params.index,bookings:e.props.bookings})}}),r.a.createElement(G.a,{to:"/cars"})),r.a.createElement(M,null))}}]),t}(n.Component),q=Object(G.g)(Object(_.b)((function(e){return{cars:e.cars,bookings:e.bookings}}),(function(e){return{addbooking:function(a,t,n,r,l){return e(function(e,a,t,n,r){return{type:"ADD_BOOKING",payload:{carId:e,name:a,contactNo:t,issueDate:n,returnDate:r}}}(a,t,n,r,l))},changeavailability:function(a){return e(function(e){return{type:"CHANGE_AVAILABILITY",payload:{index:e}}}(a))}}}))(V)),K=t(52),U=t(106),W=t(107),J=[{id:1,vehicleNumber:"18 D 4356",carModal:"Hyundai Grand i10",image:"https://gaadiwaadi.com/wp-content/uploads/2017/01/2017-hyundai-grand-i10-facelift-india-5.jpg",color:"Red",seatingCapacity:4,fuelType:"Petrol",engine:"998 to 1197 cc",rentPerDay:350,availability:!0,details:"Hyundai Grand i10 Nios is offered in 8 colours Polar White, Typhoon Silver, Fiery Red,Polar White/Black, Titan Grey, Alpha Blue, Aqua Teal and Aqua Teal/Black. However, some of these colours are available in specific versions. Grand i10 Nios is competing against Maruti Suzuki Swift, Tata Tiago, Hyundai Elite i20, Ford Figo, Maruti Suzuki Ignis and Hyundai Aura."},{id:2,vehicleNumber:"18 D 4356",carModal:"Ford EcoSport",image:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Ecosport/7347/1579861367280/front-left-side-47.jpg?tr=w-135",color:"Sherwood Brown",seatingCapacity:5,fuelType:"Petrol and Diesel",engine:"1496 to 1498 cc",rentPerDay:1350,availability:!0,details:"Ford EcoSport price starts at \u20b9 8.04 Lakh and goes upto \u20b9 11.61 Lakh. The price of Petrol version for EcoSport ranges between \u20b9 8.04 Lakh - \u20b9 11.43 Lakh and the price of Diesel version for EcoSport ranges between \u20b9 8.54 Lakh - \u20b9 11.61 Lakh."},{id:3,vehicleNumber:"18 D 4356",carModal:"Maruti Suzuki XL6",image:"https://gumlet.assettype.com/evoindia%2F2019-11%2Fb183b52f-835a-4be4-b8c3-f285ca41b3d2%2FErtiga_front.jpg?rect=0%2C105%2C2133%2C1200&auto=format%2Ccompress&fit=max&w=480&dpr=2.6",color:"Glossy Blue",seatingCapacity:6,fuelType:"Petrol",engine:"1462 cc",rentPerDay:850,availability:!0,details:"Maruti Suzuki XL6 XL6 is offered in 6 colours: Metallic Premium Silver, Metallic Magma Gray, Prime Auburn Red, Pearl Brave Khaki, Pearl Arctic White and Nexa Blue. However, some of these colours are available in specific versions. XL6 is competing against Maruti Suzuki Ertiga, Mahindra Marazzo, Renault Captur, Maruti Suzuki S-Cross, Mahindra TUV300 PLUS and Kia Seltos"},{id:4,vehicleNumber:"18 D 4356",carModal:"Honda CR -v",image:"https://images.cdn.circlesix.co/image/1/640/0/uploads/media/2018-08/10/50e6f16c7feffdee/136727_honda_heritage_-_2010_cr-z.jpg",color:"White",seatingCapacity:6,fuelType:"Petrol",engine:"1997 cc",rentPerDay:450,availability:!0,details:"This car is available in 5 colours viz, Golden Brown Metallic, White Orchid Pearl, Modern Steel Metallic, Radiant Red and Lunar Silver Metallic. Honda CR-V competes with Volkswagen Tiguan AllSpace, Skoda Kodiaq, Mahindra Alturas G4, Mitsubishi Pajero Sport, Mitsubishi Outlander and Ford Endeavour."}],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_AVAILABILITY":var t=a.payload.index,n=parseInt(t)+1,r=[].concat(Object(W.a)(e.slice(0,t)),[Object(U.a)(Object(U.a)({},e[t]),{},{availability:!e[t].availability})],Object(W.a)(e.slice(n)));return r;default:return e}},$=[],Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_BOOKING":var t=a.payload;t.id=e.length+1;var n=e.concat(t);return n;default:return e}},Q=(t(227),Object(K.c)(Object(K.b)({cars:X,bookings:Z}))),ee=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{store:Q},r.a.createElement(v.a,null,r.a.createElement(q,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(228);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.c16cbede.chunk.js.map