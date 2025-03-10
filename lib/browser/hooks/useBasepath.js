"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useBasepath;

function useBasepath() {
  return process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING === 'true' ? '' : process.env.REACT_STATIC_BASE_PATH;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2hvb2tzL3VzZUJhc2VwYXRoLmpzIl0sIm5hbWVzIjpbInVzZUJhc2VwYXRoIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyIsIlJFQUNUX1NUQVRJQ19CQVNFX1BBVEgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxXQUFULEdBQXVCO0FBQ3BDLFNBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxvQ0FBWixLQUFxRCxNQUFyRCxHQUNILEVBREcsR0FFSEYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLHNCQUZoQjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmFzZXBhdGgoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkcgPT09ICd0cnVlJ1xuICAgID8gJydcbiAgICA6IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19CQVNFX1BBVEhcbn1cbiJdfQ==