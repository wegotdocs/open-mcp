import { z } from "zod"

export const toolName = `databases_update_evictionpolicy`
export const toolDescription = `Configure the Eviction Policy for a Redis Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/eviction_policy`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.") }).optional(), "body": z.object({ "eviction_policy": z.enum(["noeviction","allkeys_lru","allkeys_random","volatile_lru","volatile_random","volatile_ttl"]).describe("A string specifying the desired eviction policy for the Redis cluster.\n\n- `noeviction`: Don't evict any data, returns error when memory limit is reached.\n- `allkeys_lru:` Evict any key, least recently used (LRU) first.\n- `allkeys_random`: Evict keys in a random order.\n- `volatile_lru`: Evict keys with expiration only, least recently used (LRU) first.\n- `volatile_random`: Evict keys with expiration only in a random order.\n- `volatile_ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first.") }).optional() }).shape