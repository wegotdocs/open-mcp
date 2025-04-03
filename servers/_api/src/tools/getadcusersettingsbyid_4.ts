import { z } from "zod"

export const toolName = `getadcusersettingsbyid_4`
export const toolDescription = `Get current view adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/type/{type}`
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
  "path": [
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.enum(["View","Global","NewNotificationFlagForMentions","NewNotificationFlagForRequests","NewNotificationFlagForTasks","Local","Shared","FiltersVisibility","Selected"]), "referenceId": z.string().uuid().describe("Settings by type for user"), "isFavorite": z.boolean().describe("Include favorite entities.").optional(), "offset": z.number().int().optional(), "limit": z.number().int().optional() }).shape