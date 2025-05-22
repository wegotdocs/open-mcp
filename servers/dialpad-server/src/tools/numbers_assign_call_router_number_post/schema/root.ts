import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The API call router's ID"),
  "area_code": z.string().nullable().describe("An area code in which to find an available phone number for assignment.").optional(),
  "number": z.string().nullable().describe("A phone number to assign. (e164-formatted)").optional(),
  "primary": z.boolean().nullable().describe("A boolean indicating whether this should become the primary phone number.").optional()
}