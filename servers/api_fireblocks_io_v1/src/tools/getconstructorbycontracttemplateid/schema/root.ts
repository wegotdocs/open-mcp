import { z } from "zod"

export const inputParamsSchema = {
  "contractTemplateId": z.string().describe("The Contract Template identifier"),
  "withDocs": z.boolean().describe("true if you want to get the abi with its docs").optional()
}