import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string(),
  "planId": z.string(),
  "websiteId": z.string(),
  "initialInvoiceId": z.string().optional(),
  "deliveryAddress": z.string().optional(),
  "billingAddress": z.string().optional(),
  "status": z.string().describe("Subscription status").readonly().optional(),
  "quantity": z.number().int().describe("Quantity for each subscription. Default value to 1").optional(),
  "autopay": z.boolean().describe("Autopay determines if a payment attempt will be automatic").optional(),
  "inTrial": z.boolean().describe("True if the subscription is currently in a trial period").readonly().optional(),
  "rebillNumber": z.number().int().describe("The current period number").readonly().optional(),
  "canceledBy": z.enum(["merchant","customer","rebilly"]).describe("Canceled by").readonly().optional(),
  "cancelCategory": z.enum(["billing-failure","did-not-use","did-not-want","missing-features","bugs-or-problems","do-not-remember","risk-warning","contract-expired","too-expensive","never-started","switched-plan","other"]).describe("Cancel category").readonly().optional(),
  "cancelDescription": z.string().max(255).describe("Cancel reason description in free form").readonly().optional(),
  "riskMetadata": z.string().optional(),
  "startTime": z.string().datetime({ offset: true }).describe("Subscription start time").optional(),
  "activationTime": z.string().optional(),
  "endTime": z.string().optional(),
  "renewalTime": z.string().datetime({ offset: true }).describe("Subscription renewal time").optional(),
  "canceledTime": z.string().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "customFields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customFields` to the tool, first call the tool `expandSchema` with \"/properties/customFields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>\"Custom Fields list as a map `{\"custom field name\": \"custom field value\", ...}\"`.\nThe format must follow the saved format (see Custom Fields section for the formats).\n</property-description>").optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()])).min(1).max(6).describe("The links related to resource").readonly().optional()
}