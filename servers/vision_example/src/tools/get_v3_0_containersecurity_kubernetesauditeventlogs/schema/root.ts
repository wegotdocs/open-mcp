import { z } from "zod"

export const inputParamsSchema = {
  "startDateTime": z.string().datetime({ offset: true }).max(20).describe("The start of the data retrieval time range, in ISO 8601 format.\n\n`startDateTime` cannot be set to more than 30 days prior to the time you make the request.\n").optional(),
  "endDateTime": z.string().datetime({ offset: true }).max(20).describe("The end of the data retrieval time range, in ISO 8601 format.\n\n`endDateTime` must be greater than than `startDateTime`.\n").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of the audit events of your Kubernetes clusters. Include this parameter in every request that generates paginated output.\n\nSupported fields:\n* `clusterId` - The ID of the cluster in Container Security\n* `priority` - The priority level for the event.\n* `source`  - The service that the request was made to.\n\nSupported operators:\n* `eq` - Operator \"equal to\"\n* `and` - Operator \"and\"\n* `or` - Operator \"or\"\n* `not` - Operator \"not\"\n* `()` - Symbols for grouping operands\n").optional()
}