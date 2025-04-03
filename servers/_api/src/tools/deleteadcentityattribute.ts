import { z } from "zod"

export const toolName = `deleteadcentityattribute`
export const toolDescription = `Delete a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("AdcEntityAttribute Id"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape