import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "search": z.string().optional(),
  "business_ids": z.array(z.string()).optional(),
  "opened_period": z.boolean().optional(),
  "closed_period": z.boolean().optional(),
  "in_process_csv": z.boolean().optional(),
  "completed_csv": z.boolean().optional(),
  "pending_csv": z.boolean().optional(),
  "with_requirements": z.boolean().optional(),
  "with_positive_values": z.boolean().optional(),
  "business_type": z.enum(["SOCIETY","UNSUPPORTED","AUTONOMOUS"]).optional(),
  "min_tickets": z.number().int().optional(),
  "max_tickets": z.number().int().optional(),
  "in_sage": z.number().int().optional(),
  "with_laboral_service": z.boolean().optional(),
  "with_start_company_date": z.boolean().optional(),
  "min_csv_return": z.number().int().optional(),
  "max_csv_return": z.number().int().optional(),
  "model_ids": z.array(z.string()).optional()
}