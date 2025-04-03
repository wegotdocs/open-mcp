import { z } from "zod"

export const toolName = `resumeprocessbyid`
export const toolDescription = `Resume process by id`
export const baseUrl = `/api`
export const path = `/v1/processes/{type}/{targetId}/resume`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "type",
    "targetId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.enum(["import","importing-result-export","export","group-change"]).describe("Type of the process"), "targetId": z.string().uuid().describe("Id of the process") }).shape