import { z } from "zod"

export const inputParamsSchema = {
  "isEngineeringService": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional()
}