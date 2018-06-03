'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Range$ from './Elixir.Inspect.Range.js';

import $Range$ from './Elixir.Range.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [302616214886779864529504009861057174503]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Range$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(227), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(231))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Range')]]);

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

            return $Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Range$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (first0, last0, opts0) => {
            return true;
        })) !== null) {
            let [first0, last0, opts0] = __arg_matches__;

            return $Inspect$Algebra$.concat([$Inspect$Algebra$.to_doc(first0, opts0), '..', $Inspect$Algebra$.to_doc(last0, opts0)]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Range'),
    __info__
};
