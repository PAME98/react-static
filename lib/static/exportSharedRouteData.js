"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _utils = require("../utils");

var _default =
/*#__PURE__*/
function () {
  var _exportSharedRouteData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var _state$config, outputFileRate, STATIC_DATA, sharedDataByHash, sharedDataArr, jsonProgress;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _state$config = state.config, outputFileRate = _state$config.outputFileRate, STATIC_DATA = _state$config.paths.STATIC_DATA, sharedDataByHash = state.sharedDataByHash; // Write all shared props to file

            sharedDataArr = Array.from(sharedDataByHash);

            if (!sharedDataArr.length) {
              _context2.next = 9;
              break;
            }

            console.log('Exporting Shared Route Data...');
            jsonProgress = (0, _utils.progress)(sharedDataArr.length);
            (0, _utils.time)(_chalk["default"].green("[\u2713] Shared Route Data Exported"));
            _context2.next = 8;
            return (0, _utils.poolAll)(sharedDataArr.map(function (cachedProp) {
              return (
                /*#__PURE__*/
                (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee() {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _fsExtra["default"].outputFile(_path["default"].join(STATIC_DATA, "".concat(cachedProp[1].hash, ".json")), JSON.stringify(cachedProp[1].data));

                        case 2:
                          jsonProgress.tick();

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))
              );
            }), Number(outputFileRate));

          case 8:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Shared Route Data Exported"));

          case 9:
            return _context2.abrupt("return", state);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  function exportSharedRouteData(_x) {
    return _exportSharedRouteData.apply(this, arguments);
  }

  return exportSharedRouteData;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0U2hhcmVkUm91dGVEYXRhLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiY29uZmlnIiwib3V0cHV0RmlsZVJhdGUiLCJTVEFUSUNfREFUQSIsInBhdGhzIiwic2hhcmVkRGF0YUJ5SGFzaCIsInNoYXJlZERhdGFBcnIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwianNvblByb2dyZXNzIiwiY2hhbGsiLCJncmVlbiIsIm1hcCIsImNhY2hlZFByb3AiLCJmcyIsIm91dHB1dEZpbGUiLCJwYXRoIiwiam9pbiIsImhhc2giLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInRpY2siLCJOdW1iZXIiLCJleHBvcnRTaGFyZWRSb3V0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7OzsrQkFFZ0Isa0JBQXFDQSxLQUFyQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBT1ZBLEtBUFUsQ0FFWkMsTUFGWSxFQUdWQyxjQUhVLGlCQUdWQSxjQUhVLEVBSURDLFdBSkMsaUJBSVZDLEtBSlUsQ0FJREQsV0FKQyxFQU1aRSxnQkFOWSxHQU9WTCxLQVBVLENBTVpLLGdCQU5ZLEVBUWQ7O0FBQ01DLFlBQUFBLGFBVFEsR0FTUUMsS0FBSyxDQUFDQyxJQUFOLENBQVdILGdCQUFYLENBVFI7O0FBQUEsaUJBV1ZDLGFBQWEsQ0FBQ0csTUFYSjtBQUFBO0FBQUE7QUFBQTs7QUFZWkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7QUFDTUMsWUFBQUEsWUFiTSxHQWFTLHFCQUFTTixhQUFhLENBQUNHLE1BQXZCLENBYlQ7QUFjWiw2QkFBS0ksa0JBQU1DLEtBQU4sQ0FBWSxxQ0FBWixDQUFMO0FBZFk7QUFBQSxtQkFnQk4sb0JBQ0pSLGFBQWEsQ0FBQ1MsR0FBZCxDQUFrQixVQUFBQyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDeEJDLG9CQUFHQyxVQUFILENBQ0pDLGlCQUFLQyxJQUFMLENBQVVqQixXQUFWLFlBQTBCYSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNLLElBQXhDLFdBREksRUFFSkMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1EsSUFBN0IsQ0FGSSxDQUR3Qjs7QUFBQTtBQUs5QlosMEJBQUFBLFlBQVksQ0FBQ2EsSUFBYjs7QUFMOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUFBLGFBQTVCLENBREksRUFRSkMsTUFBTSxDQUFDeEIsY0FBRCxDQVJGLENBaEJNOztBQUFBO0FBMEJaLGdDQUFRVyxrQkFBTUMsS0FBTixDQUFZLHFDQUFaLENBQVI7O0FBMUJZO0FBQUEsOENBNkJQZCxLQTdCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlMkIscUI7Ozs7U0FBQUEscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgcHJvZ3Jlc3MsIHRpbWUsIHRpbWVFbmQsIHBvb2xBbGwgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGV4cG9ydFNoYXJlZFJvdXRlRGF0YShzdGF0ZSkge1xuICBjb25zdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICBvdXRwdXRGaWxlUmF0ZSxcbiAgICAgIHBhdGhzOiB7IFNUQVRJQ19EQVRBIH0sXG4gICAgfSxcbiAgICBzaGFyZWREYXRhQnlIYXNoLFxuICB9ID0gc3RhdGVcbiAgLy8gV3JpdGUgYWxsIHNoYXJlZCBwcm9wcyB0byBmaWxlXG4gIGNvbnN0IHNoYXJlZERhdGFBcnIgPSBBcnJheS5mcm9tKHNoYXJlZERhdGFCeUhhc2gpXG5cbiAgaWYgKHNoYXJlZERhdGFBcnIubGVuZ3RoKSB7XG4gICAgY29uc29sZS5sb2coJ0V4cG9ydGluZyBTaGFyZWQgUm91dGUgRGF0YS4uLicpXG4gICAgY29uc3QganNvblByb2dyZXNzID0gcHJvZ3Jlc3Moc2hhcmVkRGF0YUFyci5sZW5ndGgpXG4gICAgdGltZShjaGFsay5ncmVlbignW1xcdTI3MTNdIFNoYXJlZCBSb3V0ZSBEYXRhIEV4cG9ydGVkJykpXG5cbiAgICBhd2FpdCBwb29sQWxsKFxuICAgICAgc2hhcmVkRGF0YUFyci5tYXAoY2FjaGVkUHJvcCA9PiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZzLm91dHB1dEZpbGUoXG4gICAgICAgICAgcGF0aC5qb2luKFNUQVRJQ19EQVRBLCBgJHtjYWNoZWRQcm9wWzFdLmhhc2h9Lmpzb25gKSxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShjYWNoZWRQcm9wWzFdLmRhdGEpXG4gICAgICAgIClcbiAgICAgICAganNvblByb2dyZXNzLnRpY2soKVxuICAgICAgfSksXG4gICAgICBOdW1iZXIob3V0cHV0RmlsZVJhdGUpXG4gICAgKVxuICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBTaGFyZWQgUm91dGUgRGF0YSBFeHBvcnRlZCcpKVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59KVxuIl19