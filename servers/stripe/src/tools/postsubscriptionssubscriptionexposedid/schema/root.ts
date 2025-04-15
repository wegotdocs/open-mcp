import { z } from "zod"

export const inputParamsSchema = {
  "subscription_exposed_id": z.string().max(5000)
}