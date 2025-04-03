import { z } from "zod"

export const toolName = `deleteadcsettings`
export const toolDescription = `Delete a AdcSettings`
export const baseUrl = `/api`
export const path = `/v1/adcSettings/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("AdcSettings Id") }).shape