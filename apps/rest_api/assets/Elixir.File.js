'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $IO$ from './Elixir.IO.js';

import $File$Error$ from './Elixir.File.Error.js';

import $Enum$ from './Elixir.Enum.js';

import $File$CopyError$ from './Elixir.File.CopyError.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Path$ from './Elixir.Path.js';

import $File$LinkError$ from './Elixir.File.LinkError.js';

import $File$Stat$ from './Elixir.File.Stat.js';

import $Keyword$ from './Elixir.Keyword.js';

import $File$Stream$ from './Elixir.File.Stream.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('cd'), 1), new ElixirScript.Core.Tuple(Symbol.for('cd!'), 1), new ElixirScript.Core.Tuple(Symbol.for('cd!'), 2), new ElixirScript.Core.Tuple(Symbol.for('chgrp'), 2), new ElixirScript.Core.Tuple(Symbol.for('chgrp!'), 2), new ElixirScript.Core.Tuple(Symbol.for('chmod'), 2), new ElixirScript.Core.Tuple(Symbol.for('chmod!'), 2), new ElixirScript.Core.Tuple(Symbol.for('chown'), 2), new ElixirScript.Core.Tuple(Symbol.for('chown!'), 2), new ElixirScript.Core.Tuple(Symbol.for('close'), 1), new ElixirScript.Core.Tuple(Symbol.for('copy'), 2), new ElixirScript.Core.Tuple(Symbol.for('copy'), 3), new ElixirScript.Core.Tuple(Symbol.for('copy!'), 2), new ElixirScript.Core.Tuple(Symbol.for('copy!'), 3), new ElixirScript.Core.Tuple(Symbol.for('cp'), 2), new ElixirScript.Core.Tuple(Symbol.for('cp'), 3), new ElixirScript.Core.Tuple(Symbol.for('cp!'), 2), new ElixirScript.Core.Tuple(Symbol.for('cp!'), 3), new ElixirScript.Core.Tuple(Symbol.for('cp_r'), 2), new ElixirScript.Core.Tuple(Symbol.for('cp_r'), 3), new ElixirScript.Core.Tuple(Symbol.for('cp_r!'), 2), new ElixirScript.Core.Tuple(Symbol.for('cp_r!'), 3), new ElixirScript.Core.Tuple(Symbol.for('cwd'), 0), new ElixirScript.Core.Tuple(Symbol.for('cwd!'), 0), new ElixirScript.Core.Tuple(Symbol.for('dir?'), 1), new ElixirScript.Core.Tuple(Symbol.for('exists?'), 1), new ElixirScript.Core.Tuple(Symbol.for('ln'), 2), new ElixirScript.Core.Tuple(Symbol.for('ln!'), 2), new ElixirScript.Core.Tuple(Symbol.for('ln_s'), 2), new ElixirScript.Core.Tuple(Symbol.for('ln_s!'), 2), new ElixirScript.Core.Tuple(Symbol.for('ls'), 0), new ElixirScript.Core.Tuple(Symbol.for('ls'), 1), new ElixirScript.Core.Tuple(Symbol.for('ls!'), 0), new ElixirScript.Core.Tuple(Symbol.for('ls!'), 1), new ElixirScript.Core.Tuple(Symbol.for('lstat'), 1), new ElixirScript.Core.Tuple(Symbol.for('lstat'), 2), new ElixirScript.Core.Tuple(Symbol.for('lstat!'), 1), new ElixirScript.Core.Tuple(Symbol.for('lstat!'), 2), new ElixirScript.Core.Tuple(Symbol.for('mkdir'), 1), new ElixirScript.Core.Tuple(Symbol.for('mkdir!'), 1), new ElixirScript.Core.Tuple(Symbol.for('mkdir_p'), 1), new ElixirScript.Core.Tuple(Symbol.for('mkdir_p!'), 1), new ElixirScript.Core.Tuple(Symbol.for('open'), 1), new ElixirScript.Core.Tuple(Symbol.for('open'), 2), new ElixirScript.Core.Tuple(Symbol.for('open'), 3), new ElixirScript.Core.Tuple(Symbol.for('open!'), 1), new ElixirScript.Core.Tuple(Symbol.for('open!'), 2), new ElixirScript.Core.Tuple(Symbol.for('open!'), 3), new ElixirScript.Core.Tuple(Symbol.for('read'), 1), new ElixirScript.Core.Tuple(Symbol.for('read!'), 1), new ElixirScript.Core.Tuple(Symbol.for('read_link'), 1), new ElixirScript.Core.Tuple(Symbol.for('read_link!'), 1), new ElixirScript.Core.Tuple(Symbol.for('regular?'), 1), new ElixirScript.Core.Tuple(Symbol.for('rename'), 2), new ElixirScript.Core.Tuple(Symbol.for('rm'), 1), new ElixirScript.Core.Tuple(Symbol.for('rm!'), 1), new ElixirScript.Core.Tuple(Symbol.for('rm_rf'), 1), new ElixirScript.Core.Tuple(Symbol.for('rm_rf!'), 1), new ElixirScript.Core.Tuple(Symbol.for('rmdir'), 1), new ElixirScript.Core.Tuple(Symbol.for('rmdir!'), 1), new ElixirScript.Core.Tuple(Symbol.for('stat'), 1), new ElixirScript.Core.Tuple(Symbol.for('stat'), 2), new ElixirScript.Core.Tuple(Symbol.for('stat!'), 1), new ElixirScript.Core.Tuple(Symbol.for('stat!'), 2), new ElixirScript.Core.Tuple(Symbol.for('stream!'), 1), new ElixirScript.Core.Tuple(Symbol.for('stream!'), 2), new ElixirScript.Core.Tuple(Symbol.for('stream!'), 3), new ElixirScript.Core.Tuple(Symbol.for('touch'), 1), new ElixirScript.Core.Tuple(Symbol.for('touch'), 2), new ElixirScript.Core.Tuple(Symbol.for('touch!'), 1), new ElixirScript.Core.Tuple(Symbol.for('touch!'), 2), new ElixirScript.Core.Tuple(Symbol.for('write'), 2), new ElixirScript.Core.Tuple(Symbol.for('write'), 3), new ElixirScript.Core.Tuple(Symbol.for('write!'), 2), new ElixirScript.Core.Tuple(Symbol.for('write!'), 3), new ElixirScript.Core.Tuple(Symbol.for('write_stat'), 2), new ElixirScript.Core.Tuple(Symbol.for('write_stat'), 3), new ElixirScript.Core.Tuple(Symbol.for('write_stat!'), 2), new ElixirScript.Core.Tuple(Symbol.for('write_stat!'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [173501711254980089474564942689313946854])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/file.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(230))], [Symbol.for('module'), Symbol.for('Elixir.File')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function close(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('io_device')], __function_args__, (io_device0) => {
            return true;
        })) !== null) {
            let [io_device0] = __arg_matches__;

            return ElixirScript.Core.file.close(io_device0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function normalize_modes(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(Symbol.for('utf8'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('binary?')], __function_args__, (rest0, binary__qmark__0) => {
            return true;
        })) !== null) {
            let [rest0, binary__qmark__0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_concatenation([new ElixirScript.Core.Tuple(Symbol.for('encoding'), Symbol.for('utf8'))], normalize_modes(rest0, binary__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(Symbol.for('read_ahead'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('binary?')], __function_args__, (rest0, binary__qmark__0) => {
            return true;
        })) !== null) {
            let [rest0, binary__qmark__0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_concatenation([new ElixirScript.Core.Tuple(Symbol.for('read_ahead'), 65536)], normalize_modes(rest0, binary__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('mode'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('_binary?')], __function_args__, (mode0, rest0, _binary__qmark__0) => {
            return mode0 === Symbol.for('char_list') || mode0 === Symbol.for('charlist');
        })) !== null) {
            let [mode0, rest0, _binary__qmark__0] = __arg_matches__;

            ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return null;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return $IO$.warn('the :char_list mode is deprecated, use :charlist');
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(mode0, Symbol.for('char_list')))

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, false));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('mode'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('binary?')], __function_args__, (mode0, rest0, binary__qmark__0) => {
            return true;
        })) !== null) {
            let [mode0, rest0, binary__qmark__0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(mode0, normalize_modes(rest0, binary__qmark__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], true], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [Symbol.for('binary')];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], false], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function open(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('path'), ElixirScript.Core.Patterns.variable('modes')], __function_args__, (path0, modes0) => {
            return ElixirScript.Core.erlang.is_list(modes0);
        })) !== null) {
            let [path0, modes0] = __arg_matches__;

            return ElixirScript.Core.file.open($IO$.chardata_to_string(path0), normalize_modes(modes0, true));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('path'), ElixirScript.Core.Patterns.variable('function')], __function_args__, (path0, __function__0) => {
            return ElixirScript.Core.erlang.is_function(__function__0, 1);
        })) !== null) {
            let [path0, __function__0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, path0, [], __function__0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('path'), ElixirScript.Core.Patterns.variable('modes'), ElixirScript.Core.Patterns.variable('function')], __function_args__, (path0, modes0, __function__0) => {
            return ElixirScript.Core.erlang.is_list(modes0) && ElixirScript.Core.erlang.is_function(__function__0, 1);
        })) !== null) {
            let [path0, modes0, __function__0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('io_device')]
            })], (io_device0) => {
                return ElixirScript.Core.SpecialForms._try(() => {
                    return new ElixirScript.Core.Tuple(Symbol.for('ok'), __function__0(io_device0));
                }, null, null, null, () => {
                    const [] = ElixirScript.Core.Patterns.match(Symbol.for('ok'), close(io_device0));

                    return [];
                });
            }, (io_device0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, open(path0, modes0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function stat(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, []));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('path'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (path0, opts0) => {
            return true;
        })) !== null) {
            let [path0, opts0] = __arg_matches__;

            const [opts1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('opts'), $Keyword$.put_new(opts0, Symbol.for('time'), Symbol.for('universal')));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('fileinfo')]
            })], (fileinfo0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), $File$Stat$.from_record(fileinfo0));
            }, (fileinfo0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('error')], (error0) => {
                return error0;
            }, (error0) => {
                return true;
            })).call(this, ElixirScript.Core.file.read_file_info($IO$.chardata_to_string(path0), opts1));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    close,
    open,
    stat,
    __MODULE__: Symbol.for('Elixir.File'),
    __info__
};
