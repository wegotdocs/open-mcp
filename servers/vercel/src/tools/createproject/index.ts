import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproject",
  "toolDescription": "Create a new project",
  "baseUrl": "https://api.vercel.com",
  "path": "/v11/projects",
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
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "enablePreviewFeedback": "enablePreviewFeedback",
      "enableProductionFeedback": "enableProductionFeedback",
      "buildCommand": "buildCommand",
      "commandForIgnoringBuildStep": "commandForIgnoringBuildStep",
      "devCommand": "devCommand",
      "environmentVariables": "environmentVariables",
      "framework": "framework",
      "gitRepository": "gitRepository",
      "installCommand": "installCommand",
      "name": "name",
      "outputDirectory": "outputDirectory",
      "publicSource": "publicSource",
      "rootDirectory": "rootDirectory",
      "serverlessFunctionRegion": "serverlessFunctionRegion",
      "serverlessFunctionZeroConfigFailover": "serverlessFunctionZeroConfigFailover",
      "oidcTokenConfig": "oidcTokenConfig",
      "enableAffectedProjectsDeployments": "enableAffectedProjectsDeployments"
    }
  },
  inputParamsSchema
}

export default tool