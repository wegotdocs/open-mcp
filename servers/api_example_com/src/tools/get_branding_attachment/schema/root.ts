import { z } from "zod"

export const inputParamsSchema = {
  "kind": z.string(),
  "If-None-Match": z.string().optional()
}