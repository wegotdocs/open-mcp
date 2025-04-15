import { z } from "zod"

export const inputParamsSchema = {
  "scale_down_utilization_threshold": z.number().describe("Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold.").optional(),
  "scale_down_unneeded_time": z.string().describe("Used to customize how long a node is unneeded before being scaled down.").optional()
}