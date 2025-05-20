import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this prefix."),
  "prefix": z.string().min(1),
  "vrf": z.number().int().nullable().optional(),
  "scope_type": z.string().nullable().optional(),
  "scope_id": z.number().int().nullable().optional(),
  "tenant": z.number().int().nullable().optional(),
  "vlan": z.number().int().nullable().optional(),
  "status": z.enum(["container","active","reserved","deprecated"]).describe("Operational status of this prefix\n\n* `container` - Container\n* `active` - Active\n* `reserved` - Reserved\n* `deprecated` - Deprecated").optional(),
  "role": z.number().int().nullable().optional(),
  "is_pool": z.boolean().describe("All IP addresses within this prefix are considered usable").optional(),
  "mark_utilized": z.boolean().describe("Treat as fully utilized").optional(),
  "description": z.string().max(200).optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}