'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$GenEvent$Stream$ from './Elixir.Enumerable.GenEvent.Stream.js';

import $GenEvent$Stream$ from './Elixir.GenEvent.Stream.js';

import $Stream$ from './Elixir.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [84334509623682841427727011063600461092]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $GenEvent$Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/gen_event/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(36))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.GenEvent.Stream')]]);

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

            return $GenEvent$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$GenEvent$Stream$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_stream')], __function_args__, (_stream0) => {
            return true;
        })) !== null) {
            let [_stream0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$GenEvent$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function flush_events(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('ref')], __function_args__, (ref0) => {
            return true;
        })) !== null) {
            let [ref0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms.receive([ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_from'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('_pid'), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('notify'), ElixirScript.Core.Patterns.variable('_event')]
                })]
            })], (_from0, _pid0, notify0, _event0) => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, ref0));
            }, (_from0, _pid0, notify0, _event0) => {
                return notify0 === Symbol.for('ack_notify') || (notify0 === Symbol.for('sync_notify') || notify0 === Symbol.for('notify'));
            })], 0, () => {
                Symbol.for('ok')
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_stream'), ElixirScript.Core.Patterns.variable('_item')], __function_args__, (_stream0, _item0) => {
            return true;
        })) !== null) {
            let [_stream0, _item0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$GenEvent$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function next(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('timeout'), ElixirScript.Core.Patterns.variable('timeout')]])), ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('mon_ref')]
        }))], __function_args__, (timeout0, stream0, pid0, ref0, mon_ref0, acc0) => {
            return true;
        })) !== null) {
            let [timeout0, stream0, pid0, ref0, mon_ref0, acc0] = __arg_matches__;

            const [self0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('self'), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.self));

            return ElixirScript.Core.SpecialForms.receive([ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_from'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(pid0), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [Symbol.for('notify'), ElixirScript.Core.Patterns.variable('event')]
                })]
            })], (_from0, event0) => {
                return new ElixirScript.Core.Tuple([new ElixirScript.Core.Tuple(Symbol.for('async'), pid0, ref0, event0)], acc0);
            }, (_from0, event0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_from'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(pid0), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [Symbol.for('sync_notify'), ElixirScript.Core.Patterns.variable('event')]
                })]
            })], (_from0, event0) => {
                return new ElixirScript.Core.Tuple([new ElixirScript.Core.Tuple(Symbol.for('sync'), pid0, ref0, event0)], acc0);
            }, (_from0, event0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_from'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(pid0), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [Symbol.for('ack_notify'), ElixirScript.Core.Patterns.variable('event')]
                })]
            })], (_from0, event0) => {
                return new ElixirScript.Core.Tuple([new ElixirScript.Core.Tuple(Symbol.for('ack'), pid0, ref0, event0)], acc0);
            }, (_from0, event0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('gen_event_EXIT'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(pid0), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.variable('_reason')]
            }))], (_reason0, event0) => {
                ElixirScript.Core.erlang.demonitor(mon_ref0, [Symbol.for('flush')])

                ElixirScript.Core.erlang.send(self0, event0)

                return new ElixirScript.Core.Tuple(Symbol.for('halt'), new ElixirScript.Core.Tuple(Symbol.for('removed'), acc0));
            }, (_reason0, event0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('DOWN'), ElixirScript.Core.Patterns.bound(mon_ref0), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
            }))], (event0) => {
                ElixirScript.Core.erlang.send(self0, event0)

                return new ElixirScript.Core.Tuple(Symbol.for('halt'), new ElixirScript.Core.Tuple(Symbol.for('removed'), acc0));
            }, (event0) => {
                return true;
            })], timeout0, () => {
                ElixirScript.Core.erlang.exit(new ElixirScript.Core.Tuple(Symbol.for('timeout'), new ElixirScript.Core.Tuple($Enumerable$GenEvent$Stream$, Symbol.for('next'), [stream0, acc0])))
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('stream'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (stream0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [stream0, acc0, fun0] = __arg_matches__;

            const [start_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('start_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return start(stream0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            const [next_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('next_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return next(stream0, x10);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            const [stop_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('stop_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return stop(stream0, x10);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            return $Stream$.resource(start_fun0, next_fun0, stop_fun0)(acc0, wrap_reducer(fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_stream')], __function_args__, (_stream0) => {
            return true;
        })) !== null) {
            let [_stream0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$GenEvent$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function start(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('manager'), ElixirScript.Core.Patterns.variable('manager')]]))], __function_args__, (manager0, stream0) => {
            return true;
        })) !== null) {
            let [manager0, stream0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                const [pid0, ref0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [Symbol.for('ok'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('ref')]
                    })]
                }), ElixirScript.Core.gen.call(manager0, ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.self), new ElixirScript.Core.Tuple(Symbol.for('add_process_handler'), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.self), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.self)), Symbol.for('infinity')));

                const _ref5468899 = new ElixirScript.Core.Tuple(pid0, ref0);

                const [mon_ref0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('mon_ref'), ElixirScript.Core.erlang.monitor(Symbol.for('process'), pid0));

                return new ElixirScript.Core.Tuple(pid0, ref0, mon_ref0);
            }, null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('exit'), ElixirScript.Core.Patterns.variable('reason')], __function_args__, (reason0) => {
                        return true;
                    })) !== null) {
                        let [reason0] = __arg_matches__;

                        return ElixirScript.Core.erlang.exit(new ElixirScript.Core.Tuple(reason0, new ElixirScript.Core.Tuple($Enumerable$GenEvent$Stream$, Symbol.for('start'), [stream0])));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null, null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function stop(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('stream'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('removed'), ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('mon_ref')]
            }))]
        })], __function_args__, (stream0, pid0, ref0, mon_ref0, acc0) => {
            return true;
        })) !== null) {
            let [stream0, pid0, ref0, mon_ref0, acc0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('ok')], () => {
                return flush_events(ref0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.exit(new ElixirScript.Core.Tuple(reason0, new ElixirScript.Core.Tuple($Enumerable$GenEvent$Stream$, Symbol.for('stop'), [stream0, acc0])));
            }, (reason0) => {
                return true;
            })).call(this, wait_for_handler_removal(pid0, ref0, mon_ref0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('stream'), ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('_')]
        }))], __function_args__, (stream0, pid0, ref0, acc0) => {
            return true;
        })) !== null) {
            let [stream0, pid0, ref0, acc0] = __arg_matches__;

            const [] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('_'), gen_event.delete_handler(pid0, new ElixirScript.Core.Tuple(pid0, ref0), Symbol.for('shutdown')));

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, stream0, new ElixirScript.Core.Tuple(Symbol.for('removed'), acc0)));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function wait_for_handler_removal(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('mon_ref')], __function_args__, (pid0, ref0, mon_ref0) => {
            return true;
        })) !== null) {
            let [pid0, ref0, mon_ref0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms.receive([ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('gen_event_EXIT'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(pid0), ElixirScript.Core.Patterns.bound(ref0)]
                }), ElixirScript.Core.Patterns.variable('_reason')]
            })], (_reason0) => {
                ElixirScript.Core.erlang.demonitor(mon_ref0, [Symbol.for('flush')])

                return Symbol.for('ok');
            }, (_reason0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('DOWN'), ElixirScript.Core.Patterns.bound(mon_ref0), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('error'), reason0);
            }, (reason0) => {
                return true;
            })]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function wrap_reducer(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('fun')], __function_args__, (fun0) => {
            return true;
        })) !== null) {
            let [fun0] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('ack'), ElixirScript.Core.Patterns.variable('manager'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('event')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (manager0, ref0, event0, acc0) => {
                        return true;
                    })) !== null) {
                        let [manager0, ref0, event0, acc0] = __arg_matches__;

                        ElixirScript.Core.erlang.send(manager0, new ElixirScript.Core.Tuple(ref0, Symbol.for('ok')))

                        return fun0(event0, acc0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('async'), ElixirScript.Core.Patterns.variable('_manager'), ElixirScript.Core.Patterns.variable('_ref'), ElixirScript.Core.Patterns.variable('event')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (_manager0, _ref0, event0, acc0) => {
                        return true;
                    })) !== null) {
                        let [_manager0, _ref0, event0, acc0] = __arg_matches__;

                        return fun0(event0, acc0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('sync'), ElixirScript.Core.Patterns.variable('manager'), ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('event')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (manager0, ref0, event0, acc0) => {
                        return true;
                    })) !== null) {
                        let [manager0, ref0, event0, acc0] = __arg_matches__;

                        return ElixirScript.Core.SpecialForms._try(() => {
                            return fun0(event0, acc0);
                        }, null, null, null, () => {
                            return ElixirScript.Core.erlang.send(manager0, new ElixirScript.Core.Tuple(ref0, Symbol.for('ok')));
                        });
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            };
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
    __MODULE__: Symbol.for('Elixir.Enumerable.GenEvent.Stream'),
    __info__
};
