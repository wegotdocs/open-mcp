import { z } from "zod"

export const inputParams = {
  "recordId": z.string().describe("The id of the DNS record"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "additionalProperties": z.any().optional(),
  "name": z.string().nullable().describe("The name of the DNS record").optional(),
  "value": z.string().nullable().describe("The value of the DNS record").optional(),
  "type": z.enum(["A","AAAA","ALIAS","CAA","CNAME","HTTPS","MX","SRV","TXT","NS"]).nullable().describe("The type of the DNS record").optional(),
  "ttl": z.number().int().gte(60).lte(2147483647).nullable().describe("The Time to live (TTL) value of the DNS record").optional(),
  "mxPriority": z.number().int().nullable().describe("The MX priority value of the DNS record").optional(),
  "srv": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `srv` to the tool, first call the tool `expandSchema` with \"/properties/srv\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "https": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `https` to the tool, first call the tool `expandSchema` with \"/properties/https\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "comment": z.string().max(500).describe("A comment to add context on what this DNS record is for").optional()
}