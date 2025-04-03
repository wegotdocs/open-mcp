import { z } from "zod"

export const toolName = `patchadcsettings_1`
export const toolDescription = `Update a AdcSettings`
export const baseUrl = `/api`
export const path = `/v1/adcSettings/name/{name}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Fully qualified name of the AdcSettings") }).shape