'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $String$ from './Elixir.String.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('lexer'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse_requirement'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_version'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_version'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [16338255119375154648527196094198945420])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(140))], [Symbol.for('module'), Symbol.for('Elixir.Version.Parser')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Version.Parser'),
    __info__
};
