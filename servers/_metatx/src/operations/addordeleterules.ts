import { z } from "zod"

export const toolName = `addordeleterules`
export const toolDescription = `Add/Delete rules`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/search/stream/rules`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "dry_run": z.boolean().describe("Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.").optional() }).optional(), "body": z.object({ "add": z.array(z.object({ "tag": z.string().describe("A tag meant for the labeling of user provided rules.").optional(), "value": z.string().describe("The filterlang value of the rule.") }).describe("A user-provided stream filtering rule.")) }).describe("A request to add a user-specified stream filtering rule.").optional() }).shape