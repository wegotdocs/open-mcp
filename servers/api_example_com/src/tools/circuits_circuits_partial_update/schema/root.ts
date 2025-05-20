import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this circuit."),
  "cid": z.string().min(1).max(100).describe("Unique circuit ID").optional(),
  "provider": z.number().int().optional(),
  "provider_account": z.number().int().nullable().optional(),
  "type": z.number().int().optional(),
  "status": z.enum(["planned","provisioning","active","offline","deprovisioning","decommissioned"]).describe("* `planned` - Planned\n* `provisioning` - Provisioning\n* `active` - Active\n* `offline` - Offline\n* `deprovisioning` - Deprovisioning\n* `decommissioned` - Decommissioned").optional(),
  "tenant": z.number().int().nullable().optional(),
  "install_date": z.string().date().nullable().optional(),
  "termination_date": z.string().date().nullable().optional(),
  "commit_rate": z.number().int().gte(0).lte(2147483647).nullable().describe("Committed rate").optional(),
  "description": z.string().max(200).optional(),
  "distance": z.number().gt(-1000000).lt(1000000).nullable().optional(),
  "distance_unit": z.union([z.literal("km"), z.literal("m"), z.literal("mi"), z.literal("ft"), z.literal(""), z.literal(null)]).nullable().describe("* `km` - Kilometers\n* `m` - Meters\n* `mi` - Miles\n* `ft` - Feet").optional(),
  "comments": z.string().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "assignments": z.array(z.object({ "group": z.number().int(), "priority": z.enum(["primary","secondary","tertiary","inactive",""]).describe("* `primary` - Primary\n* `secondary` - Secondary\n* `tertiary` - Tertiary\n* `inactive` - Inactive").optional() }).describe("Base serializer for group assignments under CircuitSerializer.")).optional()
}