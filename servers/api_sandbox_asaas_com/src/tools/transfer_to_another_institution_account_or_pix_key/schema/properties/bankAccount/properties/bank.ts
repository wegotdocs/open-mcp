import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("Bank clearing code in the banking system")
}