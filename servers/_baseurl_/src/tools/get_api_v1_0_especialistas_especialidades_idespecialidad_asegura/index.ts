import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_especialistas_especialidades_idespecialidad_asegura",
  "toolDescription": "especialistas/especialidades/{idEspecialidad}/aseguradoras/{idAseguradora}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/especialistas/especialidades/{idEspecialidad}/aseguradoras/{idAseguradora}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "idEspecialidad": "idEspecialidad",
      "idAseguradora": "idAseguradora"
    }
  },
  inputParamsSchema
}

export default tool