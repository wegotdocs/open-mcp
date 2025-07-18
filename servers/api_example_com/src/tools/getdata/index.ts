import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdata",
  "toolDescription": "Get Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "NamePattern": "NamePattern",
      "Active": "Active",
      "Status": "Status",
      "UseCaseId": "UseCaseId",
      "PageNumber": "PageNumber",
      "PageSize": "PageSize",
      "OrderBy": "OrderBy",
      "OrderDirection": "OrderDirection",
      "ExternalId": "ExternalId",
      "DeletedDate": "DeletedDate",
      "Attempts": "Attempts",
      "ReturnSource": "ReturnSource"
    }
  },
  inputParamsSchema
}

export default tool