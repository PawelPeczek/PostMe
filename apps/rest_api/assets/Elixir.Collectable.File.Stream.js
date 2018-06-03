'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$File$Stream$ from './Elixir.Collectable.File.Stream.js';

import $File$Stream$ from './Elixir.File.Stream.js';

import $File$Error$ from './Elixir.File.Error.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [217001975233948521615798125925250054794]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $File$Stream$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 49, 46, 53]), new ElixirScript.Core.Tuple(Symbol.for('source'), '/build/elixir/src/elixir-1.6.5/lib/elixir/lib/file/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(138))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.File.Stream')]]);

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

            return $File$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$File$Stream$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function into(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('path'), ElixirScript.Core.Patterns.variable('path')], [Symbol.for('modes'), ElixirScript.Core.Patterns.variable('modes')], [Symbol.for('raw'), ElixirScript.Core.Patterns.variable('raw')]]))], __function_args__, (path0, modes0, raw0, stream0) => {
            return true;
        })) !== null) {
            let [path0, modes0, raw0, stream0] = __arg_matches__;

            const [modes1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('modes'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('mode')], (mode0) => {
                return mode;
            }, (mode0) => {
                return ElixirScript.Core.erlang.not(mode === Symbol.for('read'));
            }), [ElixirScript.Core.Patterns.list_generator(ElixirScript.Core.Patterns.variable('mode'), modes0)], Collectable, []));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('device')]
            })], (device0) => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), into(device0, stream0, raw0));
            }, (device0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('error'), ElixirScript.Core.Patterns.variable('reason')]
            })], (reason0) => {
                return ElixirScript.Core.erlang.error($File$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('reason'), reason0), new ElixirScript.Core.Tuple(Symbol.for('action'), 'stream'), new ElixirScript.Core.Tuple(Symbol.for('path'), path0)]));
            }, (reason0) => {
                return true;
            })).call(this, ElixirScript.Core.file.open(path0, ElixirScript.Core.Functions.concat(Symbol.for('write'), modes1)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('device'), ElixirScript.Core.Patterns.variable('stream'), ElixirScript.Core.Patterns.variable('raw')], __function_args__, (device0, stream0, raw0) => {
            return true;
        })) !== null) {
            let [device0, stream0, raw0] = __arg_matches__;

            return (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('ok'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (x0) => {
                        return true;
                    })) !== null) {
                        let [x0] = __arg_matches__;

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                            return $IO$.binwrite(device0, x0);
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([false], () => {
                            return $IO$.write(device0, x0);
                        }, () => {
                            return true;
                        })).call(this, raw0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('ok'), Symbol.for('done')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        const [] = ElixirScript.Core.Patterns.match(Symbol.for('ok'), ElixirScript.Core.file.close(device0));

                        return stream0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('ok'), Symbol.for('halt')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        const [] = ElixirScript.Core.Patterns.match(Symbol.for('ok'), ElixirScript.Core.file.close(device0));

                        return [];
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            };
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    into,
    __MODULE__: Symbol.for('Elixir.Collectable.File.Stream'),
    __info__
};
