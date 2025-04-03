import { z } from "zod"

export const toolName = `patch`
export const toolDescription = `Update a subject area`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/{id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [
    "autoUnlock",
    "lockToken"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "autoUnlock": z.boolean().describe("Automatically unlock the entity after operation is completed.  (Default = `true`)"), "lockToken": z.string().describe("Lock token - when you need different locks for one user (Default = ``)") }).shape