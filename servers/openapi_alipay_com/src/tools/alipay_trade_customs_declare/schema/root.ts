import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("报关金额，单位为人民币“元”，精确到小数点后2位。").optional(),
  "buyer_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `buyer_info` to the tool, first call the tool `expandSchema` with \"/properties/buyer_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "customs_place": z.string().describe("海关编号（大小写皆可）。参见“ <a href=\"https://opendocs.alipay.com/pre-open/01x3kh#%E6%B5%B7%E5%85%B3%E7%BC%96%E5%8F%B7\">海关编号</a>”。").optional(),
  "declare_mode": z.number().int().describe("报关模式，默认可空，1表示需要强校验买家和支付人的身份信息。").optional(),
  "deposit_trade_no": z.string().describe("定金在支付宝系统中的交易流水号，最长64位。当该参数不为空时，代表为”定金+尾款“报关场景。").optional(),
  "is_split": z.string().describe("商户控制本单是否拆单的报关参数。\r\t仅当该参数传值为T或者t时，才会触发拆单。").optional(),
  "merchant_customs_code": z.string().describe("商户在海关备案的编号。").optional(),
  "merchant_customs_name": z.string().describe("商户海关备案名称。").optional(),
  "merchant_id": z.string().describe("国际站商户标识").optional(),
  "out_request_no": z.string().describe("报关流水号。商户生成的用于唯一标识一次报关操作的业务编号。\t建议生成规则：yyyymmdd型8位日期拼接4位序列号。每个报关请求号仅允许传入：数字、英文字母、下划线”_”、短横线”－” 。长度6-64位前后不能有空格").optional(),
  "out_trade_no": z.string().describe("国际站外部订单号").optional(),
  "sub_out_biz_no": z.string().describe("拆单报关的商户子订单号。 用于区别拆单时不同子单。拆单时必须传入，否则会报INVALID_PARAMETER错误码。").optional(),
  "trade_no": z.string().describe("支付宝交易号。该交易在支付宝系统中的交易流水号，最长64位。").optional()
}