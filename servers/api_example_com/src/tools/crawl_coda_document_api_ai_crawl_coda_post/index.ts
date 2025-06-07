import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crawl_coda_document_api_ai_crawl_coda_post",
  "toolDescription": "Crawl Coda Document",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/crawl-coda",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "max_tables": "max_tables"
    }
  },
  inputParamsSchema
}

export default tool