import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecomponentmetadata",
  "toolDescription": "Modifies or updates a ComponentMetadata object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ComponentMetadata/{id}",
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
      "branchId": "branchId",
      "branchName": "branchName",
      "componentId": "componentId",
      "copiedFromComponentId": "copiedFromComponentId",
      "copiedFromComponentVersion": "copiedFromComponentVersion",
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "currentVersion": "currentVersion",
      "deleted": "deleted",
      "folderId": "folderId",
      "folderName": "folderName",
      "modifiedBy": "modifiedBy",
      "modifiedDate": "modifiedDate",
      "name": "name",
      "subType": "subType",
      "type": "type",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool