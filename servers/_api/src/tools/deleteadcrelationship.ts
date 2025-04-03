import { z } from "zod"

export const toolName = `deleteadcrelationship`
export const toolDescription = `Delete a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcRelationships/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("AdcRelationship Id") }).shape