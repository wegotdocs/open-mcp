export const OPENAPI_URL = "https://dac-static.atlassian.com/cloud/jira/platform/swagger-v3.v3.json?_v=1.7802.0-0.1322.0"
export const SERVER_NAME = "your_domain_atlassian_net"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/getbanner.js",
  "./tools/setbanner.js",
  "./tools/getcustomfieldsconfigurations.js",
  "./tools/updatemultiplecustomfieldvalues.js",
  "./tools/getcustomfieldconfiguration.js",
  "./tools/updatecustomfieldconfiguration.js",
  "./tools/updatecustomfieldvalue.js",
  "./tools/getapplicationproperty.js",
  "./tools/getadvancedsettings.js",
  "./tools/setapplicationproperty.js",
  "./tools/getallapplicationroles.js",
  "./tools/getapplicationrole.js",
  "./tools/getattachmentcontent.js",
  "./tools/getattachmentmeta.js",
  "./tools/getattachmentthumbnail.js",
  "./tools/removeattachment.js",
  "./tools/getattachment.js",
  "./tools/expandattachmentforhumans.js",
  "./tools/expandattachmentformachines.js",
  "./tools/getauditrecords.js",
  "./tools/getallsystemavatars.js",
  "./tools/submitbulkdelete.js",
  "./tools/getbulkeditablefields.js",
  "./tools/submitbulkedit.js",
  "./tools/submitbulkmove.js",
  "./tools/getavailabletransitions.js",
  "./tools/submitbulktransition.js",
  "./tools/submitbulkunwatch.js",
  "./tools/submitbulkwatch.js",
  "./tools/getbulkoperationprogress.js",
  "./tools/getbulkchangelogs.js",
  "./tools/getalluserdataclassificationlevels.js",
  "./tools/getcommentsbyids.js",
  "./tools/getcommentpropertykeys.js",
  "./tools/deletecommentproperty.js",
  "./tools/getcommentproperty.js",
  "./tools/setcommentproperty.js",
  "./tools/findcomponentsforprojects.js",
  "./tools/createcomponent.js",
  "./tools/deletecomponent.js",
  "./tools/getcomponent.js",
  "./tools/updatecomponent.js",
  "./tools/getcomponentrelatedissues.js",
  "./tools/getconfiguration.js",
  "./tools/getselectedtimetrackingimplementation.js",
  "./tools/selecttimetrackingimplementation.js",
  "./tools/getavailabletimetrackingimplementations.js",
  "./tools/getsharedtimetrackingconfiguration.js",
  "./tools/setsharedtimetrackingconfiguration.js",
  "./tools/getcustomfieldoption.js",
  "./tools/getalldashboards.js",
  "./tools/createdashboard.js",
  "./tools/bulkeditdashboards.js",
  "./tools/getallavailabledashboardgadgets.js",
  "./tools/getdashboardspaginated.js",
  "./tools/getallgadgets.js",
  "./tools/addgadget.js",
  "./tools/removegadget.js",
  "./tools/updategadget.js",
  "./tools/getdashboarditempropertykeys.js",
  "./tools/deletedashboarditemproperty.js",
  "./tools/getdashboarditemproperty.js",
  "./tools/setdashboarditemproperty.js",
  "./tools/deletedashboard.js",
  "./tools/getdashboard.js",
  "./tools/updatedashboard.js",
  "./tools/copydashboard.js",
  "./tools/getpolicy.js",
  "./tools/getpolicies.js",
  "./tools/getevents.js",
  "./tools/analyseexpression.js",
  "./tools/evaluatejiraexpression.js",
  "./tools/evaluatejsisjiraexpression.js",
  "./tools/getfields.js",
  "./tools/createcustomfield.js",
  "./tools/removeassociations.js",
  "./tools/createassociations.js",
  "./tools/getfieldspaginated.js",
  "./tools/gettrashedfieldspaginated.js",
  "./tools/updatecustomfield.js",
  "./tools/getcontextsforfield.js",
  "./tools/createcustomfieldcontext.js",
  "./tools/getdefaultvalues.js",
  "./tools/setdefaultvalues.js",
  "./tools/getissuetypemappingsforcontexts.js",
  "./tools/getcustomfieldcontextsforprojectsandissuetypes.js",
  "./tools/getprojectcontextmapping.js",
  "./tools/deletecustomfieldcontext.js",
  "./tools/updatecustomfieldcontext.js",
  "./tools/addissuetypestocontext.js",
  "./tools/removeissuetypesfromcontext.js",
  "./tools/getoptionsforcontext.js",
  "./tools/createcustomfieldoption.js",
  "./tools/updatecustomfieldoption.js",
  "./tools/reordercustomfieldoptions.js",
  "./tools/deletecustomfieldoption.js",
  "./tools/replacecustomfieldoption.js",
  "./tools/assignprojectstocustomfieldcontext.js",
  "./tools/removecustomfieldcontextfromprojects.js",
  "./tools/getcontextsforfielddeprecated.js",
  "./tools/getscreensforfield.js",
  "./tools/getallissuefieldoptions.js",
  "./tools/createissuefieldoption.js",
  "./tools/getselectableissuefieldoptions.js",
  "./tools/getvisibleissuefieldoptions.js",
  "./tools/deleteissuefieldoption.js",
  "./tools/getissuefieldoption.js",
  "./tools/updateissuefieldoption.js",
  "./tools/replaceissuefieldoption.js",
  "./tools/deletecustomfield.js",
  "./tools/restorecustomfield.js",
  "./tools/trashcustomfield.js",
  "./tools/getallfieldconfigurations.js",
  "./tools/createfieldconfiguration.js",
  "./tools/deletefieldconfiguration.js",
  "./tools/updatefieldconfiguration.js",
  "./tools/getfieldconfigurationitems.js",
  "./tools/updatefieldconfigurationitems.js",
  "./tools/getallfieldconfigurationschemes.js",
  "./tools/createfieldconfigurationscheme.js",
  "./tools/getfieldconfigurationschememappings.js",
  "./tools/getfieldconfigurationschemeprojectmapping.js",
  "./tools/assignfieldconfigurationschemetoproject.js",
  "./tools/deletefieldconfigurationscheme.js",
  "./tools/updatefieldconfigurationscheme.js",
  "./tools/setfieldconfigurationschememapping.js",
  "./tools/removeissuetypesfromglobalfieldconfigurationscheme.js",
  "./tools/createfilter.js",
  "./tools/getdefaultsharescope.js",
  "./tools/setdefaultsharescope.js",
  "./tools/getfavouritefilters.js",
  "./tools/getmyfilters.js",
  "./tools/getfilterspaginated.js",
  "./tools/deletefilter.js",
  "./tools/getfilter.js",
  "./tools/updatefilter.js",
  "./tools/resetcolumns.js",
  "./tools/getcolumns.js",
  "./tools/setcolumns.js",
  "./tools/deletefavouriteforfilter.js",
  "./tools/setfavouriteforfilter.js",
  "./tools/changefilterowner.js",
  "./tools/getsharepermissions.js",
  "./tools/addsharepermission.js",
  "./tools/deletesharepermission.js",
  "./tools/getsharepermission.js",
  "./tools/removegroup.js",
  "./tools/getgroup.js",
  "./tools/creategroup.js",
  "./tools/bulkgetgroups.js",
  "./tools/getusersfromgroup.js",
  "./tools/removeuserfromgroup.js",
  "./tools/addusertogroup.js",
  "./tools/findgroups.js",
  "./tools/findusersandgroups.js",
  "./tools/getlicense.js",
  "./tools/createissue.js",
  "./tools/archiveissuesasync.js",
  "./tools/archiveissues.js",
  "./tools/createissues.js",
  "./tools/bulkfetchissues.js",
  "./tools/getcreateissuemeta.js",
  "./tools/getcreateissuemetaissuetypes.js",
  "./tools/getcreateissuemetaissuetypeid.js",
  "./tools/getissuelimitreport.js",
  "./tools/getissuepickerresource.js",
  "./tools/bulksetissuespropertieslist.js",
  "./tools/bulksetissuepropertiesbyissue.js",
  "./tools/bulkdeleteissueproperty.js",
  "./tools/bulksetissueproperty.js",
  "./tools/unarchiveissues.js",
  "./tools/getiswatchingissuebulk.js",
  "./tools/deleteissue.js",
  "./tools/getissue.js",
  "./tools/editissue.js",
  "./tools/assignissue.js",
  "./tools/addattachment.js",
  "./tools/getchangelogs.js",
  "./tools/getchangelogsbyids.js",
  "./tools/getcomments.js",
  "./tools/addcomment.js",
  "./tools/deletecomment.js",
  "./tools/getcomment.js",
  "./tools/updatecomment.js",
  "./tools/geteditissuemeta.js",
  "./tools/notify.js",
  "./tools/getissuepropertykeys.js",
  "./tools/deleteissueproperty.js",
  "./tools/getissueproperty.js",
  "./tools/setissueproperty.js",
  "./tools/deleteremoteissuelinkbyglobalid.js",
  "./tools/getremoteissuelinks.js",
  "./tools/createorupdateremoteissuelink.js",
  "./tools/deleteremoteissuelinkbyid.js",
  "./tools/getremoteissuelinkbyid.js",
  "./tools/updateremoteissuelink.js",
  "./tools/gettransitions.js",
  "./tools/dotransition.js",
  "./tools/removevote.js",
  "./tools/getvotes.js",
  "./tools/addvote.js",
  "./tools/removewatcher.js",
  "./tools/getissuewatchers.js",
  "./tools/addwatcher.js",
  "./tools/bulkdeleteworklogs.js",
  "./tools/getissueworklog.js",
  "./tools/addworklog.js",
  "./tools/bulkmoveworklogs.js",
  "./tools/deleteworklog.js",
  "./tools/getworklog.js",
  "./tools/updateworklog.js",
  "./tools/getworklogpropertykeys.js",
  "./tools/deleteworklogproperty.js",
  "./tools/getworklogproperty.js",
  "./tools/setworklogproperty.js",
  "./tools/linkissues.js",
  "./tools/deleteissuelink.js",
  "./tools/getissuelink.js",
  "./tools/getissuelinktypes.js",
  "./tools/createissuelinktype.js",
  "./tools/deleteissuelinktype.js",
  "./tools/getissuelinktype.js",
  "./tools/updateissuelinktype.js",
  "./tools/exportarchivedissues.js",
  "./tools/getissuesecurityschemes.js",
  "./tools/createissuesecurityscheme.js",
  "./tools/getsecuritylevels.js",
  "./tools/setdefaultlevels.js",
  "./tools/getsecuritylevelmembers.js",
  "./tools/searchprojectsusingsecurityschemes.js",
  "./tools/associateschemestoprojects.js",
  "./tools/searchsecurityschemes.js",
  "./tools/getissuesecurityscheme.js",
  "./tools/updateissuesecurityscheme.js",
  "./tools/getissuesecuritylevelmembers.js",
  "./tools/deletesecurityscheme.js",
  "./tools/addsecuritylevel.js",
  "./tools/removelevel.js",
  "./tools/updatesecuritylevel.js",
  "./tools/addsecuritylevelmembers.js",
  "./tools/removememberfromsecuritylevel.js",
  "./tools/getissuealltypes.js",
  "./tools/createissuetype.js",
  "./tools/getissuetypesforproject.js",
  "./tools/deleteissuetype.js",
  "./tools/getissuetype.js",
  "./tools/updateissuetype.js",
  "./tools/getalternativeissuetypes.js",
  "./tools/createissuetypeavatar.js",
  "./tools/getissuetypepropertykeys.js",
  "./tools/deleteissuetypeproperty.js",
  "./tools/getissuetypeproperty.js",
  "./tools/setissuetypeproperty.js",
  "./tools/getallissuetypeschemes.js",
  "./tools/createissuetypescheme.js",
  "./tools/getissuetypeschemesmapping.js",
  "./tools/getissuetypeschemeforprojects.js",
  "./tools/assignissuetypeschemetoproject.js",
  "./tools/deleteissuetypescheme.js",
  "./tools/updateissuetypescheme.js",
  "./tools/addissuetypestoissuetypescheme.js",
  "./tools/reorderissuetypesinissuetypescheme.js",
  "./tools/removeissuetypefromissuetypescheme.js",
  "./tools/getissuetypescreenschemes.js",
  "./tools/createissuetypescreenscheme.js",
  "./tools/getissuetypescreenschememappings.js",
  "./tools/getissuetypescreenschemeprojectassociations.js",
  "./tools/assignissuetypescreenschemetoproject.js",
  "./tools/deleteissuetypescreenscheme.js",
  "./tools/updateissuetypescreenscheme.js",
  "./tools/appendmappingsforissuetypescreenscheme.js",
  "./tools/updatedefaultscreenscheme.js",
  "./tools/removemappingsfromissuetypescreenscheme.js",
  "./tools/getprojectsforissuetypescreenscheme.js",
  "./tools/getautocomplete.js",
  "./tools/getautocompletepost.js",
  "./tools/getfieldautocompleteforquerystring.js",
  "./tools/getprecomputations.js",
  "./tools/updateprecomputations.js",
  "./tools/getprecomputationsbyid.js",
  "./tools/matchissues.js",
  "./tools/parsejqlqueries.js",
  "./tools/migratequeries.js",
  "./tools/sanitisejqlqueries.js",
  "./tools/getalllabels.js",
  "./tools/getapproximatelicensecount.js",
  "./tools/getapproximateapplicationlicensecount.js",
  "./tools/getmypermissions.js",
  "./tools/removepreference.js",
  "./tools/getpreference.js",
  "./tools/setpreference.js",
  "./tools/deletelocale.js",
  "./tools/getlocale.js",
  "./tools/setlocale.js",
  "./tools/getcurrentuser.js",
  "./tools/getnotificationschemes.js",
  "./tools/createnotificationscheme.js",
  "./tools/getnotificationschemetoprojectmappings.js",
  "./tools/getnotificationscheme.js",
  "./tools/updatenotificationscheme.js",
  "./tools/addnotifications.js",
  "./tools/deletenotificationscheme.js",
  "./tools/removenotificationfromnotificationscheme.js",
  "./tools/getallpermissions.js",
  "./tools/getbulkpermissions.js",
  "./tools/getpermittedprojects.js",
  "./tools/getallpermissionschemes.js",
  "./tools/createpermissionscheme.js",
  "./tools/deletepermissionscheme.js",
  "./tools/getpermissionscheme.js",
  "./tools/updatepermissionscheme.js",
  "./tools/getpermissionschemegrants.js",
  "./tools/createpermissiongrant.js",
  "./tools/deletepermissionschemeentity.js",
  "./tools/getpermissionschemegrant.js",
  "./tools/getplans.js",
  "./tools/createplan.js",
  "./tools/getplan.js",
  "./tools/updateplan.js",
  "./tools/archiveplan.js",
  "./tools/duplicateplan.js",
  "./tools/getteams.js",
  "./tools/addatlassianteam.js",
  "./tools/removeatlassianteam.js",
  "./tools/getatlassianteam.js",
  "./tools/updateatlassianteam.js",
  "./tools/createplanonlyteam.js",
  "./tools/deleteplanonlyteam.js",
  "./tools/getplanonlyteam.js",
  "./tools/updateplanonlyteam.js",
  "./tools/trashplan.js",
  "./tools/getpriorities.js",
  "./tools/createpriority.js",
  "./tools/setdefaultpriority.js",
  "./tools/movepriorities.js",
  "./tools/searchpriorities.js",
  "./tools/deletepriority.js",
  "./tools/getpriority.js",
  "./tools/updatepriority.js",
  "./tools/getpriorityschemes.js",
  "./tools/createpriorityscheme.js",
  "./tools/suggestedprioritiesformappings.js",
  "./tools/getavailableprioritiesbypriorityscheme.js",
  "./tools/deletepriorityscheme.js",
  "./tools/updatepriorityscheme.js",
  "./tools/getprioritiesbypriorityscheme.js",
  "./tools/getprojectsbypriorityscheme.js",
  "./tools/getallprojects.js",
  "./tools/createproject.js",
  "./tools/getrecent.js",
  "./tools/searchprojects.js",
  "./tools/getallprojecttypes.js",
  "./tools/getallaccessibleprojecttypes.js",
  "./tools/getprojecttypebykey.js",
  "./tools/getaccessibleprojecttypebykey.js",
  "./tools/deleteproject.js",
  "./tools/getproject.js",
  "./tools/updateproject.js",
  "./tools/archiveproject.js",
  "./tools/updateprojectavatar.js",
  "./tools/deleteprojectavatar.js",
  "./tools/createprojectavatar.js",
  "./tools/getallprojectavatars.js",
  "./tools/removedefaultprojectclassification.js",
  "./tools/getdefaultprojectclassification.js",
  "./tools/updatedefaultprojectclassification.js",
  "./tools/getprojectcomponentspaginated.js",
  "./tools/getprojectcomponents.js",
  "./tools/deleteprojectasynchronously.js",
  "./tools/getfeaturesforproject.js",
  "./tools/togglefeatureforproject.js",
  "./tools/getprojectpropertykeys.js",
  "./tools/deleteprojectproperty.js",
  "./tools/getprojectproperty.js",
  "./tools/setprojectproperty.js",
  "./tools/restore.js",
  "./tools/getprojectroles.js",
  "./tools/deleteactor.js",
  "./tools/getprojectrole.js",
  "./tools/addactorusers.js",
  "./tools/setactors.js",
  "./tools/getprojectroledetails.js",
  "./tools/getallstatuses.js",
  "./tools/getprojectversionspaginated.js",
  "./tools/getprojectversions.js",
  "./tools/getprojectemail.js",
  "./tools/updateprojectemail.js",
  "./tools/gethierarchy.js",
  "./tools/getprojectissuesecurityscheme.js",
  "./tools/getnotificationschemeforproject.js",
  "./tools/getassignedpermissionscheme.js",
  "./tools/assignpermissionscheme.js",
  "./tools/getsecuritylevelsforproject.js",
  "./tools/getallprojectcategories.js",
  "./tools/createprojectcategory.js",
  "./tools/removeprojectcategory.js",
  "./tools/getprojectcategorybyid.js",
  "./tools/updateprojectcategory.js",
  "./tools/validateprojectkey.js",
  "./tools/getvalidprojectkey.js",
  "./tools/getvalidprojectname.js",
  "./tools/getresolutions.js",
  "./tools/createresolution.js",
  "./tools/setdefaultresolution.js",
  "./tools/moveresolutions.js",
  "./tools/searchresolutions.js",
  "./tools/deleteresolution.js",
  "./tools/getresolution.js",
  "./tools/updateresolution.js",
  "./tools/getallprojectroles.js",
  "./tools/createprojectrole.js",
  "./tools/deleteprojectrole.js",
  "./tools/getprojectrolebyid.js",
  "./tools/partialupdateprojectrole.js",
  "./tools/fullyupdateprojectrole.js",
  "./tools/deleteprojectroleactorsfromrole.js",
  "./tools/getprojectroleactorsforrole.js",
  "./tools/addprojectroleactorstorole.js",
  "./tools/getscreens.js",
  "./tools/createscreen.js",
  "./tools/addfieldtodefaultscreen.js",
  "./tools/getbulkscreentabs.js",
  "./tools/deletescreen.js",
  "./tools/updatescreen.js",
  "./tools/getavailablescreenfields.js",
  "./tools/getallscreentabs.js",
  "./tools/addscreentab.js",
  "./tools/deletescreentab.js",
  "./tools/renamescreentab.js",
  "./tools/getallscreentabfields.js",
  "./tools/addscreentabfield.js",
  "./tools/removescreentabfield.js",
  "./tools/movescreentabfield.js",
  "./tools/movescreentab.js",
  "./tools/getscreenschemes.js",
  "./tools/createscreenscheme.js",
  "./tools/deletescreenscheme.js",
  "./tools/updatescreenscheme.js",
  "./tools/searchforissuesusingjql.js",
  "./tools/searchforissuesusingjqlpost.js",
  "./tools/countissues.js",
  "./tools/searchforissuesids.js",
  "./tools/searchandreconsileissuesusingjql.js",
  "./tools/searchandreconsileissuesusingjqlpost.js",
  "./tools/getissuesecuritylevel.js",
  "./tools/getserverinfo.js",
  "./tools/getissuenavigatordefaultcolumns.js",
  "./tools/setissuenavigatordefaultcolumns.js",
  "./tools/getstatuses.js",
  "./tools/getstatus.js",
  "./tools/getstatuscategories.js",
  "./tools/getstatuscategory.js",
  "./tools/deletestatusesbyid.js",
  "./tools/getstatusesbyid.js",
  "./tools/createstatuses.js",
  "./tools/updatestatuses.js",
  "./tools/search.js",
  "./tools/getprojectissuetypeusagesforstatus.js",
  "./tools/getprojectusagesforstatus.js",
  "./tools/getworkflowusagesforstatus.js",
  "./tools/gettask.js",
  "./tools/canceltask.js",
  "./tools/getuimodifications.js",
  "./tools/createuimodification.js",
  "./tools/deleteuimodification.js",
  "./tools/updateuimodification.js",
  "./tools/getavatars.js",
  "./tools/storeavatar.js",
  "./tools/deleteavatar.js",
  "./tools/getavatarimagebytype.js",
  "./tools/getavatarimagebyid.js",
  "./tools/getavatarimagebyowner.js",
  "./tools/removeuser.js",
  "./tools/getuser.js",
  "./tools/createuser.js",
  "./tools/findbulkassignableusers.js",
  "./tools/findassignableusers.js",
  "./tools/bulkgetusers.js",
  "./tools/bulkgetusersmigration.js",
  "./tools/resetusercolumns.js",
  "./tools/getuserdefaultcolumns.js",
  "./tools/setusercolumns.js",
  "./tools/getuseremail.js",
  "./tools/getuseremailbulk.js",
  "./tools/getusergroups.js",
  "./tools/getusernavproperty.js",
  "./tools/setusernavproperty.js",
  "./tools/finduserswithallpermissions.js",
  "./tools/findusersforpicker.js",
  "./tools/getuserpropertykeys.js",
  "./tools/deleteuserproperty.js",
  "./tools/getuserproperty.js",
  "./tools/setuserproperty.js",
  "./tools/findusers.js",
  "./tools/findusersbyquery.js",
  "./tools/finduserkeysbyquery.js",
  "./tools/finduserswithbrowsepermission.js",
  "./tools/getallusersdefault.js",
  "./tools/getallusers.js",
  "./tools/createversion.js",
  "./tools/deleteversion.js",
  "./tools/getversion.js",
  "./tools/updateversion.js",
  "./tools/mergeversions.js",
  "./tools/moveversion.js",
  "./tools/getversionrelatedissues.js",
  "./tools/getrelatedwork.js",
  "./tools/createrelatedwork.js",
  "./tools/updaterelatedwork.js",
  "./tools/deleteandreplaceversion.js",
  "./tools/getversionunresolvedissues.js",
  "./tools/deleterelatedwork.js",
  "./tools/deletewebhookbyid.js",
  "./tools/getdynamicwebhooksforapp.js",
  "./tools/registerdynamicwebhooks.js",
  "./tools/getfailedwebhooks.js",
  "./tools/refreshwebhooks.js",
  "./tools/getallworkflows.js",
  "./tools/createworkflow.js",
  "./tools/getworkflowtransitionruleconfigurations.js",
  "./tools/updateworkflowtransitionruleconfigurations.js",
  "./tools/deleteworkflowtransitionruleconfigurations.js",
  "./tools/getworkflowspaginated.js",
  "./tools/deleteworkflowtransitionproperty.js",
  "./tools/getworkflowtransitionproperties.js",
  "./tools/createworkflowtransitionproperty.js",
  "./tools/updateworkflowtransitionproperty.js",
  "./tools/deleteinactiveworkflow.js",
  "./tools/getworkflowprojectissuetypeusages.js",
  "./tools/getprojectusagesforworkflow.js",
  "./tools/getworkflowschemeusagesforworkflow.js",
  "./tools/readworkflows.js",
  "./tools/workflowcapabilities.js",
  "./tools/createworkflows.js",
  "./tools/validatecreateworkflows.js",
  "./tools/searchworkflows.js",
  "./tools/updateworkflows.js",
  "./tools/validateupdateworkflows.js",
  "./tools/getallworkflowschemes.js",
  "./tools/createworkflowscheme.js",
  "./tools/getworkflowschemeprojectassociations.js",
  "./tools/assignschemetoproject.js",
  "./tools/readworkflowschemes.js",
  "./tools/updateschemes.js",
  "./tools/updateworkflowschememappings.js",
  "./tools/deleteworkflowscheme.js",
  "./tools/getworkflowscheme.js",
  "./tools/updateworkflowscheme.js",
  "./tools/createworkflowschemedraftfromparent.js",
  "./tools/deletedefaultworkflow.js",
  "./tools/getdefaultworkflow.js",
  "./tools/updatedefaultworkflow.js",
  "./tools/deleteworkflowschemedraft.js",
  "./tools/getworkflowschemedraft.js",
  "./tools/updateworkflowschemedraft.js",
  "./tools/deletedraftdefaultworkflow.js",
  "./tools/getdraftdefaultworkflow.js",
  "./tools/updatedraftdefaultworkflow.js",
  "./tools/deleteworkflowschemedraftissuetype.js",
  "./tools/getworkflowschemedraftissuetype.js",
  "./tools/setworkflowschemedraftissuetype.js",
  "./tools/publishdraftworkflowscheme.js",
  "./tools/deletedraftworkflowmapping.js",
  "./tools/getdraftworkflow.js",
  "./tools/updatedraftworkflowmapping.js",
  "./tools/deleteworkflowschemeissuetype.js",
  "./tools/getworkflowschemeissuetype.js",
  "./tools/setworkflowschemeissuetype.js",
  "./tools/deleteworkflowmapping.js",
  "./tools/getworkflow.js",
  "./tools/updateworkflowmapping.js",
  "./tools/getprojectusagesforworkflowscheme.js",
  "./tools/getidsofworklogsdeletedsince.js",
  "./tools/getworklogsforids.js",
  "./tools/getidsofworklogsmodifiedsince.js",
  "./tools/addonpropertiesresource_getaddonproperties_get.js",
  "./tools/addonpropertiesresource_deleteaddonproperty_delete.js",
  "./tools/addonpropertiesresource_getaddonproperty_get.js",
  "./tools/addonpropertiesresource_putaddonproperty_put.js",
  "./tools/dynamicmodulesresource_removemodules_delete.js",
  "./tools/dynamicmodulesresource_getmodules_get.js",
  "./tools/dynamicmodulesresource_registermodules_post.js",
  "./tools/appissuefieldvalueupdateresource_updateissuefields_put.js",
  "./tools/migrationresource_updateentitypropertiesvalue_put.js",
  "./tools/migrationresource_workflowrulesearch_post.js",
  "./tools/serviceregistryresource_services_get.js",
  "./tools/deleteforgeappproperty.js",
  "./tools/putforgeappproperty.js"
]