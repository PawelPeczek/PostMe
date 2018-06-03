'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Access$ from './Elixir.Access.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $String$Casing$ from './Elixir.String.Casing.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Enum$ from './Elixir.Enum.js';

import $String$Unicode$ from './Elixir.String.Unicode.js';

import $Collectable$ from './Elixir.Collectable.js';

import $String$Break$ from './Elixir.String.Break.js';

import $List$ from './Elixir.List.js';

import $String$Normalizer$ from './Elixir.String.Normalizer.js';

import $Regex$ from './Elixir.Regex.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Range$ from './Elixir.Range.js';

import $Stream$ from './Elixir.Stream.js';

import $UnicodeConversionError$ from './Elixir.UnicodeConversionError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('at'), 2), new ElixirScript.Core.Tuple(Symbol.for('capitalize'), 1), new ElixirScript.Core.Tuple(Symbol.for('capitalize'), 2), new ElixirScript.Core.Tuple(Symbol.for('chunk'), 2), new ElixirScript.Core.Tuple(Symbol.for('codepoints'), 1), new ElixirScript.Core.Tuple(Symbol.for('contains?'), 2), new ElixirScript.Core.Tuple(Symbol.for('downcase'), 1), new ElixirScript.Core.Tuple(Symbol.for('downcase'), 2), new ElixirScript.Core.Tuple(Symbol.for('duplicate'), 2), new ElixirScript.Core.Tuple(Symbol.for('ends_with?'), 2), new ElixirScript.Core.Tuple(Symbol.for('equivalent?'), 2), new ElixirScript.Core.Tuple(Symbol.for('first'), 1), new ElixirScript.Core.Tuple(Symbol.for('graphemes'), 1), new ElixirScript.Core.Tuple(Symbol.for('jaro_distance'), 2), new ElixirScript.Core.Tuple(Symbol.for('last'), 1), new ElixirScript.Core.Tuple(Symbol.for('length'), 1), new ElixirScript.Core.Tuple(Symbol.for('ljust'), 2), new ElixirScript.Core.Tuple(Symbol.for('ljust'), 3), new ElixirScript.Core.Tuple(Symbol.for('lstrip'), 1), new ElixirScript.Core.Tuple(Symbol.for('lstrip'), 2), new ElixirScript.Core.Tuple(Symbol.for('match?'), 2), new ElixirScript.Core.Tuple(Symbol.for('myers_difference'), 2), new ElixirScript.Core.Tuple(Symbol.for('next_codepoint'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_grapheme'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_grapheme_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('normalize'), 2), new ElixirScript.Core.Tuple(Symbol.for('pad_leading'), 2), new ElixirScript.Core.Tuple(Symbol.for('pad_leading'), 3), new ElixirScript.Core.Tuple(Symbol.for('pad_trailing'), 2), new ElixirScript.Core.Tuple(Symbol.for('pad_trailing'), 3), new ElixirScript.Core.Tuple(Symbol.for('printable?'), 1), new ElixirScript.Core.Tuple(Symbol.for('printable?'), 2), new ElixirScript.Core.Tuple(Symbol.for('replace'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace'), 4), new ElixirScript.Core.Tuple(Symbol.for('replace_leading'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace_prefix'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace_suffix'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace_trailing'), 3), new ElixirScript.Core.Tuple(Symbol.for('reverse'), 1), new ElixirScript.Core.Tuple(Symbol.for('rjust'), 2), new ElixirScript.Core.Tuple(Symbol.for('rjust'), 3), new ElixirScript.Core.Tuple(Symbol.for('rstrip'), 1), new ElixirScript.Core.Tuple(Symbol.for('rstrip'), 2), new ElixirScript.Core.Tuple(Symbol.for('slice'), 2), new ElixirScript.Core.Tuple(Symbol.for('slice'), 3), new ElixirScript.Core.Tuple(Symbol.for('split'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('split'), 3), new ElixirScript.Core.Tuple(Symbol.for('split_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('splitter'), 2), new ElixirScript.Core.Tuple(Symbol.for('splitter'), 3), new ElixirScript.Core.Tuple(Symbol.for('starts_with?'), 2), new ElixirScript.Core.Tuple(Symbol.for('strip'), 1), new ElixirScript.Core.Tuple(Symbol.for('strip'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_existing_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_float'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_integer'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_integer'), 2), new ElixirScript.Core.Tuple(Symbol.for('trim'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim'), 2), new ElixirScript.Core.Tuple(Symbol.for('trim_leading'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_leading'), 2), new ElixirScript.Core.Tuple(Symbol.for('trim_trailing'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_trailing'), 2), new ElixirScript.Core.Tuple(Symbol.for('upcase'), 1), new ElixirScript.Core.Tuple(Symbol.for('upcase'), 2), new ElixirScript.Core.Tuple(Symbol.for('valid?'), 1), new ElixirScript.Core.Tuple(Symbol.for('valid_character?'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [122466902384581556944436316676615486436])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/string.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(228))], [Symbol.for('module'), Symbol.for('Elixir.String')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function contains__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('str'), ElixirScript.Core.Patterns.variable('s')], __function_args__, (str0, s0) => {
            return ElixirScript.Core.erlang.is_binary(s0);
        })) !== null) {
            let [str0, s0] = __arg_matches__;

            return str0.indexOf(s0) > -1;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('str'), ElixirScript.Core.Patterns.variable('s')], __function_args__, (str0, s0) => {
            return ElixirScript.Core.erlang.is_list(s0);
        })) !== null) {
            let [str0, s0] = __arg_matches__;

            return do_contains__qmark__(str0, s0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function decrement(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('infinity')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('infinity');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('counter')], __function_args__, (counter0) => {
            return true;
        })) !== null) {
            let [counter0] = __arg_matches__;

            return counter0 - 1;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function printable__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(), ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), 0], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(39), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(61), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(95), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(96), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.utf8({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (char0, rest0, counter0) => {
            return ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 160 && char0 <= 55295) || ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 57344 && char0 <= 65533) || ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 65536 && char0 <= 1114111);
        })) !== null) {
            let [char0, rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('binary'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (binary0) => {
            return ElixirScript.Core.erlang.is_binary(binary0);
        })) !== null) {
            let [binary0] = __arg_matches__;

            return false;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function split(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, []));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('str'), ElixirScript.Core.Patterns.variable('replace'), ElixirScript.Core.Patterns.variable('options')], __function_args__, (str0, replace0, options0) => {
            return true;
        })) !== null) {
            let [str0, replace0, options0] = __arg_matches__;

            const [limit0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('limit'), $Keyword$.get(options0, Symbol.for('parts'), -1));

            const [trim0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('trim'), $Keyword$.get(options0, Symbol.for('trim'), false));

            const [split0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('split'), str0.split(replace0, limit0));

            return $Enum$.map(split0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x')], __function_args__, (x0) => {
                        return true;
                    })) !== null) {
                        let [x0] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303396991')], (x5764607523033969910) => {
                            return x0;
                        }, (x5764607523033969910) => {
                            return x5764607523033969910 === null || x5764607523033969910 === false;
                        }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                            return ElixirScript.Core.Functions.call_property(x0, 'trim');
                        }, () => {
                            return true;
                        })).call(this, trim0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_charlist(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('string')], __function_args__, (string0) => {
            return ElixirScript.Core.erlang.is_binary(string0);
        })) !== null) {
            let [string0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('result')], (result0) => {
                return result0;
            }, (result0) => {
                return ElixirScript.Core.erlang.is_list(result0);
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('encoded'), ElixirScript.Core.Patterns.variable('rest')]
            })], (encoded0, rest0) => {
                return ElixirScript.Core.erlang.error($UnicodeConversionError$.exception([new ElixirScript.Core.Tuple(Symbol.for('encoded'), encoded0), new ElixirScript.Core.Tuple(Symbol.for('rest'), rest0), new ElixirScript.Core.Tuple(Symbol.for('kind'), Symbol.for('invalid'))]));
            }, (encoded0, rest0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('incomplete'), ElixirScript.Core.Patterns.variable('encoded'), ElixirScript.Core.Patterns.variable('rest')]
            })], (encoded0, rest0) => {
                return ElixirScript.Core.erlang.error($UnicodeConversionError$.exception([new ElixirScript.Core.Tuple(Symbol.for('encoded'), encoded0), new ElixirScript.Core.Tuple(Symbol.for('rest'), rest0), new ElixirScript.Core.Tuple(Symbol.for('kind'), Symbol.for('incomplete'))]));
            }, (encoded0, rest0) => {
                return true;
            })).call(this, ElixirScript.Core.unicode.characters_to_list(string0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    contains__qmark__,
    printable__qmark__,
    split,
    to_charlist,
    __MODULE__: Symbol.for('Elixir.String'),
    __info__
};
