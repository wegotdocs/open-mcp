import { z } from "zod"

export const inputParamsSchema = {
  "accept-language": z.string().optional()
}