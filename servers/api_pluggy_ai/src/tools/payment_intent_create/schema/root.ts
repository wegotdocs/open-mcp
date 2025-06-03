import { z } from "zod"

export const inputParamsSchema = {
  "paymentRequestId": z.string().describe("Primary identifier of the payment request associated to the payment intent").optional(),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credentials neccesary to create a payment intent</property-description>").optional(),
  "connectorId": z.number().describe("Primary identifier of the connector associated to the payment intent").optional(),
  "paymentMethod": z.literal("PIS").describe("Payment method can be PIS (Payment Initiation) or PIX (PIX QR flow).").optional(),
  "isDynamicPix": z.boolean().describe("Only for PIX paymentMethod. If true, the generated PIX QR code is dynamic and one-use. This requires the customerId to be present, and the customer must have CPF/CNPJ").optional()
}