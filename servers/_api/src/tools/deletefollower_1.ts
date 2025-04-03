import { z } from "zod"

export const toolName = `deletefollower_1`
export const toolDescription = `Remove a follower`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/{id}/followers`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the procedure") }).shape