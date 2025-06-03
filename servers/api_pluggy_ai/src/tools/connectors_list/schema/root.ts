import { z } from "zod"

export const inputParamsSchema = {
  "countries": z.array(z.literal("BR")).describe("A list of countries of connectors to filter.").optional(),
  "types": z.array(z.enum(["PERSONAL_BANK","BUSINESS_BANK","INVESTMENT","INVOICE","TELECOMMUNICATION","OTHER"])).describe("A list of types of connectors to filter.").optional(),
  "name": z.string().describe("Name alike look up of the connector").optional(),
  "sandbox": z.boolean().describe("Include sandbox connectors if set to true (default: false).").optional(),
  "healthDetails": z.boolean().describe("Include health details about latest connections and percentage of errors (connection rate)").optional(),
  "isOpenFinance": z.boolean().describe("Filter connectors by the `isOpenFinance` attribute. If not sent, it won't filter.").optional(),
  "supportsPaymentInitiation": z.boolean().describe("Filter connectors by the `supportsPaymentInitiation` attribute. If not sent, it won't filter.").optional()
}