import { z } from "zod"

export const inputParamsSchema = {
  "key_id": z.string().describe("The ID of the API key to be deleted.")
}