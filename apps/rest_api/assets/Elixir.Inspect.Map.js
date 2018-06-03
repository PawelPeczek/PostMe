'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Map$ from './Elixir.Inspect.Map.js';

import $Map$ from './Elixir.Map.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [88703986354333433415937141049049317799]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Map$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(167))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Map')]]);

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

            return $Map$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Map$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (map0, opts0) => {
            return true;
        })) !== null) {
            let [map0, opts0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, map0, '', opts0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.variable('name'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (map0, name0, opts0) => {
            return true;
        })) !== null) {
            let [map0, name0, opts0] = __arg_matches__;

            const [map1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.maps.to_list(map0));

            const [open0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('open'), $Inspect$Algebra$.color('%' + (name0 + '{'), Symbol.for('map'), opts0));

            const [sep0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('sep'), $Inspect$Algebra$.color(',', Symbol.for('map'), opts0));

            const [close0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('close'), $Inspect$Algebra$.color('}', Symbol.for('map'), opts0));

            return $Inspect$Algebra$.container_doc(open0, map1, close0, opts0, traverse_fun(map1, opts0), [new ElixirScript.Core.Tuple(Symbol.for('separator'), sep0), new ElixirScript.Core.Tuple(Symbol.for('break'), Symbol.for('strict'))]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_map(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
        }), ElixirScript.Core.Patterns.variable('opts'), ElixirScript.Core.Patterns.variable('sep')], __function_args__, (key0, value0, opts0, sep0) => {
            return true;
        })) !== null) {
            let [key0, value0, opts0, sep0] = __arg_matches__;

            return $Inspect$Algebra$.concat($Inspect$Algebra$.concat($Inspect$Algebra$.to_doc(key0, opts0), sep0), $Inspect$Algebra$.to_doc(value0, opts0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function traverse_fun(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (list0, opts0) => {
            return true;
        })) !== null) {
            let [list0, opts0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303388314')], (x5764607523033883140) => {
                const [sep0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('sep'), $Inspect$Algebra$.color(' => ', Symbol.for('map'), opts0));

                return (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return to_map(x10, x20, sep0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                };
            }, (x5764607523033883140) => {
                return x5764607523033883140 === null || x5764607523033883140 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $Inspect$List$.keyword;
            }, () => {
                return true;
            })).call(this, $Inspect$List$.keyword__qmark__(list0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Map'),
    __info__
};
