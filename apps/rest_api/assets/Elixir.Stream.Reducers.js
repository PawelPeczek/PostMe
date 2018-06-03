'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('chunk_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 5)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('dedup'), 1), new ElixirScript.Core.Tuple(Symbol.for('dedup'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 0), new ElixirScript.Core.Tuple(Symbol.for('drop'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter'), 1), new ElixirScript.Core.Tuple(Symbol.for('filter'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 3), new ElixirScript.Core.Tuple(Symbol.for('map'), 1), new ElixirScript.Core.Tuple(Symbol.for('map'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('reject'), 1), new ElixirScript.Core.Tuple(Symbol.for('reject'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan2'), 1), new ElixirScript.Core.Tuple(Symbol.for('scan2'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan3'), 1), new ElixirScript.Core.Tuple(Symbol.for('scan3'), 2), new ElixirScript.Core.Tuple(Symbol.for('take'), 0), new ElixirScript.Core.Tuple(Symbol.for('take'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 1), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 0), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [27552975116636257996042370064176424646])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/stream/reducers.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(198))], [Symbol.for('module'), Symbol.for('Elixir.Stream.Reducers')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Stream.Reducers'),
    __info__
};
