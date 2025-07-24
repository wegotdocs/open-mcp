# @open-mcp/scarf

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "scarf": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/scarf@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/scarf@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add scarf \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add scarf \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add scarf \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "scarf": {
      "command": "npx",
      "args": ["-y", "@open-mcp/scarf"],
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

### parameters_v2_domains_owner_domain_ref_status

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getdomainstatus

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_domains_owner_domain_ref_request_verification

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### requestdomainverification

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### search

**Environment variables**

No environment variables required

**Input schema**

- `query` (string)
- `context` (string)

### parameters_v2_pixels_owner_overview

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpixelsoverview

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### parameters_v2_packages_owner_overview

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagesoverview

**Environment variables**

No environment variables required

**Input schema**

- `type` (array)
- `permission` (string)
- `after` (string)
- `per_page` (integer)

### parameters_v2_packages_owner_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackages

**Environment variables**

No environment variables required

**Input schema**

- `type` (array)
- `permission` (string)
- `after` (string)
- `per_page` (integer)

### createpackage

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_company_rollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportcompanyrollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_aggregates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportentityaggregates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_companies_owner_scoring

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportentityscarfscores

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_companies_owner_domain_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportentitycompanyevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_companies_owner_package_rollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportcompanypackagerollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_companies_owner_pixel_rollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportcompanypixelrollup

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportentitypackageevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_tracking_pixels_owner_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportentitytrackingpixelevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_tracking_pixels_owner_tracking_pixel_id_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exporttrackingpixelevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### exportpackageevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_type_package_name_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagebyname

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagebyid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatepackage

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletepackage

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_tracking_pixels

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagetrackingpixels

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### parameters_v2_packages_owner_package_id_domains

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagedomains

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createpackagedomain

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### parameters_v2_packages_owner_package_id_domains_domain_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagedomain

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletepackagedomain

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_routes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackageroutes

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### createpackageroute

**Environment variables**

No environment variables required

**Input schema**

- `type` (string)
- `incoming_path` (string)
- `outgoing_url` (string)

### parameters_v2_packages_owner_package_id_routes_route_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackageroute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatepackageroute

**Environment variables**

No environment variables required

**Input schema**

- `type` (string)
- `incoming_path` (string)
- `outgoing_url` (string)

### deletepackageroute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_permissions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getpackagepermissions

**Environment variables**

No environment variables required

**Input schema**

- `per_page` (integer)
- `after` (string)

### setpackagepermission

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `permission_level` (string)

### parameters_v2_packages_owner_package_id_permissions_username_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletepackagepermission

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_organizations_organization_name_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getorganization

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updateorganization

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `description` (string)
- `website` (string)
- `billing_email` (string)

### parameters_v2_organizations_organization_name_members

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getorganizationmembers

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### addorganizationmember

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `role` (string)

### parameters_v2_organizations_organization_name_members_invites

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### invitemember

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getorganizationpendinginvites

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletependingorganizationinvite

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)

### parameters_v2_organizations_organization_name_members_organizati

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getorganizationmember

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updateorganizationmemberrole

**Environment variables**

No environment variables required

**Input schema**

- `role` (string)

### deleteorganizationmember

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_users_username_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getuserinformation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_users_username_organizations

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getuserorganizations

**Environment variables**

No environment variables required

**Input schema**

- `organization_id` (string)
- `per_page` (integer)

### parameters_v2_tracking_pixels_owner_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gettrackingpixels

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### createtrackingpixel

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `package_id` (string)
- `importance` (string)
- `track_companies` (boolean)
- `short_description` (string)
- `long_description` (string)

### parameters_v2_tracking_pixels_owner_tracking_pixel_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gettrackingpixel

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatetrackingpixel

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `package_id` (string)
- `importance` (string)
- `track_companies` (boolean)
- `short_description` (string)
- `long_description` (string)

### deletetrackingpixel

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_collections_owner_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getcollections

**Environment variables**

No environment variables required

**Input schema**

- `after` (string)
- `per_page` (integer)

### createcollection

**Environment variables**

No environment variables required

**Input schema**

- `pattern` (string)
- `public_domain` (string)
- `backend_domain` (string)
- `type` (string)

### parameters_v2_collections_owner_collection_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getcollection

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### updatecollection

**Environment variables**

No environment variables required

**Input schema**

- `pattern` (string)
- `public_domain` (string)
- `backend_domain` (string)

### deletecollection

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_exports_owner_schedule_export

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### scheduleexport

**Environment variables**

No environment variables required

**Input schema**

- `cloud_service_spec` (other)
- `package_ids` (other)
- `tracking_pixel_ids` (other)
- `company_domains` (array)
- `include_company_rollups` (boolean)
- `variables` (array)

### getscheduledexports

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletescheduledexport

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_v2_exports_owner_schedule_export_history

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getscheduledexportshistory

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_tracking_pixels_owner_tracking_pixel_id_domains

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gettrackingpixeldomains

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createtrackingpixeldomain

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### parameters_v2_tracking_pixels_owner_tracking_pixel_id_domains_do

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gettrackingpixeldomain

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletetrackingpixeldomain

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_owner_import

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### importevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_packages_owner_package_id_import

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### importpackageevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_tracking_pixels_owner_tracking_pixel_id_import

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### importtrackingpixelevents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_imports_owner_event_import_id_abort

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### aborteventimport

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_imports_owner_event_import_id_log

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getimportlogs

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_imports_owner_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### geteventimports

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_v2_imports_owner_event_import_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### geteventimport

**Environment variables**

No environment variables required

**Input schema**

No input parameters
