'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArithmeticError$ from './Elixir.ArithmeticError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [213438124891600708480044533127007682864]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(48))], [Symbol.for('module'), Symbol.for('Elixir.ArithmeticError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ArithmeticError$], [Symbol.for('message'), 'bad argument in arithmetic expression']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303403643')], __function_args__, (kv5764607523034036430) => {
            return true;
        })) !== null) {
            let [kv5764607523034036430] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034036430, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ArithmeticError$], [Symbol.for('message'), 'bad argument in arithmetic expression']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303403643'), ElixirScript.Core.Patterns.variable('val576460752303403643')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303403643')], __function_args__, (key5764607523034036430, val5764607523034036430, map5764607523034036430) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034036430, val5764607523034036430, map5764607523034036430] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034036430, val5764607523034036430, map5764607523034036430);
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
    __MODULE__: Symbol.for('Elixir.ArithmeticError'),
    __info__
};
