import { z } from "zod";
export const inputParams = {
    "base_url": z.string().describe("The base url to crawl.").optional(),
    "crawling_option": z.enum(["UNKNOWN", "SCOPED", "PATH", "DOMAIN", "SUBDOMAINS"]).describe("Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.").optional(),
    "embed_media": z.boolean().describe("Whether to ingest and index media (images, etc.) on web pages.").optional()
};
