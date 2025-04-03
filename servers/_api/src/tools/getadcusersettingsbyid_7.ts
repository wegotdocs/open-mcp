import { z } from "zod"

export const toolName = `getadcusersettingsbyid_7`
export const toolDescription = `Get shared views adcUserSettings. For admin only`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/view/shared`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "referenceId",
    "isFavorite",
    "offset",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "referenceId": z.string().uuid().describe("Include all, deleted, or non-deleted entities.").optional(), "isFavorite": z.boolean().describe("Include favorite entities.").optional(), "offset": z.number().int().optional(), "limit": z.number().int().optional() }).shape