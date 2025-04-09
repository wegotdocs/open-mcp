import { z } from "zod"

export const inputParams = {
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "financial_account": z.string().describe("The FinancialAccount that received the funds."),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "linked_flows": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `linked_flows` to the tool, first call the tool `expandSchema` with \"/properties/linked_flows\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Only return ReceivedCredits described by the flow.</property-description>").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["failed","succeeded"]).describe("Only return ReceivedCredits that have the given status: `succeeded` or `failed`.").optional()
}