import { z } from "zod"

export const inputParams = {
  "amount_type": z.string().describe("只有当传递了order_amount时，该参数才有意义； 1）该参数不传时，默认为ORDER_AMOUNT。 2）传ORDER_AMOUNT时，表示order_amount传入的金额为后付金额，在发起扣款时，最大扣款支付金额为order_amount传入的值（取值单位为元）； 3）传RISK_AMOUNT时，表示order_amount传入的金额为风险预估金额，在发起扣款时，最大扣款支付金额为商户签约时约定的上限额度（取值单位为元）。").optional(),
  "body": z.string().describe("订单描述").optional(),
  "category_id": z.string().describe("芝麻外部类目，芝麻先享接入无差异化风控诉求可不传").optional(),
  "commercial_sub_mode": z.string().describe("业务子模式。默认的单次付模式无需传入，阶段付模式传入以区分是分次还是分期子模式。").optional(),
  "credit_agreement_id": z.string().describe("芝麻开通协议号").optional(),
  "credit_commercial_mode": z.string().describe("信用业务模式，不填默认为单次扣款模式。阶段付模式为STAGE_PAYMENT，其它模式请根据对应的技术支持文档传入").optional(),
  "extend_params": z.string().describe("业务扩展参数").optional(),
  "order_amount": z.string().describe("订单金额，该金额为当前订单扣款的累计最大额度。例如，下单时传递10.00，则扣款时最大支付金额为10元。若该参数不传，则默认使用商户签约时约定的上限额度。芝麻速办业务场景（极速回收、极速返利、极速退款等）商户请求时，order_amount必传，且amount_type类型需传递ORDER_AMOUNT。").optional(),
  "out_order_no": z.string().describe("商户外部订单号，保证不重复").optional(),
  "payment_total_times": z.string().describe("多阶段订单次数，业务模式为阶段付模式下时需传入").optional(),
  "product_code": z.string().describe("产品码，不传默认为CREDIT_PAY_AFTER_USE").optional(),
  "stage_period_type": z.string().describe("阶段付分期类型。阶段付模式，且子业务模式为分期模式下需要传入，分次不需要").optional(),
  "subject": z.string().describe("订单标题。\t注意：不可使用特殊字符，如 /，=，& 等。").optional()
}