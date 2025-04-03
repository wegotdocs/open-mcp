import { z } from "zod"

export const toolName = `deletefollower`
export const toolDescription = `Remove a follower`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/{id}/followers`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the subject area") }).shape