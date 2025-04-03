import { z } from "zod"

export const toolName = `getversion`
export const toolDescription = `Get a version of the subject area`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/{id}/versions/{version}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("glossary Id"), "version": z.string().describe("subject area version number in the form `major`.`minor`") }).shape