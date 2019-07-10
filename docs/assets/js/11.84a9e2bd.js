(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(e,t,n){"use strict";n.r(t);var r=n(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"change-intel-i915-s-pwm-frequency-on-boot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#change-intel-i915-s-pwm-frequency-on-boot","aria-hidden":"true"}},[e._v("#")]),e._v(" Change Intel i915's PWM Frequency on Boot")]),e._v(" "),n("p",[e._v("The problem with PWM frequency is described in ArchLinux Wiki:\n"),n("a",{attrs:{href:"https://wiki.archlinux.org/index.php/backlight#Backlight_PWM_modulation_frequency_.28Intel_i915_only.29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backlight"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("To set desired PWM frequency on boot, create a "),n("code",[e._v("systemd")]),e._v(" service file:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/etc/systemd/system/pwmfrequency@.service\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("with the following content:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[Unit]\nDescription=LED PWM frequency\nAfter=graphical.target\n\n[Service]\nExecStart=/usr/bin/intel_reg write 0xC8254 %I\nType=oneshot\nRemainAfterExit=yes\n\n[Install]\nWantedBy=default.target\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("Finally, create a "),n("code",[e._v("systemd")]),e._v(" service:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("systemctl enable pwmfrequency@0x7a107a1\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("The hex number after the '@' symbol is the desired PWM frequency value. You can\ncalculate it here: "),n("a",{attrs:{href:"http://devbraindom.blogspot.ru/2013/03/eliminate-led-screen-flicker-with-intel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eliminate LED screen flicker with Intel\ni915"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Random thoughts: Eliminate LED screen flicker with Intel i915")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://devbraindom.blogspot.com/2013/03/eliminate-led-screen-flicker-with-intel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://devbraindom.blogspot.com/2013/03/eliminate-led-screen-flicker-with-intel.html"),n("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=s.exports}}]);