import { z } from "zod"

export const inputParamsSchema = {
  "format": z.enum(["outline-markdown","json","html"]).optional()
}