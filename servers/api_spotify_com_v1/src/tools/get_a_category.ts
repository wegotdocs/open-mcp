import { z } from "zod"

export const toolName = `get_a_category`
export const toolDescription = `Get Single Browse Category`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/browse/categories/{category_id}`
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
    "q_locale"
  ],
  "header": [],
  "path": [
    "p_category_id"
  ],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "p_category_id": z.string().describe("The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n"), "q_locale": z.string().describe("The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n").optional() }).shape