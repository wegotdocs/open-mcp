export const OPENAPI_URL = "https://engineapi.moonstream.to/metatx/openapi.json"
export const SERVER_NAME = "metatx"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/blockchains_route_blockchains_get/index.js",
  "./tools/list_registered_contracts_route_contracts_get/index.js",
  "./tools/register_contract_route_contracts_post/index.js",
  "./tools/get_registered_contract_route_contracts_contract_id_get/index.js",
  "./tools/update_contract_route_contracts_contract_id_put/index.js",
  "./tools/delete_contract_route_contracts_contract_id_delete/index.js",
  "./tools/list_metatx_requesters_route_requesters_get/index.js",
  "./tools/list_metatx_requester_holders_route_contracts_contract_id_holder/index.js",
  "./tools/add_metatx_requester_holder_route_contracts_contract_id_holders_/index.js",
  "./tools/delete_metatx_requester_holder_route_contracts_contract_id_holde/index.js",
  "./tools/call_request_types_route_requests_types_get/index.js",
  "./tools/call_request_types_route_contracts_types_get/index.js",
  "./tools/list_requests_route_requests_get/index.js",
  "./tools/create_requests_requests_post/index.js",
  "./tools/delete_requests_requests_delete/index.js",
  "./tools/check_requests_route_requests_check_get/index.js",
  "./tools/get_request_requests_request_id_get/index.js",
  "./tools/complete_call_request_route_requests_request_id_complete_post/index.js"
]