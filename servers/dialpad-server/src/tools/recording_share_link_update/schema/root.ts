import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The recording share link's ID."),
  "privacy": z.enum(["admin","company","owner","public"]).nullable().describe("The privacy state of the recording share link.")
}