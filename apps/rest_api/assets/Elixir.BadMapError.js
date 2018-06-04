'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadMapError$ from './Elixir.BadMapError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [69588818322969794867529223642196421038]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(174))], [Symbol.for('module'), Symbol.for('Elixir.BadMapError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $BadMapError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303390040')], __function_args__, (kv5764607523033900400) => {
            return true;
        })) !== null) {
            let [kv5764607523033900400] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033900400, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $BadMapError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303390040'), ElixirScript.Core.Patterns.variable('val576460752303390040')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303390040')], __function_args__, (key5764607523033900400, val5764607523033900400, map5764607523033900400) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033900400, val5764607523033900400, map5764607523033900400] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033900400, val5764607523033900400, map5764607523033900400);
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
    __MODULE__: Symbol.for('Elixir.BadMapError'),
    __info__
};