'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('digits'), 1), new ElixirScript.Core.Tuple(Symbol.for('digits'), 2), new ElixirScript.Core.Tuple(Symbol.for('floor_div'), 2), new ElixirScript.Core.Tuple(Symbol.for('gcd'), 2), new ElixirScript.Core.Tuple(Symbol.for('mod'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('undigits'), 1), new ElixirScript.Core.Tuple(Symbol.for('undigits'), 2)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('is_even'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_odd'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [180503273078585347513221284310831805515])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/integer.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(75))], [Symbol.for('module'), Symbol.for('Elixir.Integer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function floor_div(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dividend'), ElixirScript.Core.Patterns.variable('divisor')], __function_args__, (dividend0, divisor0) => {
            return true;
        })) !== null) {
            let [dividend0, divisor0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303404350')], (x5764607523034043500) => {
                return ElixirScript.Core.erlang.div(dividend0, divisor0);
            }, (x5764607523034043500) => {
                return x5764607523034043500 === null || x5764607523034043500 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.erlang.div(dividend0, divisor0) - 1;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.erlang.rem(dividend0, divisor0) != 0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303404318')], (other5764607523034043180) => {
                return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523034043180)]));
            }, (other5764607523034043180) => {
                return true;
            })).call(this, dividend0 * divisor0 < 0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    floor_div,
    __MODULE__: Symbol.for('Elixir.Integer'),
    __info__
};
