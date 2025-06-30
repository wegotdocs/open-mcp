import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_credentials_schema_credentialtypename_",
  "toolDescription": "Show credential data schema",
  "baseUrl": "/api/v1",
  "path": "/credentials/schema/{credentialTypeName}",
  "method": "get",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "credentialTypeName": "credentialTypeName"
    }
  },
  inputParamsSchema
}

export default tool