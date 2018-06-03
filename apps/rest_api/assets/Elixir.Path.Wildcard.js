'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('list_dir'), 1), new ElixirScript.Core.Tuple(Symbol.for('read_link_info'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [289026373706443028880496822698176193157])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/path.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(133))], [Symbol.for('module'), Symbol.for('Elixir.Path.Wildcard')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Path.Wildcard'),
    __info__
};
