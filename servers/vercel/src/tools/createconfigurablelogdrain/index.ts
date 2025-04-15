import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createconfigurablelogdrain",
  "toolDescription": "Creates a Configurable Log Drain",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/log-drains",
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
      "deliveryFormat": "deliveryFormat",
      "url": "url",
      "headers": "headers",
      "projectIds": "projectIds",
      "sources": "sources",
      "environments": "environments",
      "secret": "secret",
      "samplingRate": "samplingRate",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool