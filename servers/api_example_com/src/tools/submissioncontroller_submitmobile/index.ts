import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submissioncontroller_submitmobile",
  "toolDescription": "Backward compatibility for mobile that don't support versioning",
  "baseUrl": "https://api.example.com",
  "path": "/mobile/api/v1/submissions/{formType}/{id}",
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
    "path": {
      "id": "id",
      "tenantId": "tenantId"
    },
    "header": {
      "ntx-tenancy": "ntx-tenancy",
      "ntx-upload-session-id": "ntx-upload-session-id",
      "ntx-captcha": "ntx-captcha",
      "ntx-client": "ntx-client",
      "ntx-correlation-id": "ntx-correlation-id",
      "ntx-operation-id": "ntx-operation-id",
      "ntx-test-workflow": "ntx-test-workflow",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool