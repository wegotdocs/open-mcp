import { z } from "zod"

export const inputParamsSchema = {
  "vector_store_id": z.string().describe("The ID of the vector store to search."),
  "query": z.string().describe("A query string for a search"),
  "rewrite_query": z.boolean().describe("Whether to rewrite the natural language query for vector search.").optional(),
  "max_num_results": z.number().int().gte(1).lte(50).describe("The maximum number of results to return. This number should be between 1 and 50 inclusive.").optional(),
  "filters": z.object({ "type": z.enum(["eq","ne","gt","gte","lt","lte"]).describe("Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`.\n- `eq`: equals\n- `ne`: not equal\n- `gt`: greater than\n- `gte`: greater than or equal\n- `lt`: less than\n- `lte`: less than or equal\n"), "key": z.string().describe("The key to compare against the value."), "value": z.string().describe("The value to compare against the attribute key; supports string, number, or boolean types.") }).strict().describe("A filter used to compare a specified attribute key to a given value using a defined comparison operation.\n").describe("A filter to apply based on file attributes.").optional(),
  "ranking_options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ranking_options` to the tool, first call the tool `expandSchema` with \"/properties/ranking_options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Ranking options for search.</property-description>").optional()
}