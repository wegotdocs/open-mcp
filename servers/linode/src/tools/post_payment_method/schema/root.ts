import { z } from "zod"

export const inputParams = {
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object representing the credit card information you have on file with Linode to make Payments against your Account.</property-description>"),
  "is_default": z.boolean().describe("Whether this Payment Method is the default method for automatically processing service charges."),
  "type": z.literal("credit_card").describe("The type of Payment Method.\n\nAlternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](https://www.linode.com/docs/products/platform/billing/guides/payment-methods/) guide\nfor details and instructions.")
}