import { z } from "zod"

export const toolName = `save_episodes_user`
export const toolDescription = `Save Episodes for Current User`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/episodes`
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
    "ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "b_ids"
  ]
}
export const flatMap = {
  "b_ids": "ids"
}

export const inputParams = {
  "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.\n"),
  "b_ids": z.array(z.string()).describe("A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n")
}