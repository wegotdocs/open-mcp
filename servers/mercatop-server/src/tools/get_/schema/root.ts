import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string().optional(),
  "context": z.string().optional()
}