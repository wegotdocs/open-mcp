import { z } from "zod"

export const toolName = `attachments_create`
export const toolDescription = `Create a new partner attachment`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/partner_network_connect/attachments`
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
    "name",
    "connection_bandwidth_in_mbps",
    "region",
    "naas_provider",
    "vpc_ids",
    "parent_uuid",
    "bgp"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods."), "connection_bandwidth_in_mbps": z.union([z.literal(1000), z.literal(2000), z.literal(5000), z.literal(10000)]).describe("Bandwidth (in Mbps) of the connection."), "region": z.string(), "naas_provider": z.string(), "vpc_ids": z.array(z.string()).min(1).describe("An array of VPCs IDs."), "parent_uuid": z.string().describe("Optional associated partner attachment UUID").optional(), "bgp": z.object({ "local_router_ip": z.string().describe("IP of the DO router"), "peer_router_ip": z.string().describe("IP of the Naas Provider router"), "peer_router_asn": z.number().int().describe("ASN of the peer router"), "auth_key": z.string().describe("BGP Auth Key") }).describe("Optional BGP configurations").optional() }).shape