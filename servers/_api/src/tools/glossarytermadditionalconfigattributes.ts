import { z } from "zod"

export const toolName = `glossarytermadditionalconfigattributes`
export const toolDescription = `List general User/Group attributes for glossary terms`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/glossaryTermAdditionalConfigAttributes`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "termTypes"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "termTypes": z.array(z.string().uuid()).optional() }).shape