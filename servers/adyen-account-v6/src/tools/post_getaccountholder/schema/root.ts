import { z } from "zod"

export const inputParamsSchema = {
  "accountCode": z.string().describe("The code of the account of which to retrieve the details.\n> Required if no `accountHolderCode` is provided.").optional(),
  "accountHolderCode": z.string().describe("The code of the account holder of which to retrieve the details.\n> Required if no `accountCode` is provided.").optional(),
  "showDetails": z.boolean().describe("True if the request should return the account holder details").optional()
}