import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Payment link name"),
  "description": z.string().describe("Payments link description").optional(),
  "endDate": z.string().describe("End date").optional(),
  "value": z.number().describe("Value of the payment link, if not informed, the payer can inform how much they want to pay").optional(),
  "billingType": z.enum(["UNDEFINED","BOLETO","CREDIT_CARD","PIX"]).describe("Allowed payment method"),
  "chargeType": z.enum(["DETACHED","RECURRENT","INSTALLMENT"]).describe("Charge type"),
  "dueDateLimitDays": z.number().int().describe("Number of business days that your customer can pay after the invoice is generated (For payment method such as Boleto)").optional(),
  "subscriptionCycle": z.enum(["WEEKLY","BIWEEKLY","MONTHLY","BIMONTHLY","QUARTERLY","SEMIANNUALLY","YEARLY"]).describe("Billing frequency, if the chargeType is RECURRENT").optional(),
  "maxInstallmentCount": z.number().int().describe("Maximum number of installments that your customer can pay in installments for the payment link if the billing method selected is Installments. If not informed, the default value will be 1 installment").optional(),
  "externalReference": z.string().describe("Free search field.").optional(),
  "notificationEnabled": z.boolean().describe("Defines whether customers registered via the payments link will have notifications enabled. If not informed, the default value will be true").optional(),
  "callback": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `callback` to the tool, first call the tool `expandSchema` with \"/properties/callback\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Automatic redirection information after the payment of the link payment</property-description>").optional(),
  "isAddressRequired": z.boolean().describe("True to make it mandatory to fill in address data at checkout.").optional()
}