'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$Chars$ from './Elixir.List.Chars.js';

import $List$Chars$Integer$ from './Elixir.List.Chars.Integer.js';

import $Integer$ from './Elixir.Integer.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [300441043911639386455467450910240676971]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$List$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $List$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Integer$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/list/chars.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(107))], [Symbol.for('module'), Symbol.for('Elixir.List.Chars.Integer')]]);

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

            return $Integer$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$Chars$Integer$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term')], __function_args__, (term0) => {
            return true;
        })) !== null) {
            let [term0] = __arg_matches__;

            return ElixirScript.Core.erlang.integer_to_list(term0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_charlist,
    __MODULE__: Symbol.for('Elixir.List.Chars.Integer'),
    __info__
};
