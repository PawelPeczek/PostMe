'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Regex$CompileError$ from './Elixir.Regex.CompileError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [26408352573106198523336938582206202504]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/regex.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(136))], [Symbol.for('module'), Symbol.for('Elixir.Regex.CompileError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Regex$CompileError$], [Symbol.for('message'), 'regex could not be compiled']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303364408')], __function_args__, (kv5764607523033644080) => {
            return true;
        })) !== null) {
            let [kv5764607523033644080] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033644080, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Regex$CompileError$], [Symbol.for('message'), 'regex could not be compiled']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303364408'), ElixirScript.Core.Patterns.variable('val576460752303364408')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303364408')], __function_args__, (key5764607523033644080, val5764607523033644080, map5764607523033644080) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033644080, val5764607523033644080, map5764607523033644080] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033644080, val5764607523033644080, map5764607523033644080);
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
    __MODULE__: Symbol.for('Elixir.Regex.CompileError'),
    __info__
};
