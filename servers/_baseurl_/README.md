# @open-mcp/_baseurl_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_baseurl_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_baseurl_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_baseurl_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
NOAUTH_CREDENTIALS='...'
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _baseurl_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _baseurl_ \
  .cursor/mcp.json \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add _baseurl_ \
  /path/to/client/config.json \
  --NOAUTH_CREDENTIALS=$NOAUTH_CREDENTIALS \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_baseurl_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_baseurl_"],
      "env": {"NOAUTH_CREDENTIALS":"...","API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `NOAUTH_CREDENTIALS` - gets sent to the API provider
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### post_api_account_oauth_token

**Environment variables**

- `NOAUTH_CREDENTIALS`

**Input schema**

No input parameters

### get_api_v1_0_pacientes_idpaciente_

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)

### get_api_v1_0_pacientes_dni_dni_

**Environment variables**

- `API_KEY`

**Input schema**

- `dni` (string)

### get_api_v1_0_pacientes_telefono_telefono_

**Environment variables**

- `API_KEY`

**Input schema**

- `telefono` (string)

### get_api_v1_0_aseguradoras

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_api_v1_0_aseguradoras_privados

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_api_v1_0_aseguradoras_pacientes_idpaciente_

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)

### get_api_v1_0_especialidades

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_api_v1_0_especialidades_aseguradoras_idaseguradora_

**Environment variables**

- `API_KEY`

**Input schema**

- `idAseguradora` (string)

### get_api_v1_0_especialistas_especialidades_idespecialidad_

**Environment variables**

- `API_KEY`

**Input schema**

- `idEspecialidad` (string)

### get_api_v1_0_especialistas_especialidades_idespecialidad_asegura

**Environment variables**

- `API_KEY`

**Input schema**

- `idEspecialidad` (string)
- `idAseguradora` (string)

### get_api_v1_0_especialistas_idespecialista_

**Environment variables**

- `API_KEY`

**Input schema**

- `idEspecialista` (string)

### get_api_v1_0_tiposcitas_especialistas_idespecialista_

**Environment variables**

- `API_KEY`

**Input schema**

- `idEspecialista` (string)

### get_api_v1_0_citas_disponibilidad_huecos_pacientes_idpaciente_as

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)
- `idAseguradora` (string)
- `idEspecialidad` (string)
- `idEspecialista` (string)
- `idTipoCita` (string)
- `fechaDesde` (string)
- `fechaHasta` (string)

### get_api_v1_0_citas_disponibilidad_dias_pacientes_idpaciente_aseg

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)
- `idAseguradora` (string)
- `idEspecialidad` (string)
- `idEspecialista` (string)
- `idTipoCita` (string)
- `fechaDesde` (string)
- `fechaHasta` (string)

### post_api_v1_0_citas

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_api_v1_0_citas_idcita_

**Environment variables**

- `API_KEY`

**Input schema**

- `idCita` (string)

### get_api_v1_0_citas_pacientes_idpaciente_pendientes

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)

### get_api_v1_0_citas_pacientes_idpaciente_realizadas

**Environment variables**

- `API_KEY`

**Input schema**

- `idPaciente` (string)
