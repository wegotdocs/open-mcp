import { z } from "zod"

export const toolName = `getsearchmappingschema`
export const toolDescription = `Get Search Mapping Schema`
export const baseUrl = `/api`
export const path = `/v1/search/mappings`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityType"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.string().describe("List of Entities to get schema for").optional() }).shape