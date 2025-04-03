import { z } from "zod"

export const toolName = `getspecificqueryversion`
export const toolDescription = `Get a specific version of the query`
export const baseUrl = `/api`
export const path = `/v1/queries/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Query Id"), "version": z.string().describe("Query version number in the form `major`.`minor`") }).shape