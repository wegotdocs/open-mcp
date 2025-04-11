import { z } from "zod"

export const inputParams = {
  "config_id": z.number().int().nullable().describe("The Linode Config ID to reboot into.  If `null` or omitted, the last booted config will be used.  If there was no last booted config and this Linode only has one config, it will be used.  If a config cannot be determined, an error will be returned.").optional()
}