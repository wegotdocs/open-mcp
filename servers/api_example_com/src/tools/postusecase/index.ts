import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postusecase",
  "toolDescription": "Create a new UseCase",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/useCase",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "Name": "Name",
      "Description": "Description",
      "Instructions": "Instructions",
      "Metadata": "Metadata",
      "Active": "Active",
      "Type": "Type",
      "StreamingEnabled": "StreamingEnabled",
      "Image": "Image",
      "DeploymentId": "DeploymentId",
      "ChunkSize": "ChunkSize",
      "AssistantId": "AssistantId",
      "IsEditable": "IsEditable"
    }
  },
  inputParamsSchema
}

export default tool