import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100).describe("Full name of the site"),
  "slug": z.string().regex(new RegExp("^[-a-zA-Z0-9_]+$")).min(1).max(100),
  "status": z.enum(["planned","staging","active","decommissioning","retired"]).describe("* `planned` - Planned\n* `staging` - Staging\n* `active` - Active\n* `decommissioning` - Decommissioning\n* `retired` - Retired").optional(),
  "region": z.number().int().nullable().optional(),
  "group": z.number().int().nullable().optional(),
  "tenant": z.number().int().nullable().optional(),
  "facility": z.string().max(50).describe("Local facility ID or description").optional(),
  "time_zone": z.string().min(1).nullable().optional(),
  "description": z.string().max(200).optional(),
  "physical_address": z.string().max(200).describe("Physical location of the building").optional(),
  "shipping_address": z.string().max(200).describe("If different from the physical address").optional(),
  "latitude": z.number().gt(-100).lt(100).nullable().describe("GPS coordinate in decimal format (xx.yyyyyy)").optional(),
  "longitude": z.number().gt(-1000).lt(1000).nullable().describe("GPS coordinate in decimal format (xx.yyyyyy)").optional(),
  "comments": z.string().optional(),
  "asns": z.array(z.number().int()).optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}