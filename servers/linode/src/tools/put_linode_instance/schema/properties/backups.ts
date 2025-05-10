import { z } from "zod"

export const inputParams = {
  "available": z.boolean().describe("__Read-only__ Whether Backups for this Linode are available for restoration.\n\nBackups undergoing maintenance are not available for restoration.").readonly().optional(),
  "enabled": z.boolean().describe("__Read-only__ If this Linode has the Backup service enabled. To enable backups, run [Enable backups](https://techdocs.akamai.com/linode-api/reference/post-enable-backups).").readonly().optional(),
  "last_successful": z.string().datetime({ offset: true }).describe("__Read-only__ The last successful backup time. Displayed as `null` if there was no previous backup.").readonly().optional(),
  "schedule": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `schedule` to the tool, first call the tool `expandSchema` with \"/properties/backups/properties/schedule\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}