import { z } from "zod"

export const inputParamsSchema = {
  "message_to_beneficiary": z.string().nullable().describe("Additional information from the wire originator to the beneficiary. Max 140 characters.").optional()
}