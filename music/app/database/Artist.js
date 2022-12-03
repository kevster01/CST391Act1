"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Artist =
/*#__PURE__*/
function () {
  function Artist(id, name) {
    _classCallCheck(this, Artist);

    _defineProperty(this, "id", -1);

    _defineProperty(this, "name", "");

    this.id = id;
    this.name = name;
  }

  _createClass(Artist, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(artist) {
      this.name = name;
    }
  }]);

  return Artist;
}();

exports.Artist = Artist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9BcnRpc3QudHMiXSwibmFtZXMiOlsiQXJ0aXN0IiwiaWQiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFBYUEsTTs7O0FBS1Qsa0JBQVlDLEVBQVosRUFBdUJDLElBQXZCLEVBQ0E7QUFBQTs7QUFBQSxnQ0FKcUIsQ0FBQyxDQUl0Qjs7QUFBQSxrQ0FIdUIsRUFHdkI7O0FBQ0ksU0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Y7Ozs7d0JBR0Y7QUFDSSxhQUFPLEtBQUtELEVBQVo7QUFDSCxLO3NCQUNNQSxFLEVBQ1A7QUFDSSxXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDSDs7O3dCQUdEO0FBQ0ksYUFBTyxLQUFLQyxJQUFaO0FBQ0gsSztzQkFDUUMsTSxFQUNUO0FBQ0ksV0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJ0aXN0XG57XG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgbmFtZTpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgIH1cblxuICAgIGdldCBJZCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuICAgIHNldCBJZChpZDpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IE5hbWUoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIHNldCBOYW1lKGFydGlzdDpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn0iXX0=