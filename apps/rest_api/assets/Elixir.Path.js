'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $System$ from './Elixir.System.js';

import $IO$ from './Elixir.IO.js';

import $UnicodeConversionError$ from './Elixir.UnicodeConversionError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Path$Wildcard$ from './Elixir.Path.Wildcard.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('absname'), 1), new ElixirScript.Core.Tuple(Symbol.for('absname'), 2), new ElixirScript.Core.Tuple(Symbol.for('basename'), 1), new ElixirScript.Core.Tuple(Symbol.for('basename'), 2), new ElixirScript.Core.Tuple(Symbol.for('dirname'), 1), new ElixirScript.Core.Tuple(Symbol.for('expand'), 1), new ElixirScript.Core.Tuple(Symbol.for('expand'), 2), new ElixirScript.Core.Tuple(Symbol.for('extname'), 1), new ElixirScript.Core.Tuple(Symbol.for('join'), 1), new ElixirScript.Core.Tuple(Symbol.for('join'), 2), new ElixirScript.Core.Tuple(Symbol.for('relative'), 1), new ElixirScript.Core.Tuple(Symbol.for('relative_to'), 2), new ElixirScript.Core.Tuple(Symbol.for('relative_to_cwd'), 1), new ElixirScript.Core.Tuple(Symbol.for('rootname'), 1), new ElixirScript.Core.Tuple(Symbol.for('rootname'), 2), new ElixirScript.Core.Tuple(Symbol.for('split'), 1), new ElixirScript.Core.Tuple(Symbol.for('type'), 1), new ElixirScript.Core.Tuple(Symbol.for('wildcard'), 1), new ElixirScript.Core.Tuple(Symbol.for('wildcard'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [169650228564305797683263739759207007545])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/path.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(57))], [Symbol.for('module'), Symbol.for('Elixir.Path')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Path'),
    __info__
};
