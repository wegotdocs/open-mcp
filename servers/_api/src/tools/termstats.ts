import { z } from "zod"

export const toolName = `termstats`
export const toolDescription = `ADC Terms stats`
export const baseUrl = `/api`
export const path = `/v1/search/adc/terms/stats`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "filter",
    "gsas"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "filter": z.string().optional(), "gsas": z.array(z.object({ "id": z.string().optional(), "is_glossary": z.boolean().optional() })).optional() }).shape