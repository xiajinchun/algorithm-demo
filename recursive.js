const rows = [
    {
        id: 10010000,
        name: "人口属性",
        parent: 0,
    },
    {
        id: 10010100,
        name: "客户名称",
        parent: 10010000,
    },
    {
        id: 10010101,
        name: "客户名称占位",
        parent: 10010101,
    },
    {
        id: 10010200,
        name: "客户电话",
        parent: 10010000,
    },
    {
        id: 10010201,
        name: "客户电话占位",
        parent: 10010200,
    },
    {
        id: 10010300,
        name: "微信号",
        parent: 10010000,
    },
    {
        id: 10010301,
        name: "微信号占位",
        parent: 10010300,
    },
    {
        id: 10010400,
        name: "身份",
        parent: 10010000,
    },
    {
        id: 10010401,
        name: "身份占位",
        parent: 10010400,
    },
    {
        id: 10010500,
        name: "出生日期",
        parent: 10010000,
    },
    {
        id: 10010501,
        name: "出生日期占位",
        parent: 10010500,
    },
    {
        id: 10010600,
        name: "年龄",
        parent: 10010000,
    },
    {
        id: 10010601,
        name: "年龄占位",
        parent: 10010600,
    },
    {
        id: 10010700,
        name: "性别",
        parent: 10010000,
    },
    {
        id: 10010701,
        name: "男",
        parent: 10010700,
    },
    {
        id: 10010702,
        name: "女",
        parent: 10010700,
    },
    {
        id: 10010800,
        name: "学历",
        parent: 10010000,
    },
    {
        id: 10010801,
        name: "博士及以上",
        parent: 10010800,
    },
    {
        id: 10010802,
        name: "硕士",
        parent: 10010800,
    },
    {
        id: 10010803,
        name: "本科",
        parent: 10010800,
    },
    {
        id: 10010804,
        name: "大专",
        parent: 10010800,
    },
    {
        id: 10010805,
        name: "高中及以下",
        parent: 10010800,
    },
    {
        id: 10010900,
        name: "籍贯",
        parent: 10010000,
    },
    {
        id: 10010901,
        name: "籍贯占位",
        parent: 10010900,
    },
    {
        id: 10011000,
        name: "手机品牌",
        parent: 10010000,
    },
    {
        id: 10011001,
        name: "手机品牌占位",
        parent: 10011000,
    },
    {
        id: 10011100,
        name: "证件类型",
        parent: 10010000,
    },
    {
        id: 10011101,
        name: "证件类型占位",
        parent: 10011100,
    },
    {
        id: 10011200,
        name: "证件号码",
        parent: 10010000,
    },
    {
        id: 10011201,
        name: "证件号码占位",
        parent: 10011200,
    },
    {
        id: 10011300,
        name: "婚姻状况",
        parent: 10010000,
    },
    {
        id: 10011301,
        name: "已婚",
        parent: 10011300,
    },
    {
        id: 10011302,
        name: "未婚",
        parent: 10011300,
    },
    {
        id: 10020000,
        name: "社会属性",
        parent: 0,
    },
    {
        id: 10020100,
        name: "行业",
        parent: 10020000,
    },
    {
        id: 10020101,
        name: "行业占位",
        parent: 10020100,
    },
    {
        id: 10020200,
        name: "职业",
        parent: 10020000,
    },
    {
        id: 10020201,
        name: "职业占位",
        parent: 10020200,
    },
    {
        id: 10020300,
        name: "宗教信仰",
        parent: 10020000,
    },
    {
        id: 10020301,
        name: "宗教信仰占位",
        parent: 10020300,
    },
    {
        id: 10020400,
        name: "兴趣爱好",
        parent: 10020000,
    },
    {
        id: 10020401,
        name: "兴趣爱好占位",
        parent: 10020400,
    },
    {
        id: 10020500,
        name: "是否参与社团",
        parent: 10020000,
    },
    {
        id: 10020501,
        name: "是",
        parent: 10020500,
    },
    {
        id: 10020502,
        name: "否",
        parent: 10020500,
    },
    {
        id: 10020600,
        name: "社团名称",
        parent: 10020000,
    },
    {
        id: 10020601,
        name: "社团名称占位",
        parent: 10020600,
    },
    {
        id: 10020700,
        name: "参加过哪类活动",
        parent: 10020000,
    },
    {
        id: 10020701,
        name: "参加过哪类活动占位",
        parent: 10020700,
    },
    {
        id: 10030000,
        name: "物业属性",
        parent: 0,
    },
    {
        id: 10030100,
        name: "入住状态",
        parent: 10030000,
    },
    {
        id: 10030101,
        name: "常住",
        parent: 10030100,
    },
    {
        id: 10030102,
        name: "非常住",
        parent: 10030100,
    },
    {
        id: 10030103,
        name: "未入住",
        parent: 10030100,
    },
    {
        id: 10030200,
        name: "常驻苑区时间",
        parent: 10030000,
    },
    {
        id: 10030201,
        name: "常驻苑区时间占位",
        parent: 10030200,
    },
    {
        id: 10030300,
        name: "常驻苑区季度",
        parent: 10030000,
    },
    {
        id: 10030301,
        name: "春",
        parent: 10030300,
    },
    {
        id: 10030302,
        name: "夏",
        parent: 10030300,
    },
    {
        id: 10030303,
        name: "秋",
        parent: 10030300,
    },
    {
        id: 10030304,
        name: "冬",
        parent: 10030300,
    },
    {
        id: 10030400,
        name: "客户分类",
        parent: 10030000,
    },
    {
        id: 10030401,
        name: "良好关系户",
        parent: 10030400,
    },
    {
        id: 10030402,
        name: "普通住户",
        parent: 10030400,
    },
    {
        id: 10030403,
        name: "意见客户",
        parent: 10030400,
    },
    {
        id: 10030500,
        name: "重点客户",
        parent: 10030000,
    },
    {
        id: 10030501,
        name: "重点客户占位",
        parent: 10030500,
    },
    {
        id: 10030600,
        name: "意见客户原因分类",
        parent: 10030000,
    },
    {
        id: 10030601,
        name: "意见客户原因分类占位",
        parent: 10030600,
    },
    {
        id: 10030700,
        name: "意见客户原因描述",
        parent: 10030000,
    },
    {
        id: 10030701,
        name: "意见客户原因描述占位",
        parent: 10030700,
    },
    {
        id: 10040000,
        name: "社会属性",
        parent: 0,
    },
    {
        id: 10040100,
        name: "常驻人员组成",
        parent: 10040000,
    },
    {
        id: 10040101,
        name: "常驻人员组成占位",
        parent: 10040100,
    },
    {
        id: 10040200,
        name: "老人数量",
        parent: 10040000,
    },
    {
        id: 10040201,
        name: "老人数量占位",
        parent: 10040200,
    },
    {
        id: 10040300,
        name: "性别",
        parent: 10040000,
    },
    {
        id: 10040301,
        name: "男",
        parent: 10040300,
    },
    {
        id: 10040302,
        name: "女",
        parent: 10040300,
    },
    {
        id: 10040400,
        name: "年龄",
        parent: 10040000,
    },
    {
        id: 10040401,
        name: "60～65岁",
        parent: 10040400,
    },
    {
        id: 10040402,
        name: "70～75岁",
        parent: 10040400,
    },
    {
        id: 10040403,
        name: "90岁以上",
        parent: 10040400,
    },
    {
        id: 10040500,
        name: "子女数量",
        parent: 10040000,
    },
    {
        id: 10040501,
        name: "子女数量占位",
        parent: 10040500,
    },
    {
        id: 10040600,
        name: "性别",
        parent: 10040000,
    },
    {
        id: 10040601,
        name: "男",
        parent: 10040600,
    },
    {
        id: 10040602,
        name: "女",
        parent: 10040600,
    },
    {
        id: 10040700,
        name: "年龄",
        parent: 10040000,
    },
    {
        id: 10040701,
        name: "4～6岁",
        parent: 10040700,
    },
    {
        id: 10040702,
        name: "10～12岁",
        parent: 10040700,
    },
    {
        id: 10040703,
        name: "18岁以上",
        parent: 10040700,
    },
    {
        id: 10040800,
        name: "业主持有房产数量",
        parent: 10040000,
    },
    {
        id: 10040801,
        name: "业主持有房产数量占位",
        parent: 10040800,
    },
    {
        id: 10040900,
        name: "业主持有其他房产品牌",
        parent: 10040000,
    },
    {
        id: 10040901,
        name: "业主持有其他房产品牌占位",
        parent: 10040900,
    },
    {
        id: 10041000,
        name: "宠物种类",
        parent: 10040000,
    },
    {
        id: 10041001,
        name: "狗",
        parent: 10041000,
    },
    {
        id: 10041002,
        name: "猫",
        parent: 10041000,
    },
    {
        id: 10041003,
        name: "鱼/虾/龟",
        parent: 10041000,
    },
    {
        id: 10041004,
        name: "鸟",
        parent: 10041000,
    },
    {
        id: 10041005,
        name: "仓鼠/龙猫",
        parent: 10041000,
    },
    {
        id: 10041006,
        name: "兔",
        parent: 10041000,
    },
    {
        id: 10041007,
        name: "马",
        parent: 10041000,
    },
    {
        id: 10041008,
        name: "蜥蜴/蛇",
        parent: 10041000,
    },
    {
        id: 10050000,
        name: "物业属性",
        parent: 0,
    },
    {
        id: 10050100,
        name: "房屋用途",
        parent: 10050000,
    },
    {
        id: 10050101,
        name: "自主-普通",
        parent: 10050100,
    },
    {
        id: 10050102,
        name: "自主-学区",
        parent: 10050100,
    },
    {
        id: 10050103,
        name: "自主-养老",
        parent: 10050100,
    },
    {
        id: 10050104,
        name: "投资",
        parent: 10050100,
    },
    {
        id: 10050105,
        name: "度假",
        parent: 10050100,
    },
    {
        id: 10050106,
        name: "出租",
        parent: 10050100,
    },
    {
        id: 10050107,
        name: "办公室",
        parent: 10050100,
    },
    {
        id: 10050108,
        name: "其他商用",
        parent: 10050100,
    },
    {
        id: 10050200,
        name: "是否居委会成员",
        parent: 10050000,
    },
    {
        id: 10050201,
        name: "是",
        parent: 10050200,
    },
    {
        id: 10050202,
        name: "否",
        parent: 10050200,
    },
    {
        id: 10050300,
        name: "常用缴费方式",
        parent: 10050000,
    },
    {
        id: 10050301,
        name: "银行划扣",
        parent: 10050300,
    },
    {
        id: 10050302,
        name: "前台缴费",
        parent: 10050300,
    },
    {
        id: 10050303,
        name: "汇款代收",
        parent: 10050300,
    },
    {
        id: 10050304,
        name: "线上缴费",
        parent: 10050300,
    },
    {
        id: 10050400,
        name: "房屋装修状态",
        parent: 10050000,
    },
    {
        id: 10050401,
        name: "房屋装修状态占位",
        parent: 10050400,
    },
    {
        id: 10060000,
        name: "增值属性",
        parent: 0,
    },
    {
        id: 10060100,
        name: "其他增值需求",
        parent: 10060000,
    },
    {
        id: 10060101,
        name: "其他增值需求占位",
        parent: 10060100,
    },
    {
        id: 10060200,
        name: "社区团购需求",
        parent: 10060000,
    },
    {
        id: 10060201,
        name: "社区团购需求占位",
        parent: 10060200,
    },
    {
        id: 10060300,
        name: "房屋租售需求",
        parent: 10060000,
    },
    {
        id: 10060301,
        name: "房屋租售需求占位",
        parent: 10060300,
    },
    {
        id: 10060400,
        name: "车位买卖需求",
        parent: 10060000,
    },
    {
        id: 10060401,
        name: "车位买卖需求占位",
        parent: 10060400,
    },
    {
        id: 10060500,
        name: "保险业务需求",
        parent: 10060000,
    },
    {
        id: 10060501,
        name: "保险业务需求占位",
        parent: 10060500,
    },
    {
        id: 10060600,
        name: "社区教育需求",
        parent: 10060000,
    },
    {
        id: 10060601,
        name: "社区教育需求占位",
        parent: 10060600,
    },
    {
        id: 10060700,
        name: "金融理财需求",
        parent: 10060000,
    },
    {
        id: 10060701,
        name: "金融理财需求占位",
        parent: 10060700,
    },
];

function getTrees(list, parent = 0) {
    let parentObj = {};
    list.forEach((o) => {
        parentObj[o.id] = o;
    });
    if (!parent) {
        return list.filter((o) => !parentObj[o.parent]).map((o) => ((o.children = getTrees(list, o.id)), o));
    } else {
        return list.filter((o) => o.parent == parent).map((o) => ((o.children = getTrees(list, o.id)), o));
    }
}

console.log(JSON.stringify(getTrees(rows, 0)));
