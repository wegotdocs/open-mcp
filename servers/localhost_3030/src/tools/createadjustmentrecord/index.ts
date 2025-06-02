import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createadjustmentrecord",
  "toolDescription": "Criar Registro de Ajuste",
  "baseUrl": "http://localhost:3030",
  "path": "/informational/adjustment",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "chargeback": "chargeback",
      "company_id": "company_id",
      "workspace_id": "workspace_id",
      "application_id": "application_id",
      "correlation_id": "correlation_id",
      "nsu": "nsu",
      "authorization_code": "authorization_code",
      "tid": "tid",
      "brand": "brand",
      "acquirer": "acquirer",
      "payment_method": "payment_method",
      "installments": "installments",
      "current_installment": "current_installment",
      "paid_amount": "paid_amount",
      "total_invoice_amount": "total_invoice_amount",
      "interest_rate": "interest_rate",
      "transaction_date": "transaction_date",
      "original_date": "original_date",
      "transaction_type": "transaction_type",
      "reference_id": "reference_id",
      "receita_tarifa_servico_b2c": "receita_tarifa_servico_b2c",
      "receita_taxa_parcelamento": "receita_taxa_parcelamento",
      "receita_b2b": "receita_b2b",
      "receita_aluguel_pos": "receita_aluguel_pos",
      "mdr": "mdr",
      "anticipation_expenses": "anticipation_expenses",
      "tax_expenses": "tax_expenses",
      "transfer_date": "transfer_date",
      "liquid_final_amount": "liquid_final_amount",
      "adjustment_origin": "adjustment_origin",
      "adjustment_detail": "adjustment_detail",
      "export_date": "export_date",
      "nseq_pedido": "nseq_pedido",
      "entity_document": "entity_document",
      "tipo_client_b2c": "tipo_client_b2c",
      "invoice_count": "invoice_count",
      "capture_date": "capture_date"
    }
  },
  inputParamsSchema
}

export default tool