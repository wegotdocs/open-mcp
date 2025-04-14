import { z } from "zod"

export const inputParams = {
  "email": z.string().describe("电子邮箱").optional(),
  "id_card_no": z.string().describe("身份证号").optional(),
  "mobile": z.string().describe("手机号").optional(),
  "name": z.string().describe("联系人名字").optional(),
  "phone": z.string().describe("电话").optional(),
  "tag": z.array(z.string()).describe("商户联系人业务标识枚举，表示商户联系人的职责").optional(),
  "type": z.string().describe("联系人类型，取值范围：LEGAL_PERSON：法人；CONTROLLER：实际控制人；AGENT：代理人；OTHER：其他").optional()
}