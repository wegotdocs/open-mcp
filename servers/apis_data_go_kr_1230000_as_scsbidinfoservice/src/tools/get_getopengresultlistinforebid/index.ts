import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_getopengresultlistinforebid",
  "toolDescription": "재입찰 이력 조회",
  "baseUrl": "http://apis.data.go.kr/1230000/as/ScsbidInfoService",
  "path": "/getOpengResultListInfoRebid",
  "method": "get",
  "security": [
    {
      "key": "ServiceKey",
      "value": "<mcp-env-var>SERVICEKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "SERVICEKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "bidNtceNo": "bidNtceNo",
      "bidNtceOrd": "bidNtceOrd",
      "bidClsfcNo": "bidClsfcNo",
      "rbidNo": "rbidNo",
      "pageNo": "pageNo",
      "numOfRows": "numOfRows"
    }
  },
  inputParamsSchema
}

export default tool