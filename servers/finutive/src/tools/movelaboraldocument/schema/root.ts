import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "flow_id": z.string().optional(),
  "path": z.string().optional(),
  "resource": z.string()
}