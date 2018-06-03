'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $HashDict$ from './Elixir.HashDict.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $KeyError$ from './Elixir.KeyError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('dict_delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 2), new ElixirScript.Core.Tuple(Symbol.for('equal?'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch!'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('has_key?'), 2), new ElixirScript.Core.Tuple(Symbol.for('keys'), 1), new ElixirScript.Core.Tuple(Symbol.for('merge'), 2), new ElixirScript.Core.Tuple(Symbol.for('merge'), 3), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('pop'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop'), 3), new ElixirScript.Core.Tuple(Symbol.for('pop_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('put'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('take'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('update'), 4), new ElixirScript.Core.Tuple(Symbol.for('update!'), 3), new ElixirScript.Core.Tuple(Symbol.for('values'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [336480687393820339428800902584586456993])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/hash_dict.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(161))], [Symbol.for('module'), Symbol.for('Elixir.HashDict')]]);

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

            return new Map([[Symbol.for('__struct__'), $HashDict$], [Symbol.for('root'), new ElixirScript.Core.Tuple([], [], [], [], [], [], [], [])], [Symbol.for('size'), 0]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303404925')], __function_args__, (kv5764607523034049250) => {
            return true;
        })) !== null) {
            let [kv5764607523034049250] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034049250, new Map([[Symbol.for('__struct__'), $HashDict$], [Symbol.for('root'), new ElixirScript.Core.Tuple([], [], [], [], [], [], [], [])], [Symbol.for('size'), 0]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303404925'), ElixirScript.Core.Patterns.variable('val576460752303404925')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303404925')], __function_args__, (key5764607523034049250, val5764607523034049250, map5764607523034049250) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034049250, val5764607523034049250, map5764607523034049250] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034049250, val5764607523034049250, map5764607523034049250);
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
    __MODULE__: Symbol.for('Elixir.HashDict'),
    __info__
};
