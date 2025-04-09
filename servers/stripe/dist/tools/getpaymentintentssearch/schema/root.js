import { z } from "zod";
export const inputParams = {
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
    "page": z.string().max(5000).describe("A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.").optional(),
    "query": z.string().max(5000).describe("The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).")
};
