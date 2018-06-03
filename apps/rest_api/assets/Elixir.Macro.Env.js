'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Macro$Env$ from './Elixir.Macro.Env.js';

import $Enum$ from './Elixir.Enum.js';

import $Path$ from './Elixir.Path.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('in_guard?'), 1), new ElixirScript.Core.Tuple(Symbol.for('in_match?'), 1), new ElixirScript.Core.Tuple(Symbol.for('location'), 1), new ElixirScript.Core.Tuple(Symbol.for('stacktrace'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_match'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [275560593734602101233227440472064865101])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/macro/env.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(151), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(77))], [Symbol.for('module'), Symbol.for('Elixir.Macro.Env')]]);

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

            return new Map([[Symbol.for('__struct__'), $Macro$Env$], [Symbol.for('module'), null], [Symbol.for('file'), 'nofile'], [Symbol.for('line'), 0], [Symbol.for('function'), null], [Symbol.for('context'), null], [Symbol.for('requires'), []], [Symbol.for('aliases'), []], [Symbol.for('functions'), []], [Symbol.for('macros'), []], [Symbol.for('macro_aliases'), []], [Symbol.for('context_modules'), []], [Symbol.for('vars'), []], [Symbol.for('lexical_tracker'), null], [Symbol.for('export_vars'), null], [Symbol.for('match_vars'), Symbol.for('warn')], [Symbol.for('prematch_vars'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv')], __function_args__, (kv0) => {
            return true;
        })) !== null) {
            let [kv0] = __arg_matches__;

            return $Enum$.reduce(kv0, __struct__(), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (k0, v0, acc0) => {
                        return true;
                    })) !== null) {
                        let [k0, v0, acc0] = __arg_matches__;

                        return ElixirScript.Core.maps.update(k0, v0, acc0);
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
    __MODULE__: Symbol.for('Elixir.Macro.Env'),
    __info__
};
