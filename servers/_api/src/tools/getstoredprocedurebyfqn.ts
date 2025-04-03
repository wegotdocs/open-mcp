import { z } from "zod"

export const toolName = `getstoredprocedurebyfqn`
export const toolDescription = `Get a Stored Procedure by fully qualified name`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/name/{fqn}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "fqn"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fqn": z.string().describe("Fully qualified name of the Stored Procedure"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape