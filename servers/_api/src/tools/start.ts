import { z } from "zod"

export const toolName = `start`
export const toolDescription = `Start export process for entity`
export const baseUrl = `/api`
export const path = `/v1/export`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "format",
    "exportAssets"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "format": z.enum(["xlsx","csv","bpmn"]).optional(), "exportAssets": z.boolean().optional() }).shape