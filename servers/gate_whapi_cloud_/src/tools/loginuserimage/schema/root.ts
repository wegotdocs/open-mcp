import { z } from "zod"

export const inputParamsSchema = {
  "wakeup": z.boolean().describe("If set to false, the channel will not launch").optional(),
  "size": z.number().describe("Size of QR-code").optional(),
  "width": z.number().describe("Width of result image").optional(),
  "height": z.number().describe("Height of result image").optional(),
  "color_light": z.string().describe("Background color").optional(),
  "color_dark": z.string().describe("Color of code").optional()
}