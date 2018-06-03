'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CaseClauseError$ from './Elixir.CaseClauseError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [255545192484780365955146885988448839316]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(155), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(148))], [Symbol.for('module'), Symbol.for('Elixir.CaseClauseError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $CaseClauseError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303386360')], __function_args__, (kv5764607523033863600) => {
            return true;
        })) !== null) {
            let [kv5764607523033863600] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033863600, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $CaseClauseError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303386360'), ElixirScript.Core.Patterns.variable('val576460752303386360')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303386360')], __function_args__, (key5764607523033863600, val5764607523033863600, map5764607523033863600) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033863600, val5764607523033863600, map5764607523033863600] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033863600, val5764607523033863600, map5764607523033863600);
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
    __MODULE__: Symbol.for('Elixir.CaseClauseError'),
    __info__
};
