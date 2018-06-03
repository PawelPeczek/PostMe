'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$Range$ from './Elixir.Enumerable.Range.js';

import $Enumerable$MapSet$ from './Elixir.Enumerable.MapSet.js';

import $Enumerable$Function$ from './Elixir.Enumerable.Function.js';

import $Enumerable$HashDict$ from './Elixir.Enumerable.HashDict.js';

import $Enumerable$Date$Range$ from './Elixir.Enumerable.Date.Range.js';

import $Enumerable$HashSet$ from './Elixir.Enumerable.HashSet.js';

import $Enumerable$GenEvent$Stream$ from './Elixir.Enumerable.GenEvent.Stream.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

import $Enumerable$Map$ from './Elixir.Enumerable.Map.js';

import $Enumerable$IO$Stream$ from './Elixir.Enumerable.IO.Stream.js';

import $Enumerable$File$Stream$ from './Elixir.Enumerable.File.Stream.js';

import $Enumerable$Stream$ from './Elixir.Enumerable.Stream.js';

const protocol = ElixirScript.Core.Functions.defprotocol({
    slice: function() {},
    reduce: function() {},
    member__qmark__: function() {},
    do_reduce: function() {},
    do_each: function() {},
    do_done: function() {},
    count: function() {},
    __impl__: function() {}
});

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Stream'), $Enumerable$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.File.Stream'), $Enumerable$File$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.IO.Stream'), $Enumerable$IO$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Map, $Enumerable$Map$)

ElixirScript.Core.Functions.defimpl(protocol, Array, $Enumerable$List$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.GenEvent.Stream'), $Enumerable$GenEvent$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashSet'), $Enumerable$HashSet$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Date.Range'), $Enumerable$Date$Range$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashDict'), $Enumerable$HashDict$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Function'), $Enumerable$Function$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.MapSet'), $Enumerable$MapSet$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Range'), $Enumerable$Range$)

export default protocol;
