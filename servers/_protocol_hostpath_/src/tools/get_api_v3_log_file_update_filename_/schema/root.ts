import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.string().regex(new RegExp("[-.a-zA-Z0-9]+?\\.txt"))
}