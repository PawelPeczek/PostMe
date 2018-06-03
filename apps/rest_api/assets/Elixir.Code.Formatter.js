'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Enum$ from './Elixir.Enum.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $String$ from './Elixir.String.js';

import $Keyword$ from './Elixir.Keyword.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Access$ from './Elixir.Access.js';

import $Collectable$ from './Elixir.Collectable.js';

import $List$Chars$ from './Elixir.List.Chars.js';

import $List$ from './Elixir.List.js';

import $MapSet$ from './Elixir.MapSet.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Process$ from './Elixir.Process.js';

import $Version$ from './Elixir.Version.js';

import $Map$ from './Elixir.Map.js';

import $Module$ from './Elixir.Module.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('equivalent'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_algebra'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_algebra'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_algebra!'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_algebra!'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [10352249408147092715646660976706157216])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/code/formatter.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(160))], [Symbol.for('module'), Symbol.for('Elixir.Code.Formatter')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Code.Formatter'),
    __info__
};
