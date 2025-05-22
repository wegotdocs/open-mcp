import { z } from "zod"

export const inputParamsSchema = {
  "address_line_1": z.string().nullable().describe("[single-line only]\n\nThe first line of the billing address."),
  "address_line_2": z.string().nullable().describe("[single-line only]\n\nThe second line of the billing address.").optional(),
  "city": z.string().nullable().describe("[single-line only]\n\nThe billing address city."),
  "country": z.string().nullable().describe("The billing address country."),
  "postal_code": z.string().nullable().describe("[single-line only]\n\nThe billing address postal code."),
  "region": z.string().nullable().describe("[single-line only]\n\nThe billing address region.")
}