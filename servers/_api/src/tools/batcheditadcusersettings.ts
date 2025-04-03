import { z } from "zod"

export const toolName = `batcheditadcusersettings`
export const toolDescription = `Batch edit a adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings/batchEdit`
export const method = `post`
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