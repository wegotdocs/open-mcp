import { z } from "zod"

export const toolName = `gettask`
export const toolDescription = `get task by ID`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/entity-task/{id}`
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

export const inputParams = z.object({ "id": z.string().describe("User Task id") }).shape