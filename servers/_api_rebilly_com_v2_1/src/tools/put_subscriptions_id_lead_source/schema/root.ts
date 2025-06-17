import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "medium": z.string().describe("Lead Source's medium (eg search, display)").optional(),
  "source": z.string().describe("Lead Source's source (eg google, yahoo)").optional(),
  "campaign": z.string().describe("Lead Source's campaign (eg go-big-123)").optional(),
  "term": z.string().describe("Lead Source's term (eg salt shakers)").optional(),
  "content": z.string().describe("Lead Source's content (eg smiley faces)").optional(),
  "affiliate": z.string().describe("Lead Source's affiliate (eg 123, Bob Smith)").optional(),
  "subAffiliate": z.string().describe("Lead Source's sub-affiliate also called a sub-id or click id in some circles (eg 123456)").optional(),
  "salesAgent": z.string().describe("Lead Source's sales agent (eg James Bond)").optional(),
  "clickId": z.string().describe("Lead Source's click id (may come from an ad server)").optional(),
  "path": z.string().describe("Lead Source's path uri (eg www.example.com/some/landing/path)").optional(),
  "ipAddress": z.string().describe("Customer's IP Address").optional(),
  "currency": z.string().describe("Currency (three letter ISO 4217 alpha code) (eg USD, EUR)").optional(),
  "amount": z.number().describe("The amount that the lead cost").optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}