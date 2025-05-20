import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this FHRP group."),
  "name": z.string().max(100).optional(),
  "protocol": z.enum(["vrrp2","vrrp3","carp","clusterxl","hsrp","glbp","other"]).describe("* `vrrp2` - VRRPv2\n* `vrrp3` - VRRPv3\n* `carp` - CARP\n* `clusterxl` - ClusterXL\n* `hsrp` - HSRP\n* `glbp` - GLBP\n* `other` - Other"),
  "group_id": z.number().int().gte(0).lte(32767),
  "auth_type": z.union([z.literal("plaintext"), z.literal("md5"), z.literal(""), z.literal(null)]).nullable().describe("* `plaintext` - Plaintext\n* `md5` - MD5").optional(),
  "auth_key": z.string().max(255).optional(),
  "description": z.string().max(200).optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}