import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createknowledgebase",
  "toolDescription": "Creates a Knowledge Base.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/knowledge-bases",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "instructions": "instructions",
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool