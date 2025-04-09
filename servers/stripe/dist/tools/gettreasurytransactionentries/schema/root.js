import { z } from "zod";
export const inputParams = {
    "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return TransactionEntries that were created during the given date interval.").optional(),
    "effective_at": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).optional(),
    "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
    "order_by": z.enum(["created", "effective_at"]).describe("The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.").optional(),
    "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
    "transaction": z.string().max(5000).describe("Only return TransactionEntries associated with this Transaction.").optional()
};
