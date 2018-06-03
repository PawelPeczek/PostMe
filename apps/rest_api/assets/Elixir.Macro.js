'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Map$ from './Elixir.Map.js';

import $Macro$ from './Elixir.Macro.js';

import $Range$ from './Elixir.Range.js';

import $List$ from './Elixir.List.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $String$ from './Elixir.String.js';

import $IO$ from './Elixir.IO.js';

import $Access$ from './Elixir.Access.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('camelize'), 1), new ElixirScript.Core.Tuple(Symbol.for('decompose_call'), 1), new ElixirScript.Core.Tuple(Symbol.for('escape'), 1), new ElixirScript.Core.Tuple(Symbol.for('escape'), 2), new ElixirScript.Core.Tuple(Symbol.for('expand'), 2), new ElixirScript.Core.Tuple(Symbol.for('expand_once'), 2), new ElixirScript.Core.Tuple(Symbol.for('generate_arguments'), 2), new ElixirScript.Core.Tuple(Symbol.for('pipe'), 3), new ElixirScript.Core.Tuple(Symbol.for('postwalk'), 2), new ElixirScript.Core.Tuple(Symbol.for('postwalk'), 3), new ElixirScript.Core.Tuple(Symbol.for('prewalk'), 2), new ElixirScript.Core.Tuple(Symbol.for('prewalk'), 3), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('traverse'), 4), new ElixirScript.Core.Tuple(Symbol.for('underscore'), 1), new ElixirScript.Core.Tuple(Symbol.for('unescape_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('unescape_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('unescape_tokens'), 1), new ElixirScript.Core.Tuple(Symbol.for('unescape_tokens'), 2), new ElixirScript.Core.Tuple(Symbol.for('unpipe'), 1), new ElixirScript.Core.Tuple(Symbol.for('update_meta'), 2), new ElixirScript.Core.Tuple(Symbol.for('validate'), 1), new ElixirScript.Core.Tuple(Symbol.for('var'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [32012445434351798264144690427266561469])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/macro.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(95), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(189))], [Symbol.for('module'), Symbol.for('Elixir.Macro')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Macro'),
    __info__
};
