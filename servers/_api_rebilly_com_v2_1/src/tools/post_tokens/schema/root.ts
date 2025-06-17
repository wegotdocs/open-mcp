import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "method": z.enum(["ach","cash","payment-card","paypal","Alipay","China UnionPay","Flexepin","Gpaysafe","Jeton","OchaPay","SMSVoucher","UPayCard","WeChat Pay"]).describe("The payment method"),
  "paymentInstrument": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `paymentInstrument` to the tool, first call the tool `expandSchema` with \"/properties/paymentInstrument\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Payment Token instrument object</property-description>"),
  "fingerprint": z.string().describe("Device fingerprint hash").optional(),
  "billingAddress": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}