import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "name": z.string().describe("Attribute name.").optional(),
  "slug": z.string().describe("An alphanumeric identifier for the resource unique to its type.").optional(),
  "type": z.literal("select").describe("Type of attribute.").optional(),
  "order_by": z.enum(["menu_order","name","name_num","id"]).describe("Default sort order.").optional(),
  "has_archives": z.boolean().describe("Enable/Disable attribute archives.").optional()
}