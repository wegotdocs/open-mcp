import { z } from "zod"

export const toolName = `getspecificglossaryversion`
export const toolDescription = `Get a version of the glossaries`
export const baseUrl = `/api`
export const path = `/v1/glossaries/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the glossary"), "version": z.string().describe("glossary version number in the form `major`.`minor`") }).shape