import { z } from "zod"

export const inputParamsSchema = {
  "deal_pipeline_id": z.string().optional(),
  "description": z.string().optional(),
  "name": z.string().optional(),
  "objective": z.string().optional(),
  "order": z.number().optional()
}