import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_list_indexing_job_data_sources",
  "toolDescription": "List Data Sources for Indexing Job for a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "indexing_job_uuid": "indexing_job_uuid"
    }
  },
  inputParamsSchema
}

export default tool