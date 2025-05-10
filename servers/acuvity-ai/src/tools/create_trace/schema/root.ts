import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "result": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `result` to the tool, first call the tool `expandSchema` with \"/properties/result\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The result of the request.</property-description>").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional(),
  "traceID": z.string().describe("The trace ID to query.")
}