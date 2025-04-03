import { z } from "zod"

export const toolName = `delete_dataprofilerconfig`
export const toolDescription = `Delete table profiler config`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/tableProfilerConfig`
export const method = `delete`
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