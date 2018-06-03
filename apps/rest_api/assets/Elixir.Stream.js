'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Stream$ from './Elixir.Stream.js';

import $Enum$ from './Elixir.Enum.js';

import $Stream$Reducers$ from './Elixir.Stream.Reducers.js';

import $Enumerable$ from './Elixir.Enumerable.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Process$ from './Elixir.Process.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 4), new ElixirScript.Core.Tuple(Symbol.for('chunk_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 4), new ElixirScript.Core.Tuple(Symbol.for('chunk_while'), 4), new ElixirScript.Core.Tuple(Symbol.for('concat'), 1), new ElixirScript.Core.Tuple(Symbol.for('concat'), 2), new ElixirScript.Core.Tuple(Symbol.for('cycle'), 1), new ElixirScript.Core.Tuple(Symbol.for('dedup'), 1), new ElixirScript.Core.Tuple(Symbol.for('dedup_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('each'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 3), new ElixirScript.Core.Tuple(Symbol.for('flat_map'), 2), new ElixirScript.Core.Tuple(Symbol.for('intersperse'), 2), new ElixirScript.Core.Tuple(Symbol.for('interval'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 2), new ElixirScript.Core.Tuple(Symbol.for('into'), 3), new ElixirScript.Core.Tuple(Symbol.for('iterate'), 2), new ElixirScript.Core.Tuple(Symbol.for('map'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('reject'), 2), new ElixirScript.Core.Tuple(Symbol.for('repeatedly'), 1), new ElixirScript.Core.Tuple(Symbol.for('resource'), 3), new ElixirScript.Core.Tuple(Symbol.for('run'), 1), new ElixirScript.Core.Tuple(Symbol.for('scan'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan'), 3), new ElixirScript.Core.Tuple(Symbol.for('take'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('timer'), 1), new ElixirScript.Core.Tuple(Symbol.for('transform'), 3), new ElixirScript.Core.Tuple(Symbol.for('transform'), 4), new ElixirScript.Core.Tuple(Symbol.for('unfold'), 2), new ElixirScript.Core.Tuple(Symbol.for('uniq'), 1), new ElixirScript.Core.Tuple(Symbol.for('uniq'), 2), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 1), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 2), new ElixirScript.Core.Tuple(Symbol.for('zip'), 1), new ElixirScript.Core.Tuple(Symbol.for('zip'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [147180438192049026986508319429961441357])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(77))], [Symbol.for('module'), Symbol.for('Elixir.Stream')]]);

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

            return new Map([[Symbol.for('__struct__'), $Stream$], [Symbol.for('accs'), []], [Symbol.for('done'), null], [Symbol.for('enum'), null], [Symbol.for('funs'), []]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303362524')], __function_args__, (kv5764607523033625240) => {
            return true;
        })) !== null) {
            let [kv5764607523033625240] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033625240, new Map([[Symbol.for('__struct__'), $Stream$], [Symbol.for('accs'), []], [Symbol.for('done'), null], [Symbol.for('enum'), null], [Symbol.for('funs'), []]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303362524'), ElixirScript.Core.Patterns.variable('val576460752303362524')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303362524')], __function_args__, (key5764607523033625240, val5764607523033625240, map5764607523033625240) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033625240, val5764607523033625240, map5764607523033625240] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033625240, val5764607523033625240, map5764607523033625240);
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

function do_enum_resource(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('next_acc'), ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('op'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('after_fun'), ElixirScript.Core.Patterns.variable('reduce')], __function_args__, (next_acc0, next_fun0, op0, acc0, fun0, after_fun0, reduce0) => {
            return true;
        })) !== null) {
            let [next_acc0, next_fun0, op0, acc0, fun0, after_fun0, reduce0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return reduce0(new ElixirScript.Core.Tuple(op0, ElixirScript.Core.Functions.concat(Symbol.for('outer'), acc0)));
            }, null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kind'), ElixirScript.Core.Patterns.variable('reason')], __function_args__, (kind0, reason0) => {
                        return true;
                    })) !== null) {
                        let [kind0, reason0] = __arg_matches__;

                        const [stacktrace0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('stacktrace'), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.get_stacktrace));

                        after_fun0(next_acc0)

                        return ElixirScript.Core.erlang.raise(kind0, reason0, stacktrace0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('halted'), ElixirScript.Core.Patterns.headTail(Symbol.for('outer'), ElixirScript.Core.Patterns.variable('acc'))]
                    })], __function_args__, (acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc1), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('halted'), ElixirScript.Core.Patterns.headTail(Symbol.for('inner'), ElixirScript.Core.Patterns.variable('acc'))]
                    })], __function_args__, (acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('halt'), acc1), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('done'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('acc'))]
                    })], __function_args__, (acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc1), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('suspended'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('acc')), ElixirScript.Core.Patterns.variable('c')]
                    })], __function_args__, (acc1, c0) => {
                        return true;
                    })) !== null) {
                        let [acc1, c0] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc1, (...__function_args__) => {
                            function recur(...__function_args__) {
                                let __arg_matches__ = null;

                                if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                                    return true;
                                })) !== null) {
                                    let [x10] = __arg_matches__;

                                    return do_enum_resource(next_acc0, next_fun0, x10, fun0, after_fun0, c0);
                                }

                                throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                            }

                            return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                        });
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_list_resource(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('next_acc'), ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('after_fun'), ElixirScript.Core.Patterns.variable('reduce')], __function_args__, (next_acc0, next_fun0, acc0, fun0, after_fun0, reduce0) => {
            return true;
        })) !== null) {
            let [next_acc0, next_fun0, acc0, fun0, after_fun0, reduce0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return reduce0(acc0);
            }, null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kind'), ElixirScript.Core.Patterns.variable('reason')], __function_args__, (kind0, reason0) => {
                        return true;
                    })) !== null) {
                        let [kind0, reason0] = __arg_matches__;

                        const [stacktrace0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('stacktrace'), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.get_stacktrace));

                        after_fun0(next_acc0)

                        return ElixirScript.Core.erlang.raise(kind0, reason0, stacktrace0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('done'), ElixirScript.Core.Patterns.variable('acc')]
                    })], __function_args__, (acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc1), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('halted'), ElixirScript.Core.Patterns.variable('acc')]
                    })], __function_args__, (acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('halt'), acc1), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('suspended'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('c')]
                    })], __function_args__, (acc1, c0) => {
                        return true;
                    })) !== null) {
                        let [acc1, c0] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc1, (...__function_args__) => {
                            function recur(...__function_args__) {
                                let __arg_matches__ = null;

                                if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                                    return true;
                                })) !== null) {
                                    let [x10] = __arg_matches__;

                                    return do_list_resource(next_acc0, next_fun0, x10, fun0, after_fun0, c0);
                                }

                                throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                            }

                            return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                        });
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_resource(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('next_acc'), ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('suspend'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('after_fun')], __function_args__, (next_acc0, next_fun0, acc0, fun0, after_fun0) => {
            return true;
        })) !== null) {
            let [next_acc0, next_fun0, acc0, fun0, after_fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return do_resource(next_acc0, next_fun0, x10, fun0, after_fun0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('next_acc'), ElixirScript.Core.Patterns.variable('_next_fun'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('after_fun')], __function_args__, (next_acc0, _next_fun0, acc0, _fun0, after_fun0) => {
            return true;
        })) !== null) {
            let [next_acc0, _next_fun0, acc0, _fun0, after_fun0] = __arg_matches__;

            after_fun0(next_acc0)

            return new ElixirScript.Core.Tuple(Symbol.for('halted'), acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('next_acc'), ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('after_fun')], __function_args__, (next_acc0, next_fun0, acc0, fun0, after_fun0) => {
            return true;
        })) !== null) {
            let [next_acc0, next_fun0, acc0, fun0, after_fun0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[], ElixirScript.Core.Patterns.variable('next_acc')]
                })], (next_acc1) => {
                    return new ElixirScript.Core.Tuple(Symbol.for('opt'), new ElixirScript.Core.Tuple(Symbol.for('cont'), acc0), next_acc1);
                }, (next_acc1) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[ElixirScript.Core.Patterns.variable('v')], ElixirScript.Core.Patterns.variable('next_acc')]
                })], (v0, next_acc1) => {
                    return new ElixirScript.Core.Tuple(Symbol.for('opt'), fun0(v0, acc0), next_acc1);
                }, (v0, next_acc1) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
                }))], (other0) => {
                    return other0;
                }, (other0) => {
                    return true;
                })).call(this, next_fun0(next_acc0));
            }, null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kind'), ElixirScript.Core.Patterns.variable('reason')], __function_args__, (kind0, reason0) => {
                        return true;
                    })) !== null) {
                        let [kind0, reason0] = __arg_matches__;

                        const [stacktrace0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('stacktrace'), ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.get_stacktrace));

                        after_fun0(next_acc0)

                        return ElixirScript.Core.erlang.raise(kind0, reason0, stacktrace0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('opt'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('next_acc')]
                    })], __function_args__, (acc1, next_acc1) => {
                        return true;
                    })) !== null) {
                        let [acc1, next_acc1] = __arg_matches__;

                        return do_resource(next_acc1, next_fun0, acc1, fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('next_acc')]
                    })], __function_args__, (next_acc1) => {
                        return true;
                    })) !== null) {
                        let [next_acc1] = __arg_matches__;

                        return do_resource(next_acc1, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('halt'), acc0), fun0, after_fun0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.variable('next_acc')]
                    })], __function_args__, (list0, next_acc1) => {
                        return ElixirScript.Core.erlang.is_list(list0);
                    })) !== null) {
                        let [list0, next_acc1] = __arg_matches__;

                        const [reduce0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reduce'), (...__function_args__) => {
                            function recur(...__function_args__) {
                                let __arg_matches__ = null;

                                if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                                    return true;
                                })) !== null) {
                                    let [x10] = __arg_matches__;

                                    return $Enumerable$List$.reduce(list0, x10, fun0);
                                }

                                throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                            }

                            return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                        });

                        return do_list_resource(next_acc1, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc0), fun0, after_fun0, reduce0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('enum'), ElixirScript.Core.Patterns.variable('next_acc')]
                    })], __function_args__, (enum0, next_acc1) => {
                        return true;
                    })) !== null) {
                        let [enum0, next_acc1] = __arg_matches__;

                        const [inner0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inner'), (...__function_args__) => {
                            function recur(...__function_args__) {
                                let __arg_matches__ = null;

                                if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                                    return true;
                                })) !== null) {
                                    let [x10, x20] = __arg_matches__;

                                    return do_resource_each(x10, x20, fun0);
                                }

                                throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                            }

                            return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                        });

                        const [reduce0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reduce'), (...__function_args__) => {
                            function recur(...__function_args__) {
                                let __arg_matches__ = null;

                                if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                                    return true;
                                })) !== null) {
                                    let [x10] = __arg_matches__;

                                    return $Enumerable$.reduce(enum0, x10, inner0);
                                }

                                throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                            }

                            return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                        });

                        return do_enum_resource(next_acc1, next_fun0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc0), fun0, after_fun0, reduce0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_resource_each(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.headTail(Symbol.for('outer'), ElixirScript.Core.Patterns.variable('acc')), ElixirScript.Core.Patterns.variable('f')], __function_args__, (x0, acc0, f0) => {
            return true;
        })) !== null) {
            let [x0, acc0, f0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('res')]
            })], (res0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('halt'), ElixirScript.Core.Functions.concat(Symbol.for('inner'), res0));
            }, (res0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('op'), ElixirScript.Core.Patterns.variable('res')]
            })], (op0, res0) => {
                return new ElixirScript.Core.Tuple(op0, ElixirScript.Core.Functions.concat(Symbol.for('outer'), res0));
            }, (op0, res0) => {
                return true;
            })).call(this, f0(x0, acc0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function resource(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('start_fun'), ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.variable('after_fun')], __function_args__, (start_fun0, next_fun0, after_fun0) => {
            return true;
        })) !== null) {
            let [start_fun0, next_fun0, after_fun0] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                        return true;
                    })) !== null) {
                        let [x10, x20] = __arg_matches__;

                        return do_resource(ElixirScript.Core.Functions.call_property(start_fun0), next_fun0, x10, x20, after_fun0);
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
    __struct__,
    resource,
    __MODULE__: Symbol.for('Elixir.Stream'),
    __info__
};
