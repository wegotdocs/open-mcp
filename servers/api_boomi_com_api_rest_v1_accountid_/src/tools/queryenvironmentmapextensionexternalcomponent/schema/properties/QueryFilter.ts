import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.enum(["EQUALS","LIKE","NOT_EQUALS","IS_NULL","IS_NOT_NULL","BETWEEN","GREATER_THAN","GREATER_THAN_OR_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","CONTAINS","NOT_CONTAINS"]), "property": z.enum(["ACCOUNT_ID","ENVIRONMENT_MAP_EXTENSION_ID","PACKAGED_COMPONENT_UID","COMPONENT_ID","COMPONENT_VERSION","COMPONENT_NAME","COMPONENT_TYPE"]) })
}