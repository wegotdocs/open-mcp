import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "filtered_metrics": z.string().describe("Return a filtered list of Prometheus metrics.").optional()
}