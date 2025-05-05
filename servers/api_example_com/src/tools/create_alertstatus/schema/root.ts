import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().min(1).max(64).describe("Name of the status"),
  "stage": z.enum(["New","InProgress","Closed","Imported"]).describe("Tell which alert stage (~=category) this status will belong to"),
  "order": z.number().int().describe("Used to order the values in the ui").optional(),
  "description": z.string().max(1048576).optional(),
  "colour": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,6}|$")).describe("Optional color to use in the ui").optional(),
  "hidden": z.boolean().optional()
}