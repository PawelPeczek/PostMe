'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

import $Date$ from './Elixir.Date.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $List$ from './Elixir.List.js';

import $Enum$ from './Elixir.Enum.js';

import $Calendar$ from './Elixir.Calendar.js';

import $Integer$ from './Elixir.Integer.js';

import $Date$Range$ from './Elixir.Date.Range.js';

import $DateTime$ from './Elixir.DateTime.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('add'), 2), new ElixirScript.Core.Tuple(Symbol.for('compare'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert!'), 2), new ElixirScript.Core.Tuple(Symbol.for('day_of_week'), 1), new ElixirScript.Core.Tuple(Symbol.for('days_in_month'), 1), new ElixirScript.Core.Tuple(Symbol.for('diff'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_erl'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_erl'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_erl!'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_erl!'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601!'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601!'), 2), new ElixirScript.Core.Tuple(Symbol.for('leap_year?'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 3), new ElixirScript.Core.Tuple(Symbol.for('new'), 4), new ElixirScript.Core.Tuple(Symbol.for('range'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_erl'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('utc_today'), 0), new ElixirScript.Core.Tuple(Symbol.for('utc_today'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [121093950326191425143781847384694687682])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/date.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(194))], [Symbol.for('module'), Symbol.for('Elixir.Date')]]);

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

            return new Map([[Symbol.for('__struct__'), $Date$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('day'), null], [Symbol.for('month'), null], [Symbol.for('year'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303422616')], __function_args__, (kv5764607523034226160) => {
            return true;
        })) !== null) {
            let [kv5764607523034226160] = __arg_matches__;

            const [map5764607523034226160, keys5764607523034226160] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('map576460752303422616'), ElixirScript.Core.Patterns.variable('keys576460752303422616')]
            }), $Enum$.reduce(kv5764607523034226160, new ElixirScript.Core.Tuple(new Map([[Symbol.for('__struct__'), $Date$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('day'), null], [Symbol.for('month'), null], [Symbol.for('year'), null]]), [Symbol.for('year'), Symbol.for('month'), Symbol.for('day')]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303422616'), ElixirScript.Core.Patterns.variable('val576460752303422616')]
                    }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('map576460752303422616'), ElixirScript.Core.Patterns.variable('keys576460752303422616')]
                    })], __function_args__, (key5764607523034226160, val5764607523034226160, map5764607523034226160, keys5764607523034226160) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034226160, val5764607523034226160, map5764607523034226160, keys5764607523034226160] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(ElixirScript.Core.maps.update(key5764607523034226160, val5764607523034226160, map5764607523034226160), $List$.__delete__(keys5764607523034226160, key5764607523034226160));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref4295140 = new ElixirScript.Core.Tuple(map5764607523034226160, keys5764607523034226160);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return map5764607523034226160;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.erlang.error($ArgumentError$.exception('the following keys must also be given when building ' + ('struct ' + ($String$Chars$.to_string($Kernel$.inspect($Date$)) + (': ' + $String$Chars$.to_string($Kernel$.inspect(keys5764607523034226160)))))));
            }, () => {
                return true;
            })).call(this, keys5764607523034226160);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.Date'),
    __info__
};
