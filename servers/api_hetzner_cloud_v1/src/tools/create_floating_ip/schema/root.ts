import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().nullable().describe("Description of the Resource.").optional(),
  "home_location": z.string().describe("Home [Location](#locations) for the [Floating IP](#floating-ips).\n\nEither the ID or the name of the [Location](#locations).\n\nOnly optional if no [Server](#servers) is provided. Routing is optimized for this [Locations](#locations).\n").optional(),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n</property-description>").optional(),
  "name": z.string().describe("Name of the Resource. Must be unique per Project.").optional(),
  "server": z.number().int().nullable().describe("[Server](#servers) the [Floating IP](#floating-ips) is assigned to.\n\n`null` if not assigned.\n").optional(),
  "type": z.enum(["ipv4","ipv6"]).describe("Floating IP type | Type of [Floating IP](#floating-ips) the price is for. | Type of [Primary IP](#primary-ips) the price is for. | [Primary IP](#primary-ips) type.")
}