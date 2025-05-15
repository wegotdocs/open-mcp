import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.enum(["EQUALS","LIKE","NOT_EQUALS","IS_NULL","IS_NOT_NULL","BETWEEN","GREATER_THAN","GREATER_THAN_OR_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","CONTAINS","NOT_CONTAINS"]), "property": z.enum(["executionId","originalExecutionId","account","executionTime","status","executionType","processName","processId","atomName","atomId","inboundDocumentCount","outboundDocumentCount","executionDuration","message","reportKey","launcherId","nodeId","recordedDate"]) })
}