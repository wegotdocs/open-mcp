import { z } from "zod"

export const inputParamsSchema = {
  "manufacturer": z.number().int(),
  "model": z.string().min(1).max(100),
  "slug": z.string().regex(new RegExp("^[-a-zA-Z0-9_]+$")).min(1).max(100),
  "description": z.string().max(200).optional(),
  "form_factor": z.enum(["2-post-frame","4-post-frame","4-post-cabinet","wall-frame","wall-frame-vertical","wall-cabinet","wall-cabinet-vertical"]).describe("* `2-post-frame` - 2-post frame\n* `4-post-frame` - 4-post frame\n* `4-post-cabinet` - 4-post cabinet\n* `wall-frame` - Wall-mounted frame\n* `wall-frame-vertical` - Wall-mounted frame (vertical)\n* `wall-cabinet` - Wall-mounted cabinet\n* `wall-cabinet-vertical` - Wall-mounted cabinet (vertical)"),
  "width": z.union([z.literal(10), z.literal(19), z.literal(21), z.literal(23)]).describe("Rail-to-rail width\n\n* `10` - 10 inches\n* `19` - 19 inches\n* `21` - 21 inches\n* `23` - 23 inches").optional(),
  "u_height": z.number().int().gte(1).lte(100).describe("Height in rack units").optional(),
  "starting_unit": z.number().int().gte(1).lte(32767).describe("Starting unit for rack").optional(),
  "desc_units": z.boolean().describe("Units are numbered top-to-bottom").optional(),
  "outer_width": z.number().int().gte(0).lte(32767).nullable().describe("Outer dimension of rack (width)").optional(),
  "outer_height": z.number().int().gte(0).lte(32767).nullable().describe("Outer dimension of rack (height)").optional(),
  "outer_depth": z.number().int().gte(0).lte(32767).nullable().describe("Outer dimension of rack (depth)").optional(),
  "outer_unit": z.union([z.literal("mm"), z.literal("in"), z.literal(""), z.literal(null)]).nullable().describe("* `mm` - Millimeters\n* `in` - Inches").optional(),
  "weight": z.number().gt(-1000000).lt(1000000).nullable().optional(),
  "max_weight": z.number().int().gte(0).lte(2147483647).nullable().describe("Maximum load capacity for the rack").optional(),
  "weight_unit": z.union([z.literal("kg"), z.literal("g"), z.literal("lb"), z.literal("oz"), z.literal(""), z.literal(null)]).nullable().describe("* `kg` - Kilograms\n* `g` - Grams\n* `lb` - Pounds\n* `oz` - Ounces").optional(),
  "mounting_depth": z.number().int().gte(0).lte(32767).nullable().describe("Maximum depth of a mounted device, in millimeters. For four-post racks, this is the distance between the front and rear rails.").optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}