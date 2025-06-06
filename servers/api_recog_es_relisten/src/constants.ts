export const OPENAPI_URL = "https://demo.api.recog.es/relisten/docs/openapi.json"
export const SERVER_NAME = "api_recog_es_relisten"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/create_feedback/index.js",
  "./tools/get_history_history_get/index.js",
  "./tools/get_result_by_id_results_result_id_get/index.js",
  "./tools/update_result_by_id_results_result_id_put/index.js",
  "./tools/get_hl7_result_by_id_results_result_id_hl7_get/index.js",
  "./tools/generate_result_notes_results_result_id_generate_notes_post/index.js",
  "./tools/retry_retry_result_id_post/index.js",
  "./tools/upload_file_upload_post/index.js",
  "./tools/upload_partial_file_upload_partial_post/index.js",
  "./tools/upload_async_file_upload_async_post/index.js",
  "./tools/get_request_request_post/index.js",
  "./tools/upload_dictation_dictation_upload_post/index.js",
  "./tools/create_dictation_dictation_process_post/index.js",
  "./tools/realtime_dictation_dictation_process_real_time_post/index.js"
]