import { z } from "zod"

export const toolName = `listallstorageserviceversion`
export const toolDescription = `List storage service versions`
export const baseUrl = `/api`
export const path = `/v1/services/storageServices/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("storage service Id") }).shape