'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$Chars$ from './Elixir.List.Chars.js';

import $List$Chars$List$ from './Elixir.List.Chars.List.js';

import $List$ from './Elixir.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [116359312784681807263588124499493424978]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$List$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $List$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $List$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/list/chars.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(82))], [Symbol.for('module'), Symbol.for('Elixir.List.Chars.List')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$Chars$List$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$Chars$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_charlist(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list')], __function_args__, (list0) => {
            return true;
        })) !== null) {
            let [list0] = __arg_matches__;

            return list0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_charlist,
    __MODULE__: Symbol.for('Elixir.List.Chars.List'),
    __info__
};
