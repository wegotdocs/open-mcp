import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User ID").optional(),
  "type": z.enum(["DENUNCIATION","FEEDBACK","FEELING","NEWS","SURVEY"]).describe("Interaction Type").optional(),
  "createdDateString": z.string().describe("Date in string format").optional(),
  "limit": z.number().describe("Limit of records to return").optional()
}