import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_getscsbidliststtusthngppssrch",
  "toolDescription": "검색조건 기반 물품 낙찰 현황 조회",
  "baseUrl": "http://apis.data.go.kr/1230000/as/ScsbidInfoService",
  "path": "/getScsbidListSttusThngPPSSrch",
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
      "numOfRows": "numOfRows",
      "bidNtceNm": "bidNtceNm",
      "ntceInsttNm": "ntceInsttNm",
      "dminsttNm": "dminsttNm",
      "indstrytyNm": "indstrytyNm",
      "refNo": "refNo"
    }
  },
  inputParamsSchema
}

export default tool