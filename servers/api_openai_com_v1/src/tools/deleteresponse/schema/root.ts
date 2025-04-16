import { z } from "zod"

export const inputParamsSchema = {
  "response_id": z.string().describe("The ID of the response to delete.")
}