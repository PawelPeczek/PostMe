'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $File$Stream$ from './Elixir.File.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__build__'), 3), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [184930605800290425677706160142922966108])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/file/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(92))], [Symbol.for('module'), Symbol.for('Elixir.File.Stream')]]);

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

            return new Map([[Symbol.for('__struct__'), $File$Stream$], [Symbol.for('line_or_bytes'), Symbol.for('line')], [Symbol.for('modes'), []], [Symbol.for('path'), null], [Symbol.for('raw'), true]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303404857')], __function_args__, (kv5764607523034048570) => {
            return true;
        })) !== null) {
            let [kv5764607523034048570] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034048570, new Map([[Symbol.for('__struct__'), $File$Stream$], [Symbol.for('line_or_bytes'), Symbol.for('line')], [Symbol.for('modes'), []], [Symbol.for('path'), null], [Symbol.for('raw'), true]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303404857'), ElixirScript.Core.Patterns.variable('val576460752303404857')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303404857')], __function_args__, (key5764607523034048570, val5764607523034048570, map5764607523034048570) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034048570, val5764607523034048570, map5764607523034048570] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034048570, val5764607523034048570, map5764607523034048570);
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
    __MODULE__: Symbol.for('Elixir.File.Stream'),
    __info__
};
