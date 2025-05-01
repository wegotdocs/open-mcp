import { z } from "zod"

export const inputParamsSchema = {
  "City": z.string().optional(),
  "CountrySubDivisionCode": z.string().optional(),
  "Id": z.string().optional(),
  "Line1": z.string().optional(),
  "PostalCode": z.string().optional()
}