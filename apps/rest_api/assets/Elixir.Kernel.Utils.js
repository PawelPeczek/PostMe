'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Keyword$ from './Elixir.Keyword.js';

import $Macro$ from './Elixir.Macro.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

import $Module$ from './Elixir.Module.js';

import $Kernel$ from './Elixir.Kernel.js';

import $List$ from './Elixir.List.js';

import $Exception$ from './Elixir.Exception.js';

import $Enum$ from './Elixir.Enum.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

import $Collectable$ from './Elixir.Collectable.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('announce_struct'), 1), new ElixirScript.Core.Tuple(Symbol.for('defdelegate'), 2), new ElixirScript.Core.Tuple(Symbol.for('defguard'), 3), new ElixirScript.Core.Tuple(Symbol.for('defstruct'), 2), new ElixirScript.Core.Tuple(Symbol.for('destructure'), 2), new ElixirScript.Core.Tuple(Symbol.for('raise'), 1)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('defguard'), 2)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [322899240349796627247136157798295154593])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/kernel/utils.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(161))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.Utils')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function raise(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('msg')], __function_args__, (msg0) => {
            return ElixirScript.Core.erlang.is_binary(msg0);
        })) !== null) {
            let [msg0] = __arg_matches__;

            return $RuntimeError$.exception(msg0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            return atom0.exception([]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }], [Symbol.for('__exception__'), true]]))], __function_args__, (exception0) => {
            return true;
        })) !== null) {
            let [exception0] = __arg_matches__;

            return exception0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return $ArgumentError$.exception('raise/1 and reraise/2 expect a module name, string or exception ' + ('as the first argument, got: ' + $String$Chars$.to_string($Kernel$.inspect(other0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    raise,
    __MODULE__: Symbol.for('Elixir.Kernel.Utils'),
    __info__
};
