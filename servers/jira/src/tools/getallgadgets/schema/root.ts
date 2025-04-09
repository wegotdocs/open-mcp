import { z } from "zod"

export const inputParams = {
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "moduleKey": z.array(z.string()).describe("The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`.").optional(),
  "uri": z.array(z.string()).describe("The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`.").optional(),
  "gadgetId": z.array(z.number().int()).describe("The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`.").optional()
}