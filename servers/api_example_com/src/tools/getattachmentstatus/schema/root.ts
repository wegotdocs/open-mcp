import { z } from "zod"

export const inputParamsSchema = {
  "attachment_id": z.string().uuid()
}