(function(w, name) {
try {

// Stilbüro jQuery.cookie. Heavily edited.

function cookie(name, value, options, /* ... */ c, i, j) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
        }
        c = options['path'], i = options['expires'];
        if (i) {
            j = new Date();
            j.setTime(j.getTime() + (i * 24 * 60 * 60 * 1000));
            j = '; expires=' + j.toUTCString();
        }
        document.cookie = [ name, '=', encodeURIComponent(value), (c ? '; path=' + c : ''), j || '' ].join('');
    } else { // only name given, get 
        c = document.cookie;
        if (c) {
            i = c.indexOf(name+'=');
            if (i>-1) {
                j=c.indexOf(';',i);
                return decodeURIComponent(c.substring(i+name.length+1,j<0?c.length:j));
            }
        }
    }
};

// json2.js <https://github.com/douglascrockford/JSON-js/blob/master/json2.js>

var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        meta = { // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };

    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

// Waldbeere

 function keyVal(key, val) {
  return quote(key) + ":" + quote(val);
 }

 var obj = (w[name] = w[name] || {}), tests, section = {}, selectionParts = [], n, j, keys, key, restored,

 init = function() {
  tests = obj['tests'];
  if ((n = cookie(name))) {
   restored = eval('({' + n + '})');
   for (n in restored) {
     j = restored[n];
     if (tests[n]) {
      if (tests[n][j] || !j) {
       section[n] = tests[n][j] || '';
       selectionParts.push(keyVal(n, j));
      }
     }
   }
  }
  for (n in tests) {
   if (!section[n] && section[n] !== '') {
    keys = [];
    for (j in tests[n]) {
     keys.push(j);
    }
    if (!obj['config']['noDefault'] && Math.random() * (keys.length + 1) < 1) { // select default every 1/(choices + 1) times
     key = '';
    }
    else {
     key = keys[Math.floor(Math.random() * keys.length)];
    }
    section[n] = tests[n][key];
    selectionParts.push(keyVal(n, key));
   }
  }
  selectionParts.sort();
  obj['customVar'] = selectionParts.join(',');
  cookie(name, obj['customVar'], obj['config']);
 }

 obj['section'] = function(name) {
  init();
  init = eval;
  section[name] && document.write(section[name] + "<nosc"+"ript>");
 }


}
catch (e) {}
})(window, 'Waldbeere');
