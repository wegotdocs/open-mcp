import { z } from "zod"

export const inputParams = {
  "actual_amount": z.string().describe("实际金额（总支付金额），单位为【元】").optional(),
  "applet_app_id": z.string().describe("小程序appid").optional(),
  "card_balance": z.string().describe("校园卡余额").optional(),
  "card_no": z.string().describe("128").optional(),
  "card_type": z.string().describe("校园卡类型").optional(),
  "create_time": z.string().describe("该笔订单真实的创建时间，需精确到毫秒。").optional(),
  "discount_amount": z.string().describe("优惠金额").optional(),
  "goods_orders": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `goods_orders` to the tool, first call the tool `expandSchema` with \"/properties/goods_orders\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "merchant_name": z.string().describe("商家名称，不传默认展示学校名称").optional(),
  "modified_time": z.string().describe("订单修改时间").optional(),
  "open_id": z.string().describe("用户open_id").optional(),
  "order_amount": z.string().describe("订单金额").optional(),
  "order_detail_url": z.string().describe("订单详情链接").optional(),
  "order_status": z.string().describe("订单状态").optional(),
  "out_biz_no": z.string().describe("外部业务号，由商家自定义，128个字符以内，仅支持字母、数字、下划线且需保证在商户端不重复。").optional(),
  "pay_address": z.string().describe("支付地点").optional(),
  "pay_mode": z.string().describe("付款方式，不传默认展示学校名称+校园卡+（卡号后四位）").optional(),
  "rake_back_pid": z.string().describe("系统商编号。该参数作为系统商返佣数据提取的依据，请填写系统商签约协议的PID").optional(),
  "school_id": z.string().describe("学校内标，录入学校接口返回的参数").optional(),
  "school_pid": z.string().describe("学校收款账号").optional(),
  "service_provider_name": z.string().describe("服务提供者名称").optional(),
  "type": z.string().describe("业务类型").optional(),
  "user_id": z.string().describe("买家支付宝用户ID。\t2088开头的16位纯数字，小程序场景下获取用户ID请参考：用户授权;\t其它场景下获取用户ID请参考：网页授权获取用户信息;").optional()
}