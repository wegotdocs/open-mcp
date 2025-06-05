import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_0_citas_disponibilidad_huecos_pacientes_idpaciente_as",
  "toolDescription": "citas/disponibilidad/huecos/pacientes/{idPaciente}/aseguradoras/{idAseguradora}/especialidades/{idEspecialidad}/especialistas/{idEspecialista}/tiposCitas/{idTipoCita}/fechaDesde{fechaDesde}/fechaHasta{fechaHasta}",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/v1.0/citas/disponibilidad/huecos/pacientes/{idPaciente}/aseguradoras/{idAseguradora}/especialidades/{idEspecialidad}/especialistas/{idEspecialista}/tiposCitas/{idTipoCita}/fechaDesde/{fechaDesde}/fechaHasta/{fechaHasta}",
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
      "idPaciente": "idPaciente",
      "idAseguradora": "idAseguradora",
      "idEspecialidad": "idEspecialidad",
      "idEspecialista": "idEspecialista",
      "idTipoCita": "idTipoCita",
      "fechaDesde": "fechaDesde",
      "fechaHasta": "fechaHasta"
    }
  },
  inputParamsSchema
}

export default tool