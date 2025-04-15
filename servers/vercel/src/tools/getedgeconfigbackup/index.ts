import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getedgeconfigbackup",
  "toolDescription": "Get Edge Config backup",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/edge-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}",
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
      "edgeConfigId": "edgeConfigId",
      "edgeConfigBackupVersionId": "edgeConfigBackupVersionId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool