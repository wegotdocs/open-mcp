import { z } from "zod";
export const toolName = `genai_create_knowledge_base`;
export const toolDescription = `Create a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "database_id",
        "datasources",
        "embedding_model_uuid",
        "name",
        "project_id",
        "region",
        "tags",
        "vpc_uuid"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "database_id": z.string().describe("Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional.\nIf not provided, we create a new database for the knowledge base in\nthe same region as the knowledge base.").optional(), "datasources": z.array(z.object({ "bucket_name": z.string().describe("Deprecated, moved to data_source_details").optional(), "bucket_region": z.string().describe("Deprecated, moved to data_source_details").optional(), "file_upload_data_source": z.object({ "original_file_name": z.string().describe("The original file name").optional(), "size_in_bytes": z.string().describe("The size of the file in bytes").optional(), "stored_object_key": z.string().describe("The object key the file was stored as").optional() }).describe("File to upload as data source for knowledge base.").optional(), "item_path": z.string().optional(), "spaces_data_source": z.object({ "bucket_name": z.string().describe("Spaces bucket name").optional(), "item_path": z.string().optional(), "region": z.string().describe("Region of bucket").optional() }).describe("Spaces Bucket Data Source").optional(), "web_crawler_data_source": z.object({ "base_url": z.string().describe("The base url to crawl.").optional(), "crawling_option": z.enum(["UNKNOWN", "SCOPED", "PATH", "DOMAIN", "SUBDOMAINS"]).describe("Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain."), "embed_media": z.boolean().describe("Whether to ingest and index media (images, etc.) on web pages.").optional() }).describe("WebCrawlerDataSource").optional() })).describe("The data sources to use for this knowledge base. See [Organize Data Sources](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#spaces-buckets) for more information on data sources best practices.").optional(), "embedding_model_uuid": z.string().describe("Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models).").optional(), "name": z.string().describe("Name of the knowledge base.").optional(), "project_id": z.string().describe("Identifier of the DigitalOcean project this knowledge base will belong to.").optional(), "region": z.string().describe("The datacenter region to deploy the knowledge base in.").optional(), "tags": z.array(z.string()).describe("Tags to organize your knowledge base.").optional(), "vpc_uuid": z.string().describe("The VPC to deploy the knowledge base database in").optional() }).shape;
