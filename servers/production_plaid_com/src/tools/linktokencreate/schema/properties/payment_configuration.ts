import { z } from "zod"

export const inputParamsSchema = {
  "amount": z.string().describe("The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\")."),
  "description": z.string().describe("The description of the transfer that provides the payment context. The max length is 256.").optional()
}