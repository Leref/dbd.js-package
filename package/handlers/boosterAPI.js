const _0x1ed6 = [
  "\x20(\x20",
  "log",
  "\x5cpackage.json",
  "Bearer\x20",
  "[\x0a\x20",
  "../functions/parser.js",
  "stringify",
  "message",
  "FINISHED\x20WRITE\x20",
  "https://dbdjs.itzleref.repl.co/install?version=",
  "\x5cparser.js",
  "status",
  "DBD.JS:\x20INSTALLING\x20",
  "\x5cfuncs\x5c",
  "ms)",
  "application/json",
  "96987ANfyqD",
  "1zNhrMT",
  "1064522fIrWax",
  "replace",
  "version",
  "https://dbdjs.itzleref.repl.co/version",
  "17beMSKD",
  "length",
  "DBD.JS:\x20CONFIRMED\x20LATEST\x20",
  "../../package.json",
  "59010sOlztw",
  "installed_version",
  "data",
  "default",
  "https://dbdjs.itzleref.repl.co/function?name=",
  "DBD.JS:\x20WRITING\x20",
  "\x20code\x20)",
  "split",
  "\x0a}\x20",
  "then",
  "now",
  "1374548eTrMGt",
  ".js\x20IN\x20package/functions/funcs",
  "INSTALLED\x20WITH\x20API",
  "\x5chandlers",
  "748bJhMPX",
  "\x20)\x20WHILE\x20CONTACT\x20API",
  "DBD.JS:\x20UPDATE\x20FINISH\x20",
  "join",
  "get",
  "const\x20Parser\x20=\x20",
  "1205lukqdB",
  "exports",
  "1KkEsNQ",
  ".js\x20(",
  "522750aDpbhN",
  "1337167qhbzak",
];
const _0x22f3 = function (_0x364671, _0x36ec63) {
  _0x364671 = _0x364671 - 0x195;
  let _0x1ed6e7 = _0x1ed6[_0x364671];
  return _0x1ed6e7;
};
const _0x2a7ec7 = _0x22f3;
(function (_0x26a283, _0xa63b5c) {
  const _0x332863 = _0x22f3;
  while (!![]) {
    try {
      const _0x3c64f4 =
        parseInt(_0x332863(0x1a4)) +
        parseInt(_0x332863(0x1a2)) +
        -parseInt(_0x332863(0x1c6)) * -parseInt(_0x332863(0x1c3)) +
        parseInt(_0x332863(0x1a8)) * parseInt(_0x332863(0x1ac)) +
        parseInt(_0x332863(0x1b7)) * -parseInt(_0x332863(0x1a3)) +
        -parseInt(_0x332863(0x1bb)) * parseInt(_0x332863(0x1c1)) +
        -parseInt(_0x332863(0x1c5));
      if (_0x3c64f4 === _0xa63b5c) break;
      else _0x26a283["push"](_0x26a283["shift"]());
    } catch (_0x3e4b63) {
      _0x26a283["push"](_0x26a283["shift"]());
    }
  }
})(_0x1ed6, 0xabae8);
const { writeFileSync } = require("fs"),
  axios = require("axios")[_0x2a7ec7(0x1af)],
  p = require(_0x2a7ec7(0x1ab)),
  parser = require(_0x2a7ec7(0x197));
function boosterAPI(_0x18f6d7) {
  const _0x157cb6 = _0x2a7ec7,
    _0x22e878 =
      __dirname[_0x157cb6(0x1a5)](_0x157cb6(0x1ba), "") + "\x5cfunctions",
    _0x1ff533 = __dirname[_0x157cb6(0x1a5)](
      "\x5cpackage\x5chandlers",
      _0x157cb6(0x1c9)
    );
  try {
    axios[_0x157cb6(0x1bf)](_0x157cb6(0x1a7), {
      headers: {
        Authorization: _0x157cb6(0x195) + _0x18f6d7,
        "Content-Type": _0x157cb6(0x1a1),
      },
    })[_0x157cb6(0x1b5)]((_0x48d6a1) => {
      const _0x422609 = _0x157cb6;
      _0x48d6a1["data"]["version"] !== p[_0x422609(0x1ad)]
        ? axios[_0x422609(0x1bf)](
            _0x422609(0x19b) + _0x48d6a1[_0x422609(0x1ae)][_0x422609(0x1a6)],
            {
              headers: {
                Authorization: "Bearer\x20" + _0x18f6d7,
                "Content-Type": "application/json",
              },
            }
          )[_0x422609(0x1b5)](async (_0x223077) => {
            const _0x4846d9 = _0x422609;
            if (_0x223077[_0x4846d9(0x1ae)][_0x4846d9(0x199)])
              return console[_0x4846d9(0x1c8)](
                "DBD.JS:\x20RECEIVED\x20(\x20" +
                  _0x223077["data"][_0x4846d9(0x199)] +
                  _0x4846d9(0x1bc)
              );
            if (!_0x223077[_0x4846d9(0x1ae)]["data"][_0x4846d9(0x1a9)]) return;
            console["log"](
              _0x4846d9(0x19e) + _0x223077[_0x4846d9(0x1ae)][_0x4846d9(0x1a6)]
            );
            const _0x1510ba = Date[_0x4846d9(0x1b6)]();
            for (const _0xd35e3e of _0x223077[_0x4846d9(0x1ae)][
              _0x4846d9(0x1ae)
            ]) {
              console[_0x4846d9(0x1c8)](
                _0x4846d9(0x1b1) + _0xd35e3e + _0x4846d9(0x1b8)
              );
              const _0x283446 = Date[_0x4846d9(0x1b6)]();
              try {
                const _0x35beae = await axios["get"](
                  _0x4846d9(0x1b0) + _0xd35e3e,
                  {
                    headers: {
                      Authorization: "Bearer\x20" + _0x18f6d7,
                      "Content-Type": _0x4846d9(0x1a1),
                    },
                  }
                );
                _0x35beae[_0x4846d9(0x1ae)]["data"] &&
                  (writeFileSync(
                    _0x22e878 + _0x4846d9(0x19f) + _0xd35e3e + ".js",
                    _0x35beae[_0x4846d9(0x1ae)][_0x4846d9(0x1ae)]
                  ),
                  console[_0x4846d9(0x1c8)](
                    _0x4846d9(0x19a) +
                      _0xd35e3e +
                      _0x4846d9(0x1c4) +
                      (Date[_0x4846d9(0x1b6)]() - _0x283446) +
                      _0x4846d9(0x1a0)
                  ),
                  (parser["$" + _0xd35e3e] = _0x4846d9(0x1b9)));
              } catch (_0x7cf101) {
                console[_0x4846d9(0x1c8)](
                  "DBD.JS:\x20FAILED\x20WRITE\x20" +
                    _0xd35e3e +
                    ".js\x20(\x20" +
                    _0x7cf101["response"][_0x4846d9(0x19d)] +
                    _0x4846d9(0x1b2)
                );
              }
            }
            console["log"](
              _0x4846d9(0x1bd) +
                _0x223077[_0x4846d9(0x1ae)][_0x4846d9(0x1a6)] +
                _0x4846d9(0x1c7) +
                (Date[_0x4846d9(0x1b6)]() - _0x1510ba) +
                "ms\x20)"
            ),
              writeFileSync(
                _0x22e878 + _0x4846d9(0x19c),
                _0x4846d9(0x1c0) +
                  JSON[_0x4846d9(0x198)](parser) +
                  "\x0amodule.exports\x20=\x20Parser"
              ),
              (p[_0x4846d9(0x1ad)] =
                _0x223077[_0x4846d9(0x1ae)][_0x4846d9(0x1a6)]),
              writeFileSync(
                _0x1ff533,
                JSON["stringify"](p)
                  [_0x4846d9(0x1b3)](",")
                  [_0x4846d9(0x1be)](",\x0a\x20")
                  ["split"]("{")
                  ["join"]("{\x0a\x20")
                  [_0x4846d9(0x1b3)]("}")
                  [_0x4846d9(0x1be)](_0x4846d9(0x1b4))
                  [_0x4846d9(0x1b3)]("[")
                  ["join"](_0x4846d9(0x196))
                  [_0x4846d9(0x1b3)]("]")
                  [_0x4846d9(0x1be)]("\x0a]\x20")
              );
          })
        : console[_0x422609(0x1c8)](
            _0x422609(0x1aa) + _0x48d6a1[_0x422609(0x1ae)][_0x422609(0x1a6)]
          );
    });
  } catch (_0x458f84) {
    console["log"](
      "DBD.JS:\x20Something\x20happened\x20when\x20contacting\x20API\x20(\x20" +
        _0x458f84["response"][_0x157cb6(0x19d)] +
        _0x157cb6(0x1b2)
    );
  }
}
module[_0x2a7ec7(0x1c2)] = boosterAPI;
