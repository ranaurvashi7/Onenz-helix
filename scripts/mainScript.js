!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                n.d(i, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 41)
}({
    41: function(e, t) {
        !function() {
            var e, t, n = window.navigator.userAgent, i = /Trident/i.test(n) ? "Internet Explorer" : /UCWEB|UCBrowser/i.test(n) ? "UC Browser" : /Edge/i.test(n) ? "Edge" : /Firefox/i.test(n) ? "Firefox" : /Chrome/i.test(n) ? "Chrome" : navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && n && !/CriOS/i.test(n) || /Safari/i.test(n) ? "Safari" : /Opera Mini/i.test(n) ? "Opera Mini" : /Opera/i.test(n) ? "Opera" : /VFNZiOSApp/i.test(n) ? "VFNZiOSApp" : /VFNZAndroidApp/i.test(n) ? "VFNZAndroidApp" : "Other", a = /android/i.test(n) ? "Android" : /Symb/i.test(n) ? "SymbianOS" : /iphone/i.test(n) ? "iOS" : /Windows Phone/i.test(n) ? "Windows Phone" : /linux/i.test(n) ? "Linux" : /macintosh|mac os x/i.test(n) ? "Macintosh" : /windows|win32/i.test(n) ? "Windows" : /CrOS/i.test(n) ? "Chrome OS" : "Other", r = /ipad|playbook|tablet|kindle/i.test(n) ? "Tablet" : /mobi|Symb|Opera Mini/i.test(n) ? "Mobile" : "Desktop", o = {}, s = !0, l = !1, c = window.location.search, u = null, d = null, g = "";
            function p(e) {
                return null != m(e)
            }
            function m(e) {
                let t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
                if (t)
                    return t[2]
            }
            function v(e) {
                !function(e, t, n, i) {
                    let a = ""
                      , r = ""
                      , o = "";
                    o = n ? new Date(parseInt(n)) : new Date(19249236e5),
                    a = "; expires=" + o.toUTCString(),
                    i && (r = ";domain=" + i),
                    document.cookie = e + "=" + t + a + r + "; path=/"
                }(e, "", 3155508e5, domain)
            }
            e = window.location.pathname + window.location.hash;
            var _ = function(e) {
                return e.toLowerCase().replace(/^\/|\/$|#|\?/g, "").replace(/\//g, ":")
            }
              , f = function(e) {
                var t, n;
                return void 0 !== (t = -1 !== e.indexOf("shop") && -1 !== e.indexOf("/business/") ? _(e) : -1 !== e.indexOf("shop") ? (n = e,
                n.toLowerCase().replace("/shop", "")).replace(/^\/|\/$|#|\?/g, "").replace(/\//g, ":") : _(e)) && "" !== t ? "discovery:" + t : ""
            }
              , y = function(e, t) {
                return -1 !== g.indexOf("signin") || -1 !== g.indexOf("register") ? "myvf" : "discovery"
            }
              , h = function(e, t) {
                return e.split(":").map((function(e) {
                    return e.toLowerCase()
                }
                ))
            }
              , k = function() {
                return window.sessionStorage.getItem("linkedMsisdnAccess") || window.sessionStorage.getItem("primaryMsisdnAccess")
            }
              , b = function() {
                return window.sessionStorage.getItem("accountAccess")
            }
              , N = function() {
                return document.getElementsByClassName("HatNavigation-items-item")[0].dataset.hasOwnProperty("active") ? "consumer" : "business"
            }
              , w = function() {
                var e = O();
                return e || ""
            }
              , O = function() {
                return document.cookie.split("; ").filter((function(e) {
                    return e.startsWith("analyticsCookie=")
                }
                )).map((function(e) {
                    return e.replace("analyticsCookie=", "")
                }
                ))[0]
            }
              , x = function(e) {
                g = e
            }
              , E = function(e, t) {
                var n = ""
                  , i = e.split("/").filter((function(e) {
                    return "" !== e
                }
                ));
                switch (t) {
                case 1:
                    n += i[0] ? i[0] : "";
                    break;
                case 2:
                    n += i[1] ? i[0] + ":" + i[1] : "";
                    break;
                case 3:
                    n += i[2] ? i[0] + ":" + i[1] + ":" + i[2] : ""
                }
                return n
            }
              , L = function() {
                o = window.utag_data = {}
            }
              , C = function() {
                return -1 !== e.indexOf("#sign-in") ? "signin-page" : ""
            };
            window.vfnz || (window.vfnz = {});
            window.vfnz.tealium = {
                getTealiumdataLayer: function(n) {
                    n && L();
                    var _ = ""
                      , O = !1
                      , x = m("tealiumOrderProduct");
                    x && (x = JSON.parse(x)),
                    tealiumDataLayerBreadcrumb && (_ = tealiumDataLayerBreadcrumb,
                    O = !0),
                    -1 !== (g = "" === g ? C() : g).indexOf("signin") && -1 !== c.indexOf("type=register") && (g = "register-page");
                    var T, S, B, A, D, P = function(t, n) {
                        var i = {};
                        return i.levels = h(t, n),
                        i.channel = y(i.levels, n),
                        i.pageName = f(e),
                        0 === i.pageName.length && (i.pageName = "discovery:home"),
                        -1 !== g.indexOf("signin") ? i.pageName = "myvf-web:sign in" : -1 !== g.indexOf("register") && (i.pageName = "myvf-web:register"),
                        i
                    }(_, O);
                    if (!l) {
                        if (o.page_name = P.pageName,
                        o.visitor_login_status = (B = p("x-authorization"),
                        A = p("vodafone_loggin"),
                        t = "logged out",
                        (B || A) && (t = "logged in"),
                        t),
                        o.visitor_customer_type = (S = k() || u,
                        null !== (S = JSON.parse(S)) && "EBU" === S.sharedGroupType ? "Enterprise" : null === S || "CBU" !== S.sharedGroupType && null !== S.sharedGroupType ? "" : "Consumer"),
                        o.visitor_asset_plan_type_list = function(e) {
                            var t = b() || d;
                            if (t = JSON.parse(t),
                            e) {
                                var n = [];
                                return null !== t && (0 !== Object.keys(t.prepay).length && n.push("Prepay"),
                                0 !== Object.keys(t.onaccount).length && n.push("On Account"),
                                0 === Object.keys(t.redfixedandbroadband).length && 0 === Object.keys(t.bluefixedandbroadband).length || n.push("Broadband")),
                                0 == n.length && n.push(""),
                                n.join(" | ")
                            }
                            return null !== t && "prepay" === t.linkedAccount.type ? "Prepay" : null !== t && "onaccount" === t.linkedAccount.type ? "On Account" : ""
                        }(window.emailLoginEnabled),
                        o.visitor_asset_plan_type_active = (T = b() || d,
                        null === (T = JSON.parse(T)) ? "" : 0 !== Object.keys(T.linkedAccount).length ? T.linkedAccount.type : ""),
                        o.visitor_id_asset_primary = w(),
                        window.emailLoginEnabled && (o.visitor_asset_plan_type_primary = function() {
                            var e = b() || d;
                            return null !== (e = JSON.parse(e)) && "prepay" === e.linkedAccount.type ? "Prepay" : null !== e && "onaccount" === e.linkedAccount.type ? "On Account" : null !== e && "fab" === e.linkedAccount.type ? "Broadband" : ""
                        }()),
                        "logged in" === o.visitor_login_status && null === u && null === d && (u = k(),
                        d = b()),
                        o.device_type = r,
                        o.browser = i,
                        o.operating_system = a,
                        o.page_channel = P.channel,
                        o.page_type = "discovery",
                        o.page_country = "nz",
                        o.page_platform = "cms",
                        o.CST = function() {
                            try {
                                return document.cookie.split("; ").filter((function(e) {
                                    return e.startsWith("echannel_agent_flags=")
                                }
                                )).length > 0 ? "Y" : "N"
                            } catch (e) {
                                return "N"
                            }
                        }(),
                        o.Customer_ID = w(),
                        o.login_type = "logged in" === o.visitor_login_status ? "username-password" : "",
                        o.page_path_query = c ? function(e) {
                            for (var t = "", n = e.split("#")[0].slice(1).split("&"), i = 0; i < n.length; i++) {
                                var a = n[i].split("=");
                                t = "" !== t ? t + ";" + a[1] : a[1]
                            }
                            return t
                        }(c) : "",
                        o.page_breadcrumb = P.levels.join(">"),
                        x && (Object.keys(x).forEach((function(e) {
                            o[e] = x[e]
                        }
                        )),
                        v("tealiumOrderProduct"),
                        o.page_type = "sales"),
                        n) {
                            for (var I in n)
                                o[I] = n[I];
                            e.indexOf("/broadband/express-signup/") >= 0 && ("checkout_step2" === n.checkout_step2 ? (delete o.checkout_step1,
                            delete o.checkout_step3,
                            delete o.checkout_start) : "checkout_step3" === n.checkout_step3 && (delete o.checkout_step1,
                            delete o.checkout_step2))
                        }
                        if ("/broadband/express-signup/order-confirmation/" === e) {
                            var z = m("nakedOrderDetails");
                            if (!z)
                                return;
                            try {
                                var j = JSON.parse(z);
                                o.page_name = "shop:broadband:express-signup:order completed",
                                o.page_site_section_lvl_1 = "personal",
                                o.page_site_section_lvl_2 = "shop:broadband",
                                o.page_site_section_lvl_3 = "shop:broadband:express-signup",
                                o.page_site_section_lvl_4 = "shop:broadband:express-signup:order completed",
                                o.page_type = "sales",
                                o.page_platform = "CMS",
                                o.interest_free = "N",
                                o.order_event = "complete",
                                o.product_type = "Broadband",
                                o.product_name = j.productName,
                                o.product_sku = j.productSkuId,
                                o.transaction_id = j.orderId,
                                o.checkout_complete = "checkout_complete",
                                o.checkout_step4 = "checkout_step4",
                                v("nakedOrderDetails")
                            } catch (e) {}
                        }
                        if (s && (-1 !== g.indexOf("signin") ? o.visitor_login = "start" : -1 !== g.indexOf("register") && (o.visitor_registration = "start")),
                        -1 !== g.indexOf("signin") || -1 !== g.indexOf("register"))
                            !function(e) {
                                o.page_site_section_lvl_1 = N(),
                                o.page_site_section_lvl_2 = "discovery" === e.channel ? e.channel : "myvf-web",
                                o.page_site_section_lvl_3 = -1 !== g.indexOf("register") ? "myvf-web:sign in" : o.page_name,
                                o.page_site_section_lvl_4 = -1 !== g.indexOf("register") ? "myvf-web:sign in:register" : "",
                                o.page_site_section_lvl_5 = ""
                            }(P);
                        else {
                            var q = E(window.location.pathname, 1)
                              , M = E(window.location.pathname, 2)
                              , W = E(window.location.pathname, 3);
                            o.page_site_section_lvl_1 = N(),
                            o.page_site_section_lvl_2 = o.page_type,
                            o.page_site_section_lvl_3 = "" !== q ? o.page_type + ":" + q : "",
                            o.page_site_section_lvl_4 = "" !== M ? o.page_type + ":" + M : "",
                            o.page_site_section_lvl_5 = "" !== W ? o.page_type + ":" + W : ""
                        }
                        o.page_section = o.page_site_section_lvl_1 + ";" + o.page_site_section_lvl_2 + ";" + o.page_site_section_lvl_3 + ";" + o.page_site_section_lvl_4 + ";" + o.page_site_section_lvl_5
                    }
                    "logout" === o.visitor_logout && (u = null,
                    d = null),
                    l = !1,
                    s && (o.page_event = "page_view"),
                    D = o,
                    window.utag && utag.view(D, (function() {
                        utag.DB("Track View Triggered")
                    }
                    ))
                },
                setTealiumEventToDataLayer: function(t, n, i) {
                    switch (L(),
                    s = !1,
                    e = window.location.pathname + window.location.hash,
                    t) {
                    case "page_event":
                        o[t] = "page_view";
                        break;
                    case "visitor_login":
                        o[t] = "start",
                        x("signin-overlay");
                        break;
                    case "visitor_registration_start":
                        o.visitor_registration = "start",
                        x("register-page");
                        break;
                    case "visitor_registration_success":
                        o.visitor_registration = "success",
                        x("register-page");
                        break;
                    case "page_errors":
                        o[t] = "page_errors",
                        o.page_error = n.status + ": " + n.statusText,
                        o.page_name = i,
                        l = !0;
                        break;
                    case "visitor_logout":
                        o[t] = "logout"
                    }
                    vfnz.tealium.getTealiumdataLayer()
                },
                setClickEventToDataLayer: function(e, t, n) {
                    L(),
                    o.event_category = "link",
                    o.event_label = e,
                    o.event_action = "click",
                    o.event_value = t,
                    o.event_name = n,
                    o.ui_interaction = "",
                    vfnz.tealium.getTealiumdataLayer()
                },
                setSearchEventsToDataLayer: function(e, t) {
                    L(),
                    o.search_apply = "search",
                    o.search_terms = t,
                    vfnz.tealium.getTealiumdataLayer()
                },
                getTealiumdataLayerOnPageLoad: function() {
                    L(),
                    vfnz.tealium.getTealiumdataLayer()
                }
            };
            var T = document.getElementsByClassName("Page-header-userIcon-trigger")[0]
              , S = document.getElementsByClassName("Page-header-userIcon-trigger-NOTNOW")[0];
            (void 0 !== T ? T : S).addEventListener("click", (function() {
                vfnz.tealium.setTealiumEventToDataLayer("visitor_login")
            }
            ), !1);
            var B = function(e) {
                var t = "";
                return e.classList.contains("DropdownNavigationItem-text-link") || e.classList.contains("NavigationItem-text-link") ? t = "first" : e.classList.contains("NavigationLink") ? t = "second" : e.classList.contains("TertiaryNavLink") && (t = "third"),
                t
            }
              , A = document.querySelectorAll(".Page-header-bar-navigation li.DropdownNavigation-items-item")
              , D = document.querySelectorAll(".Page-header-bar-navigation li.DropdownNavigation-items-item div.DropdownNavigationItem a");
            [].forEach.call(D, (function(e) {
                e.addEventListener("click", (function() {
                    var t = B(e)
                      , n = function(e, t) {
                        var n = [];
                        return [].forEach.call(A, (function(i, a) {
                            var r = i.getElementsByClassName("DropdownNavigationItem-text-link")[0].innerText;
                            e === r && "first" === t && n.push(r, a + 1);
                            for (var o = 0; o < i.getElementsByClassName("DropdownNavigationItem-items-item").length; o++) {
                                var s = i.getElementsByClassName("DropdownNavigationItem-items-item")[o].getElementsByClassName("NavigationLink")[0].innerText;
                                e === s && "second" === t && n.push(r + ">" + s, a + 1 + ">" + (o + 1));
                                for (var l = 0; l < i.getElementsByClassName("DropdownNavigationItem-items-item")[o].getElementsByClassName("TertiaryNavLink").length; l++) {
                                    var c = i.getElementsByClassName("DropdownNavigationItem-items-item")[o].getElementsByClassName("TertiaryNavLink")[l].innerText;
                                    e === c && "third" === t && n.push(r + ">" + s + ">" + c, a + 1 + ">" + (o + 1) + ">" + (l + 1))
                                }
                            }
                        }
                        )),
                        n
                    }(e.innerText, t);
                    vfnz.tealium.setClickEventToDataLayer(n[0], n[1], "link_top_navigation")
                }
                ), !1)
            }
            ));
            var P = document.querySelectorAll(".Page-header-hamburger-menu-content ul.Navigation-items li.Navigation-items-item")
              , I = document.querySelectorAll(".Page-header-hamburger-menu-content nav.Navigation ul.Navigation-items li.Navigation-items-item a");
            [].forEach.call(I, (function(e) {
                e.addEventListener("click", (function() {
                    var t = B(e)
                      , n = function(e, t) {
                        var n = [];
                        return [].forEach.call(P, (function(i, a) {
                            var r = i.getElementsByClassName("NavigationItem-text-link")[0].innerText;
                            if (e === r && "first" === t && n.push(r, a + 1),
                            i.getElementsByClassName("NavigationItem-items-item"))
                                for (var o = 0; o < i.getElementsByClassName("NavigationItem-items-item").length; o++) {
                                    var s = i.getElementsByClassName("NavigationItem-items-item")[o].getElementsByClassName("NavigationLink")[0].innerText;
                                    e === s && "second" === t && n.push(r + ">" + s, a + 1 + ">" + (o + 1));
                                    for (var l = 0; l < i.getElementsByClassName("NavigationItem-items-item")[o].getElementsByClassName("NavigationLink-tertiary-link").length; l++) {
                                        var c = i.getElementsByClassName("NavigationItem-items-item")[o].getElementsByClassName("NavigationLink-tertiary-link")[l].getElementsByClassName("TertiaryNavLink")[0].innerText;
                                        e === c && "third" === t && n.push(r + ">" + s + ">" + c, a + 1 + ">" + (o + 1) + ">" + (l + 1))
                                    }
                                }
                        }
                        )),
                        n
                    }(e.innerText, t);
                    vfnz.tealium.setClickEventToDataLayer(n[0], n[1], "link_top_navigation")
                }
                ), !1)
            }
            ));
            [].forEach.call(document.querySelectorAll(".Page-header-hamburger-menu-content>div.NavigationItem a.NavigationItem-text-link"), (function(e) {
                e.addEventListener("click", (function() {
                    var t = function(e) {
                        var t = 0;
                        switch (e) {
                        case "Personal":
                            t = 1;
                            break;
                        case "Business":
                            t = 2;
                            break;
                        case "Why Vodafone":
                            t = 3
                        }
                        return t
                    }(e.innerText);
                    vfnz.tealium.setClickEventToDataLayer(e.innerText, t, "site_navigation")
                }
                ), !1)
            }
            )),
            window.addEventListener("click", (function(e) {
                e.target.matches(".registerLink") && vfnz.tealium.setTealiumEventToDataLayer("visitor_registration_start"),
                (e.target.matches("div.PromoC-title") || e.target.matches("div.PromoC-description") && e.target.parentNode.parentNode.parentNode.matches("div.Page-header-search-results-result")) && vfnz.tealium.setSearchEventsToDataLayer("search", document.getElementsByClassName("Page-header-search-input")[0].value)
            }
            )),
            [].forEach.call(document.querySelectorAll("li.ListC-items-item a"), (function(e, t) {
                e.addEventListener("click", (function() {
                    vfnz.tealium.setClickEventToDataLayer(document.querySelectorAll("li.ListC-items-item a div.IconPromo-title")[t].innerText, t + 1, "home_page_quick_links")
                }
                ), !1)
            }
            )),
            [].forEach.call(document.querySelectorAll(".HatNavigation-items-item a.NavigationLink"), (function(e, t) {
                e.addEventListener("click", (function() {
                    vfnz.tealium.setClickEventToDataLayer(e.innerText, t + 1, "site_navigation")
                }
                ), !1)
            }
            )),
            [].forEach.call(document.querySelectorAll("div.Page-above a.CtaLink"), (function(e, t) {
                e.addEventListener("click", (function() {
                    vfnz.tealium.setClickEventToDataLayer(document.querySelector("div.SectionPage-lead figure picture img").alt, t, "hero_banner_click")
                }
                ), !1)
            }
            )),
            window.addEventListener("load", (function() {
                -1 !== e.indexOf("/broadband/express-signup/") && "/broadband/express-signup/order-confirmation/" !== e || -1 !== e.indexOf("/shop/mobile/product-listing/") || -1 !== e.indexOf("/shop/accessory/product-listing/") || -1 !== e.indexOf("/shop/mobile/product-details/") || -1 !== e.indexOf("/shop/accessory/product-details/") || -1 !== e.indexOf("/mobile-plans/change-your-plan/") || -1 !== e.indexOf("/broadband/internet-plans/") || -1 !== e.indexOf("/broadband/internet-plans/plan-options/") || -1 !== e.indexOf("/shop/cart/") || vfnz.tealium.getTealiumdataLayerOnPageLoad()
            }
            ))
        }()
    }
});
