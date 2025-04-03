import { z } from "zod"

export const toolName = `getselectedglobaladcusersettingsbyid`
export const toolDescription = `Get global view adcUserSettings.`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/selected/global`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape