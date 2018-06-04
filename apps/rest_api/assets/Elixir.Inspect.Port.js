'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Port$ from './Elixir.Inspect.Port.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [15160662318133639365752967741068430619]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(27))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Port')]]);

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

            return {};
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Port$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('port'), ElixirScript.Core.Patterns.variable('_opts')], __function_args__, (port0, _opts0) => {
            return true;
        })) !== null) {
            let [port0, _opts0] = __arg_matches__;

            return ElixirScript.Core.erlang.iolist_to_binary(ElixirScript.Core.erlang.port_to_list(port0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Port'),
    __info__
};