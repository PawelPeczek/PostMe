'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$Date$Range$ from './Elixir.Enumerable.Date.Range.js';

import $Date$Range$ from './Elixir.Date.Range.js';

import $Date$ from './Elixir.Date.js';

import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [194450954362791918882461320538090433165]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Date$Range$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar/date_range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(141))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.Date.Range')]]);

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

            return $Date$Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$Date$Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('first_in_iso_days'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last_in_iso_days'), ElixirScript.Core.Patterns.variable('last')]])], __function_args__, (first0, last0) => {
            return true;
        })) !== null) {
            let [first0, last0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.erlang.abs(first0 - last0) + 1);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function date_from_iso_days(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('days'), $Calendar$ISO$], __function_args__, (days0) => {
            return true;
        })) !== null) {
            let [days0] = __arg_matches__;

            const [year0, month0, day0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day')]
            }), $Calendar$ISO$.date_from_iso_days(days0));

            const _ref1720013 = new ElixirScript.Core.Tuple(year0, month0, day0);

            return $Date$.__struct__(new Map([[Symbol.for('year'), year0], [Symbol.for('month'), month0], [Symbol.for('day'), day0], [Symbol.for('calendar'), $Calendar$ISO$]]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('days'), ElixirScript.Core.Patterns.variable('calendar')], __function_args__, (days0, calendar0) => {
            return true;
        })) !== null) {
            let [days0, calendar0] = __arg_matches__;

            const [year0, month0, day0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('year'), ElixirScript.Core.Patterns.variable('month'), ElixirScript.Core.Patterns.variable('day'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
            }), calendar0.naive_datetime_from_iso_days(new ElixirScript.Core.Tuple(days0, new ElixirScript.Core.Tuple(0, 86400000000))));

            const _ref9461004 = new ElixirScript.Core.Tuple(year0, month0, day0);

            return $Date$.__struct__(new Map([[Symbol.for('year'), year0], [Symbol.for('month'), month0], [Symbol.for('day'), day0], [Symbol.for('calendar'), calendar0]]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('first'), new Map([[Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')]])]])), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Date')
        }], [Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')]]))], __function_args__, (calendar0, range0, calendar1, date0) => {
            return true;
        })) !== null) {
            let [calendar0, range0, calendar1, date0] = __arg_matches__;

            const [first0, last0, first_in_iso_days0, last_in_iso_days0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')], [Symbol.for('first_in_iso_days'), ElixirScript.Core.Patterns.variable('first_in_iso_days')], [Symbol.for('last_in_iso_days'), ElixirScript.Core.Patterns.variable('last_in_iso_days')]]), range0);

            const [first_year0, first_month0, first_day0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('year'), ElixirScript.Core.Patterns.variable('first_year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('first_month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('first_day')]]), first0);

            const [last_year0, last_month0, last_day0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('year'), ElixirScript.Core.Patterns.variable('last_year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('last_month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('last_day')]]), last0);

            const [year0, month0, day0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')]]), date0);

            const [first1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('first'), new ElixirScript.Core.Tuple(first_year0, first_month0, first_day0));

            const [last1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('last'), new ElixirScript.Core.Tuple(last_year0, last_month0, last_day0));

            const [date1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('date'), new ElixirScript.Core.Tuple(year0, month0, day0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                    return date1 <= first1;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303416344')], (other5764607523034163440) => {
                    return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523034163440)]));
                }, (other5764607523034163440) => {
                    return true;
                })).call(this, date1 >= last1));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                    return date1 <= last1;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303416312')], (other5764607523034163120) => {
                    return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523034163120)]));
                }, (other5764607523034163120) => {
                    return true;
                })).call(this, date1 >= first1));
            }, () => {
                return true;
            })).call(this, first_in_iso_days0 <= last_in_iso_days0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), false);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('range'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (range0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [range0, acc0, fun0] = __arg_matches__;

            const [first_in_iso_days0, last_in_iso_days0, calendar0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('first_in_iso_days'), ElixirScript.Core.Patterns.variable('first_in_iso_days')], [Symbol.for('last_in_iso_days'), ElixirScript.Core.Patterns.variable('last_in_iso_days')], [Symbol.for('first'), new Map([[Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')]])]]), range0);

            const [up__qmark__0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('up?'), first_in_iso_days0 <= last_in_iso_days0);

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first_in_iso_days0, last_in_iso_days0, acc0, fun0, calendar0, up__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_x'), ElixirScript.Core.Patterns.variable('_y'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('_calendar'), ElixirScript.Core.Patterns.variable('_up?')], __function_args__, (_x0, _y0, acc0, _fun0, _calendar0, _up__qmark__0) => {
            return true;
        })) !== null) {
            let [_x0, _y0, acc0, _fun0, _calendar0, _up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('halted'), acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('suspend'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('calendar'), ElixirScript.Core.Patterns.variable('up?')], __function_args__, (x0, y0, acc0, fun0, calendar0, up__qmark__0) => {
            return true;
        })) !== null) {
            let [x0, y0, acc0, fun0, calendar0, up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return reduce(x0, y0, x10, fun0, calendar0, up__qmark__0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('calendar'), ElixirScript.Core.Patterns.capture(true)], __function_args__, (x0, y0, acc0, fun0, calendar0, up__qmark__0) => {
            return x0 <= y0;
        })) !== null) {
            let [x0, y0, acc0, fun0, calendar0, up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x0 + 1, y0, fun0(date_from_iso_days(x0, calendar0), acc0), fun0, calendar0, up__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('calendar'), ElixirScript.Core.Patterns.capture(false)], __function_args__, (x0, y0, acc0, fun0, calendar0, up__qmark__0) => {
            return x0 >= y0;
        })) !== null) {
            let [x0, y0, acc0, fun0, calendar0, up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x0 - 1, y0, fun0(date_from_iso_days(x0, calendar0), acc0), fun0, calendar0, up__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('_calendar'), ElixirScript.Core.Patterns.variable('_up')], __function_args__, (acc0, _fun0, _calendar0, _up0) => {
            return true;
        })) !== null) {
            let [acc0, _fun0, _calendar0, _up0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('done'), acc0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('range')], __function_args__, (range0) => {
            return true;
        })) !== null) {
            let [range0] = __arg_matches__;

            const [first0, last0, calendar0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('first_in_iso_days'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last_in_iso_days'), ElixirScript.Core.Patterns.variable('last')], [Symbol.for('first'), new Map([[Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')]])]]), range0);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), first0 - last0 + 1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return slice_desc(first0 - x10, x20, calendar0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), last0 - first0 + 1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return slice_asc(first0 + x10, x20, calendar0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, () => {
                return true;
            })).call(this, first0 <= last0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice_asc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), 1, ElixirScript.Core.Patterns.variable('calendar')], __function_args__, (current0, calendar0) => {
            return true;
        })) !== null) {
            let [current0, calendar0] = __arg_matches__;

            return [date_from_iso_days(current0, calendar0)];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), ElixirScript.Core.Patterns.variable('remaining'), ElixirScript.Core.Patterns.variable('calendar')], __function_args__, (current0, remaining0, calendar0) => {
            return true;
        })) !== null) {
            let [current0, remaining0, calendar0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(date_from_iso_days(current0, calendar0), slice_asc(current0 + 1, remaining0 - 1, calendar0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice_desc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), 1, ElixirScript.Core.Patterns.variable('calendar')], __function_args__, (current0, calendar0) => {
            return true;
        })) !== null) {
            let [current0, calendar0] = __arg_matches__;

            return [date_from_iso_days(current0, calendar0)];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), ElixirScript.Core.Patterns.variable('remaining'), ElixirScript.Core.Patterns.variable('calendar')], __function_args__, (current0, remaining0, calendar0) => {
            return true;
        })) !== null) {
            let [current0, remaining0, calendar0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(date_from_iso_days(current0, calendar0), slice_desc(current0 - 1, remaining0 - 1, calendar0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    count,
    member__qmark__,
    reduce,
    slice,
    __MODULE__: Symbol.for('Elixir.Enumerable.Date.Range'),
    __info__
};
