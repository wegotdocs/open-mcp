import { z } from "zod"

export const inputParamsSchema = {
  "position": z.number().int(),
  "skills": z.array(z.object({ "skill": z.number().int(), "is_linked": z.boolean() }))
}