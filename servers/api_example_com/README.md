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
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
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

### createclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getallclientsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### setstatusclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `isActive` (boolean)

### deleteclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### getclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### updateclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### createfeatureendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `code` (string)

### listfeaturesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### countusersendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `isAdmin` (string)
- `adminType` (string)
- `groupId` (number)

### createadminuserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `birthDate` (string)
- `adminType` (string)
- `groupId` (number)
- `departmentId` (number)
- `clientId` (string)

### createcollaboratoruserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `birthDate` (string)
- `workJoinedDate` (string)
- `positionId` (number)
- `groupId` (number)
- `departmentId` (number)
- `clientId` (string)

### deleteuserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### generaterandomkeyjwtuserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### generateusernameendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `firstName` (string)
- `lastName` (string)

### getuserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `email` (string)
- `username` (string)

### listusersendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `isAdmin` (string)
- `isActive` (string)
- `isPasswordReset` (string)
- `adminType` (string)
- `groupId` (number)
- `deleted` (string)

### setstatususerendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `status` (boolean)

### updatepassworduserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `encryptedPassword` (string)

### updateuserendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `username` (string)
- `email` (string)
- `firstName` (string)
- `lastName` (string)
- `birthDate` (string)
- `workJoinedDate` (string)
- `adminType` (string)
- `positionId` (number)
- `groupId` (number)
- `departmentId` (number)

### createpositionendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `clientId` (string)

### deletepositionendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### getpositionendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updatepositionendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `name` (string)

### listpositionsbyclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### createdepartmentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `clientId` (string)

### deletedepartmentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### getdepartmentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updatedepartmentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `name` (string)

### listdepartmentsbyclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### creategroupendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `icon` (string)
- `isAdmin` (boolean)
- `clientId` (string)

### deletegroupendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### getgroupendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updategroupendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `name` (string)
- `icon` (string)

### listgroupsbyclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### createpasswordresetkeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userEmail` (string)

### expirepasswordresetkeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)

### validatepasswordresetkeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)

### getgamificationcenterendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### updategamificationcenterendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `interactionsCount` (number)
- `tokens` (number)

### listgamificationcentersendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `limit` (number)

### createbadgeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### deletebadgeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updatebadgeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### getbadgeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listbadgesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### countawardsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### getactualawardendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### listawardsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `badgeId` (number)
- `isActive` (string)

### listinteractionslogsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `type` (string)
- `createdDateString` (string)
- `limit` (number)

### refreshtokenendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `refreshToken` (string)

### signinadminendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `username` (string)
- `password` (string)

### signinendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `username` (string)
- `password` (string)

### signinapikeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientIdEncrypted` (string)
- `apiKeyEncrypted` (string)

### signinmicrosoftendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### signoutendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### createapikeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `clientId` (string)

### deleteapikeyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listapikeysendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### countsurveysendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### createsurveyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `title` (string)
- `description` (string)
- `type` (string)
- `condition` (string)
- `conditionData` (string)
- `recurringType` (string)
- `scheduledDate` (string)
- `surveyTarget` (string)
- `clientId` (string)
- `groupId` (number)
- `isActive` (boolean)
- `isDraft` (boolean)
- `createdByUserId` (string)
- `questions` (array)

### getsurveyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### gettoprespondedsurveysendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `startDate` (string)
- `endDate` (string)
- `limit` (number)

### listsurveysendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `status` (string)
- `type` (string)
- `groupId` (number)

### setstatussurveyendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `status` (boolean)

### createsurveyanswersendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `surveyResultId` (number)
- `userId` (string)
- `surveyAnswers` (array)

### listsurveyanswersendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `surveyResultId` (number)
- `surveyQuestionId` (number)

### listsurveyquestionsbysurveyidendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `surveyId` (number)

### countsurveyresultsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `surveyId` (number)

### getsurveyresultendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listsurveyresultsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `surveyId` (number)
- `status` (string)
- `userId` (string)

### countdenunciationsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### createdenunciationendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `isAnonymous` (boolean)
- `comment` (string)
- `subcategoryId` (number)

### getdenunciationendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listdenunciationsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `clientId` (string)
- `categoryId` (number)
- `subcategoryId` (number)
- `groupId` (number)
- `createdDateString` (string)

### createdenunciationcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### listdenunciationcategoriesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getdenunciationcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### createdenunciationsubcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `categoryId` (number)

### listdenunciationsubcategoriesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `categoryId` (number)

### getdenunciationsubcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### countfaqsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### createfaqendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `question` (string)
- `answer` (string)
- `order` (number)
- `isDraft` (boolean)
- `clientId` (string)

### deletefaqendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updatefaqendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `question` (string)
- `answer` (string)
- `order` (number)
- `isDraft` (boolean)

### getfaqendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listfaqsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `isDraft` (string)

### countfeedbacksendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### createfeedbackendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `comments` (string)
- `subcategoryId` (number)
- `departmentId` (number)
- `score` (number)

### getfeedbackendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### gettopdepartmentsbyscoreendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `startDate` (string)
- `endDate` (string)
- `limit` (number)

### gettopfeedbackcategoriesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `startDate` (string)
- `endDate` (string)
- `limit` (number)

### listfeedbacksendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `categoryId` (number)
- `subcategoryId` (number)
- `userId` (string)
- `departmentId` (number)
- `forEvaluation` (string)
- `groupId` (number)

### createfeedbackcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `clientId` (string)

### getfeedbackcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listfeedbackcategoriesbyclientendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### createfeedbacksubcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `categoryId` (number)
- `forEvaluation` (boolean)

### listfeedbacksubcategoriesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `categoryId` (number)
- `forEvaluation` (string)

### getfeedbacksubcategoryendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### countfeelingsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `startDate` (string)
- `endDate` (string)

### createfeelingendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `typesIds` (array)
- `comments` (string)

### getfeelingendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### getpredominantfeelingsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `startDate` (string)
- `endDate` (string)

### listfeelingsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `userId` (string)
- `typeId` (number)
- `groupId` (number)

### createfeelingtypeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `emojiCode` (string)

### listfeelingtypesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getfeelingtypeendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### addlikenewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `userId` (string)

### countnewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)

### createnewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getnewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### listnewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `createdByUserId` (string)
- `type` (string)

### removelikenewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `userId` (string)

### setdraftnewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `isDraft` (boolean)

### updatenewsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### createnewscommentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `comment` (string)
- `userId` (string)
- `newsId` (number)

### listnewscommentsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)
- `newsId` (number)

### deletenewscommentendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### countphrasesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### createphraseendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `phrase` (string)
- `scheduleStringDate` (string)
- `clientId` (string)
- `createdByUserId` (string)
- `groupIds` (array)

### deletephraseendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### updatephraseendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)
- `phrase` (string)
- `scheduleStringDate` (string)
- `groupsIds` (array)

### getphraseendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `id` (number)

### gettodayphraseendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)

### listphrasesendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `dateString` (string)

### getdashboardcountsendpoint_execute

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `groupId` (number)
- `startDate` (string)
- `endDate` (string)
