import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid(),
  "operation": z.string()
}