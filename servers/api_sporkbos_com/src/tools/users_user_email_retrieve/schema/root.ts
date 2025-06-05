import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "is_team_form": z.boolean().optional()
}