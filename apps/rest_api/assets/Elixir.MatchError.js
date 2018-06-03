'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $MatchError$ from './Elixir.MatchError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [85639230766436077836835831321359695797]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(17), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(181))], [Symbol.for('module'), Symbol.for('Elixir.MatchError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $MatchError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303383161')], __function_args__, (kv5764607523033831610) => {
            return true;
        })) !== null) {
            let [kv5764607523033831610] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033831610, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $MatchError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303383161'), ElixirScript.Core.Patterns.variable('val576460752303383161')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303383161')], __function_args__, (key5764607523033831610, val5764607523033831610, map5764607523033831610) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033831610, val5764607523033831610, map5764607523033831610] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033831610, val5764607523033831610, map5764607523033831610);
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

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.MatchError'),
    __info__
};
