import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("The ID of the filter to update."),
  "accountId": z.string().describe("The account ID of the new owner.")
}