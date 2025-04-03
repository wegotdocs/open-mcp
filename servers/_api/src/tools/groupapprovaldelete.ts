import { z } from "zod"

export const toolName = `groupapprovaldelete`
export const toolDescription = `Group approval of the deleted entities in wms`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/groupApproval/{entityType}/delete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "entityType"
  ],
  "cookie": [],
  "body": [
    "comment",
    "ids"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.string().describe("Type of entity"), "comment": z.string(), "ids": z.array(z.string().uuid()) }).shape