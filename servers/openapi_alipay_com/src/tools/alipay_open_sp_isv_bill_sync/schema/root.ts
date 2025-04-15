import { z } from "zod"

export const inputParams = {
  "end_time": z.string().describe("账单结束时间").optional(),
  "generate_time": z.string().describe("出账时间，回传出账信息时，必须传递").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(),
  "pay_time": z.string().describe("账单支付时间，回传支付数时，必须传递").optional(),
  "price": z.string().describe("账单金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(),
  "start_time": z.string().describe("账单开始时间").optional(),
  "status": z.string().describe("GENERATE_BILL代表”已出账“，PAID_BILL代表”已支付“，选择这两者之一").optional(),
  "sub_promotor_pid": z.string().describe("S1回传的S2的操作员工子账号，如果是子账号操作，请回传").optional()
}