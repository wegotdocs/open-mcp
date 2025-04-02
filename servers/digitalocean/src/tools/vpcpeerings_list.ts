import { z } from "zod"

export const toolName = `vpcpeerings_list`
export const toolDescription = `List All VPC Peerings`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/vpc_peerings`
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
    "per_page",
    "page",
    "region"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional() }).shape