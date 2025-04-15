import { z } from "zod"

export const inputParamsSchema = {
  "communication_methods": z.array(z.object({ "method": z.enum(["SMS","EMAIL"]).describe("The delivery method to be used to deliver the Hosted Link session URL.\n\n`SMS`: The URL will be delivered through SMS\n\n`EMAIL`: The URL will be delivered through email").optional(), "address": z.string().describe("The phone number / email address that Hosted Link sessions are delivered to. Phone numbers must be in E.164 format.").optional() }).describe("The communication method containing both the type and address to send the URL.")).describe("The list of communication methods to send the Hosted Link session URL to. If delivery is not required, leave this field blank.").optional(),
  "first_name": z.string().describe("First name of the recipient. Will be used in the body of the email / text (if configured). If this information is not available, leave this field blank.").optional()
}