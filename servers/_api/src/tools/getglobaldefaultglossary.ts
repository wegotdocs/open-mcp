import { z } from "zod"

export const toolName = `getglobaldefaultglossary`
export const toolDescription = `Get global default glossary`
export const baseUrl = `/api`
export const path = `/v1/glossaries/globalDefaultGlossary`
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