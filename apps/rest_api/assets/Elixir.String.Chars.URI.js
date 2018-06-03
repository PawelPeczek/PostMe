'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$URI$ from './Elixir.String.Chars.URI.js';

import $URI$ from './Elixir.URI.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [114199869194027284165779794454674304491]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $URI$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/uri.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(235))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.URI')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $URI$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$URI$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function extract_authority(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('host'), null], [Symbol.for('authority'), ElixirScript.Core.Patterns.variable('authority')]])], __function_args__, (authority0) => {
            return true;
        })) !== null) {
            let [authority0] = __arg_matches__;

            return authority0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('host'), ElixirScript.Core.Patterns.variable('host')], [Symbol.for('userinfo'), ElixirScript.Core.Patterns.variable('userinfo')], [Symbol.for('port'), ElixirScript.Core.Patterns.variable('port')]])], __function_args__, (host0, userinfo0, port0) => {
            return true;
        })) !== null) {
            let [host0, userinfo0, port0] = __arg_matches__;

            return [ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347165')], (x5764607523033471650) => {
                return [];
            }, (x5764607523033471650) => {
                return x5764607523033471650 === null || x5764607523033471650 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat(userinfo0, '@');
            }, () => {
                return true;
            })).call(this, userinfo0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347101')], (x5764607523033471010) => {
                return host0;
            }, (x5764607523033471010) => {
                return x5764607523033471010 === null || x5764607523033471010 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ['[', ElixirScript.Core.Functions.concat(host0, ']')];
            }, () => {
                return true;
            })).call(this, $String$.contains__qmark__(host0, ':')), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347037')], (x5764607523033470370) => {
                return [];
            }, (x5764607523033470370) => {
                return x5764607523033470370 === null || x5764607523033470370 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat(':', ElixirScript.Core.erlang.integer_to_binary(port0));
            }, () => {
                return true;
            })).call(this, port0)];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('scheme'), ElixirScript.Core.Patterns.variable('scheme')], [Symbol.for('port'), ElixirScript.Core.Patterns.variable('port')], [Symbol.for('path'), ElixirScript.Core.Patterns.variable('path')], [Symbol.for('query'), ElixirScript.Core.Patterns.variable('query')], [Symbol.for('fragment'), ElixirScript.Core.Patterns.variable('fragment')]]))], __function_args__, (scheme0, port0, path0, query0, fragment0, uri0) => {
            return true;
        })) !== null) {
            let [scheme0, port0, path0, query0, fragment0, uri0] = __arg_matches__;

            const [uri1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('uri'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bound(port0)], () => {
                return new Map([...uri0, [Symbol.for('port'), null]]);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return uri0;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347549')], (x5764607523033475490) => {
                return x5764607523033475490;
            }, (x5764607523033475490) => {
                return x5764607523033475490 === null || x5764607523033475490 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $URI$.default_port(scheme0);
            }, () => {
                return true;
            })).call(this, scheme0)));

            const [authority0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('authority'), extract_authority(uri1));

            return ElixirScript.Core.erlang.iolist_to_binary([ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347485')], (x5764607523033474850) => {
                return [];
            }, (x5764607523033474850) => {
                return x5764607523033474850 === null || x5764607523033474850 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return [scheme0, 58];
            }, () => {
                return true;
            })).call(this, scheme0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347421')], (x5764607523033474210) => {
                return [];
            }, (x5764607523033474210) => {
                return x5764607523033474210 === null || x5764607523033474210 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat('//', authority0);
            }, () => {
                return true;
            })).call(this, authority0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347357')], (x5764607523033473570) => {
                return [];
            }, (x5764607523033473570) => {
                return x5764607523033473570 === null || x5764607523033473570 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return path0;
            }, () => {
                return true;
            })).call(this, path0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347293')], (x5764607523033472930) => {
                return [];
            }, (x5764607523033472930) => {
                return x5764607523033472930 === null || x5764607523033472930 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat('?', query0);
            }, () => {
                return true;
            })).call(this, query0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303347229')], (x5764607523033472290) => {
                return [];
            }, (x5764607523033472290) => {
                return x5764607523033472290 === null || x5764607523033472290 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat('#', fragment0);
            }, () => {
                return true;
            })).call(this, fragment0)]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.URI'),
    __info__
};
