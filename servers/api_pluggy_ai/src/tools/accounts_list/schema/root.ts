import { z } from "zod"

export const inputParamsSchema = {
  "itemId": z.string().uuid().describe("Item primary identifier"),
  "type": z.enum(["BANK","CREDIT"]).describe("Parameter to filter between bank accounts and credit accounts").optional()
}