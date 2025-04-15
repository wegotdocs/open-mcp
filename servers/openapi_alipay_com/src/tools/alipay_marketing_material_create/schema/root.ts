import { z } from "zod"

export const inputParams = {
  "material_fields": z.array(z.object({ "field_name": z.string().describe("素材字段名称，来源于素材规范定义的字段名称。注意一次素材提报中字段名称不能重复。").optional(), "field_value": z.array(z.string()).describe("素材字段值，素材字段提报的实际值，支持多值，具体的要求请查看素材规范或对应的产品文档。").optional() })).describe("素材字段列表，素材提报的具体内容，包含三种类型：图片、文本、链接。图片类型，则根据“图片资源上传接口”中返回的resource_id字段值进行素材字段的设值。文本或链接类型，则按照实际需要设值即可，需满足具体的规范要求。规范要求详情请参见产品文档。").optional(),
  "material_name": z.string().describe("素材名称，接入方自行生成，建议命名时遵循一定的规律以方便管理。").optional(),
  "material_spec_id": z.string().describe("素材规范ID，用于标识具体场景下的素材规范，根据具体的使用场景获取对应的素材规范ID。").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制，相同单号会返回上一次的结果，接入方需保证单号唯一。").optional()
}