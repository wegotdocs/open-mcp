import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "stakeholder_id": z.string()
}