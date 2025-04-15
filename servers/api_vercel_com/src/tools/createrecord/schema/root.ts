import { z } from "zod"

export const inputParams = {
  "domain": z.string().describe("The domain used to create the DNS record."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "type": z.enum(["A","AAAA","ALIAS","CAA","CNAME","HTTPS","MX","SRV","TXT","NS"]).describe("The type of record, it could be one of the valid DNS records.").optional()
}