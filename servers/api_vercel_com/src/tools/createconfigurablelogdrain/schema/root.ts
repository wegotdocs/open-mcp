import { z } from "zod"

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "deliveryFormat": z.enum(["json","ndjson"]).describe("The delivery log format"),
  "url": z.string().url().regex(new RegExp("^(http|https)?://")).describe("The log drain url"),
  "headers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `headers` to the tool, first call the tool `expandSchema` with \"/properties/headers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Headers to be sent together with the request</property-description>").optional(),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(),
  "sources": z.array(z.enum(["static","lambda","build","edge","external","firewall"])).min(1),
  "environments": z.array(z.enum(["preview","production"])).min(1).optional(),
  "secret": z.string().describe("Custom secret of log drain").optional(),
  "samplingRate": z.number().gte(0.01).lte(1).describe("The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points").optional(),
  "name": z.string().describe("The custom name of this log drain.").optional()
}