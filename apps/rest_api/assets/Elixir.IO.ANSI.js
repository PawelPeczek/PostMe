'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ANSI$ from './Elixir.IO.ANSI.js';

import $Application$ from './Elixir.Application.js';

import $Kernel$ from './Elixir.Kernel.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('black'), 0), new ElixirScript.Core.Tuple(Symbol.for('black_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('blink_off'), 0), new ElixirScript.Core.Tuple(Symbol.for('blink_rapid'), 0), new ElixirScript.Core.Tuple(Symbol.for('blink_slow'), 0), new ElixirScript.Core.Tuple(Symbol.for('blue'), 0), new ElixirScript.Core.Tuple(Symbol.for('blue_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('bright'), 0), new ElixirScript.Core.Tuple(Symbol.for('clear'), 0), new ElixirScript.Core.Tuple(Symbol.for('clear_line'), 0), new ElixirScript.Core.Tuple(Symbol.for('color'), 1), new ElixirScript.Core.Tuple(Symbol.for('color'), 3), new ElixirScript.Core.Tuple(Symbol.for('color_background'), 1), new ElixirScript.Core.Tuple(Symbol.for('color_background'), 3), new ElixirScript.Core.Tuple(Symbol.for('conceal'), 0), new ElixirScript.Core.Tuple(Symbol.for('crossed_out'), 0), new ElixirScript.Core.Tuple(Symbol.for('cyan'), 0), new ElixirScript.Core.Tuple(Symbol.for('cyan_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('default_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('default_color'), 0), new ElixirScript.Core.Tuple(Symbol.for('enabled?'), 0), new ElixirScript.Core.Tuple(Symbol.for('encircled'), 0), new ElixirScript.Core.Tuple(Symbol.for('faint'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_1'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_2'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_3'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_4'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_5'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_6'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_7'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_8'), 0), new ElixirScript.Core.Tuple(Symbol.for('font_9'), 0), new ElixirScript.Core.Tuple(Symbol.for('format'), 1), new ElixirScript.Core.Tuple(Symbol.for('format'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_fragment'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_fragment'), 2), new ElixirScript.Core.Tuple(Symbol.for('framed'), 0), new ElixirScript.Core.Tuple(Symbol.for('green'), 0), new ElixirScript.Core.Tuple(Symbol.for('green_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('home'), 0), new ElixirScript.Core.Tuple(Symbol.for('inverse'), 0), new ElixirScript.Core.Tuple(Symbol.for('inverse_off'), 0), new ElixirScript.Core.Tuple(Symbol.for('italic'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_black'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_black_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_blue'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_blue_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_cyan'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_cyan_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_green'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_green_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_magenta'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_magenta_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_red'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_red_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_white'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_white_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_yellow'), 0), new ElixirScript.Core.Tuple(Symbol.for('light_yellow_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('magenta'), 0), new ElixirScript.Core.Tuple(Symbol.for('magenta_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('no_underline'), 0), new ElixirScript.Core.Tuple(Symbol.for('normal'), 0), new ElixirScript.Core.Tuple(Symbol.for('not_framed_encircled'), 0), new ElixirScript.Core.Tuple(Symbol.for('not_italic'), 0), new ElixirScript.Core.Tuple(Symbol.for('not_overlined'), 0), new ElixirScript.Core.Tuple(Symbol.for('overlined'), 0), new ElixirScript.Core.Tuple(Symbol.for('primary_font'), 0), new ElixirScript.Core.Tuple(Symbol.for('red'), 0), new ElixirScript.Core.Tuple(Symbol.for('red_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('reset'), 0), new ElixirScript.Core.Tuple(Symbol.for('reverse'), 0), new ElixirScript.Core.Tuple(Symbol.for('reverse_off'), 0), new ElixirScript.Core.Tuple(Symbol.for('underline'), 0), new ElixirScript.Core.Tuple(Symbol.for('white'), 0), new ElixirScript.Core.Tuple(Symbol.for('white_background'), 0), new ElixirScript.Core.Tuple(Symbol.for('yellow'), 0), new ElixirScript.Core.Tuple(Symbol.for('yellow_background'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [149101728380268025269844259034997667135])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/io/ansi.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(39), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(63))], [Symbol.for('module'), Symbol.for('Elixir.IO.ANSI')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function black(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(30) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function yellow(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(33) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function home(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ('' + 'H');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_magenta_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(105) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_format(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('rem'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('emit?'), ElixirScript.Core.Patterns.variable('append_reset')], __function_args__, (term0, rest0, rem0, acc0, emit__qmark__0, append_reset0) => {
            return true;
        })) !== null) {
            let [term0, rest0, rem0, acc0, emit__qmark__0, append_reset0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, term0, ElixirScript.Core.Functions.concat(rest0, rem0), acc0, emit__qmark__0, append_reset0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('rem'), ElixirScript.Core.Patterns.variable('acc'), true, ElixirScript.Core.Patterns.variable('append_reset')], __function_args__, (term0, rem0, acc0, append_reset0) => {
            return ElixirScript.Core.erlang.is_atom(term0);
        })) !== null) {
            let [term0, rem0, acc0, append_reset0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, [], rem0, ElixirScript.Core.Functions.concat(acc0, format_sequence(term0)), true, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303402395')], (x5764607523034023950) => {
                return false;
            }, (x5764607523034023950) => {
                return x5764607523034023950 === null || x5764607523034023950 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return true;
            }, () => {
                return true;
            })).call(this, append_reset0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('rem'), ElixirScript.Core.Patterns.variable('acc'), false, ElixirScript.Core.Patterns.variable('append_reset')], __function_args__, (term0, rem0, acc0, append_reset0) => {
            return ElixirScript.Core.erlang.is_atom(term0);
        })) !== null) {
            let [term0, rem0, acc0, append_reset0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, [], rem0, acc0, false, append_reset0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('rem'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('emit?'), ElixirScript.Core.Patterns.variable('append_reset')], __function_args__, (term0, rem0, acc0, emit__qmark__0, append_reset0) => {
            return ElixirScript.Core.erlang.not(ElixirScript.Core.erlang.is_list(term0));
        })) !== null) {
            let [term0, rem0, acc0, emit__qmark__0, append_reset0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, [], rem0, [acc0, term0], emit__qmark__0, append_reset0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('next'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('emit?'), ElixirScript.Core.Patterns.variable('append_reset')], __function_args__, (next0, rest0, acc0, emit__qmark__0, append_reset0) => {
            return true;
        })) !== null) {
            let [next0, rest0, acc0, emit__qmark__0, append_reset0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, next0, rest0, acc0, emit__qmark__0, append_reset0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], [], ElixirScript.Core.Patterns.variable('acc'), true, true], __function_args__, (acc0) => {
            return true;
        })) !== null) {
            let [acc0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(acc0, ElixirScript.Core.Functions.call_property($IO$ANSI$.reset));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], [], ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_emit?'), ElixirScript.Core.Patterns.variable('_append_reset')], __function_args__, (acc0, _emit__qmark__0, _append_reset0) => {
            return true;
        })) !== null) {
            let [acc0, _emit__qmark__0, _append_reset0] = __arg_matches__;

            return acc0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function framed(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(51) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function green(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(32) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_black(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(90) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_white_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(107) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function primary_font(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(10) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_6(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(16) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function cyan_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(46) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function conceal(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(8) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function blue(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(34) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function blue_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(44) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_yellow(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(93) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function not_framed_encircled(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(54) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_blue(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(94) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_magenta(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(95) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function not_overlined(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(55) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function green_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(42) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function blink_rapid(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(6) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reverse_off(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(27) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function crossed_out(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(9) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_white(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(97) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function red(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(31) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function not_italic(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(23) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_cyan(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(96) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reset(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(0) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_4(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(14) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function clear(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ('2' + 'J');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_cyan_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(106) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reverse(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(7) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function format_fragment(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('chardata'), ElixirScript.Core.Patterns.variable('emit?')], __function_args__, (chardata0, emit__qmark__0) => {
            return ElixirScript.Core.erlang.is_boolean(emit__qmark__0);
        })) !== null) {
            let [chardata0, emit__qmark__0] = __arg_matches__;

            return do_format(chardata0, [], [], emit__qmark__0, false);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function default_color(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(39) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function black_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(40) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inverse_off(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(27) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function white_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(47) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function italic(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(3) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function underline(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(4) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function red_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(41) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function blink_slow(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(5) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function magenta(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(35) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function blink_off(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(25) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function format_sequence(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('reset')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return reset();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('bright')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return bright();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('faint')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return faint();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('italic')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return italic();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('underline')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return underline();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('blink_slow')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return blink_slow();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('blink_rapid')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return blink_rapid();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('inverse')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return inverse();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('reverse')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return reverse();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('conceal')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return conceal();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('crossed_out')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return crossed_out();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('primary_font')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return primary_font();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_1')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_1();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_2')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_2();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_3')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_3();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_4')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_4();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_5')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_5();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_6')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_6();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_7')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_7();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_8')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_8();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('font_9')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return font_9();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('normal')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return normal();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('not_italic')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return not_italic();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('no_underline')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return no_underline();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('blink_off')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return blink_off();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('inverse_off')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return inverse_off();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('reverse_off')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return reverse_off();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('black')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return black();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_black')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_black();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('black_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return black_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_black_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_black_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('red')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return red();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_red')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_red();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('red_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return red_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_red_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_red_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('green')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return green();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_green')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_green();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('green_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return green_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_green_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_green_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('yellow')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return yellow();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_yellow')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_yellow();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('yellow_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return yellow_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_yellow_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_yellow_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('blue')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return blue();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_blue')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_blue();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('blue_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return blue_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_blue_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_blue_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('magenta')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return magenta();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_magenta')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_magenta();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('magenta_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return magenta_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_magenta_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_magenta_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('cyan')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return cyan();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_cyan')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_cyan();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('cyan_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return cyan_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_cyan_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_cyan_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('white')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return white();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_white')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_white();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('white_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return white_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('light_white_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return light_white_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('default_color')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return default_color();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('default_background')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return default_background();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('framed')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return framed();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('encircled')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return encircled();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('overlined')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return overlined();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('not_framed_encircled')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return not_framed_encircled();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('not_overlined')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return not_overlined();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('home')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return home();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('clear')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return clear();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('clear_line')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return clear_line();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($ArgumentError$.exception('invalid ANSI sequence specification: ' + $String$Chars$.to_string($Kernel$.inspect(other0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_black_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(100) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function no_underline(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(24) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function overlined(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(53) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function normal(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(22) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_2(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(12) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function magenta_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(45) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_8(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(18) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_red(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(91) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function default_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(49) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_green_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(102) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function bright(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(1) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function yellow_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(43) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function cyan(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(36) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_1(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(11) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_red_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(101) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inverse(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(7) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function faint(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(2) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function white(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(37) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_9(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(19) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_yellow_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(103) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_7(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(17) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_5(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(15) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function encircled(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(52) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_blue_background(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(104) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function font_3(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(13) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function clear_line(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ('2' + 'K');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function light_green(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '[' + ($String$Chars$.to_string(92) + 'm');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    black,
    yellow,
    home,
    light_magenta_background,
    framed,
    green,
    light_black,
    light_white_background,
    primary_font,
    font_6,
    cyan_background,
    conceal,
    blue,
    blue_background,
    light_yellow,
    not_framed_encircled,
    light_blue,
    light_magenta,
    not_overlined,
    green_background,
    blink_rapid,
    reverse_off,
    crossed_out,
    light_white,
    red,
    not_italic,
    light_cyan,
    reset,
    font_4,
    clear,
    light_cyan_background,
    reverse,
    format_fragment,
    default_color,
    black_background,
    inverse_off,
    white_background,
    italic,
    underline,
    red_background,
    blink_slow,
    magenta,
    blink_off,
    light_black_background,
    no_underline,
    overlined,
    normal,
    font_2,
    magenta_background,
    font_8,
    light_red,
    default_background,
    light_green_background,
    bright,
    yellow_background,
    cyan,
    font_1,
    light_red_background,
    inverse,
    faint,
    white,
    font_9,
    light_yellow_background,
    font_7,
    font_5,
    encircled,
    light_blue_background,
    font_3,
    clear_line,
    light_green,
    __MODULE__: Symbol.for('Elixir.IO.ANSI'),
    __info__
};
