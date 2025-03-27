import { z } from "zod"

export const toolName = `searchperpackage`
export const toolDescription = `Like /search, but aggregates per package`
export const baseUrl = `https://codesearch.debian.net/api/v1`
export const path = `/searchperpackage`
export const method = `get`
export const security = [
  {
    "key": "x-dcs-apikey",
    "value": "<mcp-env-var>X_DCS_APIKEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_DCS_APIKEY",
    "schemeType": "apiKey",
    "schemeName": "x-dcs-apikey"
  }
]

export const inputParams = z.object({ "query": z.object({ "query": z.string().describe("The search query, for example `who knows...` (literal) or `who knows\\.\\.\\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt"), "match_mode": z.enum(["literal","regexp"]).describe("Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.") }).optional() }).shape