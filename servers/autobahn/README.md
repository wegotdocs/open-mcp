# @open-mcp/autobahn

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/autobahn add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/autobahn add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/autobahn add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "autobahn": {
      "command": "npx",
      "args": ["-y", "@open-mcp/autobahn"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/autobahn
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/autobahn`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### list_autobahnen

**Environment variables**



**Input schema**

```ts
{}
```

### list_roadworks

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_roadwork

**Environment variables**



**Input schema**

```ts
{
  "roadworkId": z.string()
}
```

### list_webcams

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_webcam

**Environment variables**



**Input schema**

```ts
{
  "webcamId": z.string()
}
```

### list_parking_lorries

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_parking_lorry

**Environment variables**



**Input schema**

```ts
{
  "lorryId": z.string()
}
```

### list_warnings

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_warning

**Environment variables**



**Input schema**

```ts
{
  "warningId": z.string()
}
```

### list_closures

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_closure

**Environment variables**



**Input schema**

```ts
{
  "closureId": z.string()
}
```

### list_charging_stations

**Environment variables**



**Input schema**

```ts
{
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}
```

### get_charging_station

**Environment variables**



**Input schema**

```ts
{
  "stationId": z.string()
}
```
