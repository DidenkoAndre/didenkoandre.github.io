! function(m, n, v) {
    "use strict";
    var s = m(document),
        b = m(n),
        d = m("body"),
        y = new BezierEasing(.77, 0, .175, 1),
        o = new MobileDetect(n.navigator.userAgent),
        c = {
            thb_menuscroll: !1,
            thb_cartscroll: !1,
            init: function() {
                var e, t = this;
                for (e in b.on("resize.thb-init", function() {
                        m(".page-padding").css({
                            paddingTop: m("#header").outerHeight() + parseInt(m("#header").css("marginTop")) + .1 * b.outerHeight()
                        })
                    }).trigger("resize.thb-init"), t)
                    if (t.hasOwnProperty(e)) {
                        var a = t[e];
                        void 0 !== a.selector && void 0 !== a.init && 0 < m(a.selector).length && a.init()
                    }
            },
            pace: {
                selector: "body",
                init: function() {
                    m(this.selector).hasClass("thb-preload") && Pace.on("done", function() {
                        TweenMax.to(m(".pace"), 1, {
                            y: -n.innerHeight,
                            ease: y,
                            onComplete: function() {
                                m(".pace").remove()
                            }
                        })
                    })
                }
            },
            collectionStyle4: {
                selector: ".collection-style4-container",
                init: function() {
                    var s = m(this.selector),
                        l = m(".style4-main", s);

                    function r(e) {
                        e = e || s, s.find(".style4-album").each(function() {
                            var e = m(this),
                                t = e.data("aspect");
                            m(".album-image", e).width(function() {
                                return m(this).height() / t
                            })
                        })
                    }
                    r(), b.on("resize", v.debounce(function() {
                        r()
                    }, 20)), s.find(".album-link").on("click", function() {
                        var e = m(this),
                            t = e.data("albumid"),
                            o = m(".album-image", e),
                            n = new TimelineMax;
                        return m.ajax(themeajax.url, {
                            method: "POST",
                            data: {
                                action: "thb_collection_style4",
                                albumid: t
                            },
                            beforeSend: function() {
                                o.addClass("thb-loading"), !0
                            },
                            success: function(e) {
                                var t = m.parseHTML(m.trim(e)),
                                    a = m(t).find(".style4-album-detail"),
                                    i = m(".back_to_list", a);
                                o.removeClass("thb-loading"), m(t).appendTo(s), TweenMax.set(m(t), {
                                    autoAlpha: 0
                                }), r(m(t)), c.custom_scroll.init(m(t).find(".custom_scroll")), c.lightbox.init(), c.shareButton.init(), c.panHover.init(), c.atvImg.init(), n.to(l, .2, {
                                    autoAlpha: 0
                                }).to(m(t), .2, {
                                    autoAlpha: 1
                                }).to(a, .5, {
                                    autoAlpha: 1
                                }), i.on("click", function() {
                                    return n.reverse(), !1
                                })
                            }
                        }), !1
                    })
                }
            },
            collectionStyle5: {
                selector: ".collection-style5-container",
                init: function() {
                    m(this.selector);
                    b.on("scroll", function() {
                        TweenMax.to(m(".album_meta"), .2, {
                            autoAlpha: 0
                        }), TweenMax.to(m(m(".collection-style5:in-viewport(150)").data("target")), .2, {
                            autoAlpha: 1
                        })
                    }).trigger("scroll")
                }
            },
            isotope: {
                selector: ".isotope-grid",
                init: function() {
                    m(this.selector).each(function() {
                        var e = m(this),
                            t = (e.children(".item"), e.isotope({
                                itemSelector: ".item",
                                transitionDuration: 0,
                                layoutMode: "packery"
                            }));
                        t.imagesLoaded().progress(function() {
                            t.isotope("layout")
                        })
                    })
                }
            },
            updateCart: {
                selector: "#side-cart",
                init: function() {
                    c.updateCart.quick_cart(), d.bind("wc_fragments_refreshed added_to_cart", c.updateCart.quick_cart)
                },
                quick_cart: function() {
                    m(this.selector);
                    m("#side-cart").on("click", ".quick_cart", function() {
                        return d.toggleClass("open-cart"), !1
                    }), m(".cart_placeholder").on("click", function() {
                        return d.toggleClass("open-cart"), !1
                    })
                }
            },
            ajaxAddToCart: {
                selector: ".ajax_add_to_cart",
                init: function() {
                    var e;
                    m(this.selector).on("click", function() {
                        e = m(this)
                    }), d.on("added_to_cart", function() {
                        e.find(".thb_button_icon").html(themeajax.l10n.added_svg), e.find("span").text(themeajax.l10n.added)
                    })
                }
            },
            atvImg: {
                selector: ".atvImg",
                init: function() {
                    m(this.selector);
                    atvImg()
                }
            },
            albumOverlay: {
                selector: ".album_overlay",
                init: function() {
                    m(this.selector).each(function() {
                        var e = m(this),
                            t = e.find(".album_no, h3, hr, aside"),
                            a = new TimelineLite({
                                paused: !0
                            });
                        e.find("hr");
                        o.mobile() ? (TweenLite.to(e, .2, {
                            opacity: 1,
                            ease: y
                        }), TweenLite.to(e.find("hr"), .2, {
                            opacity: 1,
                            scaleX: 1,
                            ease: y
                        })) : (a.add(TweenLite.to(e, .2, {
                            opacity: 1,
                            ease: y
                        })).add(TweenMax.staggerFromTo(t, .21, {
                            rotationX: "45deg",
                            y: 20,
                            opacity: 0
                        }, {
                            rotationX: "0",
                            scaleX: 1,
                            y: 0,
                            opacity: 1,
                            ease: y
                        }, .07)), e.hoverIntent(function() {
                            a.timeScale(1).play()
                        }, function() {
                            a.timeScale(1.5).reverse()
                        }))
                    })
                }
            },
            panHover: {
                selector: ".pan-hover",
                init: function() {
                    m(this.selector).each(function() {
                        m(this).find(".pan-hover-inside").panr({
                            moveTarget: ".photo_link",
                            scaleDuration: .7,
                            sensitivity: 30,
                            scaleTo: 1.07,
                            panDuration: 1
                        })
                    })
                }
            },
            photoProof: {
                selector: ".proof-it",
                init: function() {
                    m(this.selector).on("click", function() {
                        var t = m(this),
                            e = t.data("id"),
                            a = t.parents(".photo");
                        t.addClass("loading"), m.ajax(themeajax.url, {
                            method: "POST",
                            data: {
                                action: "thb_proof",
                                id: e,
                                checked: !a.hasClass("checked")
                            },
                            success: function(e) {
                                a.toggleClass("checked"), t.removeClass("loading")
                            }
                        })
                    })
                }
            },
            fixedMe: {
                selector: ".thb-fixed",
                init: function(e) {
                    var t = e || m(this.selector),
                        a = m("#wpadminbar"),
                        i = a ? a.outerHeight() : 0;
                    o.mobile() || (t.each(function() {
                        m(this).stick_in_parent({
                            offset_top: i,
                            spacer: ".sticky-content-spacer",
                            recalc_every: 50
                        })
                    }), m(".post-content, .products, .woocommerce-product-gallery").imagesLoaded(function() {
                        m(document.body).trigger("sticky_kit:recalc")
                    }), b.on("resize", v.debounce(function() {
                        m(document.body).trigger("sticky_kit:recalc")
                    }, 30)))
                }
            },
            carousel: {
                selector: ".slick",
                init: function(e) {
                    (e || m(this.selector)).each(function() {
                        var e = m(this),
                            t = e.data("columns"),
                            a = !0 === e.data("navigation"),
                            i = !1 !== e.data("autoplay"),
                            o = {
                                dots: !0 === e.data("pagination"),
                                arrows: a,
                                infinite: !1,
                                speed: e.data("speed") ? e.data("speed") : 1e3,
                                slidesToShow: t,
                                autoplay: i,
                                autoplaySpeed: 6e3,
                                pauseOnHover: !0,
                                focusOnSelect: !0,
                                adaptiveHeight: !0,
                                accessibility: !1,
                                fade: !0 === e.data("fade"),
                                cssEase: "ease-in-out",
                                prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
                                nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>',
                                responsive: [{
                                    breakpoint: 1025,
                                    settings: {
                                        slidesToShow: t < 3 ? t : 3
                                    }
                                }, {
                                    breakpoint: 780,
                                    settings: {
                                        slidesToShow: t < 2 ? t : 2
                                    }
                                }, {
                                    breakpoint: 640,
                                    settings: {
                                        slidesToShow: t < 2 ? t : 1
                                    }
                                }]
                            };
                        e.imagesLoaded(function() {
                            e.slick(o)
                        })
                    })
                }
            },
            albumHeight: {
                selector: ".vertical",
                init: function(e) {
                    var t = this,
                        a = m(t.selector);
                    t.control(a), b.resize(v.debounce(function() {
                        t.control(a)
                    }, 50))
                },
                control: function(e, t) {
                    e.offset().top, e.offset();
                    var a = m("#wpadminbar");
                    a && a.outerHeight();
                    e.each(function() {
                        var e = m(this).find(".item"),
                            t = m(".page-padding").height();
                        e.height(t)
                    })
                }
            },
            swiper: {
                selector: ".swiper-container",
                init: function() {
                    var o = m(this.selector),
                        n = m(".swiper-gallery"),
                        s = o.find(".thb-arrow"),
                        l = n.find(".swiper-pagination span"),
                        r = "on" === n.data("autoplay") && n.data("autoplay-speed"),
                        e = n.data("effect") ? n.data("effect") : "slide",
                        t = n.data("speed") ? n.data("speed") : 1e3,
                        i = n.find(".swiper-slide").length,
                        c = m(".swiper-thumbnails"),
                        a = m(".thumbnail-toggle"),
                        d = new TimelineLite({
                            paused: !0
                        }),
                        u = new TimelineLite({
                            paused: !0
                        }),
                        p = m("body");
                    if (r && s && (TweenLite.set(o.find(".thb-progress"), {
                            drawSVG: "0% 0%"
                        }), u.to(n.find(".thb-progress"), r / 1e3, {
                            drawSVG: "0% 100%"
                        }, "start")), c.length) {
                        CSSRulePlugin.getRule(".thb-thumbnails .swiper-slide:after");
                        TweenLite.set(m(".thb-gallery-icon"), {
                            drawSVG: "0% 74%"
                        }), TweenLite.set(m(".thb-thumbnail-icon"), {
                            drawSVG: "0% 48%"
                        }), d.to(m(".thb-gallery-icon"), 1, {
                            drawSVG: "73.7% 100%",
                            ease: y
                        }, "start").to(m(".thb-thumbnail-icon"), 1, {
                            drawSVG: "49% 97.5%",
                            ease: y
                        }, "start").to(m(".thb-thumbnails"), .5, {
                            x: 0,
                            ease: y
                        }, "start").to(m(".thb-thumbnails .swiper-container"), .5, {
                            opacity: 1,
                            ease: y
                        }, "start"), a.on("click", function() {
                            var e = m(this);
                            return e.data("toggle") ? (d.timeScale(1).reverse(), e.removeData("toggle")) : (d.timeScale(1).play(), e.data("toggle", "on")), !1
                        })
                    }
                    var h = {
                        nextButton: ".swiper-button-next",
                        prevButton: ".swiper-button-prev",
                        speed: t,
                        pagination: ".swiper-pagination",
                        paginationClickable: !0,
                        loop: 1 < i,
                        effect: e,
                        autoplay: r,
                        autoplayDisableOnInteraction: !1,
                        keyboardControl: !0,
                        mousewheelControl: !0,
                        onInit: function(t) {
                            var e = t.activeIndex,
                                a = t.slides.eq(e).data("color");
                            if (p.hasClass("thb-full-menu-left-enabled") || p.addClass(a), 1024 < b.width() && s && n.find(".thb-arrow").each(function() {
                                    var n = m(this);
                                    o.bind("mousemove", function(e) {
                                        var t = n.parents(".swiper-cursor"),
                                            a = t.offset(),
                                            i = Math.min(e.pageX - a.left, t.width()),
                                            o = e.pageY - a.top;
                                        i < 0 && (i = 0), o < 0 && (o = 0), TweenMax.set(n, {
                                            x: i - 40,
                                            y: o - 40,
                                            force3D: !0
                                        })
                                    })
                                }), c.length) {
                                var i = CSSRulePlugin.getRule(".thb-thumbnails .swiper-slide:after");
                                r && s && u.to(i, r / 1e3, {
                                    cssRule: {
                                        width: "100%"
                                    }
                                }, "start")
                            }
                            l && l.on("click", function() {
                                var e = m(this).index();
                                t.slideTo(e)
                            }), b.on("orientationchange", function() {
                                v.defer(function() {
                                    t.update()
                                })
                            })
                        },
                        onAutoplayStart: function() {
                            c && r && s && 1 < i && u.play()
                        },
                        onAutoplayStop: function() {
                            c && r && s && 1 < i && u.stop()
                        },
                        onSlideChangeStart: function(e) {
                            var t = e.slides.eq(e.activeIndex).attr("data-swiper-slide-index"),
                                a = e.slides.eq(t).data("color");
                            c && r && s && 1 < i && u.reverse(), p.hasClass("thb-full-menu-left-enabled") || p.removeClass("logo-light logo-dark").addClass(a), l && (l.removeClass("swiper-pagination-bullet-active"), l.eq(t).addClass("swiper-pagination-bullet-active"))
                        },
                        onSlideChangeEnd: function() {
                            c && r && s && 1 < i && u.restart()
                        }
                    };
                    "cube" === e && (h.cube = {
                        shadow: !1,
                        slideShadows: !1
                    }, h.direction = "vertical"), c && (h.loopedSlides = i);
                    var f = new Swiper(n, h);
                    if (c.length) {
                        var g = new Swiper(c, {
                            direction: "vertical",
                            slidesPerView: 5,
                            spaceBetween: 1,
                            loop: 1 < i,
                            loopedSlides: i,
                            centeredSlides: !0,
                            touchRatio: .2,
                            autoplayDisableOnInteraction: !1,
                            slideToClickedSlide: !0
                        });
                        (f.params.control = g).params.control = f
                    }
                }
            },
            paginationStyle2: {
                selector: ".pagination-style2",
                init: function() {
                    var s = m(this.selector),
                        e = m(".thb_load_more"),
                        t = 2;
                    e.on("click", function() {
                        var i = m(this),
                            o = i.text(),
                            n = i.data("count");
                        return i.text(themeajax.l10n.loading).addClass("loading"), m.post(themeajax.url, {
                            action: "thb_ajax",
                            page: t++
                        }, function(e) {
                            var t = m.parseHTML(m.trim(e)),
                                a = t ? t.length : 0;
                            "" === e || "undefined" === e || "No More Posts" === e || "No $args array created" === e ? i.text(themeajax.l10n.nomore).removeClass("loading").off("click") : (m(t).appendTo(s).hide().imagesLoaded(function() {
                                m(t).show(), s.data("isotope") && (s.isotope("appended", m(t)), s.isotope("layout")), TweenMax.set(m(t), {
                                    opacity: 0,
                                    y: 100
                                }), TweenMax.staggerTo(m(t), .25 * a, {
                                    y: 0,
                                    opacity: 1,
                                    ease: Quart.easeOut
                                }, .25)
                            }), a < n ? i.text(themeajax.l10n.nomore).removeClass("loading") : i.text(o).removeClass("loading"))
                        }), !1
                    })
                }
            },
            paginationStyle3: {
                selector: ".pagination-style3",
                init: function() {
                    var i = m(this.selector),
                        e = 2,
                        o = i.data("count"),
                        n = v.debounce(function() {
                            b.scrollTop() >= s.height() - b.height() - 60 && (b.off("scroll", n), i.addClass("thb-loading"), m.post(themeajax.url, {
                                action: "thb_ajax",
                                page: e++
                            }, function(e) {
                                var t = m.parseHTML(m.trim(e)),
                                    a = t ? t.length : 0;
                                i.removeClass("thb-loading"), "" === e || "undefined" === e || "No More Posts" === e || "No $args array created" === e || (m(t).appendTo(i).hide().imagesLoaded(function() {
                                    m(t).show(), i.data("isotope") && (i.isotope("appended", m(t)), i.isotope("layout")), TweenMax.set(m(t), {
                                        opacity: 0,
                                        y: 100
                                    }), TweenMax.staggerTo(m(t), .25 * a, {
                                        y: 0,
                                        opacity: 1,
                                        ease: Quart.easeOut
                                    }, .25)
                                }), o <= a && b.on("scroll", n))
                            }))
                        }, 30);
                    b.scroll(n)
                }
            },
            widgets: {
                selector: ".widget",
                init: function() {
                    var e = m(this.selector);
                    m(".thb-demo-holder");
                    m("h6", e).on("click", function() {
                        return m(this).parents(".widget").toggleClass("active"), !1
                    })
                }
            },
            custom_select: {
                selector: "select:not(.state_select):not(.country_to_state):not(#calc_shipping_state):not(#rating)",
                init: function() {
                    m(this.selector).selectric({
                        maxHeight: 300,
                        responsive: !0,
                        expandToItemText: !0,
                        arrowButtonMarkup: '<b class="button selectric-button">&#x25be;</b>'
                    }).on("change", function() {
                        var e = m(this).val(),
                            t = m(".isotope-grid"),
                            a = m(".slick.vertical");
                        if (0 < t.length) t.isotope({
                            filter: e
                        });
                        else if (0 < a.length) {
                            if (a.slick("slickUnfilter"), "*" === e) return;
                            a.slick("slickFilter", e), c.albumHeight.init()
                        }
                    })
                }
            },
            variations: {
                selector: "form.variations_form",
                init: function() {
                    var e = m(this.selector),
                        a = m("#product-images"),
                        t = m(".first img", a).attr("src"),
                        i = m("p.price", ".product-information").eq(0),
                        o = i.html();
                    e.on("show_variation", function(e, t) {
                        i.html(t.price_html), t.hasOwnProperty("image") && t.image.src && m(".first img", a).attr("src", t.image.src).attr("srcset", "")
                    }).on("reset_image", function() {
                        i.html(o), m(".first img", a).attr("src", t).attr("srcset", "")
                    })
                }
            },
            quantity: {
                selector: ".quantity",
                init: function() {
                    m(this.selector);
                    m("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />'), s.on("click", ".plus, .minus", function() {
                        var e = m(this).closest(".quantity").find(".qty"),
                            t = parseFloat(e.val()),
                            a = parseFloat(e.attr("max")),
                            i = parseFloat(e.attr("min")),
                            o = e.attr("step");
                        t && "" !== t && "NaN" !== t || (t = 0), "" !== a && "NaN" !== a || (a = ""), "" !== i && "NaN" !== i || (i = 0), "any" !== o && "" !== o && void 0 !== o && "NaN" !== parseFloat(o) || (o = 1), m(this).is(".plus") ? a && (a === t || a < t) ? e.val(a) : e.val(t + parseFloat(o)) : i && (i === t || t < i) ? e.val(i) : 0 < t && e.val(t - parseFloat(o)), e.trigger("change")
                    })
                }
            },
            contact: {
                selector: ".contact_map",
                init: function() {
                    var c = this,
                        e = m(c.selector),
                        t = m(".contact-content").height(),
                        a = TweenLite.to(m(".contact_map"), 1, {
                            y: -t,
                            ease: y
                        }).reverse(),
                        i = 0;
                    1024 < b.width() && m("#contact_area.style1").on("mousewheel", function(e) {
                        var t = e.deltaY;
                        a.isActive() || (t < 0 && 0 === i ? (i = 1, a.reversed(!a.reversed())) : 0 < t && 1 === i && (i = 0, a.reversed(!a.reversed())))
                    }), e.each(function() {
                        var e, t = m(this),
                            a = t.data("map-zoom"),
                            i = t.data("map-center-lat"),
                            o = t.data("map-center-long"),
                            n = t.data("latlong"),
                            s = t.data("pin-image");
                        switch (d.hasClass("dark-theme") ? "1" : "0") {
                            case "1":
                                e = [{
                                    stylers: [{
                                        hue: "#ff1a00"
                                    }, {
                                        invert_lightness: !0
                                    }, {
                                        saturation: -100
                                    }, {
                                        lightness: 33
                                    }, {
                                        gamma: .5
                                    }]
                                }, {
                                    featureType: "water",
                                    elementType: "geometry",
                                    stylers: [{
                                        color: "#2D333C"
                                    }]
                                }];
                                break;
                            default:
                                e = [{
                                    featureType: "poi",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    stylers: [{
                                        saturation: -70
                                    }, {
                                        lightness: 37
                                    }, {
                                        gamma: 1.15
                                    }]
                                }, {
                                    elementType: "labels",
                                    stylers: [{
                                        gamma: .26
                                    }, {
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "road",
                                    stylers: [{
                                        lightness: 0
                                    }, {
                                        saturation: 0
                                    }, {
                                        hue: "#ffffff"
                                    }, {
                                        gamma: 0
                                    }]
                                }, {
                                    featureType: "road",
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "road.arterial",
                                    elementType: "geometry",
                                    stylers: [{
                                        lightness: 20
                                    }]
                                }, {
                                    featureType: "road.highway",
                                    elementType: "geometry",
                                    stylers: [{
                                        lightness: 50
                                    }, {
                                        saturation: 0
                                    }, {
                                        hue: "#ffffff"
                                    }]
                                }, {
                                    featureType: "administrative.province",
                                    stylers: [{
                                        visibility: "on"
                                    }, {
                                        lightness: -50
                                    }]
                                }, {
                                    featureType: "administrative.province",
                                    elementType: "labels.text.stroke",
                                    stylers: [{
                                        visibility: "off"
                                    }]
                                }, {
                                    featureType: "administrative.province",
                                    elementType: "labels.text",
                                    stylers: [{
                                        lightness: 20
                                    }]
                                }]
                        }
                        "" !== themeajax.settings.map_style && (e = m.parseJSON(themeajax.settings.map_style));
                        var l = {
                                center: new google.maps.LatLng(i, o),
                                styles: e,
                                zoom: a,
                                draggable: !1,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                scrollwheel: !1,
                                panControl: !1,
                                zoomControl: !1,
                                mapTypeControl: !1,
                                scaleControl: !1,
                                streetViewControl: !1
                            },
                            r = new google.maps.Map(t[0], l);
                        google.maps.event.addListenerOnce(r, "tilesloaded", function() {
                            if (0 < s.length) {
                                var e = new Image;
                                e.src = s, m(e).load(function() {
                                    c.setMarkers(r, n, s)
                                })
                            } else c.setMarkers(r, n, s)
                        })
                    })
                },
                setMarkers: function(l, r, c) {
                    var d = [];

                    function e(e) {
                        var t, a = r[e].lat_long.split(","),
                            i = new google.maps.MarkerImage(c, null, null, null, new google.maps.Size(42, 61)),
                            o = new google.maps.Marker({
                                position: new google.maps.LatLng(a[0], a[1]),
                                map: l,
                                animation: google.maps.Animation.DROP,
                                icon: i,
                                optimized: !1
                            }),
                            n = '<div class="marker-info-win"><h4 class="marker-heading">' + r[e].title + "</h4><p>" + r[e].information + "</p></div>",
                            s = new InfoBox({
                                alignBottom: !0,
                                content: n,
                                disableAutoPan: !1,
                                maxWidth: 360,
                                closeBoxMargin: "10px 10px 10px 10px",
                                closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                                pixelOffset: new google.maps.Size(-180, -80),
                                zIndex: null,
                                infoBoxClearance: new google.maps.Size(1, 1)
                            });
                        d.push(s), google.maps.event.addListener(o, "click", (t = e, function() {
                            d[t].open(l, this)
                        }))
                    }
                    for (var t = 0; t + 1 <= r.length; t++) setTimeout(e, 250 * t, t)
                }
            }
        };
    s.ready(function() {
        c.init()
    })
}(jQuery, this, _);