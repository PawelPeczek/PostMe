'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CompileError$ from './Elixir.CompileError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

import $Path$ from './Elixir.Path.js';

import $Exception$ from './Elixir.Exception.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [214339158794149670295541055762773870614]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(22))], [Symbol.for('module'), Symbol.for('Elixir.CompileError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $CompileError$], [Symbol.for('description'), 'compile error'], [Symbol.for('file'), null], [Symbol.for('line'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303392760')], __function_args__, (kv5764607523033927600) => {
            return true;
        })) !== null) {
            let [kv5764607523033927600] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033927600, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $CompileError$], [Symbol.for('description'), 'compile error'], [Symbol.for('file'), null], [Symbol.for('line'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303392760'), ElixirScript.Core.Patterns.variable('val576460752303392760')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303392760')], __function_args__, (key5764607523033927600, val5764607523033927600, map5764607523033927600) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033927600, val5764607523033927600, map5764607523033927600] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033927600, val5764607523033927600, map5764607523033927600);
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
    __MODULE__: Symbol.for('Elixir.CompileError'),
    __info__
};
