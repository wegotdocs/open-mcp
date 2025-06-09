import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "Authorization": z.string()
}