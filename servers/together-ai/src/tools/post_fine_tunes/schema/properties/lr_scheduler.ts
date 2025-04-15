import { z } from "zod"

export const inputParamsSchema = {
  "lr_scheduler_type": z.enum(["linear","cosine"]),
  "lr_scheduler_args": z.object({ "min_lr_ratio": z.number().describe("The ratio of the final learning rate to the peak learning rate") }).optional()
}