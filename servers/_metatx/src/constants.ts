export const SERVER_NAME = "_metatx"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./operations/blockchains_route_blockchains_get.js",
  "./operations/list_registered_contracts_route_contracts_get.js",
  "./operations/register_contract_route_contracts_post.js",
  "./operations/get_registered_contract_route_contracts_contract_id_get.js",
  "./operations/update_contract_route_contracts_contract_id_put.js",
  "./operations/delete_contract_route_contracts_contract_id_delete.js",
  "./operations/list_metatx_requesters_route_requesters_get.js",
  "./operations/list_metatx_requester_holders_route_contracts_contract_id_holder.js",
  "./operations/add_metatx_requester_holder_route_contracts_contract_id_holders_.js",
  "./operations/delete_metatx_requester_holder_route_contracts_contract_id_holde.js",
  "./operations/call_request_types_route_requests_types_get.js",
  "./operations/call_request_types_route_contracts_types_get.js",
  "./operations/list_requests_route_requests_get.js",
  "./operations/create_requests_requests_post.js",
  "./operations/delete_requests_requests_delete.js",
  "./operations/check_requests_route_requests_check_get.js",
  "./operations/get_request_requests_request_id_get.js",
  "./operations/complete_call_request_route_requests_request_id_complete_post.js"
]