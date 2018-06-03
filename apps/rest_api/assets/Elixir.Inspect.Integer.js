'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Integer$ from './Elixir.Inspect.Integer.js';

import $Integer$ from './Elixir.Integer.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [202548136824647453638692914563072298146]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Integer$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(225), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(162))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Integer')]]);

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

            return $Inspect$Integer$;
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

function base_to_value(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('base')], __function_args__, (base0) => {
            return true;
        })) !== null) {
            let [base0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('binary')], () => {
                return 2;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('decimal')], () => {
                return 10;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('octal')], () => {
                return 8;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('hex')], () => {
                return 16;
            }, () => {
                return true;
            })).call(this, base0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Inspect.Opts')
        }], [Symbol.for('base'), ElixirScript.Core.Patterns.variable('base')]]))], __function_args__, (term0, base0, opts0) => {
            return true;
        })) !== null) {
            let [term0, base0, opts0] = __arg_matches__;

            const [inspected0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected'), prepend_prefix(ElixirScript.Core.erlang.integer_to_binary(term0, base_to_value(base0)), base0));

            return $Inspect$Algebra$.color(inspected0, Symbol.for('number'), opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function prepend_prefix(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value'), Symbol.for('decimal')], __function_args__, (value0) => {
            return true;
        })) !== null) {
            let [value0] = __arg_matches__;

            return value0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base')], __function_args__, (value0, base0) => {
            return true;
        })) !== null) {
            let [value0, base0] = __arg_matches__;

            return '-' + prepend_prefix(value0, base0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.Patterns.variable('base')], __function_args__, (value0, base0) => {
            return true;
        })) !== null) {
            let [value0, base0] = __arg_matches__;

            const [prefix0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('prefix'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('binary')], () => {
                return '0b';
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('octal')], () => {
                return '0o';
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('hex')], () => {
                return '0x';
            }, () => {
                return true;
            })).call(this, base0));

            return prefix0 + value0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Integer'),
    __info__
};
