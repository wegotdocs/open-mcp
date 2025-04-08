# @open-mcp/MAPS Messaging

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/MAPS Messaging add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/MAPS Messaging add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/MAPS Messaging add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "MAPS Messaging": {
      "command": "npx",
      "args": ["-y", "@open-mcp/MAPS Messaging"],
      "env": {"API_KEY":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/MAPS Messaging
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/MAPS Messaging`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### gethealth

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### checkforupdates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getname

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getping

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### login

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "sessionId": z.string().optional(),
  "persistent": z.boolean().optional()
}
```

### logout

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getauthconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### updateauthconfiguration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "authenticationEnabled": z.boolean().describe("Indicates if authentication is enabled").optional(),
  "authorisationEnabled": z.boolean().describe("Indicates if authorization is enabled").optional(),
  "authConfig": z.record(z.any()).describe("Configuration properties for authentication").optional()
}
```

### getallgroups

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### addgroup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### addusertogroup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupUuid": z.string(),
  "userUuid": z.string()
}
```

### removeuserfromgroup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupUuid": z.string(),
  "userUuid": z.string()
}
```

### getgroupbyid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupUuid": z.string()
}
```

### deletegroup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "groupUuid": z.string()
}
```

### getallusers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### adduser

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### deleteuser

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "userUuid": z.string()
}
```

### getuser

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "username": z.string()
}
```

### closespecificconnection

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "connectionId": z.string().optional()
}
```

### getallconnections

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### getconnectiondetails

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "connectionId": z.string().optional()
}
```

### getalldestinations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("An optional filter string for selecting specific destinations. The filter should be a valid expression that complies with the selector syntax.").optional(),
  "size": z.number().int().describe("The maximum number of destinations to return in the response. A default value is used if this parameter is not provided.").optional(),
  "sortBy": z.enum(["Name","Published","Delivered","Stored","Pending","Delayed","Expired"]).describe("The attribute by which the list of destinations should be sorted before returning. Possible values include Name, Published, Delivered, Stored, Pending, Delayed, and Expired.").optional()
}
```

### getdestinationdetails

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().describe("The name of the destination for which details are requested")
}
```

### getdiscoveryagentconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### updatediscoveryagentconfiguration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "enabled": z.boolean().describe("Indicates if the discovery manager is enabled").optional(),
  "hostnames": z.string().describe("Hostnames for discovery").optional(),
  "addTxtRecords": z.boolean().describe("Whether to add TXT records").optional(),
  "domainName": z.string().describe("Domain name for discovery").optional()
}
```

### getalldiscoveredservers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### startdiscovery

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### stopdiscovery

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### updateconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getalldiscovereddevices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### scanfordevices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbynameintegration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### getintegrationconnection

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### pauseintegration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### resumeintegration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### startintegration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### stopintegration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string()
}
```

### getallintegrations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### pauseallinterfaces

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### resumeallinterfaces

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### startallinterfaces

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### stopallinterfaces

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getallintegrationstatus

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### getintegrationstatus

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### getendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### updateinterfaceconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### getendpointconnections

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### pauseinterface

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### resumeinterface

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### startinterface

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### stopinterface

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### getallinterfaces

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### pauseallinterfaces_1

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### resumeallinterfaces_1

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### startallinterfaces_1

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### stopallinterfaces_1

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getallinterfacestatus

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().describe("Optional filter string ").optional()
}
```

### getinterfacestatus

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "endpoint": z.string()
}
```

### getlogentries

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().optional()
}
```

### streamlogs

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().optional()
}
```

### getallloradevices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getloradevice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "deviceName": z.string()
}
```

### getloraendpointconnections

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "deviceName": z.string(),
  "nodeId": z.string()
}
```

### getallloradeviceconfigs

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### addloradeviceconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "name": z.string().describe("The name of the LoRa device.").optional(),
  "radio": z.string().describe("Type of radio module used by the LoRa device.").optional(),
  "cs": z.number().int().gte(0).describe("The chip select pin number for the LoRa device.").optional(),
  "irq": z.number().int().gte(0).describe("The interrupt request (IRQ) pin number for the LoRa device.").optional(),
  "rst": z.number().int().gte(0).describe("The reset pin number for the LoRa device.").optional(),
  "power": z.number().int().gte(0).lte(20).describe("The transmission power level setting for the LoRa device.").optional(),
  "cadTimeout": z.number().int().gte(0).describe("The Channel Activity Detection (CAD) timeout in milliseconds.").optional(),
  "frequency": z.number().gte(0).describe("The operating frequency for the LoRa device in MHz.").optional()
}
```

### deleteloradeviceconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "deviceId": z.string()
}
```

### getloradeviceconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "deviceName": z.string()
}
```

### abortmessages

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().optional(),
  "eventIds": z.array(z.number().int()).optional()
}
```

### commitmessages

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().optional(),
  "eventIds": z.array(z.number().int()).optional()
}
```

### consumemessages

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destination": z.string().describe("Optional, if supplied gets any messages outstanding for this destination, else all messages pending delivery").optional(),
  "depth": z.number().int().describe("The max number of events that should be returned").optional()
}
```

### getsubscriptiondepth

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destination": z.string().describe("Optional, if supplied gets any messages outstanding for this destination, else all messages pending delivery").optional(),
  "depth": z.number().int().describe("The max number of events that should be returned").optional()
}
```

### publishmessage

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().describe("The topic to which the message will be published. This should be a valid topic name recognized by the messaging system."),
  "message": z.object({ "identifier": z.number().int().describe("The event identifier").optional(), "payload": z.string().describe("The main payload content of the message, represented as a byte64 string."), "contentType": z.string().describe("The MIME type of the message payload, indicating its format.").optional(), "correlationData": z.string().describe("Additional data used for correlating messages, provided as a byte array.").optional(), "expiry": z.number().int().describe("The expiry time for the message in milliseconds. Default is -1, indicating no expiry."), "priority": z.number().int().describe("The priority level of the message, ranging from 0 (lowest) to 10 (highest). Default is 4 (normal)."), "qualityOfService": z.number().int().describe("The Quality of Service level for the message: 0 (at most once), 1 (at least once), or 2 (exactly once)."), "creation": z.string().datetime({ offset: true }).describe("The time the server received this event").optional(), "dataMap": z.record(z.record(z.any()).describe("A map containing optional key-value pairs associated with the message.")).describe("A map containing optional key-value pairs associated with the message.").optional(), "metaData": z.record(z.string().describe("A map of string, string values that the server has added to the event as it was processed")).describe("A map of string, string values that the server has added to the event as it was processed").optional() }).describe("Represents a messaging entity with configurable quality, priority, and metadata attributes."),
  "retain": z.boolean().describe("Indicates if the message should be retained on the destination. If true, the message will be stored and sent to new subscribers on the topic.").optional()
}
```

### subscribesse

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().describe("The name of the destination (e.g., topic or queue) to which the subscription is bound.Supports MQTT style wild card subscription"),
  "namedSubscription": z.string().nullable().describe("An optional name for a named subscription, allowing clients to re-use existing subscriptions if provided.").optional(),
  "filter": z.string().nullable().describe("An optional filter expression written in JMS selector syntax to filter messages received by the subscription.").optional(),
  "maxDepth": z.number().int().nullable().describe("The maximum number of messages that can be queued for the subscription before new messages are dropped.").optional(),
  "retainMessage": z.boolean().nullable().describe("Indicates if messages should be retained on the destination for this subscription, meaning they will be stored and made available to future subscribers.").optional()
}
```

### subscribetotopic

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().describe("The name of the destination (e.g., topic or queue) to which the subscription is bound.Supports MQTT style wild card subscription"),
  "namedSubscription": z.string().nullable().describe("An optional name for a named subscription, allowing clients to re-use existing subscriptions if provided.").optional(),
  "filter": z.string().nullable().describe("An optional filter expression written in JMS selector syntax to filter messages received by the subscription.").optional(),
  "maxDepth": z.number().int().nullable().describe("The maximum number of messages that can be queued for the subscription before new messages are dropped.").optional(),
  "transactional": z.boolean().describe("Flag to indicate the subscription is transactional").optional(),
  "retainMessage": z.boolean().nullable().describe("Indicates if messages should be retained on the destination for this subscription, meaning they will be stored and made available to future subscribers.").optional()
}
```

### unsubscribetotopic

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "destinationName": z.string().describe("The name of the destination (e.g., topic or queue) to which the subscription is bound.Supports MQTT style wild card subscription"),
  "namedSubscription": z.string().nullable().describe("An optional name for a named subscription, allowing clients to re-use existing subscriptions if provided.").optional(),
  "filter": z.string().nullable().describe("An optional filter expression written in JMS selector syntax to filter messages received by the subscription.").optional(),
  "maxDepth": z.number().int().nullable().describe("The maximum number of messages that can be queued for the subscription before new messages are dropped.").optional(),
  "transactional": z.boolean().describe("Flag to indicate the subscription is transactional").optional(),
  "retainMessage": z.boolean().nullable().describe("Indicates if messages should be retained on the destination for this subscription, meaning they will be stored and made available to future subscribers.").optional()
}
```

### getallschemas

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().optional()
}
```

### addschema

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schema": z.string().describe("A JSON-encoded string representing the schema object to be posted.").optional(),
  "context": z.string().describe("The name or context of the schema, identifying the scope or purpose for which it is used.").optional()
}
```

### deleteallschemas

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "filter": z.string().optional()
}
```

### getschemabyid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemaId": z.string()
}
```

### deleteschemabyid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "schemaId": z.string()
}
```

### getknownformats

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getlinkformat

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getschemabycontext

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "context": z.string()
}
```

### getschemabytype

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "type": z.string()
}
```

### getschemamapping

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getcacheinformation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### clearcacheinformation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getserverconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### updateserverconfig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getbuildinfo

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getserverhealthsummary

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getserverstatus

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getstats

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### restartserver

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### shutdownserver

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```

### getexternalgrammar

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "path": z.string()
}
```

### getwadl

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{}
```
