# @open-mcp/meraki_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "meraki_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/meraki_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### getadministeredidentitiesme

### getdevice

### updatedevice

### getdeviceappliancedhcpsubnets

### getdeviceapplianceperformance

### getdeviceapplianceprefixesdelegated

### getdeviceapplianceprefixesdelegatedvlanassignments

### getdeviceapplianceuplinkssettings

### updatedeviceapplianceuplinkssettings

### createdeviceappliancevmxauthenticationtoken

### blinkdeviceleds

### getdevicecameraanalyticslive

### getdevicecameraanalyticsoverview

### getdevicecameraanalyticsrecent

### getdevicecameraanalyticszones

### getdevicecameraanalyticszonehistory

### getdevicecameracustomanalytics

### updatedevicecameracustomanalytics

### generatedevicecamerasnapshot

### getdevicecameraqualityandretention

### updatedevicecameraqualityandretention

### getdevicecamerasense

### updatedevicecamerasense

### getdevicecamerasenseobjectdetectionmodels

### getdevicecameravideosettings

### updatedevicecameravideosettings

### getdevicecameravideolink

### getdevicecamerawirelessprofiles

### updatedevicecamerawirelessprofiles

### getdevicecellularsims

### updatedevicecellularsims

### getdevicecellulargatewaylan

### updatedevicecellulargatewaylan

### getdevicecellulargatewayportforwardingrules

### updatedevicecellulargatewayportforwardingrules

### getdeviceclients

### createdevicelivetoolsping

### getdevicelivetoolsping

### createdevicelivetoolspingdevice

### getdevicelivetoolspingdevice

### getdevicelldpcdp

### getdevicelossandlatencyhistory

### getdevicemanagementinterface

### updatedevicemanagementinterface

### rebootdevice

### getdevicesensorrelationships

### updatedevicesensorrelationships

### getdeviceswitchports

### cycledeviceswitchports

### getdeviceswitchportsstatuses

### getdeviceswitchportsstatusespackets

### getdeviceswitchport

### updatedeviceswitchport

### getdeviceswitchroutinginterfaces

### createdeviceswitchroutinginterface

### deletedeviceswitchroutinginterface

### getdeviceswitchroutinginterface

### updatedeviceswitchroutinginterface

### getdeviceswitchroutinginterfacedhcp

### updatedeviceswitchroutinginterfacedhcp

### getdeviceswitchroutingstaticroutes

### createdeviceswitchroutingstaticroute

### deletedeviceswitchroutingstaticroute

### getdeviceswitchroutingstaticroute

### updatedeviceswitchroutingstaticroute

### getdeviceswitchwarmspare

### updatedeviceswitchwarmspare

### getdevicewirelessbluetoothsettings

### updatedevicewirelessbluetoothsettings

### getdevicewirelessconnectionstats

### getdevicewirelesslatencystats

### getdevicewirelessradiosettings

### updatedevicewirelessradiosettings

### getdevicewirelessstatus

### deletenetwork

### getnetwork

### updatenetwork

### getnetworkalertshistory

### getnetworkalertssettings

### updatenetworkalertssettings

### getnetworkapplianceclientsecurityevents

### getnetworkapplianceconnectivitymonitoringdestinations

### updatenetworkapplianceconnectivitymonitoringdestinations

### getnetworkappliancecontentfiltering

### updatenetworkappliancecontentfiltering

### getnetworkappliancecontentfilteringcategories

### getnetworkappliancefirewallcellularfirewallrules

### updatenetworkappliancefirewallcellularfirewallrules

### getnetworkappliancefirewallfirewalledservices

### getnetworkappliancefirewallfirewalledservice

### updatenetworkappliancefirewallfirewalledservice

### getnetworkappliancefirewallinboundcellularfirewallrules

### updatenetworkappliancefirewallinboundcellularfirewallrules

### getnetworkappliancefirewallinboundfirewallrules

### updatenetworkappliancefirewallinboundfirewallrules

### getnetworkappliancefirewalll3firewallrules

### updatenetworkappliancefirewalll3firewallrules

### getnetworkappliancefirewalll7firewallrules

### updatenetworkappliancefirewalll7firewallrules

### getnetworkappliancefirewalll7firewallrulesapplicationcategories

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/meraki_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/meraki_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
