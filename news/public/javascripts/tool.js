/**
 * @desc 工具类
 */
var tool = {
    /**
     * @desc 倒计时
     * @param {*} day 天
     * @param {*} hour 时
     * @param {*} minute 分
     * @param {*} second 秒
     */
    countTime(day, hour, minute, second) {
        // 日 时 分 秒
        var d = day ? day : 1,
            h = hour ? hour : 23,
            m = minute ? minute : 59,
            s = second ? second : 59,
            _t;
        if (Number(h + m + s) == 0) {
            d = d - 1
        }
        var newTime = {
            d: d,
            h: h,
            m: m,
            s: s,
            _time: _t
        };
        var timeCount = setInterval(() => {
            s--;
            if (s < 0) {
                s = 59
                m = m - 1
            }
            if (m < 0) {
                m = 59
                h = h - 1
            }
            if (h < 0) {
                d = d - 1
            }
            if (d < 0) {
                d = 0
            }
            if (Number(d + h + m + s) == 0) {
                console.log('xx')
                clearInterval(timeCount)
            }
            _t = d + '天' + h + '时' + (m > 9 ? m + '分' : '0' + m + '分') + (s > 9 ? s + '秒' : '0' + s + '秒');
            newTime.d = d;
            newTime.h = h;
            newTime.m = m;
            newTime.s = s;
            newTime._time = _t
        }, 1000);
        return newTime
    },
    /**
     * @desc 获取url参数
     * @param {string} name 参数名 
     */
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,      // 月份
        "d+": this.getDate(),           // 日
        "h+": this.getHours(),          // 小时
        "m+": this.getMinutes(),        // 分
        "s+": this.getSeconds(),        // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds()     // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 格式化时间戳
function timestampToTime(timestamp, type) {
    // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var date = new Date(timestamp); 
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return type == 'time' ? (Y + M + D).trim() : Y + M + D + h + m + s;
}

/** 数组转json eg:form.serializeArray 转 json
 * @param array 数组
 * @param type 类型 json array
 */
function formatArray(array, type) {
    var dataArray = {};
    $.each(array, function () {
        if (dataArray[this.name]) {
            if (!dataArray[this.name].push) {
                dataArray[this.name] = [dataArray[this.name]];
            }
            dataArray[this.name].push(this.value || '');
        } else {
            dataArray[this.name] = this.value || '';
        }
    });
    return ((type == "json") ? JSON.stringify(dataArray) : dataArray);
}

/**
 * @desc 设置cookie及时间
 * @param {*} name 
 * @param {*} value 
 */
function setCookie(name, value) {
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 24 * 60 * 60 * 1000);   //cookie时间暂定30天
    document.cookie = name + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function loadingshow() {
    return layer.load(3, {
        shade: [0.1, '#fff']    // 0.1透明度的白色背景
    });
}

function loadinghide(index) {
    layer.close(index);
}

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} type 
 * @param {*} next 
 */
function toApi(url, data, type, next) {
    $.ajax({
        url: url,
        data: data,
        type: type ? type : 'POST',
        success: function (res) {
            console.log(res)
            next(res)
        }
    })
}

var commonImgLink = 'http://giftadmin.chengzi52.cn'

// 自定义上传
function selfUpload() {
    console.log($(this))
    var files = $(this).prop('files')
    console.log(files)
    for (let file of files) {
        var reader = new FileReader()
        reader.onloadstart = function (e) {
            // console.log('开始读取....')
        }
        reader.onprogress = function (e) {
            // console.log('正在读取中....')
        }
        reader.onabort = function (e) {
            // console.log('中断读取....')
        }
        reader.onerror = function (e) {
            // console.log('读取异常....')
        }
        reader.onload = function (e) {
            // console.log(files)
            // console.log(file)
            console.log(e)
            // console.log('成功读取....')
            var arr = []
            arr.push(e.target.result)
            var reqData = {
                token: getCookie('token'),
                base64DataArr: JSON.stringify(arr)
            }
            console.log(reqData)
            $.ajax({
                // url: '/auctionapi/image/uploadBase64',
                url: filePath,
                type: 'POST',
                // dataType: "application/json",
                // contentType: "application/json; charset=utf-8",
                data: reqData,
                success: function (res) {
                    console.log(reqData)
                    console.log(res)
                    $.each(res.data, function (serial, data) {
                        console.log(data)
                        $('#pinArr').append('<div id="' + data.url + '" link="' + data.url + '">' + data.url + '</div>')
                        $('.img-rows .upload-row').before('<div class="img-row">' +
                            '<span class="del-con" link="' + data.url + '" onclick="delPin(this, 0)"><img src="../img/del.png" alt=""></span>' +
                            '   <img title="图片" onclick="preview(this)" class="upload-cover pin-preview" link="' + data.url + '" src="' + data.url + '" alt="">' +
                            '</div>');
                    })
                }
            })
        }
        reader.readAsDataURL(file)
    }
}

var apiPort = /giftadminapi/.test(location.href) ? '' : '/apis'
