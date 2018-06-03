'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Version$Requirement$ from './Elixir.Version.Requirement.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [199235173782089903107836072206876318737])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(227), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(17))], [Symbol.for('module'), Symbol.for('Elixir.Version.Requirement')]]);

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

            return new Map([[Symbol.for('__struct__'), $Version$Requirement$], [Symbol.for('compiled'), null], [Symbol.for('matchspec'), null], [Symbol.for('source'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303357656')], __function_args__, (kv5764607523033576560) => {
            return true;
        })) !== null) {
            let [kv5764607523033576560] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033576560, new Map([[Symbol.for('__struct__'), $Version$Requirement$], [Symbol.for('compiled'), null], [Symbol.for('matchspec'), null], [Symbol.for('source'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303357656'), ElixirScript.Core.Patterns.variable('val576460752303357656')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303357656')], __function_args__, (key5764607523033576560, val5764607523033576560, map5764607523033576560) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033576560, val5764607523033576560, map5764607523033576560] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033576560, val5764607523033576560, map5764607523033576560);
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
    __MODULE__: Symbol.for('Elixir.Version.Requirement'),
    __info__
};
