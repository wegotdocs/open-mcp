import { z } from "zod"

export const inputParamsSchema = {
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}