// pakA/pages/note/note.js
const app = getApp();
const DB = wx.cloud.database();
Page({
    data: {
        articeList: [],
        isLoading: false,
        pageNum: 1,
        pages: 0,
        total: 0,
        flog: false,
        isToast: false
    },
    goPost(e) {
        wx.navigateTo({
            url: '../../../pakB/pages/post/post?id=' + e.currentTarget.dataset.id,
        })
    },
    getlist() {
        DB.collection("posts").where({
            _openid: app.globalData.openid,
        }).get({
            success: (res) => {
                this.setData({
                    articeList: res.data
                })
            },
            fail: (err) => {
                console.log(err);
            }
        })
    },
    async obtainPostsPage(pageNum = 1, num = 8) {
        if (!this.data.isLoading) {
            this.setData({
                'isLoading': true
            });
            var total = 0;
            let res = await DB.collection('posts').where({
                flog: true,
                _openid: app.globalData.openid
            }).count();
            total = res.total;
            let add = total % num > 0 ? 1 : 0;
            let pages = parseInt(total / num) + add;
            this.setData({
                'total': total,
                'pages': pages
            })
            let begin = (pageNum - 1) * num;
            let {
                data: ares
            } = await DB.collection("posts").where({
                flog: true,
                _openid: app.globalData.openid
            }).orderBy('time', 'desc').limit(num).skip(begin).get();
            this.setData({
                'articeList': [
                    ...this.data.articeList,
                    ...ares
                ]
            })
            this.setData({
                'isLoading': false
            });
        }
        wx.stopPullDownRefresh();
    },
    deletePost(e) {
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;
        let that = this;
        wx.showModal({
            title: '????????????',
            content: '????????????????????????',
            confirmColor: '#497749',
            duration: 1000,
            success: (res) => {
                if (res.confirm) {
                    that.data.articeList.splice(index, 1);
                    console.log(that.data.articeList);
                    that.setData({
                        articeList: that.data.articeList
                    })
                    DB.collection("posts").where({
                        _id: id
                    }).remove({
                        success: (res) => {
                            wx.showToast({
                                title: '????????????',
                                duration: 500
                            })
                        },
                        fail: (err) => {
                            console.log(err);
                        }
                    })
                } else if (res.cancel) {
                    console.log('??????????????????')
                }
            }
        })
    },
    onLoad(options) {
        this.obtainPostsPage();
    },
    /**
     * ??????????????????--??????????????????????????????
     */
    onReady() {

    },

    /**
     * ??????????????????--??????????????????
     */
    onShow() {

    },

    /**
     * ??????????????????--??????????????????
     */
    onHide() {

    },

    /**
     * ??????????????????--??????????????????
     */
    onUnload() {

    },

    /**
     * ??????????????????????????????--????????????????????????
     */
    onPullDownRefresh() {
        this.setData({
            articeList: [],
            isLoading: false,
            pageNum: 1,
            pages: 0,
            total: 0,
            flog: false,
            isToast: false
        });
        this.obtainPostsPage();
    },

    /**
     * ???????????????????????????????????????
     */
    onReachBottom() {
        if (this.data.pageNum < this.data.pages) {
            this.setData({
                'isToast': false,
                'pageNum': this.data.pageNum + 1
            })
            this.obtainPostsPage(this.data.pageNum);
        } else {
            this.setData({
                'isToast': true
            })
        }
    },
    /**
     * ???????????????????????????
     */
    onShareAppMessage() {

    }
})