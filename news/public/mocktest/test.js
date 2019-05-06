/**
 * @desc mock模拟数据
 */
var mockDetail = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|1-3': [{
        "pic_main": "https://test.yunping.com/mobile/mini/esf/mini.png",   //评估单价
        "shop_name": "漫步咖啡", //委托人
        "shop_addr": "软件园B区04栋",        //实际收费
        "shop_tel": "13563636363",  //联系方式
        "shop_head": "https://test.yunping.com/mobile/mini/esf/me/avatar.png"  //单据日期
    }]
})
var defaultDetail = Mock.mock({// 模拟红包获奖人数
    'data|1-10': [{
        // "default_avatar":'imgs/icon-head.png',
        "default_avatar": "https://test.yunping.com/mobile/mini/esf/me/avatar.png",   //评估单价
        "default_name": "漫步咖啡", //委托人
        "default_num": "1000元"
    }]
})
var shopDetail = Mock.mock({// 模拟红包获奖人数
    'data|1-20': [{
        "default_avatar": "https://test.yunping.com/mobile/mini/esf/me/avatar.png",   //评估单价
        "default_name": "漫步咖啡", //委托人
    }]
})
