import { z } from "zod"

export const toolName = `apigee_organizations_instances_nataddresses_create`
export const toolDescription = `Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
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
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "instancesId"
  ],
  "cookie": [],
  "body": [
    "ipAddress",
    "state",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "ipAddress": z.string().describe("Output only. The static IPV4 address.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","RESERVED","ACTIVE","DELETING"]).describe("Output only. State of the nat address.").readonly().optional(),
  "name": z.string().describe("Required. Resource ID of the NAT address.").optional()
}