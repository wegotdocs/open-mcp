# @open-mcp/_api

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/_api add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/_api add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/_api add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_api"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Tools

### gettask

### listglossarytermworkflowconfigs

### createconfiguration

### listglossarytermworkflowconfigs_1

### getglossarytermworkflowconfigbyname

### triggerscheck

### getconfigurationbyid

### deleteconfiguration

### patchconfiguration

### listallglossarytermworkflowconfigversion

### getspecificglossarytermworkflowconfigversion

### listglossarytermworkflowtriggers

### createglossarytermworkflowtrigger

### getglossarytermworkflowtriggerbyfqn

### getglossarytermworkflowtriggerbyid

### deleteglossarytermworkflowtrigger

### listallglossarytermworkflowtriggerversion

### getspecificglossarytermworkflowtriggerversion

### groupapprovaldelete

### groupapprovalupdate

### gethistory

### findall

### findbystatus

### gettaskdetails

### synclastworkflowinstancesandtasks

### findbyid

### findall_1

### deploy

### findbyid_1

### deletebyid

### downloadbyid

### getusertasklist

### getusertasksassignedtome

### getusertaskscreatedbyme

### claimusertask

### completeusertask

### cancel

### assignusertotask

### list_1

### createorupdate

### create_1

### getbyname_1

### get_4

### delete_1

### updatedescription

### listversions_1

### getversion_1

### createadcsettings

### getadcsettingsbyname

### patchadcsettings_1

### getadcsettingsbyid

### deleteadcsettings

### patchadcsettings

### list

### create

### getadctypebycreateentity

### getbyname

### getparents

### get

### delete

### patch

### addfollower

### deletefollower

### listversions

### getversion

### createadcusersettings

### getadcusersettingsbyid_1

### batcheditadcusersettings

### getselectedadcusersettingsbyid

### getselectedglobaladcusersettingsbyid

### getadcusersettingsbyid_4

### getadcusersettingsbyid_3

### getadcusersettingsbyid_2

### getadcusersettingsbyid_5

### getadcusersettingsbyid_7

### getadcusersettingsbyid_6

### getadcusersettingsbyid

### deleteadcusersettings

### patchadcusersettings

### repairglossaryterms

### listbots

### createorupdatebot

### createbot

### getbotbyfqn

### deletebotbyfqn

### restore

### getbotbyid

### deletebot

### patchbot

### listallbotversion

### listspecificbotversion

### listcharts

### createorupdatechart

### createchart

### getchartbyfqn

### deletechartbyfqn

### restore_1

### getchartbyid

### deletechart

### patchchart

### addfollowertochart

### deletefollowerfromchart

### listallchartversions

### getspecificchartversion

### listclassifications

### createorupdateclassification

### createclassification

### getclassificationbyname

### deleteclassificationbyname

### restoreclassification

### getclassificationbyid

### deleteclassification

### patchclassification

### listallclassificationversion

### getspecificclassificationversion

### listcontainers

### createorupdatecontainer

### createcontainer

### getcontainerbyfqn

### deletecontainerbyfqn

### restore_22

### getcontainerbyid

### deletecontainer

### patchcontainer

### addfollower_7

### deletefollower_8

### listallcontainerversion

### getspecificcontainerversion

### listadcentityadditiontypes

### createadcentityadditiontype

### getadcentityadditiontypebyfqn

### getadcentityadditiontypebyid

### deleteadcentityadditiontype

### patchadcentityadditiontype

### listalladcentityadditiontypeversion

### getspecificadcentityadditiontypeversion

### listdashboarddatamodels

### createorupdatedatamodel

### createdatamodel

### getdatamodelbyfqn

### deletedatamodelbyfqn

### restore_7

### getdatamodelbyid

### deletedatamodel

### patchdatamodel

### addfollowertodatamodel

### deletefollowerfromdatamodel

### listalldatamodelversions

### getspecificdatamodelversion

### listdashboards

### createorupdatedashboard

### createdashboard

### getdashboardbyfqn

### deletedashboardbyfqn

### restore_2

### getdashboardbyid

### deletedashboard

### patchdashboard

### addfollowertodashboard

### removefollowerfromdashboard

### listalldashboardversion

### getspecificdashboardversion

### listdataproducts

### createorupdatedataproduct

### createdataproduct

### getdataproductbyfqn

### deletedataproductbyfqn

### getdataproductbyid

### deletedataproduct

### patchdataproduct

### listalldataproductversion

### listspecificdataproductversion

### listtestcases

### createorupdatetest

### createtestcase

### getexecutionsummaryoftestcases

### getexecutionsummaryoftestcasesforallterms

### getexecutionsummaryoftestcasesbyterm

### getadctypebycreateentity_2

### addtestcasestologicaltestsuite

### deletelogicaltestcase

### gettestcasebyname

### deletetestcasebyname

### restore_8

### listtestcaseresults

### addtestcaseresult

### deletetestcaseresult

### patchtestcaseresult

### get_1

### deletetestcase

### patchtest

### listalltestcaseversion

### getspecifictestcaseversion

### listtestdefinitions

### createorupdatetestdefinition

### createtestdefinition

### gettestdefinitionbyname

### deletetestdefinitionbyname

### restore_9

### get_2

### deletetestdefinition

### patchtestdefinition

### listalltestdefinitionversion

### getspecifictestdefinitionversion

### listtestsuites

### createorupdatelogicaltestsuite

### createlogicaltestsuite

### createorupdateexecutabletestsuite

### createexecutabletestsuite

### deletetestsuitebyname

### deletetestsuite

### gettestsuitebyname

### deletelogicaltestsuite

### restore_10

### get_3

### deletelogicaltestsuite_1

### patchtestsuite

### listalltestsuiteversion

### getspecifictestsuiteversion

### listdbschemas

### createorupdatedbschema

### createdbschema

### getdbschemabyfqn

### deletedbschemabyfqn

### restore_4

### getdbschemabyid

### deletedbschema

### patchdbschema

### listalldbschemaversion

### getspecificdbschemaversion

### listdatabases

### createorupdatedatabase

### createdatabase

### getdatabasebyfqn

### deletedatabasebyfqn

### restore_3

### getdatabasebyid

### deletedatabase

### patchdatabase

### listalldatabaseversion

### getspecificdatabaseversion

### compareversions

### listdomains

### createorupdatedomain

### createdomain

### getdomainbyfqn

### deletedomainbyfqn

### getdomainbyid

### deletedomain

### patchdomain

### listalldomainversion

### listspecificdomainversion

### listchangeevents

### listeventsubscriptions

### createorupdateeventsubscription

### createeventsubscription

### listeventsubscriptionfunctions

### geteventsubscriptionbyname

### geteventsubscriptionstatus

### deleteeventsubscriptionbyname

### listeventsubscriptionresources

### triggerdatainsightjob

### validatecondition

### geteventsubscriptionstatusbyid

### geteventsubscriptionbyid

### deleteeventsubscription

### patcheventsubscription

### listalleventsubscriptionversion

### getspecificeventsubscriptionversion

### listadcexportingprocesses

### start

### getfile

### getadcexportingprocessbyid

### listglossaries

### createorupdateglossary

### createglossary

### getglobaldefaultglossary

### setglobaldefaultglossary

### getglossarybyfqn

### deleteglossarybyname

### exportglossary

### importglossary

### restore_11

### getglossarybyid

### deleteglossary

### patchglossary

### addfollower_2

### deletefollower_3

### listallglossaryversion

### getspecificglossaryversion

### listglossaryterm

### createorupdateglossaryterm

### createglossaryterm

### getadctypebycreateentity_3

### getglossarytermbyfqn

### getglossarytermbyid

### patchglossaryterm

### delete_2

### addfollower_3

### deletefollower_4

### listallglossarytermversion

### publish

### listallglossarytermversion_1

### getspecificglossarytermversion

### listallglossarytermversions

### create_2

### delete_3

### getentitieswitherrors

### getstatus

### openidcallback

### create_3

### getstarterfile

### geterrorsfileexportingprocess

### getimportresulerrors

### geterrorsfileexportingprocessstatus

### createerrorsfileexportingprocess

### finalizeimporting

### getfinalizedresults

### getstatus_1

### getvalidationresults

### addlineageedge

### getlineagebyfqn

### getlineage

### deletelineageedge

### listadcadditiondirectives

### createadcadditiondirective

### getadcadditiondirectivebyfqn

### getadcentitydirectivefieldsparameters

### getadcadditiondirectivebyid

### deleteadcadditiondirective

### listalladcadditiondirectiveversion

### getspecificadcadditiondirectiveversion

### listadcentityadditions

### createorupdateadcentityaddition

### createadcentityaddition

### getadcentityadditionbyfqn

### restore_27

### getadcentityadditionbyid

### deleteadcentityaddition

### patchadcentityaddition

### listalladcentityadditionversion

### getspecificadcentityadditionversion

### listadcentityattributes

### createadcentityattribute

### glossarytermadditionalconfigattributes

### getattributejsonschema

### getadcentityattributebyfqn

### listadcentityattributereferenceswithtargets

### listadcentityattributereferencewithtargets

### subjectareaadditionalconfigattributes

### listusedadcentityattributesbyglossaryids

### listadcentityattributeswithtargets_1

### listadcentityattributeswithtargets

### getadcentityattributebyid

### deleteadcentityattribute

### patchadcentityattribute

### listalladcentityattributeversion

### getspecificadcentityattributeversion

### getbyentitycontent

### getbyversions

### getcreaterequestschema

### getadcentityadditionbyid_2

### deleteadditionfortermtype

### configurebaseattributes

### getadcentityadditionbyid_1

### deleteadditionforglossary

### validateentityattributes

### createadcrelationship

### getreferenceattributecandidates

### getadcrelationshipbyname

### getadcrelationshipbyid

### deleteadcrelationship

### patchadcrelationship

### getspecificadcrelationshipversion

### listadctypes

### createadctype

### getadctypebyfqn

### getadctypebyid

### deleteadctype

### patchadctype

### listalladctypeversion

### getspecificadctypeversion

### listtypes

### createorupdate_1

### createtype

### gettypebyname

### deletetypebyname

### gettypebyid

### addproperty

### deletetype

### patchtype

### listalltypeversion

### getspecifictypeversion

### getallattributes

### patchattributeconfig

### listmetrics

### createorupdatemetric

### createmetric

### getmetricbyid

### listmlmodels

### createorupdatemlmodel

### createmlmodel

### getmlmodelbyfqn

### deletemlmodelbyfqn

### restore_12

### getmlmodelbyid

### deletemlmodel

### patchmlmodel

### addfollower_4

### deletefollower_5

### listallmlmodelversion

### getspecificmlmodelversion

### listobjectlocks

### checkifobjectlocked

### lockobject

### unlock

### lockobject_1

### unlock_1

### getversion_2

### getversionlist

### getresourcepermissions

### getpermissionsforpolicies

### getresourcetypepermission

### getresourcepermissionbyname

### getresourcepermission

### listpipelines

### createorupdatepipeline

### createpipeline

### getpipelinebyfqn

### deletepipelinebyfqn

### restore_13

### listpipelinestatuses

### addstatusdata

### deletepipelinestatus

### getpipelinewithid

### deletepipeline

### patchpipeline

### addfollower_5

### deletefollower_6

### listallpipelineversion

### getspecificpipelineversion

### listpolicies

### createorupdatepolicy

### createpolicy

### listpolicyfunctions

### getpolicybyfqn

### deletepolicybyfqn

### listpolicyresources

### restore_14

### validatecondition_1

### getpolicybyid

### deletepolicy

### patchpolicy

### listallpolicyversion

### getspecificpolicyversion

### listpolicies_1

### createpolicy_1

### checkandnarrowdownparams

### getpolicybyid_1

### deletepolicy_1

### patchpolicy_1

### listallpolicyversion_1

### getspecificpolicyversion_1

### getprocesslist

### getprocessbyid

### deleteprocessbyid

### cancelprocessbyid

### pauseprocessbyid

### resumeprocessbyid

### listqueries

### createorupdatequery

### createquery

### getqueryfqn

### deletequerybyfqn

### getquerybyid

### deletequery

### patchquery

### addfollower_6

### deletefollower_7

### addqueryusage

### removequeryusedin

### listallqueryversion

### getspecificqueryversion

### updatevote

### getallcounters

### listreports

### createorupdatereport

### getreportbyfqn

### getreportbyid

### listroles

### createorupdaterole

### createrole

### getrolebyfqn

### deleterolebyname

### restore_23

### getrolebyid

### deleterole

### patchrole

### listallroleversion

### getspecificroleversion

### globalsearch

### globalsearchfilters

### termstats

### userrelatedobjects

### getattributefilters

### getaggregatefields

### getsearchmappingschema

### searchentitieswithquery

### getallreindexbatchjobs

### runbatchreindexing

### getlatestreindexbatchjob

### stopajobwithid

### getstreamjobstatus

### getbatchreindexbatchjobwithid

### getsuggestedentities

### listdashboardsservice

### createorupdatedashboardservice

### createdashboardservice

### getdashboardservicebyfqn

### deletedashboardservicebyname

### restore_15

### getdashboardservicebyid

### deletedashboardservice

### patchdashboardservice

### addtestconnectionresult

### listalldashboardserviceversion

### getspecificdashboardserviceversion

### listdatabaseservices

### createorupdatedatabaseservice

### createdatabaseservice

### getdatabaseservicebyfqn

### deletedatabaseservicebyname

### restore_16

### getdatabaseservicebyid

### deletedatabaseservice

### patchdatabaseservice

### addtestconnectionresult_1

### listalldatabaseserviceversion

### getspecificdatabaseserviceversion

### listmessagingservice

### createorupdatemessagingservice

### createmessagingservice

### getmessagingservicebyfqn

### deletemessagingservicebyname

### restore_17

### getmessagingservicebyid

### deletemessagingservice

### patchmessagingservice

### addtestconnectionresult_2

### listallmessagingserviceversion

### getspecificmessagingserviceversion

### listmetadataservices

### createorupdatemetadataservice

### createmetadataservice

### getmetadataservicebyfqn

### deletemetadataservicebyname

### restore_18

### getmetadataservicebyid

### deletemetadataservice

### patchmetadataservice

### addtestconnectionresult_3

### listallmetadataserviceversion

### getspecificmetadataserviceversion

### listmlmodelservice

### createorupdatemlmodelservice

### createmlmodelservice

### getmlmodelservicebyfqn

### deletemlmodelservicebyname

### restore_19

### getmlmodelservicebyid

### deletemlmodelservice

### patchmlmodelservice

### addtestconnectionresult_4

### listallmlmodelserviceversion

### getspecificmlmodelservice

### listpipelineservice

### createorupdatepipelineservice

### createpipelineservice

### getpipelineservicebyfqn

### deletepipelineservicebyname

### restore_20

### getpipelineservicebyid

### deletepipelineservice

### patchpipelineservice

### addtestconnectionresult_5

### listallpipelineserviceversion

### getspecificpipelineservice

### liststorageservices

### createorupdatestorageservice

### createstorageservice

### deletestorageservicebyfqn

### getstorageservicebyfqn

### restore_21

### getstorageservicebyid

### deletestorageservice

### patchstorageservice

### addtestconnectionresult_6

### listallstorageserviceversion

### getspecificstorageserviceversion

### liststoredprocedures

### createorupdatestoredprocedure

### createstoredprocedure

### getstoredprocedurebyfqn

### deletedbschemabyfqn_1

### restore_5

### getstoredprocedurebyid

### deletestoredprocedure

### patchstoredprocedure

### addfollower_1

### deletefollower_1

### listallstoredproceduresversion

### getspecificstoredprocedureversion

### updatevoteforentity

### getcatalogversion

### listtables

### createorupdatetable

### createtable

### getadctypebycreateentity_1

### gettablebyfqn

### deletetable_1

### restore_6

### list_column_profiles

### list_system_profiles

### list_profiles

### get_the_latest_table_and_column_profile

### deletedataprofiler

### gettablebyid

### deletetable

### patchtable

### addcustommetric

### deletecustommetric

### adddatamodel

### addfollowertotable

### deletefollower_2

### addtablejoininfo

### getsampledata

### addsampledata

### deletesampledata

### adddataprofiler

### getdataprofilerconfig

### adddataprofilerconfig

### delete_dataprofilerconfig

### listalltableversion

### getspecificdatabaseversion_1

### listtags

### createorupdatetag

### createtag

### gettagbyfqn

### deletetagbyname

### restoretag

### targetlist

### gettagbyid

### deletetag

### patchtag

### listalltagversion

### getspecifictagversion

### listteams

### createorupdateteam

### createteam

### getcsvdocumentation

### getadctypebycreateentity_4

### listteamshierarchy

### getteambyfqn

### deleteteambyname

### exportteams

### importteams

### getcountofowned

### restore_24

### getteambyid

### deleteteam

### patchteam

### listallteamversion

### getspecificroleversion_1

### listtopics

### createorupdatetopic

### createtopic

### gettopicbyfqn

### deletetopicbyfqn

### restore_26

### get_5

### deletetopic

### patchtopic

### addfollower_8

### deletefollower_9

### getsampledata_1

### addsampledata_1

### listalltopicversion

### getspecifictopicversion

### getentityusagebyfqn

### reportentityusagewithfqn_1

### reportentityusagewithfqn

### getentityusagebyid

### reportentityusagewithid_1

### reportentityusagewithid

### listusers

### createorupdateuser

### createuser

### getauthenticationmechanismbotuser

### changeuserpassword

### checkemailinuse

### checkemailisverified

### getcsvdocumentation_1

### exportusers

### getadctypebycreateentity_5

### generatepasswordresetlink

### generaterandompwd

### generatejwttokenforbotuser

### importteams_1

### getcurrentloggedinuser

### getcurrentloggedinusergroupteams

### loginuserwithpwd

### logoutuser

### getuserbyfqn

### deleteuserbyname

### resetuserpassword

### refreshtoken

### confirmuseremail

### resendregistrationtoken

### restore_25

### revokejwttokenforbotuser

### getpersonalaccesstoken

### createpersonalaccesstoken

### revokepersonalaccesstoken

### registeruser

### getjwttokenforbotuser

### getuserbyid

### deleteuser

### patchuser

### listalluserversion

### getspecificuserversion

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/_api
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/_api`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
