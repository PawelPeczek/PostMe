'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $GenEvent$Stream$ from './Elixir.GenEvent.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('code_change'), 3), new ElixirScript.Core.Tuple(Symbol.for('handle_call'), 2), new ElixirScript.Core.Tuple(Symbol.for('handle_event'), 2), new ElixirScript.Core.Tuple(Symbol.for('handle_info'), 2), new ElixirScript.Core.Tuple(Symbol.for('init'), 1), new ElixirScript.Core.Tuple(Symbol.for('terminate'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [167840825463851967336174413324358969217])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/gen_event/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(129))], [Symbol.for('module'), Symbol.for('Elixir.GenEvent.Stream')]]);

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

            return new Map([[Symbol.for('__struct__'), $GenEvent$Stream$], [Symbol.for('manager'), null], [Symbol.for('timeout'), Symbol.for('infinity')]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303407997')], __function_args__, (kv5764607523034079970) => {
            return true;
        })) !== null) {
            let [kv5764607523034079970] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034079970, new Map([[Symbol.for('__struct__'), $GenEvent$Stream$], [Symbol.for('manager'), null], [Symbol.for('timeout'), Symbol.for('infinity')]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303407997'), ElixirScript.Core.Patterns.variable('val576460752303407997')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303407997')], __function_args__, (key5764607523034079970, val5764607523034079970, map5764607523034079970) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034079970, val5764607523034079970, map5764607523034079970] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034079970, val5764607523034079970, map5764607523034079970);
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
    __MODULE__: Symbol.for('Elixir.GenEvent.Stream'),
    __info__
};
