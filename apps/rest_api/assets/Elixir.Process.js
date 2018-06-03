'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('alive?'), 1), new ElixirScript.Core.Tuple(Symbol.for('cancel_timer'), 1), new ElixirScript.Core.Tuple(Symbol.for('cancel_timer'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete'), 1), new ElixirScript.Core.Tuple(Symbol.for('demonitor'), 1), new ElixirScript.Core.Tuple(Symbol.for('demonitor'), 2), new ElixirScript.Core.Tuple(Symbol.for('exit'), 2), new ElixirScript.Core.Tuple(Symbol.for('flag'), 2), new ElixirScript.Core.Tuple(Symbol.for('flag'), 3), new ElixirScript.Core.Tuple(Symbol.for('get'), 0), new ElixirScript.Core.Tuple(Symbol.for('get'), 1), new ElixirScript.Core.Tuple(Symbol.for('get'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_keys'), 0), new ElixirScript.Core.Tuple(Symbol.for('get_keys'), 1), new ElixirScript.Core.Tuple(Symbol.for('group_leader'), 0), new ElixirScript.Core.Tuple(Symbol.for('group_leader'), 2), new ElixirScript.Core.Tuple(Symbol.for('hibernate'), 3), new ElixirScript.Core.Tuple(Symbol.for('info'), 1), new ElixirScript.Core.Tuple(Symbol.for('info'), 2), new ElixirScript.Core.Tuple(Symbol.for('link'), 1), new ElixirScript.Core.Tuple(Symbol.for('list'), 0), new ElixirScript.Core.Tuple(Symbol.for('monitor'), 1), new ElixirScript.Core.Tuple(Symbol.for('put'), 2), new ElixirScript.Core.Tuple(Symbol.for('read_timer'), 1), new ElixirScript.Core.Tuple(Symbol.for('register'), 2), new ElixirScript.Core.Tuple(Symbol.for('registered'), 0), new ElixirScript.Core.Tuple(Symbol.for('send'), 3), new ElixirScript.Core.Tuple(Symbol.for('send_after'), 3), new ElixirScript.Core.Tuple(Symbol.for('send_after'), 4), new ElixirScript.Core.Tuple(Symbol.for('sleep'), 1), new ElixirScript.Core.Tuple(Symbol.for('spawn'), 2), new ElixirScript.Core.Tuple(Symbol.for('spawn'), 4), new ElixirScript.Core.Tuple(Symbol.for('unlink'), 1), new ElixirScript.Core.Tuple(Symbol.for('unregister'), 1), new ElixirScript.Core.Tuple(Symbol.for('whereis'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [290614472031693351563496075417449144339])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/process.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(19))], [Symbol.for('module'), Symbol.for('Elixir.Process')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __delete__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('key')], __function_args__, (key0) => {
            return true;
        })) !== null) {
            let [key0] = __arg_matches__;

            return nillify(ElixirScript.Core.erlang.erase(key0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, null));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (key0, __default__0) => {
            return true;
        })) !== null) {
            let [key0, __default__0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('undefined')], () => {
                return __default__0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('value')], (value0) => {
                return value0;
            }, (value0) => {
                return true;
            })).call(this, ElixirScript.Core.erlang.get(key0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function info(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('pid'), Symbol.for('registered_name')], __function_args__, (pid0) => {
            return true;
        })) !== null) {
            let [pid0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('undefined')], () => {
                return null;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[]], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('registered_name'), []);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other')], (other0) => {
                return other0;
            }, (other0) => {
                return true;
            })).call(this, ElixirScript.Core.erlang.process_info(pid0, Symbol.for('registered_name')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('pid'), ElixirScript.Core.Patterns.variable('spec')], __function_args__, (pid0, spec0) => {
            return ElixirScript.Core.erlang.is_atom(spec0) || ElixirScript.Core.erlang.is_list(spec0);
        })) !== null) {
            let [pid0, spec0] = __arg_matches__;

            return nillify(ElixirScript.Core.erlang.process_info(pid0, spec0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function nillify(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('undefined')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return null;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return other0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function put(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (key0, value0) => {
            return true;
        })) !== null) {
            let [key0, value0] = __arg_matches__;

            return nillify(ElixirScript.Core.erlang.put(key0, value0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __delete__,
    get,
    info,
    put,
    __MODULE__: Symbol.for('Elixir.Process'),
    __info__
};
