import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_getscsbidliststtusthng",
  "toolDescription": "물품 낙찰 현황 조회",
  "baseUrl": "http://apis.data.go.kr/1230000/as/ScsbidInfoService",
  "path": "/getScsbidListSttusThng",
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
      "inqryDiv": "inqryDiv",
      "inqryBgnDt": "inqryBgnDt",
      "inqryEndDt": "inqryEndDt",
      "pageNo": "pageNo",
      "numOfRows": "numOfRows"
    }
  },
  inputParamsSchema
}

export default tool