import { z } from "zod"

export const toolName = `deleteadcentityadditiontype`
export const toolDescription = `Delete a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "hardDelete"
  ],
  "header": [],
  "path": [
    "id",
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().describe("AdcEntityAdditionType Id"), "type": z.string(), "hardDelete": z.boolean().describe("Hard delete the entity. (Default = `false`)") }).shape