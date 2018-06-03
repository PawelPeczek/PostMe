'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $IO$ from './Elixir.IO.js';

import $Path$ from './Elixir.Path.js';

import $Exception$ from './Elixir.Exception.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('app_dir'), 1), new ElixirScript.Core.Tuple(Symbol.for('app_dir'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete_env'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete_env'), 3), new ElixirScript.Core.Tuple(Symbol.for('ensure_all_started'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_all_started'), 2), new ElixirScript.Core.Tuple(Symbol.for('ensure_started'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_started'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch_env'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch_env!'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_error'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_all_env'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_application'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_env'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_env'), 3), new ElixirScript.Core.Tuple(Symbol.for('load'), 1), new ElixirScript.Core.Tuple(Symbol.for('loaded_applications'), 0), new ElixirScript.Core.Tuple(Symbol.for('put_env'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_env'), 4), new ElixirScript.Core.Tuple(Symbol.for('spec'), 1), new ElixirScript.Core.Tuple(Symbol.for('spec'), 2), new ElixirScript.Core.Tuple(Symbol.for('start'), 1), new ElixirScript.Core.Tuple(Symbol.for('start'), 2), new ElixirScript.Core.Tuple(Symbol.for('started_applications'), 0), new ElixirScript.Core.Tuple(Symbol.for('started_applications'), 1), new ElixirScript.Core.Tuple(Symbol.for('stop'), 1), new ElixirScript.Core.Tuple(Symbol.for('unload'), 1)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('__using__'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [5893437356777082142262479821258939336])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/application.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(200))], [Symbol.for('module'), Symbol.for('Elixir.Application')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function start(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('app'), ElixirScript.Core.Patterns.variable('type')], __function_args__, (app0, type0) => {
            return ElixirScript.Core.erlang.is_atom(app0);
        })) !== null) {
            let [app0, type0] = __arg_matches__;

            return ElixirScript.Core.application.start(app0, type0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    start,
    __MODULE__: Symbol.for('Elixir.Application'),
    __info__
};
