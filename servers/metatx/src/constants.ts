export const OPENAPI_URL = "https://engineapi.moonstream.to/metatx/openapi.json"
export const SERVER_NAME = "metatx"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/blockchains_route_blockchains_get.js",
  "./tools/list_registered_contracts_route_contracts_get.js",
  "./tools/register_contract_route_contracts_post.js",
  "./tools/get_registered_contract_route_contracts_contract_id_get.js",
  "./tools/update_contract_route_contracts_contract_id_put.js",
  "./tools/delete_contract_route_contracts_contract_id_delete.js",
  "./tools/list_metatx_requesters_route_requesters_get.js",
  "./tools/list_metatx_requester_holders_route_contracts_contract_id_holder.js",
  "./tools/add_metatx_requester_holder_route_contracts_contract_id_holders_.js",
  "./tools/delete_metatx_requester_holder_route_contracts_contract_id_holde.js",
  "./tools/call_request_types_route_requests_types_get.js",
  "./tools/call_request_types_route_contracts_types_get.js",
  "./tools/list_requests_route_requests_get.js",
  "./tools/create_requests_requests_post.js",
  "./tools/delete_requests_requests_delete.js",
  "./tools/check_requests_route_requests_check_get.js",
  "./tools/get_request_requests_request_id_get.js",
  "./tools/complete_call_request_route_requests_request_id_complete_post.js"
]