import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.number().int().describe("account_id parameter")
}