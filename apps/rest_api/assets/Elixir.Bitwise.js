'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), []], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('&&&'), 2), new ElixirScript.Core.Tuple(Symbol.for('<<<'), 2), new ElixirScript.Core.Tuple(Symbol.for('>>>'), 2), new ElixirScript.Core.Tuple(Symbol.for('^^^'), 2), new ElixirScript.Core.Tuple(Symbol.for('__using__'), 1), new ElixirScript.Core.Tuple(Symbol.for('band'), 2), new ElixirScript.Core.Tuple(Symbol.for('bnot'), 1), new ElixirScript.Core.Tuple(Symbol.for('bor'), 2), new ElixirScript.Core.Tuple(Symbol.for('bsl'), 2), new ElixirScript.Core.Tuple(Symbol.for('bsr'), 2), new ElixirScript.Core.Tuple(Symbol.for('bxor'), 2), new ElixirScript.Core.Tuple(Symbol.for('|||'), 2), new ElixirScript.Core.Tuple(Symbol.for('~~~'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [57413753486664497655918075827525184193])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/bitwise.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(193))], [Symbol.for('module'), Symbol.for('Elixir.Bitwise')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Bitwise'),
    __info__
};
