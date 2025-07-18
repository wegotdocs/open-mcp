# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getassistants

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `active` (boolean)

### addasssistant

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `assistantOpenaiId` (string)
- `resourceId` (string)

### getassistant

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)

### updateassistant

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `name` (string)
- `description` (string)
- `assistantOpenaiId` (string)
- `active` (boolean)
- `resourceId` (string)

### deleteassistant

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)

### getassistantdata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `fileId` (string)

### uploadassistantdata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `File` (string)

### addfiletothread

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `useCaseId` (string)
- `File` (string)
- `ThreadId` (string)

### deletefilefromthread

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `useCaseId` (string)
- `threadId` (string)
- `fileId` (string)

### deletethread

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assistantId` (string)
- `useCaseId` (string)
- `threadId` (string)

### clear

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)

### getcachebykey

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)

### getcachechunkbykey

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)

### getcatalogs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `active` (boolean)

### getcatalogbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### updatecatalog

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `schema` (string)
- `secretName` (string)
- `active` (boolean)
- `definitionsContent` (string)

### deletecatalog

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### gettablesbycatalog

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### gettablesbyusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### processcatalog

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `secretName` (string)
- `schema` (string)
- `definitionsContent` (string)
- `dataBaseEngineId` (integer)

### addcatalogtableusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `catalogId` (string)
- `useCaseId` (string)
- `catalogTableUseCaseIds` (array)
- `active` (boolean)

### updatecatalogtableusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `catalogTableId` (string)
- `useCaseId` (string)
- `active` (boolean)

### getsearchconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getembeddingsconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `returnSources` (boolean)

### getembeddingstremingconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `connectionId` (string)

### getvectorindexsearchconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `returnSources` (boolean)

### getvectorindexsearchstreamingconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `connectionId` (string)

### setfeedbackasync

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `typeFeedback` (integer)
- `reasonKO` (string)
- `conversationResponseId` (integer)

### getpromptconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getdatabaseconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getwebconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getwebstreamingconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `connectionId` (string)

### getassistantstremingconversation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `prompt` (string)
- `conversationId` (integer)
- `threadId` (string)
- `connectionId` (string)

### stopchatstreaming

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `connectionId` (string)

### getchunkswithfilters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (integer)
- `useCaseId` (string)

### getdata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `NamePattern` (string)
- `Active` (boolean)
- `Status` (integer)
- `UseCaseId` (string)
- `PageNumber` (integer)
- `PageSize` (integer)
- `OrderBy` (string)
- `OrderDirection` (string)
- `ExternalId` (string)
- `DeletedDate` (string)
- `Attempts` (integer)
- `ReturnSource` (boolean)

### uploaddata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `File` (string)
- `UseCaseId` (string)
- `Comments` (string)

### getdatabyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### updatedata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)
- `Active` (boolean)
- `DataStatusId` (integer)
- `Comments` (string)
- `File` (string)
- `ReturnSource` (boolean)

### delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### getblobsasurl

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### uploaddatabulk

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `Files` (array)
- `UseCaseId` (string)
- `Comments` (string)

### launchprocess

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### deletebyexternalid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `externalId` (string)

### getdatastatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### uploadexternaldata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `UseCaseId` (string)
- `ExternalId` (string)
- `FileName` (string)
- `LastUpdateDate` (string)
- `FileContent` (string)
- `ProcessInBulk` (boolean)

### uploaddatatoindex

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `File` (string)
- `UseCaseId` (string)
- `Comments` (string)

### uploaddataindexbulk

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `Files` (array)
- `UseCaseId` (string)
- `Comments` (string)

### deletefromindex

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### getindexerstatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getindexerfiles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### runindexer

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getalldatabaseengines

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getforwardaddresses

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `email` (string)

### getembeddingswithfilters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `documentId` (integer)
- `useCaseId` (string)

### getallentitytypes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addentitytype

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `priorityOrder` (integer)

### updateentitytype

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)
- `name` (string)
- `priorityOrder` (integer)

### deleteentitytype

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### getme

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### checkpolicy

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `policy` (string)

### getdeployments

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### adddeployments

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getresources

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `active` (boolean)

### getplayground

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `prompt` (string)
- `connectionId` (string)

### getvitaminizedplayground

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `connectionId` (string)
- `deploymentId` (string)
- `temperature` (number)
- `maxTokens` (integer)

### assistantplayground

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `prompt` (string)
- `assistantId` (string)
- `threadId` (string)
- `connectionId` (string)

### getresult

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `processStatusId` (string)

### getstatus

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `processStatusId` (string)

### postprocessbatch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `url` (string)
- `prompt` (string)
- `useCaseId` (string)
- `entryType` (integer)
- `exitType` (integer)
- `jsonPath` (string)

### postrelaunchprocessbatch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ProcessStatusId` (string)

### getprompts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `UseCaseId` (string)

### postprompt

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `value` (string)
- `promptType` (string)
- `active` (boolean)
- `useCaseId` (string)

### putprompt

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `value` (string)
- `promptType` (string)
- `active` (boolean)

### deleteprompt

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getroles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### postrol

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `rolName` (string)

### putrol

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `rolName` (string)

### deleterol

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getwebscrappedasync

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `url` (string)
- `strategy` (string)

### getwebscrapingstrategiesasync

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getsettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `showAsArray` (boolean)

### postsettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)
- `value` (other)
- `visible` (boolean)
- `useCaseId` (string)

### putsettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### deletesettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `key` (string)
- `useCaseId` (string)

### getallsettings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### geterror

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `errorId` (integer)

### getwarning

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `warningId` (integer)

### getalltimeintervals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### addtimeinterval

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)

### updatetimeinterval

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)
- `name` (string)

### deletetimeinterval

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (integer)

### gettokensettingsbyentityid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `entityId` (string)

### addtokensetting

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `entityId` (string)
- `useCaseId` (string)
- `numberTokens` (integer)
- `entityTypeId` (integer)
- `timeIntervalId` (integer)

### updatetokensetting

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `numberTokens` (integer)

### deletetokensetting

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getusecases

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `Active` (boolean)

### postusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `Name` (string)
- `Description` (string)
- `Instructions` (string)
- `Metadata` (string)
- `Active` (boolean)
- `Type` (string)
- `StreamingEnabled` (boolean)
- `Image` (string)
- `DeploymentId` (string)
- `ChunkSize` (integer)
- `AssistantId` (string)
- `IsEditable` (boolean)

### getuserusecases

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getusecasebyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### putusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `Name` (string)
- `Description` (string)
- `Instructions` (string)
- `Metadata` (string)
- `Active` (boolean)
- `Type` (string)
- `StreamingEnabled` (boolean)
- `Image` (string)
- `DeploymentId` (string)
- `ChunkSize` (integer)
- `AssistantId` (string)
- `IsEditable` (boolean)

### deleteusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getuserusecasebyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getuserbyusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### getusersusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### updateusecasevalue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `value` (boolean)

### getusersad

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### getuserusecasesbycurrentuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### postuserusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userADId` (string)
- `userName` (string)
- `rolId` (string)
- `useCaseId` (string)

### putuserusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `userADId` (string)
- `userName` (string)
- `rolId` (string)
- `useCaseId` (string)

### deleteuserusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getwebs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `active` (boolean)

### getwebcontent

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `webId` (string)

### updateweb

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `webId` (string)
- `name` (string)
- `description` (string)
- `url` (string)
- `active` (boolean)
- `scrapingStrategyId` (integer)

### deleteweb

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `webId` (string)

### getweburlsbyusecaseid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)

### addweburlusecase

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `useCaseId` (string)
- `webIds` (array)

### process

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `url` (string)
- `name` (string)
- `description` (string)
- `scrapingStrategyId` (integer)
