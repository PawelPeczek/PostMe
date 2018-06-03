'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$IO$Stream$ from './Elixir.Collectable.IO.Stream.js';

import $IO$Stream$ from './Elixir.IO.Stream.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [47682003803170779498957051173606406861]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $IO$Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/io/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(205))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.IO.Stream')]]);

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

            return $IO$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$IO$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function into(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('device'), ElixirScript.Core.Patterns.variable('device')], [Symbol.for('raw'), ElixirScript.Core.Patterns.variable('raw')]]))], __function_args__, (device0, raw0, stream0) => {
            return true;
        })) !== null) {
            let [device0, raw0, stream0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), into(stream0, device0, raw0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('stream'), ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('raw')], __function_args__, (stream0, device0, raw0) => {
            return true;
        })) !== null) {
            let [stream0, device0, raw0] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('ok'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (x0) => {
                        return true;
                    })) !== null) {
                        let [x0] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                            return $IO$.binwrite(device0, x0);
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([false], () => {
                            return $IO$.write(device0, x0);
                        }, () => {
                            return true;
                        })).call(this, raw0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('ok'), ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return stream0;
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            };
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    into,
    __MODULE__: Symbol.for('Elixir.Collectable.IO.Stream'),
    __info__
};
