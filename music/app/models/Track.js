"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Track = /*#__PURE__*/function () {
  function Track(id, number, title, lyrics, video) {
    (0, _classCallCheck2.default)(this, Track);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "number", 0);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "lyrics", "");
    (0, _defineProperty2.default)(this, "video", "");
    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
    this.video = video;
  }
  (0, _createClass2.default)(Track, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(number) {
      this.number = number;
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
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(lyrics) {
      this.lyrics = lyrics;
    }
  }, {
    key: "Video",
    get: function get() {
      return this.video;
    },
    set: function set(value) {
      this.video = value;
    }
  }]);
  return Track;
}();
exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFjayIsImlkIiwibnVtYmVyIiwidGl0bGUiLCJseXJpY3MiLCJ2aWRlbyIsInZhbHVlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9UcmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHJhY2tcbntcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG51bWJlcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgbHlyaWNzOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgdmlkZW86IHN0cmluZyA9IFwiXCI7XG4gXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCBudW1iZXI6bnVtYmVyLCB0aXRsZTpzdHJpbmcsIGx5cmljczpzdHJpbmcsIHZpZGVvOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICB9XG5cbiAgICBnZXQgSWQoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBzZXQgSWQoaWQ6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldCBOdW1iZXIoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgICB9XG4gICAgc2V0IE51bWJlcihudW1iZXI6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgZ2V0IFRpdGxlKCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgc2V0IFRpdGxlKHRpdGxlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgTHlyaWNzKCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5seXJpY3M7XG4gICAgfVxuICAgIHNldCBMeXJpY3MobHlyaWNzOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMubHlyaWNzID0gbHlyaWNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgVmlkZW8oKTogc3RyaW5nIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW87XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBWaWRlbyh2YWx1ZTogc3RyaW5nKSBcbiAgICB7XG4gICAgICAgIHRoaXMudmlkZW8gPSB2YWx1ZTtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLEtBQUs7RUFRZCxlQUFZQyxFQUFTLEVBQUVDLE1BQWEsRUFBRUMsS0FBWSxFQUFFQyxNQUFhLEVBQUVDLEtBQVksRUFDL0U7SUFBQTtJQUFBLDBDQVBxQixDQUFDLENBQUM7SUFBQSw4Q0FDRSxDQUFDO0lBQUEsNkNBQ0YsRUFBRTtJQUFBLDhDQUNELEVBQUU7SUFBQSw2Q0FDSCxFQUFFO0lBSXRCLElBQUksQ0FBQ0osRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNKLEVBQUU7SUFDbEIsQ0FBQztJQUFBLEtBQ0QsYUFBT0EsRUFBUyxFQUNoQjtNQUNJLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ2hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3RCLENBQUM7SUFBQSxLQUNELGFBQVdBLE1BQWEsRUFDeEI7TUFDSSxJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQ0E7TUFDSSxPQUFPLElBQUksQ0FBQ0MsS0FBSztJQUNyQixDQUFDO0lBQUEsS0FDRCxhQUFVQSxLQUFZLEVBQ3RCO01BQ0ksSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUNBO01BQ0ksT0FBTyxJQUFJLENBQUNDLE1BQU07SUFDdEIsQ0FBQztJQUFBLEtBQ0QsYUFBV0EsTUFBYSxFQUN4QjtNQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFDQTtNQUNJLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQWlCQyxLQUFhLEVBQzlCO01BQ0ksSUFBSSxDQUFDRCxLQUFLLEdBQUdDLEtBQUs7SUFDdEI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9