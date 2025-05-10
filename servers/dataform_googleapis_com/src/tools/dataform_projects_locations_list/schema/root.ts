import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The resource that owns the locations collection, if applicable."),
  "filter": z.string().describe("A filter to narrow down results to a preferred subset. The filtering language accepts strings like `\"displayName=tokyo\"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).").optional(),
  "pageSize": z.number().int().describe("The maximum number of results to return. If not set, the service selects a default.").optional(),
  "pageToken": z.string().describe("A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.").optional()
}