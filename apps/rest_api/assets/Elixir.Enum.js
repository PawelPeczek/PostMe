'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Range$ from './Elixir.Range.js';

import $Enumerable$ from './Elixir.Enumerable.js';

import $Enum$ from './Elixir.Enum.js';

import $Stream$Reducers$ from './Elixir.Stream.Reducers.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Enum$OutOfBoundsError$ from './Elixir.Enum.OutOfBoundsError.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Dict$ from './Elixir.Dict.js';

import $IO$ from './Elixir.IO.js';

import $Enum$EmptyError$ from './Elixir.Enum.EmptyError.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

import $Map$ from './Elixir.Map.js';

import $Stream$ from './Elixir.Stream.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('all?'), 1), new ElixirScript.Core.Tuple(Symbol.for('all?'), 2), new ElixirScript.Core.Tuple(Symbol.for('any?'), 1), new ElixirScript.Core.Tuple(Symbol.for('any?'), 2), new ElixirScript.Core.Tuple(Symbol.for('at'), 2), new ElixirScript.Core.Tuple(Symbol.for('at'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 4), new ElixirScript.Core.Tuple(Symbol.for('chunk_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 4), new ElixirScript.Core.Tuple(Symbol.for('chunk_while'), 4), new ElixirScript.Core.Tuple(Symbol.for('concat'), 1), new ElixirScript.Core.Tuple(Symbol.for('concat'), 2), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 2), new ElixirScript.Core.Tuple(Symbol.for('dedup'), 1), new ElixirScript.Core.Tuple(Symbol.for('dedup_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('each'), 2), new ElixirScript.Core.Tuple(Symbol.for('empty?'), 1), new ElixirScript.Core.Tuple(Symbol.for('fetch'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch!'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 3), new ElixirScript.Core.Tuple(Symbol.for('find'), 2), new ElixirScript.Core.Tuple(Symbol.for('find'), 3), new ElixirScript.Core.Tuple(Symbol.for('find_index'), 2), new ElixirScript.Core.Tuple(Symbol.for('find_value'), 2), new ElixirScript.Core.Tuple(Symbol.for('find_value'), 3), new ElixirScript.Core.Tuple(Symbol.for('flat_map'), 2), new ElixirScript.Core.Tuple(Symbol.for('flat_map_reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('group_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('group_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('intersperse'), 2), new ElixirScript.Core.Tuple(Symbol.for('into'), 2), new ElixirScript.Core.Tuple(Symbol.for('into'), 3), new ElixirScript.Core.Tuple(Symbol.for('join'), 1), new ElixirScript.Core.Tuple(Symbol.for('join'), 2), new ElixirScript.Core.Tuple(Symbol.for('map'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('map_join'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_join'), 3), new ElixirScript.Core.Tuple(Symbol.for('map_reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('max'), 1), new ElixirScript.Core.Tuple(Symbol.for('max'), 2), new ElixirScript.Core.Tuple(Symbol.for('max_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('max_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('min'), 1), new ElixirScript.Core.Tuple(Symbol.for('min'), 2), new ElixirScript.Core.Tuple(Symbol.for('min_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('min_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('min_max'), 1), new ElixirScript.Core.Tuple(Symbol.for('min_max'), 2), new ElixirScript.Core.Tuple(Symbol.for('min_max_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('min_max_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('partition'), 2), new ElixirScript.Core.Tuple(Symbol.for('random'), 1), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('reduce_while'), 3), new ElixirScript.Core.Tuple(Symbol.for('reject'), 2), new ElixirScript.Core.Tuple(Symbol.for('reverse'), 1), new ElixirScript.Core.Tuple(Symbol.for('reverse'), 2), new ElixirScript.Core.Tuple(Symbol.for('reverse_slice'), 3), new ElixirScript.Core.Tuple(Symbol.for('scan'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan'), 3), new ElixirScript.Core.Tuple(Symbol.for('shuffle'), 1), new ElixirScript.Core.Tuple(Symbol.for('slice'), 2), new ElixirScript.Core.Tuple(Symbol.for('slice'), 3), new ElixirScript.Core.Tuple(Symbol.for('sort'), 1), new ElixirScript.Core.Tuple(Symbol.for('sort'), 2), new ElixirScript.Core.Tuple(Symbol.for('sort_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('sort_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('split_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('split_with'), 2), new ElixirScript.Core.Tuple(Symbol.for('sum'), 1), new ElixirScript.Core.Tuple(Symbol.for('take'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_random'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('uniq'), 1), new ElixirScript.Core.Tuple(Symbol.for('uniq'), 2), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('unzip'), 1), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 1), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 2), new ElixirScript.Core.Tuple(Symbol.for('zip'), 1), new ElixirScript.Core.Tuple(Symbol.for('zip'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [190605291282207960368103143467385457241])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/enum.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(89))], [Symbol.for('module'), Symbol.for('Elixir.Enum')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function backwards_compatible_slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('args')], __function_args__, (args0) => {
            return true;
        })) !== null) {
            let [args0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return $Enumerable$.slice(args0);
            }, null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('error'), Symbol.for('undef')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('module'), Symbol.for('slice'), [ElixirScript.Core.Patterns.bound(args0)], ElixirScript.Core.Patterns.variable('_')]
                        }), ElixirScript.Core.Patterns.variable('_'))], (module0) => {
                            return new ElixirScript.Core.Tuple(Symbol.for('error'), module0);
                        }, (module0) => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('stack')], (stack0) => {
                            return ElixirScript.Core.erlang.raise(Symbol.for('error'), Symbol.for('undef'), stack0);
                        }, (stack0) => {
                            return true;
                        })).call(this, ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.get_stacktrace));
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

function drop(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('amount')], __function_args__, (enumerable0, amount0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0) && ElixirScript.Core.erlang.is_integer(amount0) && amount0 >= 0;
        })) !== null) {
            let [enumerable0, amount0] = __arg_matches__;

            return drop_list(enumerable0, amount0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('amount')], __function_args__, (enumerable0, amount0) => {
            return ElixirScript.Core.erlang.is_integer(amount0) && amount0 >= 0;
        })) !== null) {
            let [enumerable0, amount0] = __arg_matches__;

            const [result0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('result'), ElixirScript.Core.Patterns.variable('_')]
            }), reduce(enumerable0, new ElixirScript.Core.Tuple([], amount0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_entry576460752303385727'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('head576460752303385727'), ElixirScript.Core.Patterns.variable('amount576460752303385727')]
                    })], __function_args__, (_entry5764607523033857270, head5764607523033857270, amount5764607523033857270) => {
                        return amount5764607523033857270 > 0;
                    })) !== null) {
                        let [_entry5764607523033857270, head5764607523033857270, amount5764607523033857270] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(head5764607523033857270, amount5764607523033857270 - 1);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry576460752303385727'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('head576460752303385727'), ElixirScript.Core.Patterns.variable('amount576460752303385727')]
                    })], __function_args__, (entry5764607523033857270, head5764607523033857270, amount5764607523033857270) => {
                        return true;
                    })) !== null) {
                        let [entry5764607523033857270, head5764607523033857270, amount5764607523033857270] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.concat(entry5764607523033857270, head5764607523033857270), amount5764607523033857270);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref6590584 = new ElixirScript.Core.Tuple(result0);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return [];
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.lists.reverse(result0);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.is_list(result0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('amount')], __function_args__, (enumerable0, amount0) => {
            return ElixirScript.Core.erlang.is_integer(amount0) && amount0 < 0;
        })) !== null) {
            let [enumerable0, amount0] = __arg_matches__;

            const [count0, fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('fun')]
            }), slice_count_and_fun(enumerable0));

            const _ref748275 = new ElixirScript.Core.Tuple(count0, fun0);

            const [amount1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('amount'), ElixirScript.Core.erlang.min(amount0 + count0, count0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return [];
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return fun0(0, amount1);
            }, () => {
                return true;
            })).call(this, amount1 > 0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function drop_list(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), 0], __function_args__, (list0) => {
            return true;
        })) !== null) {
            let [list0] = __arg_matches__;

            return list0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('tail')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (tail0, counter0) => {
            return true;
        })) !== null) {
            let [tail0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, tail0, counter0 - 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function entry_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry')], __function_args__, (entry0) => {
            return ElixirScript.Core.erlang.is_binary(entry0);
        })) !== null) {
            let [entry0] = __arg_matches__;

            return entry0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry')], __function_args__, (entry0) => {
            return true;
        })) !== null) {
            let [entry0] = __arg_matches__;

            return $String$Chars$.to_string(entry0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function join(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('joiner')], __function_args__, (enumerable0, joiner0) => {
            return ElixirScript.Core.erlang.is_binary(joiner0);
        })) !== null) {
            let [enumerable0, joiner0] = __arg_matches__;

            const [reduced0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reduced'), reduce(enumerable0, Symbol.for('first'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry'), Symbol.for('first')], __function_args__, (entry0) => {
                        return true;
                    })) !== null) {
                        let [entry0] = __arg_matches__;

                        return entry_to_string(entry0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (entry0, acc0) => {
                        return true;
                    })) !== null) {
                        let [entry0, acc0] = __arg_matches__;

                        return [acc0, ElixirScript.Core.Functions.concat(joiner0, entry_to_string(entry0))];
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.iolist_to_binary(reduced0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return '';
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(reduced0, Symbol.for('first')));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function map(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, fun0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0);
        })) !== null) {
            let [enumerable0, fun0] = __arg_matches__;

            return ElixirScript.Core.lists.map(fun0, enumerable0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, fun0) => {
            return true;
        })) !== null) {
            let [enumerable0, fun0] = __arg_matches__;

            return ElixirScript.Core.lists.reverse(reduce(enumerable0, [], (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry576460752303392440'), ElixirScript.Core.Patterns.variable('acc576460752303392440')], __function_args__, (entry5764607523033924400, acc5764607523033924400) => {
                        return true;
                    })) !== null) {
                        let [entry5764607523033924400, acc5764607523033924400] = __arg_matches__;

                        return ElixirScript.Core.Functions.concat(fun0(entry5764607523033924400), acc5764607523033924400);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function map_join(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('joiner'), ElixirScript.Core.Patterns.variable('mapper')], __function_args__, (enumerable0, joiner0, mapper0) => {
            return ElixirScript.Core.erlang.is_binary(joiner0);
        })) !== null) {
            let [enumerable0, joiner0, mapper0] = __arg_matches__;

            const [reduced0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reduced'), reduce(enumerable0, Symbol.for('first'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry'), Symbol.for('first')], __function_args__, (entry0) => {
                        return true;
                    })) !== null) {
                        let [entry0] = __arg_matches__;

                        return entry_to_string(mapper0(entry0));
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (entry0, acc0) => {
                        return true;
                    })) !== null) {
                        let [entry0, acc0] = __arg_matches__;

                        return [acc0, ElixirScript.Core.Functions.concat(joiner0, entry_to_string(mapper0(entry0)))];
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.iolist_to_binary(reduced0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return '';
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(reduced0, Symbol.for('first')));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('element')], __function_args__, (enumerable0, element0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0);
        })) !== null) {
            let [enumerable0, element0] = __arg_matches__;

            return ElixirScript.Core.lists.member(element0, enumerable0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('element')], __function_args__, (enumerable0, element0) => {
            return true;
        })) !== null) {
            let [enumerable0, element0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('element')]
            })], (element1) => {
                return element1;
            }, (element1) => {
                return ElixirScript.Core.erlang.is_boolean(element1);
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('module')]
            })], (module0) => {
                return ElixirScript.Core.erlang.element(2, module0.reduce(enumerable0, new ElixirScript.Core.Tuple(Symbol.for('cont'), false), (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('v'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (v0) => {
                            return v0 === element0;
                        })) !== null) {
                            let [v0] = __arg_matches__;

                            return new ElixirScript.Core.Tuple(Symbol.for('halt'), true);
                        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
                            return true;
                        })) !== null) {
                            let [] = __arg_matches__;

                            return new ElixirScript.Core.Tuple(Symbol.for('cont'), false);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                }));
            }, (module0) => {
                return true;
            })).call(this, $Enumerable$.member__qmark__(enumerable0, element0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, acc0, fun0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0);
        })) !== null) {
            let [enumerable0, acc0, fun0] = __arg_matches__;

            return ElixirScript.Core.lists.foldl(fun0, acc0, enumerable0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, last0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, last0, acc0, fun0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return reduce_range_dec(first0, last0, acc0, fun0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return reduce_range_inc(first0, last0, acc0, fun0);
            }, () => {
                return true;
            })).call(this, first0 <= last0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }]])), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [enumerable0, acc0, fun0] = __arg_matches__;

            return ElixirScript.Core.erlang.element(2, $Enumerable$.reduce(enumerable0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (x0, acc1) => {
                        return true;
                    })) !== null) {
                        let [x0, acc1] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(Symbol.for('cont'), fun0(x0, acc1));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([])), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [enumerable0, acc0, fun0] = __arg_matches__;

            return ElixirScript.Core.maps.fold((...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (k0, v0, acc1) => {
                        return true;
                    })) !== null) {
                        let [k0, v0, acc1] = __arg_matches__;

                        return fun0(new ElixirScript.Core.Tuple(k0, v0), acc1);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, acc0, enumerable0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [enumerable0, acc0, fun0] = __arg_matches__;

            return ElixirScript.Core.erlang.element(2, $Enumerable$.reduce(enumerable0, new ElixirScript.Core.Tuple(Symbol.for('cont'), acc0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (x0, acc1) => {
                        return true;
                    })) !== null) {
                        let [x0, acc1] = __arg_matches__;

                        return new ElixirScript.Core.Tuple(Symbol.for('cont'), fun0(x0, acc1));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce_range_dec(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, first1, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, first1, acc0, fun0] = __arg_matches__;

            return fun0(first1, acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('last'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, last0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, last0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first0 - 1, last0, fun0(first0, acc0), fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce_range_inc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, first1, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, first1, acc0, fun0] = __arg_matches__;

            return fun0(first1, acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('last'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, last0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, last0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first0 + 1, last0, fun0(first0, acc0), fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reverse(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture([ElixirScript.Core.Patterns.variable('_')])], __function_args__, (list0) => {
            return true;
        })) !== null) {
            let [list0] = __arg_matches__;

            return list0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[ElixirScript.Core.Patterns.variable('item1'), ElixirScript.Core.Patterns.variable('item2')]], __function_args__, (item10, item20) => {
            return true;
        })) !== null) {
            let [item10, item20] = __arg_matches__;

            return [item20, item10];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[ElixirScript.Core.Patterns.variable('item1'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('item2'), ElixirScript.Core.Patterns.variable('rest'))]], __function_args__, (item10, item20, rest0) => {
            return true;
        })) !== null) {
            let [item10, item20, rest0] = __arg_matches__;

            return ElixirScript.Core.lists.reverse(rest0, [item20, item10]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable')], __function_args__, (enumerable0) => {
            return true;
        })) !== null) {
            let [enumerable0] = __arg_matches__;

            return reduce(enumerable0, [], (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                        return true;
                    })) !== null) {
                        let [x10, x20] = __arg_matches__;

                        return ElixirScript.Core.Functions.concat(x10, x20);
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

function slice_count_and_fun(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable')], __function_args__, (enumerable0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0);
        })) !== null) {
            let [enumerable0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(ElixirScript.Core.erlang.length(enumerable0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                        return true;
                    })) !== null) {
                        let [x10, x20] = __arg_matches__;

                        return $Enumerable$List$.slice(enumerable0, x10, x20);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable')], __function_args__, (enumerable0) => {
            return true;
        })) !== null) {
            let [enumerable0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('fun')]
            })], (count0, fun0) => {
                return new ElixirScript.Core.Tuple(count0, fun0);
            }, (count0, fun0) => {
                return ElixirScript.Core.erlang.is_function(fun0);
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('module')]
            })], (module0) => {
                const [list0, count0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.variable('count')]
                    })]
                }), module0.reduce(enumerable0, new ElixirScript.Core.Tuple(Symbol.for('cont'), new ElixirScript.Core.Tuple([], 0)), (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('elem'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('count')]
                        })], __function_args__, (elem0, acc0, count0) => {
                            return true;
                        })) !== null) {
                            let [elem0, acc0, count0] = __arg_matches__;

                            return new ElixirScript.Core.Tuple(Symbol.for('cont'), new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.concat(elem0, acc0), count0 + 1));
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                }));

                const _ref3515482 = new ElixirScript.Core.Tuple(list0, count0);

                return new ElixirScript.Core.Tuple(count0, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return $Enumerable$List$.slice(ElixirScript.Core.lists.reverse(list0), x10, x20);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, (module0) => {
                return true;
            })).call(this, backwards_compatible_slice(enumerable0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function split_with(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (enumerable0, fun0) => {
            return true;
        })) !== null) {
            let [enumerable0, fun0] = __arg_matches__;

            const [acc10, acc20] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('acc1'), ElixirScript.Core.Patterns.variable('acc2')]
            }), reduce(enumerable0, new ElixirScript.Core.Tuple([], []), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('entry'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('acc1'), ElixirScript.Core.Patterns.variable('acc2')]
                    })], __function_args__, (entry0, acc10, acc20) => {
                        return true;
                    })) !== null) {
                        let [entry0, acc10, acc20] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303389628')], (x5764607523033896280) => {
                            return new ElixirScript.Core.Tuple(acc10, ElixirScript.Core.Functions.concat(entry0, acc20));
                        }, (x5764607523033896280) => {
                            return x5764607523033896280 === null || x5764607523033896280 === false;
                        }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                            return new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.concat(entry0, acc10), acc20);
                        }, () => {
                            return true;
                        })).call(this, fun0(entry0));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref398277 = new ElixirScript.Core.Tuple(acc10, acc20);

            return new ElixirScript.Core.Tuple(ElixirScript.Core.lists.reverse(acc10), ElixirScript.Core.lists.reverse(acc20));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_list(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable')], __function_args__, (enumerable0) => {
            return ElixirScript.Core.erlang.is_list(enumerable0);
        })) !== null) {
            let [enumerable0] = __arg_matches__;

            return enumerable0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('enumerable')], __function_args__, (enumerable0) => {
            return true;
        })) !== null) {
            let [enumerable0] = __arg_matches__;

            return ElixirScript.Core.lists.reverse(reverse(enumerable0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    drop,
    join,
    map,
    map_join,
    member__qmark__,
    reduce,
    reverse,
    split_with,
    to_list,
    __MODULE__: Symbol.for('Elixir.Enum'),
    __info__
};
