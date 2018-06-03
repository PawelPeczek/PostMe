'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $IO$Stream$ from './Elixir.IO.Stream.js';

import $List$ from './Elixir.List.js';

import $IO$StreamError$ from './Elixir.IO.StreamError.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Access$ from './Elixir.Access.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Enum$ from './Elixir.Enum.js';

import $Process$ from './Elixir.Process.js';

import $Exception$ from './Elixir.Exception.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('binread'), 1), new ElixirScript.Core.Tuple(Symbol.for('binread'), 2), new ElixirScript.Core.Tuple(Symbol.for('binstream'), 2), new ElixirScript.Core.Tuple(Symbol.for('binwrite'), 1), new ElixirScript.Core.Tuple(Symbol.for('binwrite'), 2), new ElixirScript.Core.Tuple(Symbol.for('chardata_to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('each_binstream'), 2), new ElixirScript.Core.Tuple(Symbol.for('each_stream'), 2), new ElixirScript.Core.Tuple(Symbol.for('getn'), 1), new ElixirScript.Core.Tuple(Symbol.for('getn'), 2), new ElixirScript.Core.Tuple(Symbol.for('getn'), 3), new ElixirScript.Core.Tuple(Symbol.for('gets'), 1), new ElixirScript.Core.Tuple(Symbol.for('gets'), 2), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 3), new ElixirScript.Core.Tuple(Symbol.for('iodata_length'), 1), new ElixirScript.Core.Tuple(Symbol.for('iodata_to_binary'), 1), new ElixirScript.Core.Tuple(Symbol.for('puts'), 1), new ElixirScript.Core.Tuple(Symbol.for('puts'), 2), new ElixirScript.Core.Tuple(Symbol.for('read'), 1), new ElixirScript.Core.Tuple(Symbol.for('read'), 2), new ElixirScript.Core.Tuple(Symbol.for('stream'), 2), new ElixirScript.Core.Tuple(Symbol.for('warn'), 1), new ElixirScript.Core.Tuple(Symbol.for('warn'), 2), new ElixirScript.Core.Tuple(Symbol.for('write'), 1), new ElixirScript.Core.Tuple(Symbol.for('write'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [177861756345047279225072371394993518331])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/io.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(251))], [Symbol.for('module'), Symbol.for('Elixir.IO')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function binread(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), Symbol.for('all')], __function_args__, (device0) => {
            return true;
        })) !== null) {
            let [device0] = __arg_matches__;

            return do_binread_all(map_dev(device0), '');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), Symbol.for('line')], __function_args__, (device0) => {
            return true;
        })) !== null) {
            let [device0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('data')]
            })], (data0) => {
                return data0;
            }, (data0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, ElixirScript.Core.file.read_line(map_dev(device0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (device0, count0) => {
            return ElixirScript.Core.erlang.is_integer(count0) && count0 >= 0;
        })) !== null) {
            let [device0, count0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('data')]
            })], (data0) => {
                return data0;
            }, (data0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, ElixirScript.Core.file.read(map_dev(device0), count0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function binwrite(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('item')], __function_args__, (device0, item0) => {
            return ElixirScript.Core.erlang.is_list(item0) || ElixirScript.Core.erlang.is_binary(item0);
        })) !== null) {
            let [device0, item0] = __arg_matches__;

            return ElixirScript.Core.file.write(map_dev(device0), item0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function chardata_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('string')], __function_args__, (string0) => {
            return ElixirScript.Core.erlang.is_binary(string0);
        })) !== null) {
            let [string0] = __arg_matches__;

            return string0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list')], __function_args__, (list0) => {
            return ElixirScript.Core.erlang.is_list(list0);
        })) !== null) {
            let [list0] = __arg_matches__;

            return $List$.to_string(list0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_binread_all(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('mapped_dev'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (mapped_dev0, acc0) => {
            return true;
        })) !== null) {
            let [mapped_dev0, acc0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('data')]
            })], (data0) => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, mapped_dev0, acc0 + data0));
            }, (data0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('eof')], () => {
                return acc0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, ElixirScript.Core.file.read(mapped_dev0, 4096));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_read_all(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('mapped_dev'), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (mapped_dev0, acc0) => {
            return true;
        })) !== null) {
            let [mapped_dev0, acc0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('line')], (line0) => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, mapped_dev0, acc0 + line0));
            }, (line0) => {
                return ElixirScript.Core.erlang.is_binary(line0);
            }), ElixirScript.Core.Patterns.clause([Symbol.for('eof')], () => {
                return acc0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, ElixirScript.Core.io.get_line(mapped_dev0, ''));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function each_binstream(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('line_or_chars')], __function_args__, (device0, line_or_chars0) => {
            return true;
        })) !== null) {
            let [device0, line_or_chars0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('eof')], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('halt'), device0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($IO$StreamError$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0)]));
            }, (reason0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('data')], (data0) => {
                return new ElixirScript.Core.Tuple([data0], device0);
            }, (data0) => {
                return true;
            })).call(this, binread(device0, line_or_chars0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function each_stream(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('line_or_codepoints')], __function_args__, (device0, line_or_codepoints0) => {
            return true;
        })) !== null) {
            let [device0, line_or_codepoints0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('eof')], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('halt'), device0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($IO$StreamError$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0)]));
            }, (reason0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('data')], (data0) => {
                return new ElixirScript.Core.Tuple([data0], device0);
            }, (data0) => {
                return true;
            })).call(this, read(device0, line_or_codepoints0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function map_dev(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('stdio')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('standard_io');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('stderr')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('standard_error');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return ElixirScript.Core.erlang.is_atom(other0) || ElixirScript.Core.erlang.is_pid(other0) || ElixirScript.Core.erlang.is_tuple(other0);
        })) !== null) {
            let [other0] = __arg_matches__;

            return other0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function puts(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, Symbol.for('stdio'), x00));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('item')], __function_args__, (device0, item0) => {
            return true;
        })) !== null) {
            let [device0, item0] = __arg_matches__;

            return ElixirScript.Core.io.put_chars(map_dev(device0), [to_chardata(item0), 10]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function read(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), Symbol.for('all')], __function_args__, (device0) => {
            return true;
        })) !== null) {
            let [device0] = __arg_matches__;

            return do_read_all(map_dev(device0), '');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), Symbol.for('line')], __function_args__, (device0) => {
            return true;
        })) !== null) {
            let [device0] = __arg_matches__;

            return ElixirScript.Core.io.get_line(map_dev(device0), []);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (device0, count0) => {
            return ElixirScript.Core.erlang.is_integer(count0) && count0 >= 0;
        })) !== null) {
            let [device0, count0] = __arg_matches__;

            return ElixirScript.Core.io.get_chars(map_dev(device0), [], count0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_chardata(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list')], __function_args__, (list0) => {
            return ElixirScript.Core.erlang.is_list(list0);
        })) !== null) {
            let [list0] = __arg_matches__;

            return list0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return $String$Chars$.to_string(other0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function warn(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('message')], __function_args__, (message0) => {
            return true;
        })) !== null) {
            let [message0] = __arg_matches__;

            const [stacktrace0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('current_stacktrace'), ElixirScript.Core.Patterns.variable('stacktrace')]
            }), $Process$.info(ElixirScript.Core.Functions.call_property(ElixirScript.Core.erlang.self), Symbol.for('current_stacktrace')));

            const _ref5908753 = new ElixirScript.Core.Tuple(stacktrace0);

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, message0, $Enum$.drop(stacktrace0, 2)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('message'), []], __function_args__, (message0) => {
            return true;
        })) !== null) {
            let [message0] = __arg_matches__;

            return ElixirScript.Core.elixir_errors.bare_warn(null, null, [to_chardata(message0), 10]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('message'), ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('opts')]
        }), ElixirScript.Core.Patterns.variable('_')))], __function_args__, (message0, opts0, stacktrace0) => {
            return true;
        })) !== null) {
            let [message0, opts0, stacktrace0] = __arg_matches__;

            const [formatted_trace0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('formatted_trace'), $Enum$.map_join(stacktrace0, '\n  ', $Exception$.format_stacktrace_entry));

            const [message1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('message'), [to_chardata(message0), 10, '  ', formatted_trace0, 10]);

            const [line0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('line'), $Access$.get(opts0, Symbol.for('line')));

            const [file0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('file'), $Access$.get(opts0, Symbol.for('file')));

            return ElixirScript.Core.elixir_errors.bare_warn(line0, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303404315')], (x5764607523034043150) => {
                return x5764607523034043150;
            }, (x5764607523034043150) => {
                return x5764607523034043150 === null || x5764607523034043150 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $List$.to_string(file0);
            }, () => {
                return true;
            })).call(this, file0), message1);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function write(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('item')], __function_args__, (device0, item0) => {
            return true;
        })) !== null) {
            let [device0, item0] = __arg_matches__;

            return ElixirScript.Core.io.put_chars(map_dev(device0), to_chardata(item0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    binread,
    binwrite,
    chardata_to_string,
    each_binstream,
    each_stream,
    puts,
    read,
    warn,
    write,
    __MODULE__: Symbol.for('Elixir.IO'),
    __info__
};
