import { z } from "zod"

export const inputParamsSchema = {
  "search_string": z.string().describe("Search string to filter businesses by name or other text fields").optional(),
  "business_type": z.enum(["SOCIETY","UNSUPPORTED","AUTONOMOUS"]).describe("Type of business to filter by").optional(),
  "startup_certificate": z.number().int().describe("Filter by startup certificate status (1 for yes, 0 for no)").optional(),
  "invite_start_date": z.string().datetime({ offset: true }).describe("Start date for invitation period filter").optional(),
  "invite_end_date": z.string().datetime({ offset: true }).describe("End date for invitation period filter").optional(),
  "services_id": z.array(z.string()).describe("List of service IDs to filter by").optional(),
  "deal_labels_id": z.array(z.string()).describe("List of deal label IDs to filter by").optional(),
  "all_businesses": z.boolean().describe("Flag to include all businesses").optional(),
  "accounting_responsibles_id": z.array(z.string()).describe("List of accounting responsible IDs to filter by").optional(),
  "min_accounting_service_months": z.number().int().describe("Minimum number of accounting service months").optional(),
  "max_accounting_service_months": z.number().int().describe("Maximum number of accounting service months").optional(),
  "min_tickets_to_process": z.number().int().describe("Minimum number of tickets to process").optional(),
  "max_tickets_to_process": z.number().int().describe("Maximum number of tickets to process").optional(),
  "min_global_rating": z.number().int().describe("Minimum global rating").optional(),
  "max_global_rating": z.number().int().describe("Maximum global rating").optional(),
  "min_engagement": z.number().int().describe("Minimum engagement level").optional(),
  "max_engagement": z.number().int().describe("Maximum engagement level").optional(),
  "business_categories_id": z.array(z.string()).describe("List of business category IDs to filter by").optional(),
  "request": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `request` to the tool, first call the tool `expandSchema` with \"/properties/request\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional filtering criteria</property-description>")
}