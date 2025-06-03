import { z } from "zod"

export const inputParamsSchema = {
  "abs_account_name": z.string().describe("The account name"),
  "abs_client_id": z.string().describe("The client id"),
  "abs_client_secret": z.string().describe("The client secret"),
  "abs_tenant_id": z.string().describe("The tenant id")
}