import { z } from "zod"

export const inputParamsSchema = {
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}