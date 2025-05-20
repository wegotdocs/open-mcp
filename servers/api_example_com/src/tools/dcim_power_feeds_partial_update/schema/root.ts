import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this power feed."),
  "power_panel": z.number().int().optional(),
  "rack": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(100).optional(),
  "status": z.enum(["offline","active","planned","failed"]).describe("* `offline` - Offline\n* `active` - Active\n* `planned` - Planned\n* `failed` - Failed").optional(),
  "type": z.enum(["primary","redundant"]).describe("* `primary` - Primary\n* `redundant` - Redundant").optional(),
  "supply": z.enum(["ac","dc"]).describe("* `ac` - AC\n* `dc` - DC").optional(),
  "phase": z.enum(["single-phase","three-phase"]).describe("* `single-phase` - Single phase\n* `three-phase` - Three-phase").optional(),
  "voltage": z.number().int().gte(-32768).lte(32767).optional(),
  "amperage": z.number().int().gte(1).lte(32767).optional(),
  "max_utilization": z.number().int().gte(1).lte(100).describe("Maximum permissible draw (percentage)").optional(),
  "mark_connected": z.boolean().describe("Treat as if a cable is connected").optional(),
  "description": z.string().max(200).optional(),
  "tenant": z.number().int().nullable().optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}