import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpackagedcomponent",
  "toolDescription": "Creates a PackagedComponent object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/PackagedComponent",
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
      "branchName": "branchName",
      "componentId": "componentId",
      "componentType": "componentType",
      "componentVersion": "componentVersion",
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "deleted": "deleted",
      "fullyPubliclyConsumable": "fullyPubliclyConsumable",
      "notes": "notes",
      "packageId": "packageId",
      "packageVersion": "packageVersion",
      "shareable": "shareable"
    }
  },
  inputParamsSchema
}

export default tool