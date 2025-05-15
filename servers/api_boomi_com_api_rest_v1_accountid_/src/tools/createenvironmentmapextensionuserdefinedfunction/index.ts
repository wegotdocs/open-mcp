import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createenvironmentmapextensionuserdefinedfunction",
  "toolDescription": "Creates an EnvironmentMapExtensionUserDefinedFunction object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/EnvironmentMapExtensionUserDefinedFunction",
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
      "Inputs": "Inputs",
      "Mappings": "Mappings",
      "Outputs": "Outputs",
      "Steps": "Steps",
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "deleted": "deleted",
      "description": "description",
      "environmentMapExtensionId": "environmentMapExtensionId",
      "id": "id",
      "modifiedBy": "modifiedBy",
      "modifiedDate": "modifiedDate",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool