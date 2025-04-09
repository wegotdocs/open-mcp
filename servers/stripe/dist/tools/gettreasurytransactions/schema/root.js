import { z } from "zod";
export const inputParams = {
    "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return Transactions that were created during the given date interval.").optional(),
    "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
    "order_by": z.enum(["created", "posted_at"]).describe("The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.").optional(),
    "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
    "status": z.enum(["open", "posted", "void"]).describe("Only return Transactions that have the given status: `open`, `posted`, or `void`.").optional(),
    "status_transitions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `status_transitions` to the tool, first call the tool `expandSchema` with \"/properties/status_transitions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.</property-description>").optional()
};
