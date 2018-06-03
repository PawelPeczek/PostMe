'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('codepoints'), 1), new ElixirScript.Core.Tuple(Symbol.for('graphemes'), 1), new ElixirScript.Core.Tuple(Symbol.for('length'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_codepoint'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_grapheme_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('split_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('version'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [191356743605136473316880117454069492183])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/unicode/unicode.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(215))], [Symbol.for('module'), Symbol.for('Elixir.String.Unicode')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Unicode'),
    __info__
};
