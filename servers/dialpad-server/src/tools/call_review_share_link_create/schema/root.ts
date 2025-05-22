import { z } from "zod"

export const inputParamsSchema = {
  "call_id": z.number().int().nullable().describe("The call's id.").optional(),
  "privacy": z.enum(["company","public"]).nullable().describe("The privacy state of the recording share link, 'company' will be set as default.").optional()
}