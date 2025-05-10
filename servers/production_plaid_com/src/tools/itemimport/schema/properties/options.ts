import { z } from "zod"

export const inputParamsSchema = {
  "webhook": z.string().describe("Specifies a webhook URL to associate with an Item. Plaid fires a webhook if credentials fail.\n").optional()
}