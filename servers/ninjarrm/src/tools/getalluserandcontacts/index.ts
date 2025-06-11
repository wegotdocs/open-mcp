import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getalluserandcontacts",
  "toolDescription": "List of users by user type",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/ticketing/app-user-contact",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pageSize": "pageSize",
      "anchorNaturalId": "anchorNaturalId",
      "searchCriteria": "searchCriteria",
      "userType": "userType",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool