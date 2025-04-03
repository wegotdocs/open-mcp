import { z } from "zod"

export const toolName = `getglossarytermworkflowtriggerbyfqn`
export const toolDescription = `Get GlossaryTermWorkflowTrigger by name`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/glossaryTerm/triggers/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape