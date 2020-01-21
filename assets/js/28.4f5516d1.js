(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{346:function(t,e,r){"use strict";r.r(e);var a=r(43),o=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h4",{attrs:{id:"enable-http-2-0-support-for-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-http-2-0-support-for-azure-app-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Enable HTTP/2.0 support for Azure App Service")]),t._v(" "),r("p",[t._v("Azure has recently rolled out the ability for you to switch any app service to use HTTP/2.0 Support. It really is as easy as toggling a field in Azure Resource Manager, but first why should you care about HTTP/2.0?")]),t._v(" "),r("p",[t._v("HTTP/2 supports queries multiplexing, headers compression, priority and more intelligent packet streaming management. All of this results in reduced latency and accelerates content download on modern web pages which you should be writing now. 😃 If you want more details, then "),r("a",{attrs:{href:"https://daniel.haxx.se/http2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this source"),r("OutboundLink")],1),t._v(" is the one that I personally trust.")]),t._v(" "),r("h4",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),r("p",[t._v("Before you go to the Azure Portal, take your *.azurewebsites.net url and test it "),r("a",{attrs:{href:"https://tools.keycdn.com/http2-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(". It will quickly tell you whether or not your site supports HTTP/2.0. The reason that I want to start with this site is because in the future HTTP/2.0 will be automatically enabled on future *.azurewebsites.net urls.")]),t._v(" "),r("p",[t._v("Switch over to the "),r("strong",[t._v("Azure Portal")]),t._v(" now and click on "),r("strong",[t._v("App Service")]),t._v(" and then your existing site. Now click on "),r("strong",[t._v("Resource Explorer")]),t._v(" as shown below.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/azhttp2-1.png")}}),t._v(" "),r("p",[t._v("It should navigate you to Azure Resource Explorer (Preview) and you'll just need to click on "),r("strong",[t._v("config")]),t._v(" and then "),r("strong",[t._v("web")]),t._v(".")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/azhttp2-2.png")}}),t._v(" "),r("p",[t._v("Click on Read/Write, then toggle "),r("code",[t._v('"http20Enabled": false')]),t._v(" to "),r("code",[t._v('"http20Enabled": true')]),t._v(" and click "),r("strong",[t._v("Put")]),t._v(".")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/azhttp2-3.gif")}}),t._v(" "),r("p",[t._v("Now you can go back to our "),r("a",{attrs:{href:"https://daniel.haxx.se/http2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/2.0 testing tool"),r("OutboundLink")],1),t._v(" and input your *.azurewebsites.net url. I tested mine and received the following:")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/azhttp2-4.png")}})])},[],!1,null,null,null);e.default=o.exports}}]);