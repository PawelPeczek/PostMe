'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadBooleanError$ from './Elixir.BadBooleanError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('downcase'), 3), new ElixirScript.Core.Tuple(Symbol.for('titlecase_once'), 2), new ElixirScript.Core.Tuple(Symbol.for('upcase'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [119537410986691660535362891435731923160])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(17), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(216))], [Symbol.for('module'), Symbol.for('Elixir.String.Casing')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Casing'),
    __info__
};
