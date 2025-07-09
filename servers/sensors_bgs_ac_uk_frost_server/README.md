# @open-mcp/sensors_bgs_ac_uk_frost_server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "sensors_bgs_ac_uk_frost_server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/sensors_bgs_ac_uk_frost_server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/sensors_bgs_ac_uk_frost_server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add sensors_bgs_ac_uk_frost_server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add sensors_bgs_ac_uk_frost_server \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add sensors_bgs_ac_uk_frost_server \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "sensors_bgs_ac_uk_frost_server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/sensors_bgs_ac_uk_frost_server"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_v1_1_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_datastreams_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_datastreams_entityid_observations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_datastreams_entityid_observedproperty

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_datastreams_entityid_observedproperty_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_datastreams_entityid_sensor

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_datastreams_entityid_sensor_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_datastreams_entityid_thing

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_datastreams_entityid_thing_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_datastreams_entityid_thing_locations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_featuresofinterest

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_featuresofinterest_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_featuresofinterest_entityid_observations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_locations

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_locations_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_locations_entityid_things

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_datastream

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_datastream_observations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_datastream_observedproperty

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_datastream_observedproperty_datas

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_datastream_sensor

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_datastream_sensor_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_datastream_thing

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_datastream_thing_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_datastream_thing_locations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observations_entityid_featureofinterest

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observations_entityid_featureofinterest_observations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observedproperties

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_observedproperties_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_observedproperties_entityid_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_sensors

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_sensors_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_sensors_entityid_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_things

**Environment variables**

No environment variables required

**Input schema**

- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_things_entityid_

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$select` (string)
- `$expand` (string)

### get_v1_1_things_entityid_datastreams

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)

### get_v1_1_things_entityid_locations

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (integer)
- `$skip` (integer)
- `$top` (integer)
- `$count` (boolean)
- `$select` (string)
- `$expand` (string)
- `$filter` (string)
