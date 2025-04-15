import { z } from "zod"

export const inputParamsSchema = {
  "api_key_uuid": z.string().describe("API key ID")
}