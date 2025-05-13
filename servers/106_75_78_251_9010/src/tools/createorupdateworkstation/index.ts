import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdateworkstation",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/work/station/createOrUpdateWorkStation",
  "method": "post",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "stationCode": "stationCode",
      "stationName": "stationName",
      "workStationStatus": "workStationStatus",
      "warehouseCode": "warehouseCode",
      "warehouseAreaId": "warehouseAreaId",
      "enable": "enable",
      "workStationMode": "workStationMode",
      "allowWorkStationModes": "allowWorkStationModes",
      "workLocations": "workLocations",
      "putWalls": "putWalls",
      "workStationConfig": "workStationConfig",
      "position": "position",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool