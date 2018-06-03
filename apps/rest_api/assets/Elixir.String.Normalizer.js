'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $String$Unicode$ from './Elixir.String.Unicode.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('normalize'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [42445218696194404435145882621044828773])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(101))], [Symbol.for('module'), Symbol.for('Elixir.String.Normalizer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Normalizer'),
    __info__
};
