import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.number().int()
}