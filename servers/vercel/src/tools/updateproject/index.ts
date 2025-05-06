import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproject",
  "toolDescription": "Update an existing project",
  "baseUrl": "https://api.vercel.com",
  "path": "/v9/projects/{idOrName}",
  "method": "patch",
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
      "idOrName": "idOrName"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "autoExposeSystemEnvs": "autoExposeSystemEnvs",
      "autoAssignCustomDomains": "autoAssignCustomDomains",
      "autoAssignCustomDomainsUpdatedBy": "autoAssignCustomDomainsUpdatedBy",
      "buildCommand": "buildCommand",
      "commandForIgnoringBuildStep": "commandForIgnoringBuildStep",
      "customerSupportCodeVisibility": "customerSupportCodeVisibility",
      "devCommand": "devCommand",
      "directoryListing": "directoryListing",
      "framework": "framework",
      "gitForkProtection": "gitForkProtection",
      "gitLFS": "gitLFS",
      "installCommand": "installCommand",
      "name": "name",
      "nodeVersion": "nodeVersion",
      "outputDirectory": "outputDirectory",
      "previewDeploymentsDisabled": "previewDeploymentsDisabled",
      "publicSource": "publicSource",
      "rootDirectory": "rootDirectory",
      "serverlessFunctionRegion": "serverlessFunctionRegion",
      "serverlessFunctionZeroConfigFailover": "serverlessFunctionZeroConfigFailover",
      "skewProtectionBoundaryAt": "skewProtectionBoundaryAt",
      "skewProtectionMaxAge": "skewProtectionMaxAge",
      "sourceFilesOutsideRootDirectory": "sourceFilesOutsideRootDirectory",
      "enablePreviewFeedback": "enablePreviewFeedback",
      "enableProductionFeedback": "enableProductionFeedback",
      "enableAffectedProjectsDeployments": "enableAffectedProjectsDeployments",
      "oidcTokenConfig": "oidcTokenConfig",
      "passwordProtection": "passwordProtection",
      "ssoProtection": "ssoProtection",
      "trustedIps": "trustedIps",
      "optionsAllowlist": "optionsAllowlist",
      "connectConfigurations": "connectConfigurations"
    }
  },
  inputParamsSchema
}

export default tool