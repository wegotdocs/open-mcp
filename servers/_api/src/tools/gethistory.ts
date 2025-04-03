import { z } from "zod"

export const toolName = `gethistory`
export const toolDescription = `Get history for entity version by entity ID`
export const baseUrl = `/api`
export const path = `/v1/adc-workflow/history/{entityId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityVersion"
  ],
  "header": [],
  "path": [
    "entityId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityId": z.string().describe("Entity ID"), "entityVersion": z.number().describe("Entity version").optional() }).shape