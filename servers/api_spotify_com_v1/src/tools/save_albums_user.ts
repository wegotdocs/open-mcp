import { z } from "zod"

export const toolName = `save_albums_user`
export const toolDescription = `Save Albums for Current User`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/albums`
export const method = `put`
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
    "q_ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "b_ids"
  ]
}
export const flatMap = {
  "q_ids": "ids",
  "b_ids": "ids"
}

export const inputParams = z.object({ "q_ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n"), "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n").optional() }).shape