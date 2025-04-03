import { z } from "zod"

export const toolName = `list_column_profiles`
export const toolDescription = `List of column profiles`
export const baseUrl = `/api`
export const path = `/v1/tables/{fqn}/columnProfile`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "startTs",
    "endTs"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("FQN of the column"), "startTs": z.number().describe("Filter table/column profiles after the given start timestamp"), "endTs": z.number().describe("Filter table/column profiles before the given end timestamp") }).shape