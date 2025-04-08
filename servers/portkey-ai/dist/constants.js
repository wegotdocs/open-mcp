export const OPENAPI_URL = "https://raw.githubusercontent.com/Portkey-AI/openapi/refs/heads/master/openapi.yaml";
export const SERVER_NAME = "portkey-ai";
export const SERVER_VERSION = "0.0.1";
export const OPERATION_FILES_RELATIVE = [
    "./tools/createchatcompletion.js",
    "./tools/createcompletion.js",
    "./tools/post_collections.js",
    "./tools/get_collections.js",
    "./tools/parameters_collections_collectionid_.js",
    "./tools/get_collections_collectionid_.js",
    "./tools/put_collections_collectionid_.js",
    "./tools/delete_collections_collectionid_.js",
    "./tools/createlabel.js",
    "./tools/listlabels.js",
    "./tools/getlabel.js",
    "./tools/updatelabel.js",
    "./tools/deletelabel.js",
    "./tools/createprompt.js",
    "./tools/listprompts.js",
    "./tools/getprompt.js",
    "./tools/updateprompt.js",
    "./tools/deleteprompt.js",
    "./tools/getpromptversions.js",
    "./tools/getpromptbyversion.js",
    "./tools/updatepromptversion.js",
    "./tools/updatepromptdefault.js",
    "./tools/createpromptpartial.js",
    "./tools/listpromptpartials.js",
    "./tools/getpromptpartial.js",
    "./tools/updatepromptpartial.js",
    "./tools/deletepromptpartial.js",
    "./tools/getpromptpartialversions.js",
    "./tools/updatepromptpartialdefault.js",
    "./tools/createpromptcompletion.js",
    "./tools/createpromptrender.js",
    "./tools/createimage.js",
    "./tools/createimageedit.js",
    "./tools/createimagevariation.js",
    "./tools/createembedding.js",
    "./tools/createspeech.js",
    "./tools/createtranscription.js",
    "./tools/createtranslation.js",
    "./tools/listfiles.js",
    "./tools/createfile.js",
    "./tools/deletefile.js",
    "./tools/retrievefile.js",
    "./tools/downloadfile.js",
    "./tools/createfinetuningjob.js",
    "./tools/listpaginatedfinetuningjobs.js",
    "./tools/retrievefinetuningjob.js",
    "./tools/listfinetuningevents.js",
    "./tools/cancelfinetuningjob.js",
    "./tools/listfinetuningjobcheckpoints.js",
    "./tools/listmodels.js",
    "./tools/retrievemodel.js",
    "./tools/deletemodel.js",
    "./tools/createmoderation.js",
    "./tools/listassistants.js",
    "./tools/createassistant.js",
    "./tools/getassistant.js",
    "./tools/modifyassistant.js",
    "./tools/deleteassistant.js",
    "./tools/createthread.js",
    "./tools/getthread.js",
    "./tools/modifythread.js",
    "./tools/deletethread.js",
    "./tools/listmessages.js",
    "./tools/createmessage.js",
    "./tools/getmessage.js",
    "./tools/modifymessage.js",
    "./tools/deletemessage.js",
    "./tools/createthreadandrun.js",
    "./tools/listruns.js",
    "./tools/createrun.js",
    "./tools/getrun.js",
    "./tools/modifyrun.js",
    "./tools/submittoolouputstorun.js",
    "./tools/cancelrun.js",
    "./tools/listrunsteps.js",
    "./tools/getrunstep.js",
    "./tools/listvectorstores.js",
    "./tools/createvectorstore.js",
    "./tools/getvectorstore.js",
    "./tools/modifyvectorstore.js",
    "./tools/deletevectorstore.js",
    "./tools/listvectorstorefiles.js",
    "./tools/createvectorstorefile.js",
    "./tools/getvectorstorefile.js",
    "./tools/deletevectorstorefile.js",
    "./tools/createvectorstorefilebatch.js",
    "./tools/getvectorstorefilebatch.js",
    "./tools/cancelvectorstorefilebatch.js",
    "./tools/listfilesinvectorstorebatch.js",
    "./tools/createbatch.js",
    "./tools/listbatches.js",
    "./tools/retrievebatch.js",
    "./tools/cancelbatch.js",
    "./tools/listconfigs.js",
    "./tools/createconfig.js",
    "./tools/getconfig.js",
    "./tools/updateconfig.js",
    "./tools/createfeedback.js",
    "./tools/updatefeedback.js",
    "./tools/get_virtual_keys.js",
    "./tools/post_virtual_keys.js",
    "./tools/get_virtual_keys_slug_.js",
    "./tools/put_virtual_keys_slug_.js",
    "./tools/delete_virtual_keys_slug_.js",
    "./tools/invites_create.js",
    "./tools/get_admin_users_invites.js",
    "./tools/get_admin_users_invites_inviteid_.js",
    "./tools/delete_admin_users_invites_inviteid_.js",
    "./tools/post_admin_users_invites_inviteid_resend.js",
    "./tools/get_admin_users.js",
    "./tools/get_admin_users_userid_.js",
    "./tools/delete_admin_users_userid_.js",
    "./tools/put_admin_users_userid_.js",
    "./tools/post_admin_workspaces_workspaceid_users.js",
    "./tools/get_admin_workspaces_workspaceid_users.js",
    "./tools/put_admin_workspaces_workspaceid_users_userid_.js",
    "./tools/delete_admin_workspaces_workspaceid_users_userid_.js",
    "./tools/get_admin_workspaces_workspaceid_users_userid_.js",
    "./tools/post_admin_workspaces.js",
    "./tools/get_admin_workspaces.js",
    "./tools/put_admin_workspaces_workspaceid_.js",
    "./tools/get_admin_workspaces_workspaceid_.js",
    "./tools/delete_admin_workspaces_workspaceid_.js",
    "./tools/post_logs.js",
    "./tools/get_logs_exports_exportid_.js",
    "./tools/put_logs_exports_exportid_.js",
    "./tools/get_logs_exports.js",
    "./tools/post_logs_exports.js",
    "./tools/post_logs_exports_exportid_start.js",
    "./tools/post_logs_exports_exportid_cancel.js",
    "./tools/get_logs_exports_exportid_download.js",
    "./tools/post_api_keys_type_sub_type_.js",
    "./tools/get_api_keys.js",
    "./tools/put_api_keys_id_.js",
    "./tools/get_api_keys_id_.js",
    "./tools/delete_api_keys_id_.js",
    "./tools/get_analytics_graphs_requests.js",
    "./tools/get_analytics_graphs_cost.js",
    "./tools/get_analytics_graphs_latency.js",
    "./tools/get_analytics_graphs_tokens.js",
    "./tools/get_analytics_graphs_users.js",
    "./tools/get_analytics_graphs_users_requests.js",
    "./tools/get_analytics_graphs_errors.js",
    "./tools/get_analytics_graphs_errors_rate.js",
    "./tools/get_analytics_graphs_errors_stacks.js",
    "./tools/get_analytics_graphs_errors_status_codes.js",
    "./tools/get_analytics_graphs_requests_rescued.js",
    "./tools/get_analytics_graphs_cache_hit_rate.js",
    "./tools/get_analytics_graphs_cache_latency.js",
    "./tools/get_analytics_graphs_feedbacks.js",
    "./tools/get_analytics_graphs_feedbacks_scores.js",
    "./tools/get_analytics_graphs_feedbacks_weighted.js",
    "./tools/get_analytics_graphs_feedbacks_ai_models.js",
    "./tools/get_analytics_summary_cache.js",
    "./tools/get_analytics_groups_users.js",
    "./tools/get_analytics_groups_ai_models.js",
    "./tools/get_analytics_groups_metadata_metadatakey_.js"
];
