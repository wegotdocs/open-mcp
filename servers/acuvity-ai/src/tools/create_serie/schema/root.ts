import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}