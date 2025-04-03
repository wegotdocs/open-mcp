import { z } from "zod"

export const toolName = `patchadcentityattribute`
export const toolDescription = `Update a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/{id}`
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