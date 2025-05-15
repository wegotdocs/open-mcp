import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdeployedpackage",
  "toolDescription": "Creates a DeployedPackage object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/DeployedPackage",
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
    "body": {
      "active": "active",
      "branchName": "branchName",
      "componentId": "componentId",
      "componentType": "componentType",
      "componentVersion": "componentVersion",
      "deployedBy": "deployedBy",
      "deployedDate": "deployedDate",
      "deploymentId": "deploymentId",
      "environmentId": "environmentId",
      "listenerStatus": "listenerStatus",
      "message": "message",
      "notes": "notes",
      "packageId": "packageId",
      "packageVersion": "packageVersion",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool