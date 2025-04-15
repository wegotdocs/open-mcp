import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createlogdrain",
  "toolDescription": "Creates a new Integration Log Drain",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/integrations/log-drains",
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
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "projectIds": "projectIds",
      "secret": "secret",
      "deliveryFormat": "deliveryFormat",
      "url": "url",
      "sources": "sources",
      "headers": "headers",
      "environments": "environments"
    }
  },
  inputParamsSchema
}

export default tool