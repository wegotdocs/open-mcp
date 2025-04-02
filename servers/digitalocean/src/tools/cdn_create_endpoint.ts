import { z } from "zod"

export const toolName = `cdn_create_endpoint`
export const toolDescription = `Create a New CDN Endpoint`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/cdn/endpoints`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "origin",
    "endpoint",
    "ttl",
    "certificate_id",
    "custom_domain",
    "created_at"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("A unique ID that can be used to identify and reference a CDN endpoint.").readonly().optional(), "origin": z.string().describe("The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space."), "endpoint": z.string().describe("The fully qualified domain name (FQDN) from which the CDN-backed content is served.").readonly().optional(), "ttl": z.union([z.literal(60), z.literal(600), z.literal(3600), z.literal(86400), z.literal(604800)]).describe("The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded."), "certificate_id": z.string().uuid().describe("The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.").optional(), "custom_domain": z.string().describe("The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.").optional(), "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created.").readonly().optional() }).shape