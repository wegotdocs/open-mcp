import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_publish",
  "toolDescription": "Saves published form definition and its associated meta data.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "versionId": "versionId",
      "versionLabel": "versionLabel",
      "versionComments": "versionComments",
      "name": "name",
      "description": "description",
      "allowAnonymous": "allowAnonymous",
      "formDefinition": "formDefinition",
      "useInMobileAndMyNintex": "useInMobileAndMyNintex",
      "userId": "userId",
      "formType": "formType",
      "parentId": "parentId",
      "assignedUse": "assignedUse"
    },
    "header": {
      "ntx-correlation-id": "ntx-correlation-id",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool