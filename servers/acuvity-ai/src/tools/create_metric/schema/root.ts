import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in Prometheus query format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "time": z.string().describe("The time for the query in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "timeRelative": z.string().describe("The relative time of the time window as time.Duration.").optional()
}