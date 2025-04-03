import { z } from "zod"

export const toolName = `delete_3`
export const toolDescription = `Delete a change process and it's result by the given ID`
export const baseUrl = `/api`
export const path = `/v1/groupOperations/change/{processId}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "processId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "processId": z.string().uuid() }).shape