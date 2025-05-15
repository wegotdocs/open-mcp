import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "id": z.number().int().optional(),
  "participantId": z.number().int().optional(),
  "employeeId": z.string().optional(),
  "name": z.string(),
  "email": z.string().email(),
  "employmentStatus": z.enum(["FULL_TIME","PART_TIME","CASUAL","CONTRACT"]).describe("Current employment status"),
  "employmentStartDate": z.string().date().describe("Date when employment started"),
  "department": z.string().describe("Department or business unit"),
  "streetAddress": z.string().optional(),
  "suburb": z.string().optional(),
  "state": z.string().optional(),
  "postcode": z.string().optional(),
  "country": z.string().optional(),
  "phoneNumber": z.string().optional(),
  "salary": z.number().optional(),
  "status": z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  "createdAt": z.string().datetime({ offset: true }).optional(),
  "updatedAt": z.string().datetime({ offset: true }).optional()
}