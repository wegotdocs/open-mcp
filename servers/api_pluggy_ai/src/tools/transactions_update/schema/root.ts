import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("transaction primary identifier"),
  "categoryId": z.string().describe("Identifier of the category")
}