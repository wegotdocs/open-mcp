import { z } from "zod"

export const toolName = `listspecificdataproductversion`
export const toolDescription = `Get a version of the dataProduct`
export const baseUrl = `/api`
export const path = `/v1/dataProducts/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dataProduct"), "version": z.string().describe("DataProduct version number in the form `major`.`minor`") }).shape