# @open-mcp/dadesobertes_fgc_cat_api_explore_v2_1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "dadesobertes_fgc_cat_api_explore_v2_1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/dadesobertes_fgc_cat_api_explore_v2_1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/dadesobertes_fgc_cat_api_explore_v2_1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
APIKEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add dadesobertes_fgc_cat_api_explore_v2_1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --APIKEY=$APIKEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add dadesobertes_fgc_cat_api_explore_v2_1 \
  .cursor/mcp.json \
  --APIKEY=$APIKEY
```

### Other

```bash
npx @open-mcp/config add dadesobertes_fgc_cat_api_explore_v2_1 \
  /path/to/client/config.json \
  --APIKEY=$APIKEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "dadesobertes_fgc_cat_api_explore_v2_1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/dadesobertes_fgc_cat_api_explore_v2_1"],
      "env": {"APIKEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `APIKEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getdatasets

**Environment variables**

- `APIKEY`

**Input schema**

- `select` (string)
- `where` (string)
- `order_by` (string)
- `limit` (integer)
- `offset` (integer)
- `refine` (string)
- `exclude` (string)
- `lang` (string)
- `timezone` (string)
- `group_by` (string)
- `include_links` (boolean)
- `include_app_metas` (boolean)

### listexportformats

**Environment variables**

- `APIKEY`

**Input schema**

No input parameters

### exportdatasets

**Environment variables**

- `APIKEY`

**Input schema**

- `format` (string)
- `select` (string)
- `where` (string)
- `order_by` (string)
- `group_by` (string)
- `limit` (integer)
- `offset` (integer)
- `refine` (string)
- `exclude` (string)
- `lang` (string)
- `timezone` (string)

### exportcatalogcsv

**Environment variables**

- `APIKEY`

**Input schema**

- `delimiter` (string)
- `list_separator` (string)
- `quote_all` (boolean)
- `with_bom` (boolean)

### exportcatalogdcat

**Environment variables**

- `APIKEY`

**Input schema**

- `dcat_ap_format` (string)
- `include_exports` (string)
- `use_labels_in_exports` (boolean)

### getdatasetsfacets

**Environment variables**

- `APIKEY`

**Input schema**

- `facet` (string)
- `refine` (string)
- `exclude` (string)
- `where` (string)
- `timezone` (string)

### getrecords

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `select` (string)
- `where` (string)
- `group_by` (string)
- `order_by` (string)
- `limit` (integer)
- `offset` (integer)
- `refine` (string)
- `exclude` (string)
- `lang` (string)
- `timezone` (string)
- `include_links` (boolean)
- `include_app_metas` (boolean)

### listdatasetexportformats

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)

### exportrecords

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `format` (string)
- `select` (string)
- `where` (string)
- `order_by` (string)
- `group_by` (string)
- `limit` (integer)
- `refine` (string)
- `exclude` (string)
- `lang` (string)
- `timezone` (string)
- `use_labels` (boolean)
- `compressed` (boolean)
- `epsg` (integer)

### exportrecordscsv

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `delimiter` (string)
- `list_separator` (string)
- `quote_all` (boolean)
- `with_bom` (boolean)

### exportrecordsparquet

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `parquet_compression` (string)

### exportrecordsgpx

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `name_field` (string)
- `description_field_list` (string)
- `use_extension` (boolean)

### getdataset

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `select` (string)
- `lang` (string)
- `timezone` (string)
- `include_links` (boolean)
- `include_app_metas` (boolean)

### getrecordsfacets

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `where` (string)
- `refine` (string)
- `exclude` (string)
- `facet` (string)
- `lang` (string)
- `timezone` (string)

### getdatasetattachments

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)

### getrecord

**Environment variables**

- `APIKEY`

**Input schema**

- `dataset_id` (string)
- `record_id` (string)
- `select` (string)
- `lang` (string)
- `timezone` (string)
