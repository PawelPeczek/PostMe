'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Range$ from './Elixir.Range.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Float$ from './Elixir.Float.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('ceil'), 1), new ElixirScript.Core.Tuple(Symbol.for('ceil'), 2), new ElixirScript.Core.Tuple(Symbol.for('floor'), 1), new ElixirScript.Core.Tuple(Symbol.for('floor'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('ratio'), 1), new ElixirScript.Core.Tuple(Symbol.for('round'), 1), new ElixirScript.Core.Tuple(Symbol.for('round'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [307091328909801158856614740018471189024])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/float.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(32))], [Symbol.for('module'), Symbol.for('Elixir.Float')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Float'),
    __info__
};
