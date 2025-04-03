import { z } from "zod"

export const toolName = `findbyid`
export const toolDescription = `Get a WorkflowInstance`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/instances/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape