import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for cell phone recharge on Asaas")
}