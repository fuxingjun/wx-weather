//app.js
App({
    onLaunch: function() {
        wx.request({
            url: "https://free-api.heweather.com/s6/weather",
            method: "POST",
            data: {
                key: "e097cc0ef98f4536886ea65640d6c47d",
                location: "auto_ip"
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: res => {
                this.globalData.HeWeather6 = res.data.HeWeather6;
                if (this.weatherInfoReadyCallback){
                    this.weatherInfoReadyCallback(res);
                }
            },
            fail: res => {

            }
        });
        // 展示本地存储能力
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)

        // // 登录
        // wx.login({
        //     success: res => {
        //         // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //     }
        // })
        // // 获取用户信息
        // wx.getSetting({
        //     success: res => {
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //             wx.getUserInfo({
        //                 success: res => {
        //                     // 可以将 res 发送给后台解码出 unionId
        //                     this.globalData.userInfo = res.userInfo

        //                     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //                     // 所以此处加入 callback 以防止这种情况
        //                     if (this.userInfoReadyCallback) {
        //                         this.userInfoReadyCallback(res)
        //                     }
        //                 }
        //             })
        //         }
        //     }
        // })
    },
    globalData: {
        userInfo: null,
        HeWeather6: null
    }
})