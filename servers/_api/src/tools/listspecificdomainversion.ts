import { z } from "zod"

export const toolName = `listspecificdomainversion`
export const toolDescription = `Get a version of the domain`
export const baseUrl = `/api`
export const path = `/v1/domains/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the domain"), "version": z.string().describe("Domain version number in the form `major`.`minor`") }).shape