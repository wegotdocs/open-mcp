import { z } from "zod"

export const inputParams = {
  "biz_type": z.string().describe("交易信息同步对应的业务类型，具体值与支付宝约定；\r\t信用授权场景下传CREDIT_AUTH\r\t信用代扣场景下传CREDIT_DEDUCT").optional(),
  "order_biz_info": z.string().describe("商户传入同步信息，具体值要和支付宝约定；用于芝麻信用租车、单次授权等信息同步场景，格式为json格式。\t状态枚举如下：\t\tCOMPLETE：同步用户已履约\t适用场景：发起扣款后，芝麻生成待履约记录，如果用户通过其他方式完成订单支付，请反馈该状态，芝麻将完结待履约记录对用户形成一条良好履约记录；同步该状态时需要同步调用 取消扣款 接口关闭交易订单。\t\tCLOSED： 同步履约已取消\t适用场景：发起扣款后，芝麻生成待履约记录，如果发现该笔扣款无效需要取消，请反馈该状态，芝麻将取消用户待履约记录；同步该状态时需要同步调用 取消扣款 接口关闭交易订单。").optional(),
  "orig_request_no": z.string().describe("原始业务请求单号。如对某一次退款进行履约时，该字段传退款时的退款请求号").optional(),
  "out_request_no": z.string().describe("外部请求号，商家自定义且保证商家系统中唯一。需要注意的是，支付宝会对外部请求号做幂等控制，如果一笔交易再次使用相同的外部请求号发起请求，订单信息不会更新。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}