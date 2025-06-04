import { z } from "zod"

export const inputParamsSchema = {
  "trainingId": z.string().uuid().describe("Training ID"),
  "name": z.string(),
  "description": z.string().optional(),
  "typeId": z.string().uuid(),
  "currency": z.string(),
  "amountType": z.enum(["per_course","per_person"]),
  "amount": z.number(),
  "durationInHours": z.number(),
  "startDate": z.string().date(),
  "endDate": z.string().date(),
  "bonusable": z.boolean(),
  "trainingEntity": z.string(),
  "bonusPercent": z.number().optional(),
  "email": z.string().optional(),
  "teacher": z.string().optional(),
  "businessName": z.string().optional(),
  "cif": z.string().optional(),
  "phone": z.string().optional()
}