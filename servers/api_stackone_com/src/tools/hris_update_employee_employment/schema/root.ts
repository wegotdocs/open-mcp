import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "subResourceId": z.string(),
  "b_id": z.string().nullable().describe("Unique identifier").optional(),
  "unified_custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `unified_custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/unified_custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom Unified Fields configured in your StackOne project</property-description>").optional(),
  "job_title": z.string().nullable().describe("The job title of the employee").optional(),
  "pay_rate": z.string().nullable().describe("The pay rate for the employee").optional(),
  "pay_period": z.string().optional(),
  "pay_frequency": z.string().optional(),
  "pay_currency": z.string().nullable().describe("The currency used for pay").optional(),
  "employment_type": z.string().optional(),
  "employment_contract_type": z.string().optional(),
  "work_time": z.string().optional(),
  "passthrough": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `passthrough` to the tool, first call the tool `expandSchema` with \"/properties/passthrough\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Value to pass through to the provider</property-description>").optional(),
  "x-account-id": z.string().describe("The account identifier")
}