'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('decompose'), 2), new ElixirScript.Core.Tuple(Symbol.for('do_trim_leading'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_leading'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_trailing'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [97223309937599351538976400841129904210])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(82))], [Symbol.for('module'), Symbol.for('Elixir.String.Break')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Break'),
    __info__
};
