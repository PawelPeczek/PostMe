'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Regex$ from './Elixir.Inspect.Regex.js';

import $Regex$ from './Elixir.Regex.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [235219759898059184436149704621040892354]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Regex$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(194))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Regex')]]);

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

            return $Regex$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Regex$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function escape_map(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([7], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 97];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([12], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 102];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([10], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 110];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([13], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 114];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([9], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 116];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([11], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 118];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return false;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('regex'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (regex0, opts0) => {
            return true;
        })) !== null) {
            let [regex0, opts0] = __arg_matches__;

            const [escaped0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.variable('_')]
            }), $Code$Identifier$.escape(ElixirScript.Core.Functions.call_property(regex0, 'source'), 47, Symbol.for('infinity'), escape_map));

            const _ref6907042 = new ElixirScript.Core.Tuple(escaped0);

            const [source0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('source'), ElixirScript.Core.erlang.iolist_to_binary([[126, 114, 47], escaped0, 47, ElixirScript.Core.Functions.call_property(regex0, 'opts')]));

            return $Inspect$Algebra$.color(source0, Symbol.for('regex'), opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Regex'),
    __info__
};
