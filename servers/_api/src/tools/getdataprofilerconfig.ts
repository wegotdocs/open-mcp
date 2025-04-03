import { z } from "zod"

export const toolName = `getdataprofilerconfig`
export const toolDescription = `Get table profile config`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/tableProfilerConfig`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table") }).shape