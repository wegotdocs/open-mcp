import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_observable_in_case",
  "toolDescription": "Add an observable to an existing case.\n\nFor examples, see 'Create Observable in Alert'",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/case/{caseId}/observable",
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
    "path": {
      "caseId": "caseId"
    },
    "query": {
      "dataType": "dataType"
    },
    "body": {
      "dataType": "b_dataType",
      "data": "data",
      "message": "message",
      "startDate": "startDate",
      "attachment": "attachment",
      "tlp": "tlp",
      "pap": "pap",
      "tags": "tags",
      "ioc": "ioc",
      "sighted": "sighted",
      "sightedAt": "sightedAt",
      "ignoreSimilarity": "ignoreSimilarity",
      "isZip": "isZip",
      "zipPassword": "zipPassword"
    }
  },
  inputParamsSchema
}

export default tool