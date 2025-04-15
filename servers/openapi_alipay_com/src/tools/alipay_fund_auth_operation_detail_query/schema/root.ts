import { z } from "zod"

export const inputParams = {
  "auth_no": z.string().describe("支付宝授权资金订单号。\t与商户的授权资金订单号不能同时为空，二者都传入时，以支付宝资金授权订单号为准，该参数与支付宝授权资金操作流水号配对使用。").optional(),
  "operation_id": z.string().describe("支付宝的授权资金操作流水号。\t与商户的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与支付宝授权资金订单号配对使用。").optional(),
  "operation_type": z.string().describe("需要查询的授权资金操作类型。\t未传入本参数时，如果仅查询出单笔明细则直接返回，如果查询出多笔则优先返回冻结明细、无冻结明细时返回解冻明细；\t当传入本参数时，则严格按照该操作类型返回对应明细").optional(),
  "out_order_no": z.string().describe("商户的授权资金订单号。\t与支付宝的授权资金订单号不能同时为空，二者都传入时，以支付宝的授权资金订单号为准，该参数与商户的授权资金操作流水号配对使用。\t该值与资金冻结时 out_order_no一致。").optional(),
  "out_request_no": z.string().describe("商户的授权资金操作流水号。\t与支付宝的授权资金操作流水号不能同时为空，二者都传入时，以支付宝的授权资金操作流水号为准，该参数与商户的授权资金订单号配对使用。\t查询冻结明细时，该值与发起冻结操作时传入的out_request_no一致；\t查询解冻明细时，该值与发起解冻操作时传入的out_request_no一致；\t查询支付明细时，该值与发起转支付操作时传入的out_trade_no一致。").optional(),
  "query_options": z.array(z.string()).describe("需要查询的额外信息").optional()
}