import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdeployment",
  "toolDescription": "Create a new deployment",
  "baseUrl": "https://api.vercel.com",
  "path": "/v13/deployments",
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
    "query": {
      "forceNew": "forceNew",
      "skipAutoDetectionConfirmation": "skipAutoDetectionConfirmation",
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "customEnvironmentSlugOrId": "customEnvironmentSlugOrId",
      "deploymentId": "deploymentId",
      "files": "files",
      "gitMetadata": "gitMetadata",
      "gitSource": "gitSource",
      "meta": "meta",
      "monorepoManager": "monorepoManager",
      "name": "name",
      "project": "project",
      "projectSettings": "projectSettings",
      "target": "target",
      "withLatestCommit": "withLatestCommit"
    }
  },
  inputParamsSchema
}

export default tool