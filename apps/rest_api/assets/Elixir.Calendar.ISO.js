'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Integer$ from './Elixir.Integer.js';

import $System$ from './Elixir.System.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Range$ from './Elixir.Range.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('add_day_fraction_to_iso_days'), 3), new ElixirScript.Core.Tuple(Symbol.for('date_from_iso_days'), 1), new ElixirScript.Core.Tuple(Symbol.for('date_to_iso8601'), 3), new ElixirScript.Core.Tuple(Symbol.for('date_to_iso8601'), 4), new ElixirScript.Core.Tuple(Symbol.for('date_to_iso_days'), 3), new ElixirScript.Core.Tuple(Symbol.for('date_to_string'), 3), new ElixirScript.Core.Tuple(Symbol.for('datetime_to_iso8601'), 11), new ElixirScript.Core.Tuple(Symbol.for('datetime_to_iso8601'), 12), new ElixirScript.Core.Tuple(Symbol.for('datetime_to_string'), 11), new ElixirScript.Core.Tuple(Symbol.for('day_of_week'), 3), new ElixirScript.Core.Tuple(Symbol.for('day_rollover_relative_to_midnight_utc'), 0), new ElixirScript.Core.Tuple(Symbol.for('days_in_month'), 2), new ElixirScript.Core.Tuple(Symbol.for('from_unix'), 2), new ElixirScript.Core.Tuple(Symbol.for('iso_days_to_unit'), 2), new ElixirScript.Core.Tuple(Symbol.for('leap_year?'), 1), new ElixirScript.Core.Tuple(Symbol.for('naive_datetime_from_iso_days'), 1), new ElixirScript.Core.Tuple(Symbol.for('naive_datetime_to_iso8601'), 7), new ElixirScript.Core.Tuple(Symbol.for('naive_datetime_to_iso8601'), 8), new ElixirScript.Core.Tuple(Symbol.for('naive_datetime_to_iso_days'), 7), new ElixirScript.Core.Tuple(Symbol.for('naive_datetime_to_string'), 7), new ElixirScript.Core.Tuple(Symbol.for('parse_microsecond'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_offset'), 1), new ElixirScript.Core.Tuple(Symbol.for('time_from_day_fraction'), 1), new ElixirScript.Core.Tuple(Symbol.for('time_to_day_fraction'), 4), new ElixirScript.Core.Tuple(Symbol.for('time_to_iso8601'), 4), new ElixirScript.Core.Tuple(Symbol.for('time_to_iso8601'), 5), new ElixirScript.Core.Tuple(Symbol.for('time_to_string'), 4), new ElixirScript.Core.Tuple(Symbol.for('time_to_string'), 5), new ElixirScript.Core.Tuple(Symbol.for('valid_date?'), 3), new ElixirScript.Core.Tuple(Symbol.for('valid_time?'), 4)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [268798436209948267572304045459245018371]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Calendar$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/iso.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(178), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(3))], [Symbol.for('module'), Symbol.for('Elixir.Calendar.ISO')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function date_from_iso_days(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('days')], __function_args__, (days0) => {
            return ElixirScript.Core.erlang.is_integer(days0) && (days0 >= 0 && days0 <= 3652424);
        })) !== null) {
            let [days0] = __arg_matches__;

            const [year0, day_of_year0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('day_of_year')]
            }), days_to_year(days0));

            const _ref8991503 = new ElixirScript.Core.Tuple(year0, day_of_year0);

            const [extra_day0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303361821')], (x5764607523033618210) => {
                return 0;
            }, (x5764607523033618210) => {
                return x5764607523033618210 === null || x5764607523033618210 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return 1;
            }, () => {
                return true;
            })).call(this, leap_year__qmark__(year0)));

            const [month0, day_in_month0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day_in_month')]
            }), year_day_to_year_date(extra_day0, day_of_year0));

            const _ref6777330 = new ElixirScript.Core.Tuple(month0, day_in_month0);

            return new ElixirScript.Core.Tuple(year0, month0, day_in_month0 + 1);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function date_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day')], __function_args__, (year0, month0, day0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, year0, month0, day0, Symbol.for('extended')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day'), Symbol.for('extended')], __function_args__, (year0, month0, day0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0] = __arg_matches__;

            return zero_pad(year0, 4) + ('-' + (zero_pad(month0, 2) + ('-' + zero_pad(day0, 2))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day'), Symbol.for('basic')], __function_args__, (year0, month0, day0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0] = __arg_matches__;

            return zero_pad(year0, 4) + (zero_pad(month0, 2) + zero_pad(day0, 2));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function datetime_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day'), ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.Patterns.variable('microsecond'), ElixirScript.Core.Patterns.variable('time_zone'), ElixirScript.Core.Patterns.variable('zone_abbr'), ElixirScript.Core.Patterns.variable('utc_offset'), ElixirScript.Core.Patterns.variable('std_offset')], __function_args__, (year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0] = __arg_matches__;

            return date_to_string(year0, month0, day0) + (' ' + (time_to_string(hour0, minute0, second0, microsecond0) + (offset_to_string(utc_offset0, std_offset0, time_zone0) + zone_to_string(utc_offset0, std_offset0, zone_abbr0, time_zone0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function days_in_previous_years(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([0], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return 0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year')], __function_args__, (year0) => {
            return true;
        })) !== null) {
            let [year0] = __arg_matches__;

            const [previous_year0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('previous_year'), year0 - 1);

            return $Integer$.floor_div(previous_year0, 4) - $Integer$.floor_div(previous_year0, 100) + $Integer$.floor_div(previous_year0, 400) + previous_year0 * 365 + 366;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function days_to_year(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('days')], __function_args__, (days0) => {
            return true;
        })) !== null) {
            let [days0] = __arg_matches__;

            const [year0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('year'), $Integer$.floor_div(days0, 365));

            const [year1, days_before_year0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('days_before_year')]
            }), days_to_year(year0, days0, days_in_previous_years(year0)));

            const _ref4585550 = new ElixirScript.Core.Tuple(year1, days_before_year0);

            return new ElixirScript.Core.Tuple(year1, days0 - days_before_year0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('days1'), ElixirScript.Core.Patterns.variable('days2')], __function_args__, (year0, days10, days20) => {
            return days10 < days20;
        })) !== null) {
            let [year0, days10, days20] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, year0 - 1, days10, days_in_previous_years(year0 - 1)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('_days1'), ElixirScript.Core.Patterns.variable('days2')], __function_args__, (year0, _days10, days20) => {
            return true;
        })) !== null) {
            let [year0, _days10, days20] = __arg_matches__;

            return new ElixirScript.Core.Tuple(year0, days20);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function format_offset(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('total'), ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), Symbol.for('extended')], __function_args__, (total0, hour0, minute0) => {
            return true;
        })) !== null) {
            let [total0, hour0, minute0] = __arg_matches__;

            return sign(total0) + (zero_pad(hour0, 2) + (':' + zero_pad(minute0, 2)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('total'), ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), Symbol.for('basic')], __function_args__, (total0, hour0, minute0) => {
            return true;
        })) !== null) {
            let [total0, hour0, minute0] = __arg_matches__;

            return sign(total0) + (zero_pad(hour0, 2) + zero_pad(minute0, 2));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function leap_year__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year')], __function_args__, (year0) => {
            return ElixirScript.Core.erlang.is_integer(year0) && year0 >= 0;
        })) !== null) {
            let [year0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                    return true;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([false], () => {
                    return ElixirScript.Core.erlang.rem(year0, 400) === 0;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303350106')], (other5764607523033501060) => {
                    return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('or')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523033501060)]));
                }, (other5764607523033501060) => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.rem(year0, 100) > 0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303350138')], (other5764607523033501380) => {
                return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523033501380)]));
            }, (other5764607523033501380) => {
                return true;
            })).call(this, ElixirScript.Core.erlang.rem(year0, 4) === 0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function naive_datetime_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day'), ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.Patterns.variable('microsecond')], __function_args__, (year0, month0, day0, hour0, minute0, second0, microsecond0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0, hour0, minute0, second0, microsecond0] = __arg_matches__;

            return date_to_string(year0, month0, day0) + (' ' + time_to_string(hour0, minute0, second0, microsecond0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function offset_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x00, x10, x20) => {
            return true;
        })) !== null) {
            let [x00, x10, x20] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, x20, Symbol.for('extended')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([0, 0, 'Etc/UTC', ElixirScript.Core.Patterns.variable('_format')], __function_args__, (_format0) => {
            return true;
        })) !== null) {
            let [_format0] = __arg_matches__;

            return 'Z';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('utc'), ElixirScript.Core.Patterns.variable('std'), ElixirScript.Core.Patterns.variable('_zone'), ElixirScript.Core.Patterns.variable('format')], __function_args__, (utc0, std0, _zone0, format0) => {
            return true;
        })) !== null) {
            let [utc0, std0, _zone0, format0] = __arg_matches__;

            const [total0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('total'), utc0 + std0);

            const [second0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.erlang.abs(total0));

            const [minute0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.erlang.div(ElixirScript.Core.erlang.rem(second0, 3600), 60));

            const [hour0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.erlang.div(second0, 3600));

            return format_offset(total0, hour0, minute0, format0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function sign(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('total')], __function_args__, (total0) => {
            return total0 < 0;
        })) !== null) {
            let [total0] = __arg_matches__;

            return '-';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '+';
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function time_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.Patterns.variable('microsecond')], __function_args__, (hour0, minute0, second0, microsecond0) => {
            return true;
        })) !== null) {
            let [hour0, minute0, second0, microsecond0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, hour0, minute0, second0, microsecond0, Symbol.for('extended')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), 0]
        }), ElixirScript.Core.Patterns.variable('format')], __function_args__, (hour0, minute0, second0, format0) => {
            return true;
        })) !== null) {
            let [hour0, minute0, second0, format0] = __arg_matches__;

            return time_to_string_format(hour0, minute0, second0, format0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('microsecond'), ElixirScript.Core.Patterns.variable('precision')]
        }), ElixirScript.Core.Patterns.variable('format')], __function_args__, (hour0, minute0, second0, microsecond0, precision0, format0) => {
            return true;
        })) !== null) {
            let [hour0, minute0, second0, microsecond0, precision0, format0] = __arg_matches__;

            return time_to_string_format(hour0, minute0, second0, format0) + ('.' + ElixirScript.Core.erlang.binary_part(zero_pad(microsecond0, 6), 0, precision0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function time_to_string_format(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), Symbol.for('extended')], __function_args__, (hour0, minute0, second0) => {
            return true;
        })) !== null) {
            let [hour0, minute0, second0] = __arg_matches__;

            return zero_pad(hour0, 2) + (':' + (zero_pad(minute0, 2) + (':' + zero_pad(second0, 2))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('hour'), ElixirScript.Core.Patterns.variable('minute'), ElixirScript.Core.Patterns.variable('second'), Symbol.for('basic')], __function_args__, (hour0, minute0, second0) => {
            return true;
        })) !== null) {
            let [hour0, minute0, second0] = __arg_matches__;

            return zero_pad(hour0, 2) + (zero_pad(minute0, 2) + zero_pad(second0, 2));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function year_day_to_year_date(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (_extra_day0, day_of_year0) => {
            return day_of_year0 < 31;
        })) !== null) {
            let [_extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(1, day_of_year0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 59 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(2, day_of_year0 - 31);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 90 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(3, day_of_year0 - (59 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 120 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(4, day_of_year0 - (90 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 151 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(5, day_of_year0 - (120 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 181 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(6, day_of_year0 - (151 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 212 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(7, day_of_year0 - (181 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 243 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(8, day_of_year0 - (212 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 273 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(9, day_of_year0 - (243 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 304 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(10, day_of_year0 - (273 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return day_of_year0 < 334 + extra_day0;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(11, day_of_year0 - (304 + extra_day0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('extra_day'), ElixirScript.Core.Patterns.variable('day_of_year')], __function_args__, (extra_day0, day_of_year0) => {
            return true;
        })) !== null) {
            let [extra_day0, day_of_year0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(12, day_of_year0 - (334 + extra_day0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function zero_pad(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('val'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (val0, count0) => {
            return true;
        })) !== null) {
            let [val0, count0] = __arg_matches__;

            const [num0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('num'), ElixirScript.Core.erlang.integer_to_binary(val0));

            return ElixirScript.Core.binary.copy('0', count0 - ElixirScript.Core.erlang.byte_size(num0)) + num0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function zone_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([0, 0, ElixirScript.Core.Patterns.variable('_abbr'), 'Etc/UTC'], __function_args__, (_abbr0) => {
            return true;
        })) !== null) {
            let [_abbr0] = __arg_matches__;

            return '';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('abbr'), ElixirScript.Core.Patterns.variable('zone')], __function_args__, (abbr0, zone0) => {
            return true;
        })) !== null) {
            let [abbr0, zone0] = __arg_matches__;

            return ' ' + (abbr0 + (' ' + zone0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    date_from_iso_days,
    date_to_string,
    datetime_to_string,
    leap_year__qmark__,
    naive_datetime_to_string,
    time_to_string,
    __MODULE__: Symbol.for('Elixir.Calendar.ISO'),
    __info__
};
