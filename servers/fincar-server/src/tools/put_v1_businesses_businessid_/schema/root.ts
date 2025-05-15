import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.number().int().describe("ID of the business to update"),
  "id": z.number().int().optional(),
  "b_businessId": z.number().int().optional(),
  "name": z.string(),
  "abn": z.string().regex(new RegExp("^\\d{11}$")).describe("Australian Business Number"),
  "acn": z.string().regex(new RegExp("^\\d{9}$")).describe("Australian Company Number").optional(),
  "industryType": z.enum(["AGRICULTURE","MINING","MANUFACTURING","CONSTRUCTION","RETAIL","HOSPITALITY","FINANCE","TECHNOLOGY","HEALTHCARE","EDUCATION","OTHER"]),
  "businessSize": z.enum(["SMALL","MEDIUM","LARGE","ENTERPRISE"]).describe("Business size category based on employee count"),
  "streetAddress": z.string().optional(),
  "suburb": z.string().optional(),
  "state": z.string().optional(),
  "postcode": z.string().optional(),
  "country": z.string().optional(),
  "contactEmail": z.string().email(),
  "phoneNumber": z.string().optional(),
  "website": z.string().url().optional(),
  "participantsCount": z.number().int().optional(),
  "packagesEnrolled": z.array(z.number().int()).optional(),
  "status": z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  "createdAt": z.string().datetime({ offset: true }).optional(),
  "updatedAt": z.string().datetime({ offset: true }).optional()
}