import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_attach_agent_function",
  "toolDescription": "Add Function Route to an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{agent_uuid}/functions",
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
    "path": {
      "agent_uuid": "agent_uuid"
    },
    "body": {
      "agent_uuid": "b_agent_uuid",
      "description": "description",
      "faas_name": "faas_name",
      "faas_namespace": "faas_namespace",
      "function_name": "function_name",
      "input_schema": "input_schema",
      "output_schema": "output_schema"
    }
  },
  inputParamsSchema
}

export default tool