import { z } from "zod"

export const toolName = `importteams_1`
export const toolDescription = `Import from CSV to create, and update teams.`
export const baseUrl = `/api`
export const path = `/v1/users/import`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "team",
    "dryRun"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "team": z.string().describe("Name of the team to under which the users are imported to"), "dryRun": z.boolean().describe("Dry-run when true is used for validating the CSV without really importing it. (default=true)") }).shape