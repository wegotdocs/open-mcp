import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this rack."),
  "exclude": z.number().int().optional(),
  "expand_devices": z.boolean().optional(),
  "face": z.enum(["front","rear"]).describe("* `front` - Front\n* `rear` - Rear").optional(),
  "include_images": z.boolean().optional(),
  "legend_width": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "margin_width": z.number().int().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "q": z.string().min(1).optional(),
  "render": z.enum(["json","svg"]).describe("* `json` - json\n* `svg` - svg").optional(),
  "unit_height": z.number().int().optional(),
  "unit_width": z.number().int().optional()
}