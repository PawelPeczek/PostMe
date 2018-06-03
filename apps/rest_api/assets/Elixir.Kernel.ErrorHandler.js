'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadBooleanError$ from './Elixir.BadBooleanError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('ensure_compiled'), 2), new ElixirScript.Core.Tuple(Symbol.for('ensure_loaded'), 1), new ElixirScript.Core.Tuple(Symbol.for('undefined_function'), 3), new ElixirScript.Core.Tuple(Symbol.for('undefined_lambda'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [325506487692276731975564184164221572462])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/kernel/error_handler.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(110))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.ErrorHandler')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Kernel.ErrorHandler'),
    __info__
};
