import { z } from "zod"

export const inputParamsSchema = {
  "itemId": z.string().uuid().describe("Item's primary identifier")
}