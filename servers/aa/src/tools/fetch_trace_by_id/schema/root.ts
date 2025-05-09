import { z } from "zod"

export const inputParamsSchema = {
  "trace_id": z.union([z.string(), z.number().int()]),
  "format": z.enum(["opentelemetry","agenta"]).optional()
}