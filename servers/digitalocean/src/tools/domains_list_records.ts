import { z } from "zod"

export const toolName = `domains_list_records`
export const toolDescription = `List All Domain Records`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/domains/{domain_name}/records`
export const method = `get`
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
  "query": [
    "name",
    "type",
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "domain_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "domain_name": z.string().describe("The name of the domain itself."),
  "name": z.string().describe("A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`.").optional(),
  "type": z.enum(["A","AAAA","CAA","CNAME","MX","NS","SOA","SRV","TXT"]).describe("The type of the DNS record. For example: A, CNAME, TXT, ...").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}