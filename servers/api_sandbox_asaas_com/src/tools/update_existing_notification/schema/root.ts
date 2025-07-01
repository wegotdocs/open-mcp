import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the notification to be updated"),
  "enabled": z.boolean().describe("Enable/disable notification").optional(),
  "emailEnabledForProvider": z.boolean().describe("enable/disable the email sent to you").optional(),
  "smsEnabledForProvider": z.boolean().describe("enable/disable the SMS sent to you").optional(),
  "emailEnabledForCustomer": z.boolean().describe("enable/disable the email sent to your customer").optional(),
  "smsEnabledForCustomer": z.boolean().describe("enable/disable the SMS sent to your customer").optional(),
  "phoneCallEnabledForCustomer": z.boolean().describe("enable/disable voice notification sent to your customer").optional(),
  "whatsappEnabledForCustomer": z.boolean().describe("enable/disable WhatsApp messages for your customer").optional(),
  "scheduleOffset": z.union([z.literal(0), z.literal(1), z.literal(5), z.literal(7), z.literal(10), z.literal(15), z.literal(30)]).describe("Specifies how many days before the due date the notification must be sent.\n For the `PAYMENT_DUEDATE_WARNING` event, the accepted values are: `0`, `5`, `10`, `15` and `30`\n For the `PAYMENT_OVERDUE` event, the accepted values are: `1`, `7`, `15` and `30`").optional()
}