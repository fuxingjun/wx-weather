//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        weatherInfo: null,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        test: [1, 2, 3, 4]
    },
    //事件处理函数
    bindViewTap: function() {
        // wx.navigateTo({
        //   url: '../logs/logs'
        // })
        console.log("点击了");
    },
    onLoad: function() {
        if (app.globalData.HeWeather6) {
            this.setData({
                weatherInfo: app.globalData.HeWeather6[0]
            });
        } else {
            app.weatherInfoReadyCallback = res => {
                app.globalData.HeWeather6 = res.data.HeWeather6;
                this.setData({
                    weatherInfo: res.data.HeWeather6[0]
                });
            }
        }
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})