import { z } from "zod"

export const inputParams = {
  "trace_id": z.union([z.string(), z.number().int()]),
  "format": z.enum(["opentelemetry","agenta"]).optional()
}