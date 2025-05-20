import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this VLAN."),
  "site": z.number().int().nullable().optional(),
  "group": z.number().int().nullable().optional(),
  "vid": z.number().int().gte(1).lte(4094).describe("Numeric VLAN ID (1-4094)"),
  "name": z.string().min(1).max(64),
  "tenant": z.number().int().nullable().optional(),
  "status": z.enum(["active","reserved","deprecated"]).describe("Operational status of this VLAN\n\n* `active` - Active\n* `reserved` - Reserved\n* `deprecated` - Deprecated").optional(),
  "role": z.number().int().nullable().optional(),
  "description": z.string().max(200).optional(),
  "qinq_role": z.union([z.literal("svlan"), z.literal("cvlan"), z.literal(""), z.literal(null)]).nullable().describe("Customer/service VLAN designation (for Q-in-Q/IEEE 802.1ad)\n\n* `svlan` - Service\n* `cvlan` - Customer").optional(),
  "qinq_svlan": z.number().int().nullable().optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}