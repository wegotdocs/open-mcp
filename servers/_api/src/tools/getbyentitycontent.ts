import { z } from "zod"

export const toolName = `getbyentitycontent`
export const toolDescription = `Get a entity full type by entity content`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/byContent`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "entityType"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.string().optional() }).shape