import { z } from "zod";
export const toolName = `databases_patch_config`;
export const toolDescription = `Update the Database Configuration for an Existing Database`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/databases/{database_cluster_uuid}/config`;
export const method = `patch`;
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
        "database_cluster_uuid"
    ],
    "cookie": [],
    "body": [
        "config"
    ]
};
export const flatMap = {};
export const inputParams = {
    "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
    "config": z.union([z.object({ "backup_hour": z.number().int().gte(0).lte(23).describe("The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.").optional(), "backup_minute": z.number().int().gte(0).lte(59).describe("The minute of the backup hour when backup for the service starts. New backup  only starts if previous backup has already completed.").optional(), "sql_mode": z.string().regex(new RegExp("^[A-Z_]*(,[A-Z_]+)*$")).max(1024).describe("Global SQL mode. If empty, uses MySQL server defaults. Must only include uppercase alphabetic characters, underscores, and commas.").optional(), "connect_timeout": z.number().int().gte(2).lte(3600).describe("The number of seconds that the mysqld server waits for a connect packet before responding with bad handshake.").optional(), "default_time_zone": z.string().min(2).max(100).describe("Default server time zone, in the form of an offset from UTC (from -12:00 to +12:00), a time zone name (EST), or 'SYSTEM' to use the MySQL server default.").optional(), "group_concat_max_len": z.number().int().gte(4).lte(18446744073709552000).describe("The maximum permitted result length, in bytes, for the GROUP_CONCAT() function.").optional(), "information_schema_stats_expiry": z.number().int().gte(900).lte(31536000).describe("The time, in seconds, before cached statistics expire.").optional(), "innodb_ft_min_token_size": z.number().int().gte(0).lte(16).describe("The minimum length of words that an InnoDB FULLTEXT index stores.").optional(), "innodb_ft_server_stopword_table": z.string().regex(new RegExp("^.+/.+$")).max(1024).describe("The InnoDB FULLTEXT index stopword list for all InnoDB tables.").optional(), "innodb_lock_wait_timeout": z.number().int().gte(1).lte(3600).describe("The time, in seconds, that an InnoDB transaction waits for a row lock. before giving up.").optional(), "innodb_log_buffer_size": z.number().int().gte(1048576).lte(4294967295).describe("The size of the buffer, in bytes, that InnoDB uses to write to the log files. on disk.").optional(), "innodb_online_alter_log_max_size": z.number().int().gte(65536).lte(1099511627776).describe("The upper limit, in bytes, of the size of the temporary log files used during online DDL operations for InnoDB tables.").optional(), "innodb_print_all_deadlocks": z.boolean().describe("When enabled, records information about all deadlocks in InnoDB user transactions  in the error log. Disabled by default.").optional(), "innodb_rollback_on_timeout": z.boolean().describe("When enabled, transaction timeouts cause InnoDB to abort and roll back the entire transaction.").optional(), "interactive_timeout": z.number().int().gte(30).lte(604800).describe("The time, in seconds, the server waits for activity on an interactive. connection before closing it.").optional(), "internal_tmp_mem_storage_engine": z.enum(["TempTable", "MEMORY"]).describe("The storage engine for in-memory internal temporary tables.").optional(), "net_read_timeout": z.number().int().gte(1).lte(3600).describe("The time, in seconds, to wait for more data from an existing connection. aborting the read.").optional(), "net_write_timeout": z.number().int().gte(1).lte(3600).describe("The number of seconds to wait for a block to be written to a connection before aborting the write.").optional(), "sql_require_primary_key": z.boolean().describe("Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.").optional(), "wait_timeout": z.number().int().gte(1).lte(2147483).describe("The number of seconds the server waits for activity on a noninteractive connection before closing it.").optional(), "max_allowed_packet": z.number().int().gte(102400).lte(1073741824).describe("The size of the largest message, in bytes, that can be received by the server. Default is 67108864 (64M).").optional(), "max_heap_table_size": z.number().int().gte(1048576).lte(1073741824).describe("The maximum size, in bytes, of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)").optional(), "sort_buffer_size": z.number().int().gte(32768).lte(1073741824).describe("The sort buffer size, in bytes, for ORDER BY optimization. Default is 262144. (256K).").optional(), "tmp_table_size": z.number().int().gte(1048576).lte(1073741824).describe("The maximum size, in bytes, of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).").optional(), "slow_query_log": z.boolean().describe("When enabled, captures slow queries. When disabled, also truncates the mysql.slow_log table. Default is false.").optional(), "long_query_time": z.number().gte(0).lte(3600).describe("The time, in seconds, for a query to take to execute before  being captured by slow_query_logs. Default is 10 seconds.").optional(), "binlog_retention_period": z.number().gte(600).lte(86400).describe("The minimum amount of time, in seconds, to keep binlog entries before deletion.  This may be extended for services that require binlog entries for longer than the default, for example if using the MySQL Debezium Kafka connector.").optional(), "innodb_change_buffer_max_size": z.number().int().gte(0).lte(50).describe("Specifies the maximum size of the InnoDB change buffer as a percentage of the buffer pool.").optional(), "innodb_flush_neighbors": z.union([z.literal(0), z.literal(1), z.literal(2)]).describe("Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent.\n  - 0 &mdash; disables this functionality, dirty pages in the same extent are not flushed.\n  - 1 &mdash; flushes contiguous dirty pages in the same extent.\n  - 2 &mdash; flushes dirty pages in the same extent.").optional(), "innodb_read_io_threads": z.number().int().gte(1).lte(64).describe("The number of I/O threads for read operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.").optional(), "innodb_write_io_threads": z.number().int().gte(1).lte(64).describe("The number of I/O threads for write operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.").optional(), "innodb_thread_concurrency": z.number().int().gte(0).lte(1000).describe("Defines the maximum number of threads permitted inside of InnoDB. A value of 0 (the default) is interpreted as infinite concurrency (no limit). This variable is intended for performance  tuning on high concurrency systems.").optional(), "net_buffer_length": z.number().int().gte(1024).lte(1048576).describe("Start sizes of connection buffer and result buffer, must be multiple of 1024. Changing this parameter will lead to a restart of the MySQL service.").optional(), "log_output": z.enum(["INSIGHTS", "TABLE", "INSIGHTS,TABLE", "NONE"]).describe("Defines the destination for logs. Can be `INSIGHTS`, `TABLE`, or both (`INSIGHTS,TABLE`), or `NONE` to disable logs. To specify both destinations, use `INSIGHTS,TABLE` (order matters). Default is NONE.") }), z.object({ "autovacuum_freeze_max_age": z.number().int().gte(200000000).lte(1500000000).describe("Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.").optional(), "autovacuum_max_workers": z.number().int().gte(1).lte(20).describe("Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.").optional(), "autovacuum_naptime": z.number().int().gte(0).lte(86400).describe("Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute.").optional(), "autovacuum_vacuum_threshold": z.number().int().gte(0).lte(2147483647).describe("Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.").optional(), "autovacuum_analyze_threshold": z.number().int().gte(0).lte(2147483647).describe("Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.").optional(), "autovacuum_vacuum_scale_factor": z.number().gte(0).lte(1).describe("Specifies a fraction, in a decimal value, of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).").optional(), "autovacuum_analyze_scale_factor": z.number().gte(0).lte(1).describe("Specifies a fraction, in a decimal value, of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).").optional(), "autovacuum_vacuum_cost_delay": z.number().int().gte(-1).lte(100).describe("Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum_cost_delay value, which is 20 milliseconds.").optional(), "autovacuum_vacuum_cost_limit": z.number().int().gte(-1).lte(10000).describe("Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.").optional(), "backup_hour": z.number().int().gte(0).lte(23).describe("The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.").optional(), "backup_minute": z.number().int().gte(0).lte(59).describe("The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed.").optional(), "bgwriter_delay": z.number().int().gte(10).lte(10000).describe("Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms.").optional(), "bgwriter_flush_after": z.number().int().gte(0).lte(2048).describe("The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512.  Setting of 0 disables forced writeback.").optional(), "bgwriter_lru_maxpages": z.number().int().gte(0).lte(1073741823).describe("The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100.").optional(), "bgwriter_lru_multiplier": z.number().gte(0).lte(10).describe("The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.").optional(), "deadlock_timeout": z.number().int().gte(500).lte(1800000).describe("The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.").optional(), "default_toast_compression": z.enum(["lz4", "pglz"]).describe("Specifies the default TOAST compression method for values of compressible columns (the default is lz4).").optional(), "idle_in_transaction_session_timeout": z.number().int().gte(0).lte(604800000).describe("Time out sessions with open transactions after this number of milliseconds").optional(), "jit": z.boolean().describe("Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT).").optional(), "log_autovacuum_min_duration": z.number().int().gte(-1).lte(2147483647).describe("Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.").optional(), "log_error_verbosity": z.enum(["TERSE", "DEFAULT", "VERBOSE"]).describe("Controls the amount of detail written in the server log for each message that is logged.").optional(), "log_line_prefix": z.enum(["pid=%p,user=%u,db=%d,app=%a,client=%h", "%m [%p] %q[user=%u,db=%d,app=%a]", "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h"]).describe("Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc.").optional(), "log_min_duration_statement": z.number().int().gte(-1).lte(86400000).describe("Log statements that take more than this number of milliseconds to run. If -1, disables.").optional(), "max_files_per_process": z.number().int().gte(1000).lte(4096).describe("PostgreSQL maximum number of files that can be open per process.").optional(), "max_prepared_transactions": z.number().int().gte(0).lte(10000).describe("PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value.").optional(), "max_pred_locks_per_transaction": z.number().int().gte(64).lte(640).describe("PostgreSQL maximum predicate locks per transaction.").optional(), "max_locks_per_transaction": z.number().int().gte(64).lte(6400).describe("PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value.").optional(), "max_stack_depth": z.number().int().gte(2097152).lte(6291456).describe("Maximum depth of the stack in bytes.").optional(), "max_standby_archive_delay": z.number().int().gte(1).lte(43200000).describe("Max standby archive delay in milliseconds.").optional(), "max_standby_streaming_delay": z.number().int().gte(1).lte(43200000).describe("Max standby streaming delay in milliseconds.").optional(), "max_replication_slots": z.number().int().gte(8).lte(64).describe("PostgreSQL maximum replication slots.").optional(), "max_logical_replication_workers": z.number().int().gte(4).lte(64).describe("PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).").optional(), "max_parallel_workers": z.number().int().gte(0).lte(96).describe("Sets the maximum number of workers that the system can support for parallel queries.").optional(), "max_parallel_workers_per_gather": z.number().int().gte(0).lte(96).describe("Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.").optional(), "max_worker_processes": z.number().int().gte(8).lte(96).describe("Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value.").optional(), "pg_partman_bgw.role": z.string().regex(new RegExp("^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$")).max(64).describe("Controls which role to use for pg_partman's scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters.").optional(), "pg_partman_bgw.interval": z.number().int().gte(3600).lte(604800).describe("Sets the time interval to run pg_partman's scheduled tasks.").optional(), "pg_stat_statements.track": z.enum(["all", "top", "none"]).describe("Controls which statements are counted. Specify 'top' to track top-level statements (those issued directly by clients), 'all' to also track nested statements (such as statements invoked within functions), or 'none' to disable statement statistics collection. The default value is top.").optional(), "temp_file_limit": z.number().int().gte(-1).lte(2147483647).describe("PostgreSQL temporary file limit in KiB. If -1, sets to unlimited.").optional(), "timezone": z.string().max(64).describe("PostgreSQL service timezone").optional(), "track_activity_query_size": z.number().int().gte(1024).lte(10240).describe("Specifies the number of bytes reserved to track the currently executing command for each active session.").optional(), "track_commit_timestamp": z.enum(["off", "on"]).describe("Record commit time of transactions.").optional(), "track_functions": z.enum(["all", "pl", "none"]).describe("Enables tracking of function call counts and time used.").optional(), "track_io_timing": z.enum(["off", "on"]).describe("Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.").optional(), "max_wal_senders": z.number().int().gte(20).lte(64).describe("PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value.").optional(), "wal_sender_timeout": z.number().int().gte(0).lte(10800000).describe("Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000.").optional(), "wal_writer_delay": z.number().int().gte(10).lte(200).describe("WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance").optional(), "shared_buffers_percentage": z.number().gte(20).lte(60).describe("Percentage of total RAM that the database server uses for shared memory buffers.  Valid range is 20-60 (float), which corresponds to 20% - 60%.  This setting adjusts the shared_buffers configuration value.").optional(), "pgbouncer": z.object({ "server_reset_query_always": z.boolean().describe("Run server_reset_query (DISCARD ALL) in all pooling modes.").optional(), "ignore_startup_parameters": z.array(z.enum(["extra_float_digits", "search_path"]).describe("Enum of parameters to ignore when given in startup packet.")).max(32).describe("List of parameters to ignore when given in startup packet.").optional(), "min_pool_size": z.number().int().gte(0).lte(10000).describe("If current server connections are below this number, adds more. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.").optional(), "server_lifetime": z.number().int().gte(60).lte(86400).describe("The pooler closes any unused server connection that has been connected longer than this amount of seconds.").optional(), "server_idle_timeout": z.number().int().gte(0).lte(86400).describe("Drops server connections if they have been idle more than this many seconds.  If 0, timeout is disabled. ").optional(), "autodb_pool_size": z.number().int().gte(0).lte(10000).describe("If non-zero, automatically creates a pool of that size per user when a pool doesn't exist.").optional(), "autodb_pool_mode": z.enum(["session", "transaction", "statement"]).describe("PGBouncer pool mode").optional(), "autodb_max_db_connections": z.number().int().gte(0).lte(2147483647).describe("Only allows a maximum this many server connections per database (regardless of user). If 0, allows unlimited connections.").optional(), "autodb_idle_timeout": z.number().int().gte(0).lte(86400).describe("If the automatically-created database pools have been unused this many seconds, they are freed. If 0, timeout is disabled.").optional() }).describe("PGBouncer connection pooling settings").optional(), "work_mem": z.number().int().gte(1).lte(1024).describe("The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB).").optional(), "timescaledb": z.object({ "max_background_workers": z.number().int().gte(1).lte(4096).describe("The number of background workers for timescaledb operations.  Set to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.").optional() }).describe("TimescaleDB extension configuration values").optional(), "synchronous_replication": z.enum(["off", "quorum"]).describe("Synchronous replication type. Note that the service plan also needs to support synchronous replication.").optional(), "stat_monitor_enable": z.boolean().describe("Enable the pg_stat_monitor extension. <b>Enabling this extension will cause the cluster to be restarted.</b> When this extension is enabled, pg_stat_statements results for utility commands are unreliable.").optional(), "max_failover_replication_time_lag": z.number().int().gte(10).lte(9223372036854776000).describe("Number of seconds of master unavailability before triggering database failover to standby. The default value is 60.").optional() }), z.object({ "redis_maxmemory_policy": z.enum(["noeviction", "allkeys-lru", "allkeys-random", "volatile-lru", "volatile-random", "volatile-ttl"]).describe("A string specifying the desired eviction policy for the Redis cluster.\n\n- `noeviction`: Don't evict any data, returns error when memory limit is reached.\n- `allkeys-lru:` Evict any key, least recently used (LRU) first.\n- `allkeys-random`: Evict keys in a random order.\n- `volatile-lru`: Evict keys with expiration only, least recently used (LRU) first.\n- `volatile-random`: Evict keys with expiration only in a random order.\n- `volatile-ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first.").optional(), "redis_pubsub_client_output_buffer_limit": z.number().int().gte(32).lte(512).describe("Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.").optional(), "redis_number_of_databases": z.number().int().gte(1).lte(128).describe("Set number of redis databases. Changing this will cause a restart of redis service.").optional(), "redis_io_threads": z.number().int().gte(1).lte(32).describe("Redis IO thread count").optional(), "redis_lfu_log_factor": z.number().int().gte(0).lte(100).describe("Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies"), "redis_lfu_decay_time": z.number().int().gte(1).lte(120).describe("LFU maxmemory-policy counter decay time in minutes"), "redis_ssl": z.boolean().describe("Require SSL to access Redis.\n- When enabled, Redis accepts only SSL connections on port `25061`.\n- When disabled, port `25060` is opened for non-SSL connections, while port `25061` remains available for SSL connections.\n"), "redis_timeout": z.number().int().gte(0).lte(31536000).describe("Redis idle connection timeout in seconds"), "redis_notify_keyspace_events": z.string().regex(new RegExp("^[KEg\\$lshzxeA]*$")).max(32).describe("Set notify-keyspace-events option. Requires at least `K` or `E` and accepts any combination of the following options. Setting the parameter to `\"\"` disables notifications.\n- `K` &mdash; Keyspace events\n- `E` &mdash; Keyevent events\n- `g` &mdash; Generic commands (e.g. `DEL`, `EXPIRE`, `RENAME`, ...)\n- `{, "database_cluster_uuid", z.string().uuid().describe("A unique identifier for a database cluster."), "config",  & mdash), String, commands, n } - `l` & mdash)]), List, commands, n
} - `s` & mdash;
Set;
commands;
n - `h` & mdash;
Hash;
commands;
n - `z` & mdash;
Sorted;
set;
commands;
n - `t` & mdash;
Stream;
commands;
n - `d` & mdash;
Module;
key;
n - `x` & mdash;
Expired;
events;
n - `e` & mdash;
Evicted;
events;
n - `m` & mdash;
Key;
miss;
events;
n - `n` & mdash;
New;
key;
events;
n - `A` & mdash;
Alias;
for (`\"g$lshztxed\"`; "), "; redis_persistence)
    ": z.enum([";
off;
",";
rdb;
"]).describe(";
Creates;
an;
RDB;
dump;
of;
the;
database;
every;
10;
minutes;
that;
can;
be;
used;
to;
recover;
data;
after;
a;
node;
crash.The;
database;
does;
not;
create;
the;
dump;
if (no)
    keys;
have;
changed;
since;
the;
last;
dump.When;
set;
to `off`, the;
database;
cannot;
fork;
services, and;
data;
can;
be;
lost;
if (a)
    service;
is;
restarted;
or;
powered;
off.DigitalOcean;
Managed;
Caching;
databases;
do
    not;
while (support);
the;
Append;
Only;
File(AOF);
persistence;
method.;
").optional(), ";
redis_acl_channels_default;
": z.enum([";
allchannels;
",";
resetchannels;
"]).describe(";
Determines;
pub / sub;
channels;
' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn';
t;
affect;
Redis;
configuration;
acl - pubsub - ;
").optional() }), z.object({ ";
default_read_concern;
": z.enum([";
local;
",";
available;
",";
majority;
"]).describe(";
Specifies;
the;
consistency;
behavior;
of;
reads;
from;
the;
database.Data;
that;
is;
returned;
from;
the;
query;
with (may)
    or;
may;
not;
have;
been;
acknowledged;
by;
all;
nodes in the;
replicaset;
depending;
on;
this;
value.Learn;
more[here](https);
