'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $UnicodeConversionError$ from './Elixir.UnicodeConversionError.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('ascii_printable?'), 1), new ElixirScript.Core.Tuple(Symbol.for('ascii_printable?'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('duplicate'), 2), new ElixirScript.Core.Tuple(Symbol.for('first'), 1), new ElixirScript.Core.Tuple(Symbol.for('flatten'), 1), new ElixirScript.Core.Tuple(Symbol.for('flatten'), 2), new ElixirScript.Core.Tuple(Symbol.for('foldl'), 3), new ElixirScript.Core.Tuple(Symbol.for('foldr'), 3), new ElixirScript.Core.Tuple(Symbol.for('insert_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('keydelete'), 3), new ElixirScript.Core.Tuple(Symbol.for('keyfind'), 3), new ElixirScript.Core.Tuple(Symbol.for('keyfind'), 4), new ElixirScript.Core.Tuple(Symbol.for('keymember?'), 3), new ElixirScript.Core.Tuple(Symbol.for('keyreplace'), 4), new ElixirScript.Core.Tuple(Symbol.for('keysort'), 2), new ElixirScript.Core.Tuple(Symbol.for('keystore'), 4), new ElixirScript.Core.Tuple(Symbol.for('keytake'), 3), new ElixirScript.Core.Tuple(Symbol.for('last'), 1), new ElixirScript.Core.Tuple(Symbol.for('myers_difference'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('replace_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('starts_with?'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_existing_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_float'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_integer'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_integer'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_tuple'), 1), new ElixirScript.Core.Tuple(Symbol.for('update_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('wrap'), 1), new ElixirScript.Core.Tuple(Symbol.for('zip'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [98664103026951032684097974737297767763])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/list.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(83))], [Symbol.for('module'), Symbol.for('Elixir.List')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function ascii_printable__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), 0], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('char'), ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (char0, rest0, counter0) => {
            return ElixirScript.Core.erlang.is_integer(char0) && char0 >= 32 && char0 <= 126;
        })) !== null) {
            let [char0, rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(10, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(13, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(9, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(11, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(8, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(12, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(27, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(7, ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.Patterns.variable('counter')], __function_args__, (rest0, counter0) => {
            return true;
        })) !== null) {
            let [rest0, counter0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, decrement(counter0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_counter')], __function_args__, (_counter0) => {
            return true;
        })) !== null) {
            let [_counter0] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_counter')], __function_args__, (_counter0) => {
            return true;
        })) !== null) {
            let [_counter0] = __arg_matches__;

            return false;
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

function __delete__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('item'), ElixirScript.Core.Patterns.variable('list')), ElixirScript.Core.Patterns.variable('item')], __function_args__, (item0, list0, item1) => {
            return true;
        })) !== null) {
            let [item0, list0, item1] = __arg_matches__;

            return list0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('other'), ElixirScript.Core.Patterns.variable('list')), ElixirScript.Core.Patterns.variable('item')], __function_args__, (other0, list0, item0) => {
            return true;
        })) !== null) {
            let [other0, list0, item0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(other0, __delete__(list0, item0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_item')], __function_args__, (_item0) => {
            return true;
        })) !== null) {
            let [_item0] = __arg_matches__;

            return [];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list')], __function_args__, (list0) => {
            return ElixirScript.Core.erlang.is_list(list0);
        })) !== null) {
            let [list0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return ElixirScript.Core.unicode.characters_to_binary(list0);
            }, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_e')], (_e0) => {
                return ElixirScript.Core.erlang.error($ArgumentError$.exception('cannot convert the given list to a string.\n\nTo be converted to a string, a list must contain only:\n\n  * strings\n  * integers representing Unicode codepoints\n  * or a list containing one of these three elements\n\nPlease check the given list or call inspect/1 to get the list representation, got:\n\n' + ($String$Chars$.to_string($Kernel$.inspect(list0)) + '\n')));
            }, (_e0) => {
                return $Enum$.member__qmark__([ElixirScript.Core.Functions.call_property($ArgumentError$.__MODULE__)], ElixirScript.Core.Functions.call_property(ElixirScript.Core.Functions.call_property(ElixirScript.Core.Functions.call_property(_e0, '__reason'), '__struct__'), '__MODULE__'));
            })), null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('result')], __function_args__, (result0) => {
                        return ElixirScript.Core.erlang.is_binary(result0);
                    })) !== null) {
                        let [result0] = __arg_matches__;

                        return result0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('encoded'), ElixirScript.Core.Patterns.variable('rest')]
                    })], __function_args__, (encoded0, rest0) => {
                        return true;
                    })) !== null) {
                        let [encoded0, rest0] = __arg_matches__;

                        return ElixirScript.Core.erlang.error($UnicodeConversionError$.exception([new ElixirScript.Core.Tuple(Symbol.for('encoded'), encoded0), new ElixirScript.Core.Tuple(Symbol.for('rest'), rest0), new ElixirScript.Core.Tuple(Symbol.for('kind'), Symbol.for('invalid'))]));
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('incomplete'), ElixirScript.Core.Patterns.variable('encoded'), ElixirScript.Core.Patterns.variable('rest')]
                    })], __function_args__, (encoded0, rest0) => {
                        return true;
                    })) !== null) {
                        let [encoded0, rest0] = __arg_matches__;

                        return ElixirScript.Core.erlang.error($UnicodeConversionError$.exception([new ElixirScript.Core.Tuple(Symbol.for('encoded'), encoded0), new ElixirScript.Core.Tuple(Symbol.for('rest'), rest0), new ElixirScript.Core.Tuple(Symbol.for('kind'), Symbol.for('incomplete'))]));
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    ascii_printable__qmark__,
    __delete__,
    to_string,
    __MODULE__: Symbol.for('Elixir.List'),
    __info__
};
