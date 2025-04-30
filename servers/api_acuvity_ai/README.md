# @open-mcp/api_acuvity_ai

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_acuvity_ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_acuvity_ai \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_acuvity_ai \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_acuvity_ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_acuvity_ai"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_acuvity_ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_acuvity_ai`
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

### get_all_accesspolicies

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_accesspolicy

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessDeniedMessage": z.string().describe("The message that is sent if the access is denied.").optional(),
  "action": z.enum(["Allow","Deny"]).describe("Define if the provider is allowed or denied for the match expression.").optional(),
  "alertDefinition": z.string().describe("The definition to use for alerting when action is deny.").optional(),
  "contentPolicies": z.array(z.string()).describe("The list of content policies to apply when the user has access to the provider.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the access policy.").optional(),
  "disabled": z.boolean().describe("If true, the policy is disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "match": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The match criteria used to take a decision on the access.").optional(),
  "minimalLogging": z.boolean().describe("If true, the system will not log the messages that are not considered as\nviolations.").optional(),
  "name": z.string().describe("The name of the access policy."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "offbandAnalysis": z.boolean().describe("If true, the system will run analysis in parallel of the user request. When this\nis active, no further policing will be done, and no content policy will run.\nThis can be used to observe the transmitted data and have analysis report,\nwithout adding latency to the end user request, at the price of not being able\nto do any form of content moderation.").optional(),
  "permissive": z.boolean().describe("If set, just log the decision, but don't enforce it.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_accesspolicy

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_accesspolicy

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_accesspolicies_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_accesspolicy

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessDeniedMessage": z.string().describe("The message that is sent if the access is denied.").optional(),
  "action": z.enum(["Allow","Deny"]).describe("Define if the provider is allowed or denied for the match expression.").optional(),
  "alertDefinition": z.string().describe("The definition to use for alerting when action is deny.").optional(),
  "contentPolicies": z.array(z.string()).describe("The list of content policies to apply when the user has access to the provider.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the access policy.").optional(),
  "disabled": z.boolean().describe("If true, the policy is disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "match": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The match criteria used to take a decision on the access.").optional(),
  "minimalLogging": z.boolean().describe("If true, the system will not log the messages that are not considered as\nviolations.").optional(),
  "name": z.string().describe("The name of the access policy."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "offbandAnalysis": z.boolean().describe("If true, the system will run analysis in parallel of the user request. When this\nis active, no further policing will be done, and no content policy will run.\nThis can be used to observe the transmitted data and have analysis report,\nwithout adding latency to the end user request, at the price of not being able\nto do any form of content moderation.").optional(),
  "permissive": z.boolean().describe("If set, just log the decision, but don't enforce it.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### create_adminmagiclink

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "passcode": z.string().optional()
}
```

### get_all_adminorgs

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_adminorg

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "forceReimportTemplate": z.boolean().describe("This property if true will force reimport the template data. Setting it false is\na noop.").optional(),
  "githubSigninEnabled": z.boolean().describe("Enables the global Sign In With Github for the organization.").optional(),
  "gitlabSigninEnabled": z.boolean().describe("Enables the global Sign In With Gitlab for the organization.").optional(),
  "googleSigninEnabled": z.boolean().describe("Enables the global Sign In With Google for the organization.").optional(),
  "huggingfaceSigninEnabled": z.boolean().describe("Enables the global Sign In With Huggingface for the organization.").optional(),
  "mode": z.enum(["Trial","TrialEmployees","TrialApps","Pilot","Normal","NormalEmployees","NormalApps","Blocked","Dead"]).describe("The mode of the organization.").optional(),
  "name": z.string().describe("The name of the organization."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "reimportTemplate": z.boolean().describe("This is an internal property used to decide if the org template needs to be\nreimported.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s). If set it will\nconfigure the complete subject of the admin api authorization, ignoring anything\npassed in claims.").optional(),
  "type": z.enum(["Full","Single"]).describe("The type of organization. Either Full or Single. Full represents an organization\nthat will need to onboard additional users, while Single represents a single\nuser account.").optional()
}
```

### get_adminorg

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_adminorgs_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_adminorg

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "forceReimportTemplate": z.boolean().describe("This property if true will force reimport the template data. Setting it false is\na noop.").optional(),
  "githubSigninEnabled": z.boolean().describe("Enables the global Sign In With Github for the organization.").optional(),
  "gitlabSigninEnabled": z.boolean().describe("Enables the global Sign In With Gitlab for the organization.").optional(),
  "googleSigninEnabled": z.boolean().describe("Enables the global Sign In With Google for the organization.").optional(),
  "huggingfaceSigninEnabled": z.boolean().describe("Enables the global Sign In With Huggingface for the organization.").optional(),
  "mode": z.enum(["Trial","TrialEmployees","TrialApps","Pilot","Normal","NormalEmployees","NormalApps","Blocked","Dead"]).describe("The mode of the organization.").optional(),
  "name": z.string().describe("The name of the organization."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "reimportTemplate": z.boolean().describe("This is an internal property used to decide if the org template needs to be\nreimported.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s). If set it will\nconfigure the complete subject of the admin api authorization, ignoring anything\npassed in claims.").optional(),
  "type": z.enum(["Full","Single"]).describe("The type of organization. Either Full or Single. Full represents an organization\nthat will need to onboard additional users, while Single represents a single\nuser account.").optional()
}
```

### get_all_agentconfigs

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_agentconfig

**Environment variables**



**Input schema**

```ts
{
  "DNSMonitorEnabled": z.boolean().describe("If enabled, the agent will monitor DNS traffic.").optional(),
  "DNSMonitorPolicy": z.enum(["Warn","Enforce"]).describe("What action to take if the DNS monitor cannot start when enabled. Enforce will\nstop the agent with an error, while Warn will post a log and continue on.").optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowedPauseInterval": z.string().describe("An administrator can set this for users to pause enforcement for this interval.\nA value of 0s means that users are not allowed to pause the enforcement.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the agent configuration.").optional(),
  "disableManagedCA": z.boolean().describe("If disabled, the agent will rely on the CA already installed and trusted on the\nsystem.").optional(),
  "disableSystemProxyManagement": z.boolean().describe("If disabled, the system proxy needs to be configured manually.").optional(),
  "disableURLDiscovery": z.boolean().describe("If disabled, the agent will stop reporting the visited domains.").optional(),
  "enablePause": z.boolean().describe("If enabled, the agent will have the ability to pause enforcement.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "listeningPort": z.string().describe("The port use by the agent to proxy the traffic."),
  "name": z.string().describe("The name of the agent configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pacName": z.string().describe("The name of the PAC configuration to use.").optional(),
  "pingInterval": z.string().describe("The ping interval at which acushield should check in with the backend.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useDynamicPort": z.boolean().describe("If system proxy management is enabled and this flag is enabled, the system\ncan take another port, different that the listeningPort.").optional()
}
```

### delete_agentconfig

**Environment variables**



**Input schema**

```ts
{}
```

### get_agentconfig

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_agentconfigs_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_agentconfig

**Environment variables**



**Input schema**

```ts
{
  "DNSMonitorEnabled": z.boolean().describe("If enabled, the agent will monitor DNS traffic.").optional(),
  "DNSMonitorPolicy": z.enum(["Warn","Enforce"]).describe("What action to take if the DNS monitor cannot start when enabled. Enforce will\nstop the agent with an error, while Warn will post a log and continue on.").optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowedPauseInterval": z.string().describe("An administrator can set this for users to pause enforcement for this interval.\nA value of 0s means that users are not allowed to pause the enforcement.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the agent configuration.").optional(),
  "disableManagedCA": z.boolean().describe("If disabled, the agent will rely on the CA already installed and trusted on the\nsystem.").optional(),
  "disableSystemProxyManagement": z.boolean().describe("If disabled, the system proxy needs to be configured manually.").optional(),
  "disableURLDiscovery": z.boolean().describe("If disabled, the agent will stop reporting the visited domains.").optional(),
  "enablePause": z.boolean().describe("If enabled, the agent will have the ability to pause enforcement.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "listeningPort": z.string().describe("The port use by the agent to proxy the traffic."),
  "name": z.string().describe("The name of the agent configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pacName": z.string().describe("The name of the PAC configuration to use.").optional(),
  "pingInterval": z.string().describe("The ping interval at which acushield should check in with the backend.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useDynamicPort": z.boolean().describe("If system proxy management is enabled and this flag is enabled, the system\ncan take another port, different that the listeningPort.").optional()
}
```

### get_all_agents

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_agent

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "agentConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAgentConfig stores the configuration information for the acushield agent.").optional(),
  "currentVersion": z.string().describe("The current version of the agent."),
  "hostname": z.string().describe("The name of the host where the agent is runnning."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "isAPEXReachable": z.boolean().describe("True if the apex is reachable.").optional(),
  "isAPEXTrusted": z.boolean().describe("True if the apex is trusted.").optional(),
  "managedCAState": z.boolean().describe("The state of the managed CA.").optional(),
  "managedInterfaces": z.array(z.string()).describe("The list of managed interfaces.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "ping": z.string().datetime({ offset: true }).describe("The last ping recorded for the agent."),
  "principal": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescribe the principal."),
  "start": z.string().datetime({ offset: true }).describe("The start time for the agent."),
  "status": z.enum(["Alive","Stopped"]).describe("The status of the agent."),
  "systemProxyManagementState": z.boolean().describe("The state of the system proxy management.").optional()
}
```

### delete_agent

**Environment variables**



**Input schema**

```ts
{}
```

### get_agent

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_agents_id_

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_aidomains

**Environment variables**



**Input schema**

```ts
{
  "domain": z.string().describe("The domain to look for.").optional(),
  "q": z.string().describe("This is an example.").optional()
}
```

### create_aidomain

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "compliances": z.array(z.string()).describe("The list of compliance provided by the domain.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataResidency": z.array(z.string()).describe("The user data storage location.").optional(),
  "dataSharing": z.boolean().describe("Does the provider share user data with 3rd party or services.").optional(),
  "dataSharingConsent": z.boolean().describe("Does the provider share user data with consent with 3rd party or services.").optional(),
  "description": z.string().describe("A brief description about the AI domain and what services it provides.").optional(),
  "domain": z.string().describe("The domain of the AI provider."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "isAIDomain": z.boolean().describe("Flag to say if the domain is a AI domain or not.").optional(),
  "models": z.array(z.string()).describe("List of AI models used by the domain.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providerName": z.string().describe("The name of the main provider.").optional(),
  "providerRetentionPolicies": z.array(z.object({ "description": z.string().describe("Description of the data retention policy for the subscription type.").optional(), "duration": z.string().describe("The duration of time the data retention policy applies to the subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined.") }).describe("Represents data retention policy for a given subscription type.")).describe("The data retention policies by the domain for each type of users.").optional(),
  "providerTrainingPolicies": z.array(z.object({ "description": z.string().describe("Description of the data usage policy for a subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined."), "useData": z.boolean().describe("User Data usage to train or improve the models based on the subscription type.").optional() }).describe("Represents provider data usage policy for a given subscription type.")).describe("Does the provider use user data for training its model.").optional(),
  "riskExplanation": z.string().describe("A Markdown formatted string explaining the risk score.").optional(),
  "riskScore": z.number().describe("The risk score for the domain."),
  "thirdPartyModelUsage": z.boolean().describe("Does provider use third party model.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_aidomain

**Environment variables**



**Input schema**

```ts
{}
```

### get_aidomain

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_aidomains_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_aidomain

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "compliances": z.array(z.string()).describe("The list of compliance provided by the domain.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataResidency": z.array(z.string()).describe("The user data storage location.").optional(),
  "dataSharing": z.boolean().describe("Does the provider share user data with 3rd party or services.").optional(),
  "dataSharingConsent": z.boolean().describe("Does the provider share user data with consent with 3rd party or services.").optional(),
  "description": z.string().describe("A brief description about the AI domain and what services it provides.").optional(),
  "domain": z.string().describe("The domain of the AI provider."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "isAIDomain": z.boolean().describe("Flag to say if the domain is a AI domain or not.").optional(),
  "models": z.array(z.string()).describe("List of AI models used by the domain.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providerName": z.string().describe("The name of the main provider.").optional(),
  "providerRetentionPolicies": z.array(z.object({ "description": z.string().describe("Description of the data retention policy for the subscription type.").optional(), "duration": z.string().describe("The duration of time the data retention policy applies to the subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined.") }).describe("Represents data retention policy for a given subscription type.")).describe("The data retention policies by the domain for each type of users.").optional(),
  "providerTrainingPolicies": z.array(z.object({ "description": z.string().describe("Description of the data usage policy for a subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined."), "useData": z.boolean().describe("User Data usage to train or improve the models based on the subscription type.").optional() }).describe("Represents provider data usage policy for a given subscription type.")).describe("Does the provider use user data for training its model.").optional(),
  "riskExplanation": z.string().describe("A Markdown formatted string explaining the risk score.").optional(),
  "riskScore": z.number().describe("The risk score for the domain."),
  "thirdPartyModelUsage": z.boolean().describe("Does provider use third party model.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_alertdefinitions

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_alertdefinition

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "cooldown": z.string().describe("If set, how long until a subsequent alert notification can be raised.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the alert definition.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "message": z.string().describe("The message sent when notifying.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "severity": z.enum(["Critical","Warning","Info"]).describe("The severity of the alert event."),
  "sinks": z.array(z.string()).describe("The sinks used to notify.").optional(),
  "trigger": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents the criteria to trigger an alert notification.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_alertdefinition

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_alertdefinition

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_alertdefinitions_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_alertdefinition

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "cooldown": z.string().describe("If set, how long until a subsequent alert notification can be raised.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the alert definition.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "message": z.string().describe("The message sent when notifying.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "severity": z.enum(["Critical","Warning","Info"]).describe("The severity of the alert event."),
  "sinks": z.array(z.string()).describe("The sinks used to notify.").optional(),
  "trigger": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents the criteria to trigger an alert notification.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_alerts

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_alert

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "alertDefinition": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents a definition of an alert.").optional(),
  "alertDefinitionName": z.string().describe("The name identifier of the alert definition that triggered the alert."),
  "alertEvents": z.array(z.object({ "alertDefinition": z.string().describe("The name of the alert definition that triggered the alert event."), "alertDefinitionNamespace": z.string().describe("The namespace of the alert definition.").optional(), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal."), "provider": z.string().describe("The provider used that the alert came from.").optional(), "timestamp": z.string().datetime({ offset: true }).describe("When the alert event was raised.").readonly().optional() }).describe("Represents an alert event raised by a policy.")).describe("The events related to the alert.").readonly().optional(),
  "counter": z.number().int().describe("The number of times the alert was raised."),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "end": z.string().datetime({ offset: true }).describe("When the alert was last raised."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "start": z.string().datetime({ offset: true }).describe("When the alert was first raised."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_alert

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_alert

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_alerts_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_alert

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "alertDefinition": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents a definition of an alert.").optional(),
  "alertDefinitionName": z.string().describe("The name identifier of the alert definition that triggered the alert."),
  "alertEvents": z.array(z.object({ "alertDefinition": z.string().describe("The name of the alert definition that triggered the alert event."), "alertDefinitionNamespace": z.string().describe("The namespace of the alert definition.").optional(), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal."), "provider": z.string().describe("The provider used that the alert came from.").optional(), "timestamp": z.string().datetime({ offset: true }).describe("When the alert event was raised.").readonly().optional() }).describe("Represents an alert event raised by a policy.")).describe("The events related to the alert.").readonly().optional(),
  "counter": z.number().int().describe("The number of times the alert was raised."),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "end": z.string().datetime({ offset: true }).describe("When the alert was last raised."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "start": z.string().datetime({ offset: true }).describe("When the alert was first raised."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_analyzers

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_all_apiauthorizations

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_apiauthorization

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the authorization rule.").optional(),
  "disabled": z.boolean().describe("When disabled, an API Authorization has no effect.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the authorization rule."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "permissions": z.array(z.string()).describe("The individual permissions. Only works if role is Custom.").optional(),
  "role": z.enum(["Administrator","Application","Custom","Employee","Owner","Proxy","Trial","Viewer"]).describe("The role for the subjects.").optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s).").optional(),
  "targetNamespaces": z.array(z.string()).describe("Defines the namespace or namespaces in which the permission for subject should\napply. If empty, the object's namespace will be used.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_apiauthorization

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_apiauthorization

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apiauthorizations_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_apiauthorization

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the authorization rule.").optional(),
  "disabled": z.boolean().describe("When disabled, an API Authorization has no effect.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the authorization rule."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "permissions": z.array(z.string()).describe("The individual permissions. Only works if role is Custom.").optional(),
  "role": z.enum(["Administrator","Application","Custom","Employee","Owner","Proxy","Trial","Viewer"]).describe("The role for the subjects.").optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s).").optional(),
  "targetNamespaces": z.array(z.string()).describe("Defines the namespace or namespaces in which the permission for subject should\napply. If empty, the object's namespace will be used.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_apps

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_app

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "components": z.array(z.object({ "CAInjectionEnabled": z.boolean().describe("EXPERIMENTAL. If egress mode is inline, the Apex will act as a transparent\nproxy. The certificates that will be served by the proxy are generated by the\nApex itself which are issued by a dynamic TLS CA. If you enable this feature,\nthe matching app component instances will get the CA certificate dynamically\ninjected into the system trust store.").optional(), "description": z.string().describe("The description of the component.").optional(), "egressMode": z.enum(["Disabled","Mirror","Inline"]).describe("The egress datapath mode to use for network traffic going out to providers for\nthis application component. By default this is set to disabled. However, this\ncan be changed to mirror traffic where the Apex is only providing visibility\nwith no possibility of any access or content policies to take effect. Or this\ncan be set to inline in which case all traffic to providers will be redirected\nto the Apex which acts as a transparent proxy in this case. In this mode access\nand content policies will take effect."), "ingressProviderConfigs": z.array(z.object({ "dialTLS": z.enum(["Preserve","Auto","Enabled","Disabled"]).describe("This option controls the dialing behaviour of the apex to the origin server.\nShould be explicitly set to enabled if the origin expects TLS connections. And\nvice versa it should be set to disabled if the origin expects connections in\nplaintext. By default this setting is set to preserve which means that the apex\nis going to dial using whatever mode it terminated its own connection with: if\nthe apex received a TLS connection, it will dial TLS, if it received a plaintext\nconnection, then it will dial plaintext. The apex receiving behaviour can be\ncontrolled with the listenTLS option. As a last resort this setting can be set\nto auto which means that the apex is going to probe the origin server to\ndetermine if it needs to dial using TLS or not. Note that this is potentially\nsending a TLS Client Hello to a plaintext HTTP server which is not expecting\nthat. Therefore, this option is not recommended if it can be avoided. This\nsetting is ignored in mirror mode."), "listenPort": z.number().int().describe("The listening port. For appcomponent configurations this is the listening port\nthat traffic will be intercepted on or mirrored from."), "listenTLS": z.enum(["Auto","Enabled","Disabled"]).describe("This option controls the receiving behaviour of connection to the apex before\nthey are going to be proxied to the origin server. To control the dialing\nbehaviour of the apex towards the origin server use the dialTLS option. Should\nbe explicitly set to enabled if the listener expects TLS connections. And vice\nversa it should be set to disabled if the listener expects connections in\nplaintext. By default this setting is set to auto which means that the listener\nwill automatically determine if incoming connections are TLS or not: TLS\nconnections will be accepted, as well as  plain TCP connections will be\naccepted, both on the configured listenPort. This setting is ignored in mirror\nmode."), "listenTLSCert": z.string().describe("Optional PEM encoded X509v3 certificate to use for the listener for this\nprovider. This setting will be ignored if listenMode is not TLS or Auto or mode\nis not Inline. However, this setting is required if listenTLSKey is set.").optional(), "listenTLSKey": z.string().describe("Optional PEM encoded key pair to use for the listener for this provider. This\nsetting will be ignored if listenMode is not TLS or Auto or mode is not Inline.\nHowever, this setting is required if listenTLSCert is set.").optional(), "mode": z.enum(["Disabled","Mirror","Inline"]).describe("The ingress datapath mode to use for network traffic arriving for this ingress\nprovider for this application component. By default this is set to disabled.\nHowever, this can be changed to mirror traffic where the Apex is only providing\nvisibility with no possibility of any access or content policies to take effect.\nOr this can be set to inline in which case all traffic to providers will be\nredirected to the Apex which acts as a transparent proxy in this case. In this\nmode access and content policies will take effect.") }).describe("Represents the configuration if an apex is to act as an ingress for a provider.")).describe("The ingress provider configurations to serve for this application. If this app\ncomponent serves multiple ingress providers, you must define an ingress provider\nconfig for every single one of them. If you need access to the same ingress\nprovider over different port configurations (for example one serving https while\nanother port serves plain http), then you must define two ingress provider\nconfigurations and reuse the same provider name within the configuration.").optional(), "name": z.string().describe("The component name."), "providerName": z.string().describe("If given, this is the provider name that this component represents. This\n**MUST** match the name of a provider.").optional(), "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application component based on downstream\nlabels.").optional(), "token": z.string().describe("The token for the current component. Only populated by the backend when the\ncaller's\nclaim match the parents app.subject.").readonly().optional() }).describe("Represents a particular component of the application.")).describe("List of components for the application.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the App.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the App."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application based on downstream labels.").optional(),
  "subject": z.array(z.array(z.string())).describe("Only bearers with claims matching the subject will be allowed to access the\nappcomponent tokens.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_app

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_app

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apps_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_app

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "components": z.array(z.object({ "CAInjectionEnabled": z.boolean().describe("EXPERIMENTAL. If egress mode is inline, the Apex will act as a transparent\nproxy. The certificates that will be served by the proxy are generated by the\nApex itself which are issued by a dynamic TLS CA. If you enable this feature,\nthe matching app component instances will get the CA certificate dynamically\ninjected into the system trust store.").optional(), "description": z.string().describe("The description of the component.").optional(), "egressMode": z.enum(["Disabled","Mirror","Inline"]).describe("The egress datapath mode to use for network traffic going out to providers for\nthis application component. By default this is set to disabled. However, this\ncan be changed to mirror traffic where the Apex is only providing visibility\nwith no possibility of any access or content policies to take effect. Or this\ncan be set to inline in which case all traffic to providers will be redirected\nto the Apex which acts as a transparent proxy in this case. In this mode access\nand content policies will take effect."), "ingressProviderConfigs": z.array(z.object({ "dialTLS": z.enum(["Preserve","Auto","Enabled","Disabled"]).describe("This option controls the dialing behaviour of the apex to the origin server.\nShould be explicitly set to enabled if the origin expects TLS connections. And\nvice versa it should be set to disabled if the origin expects connections in\nplaintext. By default this setting is set to preserve which means that the apex\nis going to dial using whatever mode it terminated its own connection with: if\nthe apex received a TLS connection, it will dial TLS, if it received a plaintext\nconnection, then it will dial plaintext. The apex receiving behaviour can be\ncontrolled with the listenTLS option. As a last resort this setting can be set\nto auto which means that the apex is going to probe the origin server to\ndetermine if it needs to dial using TLS or not. Note that this is potentially\nsending a TLS Client Hello to a plaintext HTTP server which is not expecting\nthat. Therefore, this option is not recommended if it can be avoided. This\nsetting is ignored in mirror mode."), "listenPort": z.number().int().describe("The listening port. For appcomponent configurations this is the listening port\nthat traffic will be intercepted on or mirrored from."), "listenTLS": z.enum(["Auto","Enabled","Disabled"]).describe("This option controls the receiving behaviour of connection to the apex before\nthey are going to be proxied to the origin server. To control the dialing\nbehaviour of the apex towards the origin server use the dialTLS option. Should\nbe explicitly set to enabled if the listener expects TLS connections. And vice\nversa it should be set to disabled if the listener expects connections in\nplaintext. By default this setting is set to auto which means that the listener\nwill automatically determine if incoming connections are TLS or not: TLS\nconnections will be accepted, as well as  plain TCP connections will be\naccepted, both on the configured listenPort. This setting is ignored in mirror\nmode."), "listenTLSCert": z.string().describe("Optional PEM encoded X509v3 certificate to use for the listener for this\nprovider. This setting will be ignored if listenMode is not TLS or Auto or mode\nis not Inline. However, this setting is required if listenTLSKey is set.").optional(), "listenTLSKey": z.string().describe("Optional PEM encoded key pair to use for the listener for this provider. This\nsetting will be ignored if listenMode is not TLS or Auto or mode is not Inline.\nHowever, this setting is required if listenTLSCert is set.").optional(), "mode": z.enum(["Disabled","Mirror","Inline"]).describe("The ingress datapath mode to use for network traffic arriving for this ingress\nprovider for this application component. By default this is set to disabled.\nHowever, this can be changed to mirror traffic where the Apex is only providing\nvisibility with no possibility of any access or content policies to take effect.\nOr this can be set to inline in which case all traffic to providers will be\nredirected to the Apex which acts as a transparent proxy in this case. In this\nmode access and content policies will take effect.") }).describe("Represents the configuration if an apex is to act as an ingress for a provider.")).describe("The ingress provider configurations to serve for this application. If this app\ncomponent serves multiple ingress providers, you must define an ingress provider\nconfig for every single one of them. If you need access to the same ingress\nprovider over different port configurations (for example one serving https while\nanother port serves plain http), then you must define two ingress provider\nconfigurations and reuse the same provider name within the configuration.").optional(), "name": z.string().describe("The component name."), "providerName": z.string().describe("If given, this is the provider name that this component represents. This\n**MUST** match the name of a provider.").optional(), "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application component based on downstream\nlabels.").optional(), "token": z.string().describe("The token for the current component. Only populated by the backend when the\ncaller's\nclaim match the parents app.subject.").readonly().optional() }).describe("Represents a particular component of the application.")).describe("List of components for the application.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the App.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the App."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application based on downstream labels.").optional(),
  "subject": z.array(z.array(z.string())).describe("Only bearers with claims matching the subject will be allowed to access the\nappcomponent tokens.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_appcomponents_in_app

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### parameters_apps_id_appcomponents

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_apptokens

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_apptoken

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "claims": z.array(z.string()).describe("The list of claims delivered in the token.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "email": z.string().describe("The email of the user who requested the token.").readonly().optional(),
  "expirationDate": z.string().datetime({ offset: true }).describe("Tells when the token will expire.").readonly().optional(),
  "machineID": z.string().describe("The optional machine ID of the token. This is used to easily retrieve the tokens\nissued for a particular machine.").optional(),
  "name": z.string().describe("Name of the token is specified while creating the token."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "sourceIP": z.string().describe("The source IP of the request that initiated the creation of the token.").readonly().optional(),
  "token": z.string().describe("The generated token. It won't be stored.").optional(),
  "tokenID": z.string().describe("The ID of the associated token.").readonly().optional(),
  "transient": z.boolean().describe("If true, the token will not be stored and will only be revocable if you keep\ntrack of the token ID yourself. Also, the validity will be capped and the token\nwon't be long lived.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "validity": z.string().describe("Configures the validity of the token.").optional()
}
```

### delete_apptoken

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_apptoken

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_apptokens_id_

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_authsettings

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_contentpolicies

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_contentpolicy

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the content policy.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "moderations": z.array(z.object({ "action": z.enum(["Warn","Block","None"]).describe("The actual action to take when triggered."), "alertDefinition": z.string().describe("The definition to use for alerting.").optional(), "link": z.string().describe("Sets an optional link to reference a document with more explanation on the\nmoderation.").optional(), "message": z.string().describe("The message if the moderation action is warn or block.").optional(), "predicates": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The predicate expression for the moderation to be triggered.").optional(), "redact": z.boolean().describe("If true, redacts the keywords, PIIs, and/or secrets defined in the predicates.").optional() }).describe("Represents a moderation to take in the content policy.")).describe("The list of moderations to take when the user has access to the provider.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_contentpolicy

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_contentpolicy

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_contentpolicies_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_contentpolicy

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the content policy.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "moderations": z.array(z.object({ "action": z.enum(["Warn","Block","None"]).describe("The actual action to take when triggered."), "alertDefinition": z.string().describe("The definition to use for alerting.").optional(), "link": z.string().describe("Sets an optional link to reference a document with more explanation on the\nmoderation.").optional(), "message": z.string().describe("The message if the moderation action is warn or block.").optional(), "predicates": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The predicate expression for the moderation to be triggered.").optional(), "redact": z.boolean().describe("If true, redacts the keywords, PIIs, and/or secrets defined in the predicates.").optional() }).describe("Represents a moderation to take in the content policy.")).describe("The list of moderations to take when the user has access to the provider.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_customdatasets

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_customdataset

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataTypes": z.array(z.string()).describe("A list of all the data types which are associated to this data set.").optional(),
  "description": z.string().describe("Description of the custom data set.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_customdataset

**Environment variables**



**Input schema**

```ts
{}
```

### get_customdataset

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_customdatasets_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_customdataset

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataTypes": z.array(z.string()).describe("A list of all the data types which are associated to this data set.").optional(),
  "description": z.string().describe("Description of the custom data set.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_customdatatypes

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_customdatatype

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the custom data type.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "matches": z.array(z.string()).describe("A list of RE2 regular expressions used for data detection. Each expression can\ninclude zero or one capturing group. If no capturing group is present, detection\npositions will be determined based on the entire captured portion of the data.\nIf a single capturing group is included, the detection positions will correspond\nto the part defined by that group. However, if more than one capturing group is\nfound, the system will return a validation error. Additionally, extra\nvalidations are performed to ensure that the regular expressions are not overly\ncomplex, preventing any negative impact on detection engine performance.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_customdatatype

**Environment variables**



**Input schema**

```ts
{}
```

### get_customdatatype

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_customdatatypes_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_customdatatype

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the custom data type.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "matches": z.array(z.string()).describe("A list of RE2 regular expressions used for data detection. Each expression can\ninclude zero or one capturing group. If no capturing group is present, detection\npositions will be determined based on the entire captured portion of the data.\nIf a single capturing group is included, the detection positions will correspond\nto the part defined by that group. However, if more than one capturing group is\nfound, the system will return a validation error. Additionally, extra\nvalidations are performed to ensure that the regular expressions are not overly\ncomplex, preventing any negative impact on detection engine performance.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_extractors

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_extractor

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line.").optional(),
  "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(),
  "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required.").optional(),
  "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned.").optional(),
  "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis.").optional(),
  "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(),
  "description": z.string().describe("The description of the provider.").optional(),
  "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(),
  "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."),
  "name": z.string().describe("The internal reference name of the object."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "path": z.string().describe("A regular expression to match a URL path to log."),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(),
  "type": z.enum(["Input","Output"]).describe("The type of extractor."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_extractor

**Environment variables**



**Input schema**

```ts
{}
```

### get_extractor

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_extractors_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_extractor

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line.").optional(),
  "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(),
  "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required.").optional(),
  "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned.").optional(),
  "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis.").optional(),
  "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(),
  "description": z.string().describe("The description of the provider.").optional(),
  "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(),
  "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."),
  "name": z.string().describe("The internal reference name of the object."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "path": z.string().describe("A regular expression to match a URL path to log."),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(),
  "type": z.enum(["Input","Output"]).describe("The type of extractor."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_feedbacks

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_feedback

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "comment": z.string().describe("General comments on the feedback.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "key": z.string().describe("The key of the feedback."),
  "logHash": z.string().describe("The hash of the log."),
  "logUnixNano": z.string().describe("The timestamp of the log."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "principal": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescribe the principal."),
  "provider": z.string().describe("The provider of the feedback."),
  "score": z.number().int().describe("The feedback score (+1 for upvote, -1 for downvote).").optional(),
  "status": z.enum(["New","Investigating","Confirmed","Rejected"]).describe("The status of the feedback."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("The value of the feedback.")
}
```

### delete_feedback

**Environment variables**



**Input schema**

```ts
{}
```

### get_feedback

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_feedbacks_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_feedback

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "comment": z.string().describe("General comments on the feedback.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "key": z.string().describe("The key of the feedback."),
  "logHash": z.string().describe("The hash of the log."),
  "logUnixNano": z.string().describe("The timestamp of the log."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "principal": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescribe the principal."),
  "provider": z.string().describe("The provider of the feedback."),
  "score": z.number().int().describe("The feedback score (+1 for upvote, -1 for downvote).").optional(),
  "status": z.enum(["New","Investigating","Confirmed","Rejected"]).describe("The status of the feedback."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("The value of the feedback.")
}
```

### get_all_gitbooktokens

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_ignoreddomains

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_ignoreddomain

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "domain": z.string().describe("The domain to ignore."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_ignoreddomain

**Environment variables**



**Input schema**

```ts
{}
```

### get_ignoreddomain

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_ignoreddomains_id_

**Environment variables**



**Input schema**

```ts
{}
```

### create_import

**Environment variables**



**Input schema**

```ts
{
  "delete": z.boolean().describe("If set, delete the current imported data.").optional(),
  "AIDomains": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "compliances": z.array(z.string()).describe("The list of compliance provided by the domain.").optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "dataResidency": z.array(z.string()).describe("The user data storage location.").optional(), "dataSharing": z.boolean().describe("Does the provider share user data with 3rd party or services.").optional(), "dataSharingConsent": z.boolean().describe("Does the provider share user data with consent with 3rd party or services.").optional(), "description": z.string().describe("A brief description about the AI domain and what services it provides.").optional(), "domain": z.string().describe("The domain of the AI provider."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "isAIDomain": z.boolean().describe("Flag to say if the domain is a AI domain or not.").optional(), "models": z.array(z.string()).describe("List of AI models used by the domain.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "providerName": z.string().describe("The name of the main provider.").optional(), "providerRetentionPolicies": z.array(z.object({ "description": z.string().describe("Description of the data retention policy for the subscription type.").optional(), "duration": z.string().describe("The duration of time the data retention policy applies to the subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined.") }).describe("Represents data retention policy for a given subscription type.")).describe("The data retention policies by the domain for each type of users.").optional(), "providerTrainingPolicies": z.array(z.object({ "description": z.string().describe("Description of the data usage policy for a subscription type.").optional(), "subscriptionType": z.enum(["Enterprise","Paid","Free"]).describe("The type of subscription for which the data retention policy needs to be\ndefined."), "useData": z.boolean().describe("User Data usage to train or improve the models based on the subscription type.").optional() }).describe("Represents provider data usage policy for a given subscription type.")).describe("Does the provider use user data for training its model.").optional(), "riskExplanation": z.string().describe("A Markdown formatted string explaining the risk score.").optional(), "riskScore": z.number().describe("The risk score for the domain."), "thirdPartyModelUsage": z.boolean().describe("Does provider use third party model.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("AI domain provides an AI risk score given a domain url.")).describe("AI domains to import.").optional(),
  "APIAuthorizations": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the authorization rule.").optional(), "disabled": z.boolean().describe("When disabled, an API Authorization has no effect.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The name of the authorization rule."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "permissions": z.array(z.string()).describe("The individual permissions. Only works if role is Custom.").optional(), "role": z.enum(["Administrator","Application","Custom","Employee","Owner","Proxy","Trial","Viewer"]).describe("The role for the subjects."), "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s).").optional(), "targetNamespaces": z.array(z.string()).describe("Defines the namespace or namespaces in which the permission for subject should\napply. If empty, the object's namespace will be used.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Define API Authorizations to define who can access the Acuvity console.")).describe("APIAuthorizations to import.").optional(),
  "PACConfigs": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("Name of the PAC config. A special name is 'default'. The default pac will be the\none that APEX returns if nothing else is configured."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "providers": z.array(z.string()).describe("The list of providers to activate for that PAC config."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("PAC Config allows to create a custom PAC, with a selection of services enabled.")).describe("PACConfigs to import.").optional(),
  "accessPolicies": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "accessDeniedMessage": z.string().describe("The message that is sent if the access is denied.").optional(), "action": z.enum(["Allow","Deny"]).describe("Define if the provider is allowed or denied for the match expression."), "alertDefinition": z.string().describe("The definition to use for alerting when action is deny.").optional(), "contentPolicies": z.array(z.string()).describe("The list of content policies to apply when the user has access to the provider.").optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the access policy.").optional(), "disabled": z.boolean().describe("If true, the policy is disabled.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "match": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The match criteria used to take a decision on the access.").optional(), "minimalLogging": z.boolean().describe("If true, the system will not log the messages that are not considered as\nviolations.").optional(), "name": z.string().describe("The name of the access policy."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "offbandAnalysis": z.boolean().describe("If true, the system will run analysis in parallel of the user request. When this\nis active, no further policing will be done, and no content policy will run.\nThis can be used to observe the transmitted data and have analysis report,\nwithout adding latency to the end user request, at the price of not being able\nto do any form of content moderation.").optional(), "permissive": z.boolean().describe("If set, just log the decision, but don't enforce it.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Define which teams or individuals can access a provider.")).describe("Access policies to import.").optional(),
  "agentConfigs": z.array(z.object({ "DNSMonitorEnabled": z.boolean().describe("If enabled, the agent will monitor DNS traffic.").optional(), "DNSMonitorPolicy": z.enum(["Warn","Enforce"]).describe("What action to take if the DNS monitor cannot start when enabled. Enforce will\nstop the agent with an error, while Warn will post a log and continue on."), "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "allowedPauseInterval": z.string().describe("An administrator can set this for users to pause enforcement for this interval.\nA value of 0s means that users are not allowed to pause the enforcement."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the agent configuration.").optional(), "disableManagedCA": z.boolean().describe("If disabled, the agent will rely on the CA already installed and trusted on the\nsystem.").optional(), "disableSystemProxyManagement": z.boolean().describe("If disabled, the system proxy needs to be configured manually.").optional(), "disableURLDiscovery": z.boolean().describe("If disabled, the agent will stop reporting the visited domains.").optional(), "enablePause": z.boolean().describe("If enabled, the agent will have the ability to pause enforcement.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "listeningPort": z.string().describe("The port use by the agent to proxy the traffic."), "name": z.string().describe("The name of the agent configuration."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "pacName": z.string().describe("The name of the PAC configuration to use.").optional(), "pingInterval": z.string().describe("The ping interval at which acushield should check in with the backend."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(), "useDynamicPort": z.boolean().describe("If system proxy management is enabled and this flag is enabled, the system\ncan take another port, different that the listeningPort.").optional() }).describe("AgentConfig stores the configuration information for the acushield agent.")).describe("Agent configurations to import.").optional(),
  "alertDefinitions": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "cooldown": z.string().describe("If set, how long until a subsequent alert notification can be raised."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("The description of the alert definition.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "message": z.string().describe("The message sent when notifying.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "severity": z.enum(["Critical","Warning","Info"]).describe("The severity of the alert event."), "sinks": z.array(z.string()).describe("The sinks used to notify.").optional(), "trigger": z.object({ "interval": z.string().describe("What time window to look for an alert event."), "occurrences": z.number().int().describe("The number of times an alert event is seen to cause a trigger.") }).describe("Represents the criteria to trigger an alert notification.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Represents a definition of an alert.")).describe("Alert definitions to import.").optional(),
  "apps": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "components": z.array(z.object({ "CAInjectionEnabled": z.boolean().describe("EXPERIMENTAL. If egress mode is inline, the Apex will act as a transparent\nproxy. The certificates that will be served by the proxy are generated by the\nApex itself which are issued by a dynamic TLS CA. If you enable this feature,\nthe matching app component instances will get the CA certificate dynamically\ninjected into the system trust store.").optional(), "description": z.string().describe("The description of the component.").optional(), "egressMode": z.enum(["Disabled","Mirror","Inline"]).describe("The egress datapath mode to use for network traffic going out to providers for\nthis application component. By default this is set to disabled. However, this\ncan be changed to mirror traffic where the Apex is only providing visibility\nwith no possibility of any access or content policies to take effect. Or this\ncan be set to inline in which case all traffic to providers will be redirected\nto the Apex which acts as a transparent proxy in this case. In this mode access\nand content policies will take effect."), "ingressProviderConfigs": z.array(z.object({ "dialTLS": z.enum(["Preserve","Auto","Enabled","Disabled"]).describe("This option controls the dialing behaviour of the apex to the origin server.\nShould be explicitly set to enabled if the origin expects TLS connections. And\nvice versa it should be set to disabled if the origin expects connections in\nplaintext. By default this setting is set to preserve which means that the apex\nis going to dial using whatever mode it terminated its own connection with: if\nthe apex received a TLS connection, it will dial TLS, if it received a plaintext\nconnection, then it will dial plaintext. The apex receiving behaviour can be\ncontrolled with the listenTLS option. As a last resort this setting can be set\nto auto which means that the apex is going to probe the origin server to\ndetermine if it needs to dial using TLS or not. Note that this is potentially\nsending a TLS Client Hello to a plaintext HTTP server which is not expecting\nthat. Therefore, this option is not recommended if it can be avoided. This\nsetting is ignored in mirror mode."), "listenPort": z.number().int().describe("The listening port. For appcomponent configurations this is the listening port\nthat traffic will be intercepted on or mirrored from."), "listenTLS": z.enum(["Auto","Enabled","Disabled"]).describe("This option controls the receiving behaviour of connection to the apex before\nthey are going to be proxied to the origin server. To control the dialing\nbehaviour of the apex towards the origin server use the dialTLS option. Should\nbe explicitly set to enabled if the listener expects TLS connections. And vice\nversa it should be set to disabled if the listener expects connections in\nplaintext. By default this setting is set to auto which means that the listener\nwill automatically determine if incoming connections are TLS or not: TLS\nconnections will be accepted, as well as  plain TCP connections will be\naccepted, both on the configured listenPort. This setting is ignored in mirror\nmode."), "listenTLSCert": z.string().describe("Optional PEM encoded X509v3 certificate to use for the listener for this\nprovider. This setting will be ignored if listenMode is not TLS or Auto or mode\nis not Inline. However, this setting is required if listenTLSKey is set.").optional(), "listenTLSKey": z.string().describe("Optional PEM encoded key pair to use for the listener for this provider. This\nsetting will be ignored if listenMode is not TLS or Auto or mode is not Inline.\nHowever, this setting is required if listenTLSCert is set.").optional(), "mode": z.enum(["Disabled","Mirror","Inline"]).describe("The ingress datapath mode to use for network traffic arriving for this ingress\nprovider for this application component. By default this is set to disabled.\nHowever, this can be changed to mirror traffic where the Apex is only providing\nvisibility with no possibility of any access or content policies to take effect.\nOr this can be set to inline in which case all traffic to providers will be\nredirected to the Apex which acts as a transparent proxy in this case. In this\nmode access and content policies will take effect.") }).describe("Represents the configuration if an apex is to act as an ingress for a provider.")).describe("The ingress provider configurations to serve for this application. If this app\ncomponent serves multiple ingress providers, you must define an ingress provider\nconfig for every single one of them. If you need access to the same ingress\nprovider over different port configurations (for example one serving https while\nanother port serves plain http), then you must define two ingress provider\nconfigurations and reuse the same provider name within the configuration.").optional(), "name": z.string().describe("The component name."), "providerName": z.string().describe("If given, this is the provider name that this component represents. This\n**MUST** match the name of a provider.").optional(), "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application component based on downstream\nlabels.").optional(), "token": z.string().describe("The token for the current component. Only populated by the backend when the\ncaller's\nclaim match the parents app.subject.").readonly().optional() }).describe("Represents a particular component of the application.")).describe("List of components for the application.").optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("The description of the App.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The name of the App."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "selector": z.array(z.array(z.string())).describe("A tag expression that identify an application based on downstream labels.").optional(), "subject": z.array(z.array(z.string())).describe("Only bearers with claims matching the subject will be allowed to access the\nappcomponent tokens.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("App allow to define a generic application.")).describe("Apps to import.").optional(),
  "contentPolicies": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the content policy.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "moderations": z.array(z.object({ "action": z.enum(["Warn","Block","None"]).describe("The actual action to take when triggered."), "alertDefinition": z.string().describe("The definition to use for alerting.").optional(), "link": z.string().describe("Sets an optional link to reference a document with more explanation on the\nmoderation.").optional(), "message": z.string().describe("The message if the moderation action is warn or block.").optional(), "predicates": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The predicate expression for the moderation to be triggered.").optional(), "redact": z.boolean().describe("If true, redacts the keywords, PIIs, and/or secrets defined in the predicates.").optional() }).describe("Represents a moderation to take in the content policy.")).describe("The list of moderations to take when the user has access to the provider.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("The policy that decides how to handle the request content.")).describe("Content policies to import.").optional(),
  "customDataSets": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "dataTypes": z.array(z.string()).describe("A list of all the data types which are associated to this data set.").optional(), "description": z.string().describe("Description of the custom data set.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Allows to create a custom data set.")).describe("Custom Data Sets to import.").optional(),
  "customDataTypes": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the custom data type.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "matches": z.array(z.string()).describe("A list of RE2 regular expressions used for data detection. Each expression can\ninclude zero or one capturing group. If no capturing group is present, detection\npositions will be determined based on the entire captured portion of the data.\nIf a single capturing group is included, the detection positions will correspond\nto the part defined by that group. However, if more than one capturing group is\nfound, the system will return a validation error. Additionally, extra\nvalidations are performed to ensure that the regular expressions are not overly\ncomplex, preventing any negative impact on detection engine performance.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Allows to create custom data detectors.")).describe("Custom Data Types to import.").optional(),
  "extractors": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.")).describe("Extractors to import.").optional(),
  "ignoredDomains": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "domain": z.string().describe("The domain to ignore."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Defines an ignored domain to be excluded from investigation.")).describe("Ignored domains to import.").optional(),
  "label": z.string().describe("Import label that will be used to identify all the resources imported by this\nresource."),
  "orgSettings": z.array(z.object({ "CA": z.string().describe("The Certificate authority to use to validate user certificates in PEM format.").optional(), "CACommonNames": z.array(z.string()).describe("The currently used Certificate authorities's Common Name.").readonly().optional(), "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "accessPolicy": z.string().describe("The rego policy that decides if the incoming request can access the\nprovider. If this empty, the dynamic policy transpiled from\nAccessPolicies API objects will be used by Apexes. If set however,\neverything computed by API objects are ignored and this becomes the final\npolicy.").optional(), "allowSupportAccess": z.boolean().describe("When enabled, an API authorization will be created in your\norganization to allow the Support Team to access your organization in\nread-only fashion to help you with any issue you might have.\nDisable it again to remove the permissions.").optional(), "askConsent": z.boolean().describe("Ask the user of web applications for consent before accessing a monitored\nprovider, using an html splash screen the first time they connect. If\nthis is not set, the users of the providers can still figure out the\nprovider is monitored. This is a courtesy and not a security feature.").optional(), "assignPolicy": z.string().describe("The rego policy that decides in which team an user should be in. The team\nwill be passed to the accessPolicy. If this empty, the dynamic policy\ntranspiled from AssignPolicies API objects will be used by Apexes. If set\nhowever, everything computed by API objects are ignored and this becomes\nthe final policy.").optional(), "contentPolicy": z.string().describe("The policy that decides how to handle the request content, once access\nhas been granted by accessPolicy and the content analysis was performed.\nIf this empty, the dynamic policy transpiled from AccessPolicies API\nobjects will be used by Apexes. If set however, everything computed by\nAPI objects are ignored and this becomes the final policy.").optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "disableURLDiscovery": z.boolean().describe("If true, it disables discovering of the visited URLs.").optional(), "fingerprints": z.array(z.string()).describe("the fingerprint of the cas in the chain.").readonly().optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "profile": z.string().describe("A few sentences about the organization. The description must be short\nand detailed. It will be used by the inference engine to decide if the content\nsent by the users are relevant to your company.").optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "providersWithoutConsent": z.array(z.string()).describe("The providers which do not request employees' consent.").optional(), "safeUsageURL": z.string().describe("A link to the AI Safe Usage Document for the organization. \nIf provided, it is presented in the consent banner to the employees.").optional(), "storeInputFiles": z.boolean().describe("If set, files uploaded by the users will be stored.").optional(), "storeOutputFiles": z.boolean().describe("If set, files sent to the users will be stored.").optional(), "subjectKeyIDs": z.array(z.string()).describe("the IDs of the subject keys of the cas in the chain.").readonly().optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(), "useRegoCodeOnly": z.boolean().describe("If true, it uses Rego code to define team assignment, provider access and\ncontent policies.").optional() }).describe("Manage the default settings for the entire organization.")).describe("OrgSettings to import.").optional(),
  "providerTeams": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the provider team.").optional(), "disabled": z.boolean().describe("Set the provider team to be disabled.").optional(), "excludedSubject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s) to not include in the team, even if\ntheir claims match the subject.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The name of the provider team."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Provider Teams can be created to create groups of people, identified by their\njwt claims\nthat can be used when writing Access Policies.")).describe("Provider teams to import.").optional(),
  "providerTokens": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("Name of the token. As token contents are hidden after creation, name allows a\nway to delete it."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "provider": z.string().describe("Name of the provider this token is used with."), "token": z.string().describe("token to authenticate with the provider."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("ProviderToken are upstream tokens for the 'Provider' configured on our system to\nbe used by the acuvity proxy.")).describe("ProviderTokens to import.").optional(),
  "providers": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "analyzeOutput": z.boolean().describe("If enabled, run the analysis pipelines on the provider output. No policy will be\napplied, but the response will be analyzed and classified.").optional(), "category": z.enum(["User","App"]).describe("The category of the provider."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("The description of the provider.").optional(), "errorTransformer": z.object({ "contentType": z.string().describe("The Content-Type to use when returning a formatted error."), "statusCode": z.number().int().describe("HTTP status code to return, instead of the classical one.").optional(), "template": z.string().describe("Go template to process and transform the error. The delimiters\nare << and >> to prevent collision with acuctl templating.\nThe template will be passed the following informations:\n\n- \`.Messages\`: a list of string containing the messages to return.\n- \`.Code\`: The original status code.\n- \`.TransformedCode\`: The transformed status code.\n- \`.Action\`: The policy decision action (ask or deny).\n\nAll the sprig text function are available.").optional() }).describe("Used to transform errors before sending them back to the client.").optional(), "experimental": z.boolean().describe("If true, consider this provider as experimental. It will require to use a custom\nPAC Config to make it usable from the proxy.pac.").optional(), "extractors": z.array(z.object({ "def": z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "ref": z.string().describe("References a preexisting extractor definition.").optional() }).describe("This object allows to either define an extractor for the provider, or to\nreference an existing extractor from database.")).describe("List of extractors for the provider.").optional(), "friendlyName": z.string().describe("Friendly Name of the provider."), "hosts": z.array(z.object({ "disableFingerprintingResistance": z.boolean().describe("Disable Apex routines to try to mimic client's tls handshake signature. You\nprobably want this on.").optional(), "name": z.string().describe("The hostname."), "prefix": z.string().describe("URL prefix for additional matching.").optional(), "proxyLabel": z.string().describe("The proxy label to use to exit to this host.").optional() }).describe("This is node definition.")).describe("Hosts supported by the providers.").optional(), "icon": z.string().describe("The icon of the provider, base64 encoded.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "injectors": z.array(z.object({ "delayXHRPatching": z.boolean().describe("Since JS world is the mess we all know, there are some cases when we must delay\nthe monkey patching of the XHR request.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "path": z.string().describe("A regular expression to match a URL path to log.") }).describe("TODO.")).describe("Defines injection point for javascript snippet.").optional(), "mappers": z.array(z.object({ "expiration": z.string().describe("Set how long the data should be cached."), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The name of the extractor. It will be used to identify which extractor was used\nduring an extraction.").optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional() }).describe("TODO.")).describe("List of user mappers.").optional(), "name": z.string().describe("Name of the provider."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "riskScore": z.number().describe("The latest risk score of the provider.").optional(), "status": z.enum(["Stable","Unstable"]).describe("The support status of the provider."), "tokenSwap": z.boolean().describe("If true, consider the incoming calls to use an acuvity token and swap them using\nregistered providertokens.").optional(), "trustedCA": z.string().describe("If set, additionally trust the Certificate Authorities from the PEM data. This\nis useful when working on a custom provider using a self signed CA chain.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(), "upstreamUnsecure": z.boolean().describe("If enabled, force the ustream scheme to be HTTP instead of https. Mostly use for\ndev purposes.").optional() }).describe("Providers are services that can be accessed using the APEX. These can\nboth be external services as well as internal services built/deployed within the\norganization.")).describe("Providers to import.").optional(),
  "proxyroundtrips": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "alerts": z.array(z.object({ "alertDefinition": z.string().describe("The name of the alert definition that triggered the alert event."), "alertDefinitionNamespace": z.string().describe("The namespace of the alert definition.").optional(), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal."), "provider": z.string().describe("The provider used that the alert came from.").optional(), "timestamp": z.string().datetime({ offset: true }).describe("When the alert event was raised.").readonly().optional() }).describe("Represents an alert event raised by a policy.")).describe("List of alerts that got raised during the policy resolution.").optional(), "annotations": z.record(z.any()).describe("Annotations attached to the log.").optional(), "client": z.string().describe("The client used to send the request.").optional(), "clientVersion": z.string().describe("The version of the client used to send the request.").optional(), "decision": z.enum(["Deny","Allow","Ask","Bypassed","ForbiddenUser","Skipped"]).describe("Tell what was the decision about the data.").optional(), "destination": z.object({ "app": z.string().describe("The name of the application that the domain belongs to.").optional(), "component": z.string().describe("The component of the application that the domain belongs to.").optional(), "host": z.string().describe("The host name of the request."), "ip": z.string().describe("The destination IP address of the request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to the application request destination.").optional() }).describe("Represents the destination that this request was made to.").optional(), "extractions": z.array(z.object({ "PIIs": z.record(z.any()).describe("The PIIs found during classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'PIIs' accross all analyzers.\n\nExample of PIIs detected: aba_routing_number, address, bank_account,\nbitcoin_wallet, credit_card, driver_license, email_address, itin_number,\nlocation, medical_license, money_amount, passport_number, person, phone_number,\nssn.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "annotations": z.record(z.any()).describe("Annotations attached to the extraction.").optional(), "categories": z.array(z.object({ "group": z.string().describe("The group of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups in the 'Modality' analyzer group.\n\nExample of group: application, archive, audio, code, document, executable, font,\nimage, text, unknown, video."), "type": z.string().describe("The type of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector names in the 'Modality' analyzer group.\n\nExample of type: 3dsm, 3gp, 3mf, ace, ada, ai, apk, applebplist, appleplist, ar,\narc, arj, asc, asf, asm, asp, au, autohotkey, autoit, avi, avif, awk, ax, batch,\nbazel, bcad, bib, bmp, bpg, brainfuck, brf, bzip, bzip3, c, cab, cat, cdf, chm,\nclojure, cmake, cobol, coff, coffeescript, com, cpl, cpp, crt, crx, cs, csproj,\ncss, csv, dart, deb, dex, dey, dicom, diff, django, dll, dm, dmg, dmigd,\ndmscript, doc, dockerfile, docx, dotx, dwg, dxf, dylib, elf, elixir, emf, eml,\nepub, erb, erlang, exe, flac, flv, fortran, fpx, gemfile, gemspec, gif,\ngitattributes, gitmodules, gleam, go, gradle, groovy, gzip, h, h5, handlebars,\nhaskell, hcl, heif, hlp, hpp, hta, htaccess, html, hwp, icns, ico, ics,\nignorefile, ini, internetshortcut, ipynb, iso, jar, java, javabytecode,\njavascript, jinja, jng, jnlp, jp2, jpeg, json, jsonl, jsx, julia, jxl, ko,\nkotlin, latex, lha, license, lisp, lnk, lock, lua, lz, lz4, m3u, m4, macho,\nmakefile, markdown, matlab, mht, midi, mkv, mp3, mp4, mpegts, mscompress, msi,\nmsix, mui, mum, npy, npz, objectivec, ocaml, ocx, odex, odin, odp, ods, odt,\nogg, one, onnx, otf, outlook, pascal, pcap, pdb, pdf, pebin, pem, perl, php,\npickle, png, po, postscript, powershell, ppt, pptx, prolog, proteindb, proto,\npsd, python, pythonbytecode, pytorch, qoi, qt, r, randomascii, rar, rdf, rlib,\nrll, rpm, rst, rtf, ruby, rust, scala, scheme, scr, scss, sevenzip, sgml, shell,\nsmali, snap, so, solidity, sql, sqlite, squashfs, srt, stlbinary, stltext, sum,\nsvg, swf, swift, symlinktext, sys, tar, tcl, textproto, tga, thumbsdb, tiff,\ntoml, torrent, tsv, tsx, ttf, twig, txt, txtascii, txtutf16, txtutf8,\ntypescript, vba, vbe, vcxproj, verilog, vhdl, visio, vtt, vue, wad, wasm, wav,\nwebm, webp, webtemplate, winregistry, wma, wmf, wmv, woff, woff2, xar, xcf, xls,\nxlsb, xlsx, xml, xpi, xz, yaml, yara, zig, zip, zlibstream, zst.") }).describe("Represents the modality of a some data.")).describe("The categories are remapping of the modalities in a more human friendly way.").optional(), "confidentiality": z.number().describe("The level of general confidentiality of the input.").optional(), "customDataSets": z.record(z.any()).describe("The custom data sets found during classification.").optional(), "customDataTypes": z.record(z.any()).describe("The custom data types found during classification.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "data": z.string().describe("The data extracted.").optional(), "detections": z.array(z.object({ "end": z.number().int().describe("The end position of the detection in the original data.").optional(), "key": z.string().describe("The key that is used in the name's place, If empty, a sequence of X's are used.").optional(), "name": z.string().describe("The name of the detection.").optional(), "redacted": z.boolean().describe("If true this detection has been redacted.").optional(), "redactedEnd": z.number().int().describe("The end position of the detection in the redacted data.").optional(), "redactedStart": z.number().int().describe("The start position of the detection in the redacted data.").optional(), "score": z.number().describe("The confidence score of the detection.").optional(), "start": z.number().int().describe("The start position of the detection in the original data.").optional(), "type": z.enum(["Keyword","PII","Secret","CDT"]).describe("The type of detection.").optional() }).describe("Represents a textual detection done by policy.")).describe("The textual detections found while applying policies.").optional(), "exploits": z.record(z.any()).describe("The various exploits attempts.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Exploits' accross all analyzers.\n\nExample of exploits detected: jailbreak, prompt_injection, malicious_url.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "hash": z.string().describe("The hash of the extraction.").optional(), "intent": z.record(z.any()).describe("The estimated intent embodied into the text.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Intent' accross all analyzers.\n\nExample of intent detected: explain, outline, summarize, write.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "internal": z.boolean().describe("If true, this extraction is for internal use only. This can be used by agentic\nsystems to mark an extraction as internal only as opposed to user facing.").optional(), "isFile": z.boolean().describe("If true, the data of the extraction is a file.").optional(), "isStored": z.boolean().describe("If true, indicates that the file has been stored.").optional(), "keywords": z.record(z.any()).describe("The keywords found during classification.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "label": z.string().describe("A means of distinguishing what was extracted, such as prompt, input file or\ncode.").optional(), "languages": z.record(z.any()).describe("The language of the classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Languages' accross all analyzers.\n\nExample of languages: chinese, english, french, german, gibberish, japanese,\nrussian, spanish.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "luaID": z.string().describe("An internal field for lua code. it is ignored by the API.").optional(), "malcontents": z.record(z.any()).describe("The various malcontents attempts.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Malcontents' accross all analyzers.\n\nExample of malcontents: biased, harmful, toxic.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "modalities": z.array(z.object({ "group": z.string().describe("The group of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups in the 'Modality' analyzer group.\n\nExample of group: application, archive, audio, code, document, executable, font,\nimage, text, unknown, video."), "type": z.string().describe("The type of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector names in the 'Modality' analyzer group.\n\nExample of type: 3dsm, 3gp, 3mf, ace, ada, ai, apk, applebplist, appleplist, ar,\narc, arj, asc, asf, asm, asp, au, autohotkey, autoit, avi, avif, awk, ax, batch,\nbazel, bcad, bib, bmp, bpg, brainfuck, brf, bzip, bzip3, c, cab, cat, cdf, chm,\nclojure, cmake, cobol, coff, coffeescript, com, cpl, cpp, crt, crx, cs, csproj,\ncss, csv, dart, deb, dex, dey, dicom, diff, django, dll, dm, dmg, dmigd,\ndmscript, doc, dockerfile, docx, dotx, dwg, dxf, dylib, elf, elixir, emf, eml,\nepub, erb, erlang, exe, flac, flv, fortran, fpx, gemfile, gemspec, gif,\ngitattributes, gitmodules, gleam, go, gradle, groovy, gzip, h, h5, handlebars,\nhaskell, hcl, heif, hlp, hpp, hta, htaccess, html, hwp, icns, ico, ics,\nignorefile, ini, internetshortcut, ipynb, iso, jar, java, javabytecode,\njavascript, jinja, jng, jnlp, jp2, jpeg, json, jsonl, jsx, julia, jxl, ko,\nkotlin, latex, lha, license, lisp, lnk, lock, lua, lz, lz4, m3u, m4, macho,\nmakefile, markdown, matlab, mht, midi, mkv, mp3, mp4, mpegts, mscompress, msi,\nmsix, mui, mum, npy, npz, objectivec, ocaml, ocx, odex, odin, odp, ods, odt,\nogg, one, onnx, otf, outlook, pascal, pcap, pdb, pdf, pebin, pem, perl, php,\npickle, png, po, postscript, powershell, ppt, pptx, prolog, proteindb, proto,\npsd, python, pythonbytecode, pytorch, qoi, qt, r, randomascii, rar, rdf, rlib,\nrll, rpm, rst, rtf, ruby, rust, scala, scheme, scr, scss, sevenzip, sgml, shell,\nsmali, snap, so, solidity, sql, sqlite, squashfs, srt, stlbinary, stltext, sum,\nsvg, swf, swift, symlinktext, sys, tar, tcl, textproto, tga, thumbsdb, tiff,\ntoml, torrent, tsv, tsx, ttf, twig, txt, txtascii, txtutf16, txtutf8,\ntypescript, vba, vbe, vcxproj, verilog, vhdl, visio, vtt, vue, wad, wasm, wav,\nwebm, webp, webtemplate, winregistry, wma, wmf, wmv, woff, woff2, xar, xcf, xls,\nxlsb, xlsx, xml, xpi, xz, yaml, yara, zig, zip, zlibstream, zst.") }).describe("Represents the modality of a some data.")).describe("The modalities of data detected in the data.").optional(), "relevance": z.number().describe("The level of general organization relevance of the input.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "secrets": z.record(z.any()).describe("The secrets found during classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Secrets' accross all analyzers.\n\nExample of secrets: adafruit, alibaba, anthropic, apideck, apify, atlassian,\naws_secret_key, buildkite, checkout, clickuppersonal, contentfulpersonalaccess,\ncredentials, database_url_with_credentials, databricks, denodeploy, dfuse,\ndigitalocean, discord_webhook, docker_hub, doppler, dropbox, endorlabs,\nfleetbase, flutterwave, frameio, freshdesk, fullstory, github, gitlab,\ngocardless, google_api, grafana, groq, huggingface, intra42, jwt, klaviyo,\nlaunchdarkly, linearapi, locationiq, mailchimp, mailgun, mapbox, maxmind,\nmicrosoft_teams_webhook, nightfall, notion, npm, openai, otp_auth_url, pagarme,\npaystack, planetscale, planetscaledb, portainer, posthog, postman, prefect,\nprivate_key, pubnub_publish, pubnub_subscribe, pulumi, ramp, razorpay, readme,\nrechargepayments, replicate, rubygems, salesforce, sendgrid, sendinblue,\nshopify, slack_access, slack_bot, slack_refresh, slack_user, slack_webhook,\nslack_workflow_webhook, sourcegraph, sourcegraphcody, squareapp, squareup,\nstripe, supabase, tailscale, tines_webhook, trufflehog, twilio, ubidots,\nvoiceflow, web_url_with_credentials, zapierwebhook.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "topics": z.record(z.any()).describe("The topic of the classification.\n\nThe current list can be obtained through the analyzers API, with the following\nconditions:\n  1. Includes all analyzers EXCEPT those in the 'Modality' group\n  2. Includes all analyzer detectors EXCEPT those in these groups:\n    - 'Secrets'\n    - 'Exploits'\n    - 'Intent'\n    - 'PIIs'\n    - 'Malcontents'\n\nExample of topics: category/enterprise, category/healthcare, category/medical,\ncategory/personal, contains/blank_image, contains/certificate_signing_request,\ncontains/database_url, contains/handwritten_text, contains/printed_text,\ncontains/public_key, contains/ssh_public_key, contains/web_url,\ndecoded/base32_data, decoded/base58_data, decoded/base64_data,\ndecoded/base64_url_data, decoded/base85_data, decoded/hexadecimal_data,\ndecoded/puny_code_data, decoded/quoted_printable_data,\ndecoded/url_encoding_data, department/compliance, department/cybersecurity,\ndepartment/finance, department/human_resources,\ndepartment/information_technology, department/legal, department/logistics,\ndepartment/marketing, department/performance_evaluation,\ndepartment/product_management, department/project_management, department/sales,\ndepartment/strategy, department/support, depict/check, depict/code,\ndepict/document, depict/unclassified, depict/whiteboard, domain/commercial,\ndomain/development, domain/financial, domain/general, domain/regulatory,\ndomain/workforce, extracted/csv_cell_content, extracted/document_text_content,\nextracted/handwritten_text_content, extracted/pdf_text_content,\nextracted/pptx_text_content, extracted/spreadsheet_text_content,\nextracted/typed_text_content, timeframe/current_year, timeframe/future,\ntimeframe/last_year, timeframe/next_year, timeframe/past,\ntranscribed/audio_text_content.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional() }).describe("Represents the extracted information to log.")).describe("The extractions to log.").optional(), "hash": z.string().describe("The hash of the input.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "latency": z.object({ "accessPolicy": z.number().int().describe("How much time it took to run the access policy in nanoseconds.").optional(), "analysis": z.number().int().describe("How much time it took to run content analysis in nanoseconds.").optional(), "assignPolicy": z.number().int().describe("How much time it took to run the assign policy in nanoseconds.").optional(), "contentPolicy": z.number().int().describe("How much time it took to run content policy in nanoseconds.").optional(), "extraction": z.number().int().describe("How much time it took to run input or output extraction in nanoseconds.").optional() }).describe("Holds information about latencies introduced by Apex.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "pipelineName": z.string().describe("The name of the particular pipeline that extracted the text.").optional(), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal."), "provider": z.string().describe("the provider to use.").optional(), "reasons": z.array(z.string()).describe("The various reasons returned by the policy engine.").optional(), "summary": z.object({ "PIIs": z.record(z.any()).describe("The PIIs found during classification.").optional(), "categories": z.record(z.any()).describe("The categories are remapping of the modalities in a more human friendly way.").optional(), "customDataSets": z.record(z.any()).describe("The data sets.").optional(), "customDataTypes": z.record(z.any()).describe("The data types.").optional(), "exploits": z.record(z.any()).describe("The various exploits attempts.").optional(), "intent": z.record(z.any()).describe("The estimated intent embodied into the text.").optional(), "keywords": z.record(z.any()).describe("The keywords found during classification.").optional(), "languages": z.record(z.any()).describe("The language of the classification.").optional(), "malcontents": z.record(z.any()).describe("The various malcontents attempts.").optional(), "modalities": z.record(z.any()).describe("The modalities of data detected in the data.").optional(), "secrets": z.record(z.any()).describe("The secrets found during classification.").optional(), "topics": z.record(z.any()).describe("The topic of the classification.").optional() }).describe("Represents the summary of the extractions.").optional(), "time": z.string().datetime({ offset: true }).describe("Set the time of the message request.").optional(), "trace": z.object({ "parentSpanID": z.string().describe("The parent span ID that is being referenced.").optional(), "spanEnd": z.string().datetime({ offset: true }).describe("When the span ended."), "spanID": z.string().describe("The span ID that is being referenced."), "spanName": z.string().describe("The name of the span that is being collected."), "spanStart": z.string().datetime({ offset: true }).describe("When the span started."), "traceID": z.string().describe("The Trace ID that is being referenced.") }).describe("Holds all references to a trace.").optional(), "type": z.enum(["Input","Output"]).describe("The type of text.").optional() }).describe("This is a Proxy roundtrip.")).describe("Proxy roundtrip to import. This will populate dummy data.").optional(),
  "sinks": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("The description of the sink.").optional(), "email": z.object({ "recipients": z.array(z.string()).describe("The list of email recipients the notification will be sent to.") }).describe("Additional configuration for sending an email.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "pagerDuty": z.object({ "token": z.string().describe("The token for PagerDuty events.") }).describe("Additional configuration for sending a PagerDuty event.").optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "slack": z.object({ "webhookURL": z.string().describe("The webhook URL to send the Slack messages to.") }).describe("Additional configuration for sending a Slack message.").optional(), "splunk": z.object({ "HECURL": z.string().describe("The HTTP event collector (HEC) URL to send the alert to."), "certificateAuthority": z.string().describe("If set, will use this as the CA for TLS communication.").optional(), "insecureSkipVerify": z.boolean().describe("If true, will attempt to skip TLS verification when communicating.").optional(), "token": z.string().describe("The token to communicate with the HTTP event collector.") }).describe("Additional configuration for sending an alert to Splunk.").optional(), "type": z.enum(["Email","PagerDuty","Slack","Splunk"]).describe("The type of sink."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Represents the sink used to send a notification.")).describe("Sinks to import.").optional(),
  "teams": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the team.").optional(), "disabled": z.boolean().describe("Set the team to be disabled.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The name of the team."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(), "weight": z.number().int().describe("Weight of the team. It is used if multiple teams match for a user. In that case\nthe team with the higher weight will be used.").optional() }).describe("Teams can be created to create groups of people, identified by their jwt claims\nthat can be used when writing authorizations.")).describe("Teams to import.").optional(),
  "visitedurls": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "domainHits": z.array(z.object({ "app": z.string().describe("The name of the application that the domain belongs to.").optional(), "component": z.string().describe("The component of the application that the domain belongs to.").optional(), "domain": z.string().describe("Domain that has been visited."), "hits": z.number().int().describe("The number of hits for this report."), "suspicious": z.boolean().describe("Suspicious is true if the service might be a Shadow AI.").optional() }).describe("This is a domain hit.")).describe("Domain that has been visited."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "origin": z.enum(["WebExtension","Proxy"]).describe("Origin indicates from where the url has been tracked."), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal.") }).describe("This is a visited URL.")).describe("Visited URLs to import.").optional(),
  "webExtensionConfigs": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "allowProxySettings": z.boolean().describe("Allows the web extension to set the proxy settings of the employee's browser.").optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the webextension configuration.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The name of the webextension configuration."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "refreshWebExtensionConfigInterval": z.number().int().describe("Defines the refresh interval in minutes for the configuration of the deployed\nweb extensions."), "reportVisitedURLsInterval": z.number().int().describe("Define the interval in minutes between two reports of the visited URLs."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("WebExtensionConfig stores the configuration information for the webextension.")).describe("Web Extension configurations to import.").optional()
}
```

### create_labelvalue

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "label": z.string().describe("The label to retrieve all available the values for."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("A set of log stream selector that selects the streams to match and return label\nvalues for.").optional(),
  "result": z.array(z.string()).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### get_all_landings

**Environment variables**



**Input schema**

```ts
{}
```

### create_metriclabelvalue

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "label": z.string().describe("The label to retrieve all available values for."),
  "limit": z.number().int().describe("The max number of results to return.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("A set of metric stream selectors that selects the streams to match and return\nlabel values for.").optional(),
  "result": z.array(z.string()).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### create_metricrange

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in Prometheus query format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional(),
  "step": z.string().describe("The query resolution step width as time.Duration.").optional()
}
```

### create_metric

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in Prometheus query format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "time": z.string().describe("The time for the query in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "timeRelative": z.string().describe("The relative time of the time window as time.Duration.").optional()
}
```

### create_metricserie

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "limit": z.number().int().describe("The max number of results to return.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in Prometheus format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### get_all_orgsettings

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_orgsettings

**Environment variables**



**Input schema**

```ts
{
  "CA": z.string().describe("The Certificate authority to use to validate user certificates in PEM format.").optional(),
  "CACommonNames": z.array(z.string()).describe("The currently used Certificate authorities's Common Name.").readonly().optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessPolicy": z.string().describe("The rego policy that decides if the incoming request can access the\nprovider. If this empty, the dynamic policy transpiled from\nAccessPolicies API objects will be used by Apexes. If set however,\neverything computed by API objects are ignored and this becomes the final\npolicy.").optional(),
  "allowSupportAccess": z.boolean().describe("When enabled, an API authorization will be created in your\norganization to allow the Support Team to access your organization in\nread-only fashion to help you with any issue you might have.\nDisable it again to remove the permissions.").optional(),
  "askConsent": z.boolean().describe("Ask the user of web applications for consent before accessing a monitored\nprovider, using an html splash screen the first time they connect. If\nthis is not set, the users of the providers can still figure out the\nprovider is monitored. This is a courtesy and not a security feature.").optional(),
  "assignPolicy": z.string().describe("The rego policy that decides in which team an user should be in. The team\nwill be passed to the accessPolicy. If this empty, the dynamic policy\ntranspiled from AssignPolicies API objects will be used by Apexes. If set\nhowever, everything computed by API objects are ignored and this becomes\nthe final policy.").optional(),
  "contentPolicy": z.string().describe("The policy that decides how to handle the request content, once access\nhas been granted by accessPolicy and the content analysis was performed.\nIf this empty, the dynamic policy transpiled from AccessPolicies API\nobjects will be used by Apexes. If set however, everything computed by\nAPI objects are ignored and this becomes the final policy.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "disableURLDiscovery": z.boolean().describe("If true, it disables discovering of the visited URLs.").optional(),
  "fingerprints": z.array(z.string()).describe("the fingerprint of the cas in the chain.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "profile": z.string().describe("A few sentences about the organization. The description must be short\nand detailed. It will be used by the inference engine to decide if the content\nsent by the users are relevant to your company.").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providersWithoutConsent": z.array(z.string()).describe("The providers which do not request employees' consent.").optional(),
  "safeUsageURL": z.string().describe("A link to the AI Safe Usage Document for the organization. \nIf provided, it is presented in the consent banner to the employees.").optional(),
  "storeInputFiles": z.boolean().describe("If set, files uploaded by the users will be stored.").optional(),
  "storeOutputFiles": z.boolean().describe("If set, files sent to the users will be stored.").optional(),
  "subjectKeyIDs": z.array(z.string()).describe("the IDs of the subject keys of the cas in the chain.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useRegoCodeOnly": z.boolean().describe("If true, it uses Rego code to define team assignment, provider access and\ncontent policies.").optional()
}
```

### delete_orgsettings

**Environment variables**



**Input schema**

```ts
{}
```

### get_orgsettings

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_orgsettings_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_orgsettings

**Environment variables**



**Input schema**

```ts
{
  "CA": z.string().describe("The Certificate authority to use to validate user certificates in PEM format.").optional(),
  "CACommonNames": z.array(z.string()).describe("The currently used Certificate authorities's Common Name.").readonly().optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessPolicy": z.string().describe("The rego policy that decides if the incoming request can access the\nprovider. If this empty, the dynamic policy transpiled from\nAccessPolicies API objects will be used by Apexes. If set however,\neverything computed by API objects are ignored and this becomes the final\npolicy.").optional(),
  "allowSupportAccess": z.boolean().describe("When enabled, an API authorization will be created in your\norganization to allow the Support Team to access your organization in\nread-only fashion to help you with any issue you might have.\nDisable it again to remove the permissions.").optional(),
  "askConsent": z.boolean().describe("Ask the user of web applications for consent before accessing a monitored\nprovider, using an html splash screen the first time they connect. If\nthis is not set, the users of the providers can still figure out the\nprovider is monitored. This is a courtesy and not a security feature.").optional(),
  "assignPolicy": z.string().describe("The rego policy that decides in which team an user should be in. The team\nwill be passed to the accessPolicy. If this empty, the dynamic policy\ntranspiled from AssignPolicies API objects will be used by Apexes. If set\nhowever, everything computed by API objects are ignored and this becomes\nthe final policy.").optional(),
  "contentPolicy": z.string().describe("The policy that decides how to handle the request content, once access\nhas been granted by accessPolicy and the content analysis was performed.\nIf this empty, the dynamic policy transpiled from AccessPolicies API\nobjects will be used by Apexes. If set however, everything computed by\nAPI objects are ignored and this becomes the final policy.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "disableURLDiscovery": z.boolean().describe("If true, it disables discovering of the visited URLs.").optional(),
  "fingerprints": z.array(z.string()).describe("the fingerprint of the cas in the chain.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "profile": z.string().describe("A few sentences about the organization. The description must be short\nand detailed. It will be used by the inference engine to decide if the content\nsent by the users are relevant to your company.").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "providersWithoutConsent": z.array(z.string()).describe("The providers which do not request employees' consent.").optional(),
  "safeUsageURL": z.string().describe("A link to the AI Safe Usage Document for the organization. \nIf provided, it is presented in the consent banner to the employees.").optional(),
  "storeInputFiles": z.boolean().describe("If set, files uploaded by the users will be stored.").optional(),
  "storeOutputFiles": z.boolean().describe("If set, files sent to the users will be stored.").optional(),
  "subjectKeyIDs": z.array(z.string()).describe("the IDs of the subject keys of the cas in the chain.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useRegoCodeOnly": z.boolean().describe("If true, it uses Rego code to define team assignment, provider access and\ncontent policies.").optional()
}
```

### get_all_orgstorages

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_orgstorage

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "key": z.string().describe("Key of the storage."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("Value of the storage.")
}
```

### delete_orgstorage

**Environment variables**



**Input schema**

```ts
{}
```

### get_orgstorage

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_orgstorages_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_orgstorage

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "key": z.string().describe("Key of the storage."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("Value of the storage.")
}
```

### get_all_pacconfigs

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_pacconfig

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("Name of the PAC config. A special name is 'default'. The default pac will be the\none that APEX returns if nothing else is configured."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "providers": z.array(z.string()).describe("The list of providers to activate for that PAC config."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_pacconfig

**Environment variables**



**Input schema**

```ts
{}
```

### get_pacconfig

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_pacconfigs_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_pacconfig

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("Name of the PAC config. A special name is 'default'. The default pac will be the\none that APEX returns if nothing else is configured."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "providers": z.array(z.string()).describe("The list of providers to activate for that PAC config."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_pagedataviews

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_pagedataview

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "name": z.string().describe("The name of the page data view."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pageID": z.string().describe("The name of the page."),
  "predicates": z.array(z.object({ "key": z.string().describe("The key of the page data view predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the page data view predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a page data view predicate.")).describe("The match criteria used to make a query.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_pagedataview

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_pagedataview

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_pagedataviews_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_pagedataview

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "name": z.string().describe("The name of the page data view."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pageID": z.string().describe("The name of the page."),
  "predicates": z.array(z.object({ "key": z.string().describe("The key of the page data view predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the page data view predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a page data view predicate.")).describe("The match criteria used to make a query.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_projects

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_project

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the project.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the project."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_project

**Environment variables**



**Input schema**

```ts
{}
```

### get_project

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_projects_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_project

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the project.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the project."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_providerdetails

**Environment variables**



**Input schema**

```ts
{
  "icon": z.boolean().describe("If set, return the icons.").optional(),
  "q": z.string().describe("This is an example.").optional()
}
```

### get_all_providers

**Environment variables**



**Input schema**

```ts
{
  "icon": z.boolean().describe("If set, return the icons.").optional(),
  "q": z.string().describe("This is an example.").optional()
}
```

### create_provider

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "analyzeOutput": z.boolean().describe("If enabled, run the analysis pipelines on the provider output. No policy will be\napplied, but the response will be analyzed and classified.").optional(),
  "category": z.enum(["User","App"]).describe("The category of the provider."),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the provider.").optional(),
  "errorTransformer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUsed to transform errors before sending them back to the client.").optional(),
  "experimental": z.boolean().describe("If true, consider this provider as experimental. It will require to use a custom\nPAC Config to make it usable from the proxy.pac.").optional(),
  "extractors": z.array(z.object({ "def": z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "ref": z.string().describe("References a preexisting extractor definition.").optional() }).describe("This object allows to either define an extractor for the provider, or to\nreference an existing extractor from database.")).describe("List of extractors for the provider.").optional(),
  "friendlyName": z.string().describe("Friendly Name of the provider."),
  "hosts": z.array(z.object({ "disableFingerprintingResistance": z.boolean().describe("Disable Apex routines to try to mimic client's tls handshake signature. You\nprobably want this on.").optional(), "name": z.string().describe("The hostname."), "prefix": z.string().describe("URL prefix for additional matching.").optional(), "proxyLabel": z.string().describe("The proxy label to use to exit to this host.").optional() }).describe("This is node definition.")).describe("Hosts supported by the providers.").optional(),
  "icon": z.string().describe("The icon of the provider, base64 encoded.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "injectors": z.array(z.object({ "delayXHRPatching": z.boolean().describe("Since JS world is the mess we all know, there are some cases when we must delay\nthe monkey patching of the XHR request.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "path": z.string().describe("A regular expression to match a URL path to log.") }).describe("TODO.")).describe("Defines injection point for javascript snippet.").optional(),
  "mappers": z.array(z.object({ "expiration": z.string().describe("Set how long the data should be cached."), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The name of the extractor. It will be used to identify which extractor was used\nduring an extraction.").optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional() }).describe("TODO.")).describe("List of user mappers.").optional(),
  "name": z.string().describe("Name of the provider."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "riskScore": z.number().describe("The latest risk score of the provider.").optional(),
  "status": z.enum(["Stable","Unstable"]).describe("The support status of the provider."),
  "tokenSwap": z.boolean().describe("If true, consider the incoming calls to use an acuvity token and swap them using\nregistered providertokens.").optional(),
  "trustedCA": z.string().describe("If set, additionally trust the Certificate Authorities from the PEM data. This\nis useful when working on a custom provider using a self signed CA chain.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "upstreamUnsecure": z.boolean().describe("If enabled, force the ustream scheme to be HTTP instead of https. Mostly use for\ndev purposes.").optional()
}
```

### delete_provider

**Environment variables**



**Input schema**

```ts
{}
```

### get_provider

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_providers_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_provider

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "analyzeOutput": z.boolean().describe("If enabled, run the analysis pipelines on the provider output. No policy will be\napplied, but the response will be analyzed and classified.").optional(),
  "category": z.enum(["User","App"]).describe("The category of the provider."),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the provider.").optional(),
  "errorTransformer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUsed to transform errors before sending them back to the client.").optional(),
  "experimental": z.boolean().describe("If true, consider this provider as experimental. It will require to use a custom\nPAC Config to make it usable from the proxy.pac.").optional(),
  "extractors": z.array(z.object({ "def": z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "ref": z.string().describe("References a preexisting extractor definition.").optional() }).describe("This object allows to either define an extractor for the provider, or to\nreference an existing extractor from database.")).describe("List of extractors for the provider.").optional(),
  "friendlyName": z.string().describe("Friendly Name of the provider."),
  "hosts": z.array(z.object({ "disableFingerprintingResistance": z.boolean().describe("Disable Apex routines to try to mimic client's tls handshake signature. You\nprobably want this on.").optional(), "name": z.string().describe("The hostname."), "prefix": z.string().describe("URL prefix for additional matching.").optional(), "proxyLabel": z.string().describe("The proxy label to use to exit to this host.").optional() }).describe("This is node definition.")).describe("Hosts supported by the providers.").optional(),
  "icon": z.string().describe("The icon of the provider, base64 encoded.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "injectors": z.array(z.object({ "delayXHRPatching": z.boolean().describe("Since JS world is the mess we all know, there are some cases when we must delay\nthe monkey patching of the XHR request.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "path": z.string().describe("A regular expression to match a URL path to log.") }).describe("TODO.")).describe("Defines injection point for javascript snippet.").optional(),
  "mappers": z.array(z.object({ "expiration": z.string().describe("Set how long the data should be cached."), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The name of the extractor. It will be used to identify which extractor was used\nduring an extraction.").optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional() }).describe("TODO.")).describe("List of user mappers.").optional(),
  "name": z.string().describe("Name of the provider."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "riskScore": z.number().describe("The latest risk score of the provider.").optional(),
  "status": z.enum(["Stable","Unstable"]).describe("The support status of the provider."),
  "tokenSwap": z.boolean().describe("If true, consider the incoming calls to use an acuvity token and swap them using\nregistered providertokens.").optional(),
  "trustedCA": z.string().describe("If set, additionally trust the Certificate Authorities from the PEM data. This\nis useful when working on a custom provider using a self signed CA chain.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "upstreamUnsecure": z.boolean().describe("If enabled, force the ustream scheme to be HTTP instead of https. Mostly use for\ndev purposes.").optional()
}
```

### get_all_providerteams

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_providerteam

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the provider team.").optional(),
  "disabled": z.boolean().describe("Set the provider team to be disabled.").optional(),
  "excludedSubject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s) to not include in the team, even if\ntheir claims match the subject.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the provider team."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_providerteam

**Environment variables**



**Input schema**

```ts
{}
```

### get_providerteam

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_providerteams_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_providerteam

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the provider team.").optional(),
  "disabled": z.boolean().describe("Set the provider team to be disabled.").optional(),
  "excludedSubject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s) to not include in the team, even if\ntheir claims match the subject.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the provider team."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_providertokens

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_providertoken

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("Name of the token. As token contents are hidden after creation, name allows a\nway to delete it."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "provider": z.string().describe("Name of the provider this token is used with."),
  "token": z.string().describe("token to authenticate with the provider."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_providertoken

**Environment variables**



**Input schema**

```ts
{}
```

### get_providertoken

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_providertokens_id_

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_proxyconfs

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_proxyconf

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "PACConfigs": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("Name of the PAC config. A special name is 'default'. The default pac will be the\none that APEX returns if nothing else is configured."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "providers": z.array(z.string()).describe("The list of providers to activate for that PAC config."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("PAC Config allows to create a custom PAC, with a selection of services enabled.")).describe("The PAC configurations of the organizations.").optional(),
  "accessPolicy": z.string().describe("The computed access policy.").optional(),
  "agentConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAgentConfig stores the configuration information for the acushield agent.").optional(),
  "assignPolicy": z.string().describe("The computed assign policy.").optional(),
  "contentPolicy": z.string().describe("The computed content policy.").optional(),
  "customDataSets": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "dataTypes": z.array(z.string()).describe("A list of all the data types which are associated to this data set.").optional(), "description": z.string().describe("Description of the custom data set.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Allows to create a custom data set.")).describe("List of custom data sets.").optional(),
  "customDataTypes": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("Description of the custom data type.").optional(), "friendlyName": z.string().describe("Friendly name of the object."), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "matches": z.array(z.string()).describe("A list of RE2 regular expressions used for data detection. Each expression can\ninclude zero or one capturing group. If no capturing group is present, detection\npositions will be determined based on the entire captured portion of the data.\nIf a single capturing group is included, the detection positions will correspond\nto the part defined by that group. However, if more than one capturing group is\nfound, the system will return a validation error. Additionally, extra\nvalidations are performed to ensure that the regular expressions are not overly\ncomplex, preventing any negative impact on detection engine performance.").optional(), "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("Allows to create custom data detectors.")).describe("List of custom data types.").optional(),
  "extractors": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.")).describe("The extractors of the organization.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "orgSettings": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nManage the default settings for the entire organization.").optional(),
  "providers": z.array(z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "analyzeOutput": z.boolean().describe("If enabled, run the analysis pipelines on the provider output. No policy will be\napplied, but the response will be analyzed and classified.").optional(), "category": z.enum(["User","App"]).describe("The category of the provider."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "description": z.string().describe("The description of the provider.").optional(), "errorTransformer": z.object({ "contentType": z.string().describe("The Content-Type to use when returning a formatted error."), "statusCode": z.number().int().describe("HTTP status code to return, instead of the classical one.").optional(), "template": z.string().describe("Go template to process and transform the error. The delimiters\nare << and >> to prevent collision with acuctl templating.\nThe template will be passed the following informations:\n\n- \`.Messages\`: a list of string containing the messages to return.\n- \`.Code\`: The original status code.\n- \`.TransformedCode\`: The transformed status code.\n- \`.Action\`: The policy decision action (ask or deny).\n\nAll the sprig text function are available.").optional() }).describe("Used to transform errors before sending them back to the client.").optional(), "experimental": z.boolean().describe("If true, consider this provider as experimental. It will require to use a custom\nPAC Config to make it usable from the proxy.pac.").optional(), "extractors": z.array(z.object({ "def": z.object({ "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(), "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line."), "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(), "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required."), "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned."), "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis."), "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup."), "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(), "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(), "description": z.string().describe("The description of the provider.").optional(), "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(), "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The internal reference name of the object."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(), "type": z.enum(["Input","Output"]).describe("The type of extractor."), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional() }).describe("An extractor allows to create a reusable extractor for providers.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "ref": z.string().describe("References a preexisting extractor definition.").optional() }).describe("This object allows to either define an extractor for the provider, or to\nreference an existing extractor from database.")).describe("List of extractors for the provider.").optional(), "friendlyName": z.string().describe("Friendly Name of the provider."), "hosts": z.array(z.object({ "disableFingerprintingResistance": z.boolean().describe("Disable Apex routines to try to mimic client's tls handshake signature. You\nprobably want this on.").optional(), "name": z.string().describe("The hostname."), "prefix": z.string().describe("URL prefix for additional matching.").optional(), "proxyLabel": z.string().describe("The proxy label to use to exit to this host.").optional() }).describe("This is node definition.")).describe("Hosts supported by the providers.").optional(), "icon": z.string().describe("The icon of the provider, base64 encoded.").optional(), "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(), "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(), "injectors": z.array(z.object({ "delayXHRPatching": z.boolean().describe("Since JS world is the mess we all know, there are some cases when we must delay\nthe monkey patching of the XHR request.").optional(), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "path": z.string().describe("A regular expression to match a URL path to log.") }).describe("TODO.")).describe("Defines injection point for javascript snippet.").optional(), "mappers": z.array(z.object({ "expiration": z.string().describe("Set how long the data should be cached."), "hosts": z.array(z.string()).describe("Optional hosts to match. This is useful in case the provider has multiple hosts\nto discriminate which logger to use.").optional(), "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."), "name": z.string().describe("The name of the extractor. It will be used to identify which extractor was used\nduring an extraction.").optional(), "path": z.string().describe("A regular expression to match a URL path to log."), "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional() }).describe("TODO.")).describe("List of user mappers.").optional(), "name": z.string().describe("Name of the provider."), "namespace": z.string().describe("The namespace of the object.").readonly().optional(), "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true."), "riskScore": z.number().describe("The latest risk score of the provider.").optional(), "status": z.enum(["Stable","Unstable"]).describe("The support status of the provider."), "tokenSwap": z.boolean().describe("If true, consider the incoming calls to use an acuvity token and swap them using\nregistered providertokens.").optional(), "trustedCA": z.string().describe("If set, additionally trust the Certificate Authorities from the PEM data. This\nis useful when working on a custom provider using a self signed CA chain.").optional(), "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(), "upstreamUnsecure": z.boolean().describe("If enabled, force the ustream scheme to be HTTP instead of https. Mostly use for\ndev purposes.").optional() }).describe("Providers are services that can be accessed using the APEX. These can\nboth be external services as well as internal services built/deployed within the\norganization.")).describe("The list of available provider.").optional(),
  "tokens": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nTokens pool to authenticate with the provider.").optional(),
  "webExtensionConfig": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nWebExtensionConfig stores the configuration information for the webextension.").optional()
}
```

### create_proxyroundtrip

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "alerts": z.array(z.object({ "alertDefinition": z.string().describe("The name of the alert definition that triggered the alert event."), "alertDefinitionNamespace": z.string().describe("The namespace of the alert definition.").optional(), "principal": z.object({ "IP": z.string().describe("The source IP address of the request.").optional(), "app": z.object({ "component": z.string().describe("The component of the application request.").optional(), "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(), "name": z.string().describe("The name of the application.").optional() }).describe("Describes the principal information of an application.").optional(), "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(), "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(), "team": z.string().describe("The team that was used to authorize the request.").optional(), "tokenName": z.string().describe("The name of the token, if any.").optional(), "type": z.enum(["User","App","External"]).describe("The type of principal."), "user": z.object({ "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional() }).describe("Describes the principal information of a user.").optional() }).describe("Describe the principal."), "provider": z.string().describe("The provider used that the alert came from.").optional(), "timestamp": z.string().datetime({ offset: true }).describe("When the alert event was raised.").readonly().optional() }).describe("Represents an alert event raised by a policy.")).describe("List of alerts that got raised during the policy resolution.").optional(),
  "annotations": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAnnotations attached to the log.").optional(),
  "client": z.string().describe("The client used to send the request.").optional(),
  "clientVersion": z.string().describe("The version of the client used to send the request.").optional(),
  "decision": z.enum(["Deny","Allow","Ask","Bypassed","ForbiddenUser","Skipped"]).describe("Tell what was the decision about the data.").optional(),
  "destination": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents the destination that this request was made to.").optional(),
  "extractions": z.array(z.object({ "PIIs": z.record(z.any()).describe("The PIIs found during classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'PIIs' accross all analyzers.\n\nExample of PIIs detected: aba_routing_number, address, bank_account,\nbitcoin_wallet, credit_card, driver_license, email_address, itin_number,\nlocation, medical_license, money_amount, passport_number, person, phone_number,\nssn.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "annotations": z.record(z.any()).describe("Annotations attached to the extraction.").optional(), "categories": z.array(z.object({ "group": z.string().describe("The group of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups in the 'Modality' analyzer group.\n\nExample of group: application, archive, audio, code, document, executable, font,\nimage, text, unknown, video."), "type": z.string().describe("The type of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector names in the 'Modality' analyzer group.\n\nExample of type: 3dsm, 3gp, 3mf, ace, ada, ai, apk, applebplist, appleplist, ar,\narc, arj, asc, asf, asm, asp, au, autohotkey, autoit, avi, avif, awk, ax, batch,\nbazel, bcad, bib, bmp, bpg, brainfuck, brf, bzip, bzip3, c, cab, cat, cdf, chm,\nclojure, cmake, cobol, coff, coffeescript, com, cpl, cpp, crt, crx, cs, csproj,\ncss, csv, dart, deb, dex, dey, dicom, diff, django, dll, dm, dmg, dmigd,\ndmscript, doc, dockerfile, docx, dotx, dwg, dxf, dylib, elf, elixir, emf, eml,\nepub, erb, erlang, exe, flac, flv, fortran, fpx, gemfile, gemspec, gif,\ngitattributes, gitmodules, gleam, go, gradle, groovy, gzip, h, h5, handlebars,\nhaskell, hcl, heif, hlp, hpp, hta, htaccess, html, hwp, icns, ico, ics,\nignorefile, ini, internetshortcut, ipynb, iso, jar, java, javabytecode,\njavascript, jinja, jng, jnlp, jp2, jpeg, json, jsonl, jsx, julia, jxl, ko,\nkotlin, latex, lha, license, lisp, lnk, lock, lua, lz, lz4, m3u, m4, macho,\nmakefile, markdown, matlab, mht, midi, mkv, mp3, mp4, mpegts, mscompress, msi,\nmsix, mui, mum, npy, npz, objectivec, ocaml, ocx, odex, odin, odp, ods, odt,\nogg, one, onnx, otf, outlook, pascal, pcap, pdb, pdf, pebin, pem, perl, php,\npickle, png, po, postscript, powershell, ppt, pptx, prolog, proteindb, proto,\npsd, python, pythonbytecode, pytorch, qoi, qt, r, randomascii, rar, rdf, rlib,\nrll, rpm, rst, rtf, ruby, rust, scala, scheme, scr, scss, sevenzip, sgml, shell,\nsmali, snap, so, solidity, sql, sqlite, squashfs, srt, stlbinary, stltext, sum,\nsvg, swf, swift, symlinktext, sys, tar, tcl, textproto, tga, thumbsdb, tiff,\ntoml, torrent, tsv, tsx, ttf, twig, txt, txtascii, txtutf16, txtutf8,\ntypescript, vba, vbe, vcxproj, verilog, vhdl, visio, vtt, vue, wad, wasm, wav,\nwebm, webp, webtemplate, winregistry, wma, wmf, wmv, woff, woff2, xar, xcf, xls,\nxlsb, xlsx, xml, xpi, xz, yaml, yara, zig, zip, zlibstream, zst.") }).describe("Represents the modality of a some data.")).describe("The categories are remapping of the modalities in a more human friendly way.").optional(), "confidentiality": z.number().describe("The level of general confidentiality of the input.").optional(), "customDataSets": z.record(z.any()).describe("The custom data sets found during classification.").optional(), "customDataTypes": z.record(z.any()).describe("The custom data types found during classification.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "data": z.string().describe("The data extracted.").optional(), "detections": z.array(z.object({ "end": z.number().int().describe("The end position of the detection in the original data.").optional(), "key": z.string().describe("The key that is used in the name's place, If empty, a sequence of X's are used.").optional(), "name": z.string().describe("The name of the detection.").optional(), "redacted": z.boolean().describe("If true this detection has been redacted.").optional(), "redactedEnd": z.number().int().describe("The end position of the detection in the redacted data.").optional(), "redactedStart": z.number().int().describe("The start position of the detection in the redacted data.").optional(), "score": z.number().describe("The confidence score of the detection.").optional(), "start": z.number().int().describe("The start position of the detection in the original data.").optional(), "type": z.enum(["Keyword","PII","Secret","CDT"]).describe("The type of detection.").optional() }).describe("Represents a textual detection done by policy.")).describe("The textual detections found while applying policies.").optional(), "exploits": z.record(z.any()).describe("The various exploits attempts.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Exploits' accross all analyzers.\n\nExample of exploits detected: jailbreak, prompt_injection, malicious_url.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "hash": z.string().describe("The hash of the extraction.").optional(), "intent": z.record(z.any()).describe("The estimated intent embodied into the text.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Intent' accross all analyzers.\n\nExample of intent detected: explain, outline, summarize, write.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "internal": z.boolean().describe("If true, this extraction is for internal use only. This can be used by agentic\nsystems to mark an extraction as internal only as opposed to user facing.").optional(), "isFile": z.boolean().describe("If true, the data of the extraction is a file.").optional(), "isStored": z.boolean().describe("If true, indicates that the file has been stored.").optional(), "keywords": z.record(z.any()).describe("The keywords found during classification.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "label": z.string().describe("A means of distinguishing what was extracted, such as prompt, input file or\ncode.").optional(), "languages": z.record(z.any()).describe("The language of the classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Languages' accross all analyzers.\n\nExample of languages: chinese, english, french, german, gibberish, japanese,\nrussian, spanish.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "luaID": z.string().describe("An internal field for lua code. it is ignored by the API.").optional(), "malcontents": z.record(z.any()).describe("The various malcontents attempts.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Malcontents' accross all analyzers.\n\nExample of malcontents: biased, harmful, toxic.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "modalities": z.array(z.object({ "group": z.string().describe("The group of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups in the 'Modality' analyzer group.\n\nExample of group: application, archive, audio, code, document, executable, font,\nimage, text, unknown, video."), "type": z.string().describe("The type of data.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector names in the 'Modality' analyzer group.\n\nExample of type: 3dsm, 3gp, 3mf, ace, ada, ai, apk, applebplist, appleplist, ar,\narc, arj, asc, asf, asm, asp, au, autohotkey, autoit, avi, avif, awk, ax, batch,\nbazel, bcad, bib, bmp, bpg, brainfuck, brf, bzip, bzip3, c, cab, cat, cdf, chm,\nclojure, cmake, cobol, coff, coffeescript, com, cpl, cpp, crt, crx, cs, csproj,\ncss, csv, dart, deb, dex, dey, dicom, diff, django, dll, dm, dmg, dmigd,\ndmscript, doc, dockerfile, docx, dotx, dwg, dxf, dylib, elf, elixir, emf, eml,\nepub, erb, erlang, exe, flac, flv, fortran, fpx, gemfile, gemspec, gif,\ngitattributes, gitmodules, gleam, go, gradle, groovy, gzip, h, h5, handlebars,\nhaskell, hcl, heif, hlp, hpp, hta, htaccess, html, hwp, icns, ico, ics,\nignorefile, ini, internetshortcut, ipynb, iso, jar, java, javabytecode,\njavascript, jinja, jng, jnlp, jp2, jpeg, json, jsonl, jsx, julia, jxl, ko,\nkotlin, latex, lha, license, lisp, lnk, lock, lua, lz, lz4, m3u, m4, macho,\nmakefile, markdown, matlab, mht, midi, mkv, mp3, mp4, mpegts, mscompress, msi,\nmsix, mui, mum, npy, npz, objectivec, ocaml, ocx, odex, odin, odp, ods, odt,\nogg, one, onnx, otf, outlook, pascal, pcap, pdb, pdf, pebin, pem, perl, php,\npickle, png, po, postscript, powershell, ppt, pptx, prolog, proteindb, proto,\npsd, python, pythonbytecode, pytorch, qoi, qt, r, randomascii, rar, rdf, rlib,\nrll, rpm, rst, rtf, ruby, rust, scala, scheme, scr, scss, sevenzip, sgml, shell,\nsmali, snap, so, solidity, sql, sqlite, squashfs, srt, stlbinary, stltext, sum,\nsvg, swf, swift, symlinktext, sys, tar, tcl, textproto, tga, thumbsdb, tiff,\ntoml, torrent, tsv, tsx, ttf, twig, txt, txtascii, txtutf16, txtutf8,\ntypescript, vba, vbe, vcxproj, verilog, vhdl, visio, vtt, vue, wad, wasm, wav,\nwebm, webp, webtemplate, winregistry, wma, wmf, wmv, woff, woff2, xar, xcf, xls,\nxlsb, xlsx, xml, xpi, xz, yaml, yara, zig, zip, zlibstream, zst.") }).describe("Represents the modality of a some data.")).describe("The modalities of data detected in the data.").optional(), "relevance": z.number().describe("The level of general organization relevance of the input.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "secrets": z.record(z.any()).describe("The secrets found during classification.\n\nThe current list can be obtained through the analyzers API by searching for\ndetector groups 'Secrets' accross all analyzers.\n\nExample of secrets: adafruit, alibaba, anthropic, apideck, apify, atlassian,\naws_secret_key, buildkite, checkout, clickuppersonal, contentfulpersonalaccess,\ncredentials, database_url_with_credentials, databricks, denodeploy, dfuse,\ndigitalocean, discord_webhook, docker_hub, doppler, dropbox, endorlabs,\nfleetbase, flutterwave, frameio, freshdesk, fullstory, github, gitlab,\ngocardless, google_api, grafana, groq, huggingface, intra42, jwt, klaviyo,\nlaunchdarkly, linearapi, locationiq, mailchimp, mailgun, mapbox, maxmind,\nmicrosoft_teams_webhook, nightfall, notion, npm, openai, otp_auth_url, pagarme,\npaystack, planetscale, planetscaledb, portainer, posthog, postman, prefect,\nprivate_key, pubnub_publish, pubnub_subscribe, pulumi, ramp, razorpay, readme,\nrechargepayments, replicate, rubygems, salesforce, sendgrid, sendinblue,\nshopify, slack_access, slack_bot, slack_refresh, slack_user, slack_webhook,\nslack_workflow_webhook, sourcegraph, sourcegraphcody, squareapp, squareup,\nstripe, supabase, tailscale, tines_webhook, trufflehog, twilio, ubidots,\nvoiceflow, web_url_with_credentials, zapierwebhook.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional(), "topics": z.record(z.any()).describe("The topic of the classification.\n\nThe current list can be obtained through the analyzers API, with the following\nconditions:\n  1. Includes all analyzers EXCEPT those in the 'Modality' group\n  2. Includes all analyzer detectors EXCEPT those in these groups:\n    - 'Secrets'\n    - 'Exploits'\n    - 'Intent'\n    - 'PIIs'\n    - 'Malcontents'\n\nExample of topics: category/enterprise, category/healthcare, category/medical,\ncategory/personal, contains/blank_image, contains/certificate_signing_request,\ncontains/database_url, contains/handwritten_text, contains/printed_text,\ncontains/public_key, contains/ssh_public_key, contains/web_url,\ndecoded/base32_data, decoded/base58_data, decoded/base64_data,\ndecoded/base64_url_data, decoded/base85_data, decoded/hexadecimal_data,\ndecoded/puny_code_data, decoded/quoted_printable_data,\ndecoded/url_encoding_data, department/compliance, department/cybersecurity,\ndepartment/finance, department/human_resources,\ndepartment/information_technology, department/legal, department/logistics,\ndepartment/marketing, department/performance_evaluation,\ndepartment/product_management, department/project_management, department/sales,\ndepartment/strategy, department/support, depict/check, depict/code,\ndepict/document, depict/unclassified, depict/whiteboard, domain/commercial,\ndomain/development, domain/financial, domain/general, domain/regulatory,\ndomain/workforce, extracted/csv_cell_content, extracted/document_text_content,\nextracted/handwritten_text_content, extracted/pdf_text_content,\nextracted/pptx_text_content, extracted/spreadsheet_text_content,\nextracted/typed_text_content, timeframe/current_year, timeframe/future,\ntimeframe/last_year, timeframe/next_year, timeframe/past,\ntranscribed/audio_text_content.\n\nIf a key is not present in the map that implies that entity was not detected. If\nan entity is detected then the value is a score. Here's how to interpret the\nscores:\n  - confidence: 'low', 0 < score <0.33\n  - confidence: 'medium', 0.33 <= score < 0.66\n  - confidence: 'high', 0.66 <= score <= 1.").optional() }).describe("Represents the extracted information to log.")).describe("The extractions to log.").optional(),
  "hash": z.string().describe("The hash of the input.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "latency": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHolds information about latencies introduced by Apex.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pipelineName": z.string().describe("The name of the particular pipeline that extracted the text.").optional(),
  "principal": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescribe the principal."),
  "provider": z.string().describe("the provider to use.").optional(),
  "reasons": z.array(z.string()).describe("The various reasons returned by the policy engine.").optional(),
  "summary": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRepresents the summary of the extractions.").optional(),
  "time": z.string().datetime({ offset: true }).describe("Set the time of the message request.").optional(),
  "trace": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHolds all references to a trace.").optional(),
  "type": z.enum(["Input","Output"]).describe("The type of text.").optional()
}
```

### get_all_queries

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_query

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "direction": z.enum(["Forward","Backward"]).describe("Determines the sort order of logs.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "time": z.string().describe("The time for the query in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "timeRelative": z.string().describe("The relative time of the time window as time.Duration.").optional()
}
```

### delete_query

**Environment variables**



**Input schema**

```ts
{}
```

### get_query

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_queries_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_query

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "direction": z.enum(["Forward","Backward"]).describe("Determines the sort order of logs.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "time": z.string().describe("The time for the query in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "timeRelative": z.string().describe("The relative time of the time window as time.Duration.").optional()
}
```

### get_all_queryranges

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_queryrange

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "direction": z.enum(["Forward","Backward"]).describe("Determines the sort order of logs.").optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "limit": z.number().int().describe("the number of results to return.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### delete_queryrange

**Environment variables**



**Input schema**

```ts
{}
```

### get_queryrange

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_queryranges_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_queryrange

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "direction": z.enum(["Forward","Backward"]).describe("Determines the sort order of logs.").optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "limit": z.number().int().describe("the number of results to return.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "resultType": z.string().describe("The type of the result.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### get_all_roles

**Environment variables**



**Input schema**

```ts
{}
```

### create_serie

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in LogQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### get_all_signups

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_signup

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "email": z.string().describe("The email requesting the signup. This email can be considered valid and\nverified, as for the signup request to succeed, it must have been verified by\nsigning up with one of the oauth2 source we support.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "type": z.enum(["Employees","Apps"]).describe("The type of signup requested."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "verifiedBy": z.string().describe("The source of verification.").readonly().optional()
}
```

### get_all_sinks

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_sink

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the sink.").optional(),
  "email": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending an email.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pagerDuty": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending a PagerDuty event.").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "slack": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending a Slack message.").optional(),
  "splunk": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending an alert to Splunk.").optional(),
  "type": z.enum(["Email","PagerDuty","Slack","Splunk"]).describe("The type of sink."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_sink

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_sink

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_sinks_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_sink

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("The description of the sink.").optional(),
  "email": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending an email.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pagerDuty": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending a PagerDuty event.").optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "slack": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending a Slack message.").optional(),
  "splunk": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdditional configuration for sending an alert to Splunk.").optional(),
  "type": z.enum(["Email","PagerDuty","Slack","Splunk"]).describe("The type of sink."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### get_all_teams

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_team

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the team.").optional(),
  "disabled": z.boolean().describe("Set the team to be disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the team."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "weight": z.number().int().describe("Weight of the team. It is used if multiple teams match for a user. In that case\nthe team with the higher weight will be used.").optional()
}
```

### delete_team

**Environment variables**



**Input schema**

```ts
{}
```

### get_team

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_teams_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_team

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the team.").optional(),
  "disabled": z.boolean().describe("Set the team to be disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the team."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "weight": z.number().int().describe("Weight of the team. It is used if multiple teams match for a user. In that case\nthe team with the higher weight will be used.").optional()
}
```

### create_trace

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "result": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe result of the request.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional(),
  "traceID": z.string().describe("The trace ID to query.")
}
```

### create_tracesearch

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "end": z.string().describe("The end of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "endRelative": z.string().describe("The relative end of the time window as time.Duration.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "query": z.string().describe("The query in TraceQL format."),
  "result": z.array(z.record(z.any())).describe("The result of the request.").optional(),
  "spansPerSpanSet": z.number().int().describe("The max number of spans to return per span set.").optional(),
  "start": z.string().describe("The start of the time window in any format supported by\nhttps://github.com/araddon/dateparse.").optional(),
  "startRelative": z.string().describe("The relative start of the time window as time.Duration.").optional()
}
```

### get_all_usertokens

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_usertoken

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "claims": z.array(z.string()).describe("The list of claims delivered in the token.").readonly().optional(),
  "clientType": z.enum(["None","WebExtension","Acushield","Acuctl"]).describe("the client type of the user token.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "email": z.string().describe("The email of the user who requested the token.").readonly().optional(),
  "expirationDate": z.string().datetime({ offset: true }).describe("Tells when the token will expire.").readonly().optional(),
  "machineID": z.string().describe("ID of the source machine that initiated the creation of the token.").optional(),
  "name": z.string().describe("Name of the token is specified while creating the token."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "sourceIP": z.string().describe("The source IP of the request that initiated the creation of the token.").readonly().optional(),
  "token": z.string().describe("The generated token. It won't be stored.").optional(),
  "tokenID": z.string().describe("The ID of the associated token.").readonly().optional(),
  "transient": z.boolean().describe("If true, the token will not be stored and will only be revocable if you keep\ntrack of the token ID yourself. Also, the validity will be capped and the token\nwon't be long lived.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "validity": z.string().describe("Configures the validity of the token.").optional()
}
```

### delete_usertoken

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### get_usertoken

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_usertokens_id_

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_visitedurls

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_visitedurl

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "domainHits": z.array(z.object({ "app": z.string().describe("The name of the application that the domain belongs to.").optional(), "component": z.string().describe("The component of the application that the domain belongs to.").optional(), "domain": z.string().describe("Domain that has been visited."), "hits": z.number().int().describe("The number of hits for this report."), "suspicious": z.boolean().describe("Suspicious is true if the service might be a Shadow AI.").optional() }).describe("This is a domain hit.")).describe("Domain that has been visited."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "origin": z.enum(["WebExtension","Proxy"]).describe("Origin indicates from where the url has been tracked."),
  "principal": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDescribe the principal.")
}
```

### get_visitedurl

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_visitedurls_id_

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_watchedorgs

**Environment variables**



**Input schema**

```ts
{}
```

### get_all_webextensionconfigs

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("This is an example.").optional()
}
```

### create_webextensionconfig

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowProxySettings": z.boolean().describe("Allows the web extension to set the proxy settings of the employee's browser.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the webextension configuration.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the webextension configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "refreshWebExtensionConfigInterval": z.number().int().describe("Defines the refresh interval in minutes for the configuration of the deployed\nweb extensions.").optional(),
  "reportVisitedURLsInterval": z.number().int().describe("Define the interval in minutes between two reports of the visited URLs.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```

### delete_webextensionconfig

**Environment variables**



**Input schema**

```ts
{}
```

### get_webextensionconfig

**Environment variables**



**Input schema**

```ts
{}
```

### parameters_webextensionconfigs_id_

**Environment variables**



**Input schema**

```ts
{}
```

### update_webextensionconfig

**Environment variables**



**Input schema**

```ts
{
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowProxySettings": z.boolean().describe("Allows the web extension to set the proxy settings of the employee's browser.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the webextension configuration.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the webextension configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "refreshWebExtensionConfigInterval": z.number().int().describe("Defines the refresh interval in minutes for the configuration of the deployed\nweb extensions.").optional(),
  "reportVisitedURLsInterval": z.number().int().describe("Define the interval in minutes between two reports of the visited URLs.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}
```
