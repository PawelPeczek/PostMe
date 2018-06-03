'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('compatible_calendars?'), 2), new ElixirScript.Core.Tuple(Symbol.for('truncate'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [189173333380096417638705319614212767838])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/calendar.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(94))], [Symbol.for('module'), Symbol.for('Elixir.Calendar')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Calendar'),
    __info__
};
