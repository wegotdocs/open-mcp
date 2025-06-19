import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().uuid().describe("ID of the desired user"),
  "accountId": z.string().uuid().describe("ID of the desired account")
}