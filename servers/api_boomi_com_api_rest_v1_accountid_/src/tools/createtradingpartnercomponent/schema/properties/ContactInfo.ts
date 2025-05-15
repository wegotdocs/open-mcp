import { z } from "zod"

export const inputParamsSchema = {
  "address1": z.string(),
  "address2": z.string(),
  "city": z.string(),
  "contactName": z.string(),
  "country": z.string(),
  "email": z.string(),
  "fax": z.string(),
  "phone": z.string(),
  "postalcode": z.string(),
  "state": z.string()
}