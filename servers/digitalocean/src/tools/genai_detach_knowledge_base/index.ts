import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_detach_knowledge_base",
  "toolDescription": "Detach Knowledge Base from an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}",
  "method": "delete",
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
      "agent_uuid": "agent_uuid",
      "knowledge_base_uuid": "knowledge_base_uuid"
    }
  },
  inputParamsSchema
}

export default tool