# @open-mcp/google-maps

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "google-maps": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/google-maps@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/google-maps@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add google-maps \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --KEY=$KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add google-maps \
  .cursor/mcp.json \
  --KEY=$KEY
```

### Other

```bash
npx @open-mcp/config add google-maps \
  /path/to/client/config.json \
  --KEY=$KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": ["-y", "@open-mcp/google-maps"],
      "env": {"KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### geolocate

**Environment variables**

- `KEY`

**Input schema**

- `homeMobileCountryCode` (integer)
- `homeMobileNetworkCode` (integer)
- `radioType` (string)
- `carrier` (string)
- `considerIp` (string)
- `cellTowers` (array)
- `wifiAccessPoints` (array)

### directions

**Environment variables**

- `KEY`

**Input schema**

- `arrival_time` (number)
- `departure_time` (number)
- `alternatives` (boolean)
- `avoid` (string)
- `destination` (string)
- `origin` (string)
- `units` (string)
- `waypoints` (string)
- `language` (string)
- `mode` (string)
- `region` (string)
- `traffic_model` (string)
- `transit_mode` (string)
- `transit_routing_preference` (string)

### elevation

**Environment variables**

- `KEY`

**Input schema**

- `locations` (array)
- `path` (array)
- `samples` (number)

### geocode

**Environment variables**

- `KEY`

**Input schema**

- `address` (string)
- `bounds` (array)
- `components` (array)
- `latlng` (string)
- `location_type` (array)
- `place_id` (string)
- `result_type` (array)
- `language` (string)
- `region` (string)

### timezone

**Environment variables**

- `KEY`

**Input schema**

- `language` (string)
- `location` (string)
- `timestamp` (number)

### snaptoroads

**Environment variables**

- `KEY`

**Input schema**

- `path` (array)
- `interpolate` (boolean)

### nearestroads

**Environment variables**

- `KEY`

**Input schema**

- `points` (array)

### distancematrix

**Environment variables**

- `KEY`

**Input schema**

- `arrival_time` (number)
- `departure_time` (number)
- `avoid` (string)
- `destinations` (array)
- `origins` (array)
- `units` (string)
- `language` (string)
- `mode` (string)
- `region` (string)
- `traffic_model` (string)
- `transit_mode` (string)
- `transit_routing_preference` (string)

### placedetails

**Environment variables**

- `KEY`

**Input schema**

- `place_id` (string)
- `fields` (array)
- `sessiontoken` (string)
- `language` (string)
- `region` (string)
- `reviews_sort` (string)
- `reviews_no_translations` (boolean)

### findplacefromtext

**Environment variables**

- `KEY`

**Input schema**

- `fields` (array)
- `input` (string)
- `inputtype` (string)
- `locationbias` (string)
- `language` (string)

### nearbysearch

**Environment variables**

- `KEY`

**Input schema**

- `keyword` (string)
- `location` (string)
- `maxprice` (string)
- `minprice` (string)
- `name` (string)
- `opennow` (boolean)
- `pagetoken` (string)
- `rankby` (string)
- `radius` (number)
- `type` (string)
- `language` (string)

### textsearch

**Environment variables**

- `KEY`

**Input schema**

- `location` (string)
- `maxprice` (string)
- `minprice` (string)
- `opennow` (boolean)
- `pagetoken` (string)
- `query` (string)
- `radius` (number)
- `type` (string)
- `language` (string)
- `region` (string)

### placephoto

**Environment variables**

- `KEY`

**Input schema**

- `photo_reference` (string)
- `maxheight` (number)
- `maxwidth` (number)

### queryautocomplete

**Environment variables**

- `KEY`

**Input schema**

- `input` (string)
- `offset` (number)
- `location` (string)
- `radius` (number)
- `language` (string)

### autocomplete

**Environment variables**

- `KEY`

**Input schema**

- `input` (string)
- `sessiontoken` (string)
- `components` (string)
- `strictbounds` (boolean)
- `offset` (number)
- `origin` (string)
- `location` (string)
- `locationbias` (string)
- `locationrestriction` (string)
- `radius` (number)
- `types` (string)
- `language` (string)
- `region` (string)

### streetview

**Environment variables**

- `KEY`

**Input schema**

- `fov` (number)
- `heading` (number)
- `location` (string)
- `pano` (string)
- `pitch` (number)
- `radius` (number)
- `return_error_code` (boolean)
- `signature` (string)
- `size` (string)
- `source` (string)

### streetviewmetadata

**Environment variables**

- `KEY`

**Input schema**

- `heading` (number)
- `location` (string)
- `pano` (string)
- `pitch` (number)
- `radius` (number)
- `return_error_code` (boolean)
- `signature` (string)
- `size` (string)
- `source` (string)
