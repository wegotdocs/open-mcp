import { z } from "zod"

export const toolName = `importteams`
export const toolDescription = `Import from CSV to create, and update teams.`
export const baseUrl = `/api`
export const path = `/v1/teams/name/{name}/import`
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

export const inputParams = z.object({ "name": z.string(), "dryRun": z.boolean().describe("Dry-run when true is used for validating the CSV without really importing it. (default=true)") }).shape