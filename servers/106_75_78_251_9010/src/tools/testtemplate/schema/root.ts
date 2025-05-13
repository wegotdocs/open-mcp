import { z } from "zod"

export const inputParamsSchema = {
  "apiType": z.string(),
  "body": z.string()
}