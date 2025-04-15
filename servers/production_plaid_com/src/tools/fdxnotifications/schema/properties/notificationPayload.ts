import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID for the origination entity related to the notification").optional(),
  "idType": z.enum(["ACCOUNT","CUSTOMER","PARTY","MAINTENANCE","CONSENT"]).describe("Type of entity causing origination of a notification").optional(),
  "customFields": z.array(z.object({ "name": z.string().describe("Name of attribute"), "value": z.string().describe("Value of attribute") }).strict().describe("Financial Institution provider-specific attribute")).optional()
}