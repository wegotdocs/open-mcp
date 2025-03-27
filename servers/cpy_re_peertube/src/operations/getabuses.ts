import { z } from "zod"

export const toolName = `getabuses`
export const toolDescription = `List abuses`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/abuses`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "id": z.number().int().describe("only list the report with this id").optional(), "predefinedReason": z.array(z.enum(["violentOrAbusive","hatefulOrAbusive","spamOrMisleading","privacy","rights","serverRules","thumbnails","captions"])).max(8).describe("Reason categories that help triage reports").optional(), "search": z.string().describe("plain search that will match with video titles, reporter names and more").optional(), "state": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)").optional(), "searchReporter": z.string().describe("only list reports of a specific reporter").optional(), "searchReportee": z.string().describe("only list reports of a specific reportee").optional(), "searchVideo": z.string().describe("only list reports of a specific video").optional(), "searchVideoChannel": z.string().describe("only list reports of a specific video channel").optional(), "videoIs": z.enum(["deleted","blacklisted"]).describe("only list deleted or blocklisted videos").optional(), "filter": z.enum(["video","comment","account"]).describe("only list account, comment or video reports").optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.enum(["-id","-createdAt","-state"]).describe("Sort abuses by criteria").optional() }).optional() }).shape