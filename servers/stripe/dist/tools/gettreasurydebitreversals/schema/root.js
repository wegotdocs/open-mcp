import { z } from "zod";
export const inputParams = {
    "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "financial_account": z.string().describe("Returns objects associated with this FinancialAccount."),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
    "received_debit": z.string().max(5000).describe("Only return DebitReversals for the ReceivedDebit ID.").optional(),
    "resolution": z.enum(["lost", "won"]).describe("Only return DebitReversals for a given resolution.").optional(),
    "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
    "status": z.enum(["canceled", "completed", "processing"]).describe("Only return DebitReversals for a given status.").optional()
};
