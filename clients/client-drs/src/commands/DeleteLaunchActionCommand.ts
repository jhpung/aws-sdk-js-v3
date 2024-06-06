// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLaunchActionRequest, DeleteLaunchActionResponse } from "../models/models_0";
import { de_DeleteLaunchActionCommand, se_DeleteLaunchActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchActionCommand}.
 */
export interface DeleteLaunchActionCommandInput extends DeleteLaunchActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchActionCommand}.
 */
export interface DeleteLaunchActionCommandOutput extends DeleteLaunchActionResponse, __MetadataBearer {}

/**
 * <p>Deletes a resource launch action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteLaunchActionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteLaunchActionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // DeleteLaunchActionRequest
 *   resourceId: "STRING_VALUE", // required
 *   actionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchActionCommandInput - {@link DeleteLaunchActionCommandInput}
 * @returns {@link DeleteLaunchActionCommandOutput}
 * @see {@link DeleteLaunchActionCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchActionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class DeleteLaunchActionCommand extends $Command
  .classBuilder<
    DeleteLaunchActionCommandInput,
    DeleteLaunchActionCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "DeleteLaunchAction", {})
  .n("DrsClient", "DeleteLaunchActionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLaunchActionCommand)
  .de(de_DeleteLaunchActionCommand)
  .build() {}
