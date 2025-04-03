import { z } from "zod"

export const toolName = `patchadcentityadditiontype`
export const toolDescription = `Update a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}/{id}`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "type": z.string() }).shape