'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Code$ from './Elixir.Code.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Enum$ from './Elixir.Enum.js';

import $Collectable$ from './Elixir.Collectable.js';

import $List$ from './Elixir.List.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Process$ from './Elixir.Process.js';

import $ErlangError$ from './Elixir.ErlangError.js';

import $Range$ from './Elixir.Range.js';

import $Macro$ from './Elixir.Macro.js';

import $Bitwise$ from './Elixir.Bitwise.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('blame'), 3), new ElixirScript.Core.Tuple(Symbol.for('blame_mfa'), 3), new ElixirScript.Core.Tuple(Symbol.for('exception?'), 1), new ElixirScript.Core.Tuple(Symbol.for('format'), 2), new ElixirScript.Core.Tuple(Symbol.for('format'), 3), new ElixirScript.Core.Tuple(Symbol.for('format_banner'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_banner'), 3), new ElixirScript.Core.Tuple(Symbol.for('format_exit'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_fa'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_file_line'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_file_line'), 3), new ElixirScript.Core.Tuple(Symbol.for('format_mfa'), 3), new ElixirScript.Core.Tuple(Symbol.for('format_stacktrace'), 0), new ElixirScript.Core.Tuple(Symbol.for('format_stacktrace'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_stacktrace_entry'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1), new ElixirScript.Core.Tuple(Symbol.for('normalize'), 2), new ElixirScript.Core.Tuple(Symbol.for('normalize'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [335677252202577470371070974538066486924])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(177), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(140))], [Symbol.for('module'), Symbol.for('Elixir.Exception')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function message(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('module')
        }], [Symbol.for('__exception__'), true]]))], __function_args__, (module0, exception0) => {
            return true;
        })) !== null) {
            let [module0, exception0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return module0.message(exception0);
            }, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('caught_exception')], (caught_exception0) => {
                return 'got ' + ($String$Chars$.to_string($Kernel$.inspect(ElixirScript.Core.Functions.call_property(caught_exception0, '__struct__'))) + ' with message ') + ($String$Chars$.to_string($Kernel$.inspect(message(caught_exception0))) + ' while retrieving Exception.message/1 ' + ('for ' + $String$Chars$.to_string($Kernel$.inspect(exception0))));
            }, (caught_exception0) => {
                return true;
            })), null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('result')], __function_args__, (result0) => {
                        return ElixirScript.Core.erlang.is_binary(result0);
                    })) !== null) {
                        let [result0] = __arg_matches__;

                        return result0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('result')], __function_args__, (result0) => {
                        return true;
                    })) !== null) {
                        let [result0] = __arg_matches__;

                        return 'got ' + ($String$Chars$.to_string($Kernel$.inspect(result0)) + ' ') + ('while retrieving Exception.message/1 for ' + ($String$Chars$.to_string($Kernel$.inspect(exception0)) + ' ') + '(expected a string)');
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

export default {
    message,
    __MODULE__: Symbol.for('Elixir.Exception'),
    __info__
};
