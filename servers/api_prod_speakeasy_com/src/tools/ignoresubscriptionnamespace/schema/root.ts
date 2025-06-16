import { z } from "zod"

export const inputParamsSchema = {
  "subscriptionID": z.string().describe("The existing subscription ID"),
  "namespaceName": z.string().describe("The namespace name")
}