import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "type": z.enum(["open_connections","connections_per_second","requests_per_second","bandwidth"]).describe("Type of metrics to get"),
  "start": z.string().describe("Start of period to get Metrics for (in ISO-8601 format)"),
  "end": z.string().describe("End of period to get Metrics for (in ISO-8601 format)"),
  "step": z.string().describe("Resolution of results in seconds").optional()
}