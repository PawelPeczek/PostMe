'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Range$ from './Elixir.Range.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 2), new ElixirScript.Core.Tuple(Symbol.for('range?'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [267233686000185695078054124394647787545])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(25))], [Symbol.for('module'), Symbol.for('Elixir.Range')]]);

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

            return new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), null], [Symbol.for('last'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303353722')], __function_args__, (kv5764607523033537220) => {
            return true;
        })) !== null) {
            let [kv5764607523033537220] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033537220, new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), null], [Symbol.for('last'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303353722'), ElixirScript.Core.Patterns.variable('val576460752303353722')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303353722')], __function_args__, (key5764607523033537220, val5764607523033537220, map5764607523033537220) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033537220, val5764607523033537220, map5764607523033537220] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033537220, val5764607523033537220, map5764607523033537220);
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
    __MODULE__: Symbol.for('Elixir.Range'),
    __info__
};
