import { z } from "zod"

export const inputParamsSchema = {
  "subscription_id": z.string().describe("Azure subscription ID")
}