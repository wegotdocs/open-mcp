import { z } from "zod"

export const inputParamsSchema = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool.")
}