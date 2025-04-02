# @open-mcp/jira

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/jira add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/jira add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/jira add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/jira add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "@open-mcp/jira"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`
- `OAUTH2_TOKEN`

## Tools

### getbanner

### setbanner

### getcustomfieldsconfigurations

### updatemultiplecustomfieldvalues

### getcustomfieldconfiguration

### updatecustomfieldconfiguration

### updatecustomfieldvalue

### getapplicationproperty

### getadvancedsettings

### setapplicationproperty

### getallapplicationroles

### getapplicationrole

### getattachmentcontent

### getattachmentmeta

### getattachmentthumbnail

### removeattachment

### getattachment

### expandattachmentforhumans

### expandattachmentformachines

### getauditrecords

### getallsystemavatars

### submitbulkdelete

### getbulkeditablefields

### submitbulkedit

### submitbulkmove

### getavailabletransitions

### submitbulktransition

### submitbulkunwatch

### submitbulkwatch

### getbulkoperationprogress

### getbulkchangelogs

### getalluserdataclassificationlevels

### getcommentsbyids

### getcommentpropertykeys

### deletecommentproperty

### getcommentproperty

### setcommentproperty

### findcomponentsforprojects

### createcomponent

### deletecomponent

### getcomponent

### updatecomponent

### getcomponentrelatedissues

### getconfiguration

### getselectedtimetrackingimplementation

### selecttimetrackingimplementation

### getavailabletimetrackingimplementations

### getsharedtimetrackingconfiguration

### setsharedtimetrackingconfiguration

### getcustomfieldoption

### getalldashboards

### createdashboard

### bulkeditdashboards

### getallavailabledashboardgadgets

### getdashboardspaginated

### getallgadgets

### addgadget

### removegadget

### updategadget

### getdashboarditempropertykeys

### deletedashboarditemproperty

### getdashboarditemproperty

### setdashboarditemproperty

### deletedashboard

### getdashboard

### updatedashboard

### copydashboard

### getpolicy

### getpolicies

### getevents

### analyseexpression

### evaluatejiraexpression

### evaluatejsisjiraexpression

### getfields

### createcustomfield

### removeassociations

### createassociations

### getfieldspaginated

### gettrashedfieldspaginated

### updatecustomfield

### getcontextsforfield

### createcustomfieldcontext

### getdefaultvalues

### setdefaultvalues

### getissuetypemappingsforcontexts

### getcustomfieldcontextsforprojectsandissuetypes

### getprojectcontextmapping

### deletecustomfieldcontext

### updatecustomfieldcontext

### addissuetypestocontext

### removeissuetypesfromcontext

### getoptionsforcontext

### createcustomfieldoption

### updatecustomfieldoption

### reordercustomfieldoptions

### deletecustomfieldoption

### replacecustomfieldoption

### assignprojectstocustomfieldcontext

### removecustomfieldcontextfromprojects

### getcontextsforfielddeprecated

### getscreensforfield

### getallissuefieldoptions

### createissuefieldoption

### getselectableissuefieldoptions

### getvisibleissuefieldoptions

### deleteissuefieldoption

### getissuefieldoption

### updateissuefieldoption

### replaceissuefieldoption

### deletecustomfield

### restorecustomfield

### trashcustomfield

### getallfieldconfigurations

### createfieldconfiguration

### deletefieldconfiguration

### updatefieldconfiguration

### getfieldconfigurationitems

### updatefieldconfigurationitems

### getallfieldconfigurationschemes

### createfieldconfigurationscheme

### getfieldconfigurationschememappings

### getfieldconfigurationschemeprojectmapping

### assignfieldconfigurationschemetoproject

### deletefieldconfigurationscheme

### updatefieldconfigurationscheme

### setfieldconfigurationschememapping

### removeissuetypesfromglobalfieldconfigurationscheme

### createfilter

### getdefaultsharescope

### setdefaultsharescope

### getfavouritefilters

### getmyfilters

### getfilterspaginated

### deletefilter

### getfilter

### updatefilter

### resetcolumns

### getcolumns

### setcolumns

### deletefavouriteforfilter

### setfavouriteforfilter

### changefilterowner

### getsharepermissions

### addsharepermission

### deletesharepermission

### getsharepermission

### removegroup

### getgroup

### creategroup

### bulkgetgroups

### getusersfromgroup

### removeuserfromgroup

### addusertogroup

### findgroups

### findusersandgroups

### getlicense

### createissue

### archiveissuesasync

### archiveissues

### createissues

### bulkfetchissues

### getcreateissuemeta

### getcreateissuemetaissuetypes

### getcreateissuemetaissuetypeid

### getissuelimitreport

### getissuepickerresource

### bulksetissuespropertieslist

### bulksetissuepropertiesbyissue

### bulkdeleteissueproperty

### bulksetissueproperty

### unarchiveissues

### getiswatchingissuebulk

### deleteissue

### getissue

### editissue

### assignissue

### addattachment

### getchangelogs

### getchangelogsbyids

### getcomments

### addcomment

### deletecomment

### getcomment

### updatecomment

### geteditissuemeta

### notify

### getissuepropertykeys

### deleteissueproperty

### getissueproperty

### setissueproperty

### deleteremoteissuelinkbyglobalid

### getremoteissuelinks

### createorupdateremoteissuelink

### deleteremoteissuelinkbyid

### getremoteissuelinkbyid

### updateremoteissuelink

### gettransitions

### dotransition

### removevote

### getvotes

### addvote

### removewatcher

### getissuewatchers

### addwatcher

### bulkdeleteworklogs

### getissueworklog

### addworklog

### bulkmoveworklogs

### deleteworklog

### getworklog

### updateworklog

### getworklogpropertykeys

### deleteworklogproperty

### getworklogproperty

### setworklogproperty

### linkissues

### deleteissuelink

### getissuelink

### getissuelinktypes

### createissuelinktype

### deleteissuelinktype

### getissuelinktype

### updateissuelinktype

### exportarchivedissues

### getissuesecurityschemes

### createissuesecurityscheme

### getsecuritylevels

### setdefaultlevels

### getsecuritylevelmembers

### searchprojectsusingsecurityschemes

### associateschemestoprojects

### searchsecurityschemes

### getissuesecurityscheme

### updateissuesecurityscheme

### getissuesecuritylevelmembers

### deletesecurityscheme

### addsecuritylevel

### removelevel

### updatesecuritylevel

### addsecuritylevelmembers

### removememberfromsecuritylevel

### getissuealltypes

### createissuetype

### getissuetypesforproject

### deleteissuetype

### getissuetype

### updateissuetype

### getalternativeissuetypes

### createissuetypeavatar

### getissuetypepropertykeys

### deleteissuetypeproperty

### getissuetypeproperty

### setissuetypeproperty

### getallissuetypeschemes

### createissuetypescheme

### getissuetypeschemesmapping

### getissuetypeschemeforprojects

### assignissuetypeschemetoproject

### deleteissuetypescheme

### updateissuetypescheme

### addissuetypestoissuetypescheme

### reorderissuetypesinissuetypescheme

### removeissuetypefromissuetypescheme

### getissuetypescreenschemes

### createissuetypescreenscheme

### getissuetypescreenschememappings

### getissuetypescreenschemeprojectassociations

### assignissuetypescreenschemetoproject

### deleteissuetypescreenscheme

### updateissuetypescreenscheme

### appendmappingsforissuetypescreenscheme

### updatedefaultscreenscheme

### removemappingsfromissuetypescreenscheme

### getprojectsforissuetypescreenscheme

### getautocomplete

### getautocompletepost

### getfieldautocompleteforquerystring

### getprecomputations

### updateprecomputations

### getprecomputationsbyid

### matchissues

### parsejqlqueries

### migratequeries

### sanitisejqlqueries

### getalllabels

### getapproximatelicensecount

### getapproximateapplicationlicensecount

### getmypermissions

### removepreference

### getpreference

### setpreference

### deletelocale

### getlocale

### setlocale

### getcurrentuser

### getnotificationschemes

### createnotificationscheme

### getnotificationschemetoprojectmappings

### getnotificationscheme

### updatenotificationscheme

### addnotifications

### deletenotificationscheme

### removenotificationfromnotificationscheme

### getallpermissions

### getbulkpermissions

### getpermittedprojects

### getallpermissionschemes

### createpermissionscheme

### deletepermissionscheme

### getpermissionscheme

### updatepermissionscheme

### getpermissionschemegrants

### createpermissiongrant

### deletepermissionschemeentity

### getpermissionschemegrant

### getplans

### createplan

### getplan

### updateplan

### archiveplan

### duplicateplan

### getteams

### addatlassianteam

### removeatlassianteam

### getatlassianteam

### updateatlassianteam

### createplanonlyteam

### deleteplanonlyteam

### getplanonlyteam

### updateplanonlyteam

### trashplan

### getpriorities

### createpriority

### setdefaultpriority

### movepriorities

### searchpriorities

### deletepriority

### getpriority

### updatepriority

### getpriorityschemes

### createpriorityscheme

### suggestedprioritiesformappings

### getavailableprioritiesbypriorityscheme

### deletepriorityscheme

### updatepriorityscheme

### getprioritiesbypriorityscheme

### getprojectsbypriorityscheme

### getallprojects

### createproject

### getrecent

### searchprojects

### getallprojecttypes

### getallaccessibleprojecttypes

### getprojecttypebykey

### getaccessibleprojecttypebykey

### deleteproject

### getproject

### updateproject

### archiveproject

### updateprojectavatar

### deleteprojectavatar

### createprojectavatar

### getallprojectavatars

### removedefaultprojectclassification

### getdefaultprojectclassification

### updatedefaultprojectclassification

### getprojectcomponentspaginated

### getprojectcomponents

### deleteprojectasynchronously

### getfeaturesforproject

### togglefeatureforproject

### getprojectpropertykeys

### deleteprojectproperty

### getprojectproperty

### setprojectproperty

### restore

### getprojectroles

### deleteactor

### getprojectrole

### addactorusers

### setactors

### getprojectroledetails

### getallstatuses

### getprojectversionspaginated

### getprojectversions

### getprojectemail

### updateprojectemail

### gethierarchy

### getprojectissuesecurityscheme

### getnotificationschemeforproject

### getassignedpermissionscheme

### assignpermissionscheme

### getsecuritylevelsforproject

### getallprojectcategories

### createprojectcategory

### removeprojectcategory

### getprojectcategorybyid

### updateprojectcategory

### validateprojectkey

### getvalidprojectkey

### getvalidprojectname

### getresolutions

### createresolution

### setdefaultresolution

### moveresolutions

### searchresolutions

### deleteresolution

### getresolution

### updateresolution

### getallprojectroles

### createprojectrole

### deleteprojectrole

### getprojectrolebyid

### partialupdateprojectrole

### fullyupdateprojectrole

### deleteprojectroleactorsfromrole

### getprojectroleactorsforrole

### addprojectroleactorstorole

### getscreens

### createscreen

### addfieldtodefaultscreen

### getbulkscreentabs

### deletescreen

### updatescreen

### getavailablescreenfields

### getallscreentabs

### addscreentab

### deletescreentab

### renamescreentab

### getallscreentabfields

### addscreentabfield

### removescreentabfield

### movescreentabfield

### movescreentab

### getscreenschemes

### createscreenscheme

### deletescreenscheme

### updatescreenscheme

### searchforissuesusingjql

### searchforissuesusingjqlpost

### countissues

### searchforissuesids

### searchandreconsileissuesusingjql

### searchandreconsileissuesusingjqlpost

### getissuesecuritylevel

### getserverinfo

### getissuenavigatordefaultcolumns

### setissuenavigatordefaultcolumns

### getstatuses

### getstatus

### getstatuscategories

### getstatuscategory

### deletestatusesbyid

### getstatusesbyid

### createstatuses

### updatestatuses

### search

### getprojectissuetypeusagesforstatus

### getprojectusagesforstatus

### getworkflowusagesforstatus

### gettask

### canceltask

### getuimodifications

### createuimodification

### deleteuimodification

### updateuimodification

### getavatars

### storeavatar

### deleteavatar

### getavatarimagebytype

### getavatarimagebyid

### getavatarimagebyowner

### removeuser

### getuser

### createuser

### findbulkassignableusers

### findassignableusers

### bulkgetusers

### bulkgetusersmigration

### resetusercolumns

### getuserdefaultcolumns

### setusercolumns

### getuseremail

### getuseremailbulk

### getusergroups

### getusernavproperty

### setusernavproperty

### finduserswithallpermissions

### findusersforpicker

### getuserpropertykeys

### deleteuserproperty

### getuserproperty

### setuserproperty

### findusers

### findusersbyquery

### finduserkeysbyquery

### finduserswithbrowsepermission

### getallusersdefault

### getallusers

### createversion

### deleteversion

### getversion

### updateversion

### mergeversions

### moveversion

### getversionrelatedissues

### getrelatedwork

### createrelatedwork

### updaterelatedwork

### deleteandreplaceversion

### getversionunresolvedissues

### deleterelatedwork

### deletewebhookbyid

### getdynamicwebhooksforapp

### registerdynamicwebhooks

### getfailedwebhooks

### refreshwebhooks

### getallworkflows

### createworkflow

### getworkflowtransitionruleconfigurations

### updateworkflowtransitionruleconfigurations

### deleteworkflowtransitionruleconfigurations

### getworkflowspaginated

### deleteworkflowtransitionproperty

### getworkflowtransitionproperties

### createworkflowtransitionproperty

### updateworkflowtransitionproperty

### deleteinactiveworkflow

### getworkflowprojectissuetypeusages

### getprojectusagesforworkflow

### getworkflowschemeusagesforworkflow

### readworkflows

### workflowcapabilities

### createworkflows

### validatecreateworkflows

### searchworkflows

### updateworkflows

### validateupdateworkflows

### getallworkflowschemes

### createworkflowscheme

### getworkflowschemeprojectassociations

### assignschemetoproject

### readworkflowschemes

### updateschemes

### updateworkflowschememappings

### deleteworkflowscheme

### getworkflowscheme

### updateworkflowscheme

### createworkflowschemedraftfromparent

### deletedefaultworkflow

### getdefaultworkflow

### updatedefaultworkflow

### deleteworkflowschemedraft

### getworkflowschemedraft

### updateworkflowschemedraft

### deletedraftdefaultworkflow

### getdraftdefaultworkflow

### updatedraftdefaultworkflow

### deleteworkflowschemedraftissuetype

### getworkflowschemedraftissuetype

### setworkflowschemedraftissuetype

### publishdraftworkflowscheme

### deletedraftworkflowmapping

### getdraftworkflow

### updatedraftworkflowmapping

### deleteworkflowschemeissuetype

### getworkflowschemeissuetype

### setworkflowschemeissuetype

### deleteworkflowmapping

### getworkflow

### updateworkflowmapping

### getprojectusagesforworkflowscheme

### getidsofworklogsdeletedsince

### getworklogsforids

### getidsofworklogsmodifiedsince

### addonpropertiesresource_getaddonproperties_get

### addonpropertiesresource_deleteaddonproperty_delete

### addonpropertiesresource_getaddonproperty_get

### addonpropertiesresource_putaddonproperty_put

### dynamicmodulesresource_removemodules_delete

### dynamicmodulesresource_getmodules_get

### dynamicmodulesresource_registermodules_post

### appissuefieldvalueupdateresource_updateissuefields_put

### migrationresource_updateentitypropertiesvalue_put

### migrationresource_workflowrulesearch_post

### serviceregistryresource_services_get

### deleteforgeappproperty

### putforgeappproperty

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/jira
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/jira`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
