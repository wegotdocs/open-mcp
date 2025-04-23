# OpenMCP

https://www.open-mcp.org

OpenMCP is both:

1. a standard for converting web APIs into MCP servers
2. an open source registry of servers which follow the standard

Each OpenMCP server gives MCP clients the ability to make requests to a particular web API in a token-efficient way. Together the servers in the registry represent a broad range of services, empowering the underlying client LLMs to fetch data and perform actions on behalf of their users across many domains.

## Contents

- [Creating a server](#creating-a-server)
- [Adding OpenMCP servers to MCP clients](#adding-openmcp-servers-to-mcp-clients)
- [Converting web API -> OpenMCP](#converting-web-api---openmcp)

## Creating a server

https://www.open-mcp.org/servers/creating

## Adding OpenMCP servers to MCP clients

### Remote hosting

...

### Local hosting

<div style="position: relative; padding-bottom: 64.86486486486486%; height: 0;"><iframe src="https://www.loom.com/embed/aa26fed41f084ff1bd115436f9d799dd?sid=57a5ee90-875f-4c09-8d44-5b477555c883" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Requirements:

- Node.js v18 or later (includes npx and npm)

#### Claude desktop

```bash
npx @open-mcp/config add {server-id} \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --ENV_VAR=abc123
```

Now restart Claude desktop to load the tools.

#### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add {server-id} \
  .cursor/mcp.json \
  --ENV_VAR=abc123
```

Now go to `Cursor > Settings > Cursor Settings` then click `MCP` to ensure the server is enabled.

#### Other clients

```bash
npx @open-mcp/config add {server-id} \
  /path/to/config.json \
  --ENV_VAR=abc123
```

#### Alternatives

If you don't want to use the CLI you can use `npm` to install the package manually, then add a `node` command to your client config with an absolute path to `dist/index.js`. See the individual server READMEs for more details.

## Converting web API -> OpenMCP

### REST `openapi.yaml` / `openapi.json`

...

### gRPC `service.proto`

...

### JSON-RPC `openrpc.json`

...

### GraphQL `schema.gql`

...

### SOAP `service.wsdl`

...

### PostgREST `schema.sql`

...
