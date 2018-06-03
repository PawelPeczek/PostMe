'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Stream$ from './Elixir.Inspect.Stream.js';

import $Stream$ from './Elixir.Stream.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [230735361206206406841144052446377306008]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(152))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Stream')]]);

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

            return $Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Stream$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('enum'), ElixirScript.Core.Patterns.variable('enum')], [Symbol.for('funs'), ElixirScript.Core.Patterns.variable('funs')]]), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (enum0, funs0, opts0) => {
            return true;
        })) !== null) {
            let [enum0, funs0, opts0] = __arg_matches__;

            const [inner0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inner'), [new ElixirScript.Core.Tuple(Symbol.for('enum'), enum0), new ElixirScript.Core.Tuple(Symbol.for('funs'), $Enum$.reverse(funs0))]);

            return $Inspect$Algebra$.concat(['#Stream<', $Inspect$Algebra$.to_doc(inner0, opts0), '>']);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Stream'),
    __info__
};
