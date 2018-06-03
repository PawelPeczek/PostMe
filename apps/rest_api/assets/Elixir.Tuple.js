'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('append'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('duplicate'), 2), new ElixirScript.Core.Tuple(Symbol.for('insert_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [254595295956169239357313083652478828744])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/tuple.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(200))], [Symbol.for('module'), Symbol.for('Elixir.Tuple')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Tuple'),
    __info__
};
