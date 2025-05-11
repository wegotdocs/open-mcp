import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().min(1).describe("Currency Code. Must be a valid ISO-4217 formatted currency code (3 uppercase letters)."),
  "label": z.union([z.string().min(1), z.null()]).describe("Custom label for the currency that will be displayed in the application. If not given, the default conventional label of the currency will be used (such as $, €, £, etc.). Length cannot exceed 5 characters.").optional(),
  "archived": z.boolean().describe("Whether the currency is archived (not used anymore in the application) or not. Currency cannot be deleted for history purpose. Main currency cannot be archived.").optional(),
  "exchange_rate_timeline": z.array(z.object({ "application_date": z.union([z.literal("first_event"), z.string().date()]).describe("Application date of the event (YYYY-MM-DD) or literal 'first_event' for the first event of the timeline"), "value": z.number().describe("Value to apply for the event") })).describe("Exchange rates timeline (see [Event Timelines Fields](#tag/Event-Timelines-Fields))")
}