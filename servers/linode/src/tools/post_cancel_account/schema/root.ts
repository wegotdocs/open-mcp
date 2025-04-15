import { z } from "zod"

export const inputParams = {
  "comments": z.string().describe("Any reason for cancelling the account, and any other comments you might have about your Linode service.").optional()
}