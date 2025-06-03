import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string()
}