// THIS FILE IS AUTOGENERATED! See lib/validation.js.tpl
/*global module, window, define*/

(function () {
    "use strict";

    // Poor man's /x flag:
    // new RegExp(concatRegExps(
    //    /blabla/,
    //    /blablabla/
    // ), "i").test(string);
    function concatRegExps() { // ...
        var source = '';
        for (var i = 0 ; i < arguments.length ; i += 1) {
            if (Object.prototype.toString.call(arguments[i]) === '[object RegExp]') {
                source += arguments[i].source;
            } else {
                source += arguments[i];
            }
        }
        return source;
    }

    var ipv4DigitRegExpSource = /([0-9]|1?[0-9][0-9]|2[0-4][0-9]|25[0-5])/.source,
        validation = {
            functions: {}
        },
        fragments = {
            tld: /(?:xn--(?:0zwm56d|11b5bs3a9aj6g|3e0b707e|45brj9c|80akhbyknj4f|80ao21a|90a3ac|9t4b11yi5a|clchc0ea0b2g2a9gcd|deba0ad|fiqs8s|fiqz9s|fpcrj9c3d|fzc2c9e2c|g6w251d|gecrj9c|h2brj9c|hgbk6aj7f53bba|hlcj6aya9esc7a|j6w193g|jxalpdlp|kgbechtv|kprw13d|kpry57d|lgbbat1ad8j|mgb9awbf|mgbaam7a8h|mgbayh7gpa|mgbbh1a71e|mgbc0a9azcg|mgberp4a5d4ar|o3cw4h|ogbpf8fl|p1ai|pgbs0dh|s9brj9c|wgbh1c|wgbl6a|xkc2al3hye2a|xkc2dl3a5ee0h|yfro4i67o|ygbi2ammx|zckzah)|சிங்கப்பூர்|испытание|السعودية|பரிட்சை|இந்தியா|परीक्षा|الجزائر|آزمایشی|இலங்கை|فلسطين|امارات|المغرب|الاردن|إختبار|δοκιμή|travel|museum|భారత్|سورية|بھارت|ලංකා|ભારત|ਭਾਰਤ|ভারত|भारत|عمان|تونس|טעסט|post|name|mobi|jobs|info|coop|asia|arpa|aero|테스트|新加坡|テスト|ไทย|مصر|قطر|қаз|срб|xxx|tel|pro|org|net|mil|int|gov|edu|com|cat|biz|한국|香港|測試|测试|台灣|台湾|中國|中国|рф|z[amw]|y[et]|w[fs]|v[aceginu]|u[agksyz]|t[cdfghjklmnoprtvwz]|s[abcdeghijklmnortuvxyz]|r[eosuw]|qa|p[aefghklmnrstwy]|om|n[acefgilopruz]|m[acdeghklmnopqrstuvwxyz]|l[abcikrstuvy]|k[eghimnprwyz]|j[emop]|i[delmnoqrst]|h[kmnrtu]|g[abdefghilmnpqrstuwy]|f[ijkmor]|e[cegrstu]|d[ejkmoz]|c[acdfghiklmnoruvwxyz]|b[abdefghijmnorstvwyz]|a[cdefgilmnoqrstuwxz])/i, // See /lib/tld.js
            domainPart: /[a-z0-9](?:[\-a-z0-9]*[a-z0-9])?/i,
            port: /\d{1,5}/,
            localpart: /[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*/i, // taken from: http://www.regular-expressions.info/email.html
            user: /[^:@\/]+/i,
            uuid: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
            lowerCaseUuid: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
            upperCaseUuid: /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/,
            password: /[^@\/]+?/i,
            pathname: /[\w%+@*\-\.\/\(\)&=;~]*/,
            search:   /[\w%+@*\-\.\/\(\)&=;\?~]*/,
            hash:     /[\w%+@*\-\.\/\(\)&=;\?#~]*/,
            ipv4: new RegExp('(?:' + ipv4DigitRegExpSource + '\\.){3}' + ipv4DigitRegExpSource)
        },
        name;

    // Highlevel regexes composed of regex fragments
    fragments.domain = new RegExp(fragments.domainPart.source + "\\." + fragments.tld.source, "i");
    fragments.subdomain = new RegExp("(?:" + fragments.domainPart.source + "\\.)*" + fragments.domain.source, "i");
    fragments.email = new RegExp(fragments.localpart.source + "@" + fragments.subdomain.source, "i");
    fragments.mailtoUrl = new RegExp("mailto:" + fragments.email.source, "i"); // TODO: This needs to be improved

    // Same as location.pathname + location.search + location.hash in the browser:
    fragments.pathnameSearchHash = new RegExp(concatRegExps(
        "(?:/", fragments.pathname,
            "(?:\\?", fragments.search, ")?",
            "(?:#", fragments.hash, ")?",
        ")?" // See http://www.ietf.org/rfc/rfc1738.txt
    ));

    function createHttpishUrlRegExp(schemeRegExp) {
        // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]
        return new RegExp(concatRegExps(
            schemeRegExp, "://",
            "(?:",
                fragments.user,
                "(?::",
                    fragments.password,
                ")?@",
            ")?",
            "(?:",
                fragments.subdomain,
                "|",
                fragments.ipv4,
            ")",
            "(?::", fragments.port, ")?",
            fragments.pathnameSearchHash
        ), "i");
    }

    fragments.httpUrl = createHttpishUrlRegExp(/https?/);
    fragments.ftpUrl = createHttpishUrlRegExp(/ftp/);

    // Alias 'httpUrl' as 'url' for backwards compatibility:
    fragments.url = fragments.httpUrl;

    // Add convenience regexes and functions
    for (name in fragments) {
        if (fragments.hasOwnProperty(name)) {
            validation[name] = new RegExp("^" + fragments[name].source + "$", "i");
            validation.functions[name] = (function (name) {
                return function (value) {
                    return validation[name].test(value);
                };
            }(name));
        }
    }

    // Expose regex fragments for matching inside larger texts
    validation.fragments = fragments;

    // CommonJS module
    if (typeof module !== 'undefined') {
        module.exports = validation;
    } else {
        // Assume browser
        if (typeof define === 'function') {
            // Assume require.js, expose AMD module
            define([], function () {
                return validation;
            });
        } else {
            window.one = window.one || {};
            window.one.validation = validation;
        }
    }

}());

