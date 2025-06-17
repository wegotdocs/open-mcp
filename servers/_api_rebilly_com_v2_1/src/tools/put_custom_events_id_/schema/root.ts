import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "eventType": z.enum(["subscription-ended","subscription-trial-ended","subscription-renewed","payment-card-expired","invoice-past-due","invoice-issued","invoice-voided","invoice-paid","invoice-abandoned"]).describe("The system event type"),
  "title": z.string().describe("The custom event title"),
  "description": z.string().describe("The custom event description").optional(),
  "chronology": z.enum(["before","after"]).describe("The emitting time of the custom event relatively to the system event"),
  "scheduleInstruction": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scheduleInstruction` to the tool, first call the tool `expandSchema` with \"/properties/scheduleInstruction\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The calculation instruction of scheduled time</property-description>"),
  "createdTime": z.string().datetime({ offset: true }).describe("Read-only timestamp, automatically assigned on back-end.").readonly().optional(),
  "rulesCount": z.number().int().readonly().optional()
}