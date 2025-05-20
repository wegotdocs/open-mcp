import { z } from "zod"

export const inputParamsSchema = {
  "profile": z.number().int().nullable().optional(),
  "manufacturer": z.number().int(),
  "model": z.string().min(1).max(100),
  "part_number": z.string().max(50).describe("Discrete part number (optional)").optional(),
  "airflow": z.union([z.literal("front-to-rear"), z.literal("rear-to-front"), z.literal("left-to-right"), z.literal("right-to-left"), z.literal("side-to-rear"), z.literal("passive"), z.literal(""), z.literal(null)]).nullable().describe("* `front-to-rear` - Front to rear\n* `rear-to-front` - Rear to front\n* `left-to-right` - Left to right\n* `right-to-left` - Right to left\n* `side-to-rear` - Side to rear\n* `passive` - Passive").optional(),
  "weight": z.number().gt(-1000000).lt(1000000).nullable().optional(),
  "weight_unit": z.union([z.literal("kg"), z.literal("g"), z.literal("lb"), z.literal("oz"), z.literal(""), z.literal(null)]).nullable().describe("* `kg` - Kilograms\n* `g` - Grams\n* `lb` - Pounds\n* `oz` - Ounces").optional(),
  "description": z.string().max(200).optional(),
  "attributes": z.any().nullable().optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}