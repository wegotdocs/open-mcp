import { z } from "zod"

export const inputParams = {
  "auth_no": z.string().describe("支付宝授权资金订单号。\t与商户的授权资金订单号不能同时为空，二者都传入时，以支付宝资金授权订单号为准，该参数与支付宝授权资金操作流水号配对使用。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operation_id": z.string().describe("支付宝的授权资金操作流水号。\t与商户的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与支付宝授权资金订单号配对使用。").optional(),
  "out_order_no": z.string().describe("商户的授权资金订单号。\t与支付宝的授权资金订单号不能同时为空，二者都传入时，以支付宝的授权资金订单号为准，该参数与商户的授权资金操作流水号配对使用。\t该值与资金冻结时 out_order_no一致。").optional(),
  "out_request_no": z.string().describe("商户的授权资金操作流水号。\t与支付宝的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与商户的授权资金订单号配对使用。\t该值与资金冻结时out_request_no一致").optional(),
  "remark": z.string().describe("商户对本次撤销操作的附言描述。\t长度不超过100个字母或50个汉字。").optional()
}