import { z } from "zod"

export const toolName = `assignusertotask`
export const toolDescription = `set Assignee for task`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/{taskId}/assign/{userId}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "taskId",
    "userId"
  ],
  "cookie": [],
  "body": [
    "comment"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "taskId": z.string().describe("User Task id"), "userId": z.string().uuid().describe("User id"), "comment": z.string() }).shape