import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "source": z.string(),
  "tags": z.array(z.string()).optional()
}