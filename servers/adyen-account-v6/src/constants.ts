export const OPENAPI_URL = "https://raw.githubusercontent.com/Adyen/adyen-openapi/refs/heads/main/json/AccountService-v6.json"
export const SERVER_NAME = "adyen-account-v6"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/post_checkaccountholder.js",
  "./tools/post_closeaccount.js",
  "./tools/post_closeaccountholder.js",
  "./tools/post_closestores.js",
  "./tools/post_createaccount.js",
  "./tools/post_createaccountholder.js",
  "./tools/post_deletebankaccounts.js",
  "./tools/post_deletelegalarrangements.js",
  "./tools/post_deletepayoutmethods.js",
  "./tools/post_deleteshareholders.js",
  "./tools/post_deletesignatories.js",
  "./tools/post_getaccountholder.js",
  "./tools/post_gettaxform.js",
  "./tools/post_getuploadeddocuments.js",
  "./tools/post_suspendaccountholder.js",
  "./tools/post_unsuspendaccountholder.js",
  "./tools/post_updateaccount.js",
  "./tools/post_updateaccountholder.js",
  "./tools/post_updateaccountholderstate.js",
  "./tools/post_uploaddocument.js"
]