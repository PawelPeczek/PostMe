'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $KeyError$ from './Elixir.KeyError.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete'), 3), new ElixirScript.Core.Tuple(Symbol.for('delete_first'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 2), new ElixirScript.Core.Tuple(Symbol.for('equal?'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch!'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update!'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_values'), 2), new ElixirScript.Core.Tuple(Symbol.for('has_key?'), 2), new ElixirScript.Core.Tuple(Symbol.for('keys'), 1), new ElixirScript.Core.Tuple(Symbol.for('keyword?'), 1), new ElixirScript.Core.Tuple(Symbol.for('merge'), 2), new ElixirScript.Core.Tuple(Symbol.for('merge'), 3), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('new'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop'), 3), new ElixirScript.Core.Tuple(Symbol.for('pop_first'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop_first'), 3), new ElixirScript.Core.Tuple(Symbol.for('pop_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('put'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace!'), 3), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('take'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('update'), 4), new ElixirScript.Core.Tuple(Symbol.for('update!'), 3), new ElixirScript.Core.Tuple(Symbol.for('values'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [183779787449029545243117731182830570215])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/keyword.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(231))], [Symbol.for('module'), Symbol.for('Elixir.Keyword')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function fetch__emark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('keywords'), ElixirScript.Core.Patterns.variable('key')], __function_args__, (keywords0, key0) => {
            return ElixirScript.Core.erlang.is_list(keywords0) && ElixirScript.Core.erlang.is_atom(key0);
        })) !== null) {
            let [keywords0, key0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.bound(key0), ElixirScript.Core.Patterns.variable('value')]
            })], (value0) => {
                return value0;
            }, (value0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.error($KeyError$.exception([new ElixirScript.Core.Tuple(Symbol.for('key'), key0), new ElixirScript.Core.Tuple(Symbol.for('term'), keywords0)]));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.lists.keyfind(key0, 1, keywords0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, null));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('keywords'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (keywords0, key0, __default__0) => {
            return ElixirScript.Core.erlang.is_list(keywords0) && ElixirScript.Core.erlang.is_atom(key0);
        })) !== null) {
            let [keywords0, key0, __default__0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.bound(key0), ElixirScript.Core.Patterns.variable('value')]
            })], (value0) => {
                return value0;
            }, (value0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return __default__0;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.lists.keyfind(key0, 1, keywords0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function put_new(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('keywords'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (keywords0, key0, value0) => {
            return ElixirScript.Core.erlang.is_list(keywords0) && ElixirScript.Core.erlang.is_atom(key0);
        })) !== null) {
            let [keywords0, key0, value0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.bound(key0), ElixirScript.Core.Patterns.variable('_')]
            })], () => {
                return keywords0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(key0, value0), keywords0);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.lists.keyfind(key0, 1, keywords0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    fetch__emark__,
    get,
    put_new,
    __MODULE__: Symbol.for('Elixir.Keyword'),
    __info__
};
