'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('start'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [141630334077200870313421427292757555349])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/home/asoltysik/studia/erlang/PostMe/apps/front/lib/front.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(149))], [Symbol.for('module'), Symbol.for('Elixir.PostMe.Init')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function start(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_type'), ElixirScript.Core.Patterns.variable('_args')], __function_args__, (_type0, _args0) => {
            return true;
        })) !== null) {
            let [_type0, _args0] = __arg_matches__;

            return $IO$.puts('Hello world');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    start,
    __MODULE__: Symbol.for('Elixir.PostMe.Init'),
    __info__
};
