import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateatom",
  "toolDescription": "Modifies or updates a Runtime object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Atom/{id}",
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
      "capabilities": "capabilities",
      "cloudId": "cloudId",
      "cloudMoleculeId": "cloudMoleculeId",
      "cloudMoleculeName": "cloudMoleculeName",
      "cloudName": "cloudName",
      "cloudOwnerName": "cloudOwnerName",
      "cluster": "cluster",
      "createdBy": "createdBy",
      "currentVersion": "currentVersion",
      "dateInstalled": "dateInstalled",
      "forceRestartTime": "forceRestartTime",
      "hostName": "hostName",
      "id": "b_id",
      "instanceId": "instanceId",
      "isCloudAttachment": "isCloudAttachment",
      "name": "name",
      "purgeHistoryDays": "purgeHistoryDays",
      "purgeImmediate": "purgeImmediate",
      "status": "status",
      "type": "type",
      "statusDetail": "statusDetail"
    }
  },
  inputParamsSchema
}

export default tool