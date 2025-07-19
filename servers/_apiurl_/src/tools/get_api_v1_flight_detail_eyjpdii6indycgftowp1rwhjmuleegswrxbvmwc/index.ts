import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_flight_detail_eyjpdii6indycgftowp1rwhjmuleegswrxbvmwc",
  "toolDescription": "Detail",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/flight/detail/eyJpdiI6IndycGFtOWp1RWhJMUlEeGswRXBvMWc9PSIsInZhbHVlIjoieFBrRTBGYnVmZUNJSmE1dnNNUzUzd0Z4aDhTNUx6WnRFaGx0Z3Nobk1UST0iLCJtYWMiOiI1OTZjNWQyNTVhOTQwMGZjMjc0NDNiYWFlYmFmM2MxOWVlNmJmNGYyNGY0M2Q1ZjMwNmExM2IxMWFkYzdmZWNmIiwidGFnIjoiIn0=",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "jwt <mcp-env-var>JWT_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "JWT_CREDENTIALS"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool