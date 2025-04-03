import { z } from "zod"

export const toolName = `list_system_profiles`
export const toolDescription = `List of system profiles`
export const baseUrl = `/api`
export const path = `/v1/tables/{fqn}/systemProfile`
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

export const inputParams = z.object({ "fqn": z.string().describe("FQN of the table"), "startTs": z.number().describe("Filter system profiles after the given start timestamp"), "endTs": z.number().describe("Filter system profiles before the given end timestamp") }).shape