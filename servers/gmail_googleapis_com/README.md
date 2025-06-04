# @open-mcp/gmail_googleapis_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "gmail_googleapis_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/gmail_googleapis_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/gmail_googleapis_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add gmail_googleapis_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add gmail_googleapis_com \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add gmail_googleapis_com \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "gmail_googleapis_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/gmail_googleapis_com"],
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

### gmail_users_drafts_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `includeSpamTrash` (boolean)
- `maxResults` (integer)
- `pageToken` (string)
- `q` (string)

### parameters_gmail_v1_users_userid_drafts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_drafts_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_drafts_send

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_drafts_send

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### gmail_users_drafts_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_drafts_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `format` (string)

### parameters_gmail_v1_users_userid_drafts_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_drafts_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_history_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `historyTypes` (array)
- `labelId` (string)
- `maxResults` (integer)
- `pageToken` (string)
- `startHistoryId` (string)

### parameters_gmail_v1_users_userid_history

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_labels_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_labels

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_labels_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `color` (object)
- `id` (string)
- `labelListVisibility` (string)
- `messageListVisibility` (string)
- `messagesTotal` (integer)
- `messagesUnread` (integer)
- `name` (string)
- `threadsTotal` (integer)
- `threadsUnread` (integer)
- `type` (string)

### gmail_users_labels_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_labels_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_labels_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_labels_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `color` (object)
- `b_id` (string)
- `labelListVisibility` (string)
- `messageListVisibility` (string)
- `messagesTotal` (integer)
- `messagesUnread` (integer)
- `name` (string)
- `threadsTotal` (integer)
- `threadsUnread` (integer)
- `type` (string)

### gmail_users_labels_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `color` (object)
- `b_id` (string)
- `labelListVisibility` (string)
- `messageListVisibility` (string)
- `messagesTotal` (integer)
- `messagesUnread` (integer)
- `name` (string)
- `threadsTotal` (integer)
- `threadsUnread` (integer)
- `type` (string)

### gmail_users_messages_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `includeSpamTrash` (boolean)
- `labelIds` (array)
- `maxResults` (integer)
- `pageToken` (string)
- `q` (string)

### parameters_gmail_v1_users_userid_messages

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `deleted` (boolean)
- `internalDateSource` (string)

### parameters_gmail_v1_users_userid_messages_batchdelete

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_batchdelete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `ids` (array)

### parameters_gmail_v1_users_userid_messages_batchmodify

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_batchmodify

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `addLabelIds` (array)
- `ids` (array)
- `removeLabelIds` (array)

### parameters_gmail_v1_users_userid_messages_import

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_import

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `deleted` (boolean)
- `internalDateSource` (string)
- `neverMarkSpam` (boolean)
- `processForCalendar` (boolean)

### parameters_gmail_v1_users_userid_messages_send

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_send

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### gmail_users_messages_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_messages_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `format` (string)
- `metadataHeaders` (array)

### parameters_gmail_v1_users_userid_messages_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_gmail_v1_users_userid_messages_id_modify

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_modify

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `addLabelIds` (array)
- `removeLabelIds` (array)

### parameters_gmail_v1_users_userid_messages_id_trash

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_trash

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_messages_id_untrash

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_messages_untrash

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_messages_attachments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `messageId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_messages_messageid_attachments_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_getprofile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_profile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_getautoforwarding

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_autoforwarding

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_updateautoforwarding

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `disposition` (string)
- `emailAddress` (string)
- `enabled` (boolean)

### gmail_users_settings_cse_identities_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `pageSize` (integer)
- `pageToken` (string)

### parameters_gmail_v1_users_userid_settings_cse_identities

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_identities_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `emailAddress` (string)
- `primaryKeyPairId` (string)

### gmail_users_settings_cse_identities_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `cseEmailAddress` (string)

### gmail_users_settings_cse_identities_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `cseEmailAddress` (string)

### parameters_gmail_v1_users_userid_settings_cse_identities_cseemai

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_gmail_v1_users_userid_settings_cse_identities_emailad

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_identities_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `emailAddress` (string)
- `b_emailAddress` (string)
- `primaryKeyPairId` (string)

### gmail_users_settings_cse_keypairs_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `pageSize` (integer)
- `pageToken` (string)

### parameters_gmail_v1_users_userid_settings_cse_keypairs

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_keypairs_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `disableTime` (string)
- `enablementState` (string)
- `keyPairId` (string)
- `pem` (string)
- `pkcs7` (string)
- `privateKeyMetadata` (array)
- `subjectEmailAddresses` (array)

### gmail_users_settings_cse_keypairs_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `keyPairId` (string)

### parameters_gmail_v1_users_userid_settings_cse_keypairs_keypairid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_gmail_v1_users_userid_settings_cse_keypairs_keypairid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_keypairs_disable

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `keyPairId` (string)

### parameters_gmail_v1_users_userid_settings_cse_keypairs_keypairid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_keypairs_enable

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `keyPairId` (string)

### parameters_gmail_v1_users_userid_settings_cse_keypairs_keypairid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_cse_keypairs_obliterate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `keyPairId` (string)

### gmail_users_settings_delegates_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_delegates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_delegates_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `delegateEmail` (string)
- `verificationStatus` (string)

### gmail_users_settings_delegates_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `delegateEmail` (string)

### gmail_users_settings_delegates_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `delegateEmail` (string)

### parameters_gmail_v1_users_userid_settings_delegates_delegateemai

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_filters_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_filters

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_filters_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `action` (object)
- `criteria` (object)
- `id` (string)

### gmail_users_settings_filters_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_settings_filters_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_settings_filters_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_forwardingaddresses_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_forwardingaddresses

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_forwardingaddresses_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `forwardingEmail` (string)
- `verificationStatus` (string)

### gmail_users_settings_forwardingaddresses_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `forwardingEmail` (string)

### gmail_users_settings_forwardingaddresses_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `forwardingEmail` (string)

### parameters_gmail_v1_users_userid_settings_forwardingaddresses_fo

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_getimap

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_imap

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_updateimap

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `autoExpunge` (boolean)
- `enabled` (boolean)
- `expungeBehavior` (string)
- `maxFolderSize` (integer)

### gmail_users_settings_getlanguage

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_language

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_updatelanguage

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `displayLanguage` (string)

### gmail_users_settings_getpop

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_pop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_updatepop

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `accessWindow` (string)
- `disposition` (string)

### gmail_users_settings_sendas_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_sendas

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_sendas_create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `displayName` (string)
- `isDefault` (boolean)
- `isPrimary` (boolean)
- `replyToAddress` (string)
- `sendAsEmail` (string)
- `signature` (string)
- `smtpMsa` (object)
- `treatAsAlias` (boolean)
- `verificationStatus` (string)

### gmail_users_settings_sendas_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)

### gmail_users_settings_sendas_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)

### parameters_gmail_v1_users_userid_settings_sendas_sendasemail_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_sendas_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `displayName` (string)
- `isDefault` (boolean)
- `isPrimary` (boolean)
- `replyToAddress` (string)
- `b_sendAsEmail` (string)
- `signature` (string)
- `smtpMsa` (object)
- `treatAsAlias` (boolean)
- `verificationStatus` (string)

### gmail_users_settings_sendas_update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `displayName` (string)
- `isDefault` (boolean)
- `isPrimary` (boolean)
- `replyToAddress` (string)
- `b_sendAsEmail` (string)
- `signature` (string)
- `smtpMsa` (object)
- `treatAsAlias` (boolean)
- `verificationStatus` (string)

### gmail_users_settings_sendas_smimeinfo_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)

### parameters_gmail_v1_users_userid_settings_sendas_sendasemail_smi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_sendas_smimeinfo_insert

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `encryptedKeyPassword` (string)
- `expiration` (string)
- `id` (string)
- `isDefault` (boolean)
- `issuerCn` (string)
- `pem` (string)
- `pkcs12` (string)

### gmail_users_settings_sendas_smimeinfo_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `id` (string)

### gmail_users_settings_sendas_smimeinfo_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_settings_sendas_sendasemail_smi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_gmail_v1_users_userid_settings_sendas_sendasemail_smi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_sendas_smimeinfo_setdefault

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_settings_sendas_sendasemail_ver

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_sendas_verify

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `sendAsEmail` (string)

### gmail_users_settings_getvacation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### parameters_gmail_v1_users_userid_settings_vacation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_settings_updatevacation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `enableAutoReply` (boolean)
- `endTime` (string)
- `responseBodyHtml` (string)
- `responseBodyPlainText` (string)
- `responseSubject` (string)
- `restrictToContacts` (boolean)
- `restrictToDomain` (boolean)
- `startTime` (string)

### parameters_gmail_v1_users_userid_stop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_stop

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)

### gmail_users_threads_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `includeSpamTrash` (boolean)
- `labelIds` (array)
- `maxResults` (integer)
- `pageToken` (string)
- `q` (string)

### parameters_gmail_v1_users_userid_threads

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_threads_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### gmail_users_threads_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `format` (string)
- `metadataHeaders` (array)

### parameters_gmail_v1_users_userid_threads_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_gmail_v1_users_userid_threads_id_modify

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_threads_modify

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)
- `addLabelIds` (array)
- `removeLabelIds` (array)

### parameters_gmail_v1_users_userid_threads_id_trash

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_threads_trash

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_threads_id_untrash

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_threads_untrash

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `id` (string)

### parameters_gmail_v1_users_userid_watch

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### gmail_users_watch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `labelFilterAction` (string)
- `labelIds` (array)
- `topicName` (string)
