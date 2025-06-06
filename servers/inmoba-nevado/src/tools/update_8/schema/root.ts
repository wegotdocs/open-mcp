import { z } from "zod"

export const inputParamsSchema = {
  "activityId": z.number().int(),
  "type": z.string(),
  "subject": z.string().min(0).max(255),
  "details": z.string().min(0).max(25000).nullable().optional(),
  "responsible": z.string().nullable().describe("If null, the value will be the request user").optional(),
  "contactMain": z.number().int().nullable().optional(),
  "users": z.array(z.string()).optional(),
  "contacts": z.array(z.number().int()).optional(),
  "bookings": z.array(z.number().int()).optional(),
  "developments": z.array(z.number().int()).optional(),
  "properties": z.array(z.object({ "propertyId": z.number().int(), "comment": z.string().nullable().optional() })).optional()
}