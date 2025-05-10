import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().regex(new RegExp("^(?!api/).*"))
}