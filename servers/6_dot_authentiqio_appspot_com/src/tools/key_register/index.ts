import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_register",
  "toolDescription": "Register a new ID `JWT(sub, devtoken)`\n\nv5: `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool