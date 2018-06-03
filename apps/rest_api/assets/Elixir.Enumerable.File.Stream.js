'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$File$Stream$ from './Elixir.Enumerable.File.Stream.js';

import $File$Stream$ from './Elixir.File.Stream.js';

import $File$ from './Elixir.File.js';

import $File$Error$ from './Elixir.File.Error.js';

import $IO$ from './Elixir.IO.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Stream$ from './Elixir.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [190148285855973537929421556507029132885]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $File$Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/file/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(85))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.File.Stream')]]);

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

            return $File$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$File$Stream$;
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

function bom_length(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))], __function_args__, (_rest0) => {
            return true;
        })) !== null) {
            let [_rest0] = __arg_matches__;

            return 3;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))], __function_args__, (_rest0) => {
            return true;
        })) !== null) {
            let [_rest0] = __arg_matches__;

            return 2;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))], __function_args__, (_rest0) => {
            return true;
        })) !== null) {
            let [_rest0] = __arg_matches__;

            return 2;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))], __function_args__, (_rest0) => {
            return true;
        })) !== null) {
            let [_rest0] = __arg_matches__;

            return 4;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))], __function_args__, (_rest0) => {
            return true;
        })) !== null) {
            let [_rest0] = __arg_matches__;

            return 4;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_binary')], __function_args__, (_binary0) => {
            return true;
        })) !== null) {
            let [_binary0] = __arg_matches__;

            return 0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('path'), ElixirScript.Core.Patterns.variable('path')], [Symbol.for('modes'), ElixirScript.Core.Patterns.variable('modes')], [Symbol.for('line_or_bytes'), Symbol.for('line')]]))], __function_args__, (path0, modes0, stream0) => {
            return true;
        })) !== null) {
            let [path0, modes0, stream0] = __arg_matches__;

            const [pattern0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('pattern'), ElixirScript.Core.binary.compile_pattern('\n'));

            const [counter0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('counter'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return count_lines(x10, path0, pattern0, read_function(stream0), 0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('count')]
            })], (count0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), count0);
            }, (count0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($File$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0), new ElixirScript.Core.Tuple(Symbol.for('action'), 'stream'), new ElixirScript.Core.Tuple(Symbol.for('path'), path0)]));
            }, (reason0) => {
                return true;
            })).call(this, $File$.open(path0, read_modes(modes0), counter0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('path'), ElixirScript.Core.Patterns.variable('path')], [Symbol.for('line_or_bytes'), ElixirScript.Core.Patterns.variable('bytes')]])], __function_args__, (path0, bytes0) => {
            return true;
        })) !== null) {
            let [path0, bytes0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), new Map([[Symbol.for('size'), 0]])]
            })], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$File$Stream$);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), new Map([[Symbol.for('size'), ElixirScript.Core.Patterns.variable('size')]])]
            })], (size0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.erlang.div(size0, bytes0) + ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return 1;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return 0;
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.erlang.rem(size0, bytes0), 0)));
            }, (size0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($File$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0), new ElixirScript.Core.Tuple(Symbol.for('action'), 'stream'), new ElixirScript.Core.Tuple(Symbol.for('path'), path0)]));
            }, (reason0) => {
                return true;
            })).call(this, $File$.stat(path0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count_lines(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('data'), ElixirScript.Core.Patterns.variable('pattern')], __function_args__, (data0, pattern0) => {
            return true;
        })) !== null) {
            let [data0, pattern0] = __arg_matches__;

            return ElixirScript.Core.erlang.length(ElixirScript.Core.binary.matches(data0, pattern0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('path'), ElixirScript.Core.Patterns.variable('pattern'), ElixirScript.Core.Patterns.variable('read'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (device0, path0, pattern0, read0, count0) => {
            return true;
        })) !== null) {
            let [device0, path0, pattern0, read0, count0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('data')], (data0) => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, device0, path0, pattern0, read0, count0 + count_lines(data0, pattern0)));
            }, (data0) => {
                return ElixirScript.Core.erlang.is_binary(data0);
            }), ElixirScript.Core.Patterns.clause([Symbol.for('eof')], () => {
                return count0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($File$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0), new ElixirScript.Core.Tuple(Symbol.for('action'), 'stream'), new ElixirScript.Core.Tuple(Symbol.for('path'), path0)]));
            }, (reason0) => {
                return true;
            })).call(this, read0(device0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_stream'), ElixirScript.Core.Patterns.variable('_term')], __function_args__, (_stream0, _term0) => {
            return true;
        })) !== null) {
            let [_stream0, _term0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$File$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function read_function(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('raw'), true]])], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return $IO$.binread(x10, 65536);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            };
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('raw'), false]])], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return $IO$.read(x10, 65536);
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

function read_modes(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('modes')], __function_args__, (modes0) => {
            return true;
        })) !== null) {
            let [modes0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('mode')], (mode0) => {
                return mode;
            }, (mode0) => {
                return ElixirScript.Core.erlang.not(mode === Symbol.for('append') || (mode === Symbol.for('trim_bom') || mode === Symbol.for('write')));
            }), [ElixirScript.Core.Patterns.list_generator(ElixirScript.Core.Patterns.variable('mode'), modes0)], Collectable, []);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('path'), ElixirScript.Core.Patterns.variable('path')], [Symbol.for('modes'), ElixirScript.Core.Patterns.variable('modes')], [Symbol.for('line_or_bytes'), ElixirScript.Core.Patterns.variable('line_or_bytes')], [Symbol.for('raw'), ElixirScript.Core.Patterns.variable('raw')]]), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (path0, modes0, line_or_bytes0, raw0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [path0, modes0, line_or_bytes0, raw0, acc0, fun0] = __arg_matches__;

            const [start_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('start_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('device')]
                        })], (device0) => {
                            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303400249')], (x5764607523034002490) => {
                                return device0;
                            }, (x5764607523034002490) => {
                                return x5764607523034002490 === null || x5764607523034002490 === false;
                            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                                return trim_bom(device0);
                            }, () => {
                                return true;
                            })).call(this, $Enum$.member__qmark__(modes0, Symbol.for('trim_bom')));
                        }, (device0) => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
                        })], (reason0) => {
                            return ElixirScript.Core.erlang.error($File$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0), new ElixirScript.Core.Tuple(Symbol.for('action'), 'stream'), new ElixirScript.Core.Tuple(Symbol.for('path'), path0)]));
                        }, (reason0) => {
                            return true;
                        })).call(this, ElixirScript.Core.file.open(path0, read_modes(modes0)));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            const [next_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('next_fun'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                            return true;
                        })) !== null) {
                            let [x10] = __arg_matches__;

                            return $IO$.each_binstream(x10, line_or_bytes0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                };
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                            return true;
                        })) !== null) {
                            let [x10] = __arg_matches__;

                            return $IO$.each_stream(x10, line_or_bytes0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                };
            }, () => {
                return true;
            })).call(this, raw0));

            return $Stream$.resource(start_fun0, next_fun0, ElixirScript.Core.file.close)(acc0, fun0);
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

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$File$Stream$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function trim_bom(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device')], __function_args__, (device0) => {
            return true;
        })) !== null) {
            let [device0] = __arg_matches__;

            const [header0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('header'), $IO$.binread(device0, 4));

            const [_new_pos0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('_new_pos')]
            }), ElixirScript.Core.file.position(device0, bom_length(header0)));

            const _ref7906594 = new ElixirScript.Core.Tuple(_new_pos0);

            return device0;
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
    __MODULE__: Symbol.for('Elixir.Enumerable.File.Stream'),
    __info__
};
