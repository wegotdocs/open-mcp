import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "convenios",
  "toolDescription": "Consulta todos convênios do Poder Executivo Federal",
  "baseUrl": "https://api.portaldatransparencia.gov.br",
  "path": "/api-de-dados/convenios",
  "method": "get",
  "security": [
    {
      "key": "chave-api-dados",
      "value": "<mcp-env-var>CHAVE_API_DADOS</mcp-env-var>",
      "in": "header",
      "envVarName": "CHAVE_API_DADOS"
    }
  ],
  "paramsMap": {
    "query": {
      "dataInicial": "dataInicial",
      "dataFinal": "dataFinal",
      "dataUltimaLiberacaoInicial": "dataUltimaLiberacaoInicial",
      "dataUltimaLiberacaoFinal": "dataUltimaLiberacaoFinal",
      "dataVigenciaInicial": "dataVigenciaInicial",
      "dataVigenciaFinal": "dataVigenciaFinal",
      "convenente": "convenente",
      "tipoConvenente": "tipoConvenente",
      "numero": "numero",
      "numeroOriginal": "numeroOriginal",
      "codigoOrgao": "codigoOrgao",
      "uf": "uf",
      "codigoIBGE": "codigoIBGE",
      "situacao": "situacao",
      "tipoInstrumento": "tipoInstrumento",
      "funcao": "funcao",
      "subfuncao": "subfuncao",
      "valorLiberadoDe": "valorLiberadoDe",
      "valorLiberadoAte": "valorLiberadoAte",
      "valorTotalDe": "valorTotalDe",
      "valorTotalAte": "valorTotalAte",
      "pagina": "pagina"
    }
  },
  inputParamsSchema
}

export default tool