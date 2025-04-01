import { z } from "zod"

export const toolName = `get_an_artists_albums`
export const toolDescription = `Get Artist's Albums`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/artists/{id}/albums`
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
export const keys = {
  "query": [
    "q_include_groups",
    "q_market",
    "q_limit",
    "q_offset"
  ],
  "header": [],
  "path": [
    "p_id"
  ],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "p_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n"), "q_include_groups": z.string().describe("A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.\n").optional(), "q_market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional(), "q_limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "q_offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n") }).shape