import { z } from "zod"

export const inputParamsSchema = {
  "privacy": z.enum(["admin","company","owner","public"]).nullable().describe("The privacy state of the recording share link.").optional(),
  "recording_id": z.string().nullable().describe("The recording entity's ID."),
  "recording_type": z.enum(["admincallrecording","callrecording","voicemail"]).nullable().describe("The type of the recording entity shared via the link.")
}