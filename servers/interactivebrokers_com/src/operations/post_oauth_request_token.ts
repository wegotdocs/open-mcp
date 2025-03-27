import { z } from "zod"

export const toolName = `post_oauth_request_token`
export const toolDescription = `Obtain a request token`
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`
export const path = `/oauth/request_token`
export const method = `post`
export const security = [
  {
    "key": "portal",
    "value": "<mcp-env-var>PORTAL</mcp-env-var>",
    "in": "header",
    "envVarName": "PORTAL",
    "schemeType": "apiKey",
    "schemeName": "portal"
  }
]

export const inputParams = z.object({ "body": z.object({ "oauth_callback": z.string().describe("An absolute URL to which IB will redirect the user. This URL is provided by the consumer during registration. This parameter must be set to 'oob'.  ").optional(), "oauth_consumer_key": z.string().describe("The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.").optional(), "oauth_nonce": z.string().describe("A random string uniquely generated for each request.").optional(), "oauth_signature": z.string().describe("The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.").optional(), "oauth_signature_method": z.string().describe("The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.").optional(), "oauth_timestamp": z.string().describe("Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.").optional() }).optional() }).shape