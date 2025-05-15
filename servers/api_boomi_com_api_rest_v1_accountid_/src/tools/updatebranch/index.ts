import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatebranch",
  "toolDescription": "Modifies or updates a Branch object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Branch/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "deleted": "deleted",
      "deploymentId": "deploymentId",
      "description": "description",
      "id": "b_id",
      "modifiedBy": "modifiedBy",
      "modifiedDate": "modifiedDate",
      "name": "name",
      "packageId": "packageId",
      "parentId": "parentId",
      "ready": "ready",
      "stage": "stage"
    }
  },
  inputParamsSchema
}

export default tool