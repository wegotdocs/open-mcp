import { z } from "zod"

export const inputParamsSchema = {
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets assigned to the load balancer.").optional()
}