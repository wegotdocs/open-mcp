import { z } from "zod"

export const inputParamsSchema = {
  "account": z.string().max(5000),
  "id": z.string().describe("Unique identifier for the external account to be deleted.")
}