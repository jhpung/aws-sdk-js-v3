// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteAddonInstanceRequest, DeleteAddonInstanceResponse } from "../models/models_0";
import { de_DeleteAddonInstanceCommand, se_DeleteAddonInstanceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAddonInstanceCommand}.
 */
export interface DeleteAddonInstanceCommandInput extends DeleteAddonInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddonInstanceCommand}.
 */
export interface DeleteAddonInstanceCommandOutput extends DeleteAddonInstanceResponse, __MetadataBearer {}

/**
 * <p>Deletes an Add On instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteAddonInstanceCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteAddonInstanceCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // DeleteAddonInstanceRequest
 *   AddonInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAddonInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAddonInstanceCommandInput - {@link DeleteAddonInstanceCommandInput}
 * @returns {@link DeleteAddonInstanceCommandOutput}
 * @see {@link DeleteAddonInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonInstanceCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class DeleteAddonInstanceCommand extends $Command
  .classBuilder<
    DeleteAddonInstanceCommandInput,
    DeleteAddonInstanceCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "DeleteAddonInstance", {})
  .n("MailManagerClient", "DeleteAddonInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAddonInstanceCommand)
  .de(de_DeleteAddonInstanceCommand)
  .build() {}
