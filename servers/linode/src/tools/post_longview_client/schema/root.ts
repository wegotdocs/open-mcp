import { z } from "zod"

export const inputParams = {
  "api_key": z.string().describe("__Read-only__ The API key for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.").readonly().optional(),
  "apps": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `apps` to the tool, first call the tool `expandSchema` with \"/properties/apps\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>__Read-only__ The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.</property-description>").optional(),
  "created": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was created.").readonly().optional(),
  "id": z.number().int().describe("__Read-only__ This Client's unique ID.").readonly().optional(),
  "install_code": z.string().describe("__Read-only__ The install code for this Client, used when configuring the Longview Client application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_]{3,32}")).min(3).max(32).describe("__Filterable__ This Client's unique label. This is for display purposes only.").optional(),
  "updated": z.string().datetime({ offset: true }).describe("__Read-only__ When this Longview Client was last updated.").readonly().optional()
}