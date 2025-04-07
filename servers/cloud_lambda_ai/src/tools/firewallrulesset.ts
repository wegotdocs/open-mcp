import { z } from "zod"

export const toolName = `firewallrulesset`
export const toolDescription = `Replace inbound firewall rules`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/firewall-rules`
export const method = `put`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "data"
  ]
}
export const flatMap = {}

export const inputParams = {
  "data": z.array(z.object({ "protocol": z.enum(["tcp","udp","icmp","all"]).describe("The protocol to which the rule applies."), "port_range": z.array(z.number().int().gte(1).lte(65535)).min(2).max(2).describe("An inclusive range of network ports specified as `[min, max]`.\nNot allowed for the `icmp` protocol but required for the others.\n\nTo specify a single port, list it twice (for example, `[22,22]`).").optional(), "source_network": z.string().describe("The set of source IPv4 addresses from which you want to allow inbound\ntraffic. These addresses must be specified in CIDR notation. You can\nspecify individual public IPv4 CIDR blocks such as `1.2.3.4` or\n`1.2.3.4/32`, or you can specify `0.0.0.0/0` to allow access from any\naddress.\n\nThis value is a string consisting of a public IPv4 address optionally\nfollowed by a slash (/) and an integer mask (the network prefix).\nIf no mask is provided, the API assumes `/32` by default."), "description": z.string().min(0).max(128).describe("A human-readable description of the rule.") })).describe("The list of inbound firewall rules.")
}