import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_bind",
  "toolDescription": "Update Authentiq ID by replacing the object.\n\nv4: `JWT(sub,email,phone)` to bind email/phone hash; \n\nv5: POST issuer-signed email & phone scopes\nand PUT to update registration `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/aut",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key/{PK}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "PK": "PK"
    }
  },
  inputParamsSchema
}

export default tool