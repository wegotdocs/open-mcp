import { z } from "zod"

export const toolName = `repairglossaryterms`
export const toolDescription = `Run process repair GlossaryTerms`
export const baseUrl = `/api`
export const path = `/v1/admin/repair/glossaryterms`
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