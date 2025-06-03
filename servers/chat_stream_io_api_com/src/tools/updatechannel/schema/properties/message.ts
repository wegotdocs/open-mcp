import { z } from "zod"

export const inputParamsSchema = {
  "attachments": z.array(z.object({ "actions": z.array(z.object({ "name": z.string(), "style": z.string().optional(), "text": z.string(), "type": z.string(), "value": z.string().optional() }).nullable()).optional(), "asset_url": z.string().optional(), "author_icon": z.string().optional(), "author_link": z.string().optional(), "author_name": z.string().optional(), "color": z.string().optional(), "custom": z.record(z.any()), "fallback": z.string().optional(), "fields": z.array(z.object({ "short": z.boolean(), "title": z.string(), "value": z.string() }).nullable()).optional(), "footer": z.string().optional(), "footer_icon": z.string().optional(), "giphy": z.object({ "fixed_height": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "fixed_height_downsampled": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "fixed_height_still": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "fixed_width": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "fixed_width_downsampled": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "fixed_width_still": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }), "original": z.object({ "frames": z.string(), "height": z.string(), "size": z.string(), "url": z.string(), "width": z.string() }) }).optional(), "image_url": z.string().optional(), "latitude": z.number().describe("The latitude of the location").optional(), "longitude": z.number().describe("The longitude of the location").optional(), "og_scrape_url": z.string().optional(), "original_height": z.number().int().optional(), "original_width": z.number().int().optional(), "pretext": z.string().optional(), "stopped_sharing": z.boolean().describe("If the user has stopped sharing their location").optional(), "text": z.string().optional(), "thumb_url": z.string().optional(), "title": z.string().optional(), "title_link": z.string().optional(), "type": z.string().describe("Attachment type (e.g. image, video, url)").optional() }).nullable().describe("An attachment is a message object that represents a file uploaded by a user.")).optional(),
  "custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom` to the tool, first call the tool `expandSchema` with \"/properties/message/properties/custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "html": z.string().optional(),
  "id": z.string().max(255).optional(),
  "mentioned_users": z.array(z.string()).optional(),
  "mml": z.string().optional(),
  "parent_id": z.string().optional(),
  "pin_expires": z.string().datetime({ offset: true }).optional(),
  "pinned": z.boolean().optional(),
  "pinned_at": z.string().datetime({ offset: true }).nullable().optional(),
  "poll_id": z.string().optional(),
  "quoted_message_id": z.string().optional(),
  "restricted_visibility": z.array(z.string()).optional(),
  "show_in_channel": z.boolean().optional(),
  "silent": z.boolean().optional(),
  "text": z.string().optional(),
  "type": z.enum(["''","regular","system"]).optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/message/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}