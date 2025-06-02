import { z } from "zod"

export const inputParamsSchema = {
  "contractTemplateId": z.string().describe("The Contract Template identifier"),
  "functionSignature": z.string()
}