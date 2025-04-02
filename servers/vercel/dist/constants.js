export const OPENAPI_URL = "https://openapi.vercel.sh";
export const SERVER_NAME = "vercel";
export const SERVER_VERSION = "0.0.1";
export const OPERATION_FILES_RELATIVE = [
    "./tools/readaccessgroup.js",
    "./tools/updateaccessgroup.js",
    "./tools/deleteaccessgroup.js",
    "./tools/listaccessgroupmembers.js",
    "./tools/listaccessgroups.js",
    "./tools/createaccessgroup.js",
    "./tools/listaccessgroupprojects.js",
    "./tools/createaccessgroupproject.js",
    "./tools/readaccessgroupproject.js",
    "./tools/updateaccessgroupproject.js",
    "./tools/deleteaccessgroupproject.js",
    "./tools/recordevents.js",
    "./tools/status.js",
    "./tools/uploadartifact.js",
    "./tools/downloadartifact.js",
    "./tools/artifactexists.js",
    "./tools/artifactquery.js",
    "./tools/createcheck.js",
    "./tools/getallchecks.js",
    "./tools/getcheck.js",
    "./tools/updatecheck.js",
    "./tools/rerequestcheck.js",
    "./tools/delete_data_cache_purge_all.js",
    "./tools/patch_data_cache_billing_settings.js",
    "./tools/updateprojectdatacache.js",
    "./tools/getdeploymentevents.js",
    "./tools/update_integration_deployment_action.js",
    "./tools/getdeployment.js",
    "./tools/createdeployment.js",
    "./tools/canceldeployment.js",
    "./tools/buydomain.js",
    "./tools/checkdomainprice.js",
    "./tools/checkdomainstatus.js",
    "./tools/getrecords.js",
    "./tools/createrecord.js",
    "./tools/updaterecord.js",
    "./tools/removerecord.js",
    "./tools/getdomaintransfer.js",
    "./tools/getdomainconfig.js",
    "./tools/getdomain.js",
    "./tools/getdomains.js",
    "./tools/createortransferdomain.js",
    "./tools/patchdomain.js",
    "./tools/deletedomain.js",
    "./tools/getconfigurablelogdrain.js",
    "./tools/deleteconfigurablelogdrain.js",
    "./tools/getalllogdrains.js",
    "./tools/createconfigurablelogdrain.js",
    "./tools/getedgeconfigs.js",
    "./tools/createedgeconfig.js",
    "./tools/getedgeconfig.js",
    "./tools/updateedgeconfig.js",
    "./tools/deleteedgeconfig.js",
    "./tools/getedgeconfigitems.js",
    "./tools/patchedgeconfigitems.js",
    "./tools/getedgeconfigschema.js",
    "./tools/patchedgeconfigschema.js",
    "./tools/deleteedgeconfigschema.js",
    "./tools/getedgeconfigitem.js",
    "./tools/getedgeconfigtokens.js",
    "./tools/deleteedgeconfigtokens.js",
    "./tools/getedgeconfigtoken.js",
    "./tools/createedgeconfigtoken.js",
    "./tools/getedgeconfigbackup.js",
    "./tools/getedgeconfigbackups.js",
    "./tools/listuserevents.js",
    "./tools/get_account_info.js",
    "./tools/get_member.js",
    "./tools/create_event.js",
    "./tools/submit_billing_data.js",
    "./tools/submit_invoice.js",
    "./tools/get_invoice.js",
    "./tools/update_invoice.js",
    "./tools/submit_prepayment_balances.js",
    "./tools/update_resource_secrets.js",
    "./tools/update_resource_secrets_by_id.js",
    "./tools/import_resource.js",
    "./tools/getconfigurations.js",
    "./tools/getconfiguration.js",
    "./tools/deleteconfiguration.js",
    "./tools/exchange_sso_token.js",
    "./tools/getintegrationlogdrains.js",
    "./tools/createlogdrain.js",
    "./tools/deleteintegrationlogdrain.js",
    "./tools/gitnamespaces.js",
    "./tools/searchrepo.js",
    "./tools/get_v1_experimentation_items.js",
    "./tools/post_v1_installations_integrationconfigurationid_resources_resou.js",
    "./tools/patch_v1_installations_integrationconfigurationid_resources_reso.js",
    "./tools/delete_v1_installations_integrationconfigurationid_resources_res.js",
    "./tools/head_v1_installations_integrationconfigurationid_resources_resou.js",
    "./tools/put_v1_installations_integrationconfigurationid_resources_resour.js",
    "./tools/getprojectmembers.js",
    "./tools/addprojectmember.js",
    "./tools/removeprojectmember.js",
    "./tools/getprojects.js",
    "./tools/createproject.js",
    "./tools/getproject.js",
    "./tools/updateproject.js",
    "./tools/deleteproject.js",
    "./tools/createcustomenvironment.js",
    "./tools/get_v9_projects_idorname_custom_environments.js",
    "./tools/getcustomenvironment.js",
    "./tools/updatecustomenvironment.js",
    "./tools/removecustomenvironment.js",
    "./tools/getprojectdomains.js",
    "./tools/getprojectdomain.js",
    "./tools/updateprojectdomain.js",
    "./tools/removeprojectdomain.js",
    "./tools/addprojectdomain.js",
    "./tools/verifyprojectdomain.js",
    "./tools/filterprojectenvs.js",
    "./tools/createprojectenv.js",
    "./tools/getprojectenv.js",
    "./tools/removeprojectenv.js",
    "./tools/editprojectenv.js",
    "./tools/createprojecttransferrequest.js",
    "./tools/acceptprojecttransferrequest.js",
    "./tools/updateprojectprotectionbypass.js",
    "./tools/requestpromote.js",
    "./tools/listpromotealiases.js",
    "./tools/pauseproject.js",
    "./tools/unpauseproject.js",
    "./tools/updateattackchallengemode.js",
    "./tools/putfirewallconfig.js",
    "./tools/updatefirewallconfig.js",
    "./tools/getfirewallconfig.js",
    "./tools/getactiveattackstatus.js",
    "./tools/getbypassip.js",
    "./tools/addbypassip.js",
    "./tools/removebypassip.js",
    "./tools/getteammembers.js",
    "./tools/inviteusertoteam.js",
    "./tools/requestaccesstoteam.js",
    "./tools/getteamaccessrequest.js",
    "./tools/jointeam.js",
    "./tools/updateteammember.js",
    "./tools/removeteammember.js",
    "./tools/getteam.js",
    "./tools/patchteam.js",
    "./tools/getteams.js",
    "./tools/createteam.js",
    "./tools/deleteteam.js",
    "./tools/deleteteaminvitecode.js",
    "./tools/uploadfile.js",
    "./tools/listauthtokens.js",
    "./tools/createauthtoken.js",
    "./tools/getauthtoken.js",
    "./tools/deleteauthtoken.js",
    "./tools/getauthuser.js",
    "./tools/requestdelete.js",
    "./tools/createwebhook.js",
    "./tools/getwebhooks.js",
    "./tools/getwebhook.js",
    "./tools/deletewebhook.js",
    "./tools/listdeploymentaliases.js",
    "./tools/assignalias.js",
    "./tools/listaliases.js",
    "./tools/getalias.js",
    "./tools/deletealias.js",
    "./tools/get_certs.js",
    "./tools/getcertbyid.js",
    "./tools/removecert.js",
    "./tools/issuecert.js",
    "./tools/uploadcert.js",
    "./tools/listdeploymentfiles.js",
    "./tools/getdeploymentfilecontents.js",
    "./tools/getdeployments.js",
    "./tools/deletedeployment.js",
    "./tools/getsecrets.js",
    "./tools/createsecret.js",
    "./tools/renamesecret.js",
    "./tools/getsecret.js",
    "./tools/deletesecret.js"
];
