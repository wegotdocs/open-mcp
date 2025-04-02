import { z } from "zod"

export const toolName = `domains_update_record`
export const toolDescription = `Update a Domain Record`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/domains/{domain_name}/records/{domain_record_id}`
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
    "domain_name",
    "domain_record_id"
  ],
  "cookie": [],
  "body": [
    "id",
    "type",
    "name",
    "data",
    "priority",
    "port",
    "ttl",
    "weight",
    "flags",
    "tag"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "domain_name": z.string().describe("The name of the domain itself."), "domain_record_id": z.number().int().describe("The unique identifier of the domain record."), "id": z.number().int().describe("A unique identifier for each domain record.").readonly().optional(), "type": z.string().describe("The type of the DNS record. For example: A, CNAME, TXT, ..."), "name": z.string().describe("The host name, alias, or service being defined by the record.").optional(), "data": z.string().describe("Variable data depending on record type. For example, the \"data\" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.").optional(), "priority": z.number().int().nullable().describe("The priority for SRV and MX records.").optional(), "port": z.number().int().nullable().describe("The port for SRV records.").optional(), "ttl": z.number().int().describe("This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.").optional(), "weight": z.number().int().nullable().describe("The weight for SRV records.").optional(), "flags": z.number().int().nullable().describe("An unsigned integer between 0-255 used for CAA records.").optional(), "tag": z.string().nullable().describe("The parameter tag for CAA records. Valid values are \"issue\", \"issuewild\", or \"iodef\"").optional() }).shape