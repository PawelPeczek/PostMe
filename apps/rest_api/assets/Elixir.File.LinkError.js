'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $File$LinkError$ from './Elixir.File.LinkError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [146547186029575529535324163644849627828]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(26), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(180))], [Symbol.for('module'), Symbol.for('Elixir.File.LinkError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$LinkError$], [Symbol.for('action'), ''], [Symbol.for('existing'), null], [Symbol.for('new'), null], [Symbol.for('reason'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303363615')], __function_args__, (kv5764607523033636150) => {
            return true;
        })) !== null) {
            let [kv5764607523033636150] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033636150, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$LinkError$], [Symbol.for('action'), ''], [Symbol.for('existing'), null], [Symbol.for('new'), null], [Symbol.for('reason'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303363615'), ElixirScript.Core.Patterns.variable('val576460752303363615')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303363615')], __function_args__, (key5764607523033636150, val5764607523033636150, map5764607523033636150) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033636150, val5764607523033636150, map5764607523033636150] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033636150, val5764607523033636150, map5764607523033636150);
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
    __MODULE__: Symbol.for('Elixir.File.LinkError'),
    __info__
};
