'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$HashDict$ from './Elixir.Collectable.HashDict.js';

import $Collectable$IO$Stream$ from './Elixir.Collectable.IO.Stream.js';

import $Collectable$Map$ from './Elixir.Collectable.Map.js';

import $Collectable$MapSet$ from './Elixir.Collectable.MapSet.js';

import $Collectable$List$ from './Elixir.Collectable.List.js';

import $Collectable$HashSet$ from './Elixir.Collectable.HashSet.js';

import $Collectable$BitString$ from './Elixir.Collectable.BitString.js';

import $Collectable$File$Stream$ from './Elixir.Collectable.File.Stream.js';

const protocol = ElixirScript.Core.Functions.defprotocol({
    into: function() {},
    into: function() {},
    __impl__: function() {}
});

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.File.Stream'), $Collectable$File$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.BitString, $Collectable$BitString$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashSet'), $Collectable$HashSet$)

ElixirScript.Core.Functions.defimpl(protocol, Array, $Collectable$List$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.MapSet'), $Collectable$MapSet$)

ElixirScript.Core.Functions.defimpl(protocol, Map, $Collectable$Map$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.IO.Stream'), $Collectable$IO$Stream$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.HashDict'), $Collectable$HashDict$)

export default protocol;
