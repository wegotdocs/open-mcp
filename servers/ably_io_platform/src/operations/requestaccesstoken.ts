import { z } from "zod"

export const toolName = `requestaccesstoken`
export const toolDescription = `Request an access token`
export const baseUrl = `https://rest.ably.io`
export const path = `/keys/{keyName}/requestToken`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "keyName": z.string().describe("The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.") }).optional(), "body": z.object({ "capability": z.record(z.any()).describe("The [capabilities](https://www.ably.io/documentation/core-features/authentication#capabilities-explained) (i.e. a set of channel names/namespaces and, for each, a set of operations) which should be a subset of the set of capabilities associated with the key specified in keyName."), "clientId": z.string().describe("The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) to be assosciated with the token. Can be set to * to allow for any client ID to be used.").optional(), "keyName": z.string().describe("Name of the key used for the TokenRequest. The keyName comprises of the app ID and key ID on an API Key."), "nonce": z.string().describe("An unquoted, un-escaped random string of at least 16 characters. Used to ensure the Ably TokenRequest cannot be reused."), "timestamp": z.number().int().describe("Time of creation of the Ably TokenRequest.") }).optional() }).shape