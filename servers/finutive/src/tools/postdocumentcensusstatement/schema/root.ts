import { z } from "zod"

export const inputParamsSchema = {
  "statement_id": z.string(),
  "file": z.string().base64()
}