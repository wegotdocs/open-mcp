import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this inventory item."),
  "device": z.number().int().optional(),
  "parent": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(64).optional(),
  "label": z.string().max(64).describe("Physical label").optional(),
  "status": z.enum(["offline","active","planned","staged","failed","decommissioning"]).describe("* `offline` - Offline\n* `active` - Active\n* `planned` - Planned\n* `staged` - Staged\n* `failed` - Failed\n* `decommissioning` - Decommissioning").optional(),
  "role": z.number().int().nullable().optional(),
  "manufacturer": z.number().int().nullable().optional(),
  "part_id": z.string().max(50).describe("Manufacturer-assigned part identifier").optional(),
  "serial": z.string().max(50).optional(),
  "asset_tag": z.string().max(50).nullable().describe("A unique tag used to identify this item").optional(),
  "discovered": z.boolean().describe("This item was automatically discovered").optional(),
  "description": z.string().max(200).optional(),
  "component_type": z.string().nullable().optional(),
  "component_id": z.number().int().gte(0).lte(9223372036854776000).nullable().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}