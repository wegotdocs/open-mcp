import { z } from "zod"

export const inputParamsSchema = {
  "parentSpanID": z.string().describe("The parent span ID that is being referenced.").optional(),
  "spanEnd": z.string().datetime({ offset: true }).describe("When the span ended."),
  "spanID": z.string().describe("The span ID that is being referenced."),
  "spanName": z.string().describe("The name of the span that is being collected."),
  "spanStart": z.string().datetime({ offset: true }).describe("When the span started."),
  "traceID": z.string().describe("The Trace ID that is being referenced.")
}