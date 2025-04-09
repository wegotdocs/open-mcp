import { z } from "zod"

export const inputParams = {
  "path": z.string().regex(new RegExp(".*"))
}