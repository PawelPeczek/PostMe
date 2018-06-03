'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Error$ from './Elixir.Inspect.Error.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [176775729716168927812742132280176724468]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect/algebra.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(244))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Error')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Inspect$Error$], [Symbol.for('message'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303371743')], __function_args__, (kv5764607523033717430) => {
            return true;
        })) !== null) {
            let [kv5764607523033717430] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033717430, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Inspect$Error$], [Symbol.for('message'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303371743'), ElixirScript.Core.Patterns.variable('val576460752303371743')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303371743')], __function_args__, (key5764607523033717430, val5764607523033717430, map5764607523033717430) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033717430, val5764607523033717430, map5764607523033717430] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033717430, val5764607523033717430, map5764607523033717430);
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('msg576460752303371807')], __function_args__, (msg5764607523033718070) => {
            return ElixirScript.Core.erlang.is_binary(msg5764607523033718070);
        })) !== null) {
            let [msg5764607523033718070] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, [new ElixirScript.Core.Tuple(Symbol.for('message'), msg5764607523033718070)]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('args576460752303371807')], __function_args__, (args5764607523033718070) => {
            return ElixirScript.Core.erlang.is_list(args5764607523033718070);
        })) !== null) {
            let [args5764607523033718070] = __arg_matches__;

            const [struct5764607523033718070] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('struct576460752303371807'), __struct__());

            const [valid5764607523033718070, invalid5764607523033718070] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('valid576460752303371807'), ElixirScript.Core.Patterns.variable('invalid576460752303371807')]
            }), $Enum$.split_with(args5764607523033718070, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('k576460752303371807'), ElixirScript.Core.Patterns.variable('_')]
                    })], __function_args__, (k5764607523033718070) => {
                        return true;
                    })) !== null) {
                        let [k5764607523033718070] = __arg_matches__;

                        return ElixirScript.Core.maps.is_key(k5764607523033718070, struct5764607523033718070);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref8209816 = new ElixirScript.Core.Tuple(valid5764607523033718070, invalid5764607523033718070);

            ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return Symbol.for('ok');
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $IO$.warn('the following fields are unknown when raising ' + ($String$Chars$.to_string($Kernel$.inspect($Inspect$Error$)) + (': ' + ($String$Chars$.to_string($Kernel$.inspect(invalid5764607523033718070)) + '. ')) + ('Please make sure to only give known fields when raising ' + ('or redefine ' + ($String$Chars$.to_string($Kernel$.inspect($Inspect$Error$)) + '.exception/1 to ') + ('discard unknown fields. Future Elixir versions will raise on ' + 'unknown fields given to raise/2')))));
            }, () => {
                return true;
            })).call(this, invalid5764607523033718070)

            return $Kernel$.struct__emark__(struct5764607523033718070, valid5764607523033718070);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    exception,
    __MODULE__: Symbol.for('Elixir.Inspect.Error'),
    __info__
};
