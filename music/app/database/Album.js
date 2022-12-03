"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Album =
/*#__PURE__*/
function () {
  function Album(id, title, artist, year, image, tracks) {
    _classCallCheck(this, Album);

    _defineProperty(this, "id", -1);

    _defineProperty(this, "title", "");

    _defineProperty(this, "artist", "");

    _defineProperty(this, "year", 1900);

    _defineProperty(this, "image", "");

    _defineProperty(this, "tracks", []);

    this.id = id;
    this.artist = artist;
    this.year = year;
    this.image = image;
    this.tracks = tracks;
  }

  _createClass(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9BbGJ1bS50cyJdLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJ5ZWFyIiwiaW1hZ2UiLCJ0cmFja3MiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLEs7OztBQVNULGlCQUFZQyxFQUFaLEVBQXVCQyxLQUF2QixFQUFxQ0MsTUFBckMsRUFBb0RDLElBQXBELEVBQWlFQyxLQUFqRSxFQUFnRkMsTUFBaEYsRUFDQTtBQUFBOztBQUFBLGdDQVJxQixDQUFDLENBUXRCOztBQUFBLG1DQVB3QixFQU94Qjs7QUFBQSxvQ0FOeUIsRUFNekI7O0FBQUEsa0NBTHVCLElBS3ZCOztBQUFBLG1DQUp3QixFQUl4Qjs7QUFBQSxvQ0FIMEIsRUFHMUI7O0FBQ0ksU0FBS0wsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0UsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtMLEVBQVo7QUFDSCxLO3NCQUNNQSxFLEVBQ1A7QUFDSSxXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O3dCQUdEO0FBQ0ksYUFBTyxLQUFLRSxNQUFaO0FBQ0gsSztzQkFDVUEsTSxFQUNYO0FBQ0ksV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozt3QkFHRDtBQUNJLGFBQU8sS0FBS0MsSUFBWjtBQUNILEs7c0JBQ1FBLEksRUFDVDtBQUNJLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtDLEtBQVo7QUFDSCxLO3NCQUNnQkUsSyxFQUNqQjtBQUNJLFdBQUtGLEtBQUwsR0FBYUUsS0FBYjtBQUNIOzs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtELE1BQVo7QUFDSCxLO3NCQUNVQSxNLEVBQ1g7QUFDSSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4vVHJhY2tcIjtcblxuZXhwb3J0IGNsYXNzIEFsYnVtXG57XG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGFydGlzdDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHllYXI6IG51bWJlciA9IDE5MDA7XG4gICAgcHJpdmF0ZSBpbWFnZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHRyYWNrczogVHJhY2tbXSA9IFtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgdGl0bGU6c3RyaW5nLCBhcnRpc3Q6c3RyaW5nLCB5ZWFyOm51bWJlciwgaW1hZ2U6IHN0cmluZywgdHJhY2tzOlRyYWNrW10pXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIH1cblxuICAgIGdldCBJZCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuICAgIHNldCBJZChpZDpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IEFydGlzdCgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJ0aXN0O1xuICAgIH1cbiAgICBzZXQgQXJ0aXN0KGFydGlzdDpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmFydGlzdCA9IGFydGlzdDtcbiAgICB9XG5cbiAgICBnZXQgWWVhcigpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcjtcbiAgICB9XG4gICAgc2V0IFllYXIoeWVhcjpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgSW1hZ2UoKTogc3RyaW5nIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgSW1hZ2UodmFsdWU6IHN0cmluZykgXG4gICAge1xuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IFRyYWNrcygpOlRyYWNrW11cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrcztcbiAgICB9XG4gICAgc2V0IFRyYWNrcyh0cmFja3M6VHJhY2tbXSlcbiAgICB7XG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIH1cbn0iXX0=