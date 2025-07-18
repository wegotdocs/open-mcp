import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putusecase",
  "toolDescription": "Update UseCase",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/useCase/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
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