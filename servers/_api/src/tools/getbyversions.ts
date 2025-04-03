import { z } from "zod"

export const toolName = `getbyversions`
export const toolDescription = `Get a entity full type by base and addition types' names and versions`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/byVersions`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityType",
    "entityTypeVersion",
    "additionVersions",
    "attributeVersions"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.string().describe("Name of entity type").optional(), "entityTypeVersion": z.number().describe("Version of entity type").optional(), "additionVersions": z.string().describe("Comma separated names of addition types with versions"), "attributeVersions": z.string().describe("Comma separated names of attribute types with versions") }).shape