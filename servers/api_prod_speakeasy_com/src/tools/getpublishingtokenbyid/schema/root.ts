import { z } from "zod"

export const inputParamsSchema = {
  "tokenID": z.string().describe("Unique identifier of the publishing token.")
}