'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Version$ from './Elixir.Version.js';

import $Enum$ from './Elixir.Enum.js';

import $Version$Requirement$ from './Elixir.Version.Requirement.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Version$InvalidRequirementError$ from './Elixir.Version.InvalidRequirementError.js';

import $Version$Parser$ from './Elixir.Version.Parser.js';

import $Version$InvalidVersionError$ from './Elixir.Version.InvalidVersionError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('compare'), 2), new ElixirScript.Core.Tuple(Symbol.for('compile_requirement'), 1), new ElixirScript.Core.Tuple(Symbol.for('match?'), 2), new ElixirScript.Core.Tuple(Symbol.for('match?'), 3), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse!'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_requirement'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [37143369784720050239008568267861087860])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(116))], [Symbol.for('module'), Symbol.for('Elixir.Version')]]);

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

            return new Map([[Symbol.for('__struct__'), $Version$], [Symbol.for('build'), null], [Symbol.for('major'), null], [Symbol.for('minor'), null], [Symbol.for('patch'), null], [Symbol.for('pre'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303349659')], __function_args__, (kv5764607523033496590) => {
            return true;
        })) !== null) {
            let [kv5764607523033496590] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033496590, new Map([[Symbol.for('__struct__'), $Version$], [Symbol.for('build'), null], [Symbol.for('major'), null], [Symbol.for('minor'), null], [Symbol.for('patch'), null], [Symbol.for('pre'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303349659'), ElixirScript.Core.Patterns.variable('val576460752303349659')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303349659')], __function_args__, (key5764607523033496590, val5764607523033496590, map5764607523033496590) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033496590, val5764607523033496590, map5764607523033496590] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033496590, val5764607523033496590, map5764607523033496590);
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
    __MODULE__: Symbol.for('Elixir.Version'),
    __info__
};
