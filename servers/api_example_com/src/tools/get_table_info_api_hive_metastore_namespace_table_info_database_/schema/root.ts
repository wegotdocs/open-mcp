import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "database": z.string(),
  "table": z.string()
}