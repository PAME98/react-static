"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root["default"];
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes["default"];
  }
});
Object.defineProperty(exports, "useRouteData", {
  enumerable: true,
  get: function get() {
    return _useRouteData["default"];
  }
});
Object.defineProperty(exports, "useSiteData", {
  enumerable: true,
  get: function get() {
    return _useSiteData["default"];
  }
});
Object.defineProperty(exports, "usePrefetch", {
  enumerable: true,
  get: function get() {
    return _usePrefetch["default"];
  }
});
Object.defineProperty(exports, "useLocation", {
  enumerable: true,
  get: function get() {
    return _useLocation["default"];
  }
});
Object.defineProperty(exports, "useBasepath", {
  enumerable: true,
  get: function get() {
    return _useBasepath["default"];
  }
});
Object.defineProperty(exports, "useStaticInfo", {
  enumerable: true,
  get: function get() {
    return _useStaticInfo.useStaticInfo;
  }
});
Object.defineProperty(exports, "useRoutePath", {
  enumerable: true,
  get: function get() {
    return _useRoutePath.useRoutePath;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.RouteData;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.SiteData;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "addPrefetchExcludes", {
  enumerable: true,
  get: function get() {
    return _browser.addPrefetchExcludes;
  }
});
Object.defineProperty(exports, "getRouteInfo", {
  enumerable: true,
  get: function get() {
    return _browser.getRouteInfo;
  }
});
Object.defineProperty(exports, "isPrefetchableRoute", {
  enumerable: true,
  get: function get() {
    return _browser.isPrefetchableRoute;
  }
});
Object.defineProperty(exports, "onReloadClientData", {
  enumerable: true,
  get: function get() {
    return _browser.onReloadClientData;
  }
});
Object.defineProperty(exports, "onReloadTemplates", {
  enumerable: true,
  get: function get() {
    return _browser.onReloadTemplates;
  }
});
Object.defineProperty(exports, "pluginHooks", {
  enumerable: true,
  get: function get() {
    return _browser.pluginHooks;
  }
});
Object.defineProperty(exports, "plugins", {
  enumerable: true,
  get: function get() {
    return _browser.plugins;
  }
});
Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function get() {
    return _browser.prefetch;
  }
});
Object.defineProperty(exports, "prefetchData", {
  enumerable: true,
  get: function get() {
    return _browser.prefetchData;
  }
});
Object.defineProperty(exports, "prefetchTemplate", {
  enumerable: true,
  get: function get() {
    return _browser.prefetchTemplate;
  }
});
Object.defineProperty(exports, "registerPlugins", {
  enumerable: true,
  get: function get() {
    return _browser.registerPlugins;
  }
});
Object.defineProperty(exports, "registerTemplateForPath", {
  enumerable: true,
  get: function get() {
    return _browser.registerTemplateForPath;
  }
});
Object.defineProperty(exports, "registerTemplates", {
  enumerable: true,
  get: function get() {
    return _browser.registerTemplates;
  }
});
Object.defineProperty(exports, "routeErrorByPath", {
  enumerable: true,
  get: function get() {
    return _browser.routeErrorByPath;
  }
});
Object.defineProperty(exports, "routeInfoByPath", {
  enumerable: true,
  get: function get() {
    return _browser.routeInfoByPath;
  }
});
Object.defineProperty(exports, "sharedDataByHash", {
  enumerable: true,
  get: function get() {
    return _browser.sharedDataByHash;
  }
});
Object.defineProperty(exports, "templateErrorByPath", {
  enumerable: true,
  get: function get() {
    return _browser.templateErrorByPath;
  }
});
Object.defineProperty(exports, "templates", {
  enumerable: true,
  get: function get() {
    return _browser.templates;
  }
});
Object.defineProperty(exports, "templatesByPath", {
  enumerable: true,
  get: function get() {
    return _browser.templatesByPath;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "makePathAbsolute", {
  enumerable: true,
  get: function get() {
    return _utils.makePathAbsolute;
  }
});
Object.defineProperty(exports, "pathJoin", {
  enumerable: true,
  get: function get() {
    return _utils.pathJoin;
  }
});

var _reactHelmet = require("react-helmet");

var _Root = _interopRequireDefault(require("./browser/components/Root"));

var _Routes = _interopRequireDefault(require("./browser/components/Routes"));

var _useRouteData = _interopRequireDefault(require("./browser/hooks/useRouteData"));

var _useSiteData = _interopRequireDefault(require("./browser/hooks/useSiteData"));

var _usePrefetch = _interopRequireDefault(require("./browser/hooks/usePrefetch"));

var _useLocation = _interopRequireDefault(require("./browser/hooks/useLocation"));

var _useBasepath = _interopRequireDefault(require("./browser/hooks/useBasepath"));

var _useStaticInfo = require("./browser/hooks/useStaticInfo");

var _useRoutePath = require("./browser/hooks/useRoutePath");

var _RouteData = require("./browser/components/RouteData");

var _SiteData = require("./browser/components/SiteData");

var _browser = require("./browser");

var _utils = require("./browser/utils");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlbG1ldFxuZXhwb3J0IHsgSGVsbWV0IGFzIEhlYWQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5cbi8vIFJlYWN0LVN0YXRpY1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb290IH0gZnJvbSAnLi9icm93c2VyL2NvbXBvbmVudHMvUm9vdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm91dGVzIH0gZnJvbSAnLi9icm93c2VyL2NvbXBvbmVudHMvUm91dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VSb3V0ZURhdGEgfSBmcm9tICcuL2Jyb3dzZXIvaG9va3MvdXNlUm91dGVEYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTaXRlRGF0YSB9IGZyb20gJy4vYnJvd3Nlci9ob29rcy91c2VTaXRlRGF0YSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUHJlZmV0Y2ggfSBmcm9tICcuL2Jyb3dzZXIvaG9va3MvdXNlUHJlZmV0Y2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUxvY2F0aW9uIH0gZnJvbSAnLi9icm93c2VyL2hvb2tzL3VzZUxvY2F0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VCYXNlcGF0aCB9IGZyb20gJy4vYnJvd3Nlci9ob29rcy91c2VCYXNlcGF0aCdcbmV4cG9ydCB7IHVzZVN0YXRpY0luZm8gfSBmcm9tICcuL2Jyb3dzZXIvaG9va3MvdXNlU3RhdGljSW5mbydcbmV4cG9ydCB7IHVzZVJvdXRlUGF0aCB9IGZyb20gJy4vYnJvd3Nlci9ob29rcy91c2VSb3V0ZVBhdGgnXG5leHBvcnQgeyBSb3V0ZURhdGEsIHdpdGhSb3V0ZURhdGEgfSBmcm9tICcuL2Jyb3dzZXIvY29tcG9uZW50cy9Sb3V0ZURhdGEnXG5leHBvcnQgeyBTaXRlRGF0YSwgd2l0aFNpdGVEYXRhIH0gZnJvbSAnLi9icm93c2VyL2NvbXBvbmVudHMvU2l0ZURhdGEnXG5leHBvcnQge1xuICBhZGRQcmVmZXRjaEV4Y2x1ZGVzLFxuICBnZXRSb3V0ZUluZm8sXG4gIGlzUHJlZmV0Y2hhYmxlUm91dGUsXG4gIG9uUmVsb2FkQ2xpZW50RGF0YSxcbiAgb25SZWxvYWRUZW1wbGF0ZXMsXG4gIHBsdWdpbkhvb2tzLFxuICBwbHVnaW5zLFxuICBwcmVmZXRjaCxcbiAgcHJlZmV0Y2hEYXRhLFxuICBwcmVmZXRjaFRlbXBsYXRlLFxuICByZWdpc3RlclBsdWdpbnMsXG4gIHJlZ2lzdGVyVGVtcGxhdGVGb3JQYXRoLFxuICByZWdpc3RlclRlbXBsYXRlcyxcbiAgcm91dGVFcnJvckJ5UGF0aCxcbiAgcm91dGVJbmZvQnlQYXRoLFxuICBzaGFyZWREYXRhQnlIYXNoLFxuICB0ZW1wbGF0ZUVycm9yQnlQYXRoLFxuICB0ZW1wbGF0ZXMsXG4gIHRlbXBsYXRlc0J5UGF0aCxcbn0gZnJvbSAnLi9icm93c2VyJ1xuXG4vLyBVdGlsc1xuZXhwb3J0IHsgZ2V0Um91dGVQYXRoLCBtYWtlUGF0aEFic29sdXRlLCBwYXRoSm9pbiB9IGZyb20gJy4vYnJvd3Nlci91dGlscydcbiJdfQ==