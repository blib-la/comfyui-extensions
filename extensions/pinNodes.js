/**
 * Coded with love by Failfa.st
 * LICENSE: AGPL 3.0
 * https://github.com/failfa-st/failfast-comfyui-extensions/blob/main/LICENSE
 *
 * Visit https://github.com/failfa-st/failfast-comfyui-extensions for more info
 *
 * Homepage:  https://failfa.st
 * GitHub: https://github.com/failfa-st
 * Discord: https://discord.com/invite/m3TBB9XEkb
 */
import { app } from "../scripts/app.js";
import { $el } from "../scripts/ui.js";

/**
 * Pin/Unpin all nodes on canvas
 */

const pinNodesName = "Failfast.pinNodes";

app.registerExtension({
  name: pinNodesName,
  async setup(app) {
    const getCanvasMenuOptions = LGraphCanvas.prototype.getCanvasMenuOptions;
    LGraphCanvas.prototype.getCanvasMenuOptions = function () {
      const menuOptions = getCanvasMenuOptions.apply(this, arguments);
      menuOptions.push(
        {
          content: "Pin all Nodes",
          callback: () => {
            app.graph._nodes.forEach((node) => {
              node.flags.pinned = true;
            });
          },
        },
        {
          content: "Unpin all Nodes",
          callback: () => {
            app.graph._nodes.forEach((node) => {
              node.flags.pinned = false;
            });
          },
        },
      );

      return menuOptions;
    };
  },
});
