import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The ID of the attachment."),
  "redirect": z.boolean().describe("Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment.").optional(),
  "fallbackToDefault": z.boolean().describe("Whether a default thumbnail is returned when the requested thumbnail is not found.").optional(),
  "width": z.number().int().describe("The maximum width to scale the thumbnail to.").optional(),
  "height": z.number().int().describe("The maximum height to scale the thumbnail to.").optional()
}