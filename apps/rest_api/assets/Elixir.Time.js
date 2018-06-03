'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

import $Time$ from './Elixir.Time.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $List$ from './Elixir.List.js';

import $Enum$ from './Elixir.Enum.js';

import $Integer$ from './Elixir.Integer.js';

import $System$ from './Elixir.System.js';

import $Calendar$ from './Elixir.Calendar.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('add'), 2), new ElixirScript.Core.Tuple(Symbol.for('add'), 3), new ElixirScript.Core.Tuple(Symbol.for('compare'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert!'), 2), new ElixirScript.Core.Tuple(Symbol.for('diff'), 2), new ElixirScript.Core.Tuple(Symbol.for('diff'), 3), new ElixirScript.Core.Tuple(Symbol.for('from_erl'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_erl'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_erl'), 3), new ElixirScript.Core.Tuple(Symbol.for('from_erl!'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_erl!'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_erl!'), 3), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601!'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_iso8601!'), 2), new ElixirScript.Core.Tuple(Symbol.for('new'), 3), new ElixirScript.Core.Tuple(Symbol.for('new'), 4), new ElixirScript.Core.Tuple(Symbol.for('new'), 5), new ElixirScript.Core.Tuple(Symbol.for('to_erl'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_iso8601'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('truncate'), 2), new ElixirScript.Core.Tuple(Symbol.for('utc_now'), 0), new ElixirScript.Core.Tuple(Symbol.for('utc_now'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [130365730774541402455622864013423139063])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/time.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(247))], [Symbol.for('module'), Symbol.for('Elixir.Time')]]);

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

            return new Map([[Symbol.for('__struct__'), $Time$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('hour'), null], [Symbol.for('microsecond'), new ElixirScript.Core.Tuple(0, 0)], [Symbol.for('minute'), null], [Symbol.for('second'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303418075')], __function_args__, (kv5764607523034180750) => {
            return true;
        })) !== null) {
            let [kv5764607523034180750] = __arg_matches__;

            const [map5764607523034180750, keys5764607523034180750] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('map576460752303418075'), ElixirScript.Core.Patterns.variable('keys576460752303418075')]
            }), $Enum$.reduce(kv5764607523034180750, new ElixirScript.Core.Tuple(new Map([[Symbol.for('__struct__'), $Time$], [Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('hour'), null], [Symbol.for('microsecond'), new ElixirScript.Core.Tuple(0, 0)], [Symbol.for('minute'), null], [Symbol.for('second'), null]]), [Symbol.for('hour'), Symbol.for('minute'), Symbol.for('second')]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303418075'), ElixirScript.Core.Patterns.variable('val576460752303418075')]
                    }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('map576460752303418075'), ElixirScript.Core.Patterns.variable('keys576460752303418075')]
                    })], __function_args__, (key5764607523034180750, val5764607523034180750, map5764607523034180750, keys5764607523034180750) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034180750, val5764607523034180750, map5764607523034180750, keys5764607523034180750] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(ElixirScript.Core.maps.update(key5764607523034180750, val5764607523034180750, map5764607523034180750), $List$.__delete__(keys5764607523034180750, key5764607523034180750));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref4185191 = new ElixirScript.Core.Tuple(map5764607523034180750, keys5764607523034180750);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return map5764607523034180750;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.erlang.error($ArgumentError$.exception('the following keys must also be given when building ' + ('struct ' + ($String$Chars$.to_string($Kernel$.inspect($Time$)) + (': ' + $String$Chars$.to_string($Kernel$.inspect(keys5764607523034180750)))))));
            }, () => {
                return true;
            })).call(this, keys5764607523034180750);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.Time'),
    __info__
};
