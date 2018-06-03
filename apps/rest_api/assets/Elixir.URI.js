'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $URI$ from './Elixir.URI.js';

import $Enum$ from './Elixir.Enum.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $IO$ from './Elixir.IO.js';

import $Dict$ from './Elixir.Dict.js';

import $Collectable$ from './Elixir.Collectable.js';

import $String$ from './Elixir.String.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

import $Regex$ from './Elixir.Regex.js';

import $Stream$ from './Elixir.Stream.js';

import $String$Chars$URI$ from './Elixir.String.Chars.URI.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('char_reserved?'), 1), new ElixirScript.Core.Tuple(Symbol.for('char_unescaped?'), 1), new ElixirScript.Core.Tuple(Symbol.for('char_unreserved?'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_query'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_query'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode_www_form'), 1), new ElixirScript.Core.Tuple(Symbol.for('default_port'), 1), new ElixirScript.Core.Tuple(Symbol.for('default_port'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode_query'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode_www_form'), 1), new ElixirScript.Core.Tuple(Symbol.for('merge'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('query_decoder'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [257170529072906971551361195004537750153])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/uri.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(95), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(137))], [Symbol.for('module'), Symbol.for('Elixir.URI')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __struct__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new Map([[Symbol.for('__struct__'), $URI$], [Symbol.for('authority'), null], [Symbol.for('fragment'), null], [Symbol.for('host'), null], [Symbol.for('path'), null], [Symbol.for('port'), null], [Symbol.for('query'), null], [Symbol.for('scheme'), null], [Symbol.for('userinfo'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303349119')], __function_args__, (kv5764607523033491190) => {
            return true;
        })) !== null) {
            let [kv5764607523033491190] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033491190, new Map([[Symbol.for('__struct__'), $URI$], [Symbol.for('authority'), null], [Symbol.for('fragment'), null], [Symbol.for('host'), null], [Symbol.for('path'), null], [Symbol.for('port'), null], [Symbol.for('query'), null], [Symbol.for('scheme'), null], [Symbol.for('userinfo'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303349119'), ElixirScript.Core.Patterns.variable('val576460752303349119')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303349119')], __function_args__, (key5764607523033491190, val5764607523033491190, map5764607523033491190) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033491190, val5764607523033491190, map5764607523033491190] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033491190, val5764607523033491190, map5764607523033491190);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function default_port(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('scheme')], __function_args__, (scheme0) => {
            return ElixirScript.Core.erlang.is_binary(scheme0);
        })) !== null) {
            let [scheme0] = __arg_matches__;

            return ElixirScript.Core.elixir_config.safe_get(new ElixirScript.Core.Tuple(Symbol.for('uri'), scheme0), null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    default_port,
    __MODULE__: Symbol.for('Elixir.URI'),
    __info__
};
