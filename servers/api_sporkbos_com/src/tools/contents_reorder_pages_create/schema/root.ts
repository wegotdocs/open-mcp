import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "pages": z.array(z.number().int())
}