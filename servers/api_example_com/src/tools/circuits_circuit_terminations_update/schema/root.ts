import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this circuit termination."),
  "circuit": z.number().int(),
  "term_side": z.enum(["A","Z"]).describe("* `A` - A\n* `Z` - Z"),
  "termination_type": z.string().nullable().optional(),
  "termination_id": z.number().int().nullable().optional(),
  "port_speed": z.number().int().gte(0).lte(2147483647).nullable().describe("Physical circuit speed").optional(),
  "upstream_speed": z.number().int().gte(0).lte(2147483647).nullable().describe("Upstream speed, if different from port speed").optional(),
  "xconnect_id": z.string().max(50).describe("ID of the local cross-connect").optional(),
  "pp_info": z.string().max(100).describe("Patch panel ID and port number(s)").optional(),
  "description": z.string().max(200).optional(),
  "mark_connected": z.boolean().describe("Treat as if a cable is connected").optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}