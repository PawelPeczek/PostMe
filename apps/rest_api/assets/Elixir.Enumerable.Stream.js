'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$Stream$ from './Elixir.Enumerable.Stream.js';

import $Stream$ from './Elixir.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [248194514006343452875828114342465169468]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(60))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.Stream')]]);

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

            return $Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$Stream$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_lazy')], __function_args__, (_lazy0) => {
            return true;
        })) !== null) {
            let [_lazy0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_done(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('reason'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_'))]
        }), null], __function_args__, (reason0, acc0) => {
            return true;
        })) !== null) {
            let [reason0, acc0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(reason0, acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('reason'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('t'))]
        }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('done'), ElixirScript.Core.Patterns.variable('fun')]
        })], __function_args__, (reason0, acc0, t0, done0, fun0) => {
            return true;
        })) !== null) {
            let [reason0, acc0, t0, done0, fun0] = __arg_matches__;

            const [h0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('h'), ElixirScript.Core.Patterns.variable('_')), $Enum$.reverse(t0));

            const _ref8331879 = [h0];

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('cont'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_'))]
            })], (acc1) => {
                return new ElixirScript.Core.Tuple(reason0, acc1);
            }, (acc1) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('halt'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_'))]
            })], (acc1) => {
                return new ElixirScript.Core.Tuple(Symbol.for('halted'), acc1);
            }, (acc1) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('suspend'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_'))]
            })], (acc1) => {
                return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                            return true;
                        })) !== null) {
                            let [x10] = __arg_matches__;

                            return new ElixirScript.Core.Tuple(Symbol.for('done'), ElixirScript.Core.erlang.element(2, x10));
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, (acc1) => {
                return true;
            })).call(this, done0([acc0, h0], fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_each(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('reduce'), ElixirScript.Core.Patterns.variable('done'), ElixirScript.Core.Patterns.variable('accs'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('command'), ElixirScript.Core.Patterns.variable('acc')]
        })], __function_args__, (reduce0, done0, accs0, command0, acc0) => {
            return true;
        })) !== null) {
            let [reduce0, done0, accs0, command0, acc0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('suspended'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('accs')), ElixirScript.Core.Patterns.variable('continuation')]
            })], (acc1, accs1, continuation0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                            return true;
                        })) !== null) {
                            let [x10] = __arg_matches__;

                            return do_each(continuation0, done0, accs1, x10);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, (acc1, accs1, continuation0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('halted'), ElixirScript.Core.Patterns.variable('accs')]
            })], (accs1) => {
                return do_done(new ElixirScript.Core.Tuple(Symbol.for('halted'), accs1), done0);
            }, (accs1) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('done'), ElixirScript.Core.Patterns.variable('accs')]
            })], (accs1) => {
                return do_done(new ElixirScript.Core.Tuple(Symbol.for('done'), accs1), done0);
            }, (accs1) => {
                return true;
            })).call(this, reduce0(new ElixirScript.Core.Tuple(command0, ElixirScript.Core.Functions.concat(acc0, accs0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Stream')
        }], [Symbol.for('enum'), ElixirScript.Core.Patterns.variable('enum')], [Symbol.for('funs'), ElixirScript.Core.Patterns.variable('funs')], [Symbol.for('accs'), ElixirScript.Core.Patterns.variable('accs')], [Symbol.for('done'), ElixirScript.Core.Patterns.variable('done')]]), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enum0, funs0, accs0, done0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [enum0, funs0, accs0, done0, acc0, fun0] = __arg_matches__;

            const [composed0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('composed'), ElixirScript.Core.lists.foldl((...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry_fun'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (entry_fun0, acc1) => {
                        return true;
                    })) !== null) {
                        let [entry_fun0, acc1] = __arg_matches__;

                        return entry_fun0(acc1);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, fun0, funs0));

            const [reduce0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reduce'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return $Enumerable$.reduce(enum0, x10, composed0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            return do_each(reduce0, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303337401')], (x5764607523033374010) => {
                return x5764607523033374010;
            }, (x5764607523033374010) => {
                return x5764607523033374010 === null || x5764607523033374010 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return new ElixirScript.Core.Tuple(done0, fun0);
            }, () => {
                return true;
            })).call(this, done0), ElixirScript.Core.lists.reverse(accs0), acc0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_lazy'), ElixirScript.Core.Patterns.variable('_value')], __function_args__, (_lazy0, _value0) => {
            return true;
        })) !== null) {
            let [_lazy0, _value0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('lazy'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (lazy0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [lazy0, acc0, fun0] = __arg_matches__;

            return do_reduce(lazy0, acc0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), [ElixirScript.Core.Patterns.variable('acc')]], __function_args__, (x0, acc1) => {
                        return true;
                    })) !== null) {
                        let [x0, acc1] = __arg_matches__;

                        const [reason0, acc2] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('reason'), ElixirScript.Core.Patterns.variable('acc')]
                        }), fun0(x0, acc1));

                        const _ref9945721 = new ElixirScript.Core.Tuple(reason0, acc2);

                        return new ElixirScript.Core.Tuple(reason0, [acc2]);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_lazy')], __function_args__, (_lazy0) => {
            return true;
        })) !== null) {
            let [_lazy0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Stream$);
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
    __MODULE__: Symbol.for('Elixir.Enumerable.Stream'),
    __info__
};
