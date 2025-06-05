import { z } from "zod"

export const inputParamsSchema = {
  "feedback_role": z.enum(["given","received"]).optional(),
  "feedback_type": z.enum(["all","coaching","praising"]).optional(),
  "feedback_types": z.string().optional(),
  "team": z.number().int().optional(),
  "user": z.number().int().optional()
}