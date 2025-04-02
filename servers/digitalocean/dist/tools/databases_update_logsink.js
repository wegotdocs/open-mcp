import { z } from "zod";
export const toolName = `databases_update_logsink`;
export const toolDescription = `Update Logsink for a Database Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/logsink/{logsink_id}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "database_cluster_uuid",
        "logsink_id"
    ],
    "cookie": [],
    "body": [
        "config"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "logsink_id": z.string().describe("A unique identifier for a logsink of a database cluster"), "config": z.union([z.object({ "server": z.string().describe("DNS name or IPv4 address of the rsyslog server"), "port": z.number().int().lte(65535).describe("The internal port on which the rsyslog server is listening"), "tls": z.boolean().describe("Use TLS (as the messages are not filtered and may contain sensitive information, it is highly recommended to set this to true if the remote server supports it)"), "format": z.enum(["rfc5424", "rfc3164", "custom"]).describe("Message format used by the server, this can be either rfc3164 (the old BSD style message format), `rfc5424` (current syslog message format) or custom"), "logline": z.string().describe("Conditional (required if `format` == `custom`).\n\nSyslog log line template for a custom format, supporting limited rsyslog style templating (using `%tag%`). Supported tags are: `HOSTNAME`, `app-name`, `msg`, `msgid`, `pri`, `procid`, `structured-data`, `timestamp` and `timestamp:::date-rfc3339`.\n").optional(), "sd": z.string().describe("content of the structured data block of rfc5424 message").optional(), "ca": z.string().describe("PEM encoded CA certificate").optional(), "key": z.string().describe("(PEM format) client key if the server requires client authentication").optional(), "cert": z.string().describe("(PEM format) client cert to use").optional() }), z.object({ "url": z.string().describe("Elasticsearch connection URL"), "index_prefix": z.string().describe("Elasticsearch index prefix"), "index_days_max": z.number().int().gte(1).lte(10000).describe("Maximum number of days of logs to keep"), "timeout": z.number().gte(10).lte(120).describe("Elasticsearch request timeout limit"), "ca": z.string().describe("PEM encoded CA certificate").optional() }), z.object({ "url": z.string().describe("Opensearch connection URL"), "index_prefix": z.string().describe("Opensearch index prefix"), "index_days_max": z.number().int().gte(1).lte(10000).describe("Maximum number of days of logs to keep"), "timeout": z.number().gte(10).lte(120).describe("Opensearch request timeout limit"), "ca": z.string().describe("PEM encoded CA certificate").optional() })]) }).shape;
