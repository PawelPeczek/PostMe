'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [230579345423122577283265238795037660951])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/atom.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(177), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(23))], [Symbol.for('module'), Symbol.for('Elixir.Atom')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Atom'),
    __info__
};
