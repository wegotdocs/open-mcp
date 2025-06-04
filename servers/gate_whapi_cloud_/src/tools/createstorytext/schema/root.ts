import { z } from "zod"

export const inputParamsSchema = {
  "contacts": z.array(z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")).describe("List of contacts to send the story to").optional(),
  "exclude_contacts": z.array(z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")).describe("List of contacts to exclude").optional(),
  "caption": z.string().describe("Optional. Text caption under the media."),
  "background_color": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,8}$")).describe("Background color of the story (ARGB)").optional(),
  "caption_color": z.string().regex(new RegExp("^#[0-9a-fA-F]{6,8}$")).describe("Caption color of the story (ARGB)").optional(),
  "font_type": z.enum(["SYSTEM","SYSTEM_TEXT","FB_SCRIPT","SYSTEM_BOLD","MORNINGBREEZE_REGULAR","CALISTOGA_REGULAR","EXO2_EXTRABOLD","COURIERPRIME_BOLD"]).describe("Font style of the story").optional()
}