import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_api",
  "toolDescription": "### Overview\n\nThe Query API is the API used to search for objects with filtering and sorting capabilities. It's an API introduced by TheHive 4 and is optimized for the the new data model.\n\nTheHive comes with a list of predefined search *Qu",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/query",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "body": {
      "query": "query",
      "excludeFields": "excludeFields"
    }
  },
  inputParamsSchema
}

export default tool