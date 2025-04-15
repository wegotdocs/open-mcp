import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_get_indexing_job",
  "toolDescription": "Retrieve Status of Indexing Job for a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/indexing_jobs/{uuid}",
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
      "uuid": "uuid"
    }
  },
  inputParamsSchema
}

export default tool