import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Human recognizable common name"),
  "type": z.enum(["DATA_ACCESS_PLATFORM","DATA_PROVIDER","DATA_RECIPIENT","INDIVIDUAL","MERCHANT","VENDOR"]).describe("Identifies the type of a party"),
  "homeUri": z.string().url().describe("URI for party, where an end user could learn more about the company or application involved in the data sharing chain").optional(),
  "logoUri": z.string().url().describe("URI for a logo asset to be displayed to the end user").optional(),
  "registry": z.enum(["FDX","GLEIF","ICANN","PRIVATE"]).describe("The registry containing the party’s registration with name and id").optional(),
  "registeredEntityName": z.string().describe("Registered name of party").optional(),
  "registeredEntityId": z.string().describe("Registered id of party").optional()
}