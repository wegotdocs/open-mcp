import { z } from "zod"

export const toolName = `adddataprofiler`
export const toolDescription = `Add table profile data`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/tableProfile`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "columnProfile",
    "systemProfile",
    "tableProfile"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "columnProfile": z.array(z.object({ "customMetricsProfile": z.array(z.object({ "name": z.string().optional(), "value": z.number().optional() })).optional(), "distinctCount": z.number().optional(), "distinctProportion": z.number().optional(), "duplicateCount": z.number().optional(), "firstQuartile": z.number().optional(), "histogram": z.object({ "boundaries": z.array(z.record(z.any())).optional(), "frequencies": z.array(z.record(z.any())).optional() }).optional(), "interQuartileRange": z.number().optional(), "max": z.record(z.any()).optional(), "maxLength": z.number().optional(), "mean": z.number().optional(), "median": z.number().optional(), "medianLength": z.number().optional(), "min": z.record(z.any()).optional(), "minLength": z.number().optional(), "missingCount": z.number().optional(), "missingPercentage": z.number().optional(), "name": z.string(), "nonParametricSkew": z.number().optional(), "nullCount": z.number().optional(), "nullProportion": z.number().optional(), "stddev": z.number().optional(), "stringPatternAnalysis": z.object({ "patterns": z.array(z.object({ "example": z.string(), "nodes": z.array(z.object({ "quantifier": z.number().int(), "symbolSet": z.enum(["WORD","ALPHA","RU","RU_LOWER","RU_UPPER","EN","EN_LOWER","EN_UPPER","DIGITS","SYMBOLS","LITERAL"]), "symbols": z.array(z.string()) })), "percentage": z.number(), "regex": z.string() })).optional() }).optional(), "sum": z.number().optional(), "textualDataHistogram": z.object({ "frequencies": z.array(z.record(z.any())).optional(), "values": z.array(z.record(z.any())).optional() }).optional(), "thirdQuartile": z.number().optional(), "timestamp": z.number().int(), "top": z.object({ "frequency": z.number().int(), "value": z.string() }).optional(), "uniqueCount": z.number().optional(), "uniqueProportion": z.number().optional(), "validCount": z.number().optional(), "valuesCount": z.number().optional(), "valuesPercentage": z.number().optional(), "variance": z.number().optional() })).optional(), "systemProfile": z.array(z.object({ "operation": z.enum(["UPDATE","INSERT","DELETE"]).optional(), "rowsAffected": z.number().int().optional(), "timestamp": z.number().int().optional() })).optional(), "tableProfile": z.object({ "columnCount": z.number().optional(), "createDateTime": z.string().datetime({ offset: true }).optional(), "profileSample": z.number().optional(), "profileSampleType": z.enum(["PERCENTAGE","ROWS"]).optional(), "rowCount": z.number().optional(), "sizeInByte": z.number().optional(), "timestamp": z.number().int() }) }).shape