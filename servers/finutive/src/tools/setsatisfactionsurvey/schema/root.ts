import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "question1": z.enum(["FINTUIVE_SERVICE","SPECIFIC_SERVICE"]).optional(),
  "question2": z.string().optional(),
  "question_services": z.string().optional(),
  "other_services": z.string().optional(),
  "question_not_satisfied": z.string().optional(),
  "other_not_satisfied": z.string().optional(),
  "question_anything_else": z.string().optional(),
  "question_videocall": z.boolean().optional(),
  "vote": z.number().int().optional()
}