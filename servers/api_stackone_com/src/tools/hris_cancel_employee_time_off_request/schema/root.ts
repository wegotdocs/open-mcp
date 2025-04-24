import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "subResourceId": z.string(),
  "x-account-id": z.string().describe("The account identifier")
}