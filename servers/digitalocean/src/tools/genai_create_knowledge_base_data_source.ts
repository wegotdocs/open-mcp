import { z } from "zod"

export const toolName = `genai_create_knowledge_base_data_source`
export const toolDescription = `Add Data Source to a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "knowledge_base_uuid"
  ],
  "cookie": [],
  "body": [
    "b_knowledge_base_uuid",
    "spaces_data_source",
    "web_crawler_data_source"
  ]
}
export const flatMap = {
  "b_knowledge_base_uuid": "knowledge_base_uuid"
}

export const inputParams = {
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "b_knowledge_base_uuid": z.string().describe("Knowledge base id").optional(),
  "spaces_data_source": z.object({ "bucket_name": z.string().describe("Spaces bucket name").optional(), "item_path": z.string().optional(), "region": z.string().describe("Region of bucket").optional() }).describe("Spaces Bucket Data Source").optional(),
  "web_crawler_data_source": z.object({ "base_url": z.string().describe("The base url to crawl.").optional(), "crawling_option": z.enum(["UNKNOWN","SCOPED","PATH","DOMAIN","SUBDOMAINS"]).describe("Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain."), "embed_media": z.boolean().describe("Whether to ingest and index media (images, etc.) on web pages.").optional() }).describe("WebCrawlerDataSource").optional()
}