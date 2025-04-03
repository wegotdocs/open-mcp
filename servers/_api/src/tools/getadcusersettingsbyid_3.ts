import { z } from "zod"

export const toolName = `getadcusersettingsbyid_3`
export const toolDescription = `Get current view adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/view`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "referenceId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "referenceId": z.string().uuid().describe("Include all, deleted, or non-deleted entities.") }).shape