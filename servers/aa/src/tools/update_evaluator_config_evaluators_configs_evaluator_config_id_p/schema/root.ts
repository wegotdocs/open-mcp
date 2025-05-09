import { z } from "zod"

export const inputParamsSchema = {
  "evaluator_config_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "evaluator_key": z.union([z.string(), z.null()]).optional(),
  "settings_values": z.union([z.record(z.any()), z.null()])
}