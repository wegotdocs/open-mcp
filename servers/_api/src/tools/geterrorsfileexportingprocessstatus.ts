import { z } from "zod"

export const toolName = `geterrorsfileexportingprocessstatus`
export const toolDescription = `Get errors exporting process status`
export const baseUrl = `/api`
export const path = `/v1/import/{exportProcessId}/errors/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "exportProcessId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "exportProcessId": z.string().uuid() }).shape