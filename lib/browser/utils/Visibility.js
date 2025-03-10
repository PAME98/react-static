"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onVisible;

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  require('intersection-observer'); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL3V0aWxzL1Zpc2liaWxpdHkuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZXF1aXJlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJQT0xMX0lOVEVSVkFMIiwibGlzdCIsIk1hcCIsIm9uVmlzaWJsZSIsImVsZW1lbnQiLCJjYWxsYmFjayIsImdldCIsImlvIiwid2luZG93IiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUksT0FBT0EsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQztBQUNBQyxFQUFBQSxPQUFPLENBQUMsdUJBQUQsQ0FBUCxDQUZtQyxDQUluQztBQUNBOzs7QUFDQUMsRUFBQUEsb0JBQW9CLENBQUNDLGFBQXJCLEdBQXFDLElBQXJDO0FBQ0Q7O0FBRUQsSUFBTUMsSUFBSSxHQUFHLElBQUlDLEdBQUosRUFBYjs7QUFFZSxTQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFDbkQsTUFBSUosSUFBSSxDQUFDSyxHQUFMLENBQVNGLE9BQVQsQ0FBSixFQUF1QjtBQUNyQjtBQUNEOztBQUNELE1BQU1HLEVBQUUsR0FBRyxJQUFJQyxNQUFNLENBQUNULG9CQUFYLENBQWdDLFVBQUFVLE9BQU8sRUFBSTtBQUNwREEsSUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUFDLEtBQUssRUFBSTtBQUN2QjtBQUNBLFVBQ0VQLE9BQU8sS0FBS08sS0FBSyxDQUFDQyxNQUFsQixLQUNDRCxLQUFLLENBQUNFLGNBQU4sSUFBd0JGLEtBQUssQ0FBQ0csaUJBQU4sR0FBMEIsQ0FEbkQsQ0FERixFQUdFO0FBQ0FQLFFBQUFBLEVBQUUsQ0FBQ1EsU0FBSCxDQUFhWCxPQUFiO0FBQ0FHLFFBQUFBLEVBQUUsQ0FBQ1MsVUFBSDtBQUVBWCxRQUFBQSxRQUFRO0FBQ1Q7QUFDRixLQVhEO0FBWUQsR0FiVSxDQUFYO0FBY0FFLEVBQUFBLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXYixPQUFYO0FBQ0FILEVBQUFBLElBQUksQ0FBQ2lCLEdBQUwsQ0FBU2QsT0FBVCxFQUFrQixJQUFsQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gUG9seWZpbGwgdGhhdCBzaGl6IVxuICByZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKVxuXG4gIC8vIERvIG1hbnVhbCBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb25zIGV2ZXJ5IHNlY29uZC4gVGhpcyBpc24ndCB2ZXJ5IGZhc3RcbiAgLy8gYnV0IHNob3VsZCBoYW5kbGUgbW9zdCBlZGdlIGNhc2VzIGZvciBub3dcbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIuUE9MTF9JTlRFUlZBTCA9IDEwMDBcbn1cblxuY29uc3QgbGlzdCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblZpc2libGUoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGxpc3QuZ2V0KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBpc0ludGVyc2VjdGluZy4gaW50ZXJzZWN0aW9uUmF0aW8gPiAwIHdvcmtzIGFzIGEgZmFsbGJhY2tcbiAgICAgIGlmIChcbiAgICAgICAgZWxlbWVudCA9PT0gZW50cnkudGFyZ2V0ICYmXG4gICAgICAgIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApXG4gICAgICApIHtcbiAgICAgICAgaW8udW5vYnNlcnZlKGVsZW1lbnQpXG4gICAgICAgIGlvLmRpc2Nvbm5lY3QoKVxuXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICBpby5vYnNlcnZlKGVsZW1lbnQpXG4gIGxpc3Quc2V0KGVsZW1lbnQsIHRydWUpXG59XG4iXX0=