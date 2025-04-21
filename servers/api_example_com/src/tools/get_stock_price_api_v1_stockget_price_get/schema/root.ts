import { z } from "zod"

export const inputParamsSchema = {
  "symbol": z.string().describe("Stock symbol, e.g., QQQ")
}