import { z } from "zod"

export const inputParamsSchema = {
  "templateFile": z.array(z.string().base64())
}