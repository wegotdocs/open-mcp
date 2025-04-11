import { z } from "zod"

export const inputParams = {
  "client_conn_throttle": z.number().int().gte(0).lte(20).describe("Throttle TCP connections per second for TCP, HTTP, and HTTPS configurations.  Set to `0` (zero) to disable throttling.").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this NodeBalancer was created.").readonly().optional(),
  "hostname": z.string().describe("__Read-only__ This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.").readonly().optional(),
  "id": z.number().int().describe("__Read-only__ This NodeBalancer's unique ID.").readonly().optional(),
  "ipv4": z.string().ip().describe("__Filterable__, __Read-only__ This NodeBalancer's public IPv4 address.").readonly().optional(),
  "ipv6": z.string().ip().nullable().describe("__Read-only__ This NodeBalancer's public IPv6 address.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This NodeBalancer's label. These must be unique on your Account.").optional(),
  "lke_cluster": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `lke_cluster` to the tool, first call the tool `expandSchema` with \"/properties/lke_cluster\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>__Read-only__ This NodeBalancer's related LKE cluster, if any. The value is `null` if this NodeBalancer isn't related to an LKE cluster.</property-description>").optional(),
  "region": z.string().describe("__Filterable__, __Read-only__ The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.").readonly().optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of Tags applied to this object.  Tags are for organizational purposes only.").optional(),
  "transfer": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `transfer` to the tool, first call the tool `expandSchema` with \"/properties/transfer\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>__Read-only__ Information about the amount of transfer this NodeBalancer has had so far this month.</property-description>").optional(),
  "type": z.literal("common").describe("__Read-only__ The type of NodeBalancer.").readonly().optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this NodeBalancer was last updated.").readonly().optional()
}