var dsq, app = getApp();

Page({
    data: {
        tabbar: {},
        jtsy: 0,
        ztsy: 0,
        zgsy: 0
    },
    onLoad: function(t) {
        app.editTabBar();
        var a = wx.getStorageSync("sjdsjid");
        console.log(a);
        var e = wx.getStorageSync("imglink");
        console.log(e);
        var o = this;
        app.util.request({
            url: "entry/wxapp/StoreOrder",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t);
                for (var a = [], e = [], n = [], d = 0; d < t.data.length; d++) "2" == t.data[d].order.state && a.push(t.data[d]), 
                "3" == t.data[d].order.state && e.push(t.data[d]), "7" != t.data[d].order.state && "8" != t.data[d].order.state && "9" != t.data[d].order.state || n.push(t.data[d]);
                console.log(a, e, n), o.setData({
                    djd: a,
                    dps: e,
                    tkdd: n
                });
            }
        }), app.util.request({
            url: "entry/wxapp/AppDnOrder",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t);
                for (var a = [], e = [], n = [], d = 0; d < t.data.length; d++) "1" == t.data[d].dn_state && a.push(t.data[d]), 
                "2" == t.data[d].dn_state && e.push(t.data[d]), "3" == t.data[d].dn_state && n.push(t.data[d]);
                console.log(a, e, n), o.setData({
                    dzf: a,
                    ywc: e,
                    ygb: n
                });
            }
        }), app.util.request({
            url: "entry/wxapp/store",
            cachetime: "0",
            data: {
                id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    url: e,
                    sjinfo: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/WmSale",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    jtsy: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/WmSale2",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    ztsy: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/WmSale3",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    zgsy: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/WmOrder",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    jrdd: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/WmOrder2",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    jrcj: t.data
                });
            }
        }), app.util.request({
            url: "entry/wxapp/Traffic",
            cachetime: "0",
            data: {
                store_id: a
            },
            success: function(t) {
                console.log(t), o.setData({
                    fwl: t.data
                });
            }
        }), wx.getStorageSync("yybb") && (dsq = setInterval(function() {
            app.util.request({
                url: "entry/wxapp/NewOrder",
                cachetime: "0",
                data: {
                    store_id: a
                },
                success: function(t) {
                    console.log(t), 1 == t.data && wx.playBackgroundAudio({
                        dataUrl: wx.getStorageSync("url2") + "addons/zh_dianc/template/images/wm.wav",
                        title: "语音播报"
                    }), 2 == t.data && wx.playBackgroundAudio({
                        dataUrl: wx.getStorageSync("url2") + "addons/zh_dianc/template/images/dn.wav",
                        title: "语音播报"
                    }), 3 == t.data && wx.playBackgroundAudio({
                        dataUrl: wx.getStorageSync("url2") + "addons/zh_dianc/template/images/yy.wav",
                        title: "语音播报"
                    });
                }
            });
        }, 1e4));
    },
    djd: function() {
        wx.navigateTo({
            url: "dd/wmdd?activeIndex=0"
        });
    },
    dps: function() {
        wx.navigateTo({
            url: "dd/wmdd?activeIndex=1"
        });
    },
    tkdd: function() {
        wx.navigateTo({
            url: "dd/wmdd?activeIndex=2"
        });
    },
    dzf: function() {
        wx.navigateTo({
            url: "dd/tndd?activeIndex=0"
        });
    },
    ywc: function() {
        wx.navigateTo({
            url: "dd/tndd?activeIndex=1"
        });
    },
    ygb: function() {
        wx.navigateTo({
            url: "dd/tndd?activeIndex=2"
        });
    },
    tzsz: function() {
        wx.redirectTo({
            url: "shezhi"
        });
    },
    wytx: function() {
        wx.navigateTo({
            url: "wytx"
        });
    },
    smhx: function() {
        wx.scanCode({
            success: function(t) {
                console.log(t);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        clearInterval(dsq);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});