import { z } from "zod"

export const toolName = `completeusertask`
export const toolDescription = `complete user task`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/user-tasks/{id}/complete`
export const method = `post`
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

export const inputParams = z.object({ "id": z.string().describe("User Task id") }).shape