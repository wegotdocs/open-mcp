import { z } from "zod"

export const toolName = `getadcentitydirectivefieldsparameters`
export const toolDescription = `List of (string) fields which are used by directives for {type}`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcAdditionDirectives/type/{type}/propertyParameters`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.string().describe("Type of extended entity") }).shape