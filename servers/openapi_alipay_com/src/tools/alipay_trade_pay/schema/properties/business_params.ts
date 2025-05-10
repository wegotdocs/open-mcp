import { z } from "zod"

export const inputParams = {
  "actual_order_time": z.string().describe("实际订单时间，在乘车码场景，传入的是用户刷码乘车时间").optional(),
  "campus_card": z.string().describe("校园卡编号").optional(),
  "card_type": z.string().describe("虚拟卡卡类型").optional(),
  "enterprise_pay_amount": z.string().describe("因公付金额，单位：元。").optional(),
  "enterprise_pay_info": z.string().describe("因公付业务信息").optional(),
  "good_taxes": z.string().describe("商户传入的交易税费。需要落地风控使用").optional(),
  "mc_create_trade_ip": z.string().describe("商户端创建订单的 IP，须上传正确的用户端外网 IP，支持 ipv4/ipv6 格式；\tmc_create_trade_ip和mcCreateTradeIp（旧）参数描述相同，首选mc_create_trade_ip入参，请勿重复入参；\t如已入参mcCreateTradeIp（旧），无需新增入参mc_create_trade_ip。").optional(),
  "priority_unfreeze_asset": z.string().describe("信用预授权转交易阶段，优先解冻的用户资产\tCREDIT_ASSET：信用资产\tCOMMON_ASSET：自有资金资产\t默认优先解冻资金资产").optional(),
  "tiny_app_merchant_biz_type": z.string().describe("当需要在 商家平台（b.alipay.com）—数据中心 中查看对应业务场景下的数据明细可以通过该参数传入\t支持传入的值：<a target=\"_blank\" href=\"https://opendocs.alipay.com/mini/08by8k?pathHash=96e03412\">小程序细分业务场景</a>").optional()
}