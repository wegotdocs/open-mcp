import { z } from "zod"

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("The name of the log drain"),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(),
  "secret": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("A secret to sign log drain notification headers so a consumer can verify their authenticity").optional(),
  "deliveryFormat": z.enum(["json","ndjson","syslog"]).describe("The delivery log format").optional(),
  "url": z.string().url().regex(new RegExp("^(https?|syslog\\\\+tls|syslog)://")).describe("The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`."),
  "sources": z.array(z.enum(["static","lambda","build","edge","external","firewall"])).min(1).optional(),
  "headers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `headers` to the tool, first call the tool `expandSchema` with \"/properties/headers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Headers to be sent together with the request</property-description>").optional(),
  "environments": z.array(z.enum(["preview","production"])).min(1).optional()
}