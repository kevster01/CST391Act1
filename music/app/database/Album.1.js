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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9BbGJ1bS4xLnRzIl0sIm5hbWVzIjpbIkFsYnVtIiwiaWQiLCJ0aXRsZSIsImFydGlzdCIsInllYXIiLCJpbWFnZSIsInRyYWNrcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSzs7O0FBU1QsaUJBQVlDLEVBQVosRUFBdUJDLEtBQXZCLEVBQXFDQyxNQUFyQyxFQUFvREMsSUFBcEQsRUFBaUVDLEtBQWpFLEVBQWdGQyxNQUFoRixFQUNBO0FBQUE7O0FBQUEsZ0NBUnFCLENBQUMsQ0FRdEI7O0FBQUEsbUNBUHdCLEVBT3hCOztBQUFBLG9DQU55QixFQU16Qjs7QUFBQSxrQ0FMdUIsSUFLdkI7O0FBQUEsbUNBSndCLEVBSXhCOztBQUFBLG9DQUgwQixFQUcxQjs7QUFDSSxTQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7Ozt3QkFHRDtBQUNJLGFBQU8sS0FBS0wsRUFBWjtBQUNILEs7c0JBQ01BLEUsRUFDUDtBQUNJLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7d0JBR0Q7QUFDSSxhQUFPLEtBQUtFLE1BQVo7QUFDSCxLO3NCQUNVQSxNLEVBQ1g7QUFDSSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7O3dCQUdEO0FBQ0ksYUFBTyxLQUFLQyxJQUFaO0FBQ0gsSztzQkFDUUEsSSxFQUNUO0FBQ0ksV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozt3QkFHRDtBQUNJLGFBQU8sS0FBS0MsS0FBWjtBQUNILEs7c0JBQ2dCRSxLLEVBQ2pCO0FBQ0ksV0FBS0YsS0FBTCxHQUFhRSxLQUFiO0FBQ0g7Ozt3QkFHRDtBQUNJLGFBQU8sS0FBS0QsTUFBWjtBQUNILEs7c0JBQ1VBLE0sRUFDWDtBQUNJLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiLi9UcmFja1wiO1xuXG5leHBvcnQgY2xhc3MgQWxidW1cbntcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgYXJ0aXN0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgeWVhcjogbnVtYmVyID0gMTkwMDtcbiAgICBwcml2YXRlIGltYWdlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgdHJhY2tzOiBUcmFja1tdID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCB0aXRsZTpzdHJpbmcsIGFydGlzdDpzdHJpbmcsIHllYXI6bnVtYmVyLCBpbWFnZTogc3RyaW5nLCB0cmFja3M6VHJhY2tbXSlcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy50cmFja3MgPSB0cmFja3M7XG4gICAgfVxuXG4gICAgZ2V0IElkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgc2V0IElkKGlkOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgQXJ0aXN0KCk6c3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnRpc3Q7XG4gICAgfVxuICAgIHNldCBBcnRpc3QoYXJ0aXN0OnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuICAgIH1cblxuICAgIGdldCBZZWFyKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyO1xuICAgIH1cbiAgICBzZXQgWWVhcih5ZWFyOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBJbWFnZSgpOiBzdHJpbmcgXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBJbWFnZSh2YWx1ZTogc3RyaW5nKSBcbiAgICB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgVHJhY2tzKCk6VHJhY2tbXVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tzO1xuICAgIH1cbiAgICBzZXQgVHJhY2tzKHRyYWNrczpUcmFja1tdKVxuICAgIHtcbiAgICAgICAgdGhpcy50cmFja3MgPSB0cmFja3M7XG4gICAgfVxufSJdfQ==