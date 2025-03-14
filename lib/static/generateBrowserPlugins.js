"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _slash = _interopRequireDefault(require("slash"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _plugins = _interopRequireDefault(require("./plugins"));

//
var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var _state, plugins, config, pluginImports, recurse, pluginsText, pluginImportsText, file, targetPath;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _plugins["default"].beforePrepareBrowserPlugins(state);

          case 2:
            state = _context.sent;
            _state = state, plugins = _state.plugins, config = _state.config; // A deduped list of pluginImports

            pluginImports = [];

            recurse = function recurse(plugins) {
              return (// Return an array of plugins
                "[".concat(plugins.map(function (plugin) {
                  var browserLocation = plugin.browserLocation; // Add the plugin to the list of pluginImports

                  var pluginIndex = browserLocation ? pluginImports.indexOf(browserLocation) : -1;

                  if (pluginIndex === -1 && browserLocation) {
                    pluginImports.push((0, _slash["default"])(_path["default"].relative(config.paths.ARTIFACTS, browserLocation)));
                    pluginIndex = pluginImports.length - 1;
                  }

                  var location = plugin.location,
                      plugins = plugin.plugins,
                      options = plugin.options; // IIF to return the final plugin

                  return "{\n        location: \"".concat((0, _slash["default"])(_path["default"].relative(config.paths.ARTIFACTS, location)), "\",\n        plugins: ").concat(recurse(plugins || []), ",\n        hooks: ").concat(browserLocation ? "plugin".concat(pluginIndex, "(").concat(JSON.stringify(options), ")") : "{}", "\n      }");
                }).join(',\n'), "]")
              );
            }; // Create the pluginsText


            pluginsText = recurse(plugins || []); // Create the pluginImportsText

            pluginImportsText = pluginImports.map(function (imp, index) {
              return "import plugin".concat(index, " from '").concat(imp, "'");
            }).join('\n'); // Create the file text

            file = "// Imports\n".concat(pluginImportsText, "\n\n// Plugins\nconst plugins = ").concat(pluginsText, "\n\n// Export em!\nexport default plugins");
            targetPath = _path["default"].join(process.env.REACT_STATIC_PLUGINS_PATH);
            _context.next = 12;
            return _fsExtra["default"].remove(targetPath);

          case 12:
            _context.next = 14;
            return _fsExtra["default"].outputFile(targetPath, file);

          case 14:
            return _context.abrupt("return", _plugins["default"].afterPrepareBrowserPlugins(state));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2VuZXJhdGVCcm93c2VyUGx1Z2lucy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImNvcmVQbHVnaW5zIiwiYmVmb3JlUHJlcGFyZUJyb3dzZXJQbHVnaW5zIiwicGx1Z2lucyIsImNvbmZpZyIsInBsdWdpbkltcG9ydHMiLCJyZWN1cnNlIiwibWFwIiwicGx1Z2luIiwiYnJvd3NlckxvY2F0aW9uIiwicGx1Z2luSW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInBhdGgiLCJyZWxhdGl2ZSIsInBhdGhzIiwiQVJUSUZBQ1RTIiwibGVuZ3RoIiwibG9jYXRpb24iLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJwbHVnaW5zVGV4dCIsInBsdWdpbkltcG9ydHNUZXh0IiwiaW1wIiwiaW5kZXgiLCJmaWxlIiwidGFyZ2V0UGF0aCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfUExVR0lOU19QQVRIIiwiZnMiLCJyZW1vdmUiLCJvdXRwdXRGaWxlIiwiYWZ0ZXJQcmVwYXJlQnJvd3NlclBsdWdpbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFEQTs7Ozs7OytCQUdlLGlCQUFNQSxLQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQyxvQkFBWUMsMkJBQVosQ0FBd0NGLEtBQXhDLENBREQ7O0FBQUE7QUFDYkEsWUFBQUEsS0FEYTtBQUFBLHFCQUdlQSxLQUhmLEVBR0xHLE9BSEssVUFHTEEsT0FISyxFQUdJQyxNQUhKLFVBR0lBLE1BSEosRUFLYjs7QUFDTUMsWUFBQUEsYUFOTyxHQU1TLEVBTlQ7O0FBUVBDLFlBQUFBLE9BUk8sR0FRRyxTQUFWQSxPQUFVLENBQUFILE9BQU87QUFBQSxxQkFDckI7QUFEcUIsMkJBRWpCQSxPQUFPLENBQ1JJLEdBREMsQ0FDRyxVQUFBQyxNQUFNLEVBQUk7QUFBQSxzQkFDTEMsZUFESyxHQUNlRCxNQURmLENBQ0xDLGVBREssRUFHYjs7QUFDQSxzQkFBSUMsV0FBVyxHQUFHRCxlQUFlLEdBQzdCSixhQUFhLENBQUNNLE9BQWQsQ0FBc0JGLGVBQXRCLENBRDZCLEdBRTdCLENBQUMsQ0FGTDs7QUFHQSxzQkFBSUMsV0FBVyxLQUFLLENBQUMsQ0FBakIsSUFBc0JELGVBQTFCLEVBQTJDO0FBQ3pDSixvQkFBQUEsYUFBYSxDQUFDTyxJQUFkLENBQ0UsdUJBQU1DLGlCQUFLQyxRQUFMLENBQWNWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhQyxTQUEzQixFQUFzQ1AsZUFBdEMsQ0FBTixDQURGO0FBR0FDLG9CQUFBQSxXQUFXLEdBQUdMLGFBQWEsQ0FBQ1ksTUFBZCxHQUF1QixDQUFyQztBQUNEOztBQVpZLHNCQWNMQyxRQWRLLEdBYzBCVixNQWQxQixDQWNMVSxRQWRLO0FBQUEsc0JBY0tmLE9BZEwsR0FjMEJLLE1BZDFCLENBY0tMLE9BZEw7QUFBQSxzQkFjY2dCLE9BZGQsR0FjMEJYLE1BZDFCLENBY2NXLE9BZGQsRUFnQmI7O0FBQ0EsMERBQ2EsdUJBQU1OLGlCQUFLQyxRQUFMLENBQWNWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhQyxTQUEzQixFQUFzQ0UsUUFBdEMsQ0FBTixDQURiLG1DQUVXWixPQUFPLENBQUNILE9BQU8sSUFBSSxFQUFaLENBRmxCLCtCQUlFTSxlQUFlLG1CQUNGQyxXQURFLGNBQ2FVLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixPQUFmLENBRGIsYUFKakI7QUFTRCxpQkEzQkMsRUE0QkRHLElBNUJDLENBNEJJLEtBNUJKLENBRmlCO0FBQUE7QUFBQSxhQVJWLEVBd0NiOzs7QUFDTUMsWUFBQUEsV0F6Q08sR0F5Q09qQixPQUFPLENBQUNILE9BQU8sSUFBSSxFQUFaLENBekNkLEVBMkNiOztBQUNNcUIsWUFBQUEsaUJBNUNPLEdBNENhbkIsYUFBYSxDQUNwQ0UsR0FEdUIsQ0FDbkIsVUFBQ2tCLEdBQUQsRUFBTUMsS0FBTjtBQUFBLDRDQUFnQ0EsS0FBaEMsb0JBQStDRCxHQUEvQztBQUFBLGFBRG1CLEVBRXZCSCxJQUZ1QixDQUVsQixJQUZrQixDQTVDYixFQWdEYjs7QUFDTUssWUFBQUEsSUFqRE8seUJBa0RiSCxpQkFsRGEsNkNBcURHRCxXQXJESDtBQTBEUEssWUFBQUEsVUExRE8sR0EwRE1mLGlCQUFLUyxJQUFMLENBQVVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx5QkFBdEIsQ0ExRE47QUFBQTtBQUFBLG1CQTJEUEMsb0JBQUdDLE1BQUgsQ0FBVUwsVUFBVixDQTNETzs7QUFBQTtBQUFBO0FBQUEsbUJBNERQSSxvQkFBR0UsVUFBSCxDQUFjTixVQUFkLEVBQTBCRCxJQUExQixDQTVETzs7QUFBQTtBQUFBLDZDQThETjFCLG9CQUFZa0MsMEJBQVosQ0FBdUNuQyxLQUF2QyxDQTlETTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBzbGFzaCBmcm9tICdzbGFzaCdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbi8vXG5pbXBvcnQgY29yZVBsdWdpbnMgZnJvbSAnLi9wbHVnaW5zJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBzdGF0ZSA9PiB7XG4gIHN0YXRlID0gYXdhaXQgY29yZVBsdWdpbnMuYmVmb3JlUHJlcGFyZUJyb3dzZXJQbHVnaW5zKHN0YXRlKVxuXG4gIGNvbnN0IHsgcGx1Z2lucywgY29uZmlnIH0gPSBzdGF0ZVxuXG4gIC8vIEEgZGVkdXBlZCBsaXN0IG9mIHBsdWdpbkltcG9ydHNcbiAgY29uc3QgcGx1Z2luSW1wb3J0cyA9IFtdXG5cbiAgY29uc3QgcmVjdXJzZSA9IHBsdWdpbnMgPT5cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcGx1Z2luc1xuICAgIGBbJHtwbHVnaW5zXG4gICAgICAubWFwKHBsdWdpbiA9PiB7XG4gICAgICAgIGNvbnN0IHsgYnJvd3NlckxvY2F0aW9uIH0gPSBwbHVnaW5cblxuICAgICAgICAvLyBBZGQgdGhlIHBsdWdpbiB0byB0aGUgbGlzdCBvZiBwbHVnaW5JbXBvcnRzXG4gICAgICAgIGxldCBwbHVnaW5JbmRleCA9IGJyb3dzZXJMb2NhdGlvblxuICAgICAgICAgID8gcGx1Z2luSW1wb3J0cy5pbmRleE9mKGJyb3dzZXJMb2NhdGlvbilcbiAgICAgICAgICA6IC0xXG4gICAgICAgIGlmIChwbHVnaW5JbmRleCA9PT0gLTEgJiYgYnJvd3NlckxvY2F0aW9uKSB7XG4gICAgICAgICAgcGx1Z2luSW1wb3J0cy5wdXNoKFxuICAgICAgICAgICAgc2xhc2gocGF0aC5yZWxhdGl2ZShjb25maWcucGF0aHMuQVJUSUZBQ1RTLCBicm93c2VyTG9jYXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgICBwbHVnaW5JbmRleCA9IHBsdWdpbkltcG9ydHMubGVuZ3RoIC0gMVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBsb2NhdGlvbiwgcGx1Z2lucywgb3B0aW9ucyB9ID0gcGx1Z2luXG5cbiAgICAgICAgLy8gSUlGIHRvIHJldHVybiB0aGUgZmluYWwgcGx1Z2luXG4gICAgICAgIHJldHVybiBge1xuICAgICAgICBsb2NhdGlvbjogXCIke3NsYXNoKHBhdGgucmVsYXRpdmUoY29uZmlnLnBhdGhzLkFSVElGQUNUUywgbG9jYXRpb24pKX1cIixcbiAgICAgICAgcGx1Z2luczogJHtyZWN1cnNlKHBsdWdpbnMgfHwgW10pfSxcbiAgICAgICAgaG9va3M6ICR7XG4gICAgICAgICAgYnJvd3NlckxvY2F0aW9uXG4gICAgICAgICAgICA/IGBwbHVnaW4ke3BsdWdpbkluZGV4fSgke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMpfSlgXG4gICAgICAgICAgICA6IGB7fWBcbiAgICAgICAgfVxuICAgICAgfWBcbiAgICAgIH0pXG4gICAgICAuam9pbignLFxcbicpfV1gXG5cbiAgLy8gQ3JlYXRlIHRoZSBwbHVnaW5zVGV4dFxuICBjb25zdCBwbHVnaW5zVGV4dCA9IHJlY3Vyc2UocGx1Z2lucyB8fCBbXSlcblxuICAvLyBDcmVhdGUgdGhlIHBsdWdpbkltcG9ydHNUZXh0XG4gIGNvbnN0IHBsdWdpbkltcG9ydHNUZXh0ID0gcGx1Z2luSW1wb3J0c1xuICAgIC5tYXAoKGltcCwgaW5kZXgpID0+IGBpbXBvcnQgcGx1Z2luJHtpbmRleH0gZnJvbSAnJHtpbXB9J2ApXG4gICAgLmpvaW4oJ1xcbicpXG5cbiAgLy8gQ3JlYXRlIHRoZSBmaWxlIHRleHRcbiAgY29uc3QgZmlsZSA9IGAvLyBJbXBvcnRzXG4ke3BsdWdpbkltcG9ydHNUZXh0fVxuXG4vLyBQbHVnaW5zXG5jb25zdCBwbHVnaW5zID0gJHtwbHVnaW5zVGV4dH1cblxuLy8gRXhwb3J0IGVtIVxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luc2BcblxuICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QTFVHSU5TX1BBVEgpXG4gIGF3YWl0IGZzLnJlbW92ZSh0YXJnZXRQYXRoKVxuICBhd2FpdCBmcy5vdXRwdXRGaWxlKHRhcmdldFBhdGgsIGZpbGUpXG5cbiAgcmV0dXJuIGNvcmVQbHVnaW5zLmFmdGVyUHJlcGFyZUJyb3dzZXJQbHVnaW5zKHN0YXRlKVxufVxuIl19