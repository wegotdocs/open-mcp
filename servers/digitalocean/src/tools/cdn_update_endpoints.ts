import { z } from "zod"

export const toolName = `cdn_update_endpoints`
export const toolDescription = `Update a CDN Endpoint`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/cdn/endpoints/{cdn_id}`
export const method = `put`
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
  "path": [
    "cdn_id"
  ],
  "cookie": [],
  "body": [
    "ttl",
    "certificate_id",
    "custom_domain"
  ]
}
export const flatMap = {}

export const inputParams = {
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint."),
  "ttl": z.union([z.literal(60), z.literal(600), z.literal(3600), z.literal(86400), z.literal(604800)]).describe("The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.").optional(),
  "certificate_id": z.string().uuid().describe("The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.").optional(),
  "custom_domain": z.string().describe("The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.").optional()
}