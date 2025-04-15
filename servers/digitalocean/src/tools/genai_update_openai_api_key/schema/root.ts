import { z } from "zod"

export const inputParamsSchema = {
  "api_key_uuid": z.string().describe("API key ID"),
  "api_key": z.string().describe("OpenAI API key").optional(),
  "b_api_key_uuid": z.string().describe("API key ID").optional(),
  "name": z.string().describe("Name of the key").optional()
}