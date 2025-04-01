import { z } from "zod"

export const toolName = `get_an_audiobook`
export const toolDescription = `Get an Audiobook`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/audiobooks/{id}`
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
    "q_market"
  ],
  "header": [],
  "path": [
    "p_id"
  ],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "p_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the audiobook.\n"), "q_market": z.string().describe("An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/account/overview/).\n").optional() }).shape