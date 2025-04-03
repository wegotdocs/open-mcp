import { z } from "zod"

export const toolName = `importglossary`
export const toolDescription = `Import glossary terms from CSV to create, and update glossary terms`
export const baseUrl = `/api`
export const path = `/v1/glossaries/name/{name}/import`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "dryRun"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the glossary"), "dryRun": z.boolean().describe("Dry-run when true is used for validating the CSV without really importing it. (default=true)") }).shape