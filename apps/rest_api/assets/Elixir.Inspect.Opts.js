'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [296203683754303125408465282281652853190])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect/algebra.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(39), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(198))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Opts')]]);

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

            return new Map([[Symbol.for('__struct__'), $Inspect$Opts$], [Symbol.for('base'), Symbol.for('decimal')], [Symbol.for('binaries'), Symbol.for('infer')], [Symbol.for('char_lists'), Symbol.for('infer')], [Symbol.for('charlists'), Symbol.for('infer')], [Symbol.for('limit'), 50], [Symbol.for('pretty'), false], [Symbol.for('printable_limit'), 4096], [Symbol.for('safe'), true], [Symbol.for('structs'), true], [Symbol.for('syntax_colors'), []], [Symbol.for('width'), 80]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303395738')], __function_args__, (kv5764607523033957380) => {
            return true;
        })) !== null) {
            let [kv5764607523033957380] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033957380, new Map([[Symbol.for('__struct__'), $Inspect$Opts$], [Symbol.for('base'), Symbol.for('decimal')], [Symbol.for('binaries'), Symbol.for('infer')], [Symbol.for('char_lists'), Symbol.for('infer')], [Symbol.for('charlists'), Symbol.for('infer')], [Symbol.for('limit'), 50], [Symbol.for('pretty'), false], [Symbol.for('printable_limit'), 4096], [Symbol.for('safe'), true], [Symbol.for('structs'), true], [Symbol.for('syntax_colors'), []], [Symbol.for('width'), 80]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303395738'), ElixirScript.Core.Patterns.variable('val576460752303395738')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303395738')], __function_args__, (key5764607523033957380, val5764607523033957380, map5764607523033957380) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033957380, val5764607523033957380, map5764607523033957380] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033957380, val5764607523033957380, map5764607523033957380);
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

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.Inspect.Opts'),
    __info__
};
