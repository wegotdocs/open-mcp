import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "label": z.string().describe("The label to retrieve all available the values for."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("A set of log stream selector that selects the streams to match and return label\nvalues for.").optional(),
  "result": z.array(z.string()).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}