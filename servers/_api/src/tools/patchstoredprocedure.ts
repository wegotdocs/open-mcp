import { z } from "zod"

export const toolName = `patchstoredprocedure`
export const toolDescription = `Update a Stored Procedure`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/{id}`
export const method = `patch`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Stored Procedure Id") }).shape