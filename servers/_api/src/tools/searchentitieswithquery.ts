import { z } from "zod"

export const toolName = `searchentitieswithquery`
export const toolDescription = `Search entities`
export const baseUrl = `/api`
export const path = `/v1/search/query`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "q",
    "index",
    "deleted",
    "from",
    "size",
    "sort_field",
    "sort_order",
    "track_total_hits",
    "query_filter",
    "post_filter",
    "fetch_source",
    "include_source_fields"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "q": z.string().describe("Search Query Text, Pass *text* for substring match; Pass without wildcards for exact match. <br/> 1. For listing all tables or topics pass q=* <br/>2. For search tables or topics pass q=*search_term* <br/>3. For searching field names such as search by column_name pass q=column_names:address <br/>4. For searching by tag names pass q=tags:user.email <br/>5. When user selects a filter pass q=query_text AND tags:user.email AND platform:MYSQL <br/>6. Search with multiple values of same filter q=tags:user.email AND tags:user.address <br/> logic operators such as AND and OR must be in uppercase "), "index": z.string().describe("ElasticSearch Index name, defaults to table_search_index"), "deleted": z.boolean().describe("Filter documents by deleted param. By default deleted is false"), "from": z.number().int().describe("From field to paginate the results, defaults to 0"), "size": z.number().int().describe("Size field to limit the no.of results returned, defaults to 10"), "sort_field": z.string().describe("Sort the search results by field, available fields to sort weekly_stats , daily_stats, monthly_stats, last_updated_timestamp"), "sort_order": z.string().describe("Sort order asc for ascending or desc for descending, defaults to desc"), "track_total_hits": z.boolean().describe("Track Total Hits"), "query_filter": z.string().describe("Elasticsearch query that will be combined with the query_string query generator from the `query` argument").optional(), "post_filter": z.string().describe("Elasticsearch query that will be used as a post_filter").optional(), "fetch_source": z.boolean().describe("Get document body for each hit"), "include_source_fields": z.array(z.string()).describe("Get only selected fields of the document body for each hit. Empty value will return all fields").optional() }).shape