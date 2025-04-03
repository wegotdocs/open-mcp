import { z } from "zod"

export const toolName = `listtestdefinitions`
export const toolDescription = `List test definitions`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testDefinitions`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "include",
    "entityType",
    "testPlatform",
    "supportedDataType"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number test definitions returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of test definitions before this cursor").optional(), "after": z.string().describe("Returns list of test definitions after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities."), "entityType": z.enum(["TABLE","COLUMN"]).describe("Filter by entityType.").optional(), "testPlatform": z.enum(["OpenMetadata","GreatExpectations","DBT","Deequ","Soda","Other"]).describe("Filter by a test platform").optional(), "supportedDataType": z.enum(["NUMBER","TINYINT","SMALLINT","INT","BIGINT","BYTEINT","BYTES","FLOAT","DOUBLE","DECIMAL","NUMERIC","TIMESTAMP","TIMESTAMPZ","TIME","DATE","DATETIME","INTERVAL","STRING","MEDIUMTEXT","TEXT","CHAR","LONG","VARCHAR","BOOLEAN","BINARY","VARBINARY","ARRAY","BLOB","LONGBLOB","MEDIUMBLOB","MAP","STRUCT","UNION","SET","GEOGRAPHY","ENUM","JSON","UUID","VARIANT","GEOMETRY","BYTEA","AGGREGATEFUNCTION","ERROR","FIXED","RECORD","NULL","SUPER","HLLSKETCH","PG_LSN","PG_SNAPSHOT","TSQUERY","TXID_SNAPSHOT","XML","MACADDR","TSVECTOR","UNKNOWN","CIDR","INET","CLOB","ROWID","LOWCARDINALITY","YEAR","POINT","POLYGON","TUPLE","SPATIAL","TABLE","NTEXT","IMAGE","IPV4","IPV6","DATETIMERANGE"]).describe("Filter tests definition by supported data type").optional() }).shape