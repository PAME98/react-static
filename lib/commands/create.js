"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _path = _interopRequireDefault(require("path"));

var _gitPromise = _interopRequireDefault(require("git-promise"));

var _child_process = require("child_process");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _inquirerAutocompletePrompt = _interopRequireDefault(require("inquirer-autocomplete-prompt"));

var _matchSorter = _interopRequireDefault(require("match-sorter"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var _util = require("util");

var _utils = require("../utils");

//
_inquirer["default"].registerPrompt('autocomplete', _inquirerAutocompletePrompt["default"]);

var typeLocal = 'Local Directory...';
var typeGit = 'GIT Repository...';
var typeExample = 'React Static Example';

var templatesDir = _path["default"].resolve(__dirname, '../../templates');

var templates = _fsExtra["default"].readdirSync(templatesDir).filter(function (d) {
  return !d.startsWith('.') && !d.startsWith('README');
});

var _default =
/*#__PURE__*/
function () {
  var _create = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_ref) {
    var name, template, isCLI, isYarn, exampleChoices, templateType, answers, dest, _answers, _ref2, localDirectory, _ref3, githubRepoName, getGitHubRepo;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = _ref.name, template = _ref.template, isCLI = _ref.isCLI;
            isYarn = shouldUseYarn();
            console.log('');
            exampleChoices = [].concat((0, _toConsumableArray2["default"])(templates), [typeLocal, typeGit]);
            templateType = typeExample; // prompt if --name argument is not passed from CLI
            // warning: since name will be set as a function by commander by default
            //   unless it's assigned as an argument from the CLI, we can't simply just
            //   check for its existence. if it has not been set by the CLI, we properly
            //   set it to null for later conditional checks.

            if (!(isCLI && !name)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 8;
            return _inquirer["default"].prompt({
              type: 'input',
              name: 'name',
              message: 'What should we name this project?',
              "default": 'my-static-site'
            });

          case 8:
            answers = _context2.sent;
            name = answers.name;

          case 10:
            if (name) {
              _context2.next = 12;
              break;
            }

            throw new Error('A project name is required. Please use options.name to define one.');

          case 12:
            dest = _path["default"].resolve(process.cwd(), name);

            if (!_fsExtra["default"].existsSync(dest)) {
              _context2.next = 15;
              break;
            }

            throw new Error("Could not create project. Directory already exists at ".concat(dest, "!"));

          case 15:
            if (!(isCLI && !template)) {
              _context2.next = 20;
              break;
            }

            _context2.next = 18;
            return _inquirer["default"].prompt({
              type: 'autocomplete',
              name: 'template',
              message: 'Select a template below...',
              source: function () {
                var _source = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee(answersSoFar, input) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", !input ? exampleChoices : (0, _matchSorter["default"])(exampleChoices, input));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                function source(_x2, _x3) {
                  return _source.apply(this, arguments);
                }

                return source;
              }()
            });

          case 18:
            _answers = _context2.sent;
            template = _answers.template;

          case 20:
            if (template) {
              _context2.next = 22;
              break;
            }

            throw new Error('A project template is required. Please use options.template to define one.');

          case 22:
            (0, _utils.time)(_chalk["default"].green("[\u2713] Project \"".concat(name, "\" created")));
            console.log('Creating new react-static project...');

            if (!(template === typeLocal)) {
              _context2.next = 31;
              break;
            }

            templateType = typeLocal;
            _context2.next = 28;
            return _inquirer["default"].prompt([{
              type: 'input',
              name: 'localDirectory',
              message: "Enter an local directory's absolute location (~/Desktop/my-template)"
            }]);

          case 28:
            _ref2 = _context2.sent;
            localDirectory = _ref2.localDirectory;
            template = localDirectory;

          case 31:
            if (!(template === typeGit)) {
              _context2.next = 38;
              break;
            }

            templateType = typeGit;
            _context2.next = 35;
            return _inquirer["default"].prompt([{
              type: 'input',
              name: 'githubRepoName',
              message: 'Enter a repository URL from GitHub, BitBucket, GitLab, or any other public repo. (https://github.com/ownerName/repoName.git)'
            }]);

          case 35:
            _ref3 = _context2.sent;
            githubRepoName = _ref3.githubRepoName;
            template = githubRepoName;

          case 38:
            console.log(''); // GIT repositories

            if (!(templateType === typeGit)) {
              _context2.next = 67;
              break;
            }

            if (!(template.startsWith('https://') || template.startsWith('git@'))) {
              _context2.next = 53;
              break;
            }

            _context2.prev = 41;
            console.log(_chalk["default"].green("Cloning Git template: ".concat(template)));
            _context2.next = 45;
            return (0, _gitPromise["default"])("clone --recursive ".concat(template, " ").concat(dest));

          case 45:
            _context2.next = 51;
            break;

          case 47:
            _context2.prev = 47;
            _context2.t0 = _context2["catch"](41);
            console.log(_chalk["default"].red("Cloning Git template: ".concat(template, " failed!")));
            throw _context2.t0;

          case 51:
            _context2.next = 65;
            break;

          case 53:
            if (!template.startsWith('http://')) {
              _context2.next = 65;
              break;
            }

            // use download-git-repo to fetch remote repository
            getGitHubRepo = (0, _util.promisify)(_downloadGitRepo["default"]);
            _context2.prev = 55;
            console.log(_chalk["default"].green("Cloning Git template: ".concat(template)));
            _context2.next = 59;
            return getGitHubRepo(template, dest);

          case 59:
            _context2.next = 65;
            break;

          case 61:
            _context2.prev = 61;
            _context2.t1 = _context2["catch"](55);
            console.log(_chalk["default"].red("Cloning Git template: ".concat(template, " failed!")));
            throw _context2.t1;

          case 65:
            _context2.next = 90;
            break;

          case 67:
            if (!(templateType === typeExample)) {
              _context2.next = 80;
              break;
            }

            // React Static templates
            console.log(_chalk["default"].green("Using React Static template: ".concat(template)));
            _context2.prev = 69;
            _context2.next = 72;
            return _fsExtra["default"].copy(_path["default"].resolve(templatesDir, template), _path["default"].resolve(process.cwd(), dest));

          case 72:
            _context2.next = 78;
            break;

          case 74:
            _context2.prev = 74;
            _context2.t2 = _context2["catch"](69);
            console.log(_chalk["default"].red("Copying React Static template: ".concat(template, " failed!")));
            throw _context2.t2;

          case 78:
            _context2.next = 90;
            break;

          case 80:
            _context2.prev = 80;
            console.log(_chalk["default"].green("Using template from directory: ".concat(template)));
            _context2.next = 84;
            return _fsExtra["default"].copy(_path["default"].resolve(process.cwd(), template), dest);

          case 84:
            _context2.next = 90;
            break;

          case 86:
            _context2.prev = 86;
            _context2.t3 = _context2["catch"](80);
            console.log(_chalk["default"].red("Copying the template from directory: ".concat(template, " failed!")));
            throw _context2.t3;

          case 90:
            if (!(!_fsExtra["default"].pathExistsSync(_path["default"].join(dest, '.gitignore')) && _fsExtra["default"].pathExistsSync(_path["default"].join(dest, 'gitignore')))) {
              _context2.next = 93;
              break;
            }

            _context2.next = 93;
            return _fsExtra["default"].move(_path["default"].join(dest, 'gitignore'), _path["default"].join(dest, '.gitignore'));

          case 93:
            if (_fsExtra["default"].pathExistsSync(_path["default"].join(dest, 'gitignore'))) {
              _fsExtra["default"].removeSync(_path["default"].join(dest, 'gitignore'));
            }

            if (isCLI) {
              console.log("Installing dependencies with: ".concat(isYarn ? _chalk["default"].hex(_utils.ChalkColor.yarn)('Yarn') : _chalk["default"].hex(_utils.ChalkColor.npm)('NPM'), "...")); // We install react-static separately to ensure we always have the latest stable release

              (0, _child_process.execSync)("cd \"".concat(name, "\" && ").concat(isYarn ? 'yarn' : 'npm install'));
              console.log('');
            }

            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Project \"".concat(name, "\" created")));
            console.log("\n  ".concat(_chalk["default"].green('To get started:'), "\n\n    cd \"").concat(name, "\" ").concat(!isCLI ? "&& ".concat(isYarn ? _chalk["default"].hex(_utils.ChalkColor.yarn)('yarn') : _chalk["default"].hex(_utils.ChalkColor.npm)('npm install')) : '', "\n\n    ").concat(isYarn ? _chalk["default"].hex(_utils.ChalkColor.yarn)('yarn') : _chalk["default"].hex(_utils.ChalkColor.npm)('npm run'), " start ").concat(_chalk["default"].green('- Start the development server'), "\n    ").concat(isYarn ? _chalk["default"].hex(_utils.ChalkColor.yarn)('yarn') : _chalk["default"].hex(_utils.ChalkColor.npm)('npm run'), " build ").concat(_chalk["default"].green('- Build for production'), "\n    ").concat(isYarn ? _chalk["default"].hex(_utils.ChalkColor.yarn)('yarn') : _chalk["default"].hex(_utils.ChalkColor.npm)('npm run'), " serve ").concat(_chalk["default"].green('- Test a production build locally'), "\n  "));

          case 97:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[41, 47], [55, 61], [69, 74], [80, 86]]);
  }));

  function create(_x) {
    return _create.apply(this, arguments);
  }

  return create;
}();

exports["default"] = _default;

function shouldUseYarn() {
  try {
    (0, _child_process.execSync)('yarnpkg --version', {
      stdio: 'ignore'
    });
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiaW5xdWlyZXIiLCJyZWdpc3RlclByb21wdCIsImF1dG9Db21wbGV0ZVByb21wdCIsInR5cGVMb2NhbCIsInR5cGVHaXQiLCJ0eXBlRXhhbXBsZSIsInRlbXBsYXRlc0RpciIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwidGVtcGxhdGVzIiwiZnMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImQiLCJzdGFydHNXaXRoIiwibmFtZSIsInRlbXBsYXRlIiwiaXNDTEkiLCJpc1lhcm4iLCJzaG91bGRVc2VZYXJuIiwiY29uc29sZSIsImxvZyIsImV4YW1wbGVDaG9pY2VzIiwidGVtcGxhdGVUeXBlIiwicHJvbXB0IiwidHlwZSIsIm1lc3NhZ2UiLCJhbnN3ZXJzIiwiRXJyb3IiLCJkZXN0IiwicHJvY2VzcyIsImN3ZCIsImV4aXN0c1N5bmMiLCJzb3VyY2UiLCJhbnN3ZXJzU29GYXIiLCJpbnB1dCIsImNoYWxrIiwiZ3JlZW4iLCJsb2NhbERpcmVjdG9yeSIsImdpdGh1YlJlcG9OYW1lIiwicmVkIiwiZ2V0R2l0SHViUmVwbyIsImRvd25sb2FkR2l0UmVwbyIsImNvcHkiLCJwYXRoRXhpc3RzU3luYyIsImpvaW4iLCJtb3ZlIiwicmVtb3ZlU3luYyIsImhleCIsIkNoYWxrQ29sb3IiLCJ5YXJuIiwibnBtIiwiY3JlYXRlIiwic3RkaW8iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFEQTtBQUdBQSxxQkFBU0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0Msc0NBQXhDOztBQUVBLElBQU1DLFNBQVMsR0FBRyxvQkFBbEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsbUJBQWhCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLHNCQUFwQjs7QUFFQSxJQUFNQyxZQUFZ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O0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZWUsTTs7OztTQUFBQSxNOzs7OztBQWlNL0IsU0FBU2pDLGFBQVQsR0FBeUI7QUFDdkIsTUFBSTtBQUNGLGlDQUFTLG1CQUFULEVBQThCO0FBQUVrQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUE5QjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQsQ0FHRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPLEtBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBnaXQgZnJvbSAnZ2l0LXByb21pc2UnXG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgaW5xdWlyZXIgZnJvbSAnaW5xdWlyZXInXG5pbXBvcnQgYXV0b0NvbXBsZXRlUHJvbXB0IGZyb20gJ2lucXVpcmVyLWF1dG9jb21wbGV0ZS1wcm9tcHQnXG5pbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJ1xuaW1wb3J0IGRvd25sb2FkR2l0UmVwbyBmcm9tICdkb3dubG9hZC1naXQtcmVwbydcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnXG4vL1xuaW1wb3J0IHsgQ2hhbGtDb2xvciwgdGltZSwgdGltZUVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5pbnF1aXJlci5yZWdpc3RlclByb21wdCgnYXV0b2NvbXBsZXRlJywgYXV0b0NvbXBsZXRlUHJvbXB0KVxuXG5jb25zdCB0eXBlTG9jYWwgPSAnTG9jYWwgRGlyZWN0b3J5Li4uJ1xuY29uc3QgdHlwZUdpdCA9ICdHSVQgUmVwb3NpdG9yeS4uLidcbmNvbnN0IHR5cGVFeGFtcGxlID0gJ1JlYWN0IFN0YXRpYyBFeGFtcGxlJ1xuXG5jb25zdCB0ZW1wbGF0ZXNEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vdGVtcGxhdGVzJylcblxuY29uc3QgdGVtcGxhdGVzID0gZnNcbiAgLnJlYWRkaXJTeW5jKHRlbXBsYXRlc0RpcilcbiAgLmZpbHRlcihkID0+ICFkLnN0YXJ0c1dpdGgoJy4nKSAmJiAhZC5zdGFydHNXaXRoKCdSRUFETUUnKSlcblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZSh7IG5hbWUsIHRlbXBsYXRlLCBpc0NMSSB9KSB7XG4gIGNvbnN0IGlzWWFybiA9IHNob3VsZFVzZVlhcm4oKVxuXG4gIGNvbnNvbGUubG9nKCcnKVxuXG4gIGNvbnN0IGV4YW1wbGVDaG9pY2VzID0gWy4uLnRlbXBsYXRlcywgdHlwZUxvY2FsLCB0eXBlR2l0XVxuXG4gIGxldCB0ZW1wbGF0ZVR5cGUgPSB0eXBlRXhhbXBsZVxuXG4gIC8vIHByb21wdCBpZiAtLW5hbWUgYXJndW1lbnQgaXMgbm90IHBhc3NlZCBmcm9tIENMSVxuICAvLyB3YXJuaW5nOiBzaW5jZSBuYW1lIHdpbGwgYmUgc2V0IGFzIGEgZnVuY3Rpb24gYnkgY29tbWFuZGVyIGJ5IGRlZmF1bHRcbiAgLy8gICB1bmxlc3MgaXQncyBhc3NpZ25lZCBhcyBhbiBhcmd1bWVudCBmcm9tIHRoZSBDTEksIHdlIGNhbid0IHNpbXBseSBqdXN0XG4gIC8vICAgY2hlY2sgZm9yIGl0cyBleGlzdGVuY2UuIGlmIGl0IGhhcyBub3QgYmVlbiBzZXQgYnkgdGhlIENMSSwgd2UgcHJvcGVybHlcbiAgLy8gICBzZXQgaXQgdG8gbnVsbCBmb3IgbGF0ZXIgY29uZGl0aW9uYWwgY2hlY2tzLlxuICBpZiAoaXNDTEkgJiYgIW5hbWUpIHtcbiAgICBjb25zdCBhbnN3ZXJzID0gYXdhaXQgaW5xdWlyZXIucHJvbXB0KHtcbiAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICBtZXNzYWdlOiAnV2hhdCBzaG91bGQgd2UgbmFtZSB0aGlzIHByb2plY3Q/JyxcbiAgICAgIGRlZmF1bHQ6ICdteS1zdGF0aWMtc2l0ZScsXG4gICAgfSlcbiAgICBuYW1lID0gYW5zd2Vycy5uYW1lXG4gIH1cblxuICBpZiAoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQSBwcm9qZWN0IG5hbWUgaXMgcmVxdWlyZWQuIFBsZWFzZSB1c2Ugb3B0aW9ucy5uYW1lIHRvIGRlZmluZSBvbmUuJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRlc3QgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgbmFtZSlcblxuICBpZiAoZnMuZXhpc3RzU3luYyhkZXN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBDb3VsZCBub3QgY3JlYXRlIHByb2plY3QuIERpcmVjdG9yeSBhbHJlYWR5IGV4aXN0cyBhdCAke2Rlc3R9IWBcbiAgICApXG4gIH1cblxuICBpZiAoaXNDTEkgJiYgIXRlbXBsYXRlKSB7XG4gICAgY29uc3QgYW5zd2VycyA9IGF3YWl0IGlucXVpcmVyLnByb21wdCh7XG4gICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgIG5hbWU6ICd0ZW1wbGF0ZScsXG4gICAgICBtZXNzYWdlOiAnU2VsZWN0IGEgdGVtcGxhdGUgYmVsb3cuLi4nLFxuICAgICAgc291cmNlOiBhc3luYyAoYW5zd2Vyc1NvRmFyLCBpbnB1dCkgPT5cbiAgICAgICAgIWlucHV0ID8gZXhhbXBsZUNob2ljZXMgOiBtYXRjaFNvcnRlcihleGFtcGxlQ2hvaWNlcywgaW5wdXQpLFxuICAgIH0pXG4gICAgdGVtcGxhdGUgPSBhbnN3ZXJzLnRlbXBsYXRlXG4gIH1cblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0EgcHJvamVjdCB0ZW1wbGF0ZSBpcyByZXF1aXJlZC4gUGxlYXNlIHVzZSBvcHRpb25zLnRlbXBsYXRlIHRvIGRlZmluZSBvbmUuJ1xuICAgIClcbiAgfVxuXG4gIHRpbWUoY2hhbGsuZ3JlZW4oYFtcXHUyNzEzXSBQcm9qZWN0IFwiJHtuYW1lfVwiIGNyZWF0ZWRgKSlcbiAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG5ldyByZWFjdC1zdGF0aWMgcHJvamVjdC4uLicpXG5cbiAgaWYgKHRlbXBsYXRlID09PSB0eXBlTG9jYWwpIHtcbiAgICB0ZW1wbGF0ZVR5cGUgPSB0eXBlTG9jYWxcbiAgICBjb25zdCB7IGxvY2FsRGlyZWN0b3J5IH0gPSBhd2FpdCBpbnF1aXJlci5wcm9tcHQoW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBuYW1lOiAnbG9jYWxEaXJlY3RvcnknLFxuICAgICAgICBtZXNzYWdlOiBgRW50ZXIgYW4gbG9jYWwgZGlyZWN0b3J5J3MgYWJzb2x1dGUgbG9jYXRpb24gKH4vRGVza3RvcC9teS10ZW1wbGF0ZSlgLFxuICAgICAgfSxcbiAgICBdKVxuICAgIHRlbXBsYXRlID0gbG9jYWxEaXJlY3RvcnlcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZSA9PT0gdHlwZUdpdCkge1xuICAgIHRlbXBsYXRlVHlwZSA9IHR5cGVHaXRcbiAgICBjb25zdCB7IGdpdGh1YlJlcG9OYW1lIH0gPSBhd2FpdCBpbnF1aXJlci5wcm9tcHQoW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICBuYW1lOiAnZ2l0aHViUmVwb05hbWUnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdFbnRlciBhIHJlcG9zaXRvcnkgVVJMIGZyb20gR2l0SHViLCBCaXRCdWNrZXQsIEdpdExhYiwgb3IgYW55IG90aGVyIHB1YmxpYyByZXBvLiAoaHR0cHM6Ly9naXRodWIuY29tL293bmVyTmFtZS9yZXBvTmFtZS5naXQpJyxcbiAgICAgIH0sXG4gICAgXSlcbiAgICB0ZW1wbGF0ZSA9IGdpdGh1YlJlcG9OYW1lXG4gIH1cblxuICBjb25zb2xlLmxvZygnJylcblxuICAvLyBHSVQgcmVwb3NpdG9yaWVzXG4gIGlmICh0ZW1wbGF0ZVR5cGUgPT09IHR5cGVHaXQpIHtcbiAgICBpZiAodGVtcGxhdGUuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSB8fCB0ZW1wbGF0ZS5zdGFydHNXaXRoKCdnaXRAJykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBDbG9uaW5nIEdpdCB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX1gKSlcbiAgICAgICAgYXdhaXQgZ2l0KGBjbG9uZSAtLXJlY3Vyc2l2ZSAke3RlbXBsYXRlfSAke2Rlc3R9YClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoYENsb25pbmcgR2l0IHRlbXBsYXRlOiAke3RlbXBsYXRlfSBmYWlsZWQhYCkpXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVtcGxhdGUuc3RhcnRzV2l0aCgnaHR0cDovLycpKSB7XG4gICAgICAvLyB1c2UgZG93bmxvYWQtZ2l0LXJlcG8gdG8gZmV0Y2ggcmVtb3RlIHJlcG9zaXRvcnlcbiAgICAgIGNvbnN0IGdldEdpdEh1YlJlcG8gPSBwcm9taXNpZnkoZG93bmxvYWRHaXRSZXBvKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYENsb25pbmcgR2l0IHRlbXBsYXRlOiAke3RlbXBsYXRlfWApKVxuICAgICAgICBhd2FpdCBnZXRHaXRIdWJSZXBvKHRlbXBsYXRlLCBkZXN0KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChgQ2xvbmluZyBHaXQgdGVtcGxhdGU6ICR7dGVtcGxhdGV9IGZhaWxlZCFgKSlcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHRlbXBsYXRlVHlwZSA9PT0gdHlwZUV4YW1wbGUpIHtcbiAgICAvLyBSZWFjdCBTdGF0aWMgdGVtcGxhdGVzXG4gICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYFVzaW5nIFJlYWN0IFN0YXRpYyB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZX1gKSlcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZnMuY29weShcbiAgICAgICAgcGF0aC5yZXNvbHZlKHRlbXBsYXRlc0RpciwgdGVtcGxhdGUpLFxuICAgICAgICBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgZGVzdClcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBjaGFsay5yZWQoYENvcHlpbmcgUmVhY3QgU3RhdGljIHRlbXBsYXRlOiAke3RlbXBsYXRlfSBmYWlsZWQhYClcbiAgICAgIClcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBMb2NhbCB0ZW1wbGF0ZXNcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYFVzaW5nIHRlbXBsYXRlIGZyb20gZGlyZWN0b3J5OiAke3RlbXBsYXRlfWApKVxuICAgICAgYXdhaXQgZnMuY29weShwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgdGVtcGxhdGUpLCBkZXN0KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGNoYWxrLnJlZChgQ29weWluZyB0aGUgdGVtcGxhdGUgZnJvbSBkaXJlY3Rvcnk6ICR7dGVtcGxhdGV9IGZhaWxlZCFgKVxuICAgICAgKVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgLy8gU2luY2UgbnBtIHBhY2thZ2luZyB3aWxsIGNsb2JiZXIgLmdpdGlnbm9yZSBmaWxlc1xuICAvLyBXZSBuZWVkIHRvIHJlbmFtZSB0aGUgZ2l0aWdub3JlIGZpbGUgdG8gLmdpdGlnbm9yZVxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ucG0vbnBtL2lzc3Vlcy8xODYyXG5cbiAgaWYgKFxuICAgICFmcy5wYXRoRXhpc3RzU3luYyhwYXRoLmpvaW4oZGVzdCwgJy5naXRpZ25vcmUnKSkgJiZcbiAgICBmcy5wYXRoRXhpc3RzU3luYyhwYXRoLmpvaW4oZGVzdCwgJ2dpdGlnbm9yZScpKVxuICApIHtcbiAgICBhd2FpdCBmcy5tb3ZlKHBhdGguam9pbihkZXN0LCAnZ2l0aWdub3JlJyksIHBhdGguam9pbihkZXN0LCAnLmdpdGlnbm9yZScpKVxuICB9XG4gIGlmIChmcy5wYXRoRXhpc3RzU3luYyhwYXRoLmpvaW4oZGVzdCwgJ2dpdGlnbm9yZScpKSkge1xuICAgIGZzLnJlbW92ZVN5bmMocGF0aC5qb2luKGRlc3QsICdnaXRpZ25vcmUnKSlcbiAgfVxuXG4gIGlmIChpc0NMSSkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluc3RhbGxpbmcgZGVwZW5kZW5jaWVzIHdpdGg6ICR7XG4gICAgICAgIGlzWWFyblxuICAgICAgICAgID8gY2hhbGsuaGV4KENoYWxrQ29sb3IueWFybikoJ1lhcm4nKVxuICAgICAgICAgIDogY2hhbGsuaGV4KENoYWxrQ29sb3IubnBtKSgnTlBNJylcbiAgICAgIH0uLi5gXG4gICAgKVxuICAgIC8vIFdlIGluc3RhbGwgcmVhY3Qtc3RhdGljIHNlcGFyYXRlbHkgdG8gZW5zdXJlIHdlIGFsd2F5cyBoYXZlIHRoZSBsYXRlc3Qgc3RhYmxlIHJlbGVhc2VcbiAgICBleGVjU3luYyhgY2QgXCIke25hbWV9XCIgJiYgJHtpc1lhcm4gPyAneWFybicgOiAnbnBtIGluc3RhbGwnfWApXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKGBbXFx1MjcxM10gUHJvamVjdCBcIiR7bmFtZX1cIiBjcmVhdGVkYCkpXG5cbiAgY29uc29sZS5sb2coYFxuICAke2NoYWxrLmdyZWVuKCdUbyBnZXQgc3RhcnRlZDonKX1cblxuICAgIGNkIFwiJHtuYW1lfVwiICR7XG4gICAgIWlzQ0xJXG4gICAgICA/IGAmJiAke1xuICAgICAgICAgIGlzWWFyblxuICAgICAgICAgICAgPyBjaGFsay5oZXgoQ2hhbGtDb2xvci55YXJuKSgneWFybicpXG4gICAgICAgICAgICA6IGNoYWxrLmhleChDaGFsa0NvbG9yLm5wbSkoJ25wbSBpbnN0YWxsJylcbiAgICAgICAgfWBcbiAgICAgIDogJydcbiAgfVxuXG4gICAgJHtcbiAgICAgIGlzWWFyblxuICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCducG0gcnVuJylcbiAgICB9IHN0YXJ0ICR7Y2hhbGsuZ3JlZW4oJy0gU3RhcnQgdGhlIGRldmVsb3BtZW50IHNlcnZlcicpfVxuICAgICR7XG4gICAgICBpc1lhcm5cbiAgICAgICAgPyBjaGFsay5oZXgoQ2hhbGtDb2xvci55YXJuKSgneWFybicpXG4gICAgICAgIDogY2hhbGsuaGV4KENoYWxrQ29sb3IubnBtKSgnbnBtIHJ1bicpXG4gICAgfSBidWlsZCAke2NoYWxrLmdyZWVuKCctIEJ1aWxkIGZvciBwcm9kdWN0aW9uJyl9XG4gICAgJHtcbiAgICAgIGlzWWFyblxuICAgICAgICA/IGNoYWxrLmhleChDaGFsa0NvbG9yLnlhcm4pKCd5YXJuJylcbiAgICAgICAgOiBjaGFsay5oZXgoQ2hhbGtDb2xvci5ucG0pKCducG0gcnVuJylcbiAgICB9IHNlcnZlICR7Y2hhbGsuZ3JlZW4oJy0gVGVzdCBhIHByb2R1Y3Rpb24gYnVpbGQgbG9jYWxseScpfVxuICBgKVxufSlcblxuZnVuY3Rpb24gc2hvdWxkVXNlWWFybigpIHtcbiAgdHJ5IHtcbiAgICBleGVjU3luYygneWFybnBrZyAtLXZlcnNpb24nLCB7IHN0ZGlvOiAnaWdub3JlJyB9KVxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl19