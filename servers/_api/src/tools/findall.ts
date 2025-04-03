import { z } from "zod"

export const toolName = `findall`
export const toolDescription = `Get list of WorkflowInstance items`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/instances`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "from",
    "size",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "from": z.number().int().describe("Pagination offset").optional(), "size": z.number().int().describe("Pagination limit").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape