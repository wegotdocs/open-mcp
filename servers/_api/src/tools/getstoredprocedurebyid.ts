import { z } from "zod"

export const toolName = `getstoredprocedurebyid`
export const toolDescription = `Get a stored procedure by Id`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Stored Procedure Id"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape