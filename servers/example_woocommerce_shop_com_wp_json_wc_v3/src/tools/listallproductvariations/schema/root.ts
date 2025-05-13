import { z } from "zod"

export const inputParamsSchema = {
  "productId": z.number().int().describe("ID of parent product for variations to return")
}