'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Code$ from './Elixir.Code.js';

import $Collectable$ from './Elixir.Collectable.js';

import $IO$ from './Elixir.IO.js';

import $Exception$ from './Elixir.Exception.js';

import $Enum$ from './Elixir.Enum.js';

import $CompileError$ from './Elixir.CompileError.js';

import $Module$ from './Elixir.Module.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $String$ from './Elixir.String.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Kernel$Typespec$ from './Elixir.Kernel.Typespec.js';

import $Macro$ from './Elixir.Macro.js';

import $Macro$Env$ from './Elixir.Macro.Env.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('beam_callbacks'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_specs'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_typedocs'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_types'), 1), new ElixirScript.Core.Tuple(Symbol.for('defines_callback?'), 3), new ElixirScript.Core.Tuple(Symbol.for('defines_spec?'), 3), new ElixirScript.Core.Tuple(Symbol.for('defines_type?'), 3), new ElixirScript.Core.Tuple(Symbol.for('defspec'), 6), new ElixirScript.Core.Tuple(Symbol.for('deftype'), 6), new ElixirScript.Core.Tuple(Symbol.for('spec_to_ast'), 2), new ElixirScript.Core.Tuple(Symbol.for('spec_to_signature'), 1), new ElixirScript.Core.Tuple(Symbol.for('translate_spec'), 3), new ElixirScript.Core.Tuple(Symbol.for('translate_type'), 3), new ElixirScript.Core.Tuple(Symbol.for('type_to_ast'), 1), new ElixirScript.Core.Tuple(Symbol.for('type_to_signature'), 1)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('defcallback'), 1), new ElixirScript.Core.Tuple(Symbol.for('defmacrocallback'), 1), new ElixirScript.Core.Tuple(Symbol.for('defopaque'), 1), new ElixirScript.Core.Tuple(Symbol.for('defspec'), 1), new ElixirScript.Core.Tuple(Symbol.for('deftype'), 1), new ElixirScript.Core.Tuple(Symbol.for('deftypep'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [313939994201871359490667405902590046414])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/kernel/typespec.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(206))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.Typespec')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Kernel.Typespec'),
    __info__
};
