'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$OutOfBoundsError$ from './Elixir.Enum.OutOfBoundsError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [260172532340891872221700447844737423297]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(151), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(193))], [Symbol.for('module'), Symbol.for('Elixir.Enum.OutOfBoundsError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Enum$OutOfBoundsError$], [Symbol.for('message'), 'out of bounds error']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303367388')], __function_args__, (kv5764607523033673880) => {
            return true;
        })) !== null) {
            let [kv5764607523033673880] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033673880, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Enum$OutOfBoundsError$], [Symbol.for('message'), 'out of bounds error']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303367388'), ElixirScript.Core.Patterns.variable('val576460752303367388')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303367388')], __function_args__, (key5764607523033673880, val5764607523033673880, map5764607523033673880) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033673880, val5764607523033673880, map5764607523033673880] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033673880, val5764607523033673880, map5764607523033673880);
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
    __MODULE__: Symbol.for('Elixir.Enum.OutOfBoundsError'),
    __info__
};
