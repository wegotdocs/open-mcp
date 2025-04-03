import { z } from "zod"

export const toolName = `getselectedadcusersettingsbyid`
export const toolDescription = `Get current selected view adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/selected`
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