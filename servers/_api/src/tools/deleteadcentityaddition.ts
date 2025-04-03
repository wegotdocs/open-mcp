import { z } from "zod"

export const toolName = `deleteadcentityaddition`
export const toolDescription = `Delete a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAdditions/{id}`
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

export const inputParams = z.object({ "id": z.string().describe("AdcEntityAddition Id"), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape