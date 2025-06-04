import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_update",
  "toolDescription": "update properties of an Authentiq ID.\n(not operational in v4; use PUT for now)\n\nv5: POST issuer-signed email & phone scopes in\na self-signed JWT\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key/{PK}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "PK": "PK"
    }
  },
  inputParamsSchema
}

export default tool