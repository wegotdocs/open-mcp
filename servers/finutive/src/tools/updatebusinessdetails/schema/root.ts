import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Business ID"),
  "gocardless": z.number().int().gte(-1).lte(2).optional(),
  "language": z.enum(["SPANISH","ENGLISH","GERMAN","ARABIC","CATALAN","CHINESE","BASQUE","FRENCH","GALICIAN","GREEK","HINDI","ITALIAN","PORTUGUESE","RUSSIAN","SWAHILI","SWEDISH"]).optional(),
  "paid": z.boolean().optional(),
  "is_discarded": z.boolean().optional(),
  "is_recurrent": z.boolean().optional(),
  "name": z.string().optional(),
  "sage": z.number().int().gte(-1).lte(4).optional(),
  "opportunity": z.boolean().optional(),
  "document_id": z.string().optional(),
  "organization_id": z.string().optional()
}