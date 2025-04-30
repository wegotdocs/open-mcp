import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string(),
  "schema": z.string()
}