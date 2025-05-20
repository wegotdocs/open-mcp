import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100),
  "type": z.string().min(1).max(50),
  "source_url": z.string().min(1).max(200),
  "enabled": z.boolean().optional(),
  "description": z.string().max(200).optional(),
  "sync_interval": z.union([z.literal(1), z.literal(60), z.literal(720), z.literal(1440), z.literal(10080), z.literal(43200), z.literal(null)]).nullable().describe("* `1` - Minutely\n* `60` - Hourly\n* `720` - 12 hours\n* `1440` - Daily\n* `10080` - Weekly\n* `43200` - 30 days").optional(),
  "parameters": z.any().nullable().optional(),
  "ignore_rules": z.string().describe("Patterns (one per line) matching files to ignore when syncing").optional(),
  "comments": z.string().optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}