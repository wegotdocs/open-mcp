import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "catalog": z.string(),
  "schema": z.string(),
  "table": z.string()
}