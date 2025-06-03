import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional(),
  "isDefault": z.boolean().describe("Filter connectors by the `isDefault` attribute. If not sent, it won't filter.").optional(),
  "pixKey": z.string().describe("Filter payment recipient by Pix key").optional(),
  "name": z.string().describe("Filter payment recipient by name").optional()
}