import { z } from "zod"

export const toolName = `getspecificdatabaseversion_1`
export const toolDescription = `Get a version of the table`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Table Id"), "version": z.string().describe("Table version number in the form `major`.`minor`") }).shape