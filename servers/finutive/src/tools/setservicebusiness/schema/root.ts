import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "status": z.enum(["REJECTED","OPPORTUNITY","REQUESTED","BUDGET_SENT","CLIENT","ENABLED","DISABLED"]).optional(),
  "service_id": z.string(),
  "manager_id": z.string().optional()
}