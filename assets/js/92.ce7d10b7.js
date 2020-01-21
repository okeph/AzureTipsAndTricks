(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{396:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure Resource Manager"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=qFLvB5cxREg&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=14?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use tags to quickly organize Azure Resources"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h4",{attrs:{id:"use-tags-to-quickly-organize-azure-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-tags-to-quickly-organize-azure-resources","aria-hidden":"true"}},[s._v("#")]),s._v(" Use Tags to quickly organize Azure Resources")]),s._v(" "),a("p",[s._v("Head over to the Azure Portal and select service. In my example, I'm going to select a Web App that I want to tag as a production app. Select the "),a("strong",[s._v("Tags")]),s._v(" menu and provide a Name and Value as shown below.")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/azuretag1.png")}}),s._v(" "),a("p",[a("strong",[s._v("Remember this!")]),s._v(" Tags are user-defined key/value pairs which can be placed directly on a resource or a resource group.")]),s._v(" "),a("p",[s._v('I selected "Environment" and gave it the value of "Production". I then clicked "Save". I could also do this for other Production resources and even tag the appropriate ones with "Dev".')]),s._v(" "),a("p",[s._v("I can now take advantage of this by going to "),a("strong",[s._v("More Services")]),s._v(" and typing "),a("strong",[s._v("Tags")]),s._v(" and click on the Environment: Production as shown below.")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/azuretag2.png")}}),s._v(" "),a("ol",[a("li",[s._v('Results from searching "Tags"')]),s._v(" "),a("li",[s._v("Our Production Environment we just setup")]),s._v(" "),a("li",[s._v("List all the Web Apps with the Production Environment Tag")]),s._v(" "),a("li",[s._v("Pin the Blade to our Azure Portal Main Page")])]),s._v(" "),a("p",[s._v("If you pin the blade (by pressing the pin in step 4.), then you'll see the following on your Azure Portal dashboard")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/azuretag3.png")}}),s._v(" "),a("p",[s._v("You can even interact with "),a("strong",[s._v("Tags")]),s._v(" using Azure CLI 2.0. For example, I can type "),a("code",[s._v("az tag list -o json")]),s._v(" to list all the tags associated with an account.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("michael@Azure:~$ az tag list\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Total"')]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" 2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagName"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Environment"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"values"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Total"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" 1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment/tagValues/Dev"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagValue"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Dev"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Total"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" 1\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment/tagValues/Production"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagValue"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Production"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);