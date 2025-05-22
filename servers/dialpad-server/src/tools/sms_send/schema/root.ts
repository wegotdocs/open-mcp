import { z } from "zod"

export const inputParamsSchema = {
  "channel_hashtag": z.string().nullable().describe("[single-line only]\n\nThe hashtag of the channel which should receive the SMS.").optional(),
  "from_number": z.string().nullable().describe("The number of who sending the SMS. The number must be assigned to user or a user group. It will override user_id and sender_group_id.").optional(),
  "infer_country_code": z.boolean().nullable().describe("If true, to_numbers will be assumed to be from the specified user's country, and the E164 format requirement will be relaxed.").optional(),
  "media": z.string().nullable().describe("Base64-encoded media attachment (will cause the message to be sent as MMS).\n(Max 500 KiB raw file size)").optional(),
  "sender_group_id": z.number().int().nullable().describe("The ID of an office, department, or call center that the User should send the message on behalf of.").optional(),
  "sender_group_type": z.enum(["callcenter","department","office"]).nullable().describe("The sender group's type (i.e. office, department, or callcenter).").optional(),
  "text": z.string().nullable().describe("The contents of the message that should be sent.").optional(),
  "to_numbers": z.array(z.string()).nullable().describe("Up to 10 E164-formatted phone numbers who should receive the SMS.").optional(),
  "user_id": z.number().int().nullable().describe("The ID of the user who should be the sender of the SMS.").optional()
}