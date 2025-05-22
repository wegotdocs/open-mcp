import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The share link's id."),
  "privacy": z.enum(["company","public"]).nullable().describe("The privacy state of the recording share link")
}