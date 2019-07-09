(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,r,t){e.exports=t.p+"assets/img/ios-wi-fi-network_framed.1c0ab68b.png"},185:function(e,r,t){e.exports=t.p+"assets/img/ios-proxy-configuration_framed.228ba306.png"},195:function(e,r,t){"use strict";t.r(r);var n=t(0),s=Object(n.a)({},function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"configure-socks-proxy-on-ios-with-pac"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-socks-proxy-on-ios-with-pac","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure SOCKS proxy on iOS with PAC")]),e._v(" "),n("p",[e._v("Sometimes you might need to access certain websites via proxy, for example when\nthey are blocked in your country. In the same time, you can avoid passing all\nrequests through a proxy server and only pass those that are blocked.")]),e._v(" "),n("p",[e._v("For example, some ISPs block the "),n("a",{attrs:{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("telegram.org"),n("OutboundLink")],1),e._v(" website.\nTo be able to access it, you need to configure your operating system to use\nproxy for all the requests to the hosts in the "),n("code",[e._v("telegram.org")]),e._v(" domain and use\ndirect connection for all the other requests.")]),e._v(" "),n("h2",{attrs:{id:"serve-a-pac-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serve-a-pac-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Serve a PAC File")]),e._v(" "),n("p",[e._v("This can be easily done with a "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy Auto-Configuration (PAC)\nfile"),n("OutboundLink")],1),e._v(".\nSimply create a PAC file and host it on a web-server.")]),e._v(" "),n("p",[e._v("Here is an example of a PAC file:")]),e._v(" "),n("div",{staticClass:"language-pac line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('function FindProxyForURL(url, host) {\n  if  (dnsDomainIs(host, ".telegram.org.")\n    || dnsDomainIs(host, ".telegram.org")\n    || dnsDomainIs(host, "telegram.org")\n  )\n    return "SOCKS proxy.address.org:1080";\n  return "DIRECT";\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("And here is an example of a virtual server configuration in Nginx:")]),e._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server {\n    listen 80;\n    server_name myproxy.org;\n\n    root /var/www/html/proxy;\n\n    location = /proxy.pac {\n      try_files proxy.pac =404;\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("h2",{attrs:{id:"configure-socks-proxy-on-ios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-socks-proxy-on-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure SOCKS proxy on iOS")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Open "),n("strong",[e._v("Settings > Wi-Fi > "),n("em",[e._v("Your network name")])]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Scroll down to the "),n("strong",[e._v("HTTP PROXY")]),e._v(" section and tap "),n("strong",[e._v("Configure Proxy")]),e._v(".")]),e._v(" "),n("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"50%"}},[n("img",{attrs:{src:t(184),alt:"iOS Wi-Fi network settings"}})]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[e._v("Although the section is named "),n("em",[e._v("HTTP PROXY")]),e._v(", iOS supports SOCKS as\nwell.")])])]),e._v(" "),n("li",[n("p",[e._v("Tap "),n("strong",[e._v("Configure Proxy")]),e._v(", then select "),n("strong",[e._v("Automatic")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("In the "),n("strong",[e._v("URL")]),e._v(" field, type the URL of the "),n("code",[e._v("proxy.pac")]),e._v(" file.")]),e._v(" "),n("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"50%"}},[n("img",{attrs:{src:t(185),alt:"iOS proxy confguration"}})])])]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Proxy Auto-Configuration (PAC) file - HTTP | MDN")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("Change in iOS 10.2 and Greater Proxy pac Files [David's Public Pages]")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.remyservices.net/technology/blog/2017_2_20",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.remyservices.net/technology/blog/2017_2_20"),n("OutboundLink")],1)])])])])},[],!1,null,null,null);r.default=s.exports}}]);