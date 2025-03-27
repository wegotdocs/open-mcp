export const SERVER_NAME = "microsoft_com_graph_beta"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./operations/description_accessreviewdecisions.js",
  "./operations/accessreviewdecisions_accessreviewdecision_listaccessreviewdecis.js",
  "./operations/accessreviewdecisions_accessreviewdecision_createaccessreviewdec.js",
  "./operations/description_accessreviewdecisions_count.js",
  "./operations/get_count_accessreviewdecisions_c5db.js",
  "./operations/accessreviewdecisions_accessreviewdecision_deleteaccessreviewdec.js",
  "./operations/description_accessreviewdecisions_accessreviewdecision_id_.js",
  "./operations/accessreviewdecisions_accessreviewdecision_getaccessreviewdecisi.js",
  "./operations/parameters_accessreviewdecisions_accessreviewdecision_id_.js",
  "./operations/accessreviewdecisions_accessreviewdecision_updateaccessreviewdec.js",
  "./operations/description_accessreviews.js",
  "./operations/accessreviews_accessreview_listaccessreview.js",
  "./operations/accessreviews_accessreview_createaccessreview.js",
  "./operations/description_accessreviews_count.js",
  "./operations/get_count_accessreviews_27b1.js",
  "./operations/accessreviews_accessreview_deleteaccessreview.js",
  "./operations/description_accessreviews_accessreview_id_.js",
  "./operations/accessreviews_accessreview_getaccessreview.js",
  "./operations/parameters_accessreviews_accessreview_id_.js",
  "./operations/accessreviews_accessreview_updateaccessreview.js",
  "./operations/description_accessreviews_accessreview_id_decisions.js",
  "./operations/accessreviews_listdecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_decisions.js",
  "./operations/accessreviews_createdecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_decisions.js",
  "./operations/description_accessreviews_accessreview_id_decisions_count.js",
  "./operations/get_count_decisions_e283.js",
  "./operations/parameters_accessreviews_accessreview_id_decisions_count.js",
  "./operations/accessreviews_deletedecisions.js",
  "./operations/description_accessreviews_accessreview_id_decisions_accessreview.js",
  "./operations/accessreviews_getdecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_decisions_accessreviewd.js",
  "./operations/accessreviews_updatedecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_decisions_a.js",
  "./operations/description_accessreviews_accessreview_id_instances.js",
  "./operations/accessreviews_listinstances.js",
  "./operations/parameters_accessreviews_accessreview_id_instances.js",
  "./operations/accessreviews_createinstances.js",
  "./operations/description_accessreviews_accessreview_id_instances_count.js",
  "./operations/get_count_instances_6b79.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_count.js",
  "./operations/accessreviews_deleteinstances.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_getinstances.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_updateinstances.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_instances_listdecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_createdecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/get_count_decisions_00c9.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_deletedecisions.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_instances_getdecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_updatedecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_accessreview_instances_accessreview_applydecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_accessreview_instances_accessreview_resetdecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_accessreview_instances_accessreview_sendreminder.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_accessreview_instances_accessreview_stop.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_instances_listmydecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_createmydecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/get_count_mydecisions_8fe5.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_deletemydecisions.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_instances_getmydecisions.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_updatemydecisions.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/accessreviews_instances_listreviewers.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_createreviewers.js",
  "./operations/x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js",
  "./operations/get_count_reviewers_0f39.js",
  "./operations/parameters_accessreviews_accessreview_id_instances_accessreview_.js",
  "./operations/accessreviews_instances_deletereviewers.js",
  "./operations/description_accessreviews_accessreview_id_instances_accessreview.js"
]