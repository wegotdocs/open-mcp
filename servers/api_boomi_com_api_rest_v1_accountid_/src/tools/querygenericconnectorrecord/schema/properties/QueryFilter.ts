import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.literal("EQUALS"), "property": z.enum(["id","executionConnectorId","executionId","connectionId","operationId","actionType","connectorType","atomId","dateProcessed","connectionName","operationName","errorMessage","status","documentIndex","incrementalDocumentIndex","size","startShape","retryable"]) })
}