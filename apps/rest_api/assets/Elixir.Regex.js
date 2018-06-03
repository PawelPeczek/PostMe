'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Regex$ from './Elixir.Regex.js';

import $Enum$ from './Elixir.Enum.js';

import $Collectable$ from './Elixir.Collectable.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Regex$CompileError$ from './Elixir.Regex.CompileError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Map$ from './Elixir.Map.js';

import $IO$ from './Elixir.IO.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile'), 2), new ElixirScript.Core.Tuple(Symbol.for('compile!'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile!'), 2), new ElixirScript.Core.Tuple(Symbol.for('escape'), 1), new ElixirScript.Core.Tuple(Symbol.for('match?'), 2), new ElixirScript.Core.Tuple(Symbol.for('named_captures'), 2), new ElixirScript.Core.Tuple(Symbol.for('named_captures'), 3), new ElixirScript.Core.Tuple(Symbol.for('names'), 1), new ElixirScript.Core.Tuple(Symbol.for('opts'), 1), new ElixirScript.Core.Tuple(Symbol.for('re_pattern'), 1), new ElixirScript.Core.Tuple(Symbol.for('recompile'), 1), new ElixirScript.Core.Tuple(Symbol.for('recompile!'), 1), new ElixirScript.Core.Tuple(Symbol.for('regex?'), 1), new ElixirScript.Core.Tuple(Symbol.for('replace'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace'), 4), new ElixirScript.Core.Tuple(Symbol.for('run'), 2), new ElixirScript.Core.Tuple(Symbol.for('run'), 3), new ElixirScript.Core.Tuple(Symbol.for('scan'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan'), 3), new ElixirScript.Core.Tuple(Symbol.for('source'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('split'), 3), new ElixirScript.Core.Tuple(Symbol.for('unescape_map'), 1), new ElixirScript.Core.Tuple(Symbol.for('version'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [247969679601571065935211065911864467051])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/regex.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(107))], [Symbol.for('module'), Symbol.for('Elixir.Regex')]]);

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

            return new Map([[Symbol.for('__struct__'), $Regex$], [Symbol.for('opts'), ''], [Symbol.for('re_pattern'), null], [Symbol.for('re_version'), ''], [Symbol.for('source'), '']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303349178')], __function_args__, (kv5764607523033491780) => {
            return true;
        })) !== null) {
            let [kv5764607523033491780] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033491780, new Map([[Symbol.for('__struct__'), $Regex$], [Symbol.for('opts'), ''], [Symbol.for('re_pattern'), null], [Symbol.for('re_version'), ''], [Symbol.for('source'), '']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303349178'), ElixirScript.Core.Patterns.variable('val576460752303349178')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303349178')], __function_args__, (key5764607523033491780, val5764607523033491780, map5764607523033491780) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033491780, val5764607523033491780, map5764607523033491780] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033491780, val5764607523033491780, map5764607523033491780);
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
    __MODULE__: Symbol.for('Elixir.Regex'),
    __info__
};
