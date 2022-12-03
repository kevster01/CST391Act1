"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Track =
/*#__PURE__*/
function () {
  function Track(id, number, title, lyrics, video) {
    _classCallCheck(this, Track);

    _defineProperty(this, "id", -1);

    _defineProperty(this, "number", 0);

    _defineProperty(this, "title", "");

    _defineProperty(this, "lyrics", "");

    _defineProperty(this, "video", "");

    this.id = id;
    this.number = number;
    this.title = title;
    this.lyrics = lyrics;
    this.video = video;
  }

  _createClass(Track, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9UcmFjay50cyJdLCJuYW1lcyI6WyJUcmFjayIsImlkIiwibnVtYmVyIiwidGl0bGUiLCJseXJpY3MiLCJ2aWRlbyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsSzs7O0FBUVQsaUJBQVlDLEVBQVosRUFBdUJDLE1BQXZCLEVBQXNDQyxLQUF0QyxFQUFvREMsTUFBcEQsRUFBbUVDLEtBQW5FLEVBQ0E7QUFBQTs7QUFBQSxnQ0FQcUIsQ0FBQyxDQU90Qjs7QUFBQSxvQ0FOeUIsQ0FNekI7O0FBQUEsbUNBTHdCLEVBS3hCOztBQUFBLG9DQUp5QixFQUl6Qjs7QUFBQSxtQ0FId0IsRUFHeEI7O0FBQ0ksU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtKLEVBQVo7QUFDSCxLO3NCQUNNQSxFLEVBQ1A7QUFDSSxXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O3dCQUdEO0FBQ0ksYUFBTyxLQUFLQyxNQUFaO0FBQ0gsSztzQkFDVUEsTSxFQUNYO0FBQ0ksV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozt3QkFHRDtBQUNJLGFBQU8sS0FBS0MsS0FBWjtBQUNILEs7c0JBQ1NBLEssRUFDVjtBQUNJLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtDLE1BQVo7QUFDSCxLO3NCQUNVQSxNLEVBQ1g7QUFDSSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O3dCQUdEO0FBQ0ksYUFBTyxLQUFLQyxLQUFaO0FBQ0gsSztzQkFFZ0JDLEssRUFDakI7QUFDSSxXQUFLRCxLQUFMLEdBQWFDLEtBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUcmFja1xue1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBseXJpY3M6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSB2aWRlbzogc3RyaW5nID0gXCJcIjtcbiBcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIG51bWJlcjpudW1iZXIsIHRpdGxlOnN0cmluZywgbHlyaWNzOnN0cmluZywgdmlkZW86c3RyaW5nLCApXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMubHlyaWNzID0gbHlyaWNzO1xuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgZ2V0IElkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgc2V0IElkKGlkOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gICAgfVxuICAgIHNldCBOdW1iZXIobnVtYmVyOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIH1cblxuICAgIGdldCBUaXRsZSgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldCBUaXRsZSh0aXRsZTpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IEx5cmljcygpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubHlyaWNzO1xuICAgIH1cbiAgICBzZXQgTHlyaWNzKGx5cmljczpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmx5cmljcyA9IGx5cmljcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFZpZGVvKCk6IHN0cmluZyBcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgVmlkZW8odmFsdWU6IHN0cmluZykgXG4gICAge1xuICAgICAgICB0aGlzLnZpZGVvID0gdmFsdWU7XG4gICAgfVxufSJdfQ==