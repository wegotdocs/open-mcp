import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_getopengresultlistinfothngpreparpcdetail",
  "toolDescription": "예비가격 상세 조회",
  "baseUrl": "http://apis.data.go.kr/1230000/as/ScsbidInfoService",
  "path": "/getOpengResultListInfoThngPreparPcDetail",
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