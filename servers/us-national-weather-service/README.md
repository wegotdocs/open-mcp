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

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### alerts_query

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "active": z.boolean().describe("List only active alerts (use /alerts/active endpoints instead)").optional(),
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "status": z.array(z.enum(["actual","exercise","system","test","draft"])).describe("Status (actual, exercise, system, test, draft)").optional(),
  "message_type": z.array(z.enum(["alert","update","cancel"])).describe("Message type (alert, update, cancel)").optional(),
  "event": z.array(z.string().regex(new RegExp("^[A-Za-z0-9 ]+$"))).describe("Event name").optional(),
  "code": z.array(z.string().regex(new RegExp("^\\w{3}$"))).describe("Event code").optional(),
  "area": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("State/territory code or marine area code\nThis parameter is incompatible with the following parameters: point, region, region_type, zone\n").optional(),
  "point": z.string().regex(new RegExp("^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$")).describe("Point (latitude,longitude)\nThis parameter is incompatible with the following parameters: area, region, region_type, zone\n").optional(),
  "region": z.array(z.enum(["AL","AT","GL","GM","PA","PI"]).describe("Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n")).describe("Marine region code\nThis parameter is incompatible with the following parameters: area, point, region_type, zone\n").optional(),
  "region_type": z.enum(["land","marine"]).describe("Region type (land or marine)\nThis parameter is incompatible with the following parameters: area, point, region, zone\n").optional(),
  "zone": z.array(z.string().regex(new RegExp("^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\\d{3}$")).describe("UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n")).describe("Zone ID (forecast or county)\nThis parameter is incompatible with the following parameters: area, point, region, region_type\n").optional(),
  "urgency": z.array(z.enum(["Immediate","Expected","Future","Past","Unknown"])).describe("Urgency (immediate, expected, future, past, unknown)").optional(),
  "severity": z.array(z.enum(["Extreme","Severe","Moderate","Minor","Unknown"])).describe("Severity (extreme, severe, moderate, minor, unknown)").optional(),
  "certainty": z.array(z.enum(["Observed","Likely","Possible","Unlikely","Unknown"])).describe("Certainty (observed, likely, possible, unlikely, unknown)").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional(),
  "cursor": z.string().describe("Pagination cursor").optional()
}
```

### alerts_active

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "status": z.array(z.enum(["actual","exercise","system","test","draft"])).describe("Status (actual, exercise, system, test, draft)").optional(),
  "message_type": z.array(z.enum(["alert","update","cancel"])).describe("Message type (alert, update, cancel)").optional(),
  "event": z.array(z.string().regex(new RegExp("^[A-Za-z0-9 ]+$"))).describe("Event name").optional(),
  "code": z.array(z.string().regex(new RegExp("^\\w{3}$"))).describe("Event code").optional(),
  "area": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("State/territory code or marine area code\nThis parameter is incompatible with the following parameters: point, region, region_type, zone\n").optional(),
  "point": z.string().regex(new RegExp("^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$")).describe("Point (latitude,longitude)\nThis parameter is incompatible with the following parameters: area, region, region_type, zone\n").optional(),
  "region": z.array(z.enum(["AL","AT","GL","GM","PA","PI"]).describe("Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n")).describe("Marine region code\nThis parameter is incompatible with the following parameters: area, point, region_type, zone\n").optional(),
  "region_type": z.enum(["land","marine"]).describe("Region type (land or marine)\nThis parameter is incompatible with the following parameters: area, point, region, zone\n").optional(),
  "zone": z.array(z.string().regex(new RegExp("^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\\d{3}$")).describe("UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n")).describe("Zone ID (forecast or county)\nThis parameter is incompatible with the following parameters: area, point, region, region_type\n").optional(),
  "urgency": z.array(z.enum(["Immediate","Expected","Future","Past","Unknown"])).describe("Urgency (immediate, expected, future, past, unknown)").optional(),
  "severity": z.array(z.enum(["Extreme","Severe","Moderate","Minor","Unknown"])).describe("Severity (extreme, severe, moderate, minor, unknown)").optional(),
  "certainty": z.array(z.enum(["Observed","Likely","Possible","Unlikely","Unknown"])).describe("Certainty (observed, likely, possible, unlikely, unknown)").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}
```

### alerts_active_count

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### alerts_active_zone

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_alerts_active_zone_zoneid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### alerts_active_area

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_alerts_active_area_area_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### alerts_active_region

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_alerts_active_region_region_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### alerts_types

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### alerts_single

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_alerts_id_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### cwsu

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "cwsuId": z.enum(["ZAB","ZAN","ZAU","ZBW","ZDC","ZDV","ZFA","ZFW","ZHU","ZID","ZJX","ZKC","ZLA","ZLC","ZMA","ZME","ZMP","ZNY","ZOA","ZOB","ZSE","ZTL"]).describe("Three-letter identifier for a Center Weather Service Unit (CWSU).")
}
```

### cwas

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "cwsuId": z.enum(["ZAB","ZAN","ZAU","ZBW","ZDC","ZDV","ZFA","ZFW","ZHU","ZID","ZJX","ZKC","ZLA","ZLC","ZMA","ZME","ZMP","ZNY","ZOA","ZOB","ZSE","ZTL"]).describe("Three-letter identifier for a Center Weather Service Unit (CWSU).")
}
```

### cwa

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "cwsuId": z.enum(["ZAB","ZAN","ZAU","ZBW","ZDC","ZDV","ZFA","ZFW","ZHU","ZID","ZJX","ZKC","ZLA","ZLC","ZMA","ZME","ZMP","ZNY","ZOA","ZOB","ZSE","ZTL"]).describe("Three-letter identifier for a Center Weather Service Unit (CWSU)."),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format)."),
  "sequence": z.number().int().gte(100).describe("Sequence number")
}
```

### sigmetquery

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format).").optional(),
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier").optional(),
  "sequence": z.string().describe("SIGMET sequence number").optional()
}
```

### sigmetsbyatsu

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier")
}
```

### sigmetsbyatsubydate

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier"),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format).")
}
```

### sigmet

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier"),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format)."),
  "time": z.string().regex(new RegExp("^([01][0-9]|2[0-3])[0-5][0-9]$")).describe("A time (in HHMM format). This is always specified in UTC (Zulu) time.")
}
```

### glossary

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### gridpoint

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_gridpoints_wfo_x_y_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### gridpoint_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "units": z.enum(["us","si"]).describe("Denotes the units used in the textual portions of the forecast.").optional(),
  "Feature-Flags": z.array(z.enum(["forecast_temperature_qv","forecast_wind_speed_qv"])).describe("Enable future and experimental features (see documentation for more info):\n* forecast_temperature_qv: Represent temperature as QuantitativeValue\n* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue\n").optional()
}
```

### parameters_gridpoints_wfo_x_y_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### gridpoint_forecast_hourly

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "units": z.enum(["us","si"]).describe("Denotes the units used in the textual portions of the forecast.").optional(),
  "Feature-Flags": z.array(z.enum(["forecast_temperature_qv","forecast_wind_speed_qv"])).describe("Enable future and experimental features (see documentation for more info):\n* forecast_temperature_qv: Represent temperature as QuantitativeValue\n* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue\n").optional()
}
```

### parameters_gridpoints_wfo_x_y_forecast_hourly

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### gridpoint_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_gridpoints_wfo_x_y_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### icons

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_icons_set_timeofday_first_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### iconsdualcondition

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_icons_set_timeofday_first_second_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### icons_summary

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### satellite_thumbnails

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_thumbnails_satellite_area_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### station_observation_list

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}
```

### parameters_stations_stationid_observations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### station_observation_latest

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "require_qc": z.boolean().describe("Require QC").optional()
}
```

### parameters_stations_stationid_observations_latest

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### station_observation_time

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "time": z.string().datetime({ offset: true }).describe("Timestamp of requested observation")
}
```

### parameters_stations_stationid_observations_time_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### tafs

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "stationId": z.string().describe("Observation station ID")
}
```

### taf

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "stationId": z.string().describe("Observation station ID"),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format)."),
  "time": z.string().regex(new RegExp("^([01][0-9]|2[0-3])[0-5][0-9]$")).describe("A time (in HHMM format). This is always specified in UTC (Zulu) time.")
}
```

### obs_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "id": z.array(z.string()).describe("Filter by observation station ID").optional(),
  "state": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("Filter by state/marine area code").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional(),
  "cursor": z.string().describe("Pagination cursor").optional()
}
```

### obs_station

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_stations_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### office

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_offices_officeid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### office_headline

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_offices_officeid_headlines_headlineid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### office_headlines

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_offices_officeid_headlines

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### point

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_points_point_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### point_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_points_point_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### radar_servers

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "reportingHost": z.string().describe("Show records from specific reporting host").optional()
}
```

### radar_server

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "reportingHost": z.string().describe("Show records from specific reporting host").optional()
}
```

### parameters_radar_servers_id_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### radar_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "stationType": z.array(z.string().regex(new RegExp("^[A-Za-z0-9-]+$"))).describe("Limit results to a specific station type or types").optional(),
  "reportingHost": z.string().describe("Show RDA and latency info from specific reporting host").optional(),
  "host": z.string().describe("Show latency info from specific LDM host").optional()
}
```

### radar_station

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "reportingHost": z.string().describe("Show RDA and latency info from specific reporting host").optional(),
  "host": z.string().describe("Show latency info from specific LDM host").optional()
}
```

### parameters_radar_stations_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### radar_station_alarms

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_radar_stations_stationid_alarms

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### radar_queue

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "limit": z.number().int().gte(1).lte(500).describe("Record limit").optional(),
  "arrived": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "created": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "published": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "station": z.string().describe("Station identifier").optional(),
  "type": z.string().describe("Record type").optional(),
  "feed": z.string().describe("Originating product feed").optional(),
  "resolution": z.number().int().gte(1).describe("Resolution version").optional()
}
```

### parameters_radar_queues_host_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### radar_profiler

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "time": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$")), z.string().regex(new RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)\\/P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")), z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?\\/(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(Z|[+-]\\d{2}:?\\d{2}?)|NOW)$"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("A time interval in ISO 8601 format. This can be one of:\n\n    1. Start and end time\n    2. Start time and duration\n    3. Duration and end time\nThe string \"NOW\" can also be used in place of a start/end time.\n").optional(),
  "interval": z.string().regex(new RegExp("^P(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$")).describe("A time duration in ISO 8601 format.").optional()
}
```

### parameters_radar_profilers_stationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### products_query

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "location": z.array(z.string()).describe("Location id").optional(),
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "office": z.array(z.string().regex(new RegExp("^[A-Z]{4}$"))).describe("Issuing office").optional(),
  "wmoid": z.array(z.string().regex(new RegExp("^[A-Z]{4}\\d{2}$"))).describe("WMO id code").optional(),
  "type": z.array(z.string().regex(new RegExp("^\\w{3}$"))).describe("Product code").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}
```

### product_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### product_types

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### product

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_products_productid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### products_type

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_products_types_typeid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### products_type_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_products_types_typeid_locations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### location_products

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_products_locations_locationid_types

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### products_type_location

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_products_types_typeid_locations_locationid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### zone_list

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "id": z.array(z.string().regex(new RegExp("^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\\d{3}$")).describe("UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n")).describe("Zone ID (forecast or county)").optional(),
  "area": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("State/marine area code").optional(),
  "region": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AR","CR","ER","PR","SR","WR"]).describe("Land region code. These correspond to the six NWS regional headquarters:\n* AR: Alaska Region\n* CR: Central Region\n* ER: Eastern Region\n* PR: Pacific Region\n* SR: Southern Region\n* WR: Western Region\n"), z.enum(["AL","AT","GL","GM","PA","PI"]).describe("Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })).describe("Region code").optional(),
  "type": z.array(z.enum(["land","marine","forecast","public","coastal","offshore","fire","county"])).describe("Zone type").optional(),
  "point": z.string().regex(new RegExp("^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$")).describe("Point (latitude,longitude)").optional(),
  "include_geometry": z.boolean().describe("Include geometry in results (true/false)").optional(),
  "limit": z.number().int().gte(1).describe("Limit").optional(),
  "effective": z.string().datetime({ offset: true }).describe("Effective date/time").optional()
}
```

### zone_list_type

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "id": z.array(z.string().regex(new RegExp("^(A[KLMNRSZ]|C[AOT]|D[CE]|F[LM]|G[AMU]|I[ADLN]|K[SY]|L[ACEHMOS]|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[AHKMRSWZ]|S[CDL]|T[NX]|UT|V[AIT]|W[AIVY]|[HR]I)[CZ]\\d{3}$")).describe("UGC identifier for a NWS forecast zone or county.\nThe first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations).\nThe third letter will be Z for public/fire zone or C for county.\n")).describe("Zone ID (forecast or county)").optional(),
  "area": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AL","AK","AS","AR","AZ","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY","MP","PW","FM","MH"]), z.enum(["AM","AN","GM","LC","LE","LH","LM","LO","LS","PH","PK","PM","PS","PZ","SL"]).describe("Marine area code as defined in NWS Directive 10-302:\n* AM: Western North Atlantic Ocean and along U.S. East Coast south of Currituck Beach Light NC following the coastline into Gulf of Mexico to Ocean Reef FL including the Caribbean\n* AN: Western North Atlantic Ocean and along U.S. East Coast from Canadian border south to Currituck Beach Light NC\n* GM: Gulf of Mexico and along the U.S. Gulf Coast from the Mexican border to Ocean Reef FL\n* LC: Lake St. Clair\n* LE: Lake Erie\n* LH: Lake Huron\n* LM: Lake Michigan\n* LO: Lake Ontario\n* LS: Lake Superior\n* PH: Central Pacific Ocean including Hawaiian waters\n* PK: North Pacific Ocean near Alaska and along Alaska coastline including the Bering Sea and the Gulf of Alaska\n* PM: Western Pacific Ocean including Mariana Island waters\n* PS: South Central Pacific Ocean including American Samoa waters\n* PZ: Eastern North Pacific Ocean and along U.S. West Coast from Canadian border to Mexican border\n* SL: St. Lawrence River above St. Regis\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("State/territory codes and marine area codes")).describe("State/marine area code").optional(),
  "region": z.array(z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["AR","CR","ER","PR","SR","WR"]).describe("Land region code. These correspond to the six NWS regional headquarters:\n* AR: Alaska Region\n* CR: Central Region\n* ER: Eastern Region\n* PR: Pacific Region\n* SR: Southern Region\n* WR: Western Region\n"), z.enum(["AL","AT","GL","GM","PA","PI"]).describe("Marine region code. These are groups of marine areas combined.\n* AL: Alaska waters (PK)\n* AT: Atlantic Ocean (AM, AN)\n* GL: Great Lakes (LC, LE, LH, LM, LO, LS, SL)\n* GM: Gulf of Mexico (GM)\n* PA: Eastern Pacific Ocean and U.S. West Coast (PZ)\n* PI: Central and Western Pacific (PH, PM, PS)\n")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })).describe("Region code").optional(),
  "type": z.array(z.enum(["land","marine","forecast","public","coastal","offshore","fire","county"])).describe("Zone type").optional(),
  "point": z.string().regex(new RegExp("^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$")).describe("Point (latitude,longitude)").optional(),
  "include_geometry": z.boolean().describe("Include geometry in results (true/false)").optional(),
  "limit": z.number().int().gte(1).describe("Limit").optional(),
  "effective": z.string().datetime({ offset: true }).describe("Effective date/time").optional()
}
```

### parameters_zones_type_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### zone

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "effective": z.string().datetime({ offset: true }).describe("Effective date/time").optional()
}
```

### parameters_zones_type_zoneid_

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### zone_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_zones_type_zoneid_forecast

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### zone_obs

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{
  "start": z.string().datetime({ offset: true }).describe("Start date/time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End date/time").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}
```

### parameters_zones_forecast_zoneid_observations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### zone_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```

### parameters_zones_forecast_zoneid_stations

**Environment variables**

- `USER_AGENT`

**Input schema**

```ts
{}
```
