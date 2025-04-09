import { z } from "zod"

export const inputParams = {
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}