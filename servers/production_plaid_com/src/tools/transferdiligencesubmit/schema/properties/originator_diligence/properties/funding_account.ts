import { z } from "zod"

export const inputParamsSchema = {
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "account_id": z.string().describe("The Plaid `account_id` for the newly created Item.")
}