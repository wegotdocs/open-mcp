import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_discoverycontroller_collect",
  "toolDescription": "Collect data from the target infrastructure",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/collect",
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
      "agent_id": "agent_id",
      "discovery_type": "discovery_type",
      "payload": "payload"
    }
  },
  inputParamsSchema
}

export default tool