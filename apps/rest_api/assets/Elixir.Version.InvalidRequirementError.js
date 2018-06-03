'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Version$InvalidRequirementError$ from './Elixir.Version.InvalidRequirementError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [133511855725679980963061338423404181155]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(163))], [Symbol.for('module'), Symbol.for('Elixir.Version.InvalidRequirementError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Version$InvalidRequirementError$], [Symbol.for('requirement'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303337433')], __function_args__, (kv5764607523033374330) => {
            return true;
        })) !== null) {
            let [kv5764607523033374330] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033374330, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Version$InvalidRequirementError$], [Symbol.for('requirement'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303337433'), ElixirScript.Core.Patterns.variable('val576460752303337433')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303337433')], __function_args__, (key5764607523033374330, val5764607523033374330, map5764607523033374330) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033374330, val5764607523033374330, map5764607523033374330] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033374330, val5764607523033374330, map5764607523033374330);
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
    __MODULE__: Symbol.for('Elixir.Version.InvalidRequirementError'),
    __info__
};
