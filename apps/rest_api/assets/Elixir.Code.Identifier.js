'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Tokenizer$ from './Elixir.String.Tokenizer.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Enum$ from './Elixir.Enum.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('binary_op'), 1), new ElixirScript.Core.Tuple(Symbol.for('classify'), 1), new ElixirScript.Core.Tuple(Symbol.for('escape'), 2), new ElixirScript.Core.Tuple(Symbol.for('escape'), 3), new ElixirScript.Core.Tuple(Symbol.for('escape'), 4), new ElixirScript.Core.Tuple(Symbol.for('extract_anonymous_fun_parent'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect_as_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect_as_function'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect_as_key'), 1), new ElixirScript.Core.Tuple(Symbol.for('unary_op'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [268165005656873656673644077059427138581])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/code/identifier.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(21))], [Symbol.for('module'), Symbol.for('Elixir.Code.Identifier')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function binary_op(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('op')], __function_args__, (op0) => {
            return true;
        })) !== null) {
            let [op0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms.cond([op0 === Symbol.for('\\') || op0 === Symbol.for('<-'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 40);
            }], [op0 === Symbol.for('when'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('right'), 50);
            }], [op0 === Symbol.for('::'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('right'), 60);
            }], [op0 === Symbol.for('|'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('right'), 70);
            }], [op0 === Symbol.for('='), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('right'), 100);
            }], [op0 === Symbol.for('|||') || (op0 === Symbol.for('or') || op0 === Symbol.for('||')), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 130);
            }], [op0 === Symbol.for('&&&') || (op0 === Symbol.for('and') || op0 === Symbol.for('&&')), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 140);
            }], [op0 === Symbol.for('!=') || (op0 === Symbol.for('=~') || (op0 === Symbol.for('===') || (op0 === Symbol.for('!==') || op0 === Symbol.for('==')))), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 150);
            }], [op0 === Symbol.for('<=') || (op0 === Symbol.for('>=') || (op0 === Symbol.for('>') || op0 === Symbol.for('<'))), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 160);
            }], [op0 === Symbol.for('<<<') || (op0 === Symbol.for('>>>') || (op0 === Symbol.for('<~') || (op0 === Symbol.for('~>') || (op0 === Symbol.for('<<~') || (op0 === Symbol.for('~>>') || (op0 === Symbol.for('<~>') || (op0 === Symbol.for('<|>') || op0 === Symbol.for('|>')))))))), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 170);
            }], [op0 === Symbol.for('in'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 180);
            }], [op0 === Symbol.for('^^^'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 190);
            }], [op0 === Symbol.for('--') || (op0 === Symbol.for('..') || (op0 === Symbol.for('<>') || op0 === Symbol.for('++'))), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('right'), 200);
            }], [op0 === Symbol.for('-') || op0 === Symbol.for('+'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 210);
            }], [op0 === Symbol.for('/') || op0 === Symbol.for('*'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 220);
            }], [op0 === Symbol.for('.'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('left'), 310);
            }], [true, () => {
                return Symbol.for('error');
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function classify(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            const [charlist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('charlist'), ElixirScript.Core.erlang.atom_to_list(atom0));

            return ElixirScript.Core.SpecialForms.cond([atom0 === Symbol.for('%{}') || (atom0 === Symbol.for('{}') || (atom0 === Symbol.for('<<>>') || (atom0 === Symbol.for('...') || (atom0 === Symbol.for('..') || (atom0 === Symbol.for('.') || (atom0 === Symbol.for('->') || atom0 === Symbol.for('%'))))))), () => {
                return Symbol.for('not_callable');
            }], [ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return binary_op(atom0) != Symbol.for('error');
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303407295')], (other5764607523034072950) => {
                return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('or')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523034072950)]));
            }, (other5764607523034072950) => {
                return true;
            })).call(this, unary_op(atom0) != Symbol.for('error')), () => {
                return Symbol.for('callable_operator');
            }], [valid_alias__qmark__(charlist0), () => {
                return Symbol.for('alias');
            }], [true, () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('kind'), ElixirScript.Core.Patterns.variable('_acc'), [], ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('special')]
                })], (kind0, _acc0, special0) => {
                    return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303419262')], (x5764607523034192620) => {
                        return Symbol.for('not_callable');
                    }, (x5764607523034192620) => {
                        return x5764607523034192620 === null || x5764607523034192620 === false;
                    }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                        return Symbol.for('callable_local');
                    }, () => {
                        return true;
                    })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                        return ElixirScript.Core.erlang.not(ElixirScript.Core.lists.member(64, special0));
                    }, () => {
                        return true;
                    }), ElixirScript.Core.Patterns.clause([false], () => {
                        return false;
                    }, () => {
                        return true;
                    }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303419230')], (other5764607523034192300) => {
                        return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523034192300)]));
                    }, (other5764607523034192300) => {
                        return true;
                    })).call(this, ElixirScript.Core.erlang.equals(kind0, Symbol.for('identifier'))));
                }, (kind0, _acc0, special0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return Symbol.for('other');
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.elixir_config.safe_get(Symbol.for('identifier_tokenizer'), $String$Tokenizer$).tokenize(charlist0));
            }]);
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

function escape(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, Symbol.for('infinity'), escape_map));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x00, x10, x20) => {
            return true;
        })) !== null) {
            let [x00, x10, x20] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, x20, escape_map));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other'), ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (other0, char0, count0, fun0) => {
            return true;
        })) !== null) {
            let [other0, char0, count0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, other0, char0, count0, [], fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        }))), ElixirScript.Core.Patterns.variable('_char'), 0, ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (_0, _1, binary0, _char0, acc0, _fun0) => {
            return true;
        })) !== null) {
            let [_0, _1, binary0, _char0, acc0, _fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(acc0, binary0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (char0, t0, char1, count0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [char0, t0, char1, count0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, char1, decrement(count0), ElixirScript.Core.Functions.concat(acc0, [92, char1]), fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (t0, char0, count0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [t0, char0, count0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, char0, decrement(count0), ElixirScript.Core.Functions.concat(acc0, [92, 35, 123]), fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.utf8({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (h0, t0, char0, count0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [h0, t0, char0, count0, acc0, fun0] = __arg_matches__;

            const [value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('value'), fun0(h0));

            const [escaped0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303409946')], (x5764607523034099460) => {
                return escape_char(h0);
            }, (x5764607523034099460) => {
                return x5764607523034099460 === null || x5764607523034099460 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return value0;
            }, () => {
                return true;
            })).call(this, value0));

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, char0, decrement(count0), ElixirScript.Core.Functions.concat(acc0, escaped0), fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 4), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (a0, b0, t0, char0, count0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [a0, b0, t0, char0, count0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, char0, decrement(count0), ElixirScript.Core.Functions.concat(acc0, [[92, 120], to_hex(a0), to_hex(b0)]), fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(), ElixirScript.Core.Patterns.variable('_char'), ElixirScript.Core.Patterns.variable('_count'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (_char0, _count0, acc0, _fun0) => {
            return true;
        })) !== null) {
            let [_char0, _count0, acc0, _fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(acc0, new ElixirScript.Core.BitString());
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function escape_char(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([0], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 48];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([65279], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [92, 117, 70, 69, 70, 70];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 32 && char0 <= 126) || ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 160 && char0 <= 55295) || ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 57344 && char0 <= 65533) || ElixirScript.Core.erlang.is_integer(char0) && (char0 >= 65536 && char0 <= 1114111);
        })) !== null) {
            let [char0] = __arg_matches__;

            return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.utf8(char0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return char0 < 256;
        })) !== null) {
            let [char0] = __arg_matches__;

            const [a0, b0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4)), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(char0), 8)));

            return [[92, 120], to_hex(a0), to_hex(b0)];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return char0 < 65536;
        })) !== null) {
            let [char0] = __arg_matches__;

            const [a0, b0, c0, d0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4)), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(char0), 16)));

            return [[92, 120, 123], to_hex(a0), to_hex(b0), to_hex(c0), to_hex(d0), 125];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return char0 < 16777216;
        })) !== null) {
            let [char0] = __arg_matches__;

            const [a0, b0, c0, d0, e0, f0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4)), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(char0), 24)));

            return [[92, 120, 123], to_hex(a0), to_hex(b0), to_hex(c0), to_hex(d0), to_hex(e0), to_hex(f0), 125];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function extract_anonymous_fun_parent(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._with([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary('-'), ElixirScript.Core.BitString.binary({
                'value': ElixirScript.Core.Patterns.variable()
            })), () => {
                return ElixirScript.Core.erlang.atom_to_binary(atom0, Symbol.for('utf8'));
            }], [ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('trailing'), ElixirScript.Core.Patterns.variable('reversed')), (rest0) => {
                return $Enum$.reverse($String$.split(rest0, '/'));
            }], [[ElixirScript.Core.Patterns.variable('arity'), ElixirScript.Core.Patterns.variable('_inner'), ElixirScript.Core.Patterns.variable('_count'), ''], (rest0, trailing0, reversed0) => {
                return $String$.split(trailing0, '-');
            }], (rest0, trailing0, reversed0, arity0, _inner0, _count0) => {
                return new ElixirScript.Core.Tuple(ElixirScript.Core.erlang.binary_to_atom($Enum$.join($Enum$.reverse(reversed0), '/'), Symbol.for('utf8')), arity0);
            }, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return Symbol.for('error');
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

function inspect_as_atom(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.equals(atom0, null) || ElixirScript.Core.erlang.is_boolean(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            return ElixirScript.Core.erlang.atom_to_binary(atom0, Symbol.for('utf8'));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            const [binary0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('binary'), ElixirScript.Core.erlang.atom_to_binary(atom0, Symbol.for('utf8')));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('alias')], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('binary')], (binary1) => {
                    return binary1;
                }, (binary1) => {
                    return binary1 === 'Elixir.Elixir' || binary1 === 'Elixir';
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary('Elixir.Elixir.'), ElixirScript.Core.BitString.binary({
                    'value': ElixirScript.Core.Patterns.variable()
                }))], (_rest0) => {
                    return binary0;
                }, (_rest0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary('Elixir.'), ElixirScript.Core.BitString.binary({
                    'value': ElixirScript.Core.Patterns.variable()
                }))], (rest0) => {
                    return rest0;
                }, (rest0) => {
                    return true;
                })).call(this, binary0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('type')], (type0) => {
                return ':' + binary0;
            }, (type0) => {
                return type0 === Symbol.for('callable_operator') || (type0 === Symbol.for('not_callable') || type0 === Symbol.for('callable_local'));
            }), ElixirScript.Core.Patterns.clause([Symbol.for('other')], () => {
                const [escaped0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.variable('_')]
                }), escape(binary0, 34));

                const _ref7726490 = new ElixirScript.Core.Tuple(escaped0);

                return ElixirScript.Core.erlang.iolist_to_binary([58, 34, escaped0, 34]);
            }, () => {
                return true;
            })).call(this, classify(atom0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect_as_function(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            const [binary0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('binary'), ElixirScript.Core.erlang.atom_to_binary(atom0, Symbol.for('utf8')));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('type')], (type0) => {
                return binary0;
            }, (type0) => {
                return type0 === Symbol.for('callable_operator') || type0 === Symbol.for('callable_local');
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('type')], (type0) => {
                const [escaped0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return ElixirScript.Core.erlang.element(1, escape(binary0, 34));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return binary0;
                }, () => {
                    return true;
                })).call(this, type0 === Symbol.for('alias') || type0 === Symbol.for('not_callable')));

                return ElixirScript.Core.erlang.iolist_to_binary([34, escaped0, 34]);
            }, (type0) => {
                return true;
            })).call(this, classify(atom0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect_as_key(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_atom(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            const [binary0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('binary'), ElixirScript.Core.erlang.atom_to_binary(atom0, Symbol.for('utf8')));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('type')], (type0) => {
                return ElixirScript.Core.erlang.iolist_to_binary([binary0, 58]);
            }, (type0) => {
                return type0 === Symbol.for('callable_operator') || (type0 === Symbol.for('not_callable') || type0 === Symbol.for('callable_local'));
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                const [escaped0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.variable('_')]
                }), escape(binary0, 34));

                const _ref1511210 = new ElixirScript.Core.Tuple(escaped0);

                return ElixirScript.Core.erlang.iolist_to_binary([34, escaped0, 34, 58]);
            }, () => {
                return true;
            })).call(this, classify(atom0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_hex(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('c')], __function_args__, (c0) => {
            return ElixirScript.Core.erlang.is_integer(c0) && (c0 >= 0 && c0 <= 9);
        })) !== null) {
            let [c0] = __arg_matches__;

            return 48 + c0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('c')], __function_args__, (c0) => {
            return ElixirScript.Core.erlang.is_integer(c0) && (c0 >= 10 && c0 <= 15);
        })) !== null) {
            let [c0] = __arg_matches__;

            return 65 + c0 - 10;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function trim_leading_while_valid_identifier(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('rest'))], __function_args__, (char0, rest0) => {
            return char0 >= 97 && char0 <= 122 || char0 >= 65 && char0 <= 90 || char0 >= 48 && char0 <= 57 || ElixirScript.Core.erlang.equals(char0, 95);
        })) !== null) {
            let [char0, rest0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return other0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function unary_op(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('op')], __function_args__, (op0) => {
            return true;
        })) !== null) {
            let [op0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms.cond([op0 === Symbol.for('&'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('non_associative'), 90);
            }], [op0 === Symbol.for('^') || (op0 === Symbol.for('not') || (op0 === Symbol.for('+') || (op0 === Symbol.for('-') || (op0 === Symbol.for('~~~') || op0 === Symbol.for('!'))))), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('non_associative'), 300);
            }], [op0 === Symbol.for('@'), () => {
                return new ElixirScript.Core.Tuple(Symbol.for('non_associative'), 320);
            }], [true, () => {
                return Symbol.for('error');
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function valid_alias__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail([69, 108, 105, 120, 105, 114], ElixirScript.Core.Patterns.variable('rest'))], __function_args__, (rest0) => {
            return true;
        })) !== null) {
            let [rest0] = __arg_matches__;

            return valid_alias_piece__qmark__(rest0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_other')], __function_args__, (_other0) => {
            return true;
        })) !== null) {
            let [_other0] = __arg_matches__;

            return false;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function valid_alias_piece__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[46, ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('rest'))]], __function_args__, (char0, rest0) => {
            return char0 >= 65 && char0 <= 90;
        })) !== null) {
            let [char0, rest0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, trim_leading_while_valid_identifier(rest0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_other')], __function_args__, (_other0) => {
            return true;
        })) !== null) {
            let [_other0] = __arg_matches__;

            return false;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    binary_op,
    classify,
    escape,
    extract_anonymous_fun_parent,
    inspect_as_atom,
    inspect_as_function,
    inspect_as_key,
    unary_op,
    __MODULE__: Symbol.for('Elixir.Code.Identifier'),
    __info__
};
