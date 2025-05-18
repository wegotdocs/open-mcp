import { z } from "zod"

export const inputParamsSchema = {
  "linkStatus": z.enum(["unknown","failed","pending","linked"]).optional()
}