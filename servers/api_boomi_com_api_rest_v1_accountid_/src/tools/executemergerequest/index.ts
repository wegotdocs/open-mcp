import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executemergerequest",
  "toolDescription": "Executes an action on a MergeRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/MergeRequest/execute/{id}",
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
    "path": {
      "id": "id"
    },
    "body": {
      "MergeRequestDetails": "MergeRequestDetails",
      "createdBy": "createdBy",
      "createdDate": "createdDate",
      "destinationBranchId": "destinationBranchId",
      "destinationBranchName": "destinationBranchName",
      "id": "b_id",
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