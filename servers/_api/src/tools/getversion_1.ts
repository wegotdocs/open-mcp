import { z } from "zod"

export const toolName = `getversion_1`
export const toolDescription = `Get a version of the glossary term types`
export const baseUrl = `/api`
export const path = `/v1/adcGlossaryTermTypes/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("glossary term type Id"), "version": z.string().describe("glossary term type version number in the form `major`.`minor`") }).shape