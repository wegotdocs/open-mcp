import { z } from "zod"

export const inputParamsSchema = {
  "document_type_id": z.string().optional(),
  "patient_document_id": z.string().optional(),
  "mobile_number": z.string().optional(),
  "birthday": z.string().optional(),
  "okadoc-auth-key": z.string().optional()
}