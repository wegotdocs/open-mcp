import { z } from "zod"

export const toolName = `adddataprofilerconfig`
export const toolDescription = `Add table profile config`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/tableProfilerConfig`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "excludeColumns",
    "includeColumns",
    "partitioning",
    "profileQuery",
    "profileSample",
    "profileSampleType"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "excludeColumns": z.array(z.string()).optional(), "includeColumns": z.array(z.object({ "columnName": z.string().optional(), "metrics": z.array(z.string()).optional() })).optional(), "partitioning": z.object({ "enablePartitioning": z.boolean().optional(), "partitionColumnName": z.string().optional(), "partitionIntegerRangeEnd": z.number().int().optional(), "partitionIntegerRangeStart": z.number().int().optional(), "partitionInterval": z.number().int().optional(), "partitionIntervalType": z.enum(["TIME-UNIT","INTEGER-RANGE","INGESTION-TIME","COLUMN-VALUE"]).optional(), "partitionIntervalUnit": z.enum(["YEAR","MONTH","DAY","HOUR"]).optional(), "partitionValues": z.array(z.record(z.any())).optional() }).optional(), "profileQuery": z.string().optional(), "profileSample": z.number().optional(), "profileSampleType": z.enum(["PERCENTAGE","ROWS"]).optional() }).shape