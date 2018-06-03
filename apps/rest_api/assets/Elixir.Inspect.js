'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Date$Range$ from './Elixir.Inspect.Date.Range.js';

import $Inspect$PID$ from './Elixir.Inspect.PID.js';

import $Inspect$HashSet$ from './Elixir.Inspect.HashSet.js';

import $Inspect$Version$ from './Elixir.Inspect.Version.js';

import $Inspect$BitString$ from './Elixir.Inspect.BitString.js';

import $Inspect$Date$ from './Elixir.Inspect.Date.js';

import $Inspect$MapSet$ from './Elixir.Inspect.MapSet.js';

import $Inspect$Range$ from './Elixir.Inspect.Range.js';

import $Inspect$Tuple$ from './Elixir.Inspect.Tuple.js';

import $Inspect$Float$ from './Elixir.Inspect.Float.js';

import $Inspect$DateTime$ from './Elixir.Inspect.DateTime.js';

import $Inspect$Stream$ from './Elixir.Inspect.Stream.js';

import $Inspect$Atom$ from './Elixir.Inspect.Atom.js';

import $Inspect$Function$ from './Elixir.Inspect.Function.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $Inspect$Port$ from './Elixir.Inspect.Port.js';

import $Inspect$Version$Requirement$ from './Elixir.Inspect.Version.Requirement.js';

import $Inspect$Regex$ from './Elixir.Inspect.Regex.js';

import $Inspect$Map$ from './Elixir.Inspect.Map.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Inspect$Reference$ from './Elixir.Inspect.Reference.js';

import $Inspect$HashDict$ from './Elixir.Inspect.HashDict.js';

import $Inspect$Integer$ from './Elixir.Inspect.Integer.js';

import $Inspect$Time$ from './Elixir.Inspect.Time.js';

import $Inspect$NaiveDateTime$ from './Elixir.Inspect.NaiveDateTime.js';

const protocol = ElixirScript.Core.Functions.defprotocol({
    inspect: function() {},
    __impl__: function() {}
});

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.NaiveDateTime'), $Inspect$NaiveDateTime$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Time'), $Inspect$Time$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Integer, $Inspect$Integer$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashDict'), $Inspect$HashDict$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Reference, $Inspect$Reference$)

ElixirScript.Core.Functions.defimpl(protocol, null, $Inspect$Any$)

ElixirScript.Core.Functions.defimpl(protocol, Map, $Inspect$Map$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Regex'), $Inspect$Regex$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Version.Requirement'), $Inspect$Version$Requirement$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Port, $Inspect$Port$)

ElixirScript.Core.Functions.defimpl(protocol, Array, $Inspect$List$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Function'), $Inspect$Function$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol, $Inspect$Atom$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Stream'), $Inspect$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.DateTime'), $Inspect$DateTime$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Float, $Inspect$Float$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Tuple, $Inspect$Tuple$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Range'), $Inspect$Range$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.MapSet'), $Inspect$MapSet$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Date'), $Inspect$Date$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.BitString, $Inspect$BitString$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Version'), $Inspect$Version$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashSet'), $Inspect$HashSet$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.PID, $Inspect$PID$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Date.Range'), $Inspect$Date$Range$)

export default protocol;
