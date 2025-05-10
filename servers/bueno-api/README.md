# @open-mcp/bueno-api

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add bueno-api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add bueno-api \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add bueno-api \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "bueno-api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/bueno-api"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/bueno-api
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/bueno-api`
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

### loginuserbyemailandpassword

**Environment variables**



**Input schema**

```ts
{
  "email": z.string().email().optional(),
  "password": z.string().optional()
}
```

### retrieveloggedinuserdetails

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createorganisation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "key": z.string().describe("Unique, immutable, human readable key to identify the Organisation"),
  "name": z.string().describe("Full name of the Organisation"),
  "timezone": z.string().describe("Timezone of the Organisation")
}
```

### updateorganisation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().uuid().describe("Unique identifier of the Organisation"),
  "key": z.string().describe("Unique, immutable, human readable key to identify the Organisation"),
  "name": z.string().describe("Full name of the Organisation"),
  "timezone": z.string().describe("Timezone of the Organisation")
}
```

### retrieveorganisations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrieveorganisation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation")
}
```

### createsite

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("Name of the Site"),
  "area": z.number().describe("Area of the Site in square meters").optional(),
  "latitude": z.number().describe("Latitude co-ordinates of the Site"),
  "longitude": z.number().describe("Longitude co-ordinates of the Site"),
  "address": z.string().describe("Address of the Site"),
  "city": z.string().describe("City in which the Site is located"),
  "state": z.string().describe("State in which the Site is located"),
  "country": z.string().describe("Two letter country in which the Site is located"),
  "postcode": z.string().describe("Postcode of the Site"),
  "timezone": z.string().describe("Timezone of the Site"),
  "props": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional key-value typed properties associated with the Site").optional(),
  "tags": z.array(z.string()).describe("Strings applied to the Site to add context and used for analytics").optional(),
  "refs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUpstream references for the Site")
}
```

### updatesites

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrievesites

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "expr": z.string().describe("Expression to search Sites with").optional(),
  "limit": z.number().describe("Result set size limit").optional()
}
```

### deletesitebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site")
}
```

### retrievesite

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site")
}
```

### retrievesitesfororganisation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "includeDeleted": z.boolean().describe("Include deleted Sites in the response").optional()
}
```

### creategroup

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("Name of the Group"),
  "siteId": z.string().uuid().describe("Unique identifier of the Site the Group belongs to")
}
```

### updategroups

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrievegroups

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "expr": z.string().describe("Expression to search Groups with").optional(),
  "limit": z.number().describe("Result set size limit").optional()
}
```

### deletegroupbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipGroupId": z.string().uuid().describe("Unique identifier of the Group")
}
```

### retrievegroup

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipGroupId": z.string().uuid().describe("Unique identifier of a Group")
}
```

### retrievegroupsbysiteid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site")
}
```

### createequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("Name of the Equipment"),
  "tags": z.array(z.string()).describe("Strings applied to the Equipment to add context and used for analytics").optional(),
  "refs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUpstream references for the Equipment"),
  "props": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional key-value typed properties associated with the Equipment").optional(),
  "virtualMeterRefs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nContains the submeter references used to build a virtual meter").optional()
}
```

### updateequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrieveequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "expr": z.string().describe("Expression to search Equipment with").optional(),
  "limit": z.number().describe("Result set size limit").optional()
}
```

### deleteequipmentbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment")
}
```

### retrieveequipmentbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment")
}
```

### retrieveequipmentforgroup

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipGroupId": z.string().uuid().describe("Unique identifier of the Group"),
  "includeDeleted": z.boolean().describe("Include deleted Equipment in the response").optional()
}
```

### retrieveequipmentforsite

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "includeDeleted": z.boolean().describe("Include deleted Equipment in the response").optional(),
  "equipGroupId": z.string().uuid().describe("Unique identifier of a Group").optional()
}
```

### importpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### exportequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteIds": z.array(z.string().uuid()).describe("List of unique identifiers of the Sites to export Points for")
}
```

### duplicateequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "name": z.string().describe("Name of the new duplicated Equipment. If not provided, the name will be the same as the original Equipment with a <code>(copy)</code> suffix appended.").optional(),
  "duplicatePoints": z.boolean().describe("Boolean flag indicating if the original Equipment's Points should be duplicated.").optional(),
  "duplicateDataStreamMappings": z.boolean().describe("Boolean flag indicating if the original Point's Data Stream Mappings should be duplicated. (Irrelevant if duplicatePoints is <code>false</code>.)").optional(),
  "groupId": z.string().uuid().describe("Unique identifier of the Group the duplicated Equipment will belong to. If not provided, the duplicated Equipment will belong to the same Group as the original Equipment.").optional()
}
```

### createpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("Name of the Point"),
  "type": z.enum(["boolean","number","multistate - string","multistate - numeric"]).describe("Type of the Point"),
  "unit": z.any().optional(),
  "tags": z.array(z.string()).describe("Strings applied to the Point to add context and used for analytics").optional(),
  "props": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional key-value typed properties associated with the Point").optional(),
  "refs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUpstream references for the Point")
}
```

### updatepoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrievepoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "expr": z.string().describe("Expression to search Points with").optional(),
  "limit": z.number().describe("Result set size limit").optional()
}
```

### deletepointbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}
```

### retrievepoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}
```

### retrievepointsforequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "includeDeleted": z.boolean().describe("Include deleted Points in the response").optional()
}
```

### importpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### exportpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteIds": z.array(z.string().uuid()).describe("List of unique identifiers of the Sites to export Points for"),
  "includeDataStreamMappings": z.boolean().describe("Boolean parameter to determine whether the Point Data Stream Mappings will be included in the CSV export").optional()
}
```

### retrieverawpointhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Point Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Point Histories are requested"),
  "lastObservation": z.enum(["INCLUDE_LOCF","EXCLUDE"]).describe("Include the last observation carried forward (_INCLUDE_LOCF_) or only return the histories within the requested time range (_EXCLUDE_)").optional(),
  "convertTo": z.enum(["RAW","STANDARD"]).describe("Convert Point Histories to either their original (_RAW_) or standardised (_STANDARD_) unit").optional()
}
```

### retrievesubdailypointhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Point Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Point Histories are requested"),
  "type": z.enum(["FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY"]).describe("The interval to which the histories are aggregated to e.g. an interval of _HOURLY_ will rollup all timestamps into a single timestamp per hour on the hour")
}
```

### retrievedailypointhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().date().describe("Start date of the duration for which Point histories are requested"),
  "to": z.string().date().describe("End date of the duration for which Point histories are requested"),
  "type": z.enum(["DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("Interval")
}
```

### duplicatepoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "name": z.string().describe("Name of the new duplicated Point. If not provided, the name will be the same as the original Point with a <code>(copy)</code> suffix appended.").optional(),
  "duplicateDataStreamMappings": z.boolean().describe("Boolean flag indicating if the original Point's Data Stream Mappings should be duplicated.").optional(),
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment the duplicated Point will belong to. If not provided, the duplicated Point will belong to the same Equipment as the original Point.").optional()
}
```

### retrievelegacypoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}
```

### retrievelegacypointsforequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "includeDeleted": z.boolean().describe("Include deleted Points in the response").optional()
}
```

### createintegration

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("Name of the Integration"),
  "organisationId": z.string().uuid().describe("Unique identifier of the Organisation the Integration belongs to"),
  "timezone": z.string().describe("Timezone of the Integration")
}
```

### updateintegration

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().uuid().describe("Unique identifier of the Integration").optional(),
  "name": z.string().describe("Name of the Integration").optional(),
  "organisationId": z.string().uuid().describe("Unique identifier of the Organisation the Integration belongs to").optional(),
  "timezone": z.string().describe("Timezone of the Integration").optional()
}
```

### deleteintegrationbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration")
}
```

### retrieveintegrationbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration")
}
```

### retrieveintegrationsbyorganisationid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of the Organisation")
}
```

### createdatastream

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "streamId": z.string().describe("Identifier of the Data Stream (unique within the Organisation)"),
  "status": z.enum(["ENABLED","DISABLED"]).describe("Whether the Data Stream is enabled or disabled (no longer ingesting data)"),
  "type": z.enum(["NUMBER","STRING"]).describe("The data type of the history"),
  "metadata": z.any().describe("Json field to store any useful information, for example the unit")
}
```

### updatedatastream

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().uuid().describe("Unique identifier of the Data Stream"),
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "streamId": z.string().describe("Identifier of the Data Stream (unique within the Organisation)"),
  "status": z.enum(["ENABLED","DISABLED"]).describe("Whether the Data Stream is enabled or disabled (no longer ingesting data)"),
  "type": z.enum(["NUMBER","STRING"]).describe("The data type of the history"),
  "metadata": z.any().describe("Json field to store any useful information, for example the unit")
}
```

### retrievedatastream

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dataStreamId": z.string().uuid().describe("Unique identifier of the Data Stream")
}
```

### deletedatastreambyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dataStreamId": z.string().uuid().describe("Unique identifier of the Data Stream")
}
```

### retrievedatastreamsbyintegrationid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "sortBy": z.enum(["STREAM_ID","STATUS","TYPE","POINT_MAPPINGS_COUNT","CREATED_AT","UPDATED_AT"]).describe("Property to sort the results by").optional(),
  "sortDir": z.enum(["ASC","DESC"]).describe("Direction to sort the results by").optional(),
  "streamId": z.string().describe("Used to filter the Data Streams on the streamId field (only exact matches are returned)").optional(),
  "streamIdRegex": z.string().describe("Used to filter the Data Streams on the streamId field, (regex matches with any part of the streamId are returned)").optional(),
  "limit": z.number().describe("Maximum number data streams to retrieve, when left unset, all Data Streams will be returned").optional(),
  "offset": z.number().describe("Offset to begin returning Data Streams from, to be used along with limit to paginate results").optional(),
  "includePointMappings": z.boolean().describe("When set to true, Point Mappings associated to each Data Stream will also be included in the response").optional()
}
```

### exportdatastreamsbyintegrationid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "sortBy": z.enum(["STREAM_ID","STATUS","TYPE","POINT_MAPPINGS_COUNT","CREATED_AT","UPDATED_AT"]).describe("Property to sort the results by").optional(),
  "sortDir": z.enum(["ASC","DESC"]).describe("Direction to sort the results by").optional(),
  "streamId": z.string().describe("Used to filter the Data Streams on the streamId field, (any case insensitive substring match will be returned)").optional(),
  "limit": z.number().describe("Maximum number data streams to retrieve, when left unset, all Data Streams will be returned").optional(),
  "offset": z.number().describe("Offset to begin returning Data Streams from, to be used along with limit to paginate results").optional(),
  "includePointMappings": z.boolean().describe("When set to true, Point Mappings associated to each Data Stream will also be included in the response").optional()
}
```

### retrievedatastreamsbyintegrationidlegacy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "sortBy": z.enum(["STREAM_ID","STATUS","TYPE","POINT_MAPPINGS_COUNT","CREATED_AT","UPDATED_AT"]).describe("Property to sort the results by").optional(),
  "sortDir": z.enum(["ASC","DESC"]).describe("Direction to sort the results by").optional(),
  "streamId": z.string().describe("Used to filter the Data Streams on the streamId field, (any case insensitive substring match will be returned)").optional(),
  "limit": z.number().describe("Maximum number data streams to retrieve, when left unset, all Data Streams will be returned").optional(),
  "offset": z.number().describe("Offset to begin returning Data Streams from, to be used along with limit to paginate results").optional(),
  "includePointMappings": z.boolean().describe("When set to true, Point Mappings associated to each Data Stream will also be included in the response").optional()
}
```

### editdatastreammappingsbypointid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}
```

### retrievedatastreammappingsbypointid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pointId": z.string().uuid().describe("Unique identifier of the Point")
}
```

### ingesthistorybyintegration

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "data": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA map of ISO 8601 formatted local timestamp keys to a list of ingestion History objects. The zone should not be included in the timestamp as it will be taken from the timezone specified in the request or the Integration's default"),
  "tz": z.string().describe("An optional timezone database name, when not provided the Integration's default will be used").optional(),
  "source": z.string().describe("An optional custom label that will show up in logs, can be used to debug when there are any issues with messages").optional()
}
```

### retrieveactions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "ids": z.array(z.number().int()).describe("Numeric identifier of an Action").optional(),
  "siteIds": z.array(z.string().uuid()).describe("List of unique Site Ids the Actions pertain to").optional(),
  "statusIds": z.array(z.number().int()).describe("List of unique Status Ids the Actions have").optional(),
  "updatedBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were last updated").optional(),
  "updatedAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were last updated").optional(),
  "createdBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were created").optional(),
  "createdAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were created").optional(),
  "closedBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were closed").optional(),
  "closedAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were closed").optional()
}
```

### retrievecommentsforaction

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "actionId": z.number().int().describe("Numeric identifier of an Action within an Organisation")
}
```

### retrieveattachmentsforaction

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "actionId": z.number().int().describe("Numeric identifier of an Action within an Organisation")
}
```

### retrieveactivitylogsforaction

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "actionId": z.number().int().describe("Numeric identifier of an Action within an Organisation")
}
```

### retrievestatusesfororganisation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation")
}
```

### retrieveoccurrencesforequipment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment"),
  "from": z.string().date().describe("Start date of the Occurrence for which Equipment Occurrences are requested"),
  "to": z.string().date().describe("End date of the Occurrence for which Equipment Occurrences are requested").optional(),
  "ruleIds": z.array(z.string().uuid()).describe("List of unique Rule IDs for which Equipment Occurrences are requested").optional()
}
```

### createattachment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrieveattachmentbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "attachmentId": z.string().uuid().describe("Unique identifier of the Attachment")
}
```

### deleteattachmentbyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "attachmentId": z.string().uuid().describe("Unique identifier of the Attachment")
}
```

### retrieveattachmentfilebyid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "attachmentId": z.string().uuid().describe("Unique identifier of the Attachment")
}
```

### retrieveweathermetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrieverawweatherhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Weather Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Weather Histories are requested"),
  "lastObservation": z.enum(["INCLUDE_LOCF","EXCLUDE"]).describe("Include the last observation carried forward (_INCLUDE_LOCF_) or only return the histories within the requested time range (_EXCLUDE_)").optional()
}
```

### retrievesubdailyweatherhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Weather Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Weather Histories are requested"),
  "type": z.enum(["FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY"]).describe("The interval to which the Histories are aggregated to e.g. an interval of _HOURLY_ will rollup all timestamps into a single timestamp per hour on the hour")
}
```

### retrievedailyweatherhistories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().date().describe("Start date of the duration for which Weather histories are requested"),
  "to": z.string().date().describe("End date of the duration for which Weather histories are requested"),
  "type": z.enum(["DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("The interval to which the Histories are aggregated to e.g. an interval of _MONTHLY_ will rollup all timestamps into a single timestamp per month, from the first to the last day of the month inclusive")
}
```

### retrieveweatherobservationsbysiteid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the period requested").optional(),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the period requested").optional(),
  "aggregateType": z.enum(["RAW","FIVE_MINUTE","QUARTER_HOURLY","HALF_HOURLY","HOURLY","DAILY","MONTHLY","QUARTERLY","YEARLY"]).describe("Duration at which weather observations are aggregated").optional(),
  "unitSystem": z.enum(["METRIC","USC"]).describe("Unit system applied to response data").optional()
}
```

### retrievepointclasses

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "equipClassId": z.string().uuid().describe("The unique identifier of the Equipment Class the returned Point Classes must be a child of").optional(),
  "unitTypeId": z.string().uuid().describe("The unique identifier of the Unit Type the returned Point Classes must have").optional(),
  "pointType": z.enum(["boolean","number","multistate - string","multistate - numeric"]).describe("The Point Type the returned Point Classes can be applied to").optional()
}
```

### retrieveequipmentclasses

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "includePointClasses": z.boolean().describe("When true, the returned Equipment Classes will include a list of their child Point Classes").optional()
}
```

### retrievetags

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Tags can be applied to").optional(),
  "type": z.enum(["CORE","OPTIONAL"]).describe("The type of the Tag returned. \`CORE\` tags are 'core' to classifying the entity within the Data Model, while \`OPTIONAL\` tags supply extra information about the classified entity and do not affect the classification").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Tags must be associated with. Set to \`\"NONE\"\` to retrieve Tags that are not associated with any class.").optional()
}
```

### retrieverefs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Refs can be applied to").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Refs must be associated with. Set to \`\"NONE\"\` to retrieve Refs that are not associated with any class.").optional()
}
```

### retrieveprops

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Props can be applied to").optional(),
  "propType": z.enum(["HOUR","DATE","NUMBER","JSON","STRING","LIST","TIMESTAMP","FUNCTION"]).describe("The type of the Prop returned").optional(),
  "unitTypeId": z.string().uuid().describe("The unique identifier of the Unit Type the returned Props must have").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Props must be associated with. Set to \`\"NONE\"\` to retrieve Props that are not associated with any class.").optional()
}
```

### retrieveunits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### retrievelegacyunits

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```
