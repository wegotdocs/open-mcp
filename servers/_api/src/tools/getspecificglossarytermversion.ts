import { z } from "zod"

export const toolName = `getspecificglossarytermversion`
export const toolDescription = `Get a version of the glossary term`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the glossary term"), "version": z.string().describe("glossary term version number in the form `major`.`minor`") }).shape