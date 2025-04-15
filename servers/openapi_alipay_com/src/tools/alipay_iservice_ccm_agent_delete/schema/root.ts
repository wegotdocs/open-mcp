import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("客服id").optional()
}