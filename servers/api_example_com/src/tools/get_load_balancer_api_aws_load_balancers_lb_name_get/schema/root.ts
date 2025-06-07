import { z } from "zod"

export const inputParamsSchema = {
  "lb_name": z.string(),
  "lb_type": z.union([z.string(), z.null()]).describe("Type of load balancer (classic, application, network)").optional()
}