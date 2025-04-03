import { z } from "zod"

export const toolName = `deletecustommetric`
export const toolDescription = `Delete custom metric from a column`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/customMetric/{columnName}/{customMetricName}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "columnName",
    "customMetricName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "columnName": z.string().describe("column of the table"), "customMetricName": z.string().describe("column Test Type") }).shape