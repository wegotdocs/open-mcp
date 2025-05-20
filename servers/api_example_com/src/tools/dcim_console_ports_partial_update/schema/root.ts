import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this console port."),
  "device": z.number().int().optional(),
  "module": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(64).optional(),
  "label": z.string().max(64).describe("Physical label").optional(),
  "type": z.union([z.literal("de-9"), z.literal("db-25"), z.literal("rj-11"), z.literal("rj-12"), z.literal("rj-45"), z.literal("mini-din-8"), z.literal("usb-a"), z.literal("usb-b"), z.literal("usb-c"), z.literal("usb-mini-a"), z.literal("usb-mini-b"), z.literal("usb-micro-a"), z.literal("usb-micro-b"), z.literal("usb-micro-ab"), z.literal("other"), z.literal(""), z.literal(null)]).nullable().describe("Physical port type\n\n* `de-9` - DE-9\n* `db-25` - DB-25\n* `rj-11` - RJ-11\n* `rj-12` - RJ-12\n* `rj-45` - RJ-45\n* `mini-din-8` - Mini-DIN 8\n* `usb-a` - USB Type A\n* `usb-b` - USB Type B\n* `usb-c` - USB Type C\n* `usb-mini-a` - USB Mini A\n* `usb-mini-b` - USB Mini B\n* `usb-micro-a` - USB Micro A\n* `usb-micro-b` - USB Micro B\n* `usb-micro-ab` - USB Micro AB\n* `other` - Other").optional(),
  "speed": z.union([z.literal(1200), z.literal(2400), z.literal(4800), z.literal(9600), z.literal(19200), z.literal(38400), z.literal(57600), z.literal(115200), z.literal(null)]).nullable().describe("Port speed in bits per second\n\n* `1200` - 1200 bps\n* `2400` - 2400 bps\n* `4800` - 4800 bps\n* `9600` - 9600 bps\n* `19200` - 19.2 kbps\n* `38400` - 38.4 kbps\n* `57600` - 57.6 kbps\n* `115200` - 115.2 kbps").optional(),
  "description": z.string().max(200).optional(),
  "mark_connected": z.boolean().describe("Treat as if a cable is connected").optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}