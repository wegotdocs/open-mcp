import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_cancel_indexing_job",
  "toolDescription": "Cancel Indexing Job for a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/indexing_jobs/{uuid}/cancel",
  "method": "put",
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
    },
    "body": {
      "uuid": "b_uuid"
    }
  },
  inputParamsSchema
}

export default tool