"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Album = /*#__PURE__*/function () {
  function Album(id, title, artist, description, year, image, tracks) {
    (0, _classCallCheck2.default)(this, Album);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "artist", "");
    (0, _defineProperty2.default)(this, "description", "");
    (0, _defineProperty2.default)(this, "year", 1900);
    (0, _defineProperty2.default)(this, "image", "");
    (0, _defineProperty2.default)(this, "tracks", []);
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.year = year;
    this.image = image;
    this.tracks = tracks;
  }
  (0, _createClass2.default)(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(title) {
      this.title = title;
    }
  }, {
    key: "Artist",
    get: function get() {
      return this.artist;
    },
    set: function set(artist) {
      this.artist = artist;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "Image",
    get: function get() {
      return this.image;
    },
    set: function set(value) {
      this.image = value;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(tracks) {
      this.tracks = tracks;
    }
  }]);
  return Album;
}();
exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJpbWFnZSIsInRyYWNrcyIsInZhbHVlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9BbGJ1bS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL1RyYWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBBbGJ1bVxue1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBhcnRpc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHllYXI6IG51bWJlciA9IDE5MDA7XG4gICAgcHJpdmF0ZSBpbWFnZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgdGl0bGU6c3RyaW5nLCBhcnRpc3Q6c3RyaW5nLCBkZXNjcmlwdGlvbjpzdHJpbmcsIHllYXI6bnVtYmVyLCBpbWFnZTogc3RyaW5nLCB0cmFja3M6VHJhY2tbXSlcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmFydGlzdCA9IGFydGlzdDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIH1cblxuICAgIGdldCBJZCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuICAgIHNldCBJZChpZDpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IFRpdGxlKCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgc2V0IFRpdGxlKHRpdGxlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgQXJ0aXN0KCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnRpc3Q7XG4gICAgfVxuICAgIHNldCBBcnRpc3QoYXJ0aXN0OnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuICAgIH1cblxuICAgIGdldCBEZXNjcmlwdGlvbigpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIFxuICAgIGdldCBZZWFyKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyO1xuICAgIH1cbiAgICBzZXQgWWVhcih5ZWFyOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBJbWFnZSgpOiBzdHJpbmcgXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBJbWFnZSh2YWx1ZTogc3RyaW5nKSBcbiAgICB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgVHJhY2tzKCk6VHJhY2tbXVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tzO1xuICAgIH1cbiAgICBzZXQgVHJhY2tzKHRyYWNrczpUcmFja1tdKVxuICAgIHtcbiAgICAgICAgdGhpcy50cmFja3MgPSB0cmFja3M7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVhQSxLQUFLO0VBVWQsZUFBWUMsRUFBUyxFQUFFQyxLQUFZLEVBQUVDLE1BQWEsRUFBRUMsV0FBa0IsRUFBRUMsSUFBVyxFQUFFQyxLQUFhLEVBQUVDLE1BQWMsRUFDbEg7SUFBQTtJQUFBLDBDQVRxQixDQUFDLENBQUM7SUFBQSw2Q0FDQyxFQUFFO0lBQUEsOENBQ0QsRUFBRTtJQUFBLG1EQUNHLEVBQUU7SUFBQSw0Q0FDVCxJQUFJO0lBQUEsNkNBQ0gsRUFBRTtJQUFBLDhDQUNBLEVBQUU7SUFJeEIsSUFBSSxDQUFDTixFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ04sRUFBRTtJQUNsQixDQUFDO0lBQUEsS0FDRCxhQUFPQSxFQUFTLEVBQ2hCO01BQ0ksSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDaEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNDLEtBQUs7SUFDckIsQ0FBQztJQUFBLEtBQ0QsYUFBVUEsS0FBWSxFQUN0QjtNQUNJLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3RCLENBQUM7SUFBQSxLQUNELGFBQVdBLE1BQWEsRUFDeEI7TUFDSSxJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0MsV0FBVztJQUMzQixDQUFDO0lBQUEsS0FDRCxhQUFnQkEsV0FBa0IsRUFDbEM7TUFDSSxJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztJQUNsQztFQUFDO0lBQUE7SUFBQSxLQUVELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0MsSUFBSTtJQUNwQixDQUFDO0lBQUEsS0FDRCxhQUFTQSxJQUFXLEVBQ3BCO01BQ0ksSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDcEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNDLEtBQUs7SUFDckIsQ0FBQztJQUFBLEtBQ0QsYUFBaUJFLEtBQWEsRUFDOUI7TUFDSSxJQUFJLENBQUNGLEtBQUssR0FBR0UsS0FBSztJQUN0QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtJQUN0QixDQUFDO0lBQUEsS0FDRCxhQUFXQSxNQUFjLEVBQ3pCO01BQ0ksSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07SUFDeEI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9