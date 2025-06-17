import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "checks": z.array(z.string())
}