'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $List$ from './Elixir.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('tokenize'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [42208632755742593012545463235204214874])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/unicode/tokenizer.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(177), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(90))], [Symbol.for('module'), Symbol.for('Elixir.String.Tokenizer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Tokenizer'),
    __info__
};
