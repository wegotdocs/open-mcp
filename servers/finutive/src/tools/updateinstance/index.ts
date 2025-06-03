import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateinstance",
  "toolDescription": "Update instance configuration",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance",
  "method": "patch",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "agency_email_domain": "agency_email_domain",
      "no_recurrent_invoices_serie": "no_recurrent_invoices_serie",
      "recurrent_invoices_serie": "recurrent_invoices_serie",
      "rectifying_invoices_serie": "rectifying_invoices_serie",
      "churn_rate": "churn_rate",
      "emission_date_instance": "emission_date_instance",
      "main_initiative": "main_initiative",
      "nps_feedback_email": "nps_feedback_email",
      "nps_negative_feedback_email": "nps_negative_feedback_email",
      "nps_manager_negative_feedback_email": "nps_manager_negative_feedback_email",
      "nps_service_negative_feedback_email": "nps_service_negative_feedback_email",
      "nps_positive_feedback_survey_url": "nps_positive_feedback_survey_url",
      "nps_negative_feedback_survey_url": "nps_negative_feedback_survey_url",
      "email_promotions": "email_promotions",
      "user_message_products_invoices": "user_message_products_invoices",
      "invoices_email": "invoices_email",
      "services_email": "services_email",
      "new_user_email": "new_user_email",
      "contract_signed_email": "contract_signed_email",
      "product_requisite_timetracker": "product_requisite_timetracker",
      "sage_enable": "sage_enable",
      "sage_domain": "sage_domain",
      "sage_domain_pre": "sage_domain_pre",
      "sage_instance": "sage_instance",
      "sage_write_invoices": "sage_write_invoices",
      "sage_billing_type": "sage_billing_type",
      "sage_accounting_id": "sage_accounting_id",
      "email_no_destinataries": "email_no_destinataries",
      "banner_mgm": "banner_mgm",
      "banner_funnel": "banner_funnel",
      "banner_funnel_en": "banner_funnel_en",
      "banner_mgm_en": "banner_mgm_en",
      "commercial_flow": "commercial_flow",
      "email_due": "email_due",
      "email_model_036": "email_model_036",
      "date_new_flow": "date_new_flow",
      "main_color": "main_color",
      "secondary_color": "secondary_color",
      "third_color": "third_color",
      "internal_logo": "internal_logo",
      "logo_favicon": "logo_favicon",
      "logo_landing_page": "logo_landing_page",
      "logo_landing_page_contrast": "logo_landing_page_contrast",
      "logo_square": "logo_square",
      "loader_gif": "loader_gif",
      "logo_web_app": "logo_web_app",
      "hero_landing_page": "hero_landing_page",
      "email_params_main_logo": "email_params_main_logo",
      "email_params_message": "email_params_message",
      "email_params_email": "email_params_email",
      "email_params_url": "email_params_url",
      "email_params_privacy_policy": "email_params_privacy_policy",
      "email_params_privacy_form": "email_params_privacy_form",
      "email_params_color": "email_params_color"
    }
  },
  inputParamsSchema
}

export default tool