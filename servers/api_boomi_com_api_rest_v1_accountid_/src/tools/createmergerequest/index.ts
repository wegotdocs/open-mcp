import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmergerequest",
  "toolDescription": "Creates a MergeRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/MergeRequest",
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
      "MergeRequestDetails": "MergeRequestDetails",
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "destinationBranchId": "destinationBranchId",
      "destinationBranchName": "destinationBranchName",
      "id": "id",
      "inactiveDate": "inactiveDate",
      "lockNonce": "lockNonce",
      "lockedBy": "lockedBy",
      "lockedDate": "lockedDate",
      "mergeRequestAction": "mergeRequestAction",
      "modifiedBy": "modifiedBy",
      "modifiedDate": "modifiedDate",
      "note": "note",
      "previousStage": "previousStage",
      "priorityBranch": "priorityBranch",
      "sourceBranchId": "sourceBranchId",
      "sourceBranchName": "sourceBranchName",
      "stage": "stage",
      "strategy": "strategy"
    }
  },
  inputParamsSchema
}

export default tool