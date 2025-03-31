import { z } from "zod"

export const toolName = `get_users_saved_albums`
export const toolDescription = `Get User's Saved Albums`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/albums`
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

export const inputParams = z.object({ "query": z.object({ "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n"), "market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional() }).optional() }).shape