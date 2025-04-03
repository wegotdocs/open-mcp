import { z } from "zod"

export const toolName = `getadcusersettingsbyid_6`
export const toolDescription = `Get shared view adcUserSettings. For all`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/view/shared/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "referenceId"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "referenceId": z.string().uuid().optional() }).shape