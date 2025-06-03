import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "step": z.number().int().optional(),
  "provisional_due": z.array(z.string()).optional(),
  "due": z.array(z.string()).optional(),
  "doc21233600": z.array(z.string()).optional(),
  "doc21233601": z.array(z.string()).optional(),
  "doc21275254": z.array(z.string()).optional(),
  "doc21275255": z.array(z.string()).optional(),
  "doc21275256": z.array(z.string()).optional(),
  "doc21275643": z.array(z.string()).optional(),
  "cif": z.array(z.string()).optional(),
  "document036": z.array(z.string()).optional(),
  "constitution": z.array(z.string()).optional()
}