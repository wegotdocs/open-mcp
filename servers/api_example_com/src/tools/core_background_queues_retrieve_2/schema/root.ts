import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().regex(new RegExp("^[\\w.@+-]+$"))
}