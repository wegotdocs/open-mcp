import { z } from "zod"

export const toolName = `validateentityattributes`
export const toolDescription = `Validate specified additional entity attributes`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/validateEntityAttributes`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "additionAttributesKeys",
    "entityType"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "additionAttributesKeys": z.string().optional(), "entityType": z.string().optional() }).shape