import { z } from "zod"

export const toolName = `claimusertask`
export const toolDescription = `claim user task`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/user-tasks/role/{id}/claim`
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