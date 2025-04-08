import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityactions_create`
export const toolDescription = `CreateSecurityAction creates a SecurityAction.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
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
    "securityActionId"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "description",
    "name",
    "conditionConfig",
    "updateTime",
    "expireTime",
    "ttl",
    "createTime",
    "state",
    "flag",
    "deny",
    "allow",
    "apiProxies"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityActionId": z.string().optional(),
  "description": z.string().describe("Optional. An optional user provided description of the SecurityAction.").optional(),
  "name": z.string().describe("Immutable. This field is ignored during creation as per AIP-133. Please set the `security_action_id` field in the CreateSecurityActionRequest when creating a new SecurityAction. Format: organizations/{org}/environments/{env}/securityActions/{security_action}").optional(),
  "conditionConfig": z.object({ "asns": z.array(z.string()).describe("Optional. A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.").optional(), "accessTokens": z.array(z.string()).describe("Optional. A list of access_tokens. Limit 1000 per action.").optional(), "developers": z.array(z.string()).describe("Optional. A list of developers. Limit 1000 per action.").optional(), "userAgents": z.array(z.string()).describe("Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action.").optional(), "apiProducts": z.array(z.string()).describe("Optional. A list of API Products. Limit 1000 per action.").optional(), "ipAddressRanges": z.array(z.string()).describe("Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.").optional(), "regionCodes": z.array(z.string()).describe("Optional. A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.").optional(), "developerApps": z.array(z.string()).describe("Optional. A list of developer apps. Limit 1000 per action.").optional(), "apiKeys": z.array(z.string()).describe("Optional. A list of API keys. Limit 1000 per action.").optional(), "botReasons": z.array(z.string()).describe("Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper, Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.").optional(), "httpMethods": z.array(z.string()).describe("Optional. Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE methods. Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.").optional() }).describe("Required. A valid SecurityAction must contain at least one condition.").optional(),
  "updateTime": z.string().describe("Output only. The update time for this SecurityAction. This reflects when this SecurityAction changed states.").readonly().optional(),
  "expireTime": z.string().describe("The expiration for this SecurityAction.").optional(),
  "ttl": z.string().describe("Input only. The TTL for this SecurityAction.").optional(),
  "createTime": z.string().describe("Output only. The create time for this SecurityAction.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","ENABLED","DISABLED"]).describe("Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.").optional(),
  "flag": z.object({ "headers": z.array(z.object({ "value": z.string().describe("The header value to be sent to the target.").optional(), "name": z.string().describe("The header name to be sent to the target.").optional() }).describe("An HTTP header.")).describe("Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per SecurityAction. At least one is mandatory.").optional() }).describe("Flag a request through if it matches this SecurityAction.").optional(),
  "deny": z.object({ "responseCode": z.number().int().describe("Optional. The HTTP response code if the Action = DENY.").optional() }).describe("Deny a request through if it matches this SecurityAction.").optional(),
  "allow": z.object({}).describe("Allow a request through if it matches this SecurityAction.").optional(),
  "apiProxies": z.array(z.string()).describe("Optional. If unset, this would apply to all proxies in the environment. If set, this action is enforced only if at least one proxy in the repeated list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions. There can be at most 100 enabled actions with proxies set in an env. Several other restrictions apply on conditions and are detailed later.").optional()
}