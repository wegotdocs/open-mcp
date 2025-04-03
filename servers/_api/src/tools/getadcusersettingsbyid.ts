import { z } from "zod"

export const toolName = `getadcusersettingsbyid`
export const toolDescription = `Get a adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape