(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.tittle),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch mx-1 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode"))))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"mb-3 my-5 container"},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},value:r,onChange:function(e){console.log("onChange"),o(e.target.value)},id:"myBox",rows:"8"}),l.a.createElement("button",{className:"btn btn-primary my-3 ",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase","Success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-primary m-3 ",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase","Success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){o(""),e.showAlert("Clear all Texts","Success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied all Data","Success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Clean ExtraSpaces","Success")}},"Clear ExtraSpaces")),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,r.split("").length," Words and ",r.length," Characters"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Write Something Else.")))}function i(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.type),": ",e.alert.msg," !"))}var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1];setTimeout(function(){document.tittle="TextUtils-Home"},1500);var o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t})};return setTimeout(function(){b("")},2e3),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{tittle:"PropsTittle",aboutText:"About",mode:a,toggleMode:function(e){"light"===a?(r("dark"),document.body.style.backgroundColor="#352f8b",g("Dark Mode has been Enabled","Success"),document.title="TextUtils-DarkMode"):(r("light"),document.body.style.backgroundColor="white",g("Light Mode has been Enabled","Success"),document.title="TextUtils-LightMode")}}),l.a.createElement(i,{alert:d}),l.a.createElement(m,{heading:"Enter the Text to Analyze Below",text:"Enter text",showAlert:g,mode:a}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.d202dc47.chunk.js.map