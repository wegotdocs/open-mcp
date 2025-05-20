import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().regex(new RegExp("^[^/]+$"))
}