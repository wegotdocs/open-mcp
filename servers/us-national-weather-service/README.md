# @open-mcp/us-national-weather-service

## Installing

First set the environment variables as shell variables:

```bash
USER_AGENT='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add us-national-weather-service \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USER_AGENT=$USER_AGENT
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add us-national-weather-service \
  .cursor/mcp.json \
  --USER_AGENT=$USER_AGENT
```

### Other

```bash
npx @open-mcp/config add us-national-weather-service \
  /path/to/client/config.json \
  --USER_AGENT=$USER_AGENT
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "us-national-weather-service": {
      "command": "npx",
      "args": ["-y", "@open-mcp/us-national-weather-service"],
      "env": {"USER_AGENT":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USER_AGENT`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/us-national-weather-service
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/us-national-weather-service`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### alerts_query

**Environment variables**

- `USER_AGENT`

**Input schema**

- `active` (boolean)
- `start` (string)
- `end` (string)
- `status` (array)
- `message_type` (array)
- `event` (array)
- `code` (array)
- `area` (array)
- `point` (string)
- `region` (array)
- `region_type` (string)
- `zone` (array)
- `urgency` (array)
- `severity` (array)
- `certainty` (array)
- `limit` (integer)
- `cursor` (string)

### alerts_active

**Environment variables**

- `USER_AGENT`

**Input schema**

- `status` (array)
- `message_type` (array)
- `event` (array)
- `code` (array)
- `area` (array)
- `point` (string)
- `region` (array)
- `region_type` (string)
- `zone` (array)
- `urgency` (array)
- `severity` (array)
- `certainty` (array)
- `limit` (integer)

### alerts_active_count

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### alerts_active_zone

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_alerts_active_zone_zoneid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### alerts_active_area

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_alerts_active_area_area_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### alerts_active_region

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_alerts_active_region_region_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### alerts_types

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### alerts_single

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_alerts_id_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### cwsu

**Environment variables**

- `USER_AGENT`

**Input schema**

- `cwsuId` (string)

### cwas

**Environment variables**

- `USER_AGENT`

**Input schema**

- `cwsuId` (string)

### cwa

**Environment variables**

- `USER_AGENT`

**Input schema**

- `cwsuId` (string)
- `date` (string)
- `sequence` (integer)

### sigmetquery

**Environment variables**

- `USER_AGENT`

**Input schema**

- `start` (string)
- `end` (string)
- `date` (string)
- `atsu` (string)
- `sequence` (string)

### sigmetsbyatsu

**Environment variables**

- `USER_AGENT`

**Input schema**

- `atsu` (string)

### sigmetsbyatsubydate

**Environment variables**

- `USER_AGENT`

**Input schema**

- `atsu` (string)
- `date` (string)

### sigmet

**Environment variables**

- `USER_AGENT`

**Input schema**

- `atsu` (string)
- `date` (string)
- `time` (string)

### glossary

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### gridpoint

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_gridpoints_wfo_x_y_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### gridpoint_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

- `units` (string)
- `Feature-Flags` (array)

### parameters_gridpoints_wfo_x_y_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### gridpoint_forecast_hourly

**Environment variables**

- `USER_AGENT`

**Input schema**

- `units` (string)
- `Feature-Flags` (array)

### parameters_gridpoints_wfo_x_y_forecast_hourly

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### gridpoint_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_gridpoints_wfo_x_y_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### icons

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_icons_set_timeofday_first_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### iconsdualcondition

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_icons_set_timeofday_first_second_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### icons_summary

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### satellite_thumbnails

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_thumbnails_satellite_area_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### station_observation_list

**Environment variables**

- `USER_AGENT`

**Input schema**

- `start` (string)
- `end` (string)
- `limit` (integer)

### parameters_stations_stationid_observations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### station_observation_latest

**Environment variables**

- `USER_AGENT`

**Input schema**

- `require_qc` (boolean)

### parameters_stations_stationid_observations_latest

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### station_observation_time

**Environment variables**

- `USER_AGENT`

**Input schema**

- `time` (string)

### parameters_stations_stationid_observations_time_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### tafs

**Environment variables**

- `USER_AGENT`

**Input schema**

- `stationId` (string)

### taf

**Environment variables**

- `USER_AGENT`

**Input schema**

- `stationId` (string)
- `date` (string)
- `time` (string)

### obs_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

- `id` (array)
- `state` (array)
- `limit` (integer)
- `cursor` (string)

### obs_station

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_stations_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### office

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_offices_officeid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### office_headline

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_offices_officeid_headlines_headlineid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### office_headlines

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_offices_officeid_headlines

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### point

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_points_point_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### point_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_points_point_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### radar_servers

**Environment variables**

- `USER_AGENT`

**Input schema**

- `reportingHost` (string)

### radar_server

**Environment variables**

- `USER_AGENT`

**Input schema**

- `reportingHost` (string)

### parameters_radar_servers_id_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### radar_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

- `stationType` (array)
- `reportingHost` (string)
- `host` (string)

### radar_station

**Environment variables**

- `USER_AGENT`

**Input schema**

- `reportingHost` (string)
- `host` (string)

### parameters_radar_stations_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### radar_station_alarms

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_radar_stations_stationid_alarms

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### radar_queue

**Environment variables**

- `USER_AGENT`

**Input schema**

- `limit` (integer)
- `arrived` (other)
- `created` (other)
- `published` (other)
- `station` (string)
- `type` (string)
- `feed` (string)
- `resolution` (integer)

### parameters_radar_queues_host_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### radar_profiler

**Environment variables**

- `USER_AGENT`

**Input schema**

- `time` (other)
- `interval` (string)

### parameters_radar_profilers_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### products_query

**Environment variables**

- `USER_AGENT`

**Input schema**

- `location` (array)
- `start` (string)
- `end` (string)
- `office` (array)
- `wmoid` (array)
- `type` (array)
- `limit` (integer)

### product_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### product_types

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### product

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_products_productid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### products_type

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_products_types_typeid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### products_type_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_products_types_typeid_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### location_products

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_products_locations_locationid_types

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### products_type_location

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_products_types_typeid_locations_locationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### zone_list

**Environment variables**

- `USER_AGENT`

**Input schema**

- `id` (array)
- `area` (array)
- `region` (array)
- `type` (array)
- `point` (string)
- `include_geometry` (boolean)
- `limit` (integer)
- `effective` (string)

### zone_list_type

**Environment variables**

- `USER_AGENT`

**Input schema**

- `id` (array)
- `area` (array)
- `region` (array)
- `type` (array)
- `point` (string)
- `include_geometry` (boolean)
- `limit` (integer)
- `effective` (string)

### parameters_zones_type_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### zone

**Environment variables**

- `USER_AGENT`

**Input schema**

- `effective` (string)

### parameters_zones_type_zoneid_

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### zone_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_zones_type_zoneid_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### zone_obs

**Environment variables**

- `USER_AGENT`

**Input schema**

- `start` (string)
- `end` (string)
- `limit` (integer)

### parameters_zones_forecast_zoneid_observations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### zone_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters

### parameters_zones_forecast_zoneid_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

No input parameters
