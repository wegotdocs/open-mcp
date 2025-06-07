import { z } from "zod"

export const inputParamsSchema = {
  "asg_name": z.string(),
  "min_size": z.union([z.number().int(), z.null()]).describe("New minimum size").optional(),
  "max_size": z.union([z.number().int(), z.null()]).describe("New maximum size").optional(),
  "desired_capacity": z.union([z.number().int(), z.null()]).describe("New desired capacity").optional()
}