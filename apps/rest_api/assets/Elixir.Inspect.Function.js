'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Function$ from './Elixir.Inspect.Function.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Access$ from './Elixir.Access.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [161939552858554465937774253724089735995]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(59))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Function')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return {};
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Function$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function default_inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('mod'), ElixirScript.Core.Patterns.variable('fun_info')], __function_args__, (mod0, fun_info0) => {
            return true;
        })) !== null) {
            let [mod0, fun_info0] = __arg_matches__;

            const [inspected_as_atom0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected_as_atom'), $Code$Identifier$.inspect_as_atom(mod0));

            const [extracted_name0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('extracted_name'), extract_name($Access$.get(fun_info0, Symbol.for('name'))));

            return '#Function<' + ($String$Chars$.to_string(uniq(fun_info0)) + ('/' + ($String$Chars$.to_string($Access$.get(fun_info0, Symbol.for('arity'))) + (' in ' + ($String$Chars$.to_string(inspected_as_atom0) + ($String$Chars$.to_string(extracted_name0) + '>'))))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function extract_name(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('name')], __function_args__, (name0) => {
            return true;
        })) !== null) {
            let [name0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('name'), ElixirScript.Core.Patterns.variable('arity')]
            })], (name1, arity0) => {
                return '.' + ($Code$Identifier$.inspect_as_function(name1) + ('/' + arity0));
            }, (name1, arity0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([Symbol.for('error')], () => {
                return '.' + $Code$Identifier$.inspect_as_function(name0);
            }, () => {
                return true;
            })).call(this, $Code$Identifier$.extract_anonymous_fun_parent(name0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('function'), ElixirScript.Core.Patterns.variable('_opts')], __function_args__, (__function__0, _opts0) => {
            return true;
        })) !== null) {
            let [__function__0, _opts0] = __arg_matches__;

            const [fun_info0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fun_info'), ElixirScript.Core.erlang.fun_info(__function__0));

            const [mod0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('mod'), $Access$.get(fun_info0, Symbol.for('module')));

            const [name0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('name'), $Access$.get(fun_info0, Symbol.for('name')));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303390840')], (x5764607523033908400) => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.headTail([101, 108, 105, 120, 105, 114, 95, 99, 111, 109, 112, 105, 108, 101, 114, 95], ElixirScript.Core.Patterns.variable('_'))], () => {
                    return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303390744')], (x5764607523033907440) => {
                        return default_inspect(mod0, fun_info0);
                    }, (x5764607523033907440) => {
                        return x5764607523033907440 === null || x5764607523033907440 === false;
                    }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                        return '#Function<' + ($String$Chars$.to_string(uniq(fun_info0)) + (' in file:' + ($String$Chars$.to_string(ElixirScript.Core.Functions.call_property(mod0, '__RELATIVE__')) + '>')));
                    }, () => {
                        return true;
                    })).call(this, $Kernel$.function_exported__qmark__(mod0, Symbol.for('__RELATIVE__'), 0));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return default_inspect(mod0, fun_info0);
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.atom_to_list(mod0));
            }, (x5764607523033908400) => {
                return x5764607523033908400 === null || x5764607523033908400 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                const [inspected_as_atom0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected_as_atom'), $Code$Identifier$.inspect_as_atom(mod0));

                const [inspected_as_function0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected_as_function'), $Code$Identifier$.inspect_as_function(name0));

                return '&' + ($String$Chars$.to_string(inspected_as_atom0) + ('.' + ($String$Chars$.to_string(inspected_as_function0) + ('/' + $String$Chars$.to_string($Access$.get(fun_info0, Symbol.for('arity')))))));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.erlang.equals($Access$.get(fun_info0, Symbol.for('env')), []);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303390808')], (other5764607523033908080) => {
                return ElixirScript.Core.erlang.error($BadBooleanError$.exception([new ElixirScript.Core.Tuple(Symbol.for('operator'), Symbol.for('and')), new ElixirScript.Core.Tuple(Symbol.for('term'), other5764607523033908080)]));
            }, (other5764607523033908080) => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals($Access$.get(fun_info0, Symbol.for('type')), Symbol.for('external'))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function uniq(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('fun_info')], __function_args__, (fun_info0) => {
            return true;
        })) !== null) {
            let [fun_info0] = __arg_matches__;

            return ElixirScript.Core.erlang.integer_to_binary($Access$.get(fun_info0, Symbol.for('new_index'))) + ('.' + ElixirScript.Core.erlang.integer_to_binary($Access$.get(fun_info0, Symbol.for('uniq'))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Function'),
    __info__
};
