# @open-mcp/api_portaldatransparencia_gov_br

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_portaldatransparencia_gov_br": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_portaldatransparencia_gov_br@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_portaldatransparencia_gov_br@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
CHAVE_API_DADOS='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_portaldatransparencia_gov_br \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --CHAVE_API_DADOS=$CHAVE_API_DADOS
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_portaldatransparencia_gov_br \
  .cursor/mcp.json \
  --CHAVE_API_DADOS=$CHAVE_API_DADOS
```

### Other

```bash
npx @open-mcp/config add api_portaldatransparencia_gov_br \
  /path/to/client/config.json \
  --CHAVE_API_DADOS=$CHAVE_API_DADOS
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_portaldatransparencia_gov_br": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_portaldatransparencia_gov_br"],
      "env": {"CHAVE_API_DADOS":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `CHAVE_API_DADOS` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### viagensporperiodoeorgao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `dataIdaDe` (string)
- `dataIdaAte` (string)
- `dataRetornoDe` (string)
- `dataRetornoAte` (string)
- `codigoOrgao` (string)
- `pagina` (integer)

### viagem

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### viagensporcpf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cpf` (string)
- `pagina` (integer)

### situacaoimovel

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

No input parameters

### dadosservidores

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `tipoServidor` (integer)
- `situacaoServidor` (integer)
- `cpf` (string)
- `nome` (string)
- `codigoFuncaoCargo` (string)
- `orgaoServidorExercicio` (string)
- `orgaoServidorLotacao` (string)
- `pagina` (integer)

### servidor

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### remuneracoesservidores

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)
- `cpf` (string)
- `mesAno` (integer)
- `pagina` (integer)

### servidoragregadopororgao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `orgaoLotacao` (string)
- `orgaoExercicio` (string)
- `tipoServidor` (integer)
- `tipoVinculo` (integer)
- `licenca` (integer)
- `pagina` (integer)

### listarfuncoesecargos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `pagina` (integer)

### segurodefesos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### segurodefesosporcodigo

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `pagina` (integer)

### segurodefesosdosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### safra

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### safrapornisoucpf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `pagina` (integer)

### safradosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### consultavaloresrenuncia

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nomeSiglaUF` (string)
- `codigoIbge` (string)
- `cnpj` (string)
- `pagina` (integer)

### consultapessoajuridicasimunesisentas

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nomeSiglaUF` (string)
- `codigoIbge` (string)
- `cnpj` (string)
- `beneficiarioNomeFantasia` (string)
- `pagina` (integer)

### consultapessoasjuridicashabilitadasbeneficiofiscal

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nomeSiglaUF` (string)
- `codigoIbge` (string)
- `cnpj` (string)
- `beneficiarioNomeFantasia` (string)
- `pagina` (integer)

### peti

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### peti_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `pagina` (integer)

### petibeneficiariopormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### pj

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cnpj` (string)

### pf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cpf` (string)
- `nis` (string)

### relacaoocupantes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoOrgaoResponsavelGestaoSiafi` (string)
- `descricaoOrgaoOcupante` (string)
- `cpfOcupante` (string)
- `dataInicioOcupacao` (string)
- `dataFimOcupacao` (string)
- `pagina` (integer)

### dadospeps

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cpf` (string)
- `nome` (string)
- `descricaoFuncao` (string)
- `orgaoServidorLotacao` (string)
- `dataInicioExercicioDe` (string)
- `datInicioExercicioAte` (string)
- `dataFimExercicioDe` (string)
- `datFimExercicioAte` (string)
- `pagina` (integer)

### orgaossiape

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `descricao` (string)
- `pagina` (integer)

### orgaossiafi

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `descricao` (string)
- `pagina` (integer)

### novobolsafamiliasacadopornis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nis` (string)
- `anoMesReferencia` (integer)
- `anoMesCompetencia` (integer)
- `pagina` (integer)

### novobolsafamiliasacadodosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### novobolsafamiliapormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### notasfiscais

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cnpjEmitente` (string)
- `codigoOrgao` (string)
- `nomeProduto` (string)
- `pagina` (integer)

### notafiscal

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `chaveUnicaNotaFiscal` (string)

### licitacoes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `dataInicial` (string)
- `dataFinal` (string)
- `codigoOrgao` (string)
- `pagina` (integer)

### licitacao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### ugs

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `pagina` (integer)

### licitacoesporugmodalidadeenumero

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoUG` (string)
- `numero` (string)
- `codigoModalidade` (string)

### licitacoesporprocesso

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `processo` (string)

### participantes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoUG` (string)
- `numero` (string)
- `codigoModalidade` (string)
- `pagina` (integer)

### modalidades

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

No input parameters

### itenslicitados

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)
- `pagina` (integer)

### empenhos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoUG` (string)
- `numero` (string)
- `codigoModalidade` (string)
- `pagina` (integer)

### contratosrelacionados

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoUG` (string)
- `numero` (string)
- `codigoModalidade` (string)

### relacaoimoveis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoOrgaoSiafiResponsavelGestao` (string)
- `situacao` (string)
- `regiao` (string)
- `cep` (string)
- `endereco` (string)
- `pagina` (integer)

### emendas

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoEmenda` (string)
- `numeroEmenda` (string)
- `nomeAutor` (string)
- `tipoEmenda` (string)
- `ano` (integer)
- `codigoFuncao` (string)
- `codigoSubfuncao` (string)
- `pagina` (integer)

### documentosrelacionadosaemenda

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `pagina` (integer)

### listatipotransferencia

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

No input parameters

### recursosrecebidos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAnoInicio` (string)
- `mesAnoFim` (string)
- `nomeFavorecido` (string)
- `codigoFavorecido` (string)
- `tipoFavorecido` (string)
- `uf` (string)
- `codigoIBGE` (string)
- `orgaoSuperior` (string)
- `orgao` (string)
- `unidadeGestora` (string)
- `pagina` (integer)

### despesaspororgao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `ano` (integer)
- `orgaoSuperior` (string)
- `orgao` (string)
- `pagina` (integer)

### despesasporfuncao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `ano` (integer)
- `funcao` (string)
- `subfuncao` (string)
- `programa` (string)
- `acao` (string)
- `pagina` (integer)

### despesasporfuncaomovimentacaoliquida

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `ano` (integer)
- `funcao` (string)
- `subfuncao` (string)
- `programa` (string)
- `acao` (string)
- `grupoDespesa` (string)
- `elementoDespesa` (string)
- `modalidadeAplicacao` (string)
- `idPlanoOrcamentario` (integer)
- `pagina` (integer)

### despesasporplanoorcamentario

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codPlanoOrcamentario` (string)
- `descPlanoOrcamentario` (string)
- `codPOIdentfAcompanhamento` (string)
- `ano` (integer)
- `pagina` (integer)

### itensdeempenho

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoDocumento` (string)
- `pagina` (integer)

### consultahistorico

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoDocumento` (string)
- `sequencial` (integer)
- `pagina` (integer)

### subfuncoes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `anoInicio` (integer)
- `codigo` (string)
- `pagina` (integer)

### programas

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `anoInicio` (integer)
- `codigo` (string)
- `pagina` (integer)

### funcionalprogramatica

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `ano` (integer)
- `pagina` (integer)

### funcoes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `anoInicio` (integer)
- `codigo` (string)
- `pagina` (integer)

### acoes

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `anoInicio` (integer)
- `codigo` (string)
- `pagina` (integer)

### favorecidosfinaispordocumento

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoDocumento` (string)
- `pagina` (integer)

### empenhosimpactados

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoDocumento` (string)
- `fase` (integer)
- `pagina` (integer)

### documentos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `unidadeGestora` (string)
- `gestao` (string)
- `dataEmissao` (string)
- `fase` (integer)
- `pagina` (integer)

### documentoporcodigo

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)

### documentosrelacionados

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoDocumento` (string)
- `fase` (integer)

### documentosporfavorecido

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoPessoa` (string)
- `fase` (integer)
- `ano` (integer)
- `ug` (string)
- `gestao` (string)
- `ordenacaoResultado` (integer)
- `pagina` (integer)

### buscartransferencias

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoOrgao` (string)
- `tipoTransferencia` (integer)
- `uf` (string)
- `codigoIbge` (string)
- `pagina` (integer)

### despesasporfuncaomovimentacaoliquida_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAnoLancamento` (integer)
- `funcao` (string)
- `subfuncao` (string)
- `programa` (string)
- `acao` (string)
- `grupoDespesa` (string)
- `elementoDespesa` (string)
- `modalidadeAplicacao` (string)
- `idPlanoOrcamentario` (integer)
- `pagina` (integer)

### convenios

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `dataInicial` (string)
- `dataFinal` (string)
- `dataUltimaLiberacaoInicial` (string)
- `dataUltimaLiberacaoFinal` (string)
- `dataVigenciaInicial` (string)
- `dataVigenciaFinal` (string)
- `convenente` (string)
- `tipoConvenente` (string)
- `numero` (string)
- `numeroOriginal` (string)
- `codigoOrgao` (string)
- `uf` (string)
- `codigoIBGE` (string)
- `situacao` (string)
- `tipoInstrumento` (string)
- `funcao` (string)
- `subfuncao` (string)
- `valorLiberadoDe` (string)
- `valorLiberadoAte` (string)
- `valorTotalDe` (string)
- `valorTotalAte` (string)
- `pagina` (integer)

### listatiposdeinstrumento

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

No input parameters

### conveniospornumero

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `numero` (string)
- `pagina` (integer)

### conveniospornumeroprocesso

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `numeroProcesso` (string)
- `pagina` (integer)

### conveniospornumerooriginal

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `numeroOriginal` (string)
- `pagina` (integer)

### convenio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### contratos

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `dataInicial` (string)
- `dataFinal` (string)
- `codigoOrgao` (string)
- `pagina` (integer)

### termosaditivosdocontrato

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### contratosporprocesso

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `processo` (string)
- `pagina` (integer)

### contratospornumero

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `numero` (string)
- `pagina` (integer)

### itenscontratados

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)
- `pagina` (integer)

### contrato

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### documentosrelacionadosaocontrato

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### contratoporcpfcnpj

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cpfCnpj` (string)
- `pagina` (integer)

### apostilamentosdocontrato

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### cnep

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoSancionado` (string)
- `nomeSancionado` (string)
- `orgaoSancionador` (string)
- `dataInicialSancao` (string)
- `dataFinalSancao` (string)
- `pagina` (integer)

### cnep_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### cepim

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cnpjSancionado` (string)
- `nomeSancionado` (string)
- `ufSancionado` (string)
- `orgaoEntidade` (string)
- `pagina` (integer)

### cepim_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### ceis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoSancionado` (string)
- `nomeSancionado` (string)
- `orgaoSancionador` (string)
- `dataInicialSancao` (string)
- `dataFinalSancao` (string)
- `pagina` (integer)

### ceis_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### ceaf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cpfSancionado` (string)
- `nomeSancionado` (string)
- `orgaoLotacao` (string)
- `dataPublicacaoInicio` (string)
- `dataPublicacaoFim` (string)
- `pagina` (integer)

### ceaf_1

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)

### cartao

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesExtratoInicio` (string)
- `mesExtratoFim` (string)
- `dataTransacaoInicio` (string)
- `dataTransacaoFim` (string)
- `tipoCartao` (integer)
- `codigoOrgao` (string)
- `cpfPortador` (string)
- `cpfCnpjFavorecido` (string)
- `valorDe` (string)
- `valorAte` (string)
- `pagina` (integer)

### bpc

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### bpcpornisoucpf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `pagina` (integer)

### bpcdosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### bolsafamiliasacadopornis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nis` (string)
- `anoMesReferencia` (integer)
- `anoMesCompetencia` (integer)
- `pagina` (integer)

### bolsafamiliasacadodosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### bolsafamiliapormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### bolsafamiliadisponivelporcpfounis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigo` (string)
- `anoMesReferencia` (integer)
- `anoMesCompetencia` (integer)
- `pagina` (integer)

### bolsafamiliadisponiveldosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### auxilioemergencialpormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### auxilioemergencialpornisoucpf

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `codigoBeneficiario` (string)
- `codigoResponsavelFamiliar` (string)
- `pagina` (integer)

### auxilioemergencialbeneficiarospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### auxiliobrasilsacadopornis

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `nis` (string)
- `anoMesReferencia` (integer)
- `anoMesCompetencia` (integer)
- `pagina` (integer)

### auxiliobrasilsacadodosbeneficiariospormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### auxiliobrasilpormunicipio

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `mesAno` (integer)
- `codigoIbge` (string)
- `pagina` (integer)

### acordosleniencia

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `cnpjSancionado` (string)
- `nomeSancionado` (string)
- `situacao` (string)
- `dataInicialSancao` (string)
- `dataFinalSancao` (string)
- `pagina` (integer)

### acordoleniencia

**Environment variables**

- `CHAVE_API_DADOS`

**Input schema**

- `id` (integer)
