'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Regex$ from './Elixir.Regex.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Macro$ from './Elixir.Macro.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Exception$ from './Elixir.Exception.js';

import $Enum$ from './Elixir.Enum.js';

import $Module$ from './Elixir.Module.js';

import $Path$ from './Elixir.Path.js';

import $Macro$Env$ from './Elixir.Macro.Env.js';

import $Access$ from './Elixir.Access.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('!='), 2), new ElixirScript.Core.Tuple(Symbol.for('!=='), 2), new ElixirScript.Core.Tuple(Symbol.for('*'), 2), new ElixirScript.Core.Tuple(Symbol.for('+'), 1), new ElixirScript.Core.Tuple(Symbol.for('+'), 2), new ElixirScript.Core.Tuple(Symbol.for('++'), 2), new ElixirScript.Core.Tuple(Symbol.for('-'), 1), new ElixirScript.Core.Tuple(Symbol.for('-'), 2), new ElixirScript.Core.Tuple(Symbol.for('--'), 2), new ElixirScript.Core.Tuple(Symbol.for('/'), 2), new ElixirScript.Core.Tuple(Symbol.for('<'), 2), new ElixirScript.Core.Tuple(Symbol.for('<='), 2), new ElixirScript.Core.Tuple(Symbol.for('=='), 2), new ElixirScript.Core.Tuple(Symbol.for('==='), 2), new ElixirScript.Core.Tuple(Symbol.for('=~'), 2), new ElixirScript.Core.Tuple(Symbol.for('>'), 2), new ElixirScript.Core.Tuple(Symbol.for('>='), 2), new ElixirScript.Core.Tuple(Symbol.for('abs'), 1), new ElixirScript.Core.Tuple(Symbol.for('apply'), 2), new ElixirScript.Core.Tuple(Symbol.for('apply'), 3), new ElixirScript.Core.Tuple(Symbol.for('binary_part'), 3), new ElixirScript.Core.Tuple(Symbol.for('bit_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('byte_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('div'), 2), new ElixirScript.Core.Tuple(Symbol.for('elem'), 2), new ElixirScript.Core.Tuple(Symbol.for('exit'), 1), new ElixirScript.Core.Tuple(Symbol.for('function_exported?'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update_in'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_in'), 2), new ElixirScript.Core.Tuple(Symbol.for('hd'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2), new ElixirScript.Core.Tuple(Symbol.for('is_atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_binary'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_bitstring'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_boolean'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_float'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_function'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_function'), 2), new ElixirScript.Core.Tuple(Symbol.for('is_integer'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_map'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_number'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_pid'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_port'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_reference'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_tuple'), 1), new ElixirScript.Core.Tuple(Symbol.for('length'), 1), new ElixirScript.Core.Tuple(Symbol.for('macro_exported?'), 3), new ElixirScript.Core.Tuple(Symbol.for('make_ref'), 0), new ElixirScript.Core.Tuple(Symbol.for('map_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('max'), 2), new ElixirScript.Core.Tuple(Symbol.for('min'), 2), new ElixirScript.Core.Tuple(Symbol.for('node'), 0), new ElixirScript.Core.Tuple(Symbol.for('node'), 1), new ElixirScript.Core.Tuple(Symbol.for('not'), 1), new ElixirScript.Core.Tuple(Symbol.for('pop_in'), 2), new ElixirScript.Core.Tuple(Symbol.for('put_elem'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_in'), 3), new ElixirScript.Core.Tuple(Symbol.for('rem'), 2), new ElixirScript.Core.Tuple(Symbol.for('round'), 1), new ElixirScript.Core.Tuple(Symbol.for('self'), 0), new ElixirScript.Core.Tuple(Symbol.for('send'), 2), new ElixirScript.Core.Tuple(Symbol.for('spawn'), 1), new ElixirScript.Core.Tuple(Symbol.for('spawn'), 3), new ElixirScript.Core.Tuple(Symbol.for('spawn_link'), 1), new ElixirScript.Core.Tuple(Symbol.for('spawn_link'), 3), new ElixirScript.Core.Tuple(Symbol.for('spawn_monitor'), 1), new ElixirScript.Core.Tuple(Symbol.for('spawn_monitor'), 3), new ElixirScript.Core.Tuple(Symbol.for('struct'), 1), new ElixirScript.Core.Tuple(Symbol.for('struct'), 2), new ElixirScript.Core.Tuple(Symbol.for('struct!'), 1), new ElixirScript.Core.Tuple(Symbol.for('struct!'), 2), new ElixirScript.Core.Tuple(Symbol.for('throw'), 1), new ElixirScript.Core.Tuple(Symbol.for('tl'), 1), new ElixirScript.Core.Tuple(Symbol.for('trunc'), 1), new ElixirScript.Core.Tuple(Symbol.for('tuple_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('update_in'), 3)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('!'), 1), new ElixirScript.Core.Tuple(Symbol.for('&&'), 2), new ElixirScript.Core.Tuple(Symbol.for('..'), 2), new ElixirScript.Core.Tuple(Symbol.for('<>'), 2), new ElixirScript.Core.Tuple(Symbol.for('@'), 1), new ElixirScript.Core.Tuple(Symbol.for('alias!'), 1), new ElixirScript.Core.Tuple(Symbol.for('and'), 2), new ElixirScript.Core.Tuple(Symbol.for('binding'), 0), new ElixirScript.Core.Tuple(Symbol.for('binding'), 1), new ElixirScript.Core.Tuple(Symbol.for('def'), 1), new ElixirScript.Core.Tuple(Symbol.for('def'), 2), new ElixirScript.Core.Tuple(Symbol.for('defdelegate'), 2), new ElixirScript.Core.Tuple(Symbol.for('defexception'), 1), new ElixirScript.Core.Tuple(Symbol.for('defguard'), 1), new ElixirScript.Core.Tuple(Symbol.for('defguardp'), 1), new ElixirScript.Core.Tuple(Symbol.for('defimpl'), 2), new ElixirScript.Core.Tuple(Symbol.for('defimpl'), 3), new ElixirScript.Core.Tuple(Symbol.for('defmacro'), 1), new ElixirScript.Core.Tuple(Symbol.for('defmacro'), 2), new ElixirScript.Core.Tuple(Symbol.for('defmacrop'), 1), new ElixirScript.Core.Tuple(Symbol.for('defmacrop'), 2), new ElixirScript.Core.Tuple(Symbol.for('defmodule'), 2), new ElixirScript.Core.Tuple(Symbol.for('defoverridable'), 1), new ElixirScript.Core.Tuple(Symbol.for('defp'), 1), new ElixirScript.Core.Tuple(Symbol.for('defp'), 2), new ElixirScript.Core.Tuple(Symbol.for('defprotocol'), 2), new ElixirScript.Core.Tuple(Symbol.for('defstruct'), 1), new ElixirScript.Core.Tuple(Symbol.for('destructure'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_and_update_in'), 2), new ElixirScript.Core.Tuple(Symbol.for('if'), 2), new ElixirScript.Core.Tuple(Symbol.for('in'), 2), new ElixirScript.Core.Tuple(Symbol.for('is_nil'), 1), new ElixirScript.Core.Tuple(Symbol.for('match?'), 2), new ElixirScript.Core.Tuple(Symbol.for('or'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop_in'), 1), new ElixirScript.Core.Tuple(Symbol.for('put_in'), 2), new ElixirScript.Core.Tuple(Symbol.for('raise'), 1), new ElixirScript.Core.Tuple(Symbol.for('raise'), 2), new ElixirScript.Core.Tuple(Symbol.for('reraise'), 2), new ElixirScript.Core.Tuple(Symbol.for('reraise'), 3), new ElixirScript.Core.Tuple(Symbol.for('sigil_C'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_D'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_N'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_R'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_S'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_T'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_W'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_c'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_r'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_s'), 2), new ElixirScript.Core.Tuple(Symbol.for('sigil_w'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('unless'), 2), new ElixirScript.Core.Tuple(Symbol.for('update_in'), 2), new ElixirScript.Core.Tuple(Symbol.for('use'), 1), new ElixirScript.Core.Tuple(Symbol.for('use'), 2), new ElixirScript.Core.Tuple(Symbol.for('var!'), 1), new ElixirScript.Core.Tuple(Symbol.for('var!'), 2), new ElixirScript.Core.Tuple(Symbol.for('|>'), 2), new ElixirScript.Core.Tuple(Symbol.for('||'), 2)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [67114110093156701274375782806154026569])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/kernel.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(26), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(178), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(73))], [Symbol.for('module'), Symbol.for('Elixir.Kernel')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function function_exported__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('module'), ElixirScript.Core.Patterns.variable('function'), ElixirScript.Core.Patterns.variable('arity')], __function_args__, (module0, __function__0, arity0) => {
            return true;
        })) !== null) {
            let [module0, __function__0, arity0] = __arg_matches__;

            return ElixirScript.Core.erlang.function_exported(module0, __function__0, arity0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, []));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (term0, opts0) => {
            return ElixirScript.Core.erlang.is_list(opts0);
        })) !== null) {
            let [term0, opts0] = __arg_matches__;

            const [opts1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('opts'), $Kernel$.struct($Inspect$Opts$, opts0));

            const [limit0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('limit'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.Functions.call_property(opts1, 'width');
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return Symbol.for('infinity');
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Functions.call_property(opts1, 'pretty')));

            const [doc0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('doc'), $Inspect$Algebra$.group($Inspect$Algebra$.to_doc(term0, opts1)));

            return ElixirScript.Core.erlang.iolist_to_binary($Inspect$Algebra$.format(doc0, limit0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function struct(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('struct'), ElixirScript.Core.Patterns.variable('fields')], __function_args__, (struct0, fields0) => {
            return true;
        })) !== null) {
            let [struct0, fields0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, struct0, fields0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('__struct__'), ElixirScript.Core.Patterns.variable('_val')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (_val0, acc0) => {
                        return true;
                    })) !== null) {
                        let [_val0, acc0] = __arg_matches__;

                        return acc0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('val')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (key0, val0, acc0) => {
                        return true;
                    })) !== null) {
                        let [key0, val0, acc0] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[key0, ElixirScript.Core.Patterns.variable('_')]])], () => {
                            return new Map([...acc0, [key0, val0]]);
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                            return acc0;
                        }, () => {
                            return true;
                        })).call(this, acc0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('struct'), [], ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (struct0, _fun0) => {
            return ElixirScript.Core.erlang.is_atom(struct0);
        })) !== null) {
            let [struct0, _fun0] = __arg_matches__;

            return ElixirScript.Core.Functions.call_property(struct0, '__struct__');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('struct'), ElixirScript.Core.Patterns.variable('fields'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (struct0, fields0, fun0) => {
            return ElixirScript.Core.erlang.is_atom(struct0);
        })) !== null) {
            let [struct0, fields0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, ElixirScript.Core.Functions.call_property(struct0, '__struct__'), fields0, fun0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }]])), [], ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (struct0, _fun0) => {
            return true;
        })) !== null) {
            let [struct0, _fun0] = __arg_matches__;

            return struct0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }]])), ElixirScript.Core.Patterns.variable('fields'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (struct0, fields0, fun0) => {
            return true;
        })) !== null) {
            let [struct0, fields0, fun0] = __arg_matches__;

            return $Enum$.reduce(fields0, struct0, fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function struct__emark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('struct'), ElixirScript.Core.Patterns.variable('fields')], __function_args__, (struct0, fields0) => {
            return ElixirScript.Core.erlang.is_atom(struct0);
        })) !== null) {
            let [struct0, fields0] = __arg_matches__;

            return struct0.__struct__(fields0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('struct'), ElixirScript.Core.Patterns.variable('fields')], __function_args__, (struct0, fields0) => {
            return ElixirScript.Core.erlang.is_map(struct0);
        })) !== null) {
            let [struct0, fields0] = __arg_matches__;

            return struct(struct0, fields0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('__struct__'), ElixirScript.Core.Patterns.variable('_')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (acc0) => {
                        return true;
                    })) !== null) {
                        let [acc0] = __arg_matches__;

                        return acc0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('val')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (key0, val0, acc0) => {
                        return true;
                    })) !== null) {
                        let [key0, val0, acc0] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key0, val0, acc0);
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

export default {
    function_exported__qmark__,
    inspect,
    struct,
    struct__emark__,
    __MODULE__: Symbol.for('Elixir.Kernel'),
    __info__
};
