import { z } from "zod"

export const inputParamsSchema = {
  "role_id": z.string().uuid()
}