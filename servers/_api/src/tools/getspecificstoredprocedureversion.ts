import { z } from "zod"

export const toolName = `getspecificstoredprocedureversion`
export const toolDescription = `Get a version of the Stored Procedure`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures/{id}/versions/{version}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "version"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Stored Procedure Id"), "version": z.string().describe("Stored Procedure version number in the form `major`.`minor`") }).shape