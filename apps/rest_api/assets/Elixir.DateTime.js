'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

import $DateTime$ from './Elixir.DateTime.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $List$ from './Elixir.List.js';

import $Enum$ from './Elixir.Enum.js';

import $Calendar$ from './Elixir.Calendar.js';

import $System$ from './Elixir.System.js';

import $Time$ from './Elixir.Time.js';

import $Date$ from './Elixir.Date.js';

import $Integer$ from './Elixir.Integer.js';

import $NaiveDateTime$ from './Elixir.NaiveDateTime.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('compare'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert!'), 2), new ElixirScript.Core.Tuple(Symbol.for('diff'), 2), new ElixirScript.Core.Tuple(Symbol.for('diff'), 3), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_naive'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_naive!'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_unix'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_unix'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_unix'), 3), new ElixirScript.Core.Tuple(Symbol.for('from_unix!'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_unix!'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_unix!'), 3), new ElixirScript.Core.Tuple(Symbol.for('to_date'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_naive'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_time'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_unix'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_unix'), 2), new ElixirScript.Core.Tuple(Symbol.for('truncate'), 2), new ElixirScript.Core.Tuple(Symbol.for('utc_now'), 0), new ElixirScript.Core.Tuple(Symbol.for('utc_now'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [3590579699606708961269674927240269793])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/datetime.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(225))], [Symbol.for('module'), Symbol.for('Elixir.DateTime')]]);

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

            return new Map([[Symbol.for('__struct__'), $DateTime$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('day'), null], [Symbol.for('hour'), null], [Symbol.for('microsecond'), new ElixirScript.Core.Tuple(0, 0)], [Symbol.for('minute'), null], [Symbol.for('month'), null], [Symbol.for('second'), null], [Symbol.for('std_offset'), null], [Symbol.for('time_zone'), null], [Symbol.for('utc_offset'), null], [Symbol.for('year'), null], [Symbol.for('zone_abbr'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303415193')], __function_args__, (kv5764607523034151930) => {
            return true;
        })) !== null) {
            let [kv5764607523034151930] = __arg_matches__;

            const [map5764607523034151930, keys5764607523034151930] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('map576460752303415193'), ElixirScript.Core.Patterns.variable('keys576460752303415193')]
            }), $Enum$.reduce(kv5764607523034151930, new ElixirScript.Core.Tuple(new Map([[Symbol.for('__struct__'), $DateTime$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('day'), null], [Symbol.for('hour'), null], [Symbol.for('microsecond'), new ElixirScript.Core.Tuple(0, 0)], [Symbol.for('minute'), null], [Symbol.for('month'), null], [Symbol.for('second'), null], [Symbol.for('std_offset'), null], [Symbol.for('time_zone'), null], [Symbol.for('utc_offset'), null], [Symbol.for('year'), null], [Symbol.for('zone_abbr'), null]]), [Symbol.for('year'), Symbol.for('month'), Symbol.for('day'), Symbol.for('hour'), Symbol.for('minute'), Symbol.for('second'), Symbol.for('time_zone'), Symbol.for('zone_abbr'), Symbol.for('utc_offset'), Symbol.for('std_offset')]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303415193'), ElixirScript.Core.Patterns.variable('val576460752303415193')]
                    }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('map576460752303415193'), ElixirScript.Core.Patterns.variable('keys576460752303415193')]
                    })], __function_args__, (key5764607523034151930, val5764607523034151930, map5764607523034151930, keys5764607523034151930) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034151930, val5764607523034151930, map5764607523034151930, keys5764607523034151930] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(ElixirScript.Core.maps.update(key5764607523034151930, val5764607523034151930, map5764607523034151930), $List$.__delete__(keys5764607523034151930, key5764607523034151930));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref9867535 = new ElixirScript.Core.Tuple(map5764607523034151930, keys5764607523034151930);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return map5764607523034151930;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.erlang.error($ArgumentError$.exception('the following keys must also be given when building ' + ('struct ' + ($String$Chars$.to_string($Kernel$.inspect($DateTime$)) + (': ' + $String$Chars$.to_string($Kernel$.inspect(keys5764607523034151930)))))));
            }, () => {
                return true;
            })).call(this, keys5764607523034151930);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.DateTime'),
    __info__
};
