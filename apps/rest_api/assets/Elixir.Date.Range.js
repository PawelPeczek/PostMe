'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Date$Range$ from './Elixir.Date.Range.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [338800137058592775133320363598342513377])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/date_range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(225))], [Symbol.for('module'), Symbol.for('Elixir.Date.Range')]]);

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

            return new Map([[Symbol.for('__struct__'), $Date$Range$], [Symbol.for('first'), null], [Symbol.for('first_in_iso_days'), null], [Symbol.for('last'), null], [Symbol.for('last_in_iso_days'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303422587')], __function_args__, (kv5764607523034225870) => {
            return true;
        })) !== null) {
            let [kv5764607523034225870] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034225870, new Map([[Symbol.for('__struct__'), $Date$Range$], [Symbol.for('first'), null], [Symbol.for('first_in_iso_days'), null], [Symbol.for('last'), null], [Symbol.for('last_in_iso_days'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303422587'), ElixirScript.Core.Patterns.variable('val576460752303422587')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303422587')], __function_args__, (key5764607523034225870, val5764607523034225870, map5764607523034225870) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034225870, val5764607523034225870, map5764607523034225870] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034225870, val5764607523034225870, map5764607523034225870);
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
    __MODULE__: Symbol.for('Elixir.Date.Range'),
    __info__
};
