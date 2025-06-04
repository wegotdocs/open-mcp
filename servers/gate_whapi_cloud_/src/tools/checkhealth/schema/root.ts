import { z } from "zod"

export const inputParamsSchema = {
  "wakeup": z.boolean().describe("If set to false, the channel will not launch").optional(),
  "platform": z.string().describe("Browser name, OS name, OS version separated by commas. Example: 'Safari,Windows,10.0.19044' or 'Desktop,Mac OS,11.6.3'").optional(),
  "channel_type": z.enum(["web","mobile"]).describe("Channel type. Web - for linking existing WA account via WA Web, Mobile - for creating new WA account").optional()
}