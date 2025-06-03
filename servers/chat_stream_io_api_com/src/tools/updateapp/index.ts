import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateapp",
  "toolDescription": "Update App Settings",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/app",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    }
  ],
  "paramsMap": {
    "body": {
      "allowed_flag_reasons": "allowed_flag_reasons",
      "apn_config": "apn_config",
      "async_moderation_config": "async_moderation_config",
      "async_url_enrich_enabled": "async_url_enrich_enabled",
      "auto_translation_enabled": "auto_translation_enabled",
      "before_message_send_hook_url": "before_message_send_hook_url",
      "cdn_expiration_seconds": "cdn_expiration_seconds",
      "channel_hide_members_only": "channel_hide_members_only",
      "custom_action_handler_url": "custom_action_handler_url",
      "datadog_info": "datadog_info",
      "disable_auth_checks": "disable_auth_checks",
      "disable_permissions_checks": "disable_permissions_checks",
      "enforce_unique_usernames": "enforce_unique_usernames",
      "feeds_moderation_enabled": "feeds_moderation_enabled",
      "feeds_v2_region": "feeds_v2_region",
      "file_upload_config": "file_upload_config",
      "firebase_config": "firebase_config",
      "grants": "grants",
      "guest_user_creation_disabled": "guest_user_creation_disabled",
      "huawei_config": "huawei_config",
      "image_moderation_block_labels": "image_moderation_block_labels",
      "image_moderation_enabled": "image_moderation_enabled",
      "image_moderation_labels": "image_moderation_labels",
      "image_upload_config": "image_upload_config",
      "migrate_permissions_to_v2": "migrate_permissions_to_v2",
      "moderation_dashboard_preferences": "moderation_dashboard_preferences",
      "moderation_enabled": "moderation_enabled",
      "moderation_webhook_url": "moderation_webhook_url",
      "multi_tenant_enabled": "multi_tenant_enabled",
      "permission_version": "permission_version",
      "push_config": "push_config",
      "reminders_interval": "reminders_interval",
      "reminders_max_members": "reminders_max_members",
      "revoke_tokens_issued_before": "revoke_tokens_issued_before",
      "sns_key": "sns_key",
      "sns_secret": "sns_secret",
      "sns_topic_arn": "sns_topic_arn",
      "sqs_key": "sqs_key",
      "sqs_secret": "sqs_secret",
      "sqs_url": "sqs_url",
      "user_search_disallowed_roles": "user_search_disallowed_roles",
      "webhook_events": "webhook_events",
      "webhook_url": "webhook_url",
      "xiaomi_config": "xiaomi_config"
    }
  },
  inputParamsSchema
}

export default tool