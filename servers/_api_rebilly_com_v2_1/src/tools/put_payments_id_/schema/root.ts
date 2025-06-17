import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "websiteId": z.string(),
  "customerId": z.string(),
  "currency": z.string().describe("The payment currency ISO Alpha code"),
  "amount": z.number().int().describe("The payment amount"),
  "scheduledTime": z.string().datetime({ offset: true }).describe("The time the payment is scheduled for collection").optional(),
  "invoiceIds": z.array(z.string().max(50).describe("The resource ID. Defaults to UUID v4")).describe("The array of invoice identifiers").optional(),
  "description": z.string().max(255).describe("The payment description").optional(),
  "retryInstruction": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `retryInstruction` to the tool, first call the tool `expandSchema` with \"/properties/retryInstruction\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "retryNumber": z.number().int().describe("The position in the sequence of retries").readonly().optional(),
  "retriedPaymentId": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "paymentInstrument": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `paymentInstrument` to the tool, first call the tool `expandSchema` with \"/properties/paymentInstrument\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "billingAddress": z.string().optional(),
  "createdBy": z.string().describe("The process that created this payment").optional(),
  "updatedBy": z.string().describe("The process that updated this payment").optional(),
  "status": z.enum(["scheduled","queued","in-progress","incomplete","waiting-gateway","suspended","completed"]).describe("Payment status").readonly().optional(),
  "result": z.enum(["approved","declined","canceled","unknown"]).describe("Payment result").readonly().optional(),
  "riskMetadata": z.string().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string(), z.string(), z.string()])).min(1).max(4).describe("The links related to resource").readonly().optional()
}