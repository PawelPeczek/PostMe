'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$Version$Requirement$ from './Elixir.String.Chars.Version.Requirement.js';

import $String$Chars$List$ from './Elixir.String.Chars.List.js';

import $String$Chars$URI$ from './Elixir.String.Chars.URI.js';

import $String$Chars$Integer$ from './Elixir.String.Chars.Integer.js';

import $String$Chars$NaiveDateTime$ from './Elixir.String.Chars.NaiveDateTime.js';

import $String$Chars$DateTime$ from './Elixir.String.Chars.DateTime.js';

import $String$Chars$Version$ from './Elixir.String.Chars.Version.js';

import $String$Chars$Atom$ from './Elixir.String.Chars.Atom.js';

import $String$Chars$BitString$ from './Elixir.String.Chars.BitString.js';

import $String$Chars$Time$ from './Elixir.String.Chars.Time.js';

import $String$Chars$Date$ from './Elixir.String.Chars.Date.js';

import $String$Chars$Float$ from './Elixir.String.Chars.Float.js';

const protocol = ElixirScript.Core.Functions.defprotocol({
    to_string: function() {},
    __impl__: function() {}
});

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Float, $String$Chars$Float$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Date'), $String$Chars$Date$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Time'), $String$Chars$Time$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.BitString, $String$Chars$BitString$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol, $String$Chars$Atom$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Version'), $String$Chars$Version$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.DateTime'), $String$Chars$DateTime$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.NaiveDateTime'), $String$Chars$NaiveDateTime$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Integer, $String$Chars$Integer$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.URI'), $String$Chars$URI$)

ElixirScript.Core.Functions.defimpl(protocol, Array, $String$Chars$List$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol.for('Elixir.Version.Requirement'), $String$Chars$Version$Requirement$)

export default protocol;
