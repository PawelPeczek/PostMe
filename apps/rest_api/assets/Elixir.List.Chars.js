'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$Chars$BitString$ from './Elixir.List.Chars.BitString.js';

import $List$Chars$Float$ from './Elixir.List.Chars.Float.js';

import $List$Chars$List$ from './Elixir.List.Chars.List.js';

import $List$Chars$Atom$ from './Elixir.List.Chars.Atom.js';

import $List$Chars$Integer$ from './Elixir.List.Chars.Integer.js';

const protocol = ElixirScript.Core.Functions.defprotocol({
    to_charlist: function() {},
    __impl__: function() {}
});

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Integer, $List$Chars$Integer$)

ElixirScript.Core.Functions.defimpl(protocol, Symbol, $List$Chars$Atom$)

ElixirScript.Core.Functions.defimpl(protocol, Array, $List$Chars$List$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.Float, $List$Chars$Float$)

ElixirScript.Core.Functions.defimpl(protocol, ElixirScript.Core.BitString, $List$Chars$BitString$)

export default protocol;
