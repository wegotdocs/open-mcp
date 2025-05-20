import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this IP address."),
  "address": z.string().min(1),
  "vrf": z.number().int().nullable().optional(),
  "tenant": z.number().int().nullable().optional(),
  "status": z.enum(["active","reserved","deprecated","dhcp","slaac"]).describe("The operational status of this IP\n\n* `active` - Active\n* `reserved` - Reserved\n* `deprecated` - Deprecated\n* `dhcp` - DHCP\n* `slaac` - SLAAC").optional(),
  "role": z.union([z.literal("loopback"), z.literal("secondary"), z.literal("anycast"), z.literal("vip"), z.literal("vrrp"), z.literal("hsrp"), z.literal("glbp"), z.literal("carp"), z.literal(""), z.literal(null)]).nullable().describe("The functional role of this IP\n\n* `loopback` - Loopback\n* `secondary` - Secondary\n* `anycast` - Anycast\n* `vip` - VIP\n* `vrrp` - VRRP\n* `hsrp` - HSRP\n* `glbp` - GLBP\n* `carp` - CARP").optional(),
  "assigned_object_type": z.string().nullable().optional(),
  "assigned_object_id": z.number().int().gte(0).lte(9223372036854776000).nullable().optional(),
  "nat_inside": z.number().int().nullable().describe("The IP for which this address is the \"outside\" IP").optional(),
  "dns_name": z.string().regex(new RegExp("^([0-9A-Za-z_-]+|\\*)(\\.[0-9A-Za-z_-]+)*\\.?$")).max(255).describe("Hostname or FQDN (not case-sensitive)").optional(),
  "description": z.string().max(200).optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}