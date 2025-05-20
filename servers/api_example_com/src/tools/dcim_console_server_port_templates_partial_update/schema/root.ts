import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this console server port template."),
  "device_type": z.number().int().nullable().optional(),
  "module_type": z.number().int().nullable().optional(),
  "name": z.string().min(1).max(64).describe("{module} is accepted as a substitution for the module bay position when attached to a module type.").optional(),
  "label": z.string().max(64).describe("Physical label").optional(),
  "type": z.union([z.literal("de-9"), z.literal("db-25"), z.literal("rj-11"), z.literal("rj-12"), z.literal("rj-45"), z.literal("mini-din-8"), z.literal("usb-a"), z.literal("usb-b"), z.literal("usb-c"), z.literal("usb-mini-a"), z.literal("usb-mini-b"), z.literal("usb-micro-a"), z.literal("usb-micro-b"), z.literal("usb-micro-ab"), z.literal("other"), z.literal(""), z.literal(null)]).nullable().describe("* `de-9` - DE-9\n* `db-25` - DB-25\n* `rj-11` - RJ-11\n* `rj-12` - RJ-12\n* `rj-45` - RJ-45\n* `mini-din-8` - Mini-DIN 8\n* `usb-a` - USB Type A\n* `usb-b` - USB Type B\n* `usb-c` - USB Type C\n* `usb-mini-a` - USB Mini A\n* `usb-mini-b` - USB Mini B\n* `usb-micro-a` - USB Micro A\n* `usb-micro-b` - USB Micro B\n* `usb-micro-ab` - USB Micro AB\n* `other` - Other").optional(),
  "description": z.string().max(200).optional()
}