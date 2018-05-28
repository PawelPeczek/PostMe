all:
	mkdir out out/riak
	cd riak_client/riak-erlang-client && make
	cp -rf riak_client/riak-erlang-client/deps/hamcrest/ebin/* out/riak
	cp -rf riak_client/riak-erlang-client/deps/riak_pb/ebin/* out/riak
	cp -rf riak_client/riak-erlang-client/ebin/* out/riak
	make compile

compile:
	cd build && \
	elixir builder.ex

start:
	cd out && \
	iex -pa riak/
