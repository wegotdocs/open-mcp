import { z } from "zod"

export const inputParams = {
  "card_type": z.string().describe("卡类型").optional(),
  "credit_ext_info": z.string().describe("信用参数，可选，如有需要请与芝麻约定后传入，信用服务说明见").optional(),
  "hb_fq_num": z.string().describe("使用花呗分期要进行的分期数").optional(),
  "hb_fq_seller_percent": z.string().describe("使用花呗分期需要卖家承担的手续费比例的百分值，传入100代表100%").optional(),
  "industry_reflux_info": z.string().describe("行业数据回流信息, 详见：地铁支付接口参数补充说明").optional(),
  "royalty_freeze": z.string().describe("是否进行资金冻结，用于后续分账，true表示资金冻结，false或不传表示资金不冻结").optional(),
  "specified_seller_name": z.string().describe("特殊场景下，允许商户指定交易展示的卖家名称").optional(),
  "sys_service_provider_id": z.string().describe("系统商编号\r\t该参数作为系统商返佣数据提取的依据，请填写系统商签约协议的PID").optional(),
  "tc_installment_order_id": z.string().describe("公域商品交易分期单ID，小程序交易组件订单特殊场景使用，请传入 订单分期接口(alipay.open.mini.order.installment.create)中返回的installment_order_id").optional(),
  "trade_component_order_id": z.string().describe("公域商品交易业务订单ID").optional()
}