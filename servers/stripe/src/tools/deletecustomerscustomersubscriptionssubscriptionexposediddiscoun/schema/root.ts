import { z } from "zod"

export const inputParams = {
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}