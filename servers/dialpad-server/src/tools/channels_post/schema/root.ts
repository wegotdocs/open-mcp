import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().nullable().describe("The description of the channel."),
  "name": z.string().nullable().describe("[single-line only]\n\nThe name of the channel."),
  "privacy_type": z.enum(["private","public"]).nullable().describe("The privacy type of the channel."),
  "user_id": z.number().int().nullable().describe("The ID of the user who owns the channel. Just for company level API key.").optional()
}