import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpersonimagebyid",
  "toolDescription": "Get Person Image",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/persons/{person_id}/image",
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
      "person_id": "person_id"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool