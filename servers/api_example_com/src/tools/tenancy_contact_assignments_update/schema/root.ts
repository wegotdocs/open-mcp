import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this contact assignment."),
  "object_type": z.string(),
  "object_id": z.number().int().gte(0).lte(9223372036854776000),
  "contact": z.number().int(),
  "role": z.number().int().nullable().optional(),
  "priority": z.union([z.literal("primary"), z.literal("secondary"), z.literal("tertiary"), z.literal("inactive"), z.literal(""), z.literal(null)]).nullable().describe("* `primary` - Primary\n* `secondary` - Secondary\n* `tertiary` - Tertiary\n* `inactive` - Inactive").optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}