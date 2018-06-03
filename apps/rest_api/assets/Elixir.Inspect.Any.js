'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Inspect$Atom$ from './Elixir.Inspect.Atom.js';

import $Inspect$Map$ from './Elixir.Inspect.Map.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [231585841015222989183390192420580833431]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(151))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Any')]]);

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

            return {};
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Any$;
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

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('module')
        }]])), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (module0, struct0, opts0) => {
            return true;
        })) !== null) {
            let [module0, struct0, opts0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return ElixirScript.Core.Functions.call_property(module0, '__struct__');
            }, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $Inspect$Map$.inspect(struct0, opts0);
            }, () => {
                return true;
            })), null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dunder')], __function_args__, (dunder0) => {
                        return true;
                    })) !== null) {
                        let [dunder0] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                            return $Inspect$Map$.inspect(struct0, opts0);
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([true], () => {
                            const [pruned0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('pruned'), ElixirScript.Core.maps.remove(Symbol.for('__exception__'), ElixirScript.Core.maps.remove(Symbol.for('__struct__'), struct0)));

                            const [colorless_opts0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('colorless_opts'), new Map([...opts0, [Symbol.for('syntax_colors'), []]]));

                            return $Inspect$Map$.inspect(pruned0, $Inspect$Atom$.inspect(module0, colorless_opts0), opts0);
                        }, () => {
                            return true;
                        })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.maps.keys(dunder0), ElixirScript.Core.maps.keys(struct0)));
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
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Any'),
    __info__
};
