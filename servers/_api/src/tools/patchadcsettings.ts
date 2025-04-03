import { z } from "zod"

export const toolName = `patchadcsettings`
export const toolDescription = `Update a AdcSettings`
export const baseUrl = `/api`
export const path = `/v1/adcSettings/{id}`
export const method = `patch`
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

export const inputParams = z.object({ "id": z.string().uuid() }).shape