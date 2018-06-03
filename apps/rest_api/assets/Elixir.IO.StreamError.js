'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $IO$StreamError$ from './Elixir.IO.StreamError.js';

import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Access$ from './Elixir.Access.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [119569481770854373387356404753645111098]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/io/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(61), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(58))], [Symbol.for('module'), Symbol.for('Elixir.IO.StreamError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $IO$StreamError$], [Symbol.for('message'), null], [Symbol.for('reason'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303391418')], __function_args__, (kv5764607523033914180) => {
            return true;
        })) !== null) {
            let [kv5764607523033914180] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033914180, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $IO$StreamError$], [Symbol.for('message'), null], [Symbol.for('reason'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303391418'), ElixirScript.Core.Patterns.variable('val576460752303391418')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303391418')], __function_args__, (key5764607523033914180, val5764607523033914180, map5764607523033914180) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033914180, val5764607523033914180, map5764607523033914180] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033914180, val5764607523033914180, map5764607523033914180);
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

function exception(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('opts')], __function_args__, (opts0) => {
            return true;
        })) !== null) {
            let [opts0] = __arg_matches__;

            const [reason0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reason'), $Access$.get(opts0, Symbol.for('reason')));

            const [formatted0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('formatted'), ElixirScript.Core.erlang.iolist_to_binary(ElixirScript.Core.file.format_error(reason0)));

            return $IO$StreamError$.__struct__(new Map([[Symbol.for('__exception__'), true], [Symbol.for('message'), 'error during streaming: ' + $String$Chars$.to_string(formatted0)], [Symbol.for('reason'), reason0]]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    exception,
    __MODULE__: Symbol.for('Elixir.IO.StreamError'),
    __info__
};
