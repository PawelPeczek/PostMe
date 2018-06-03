# PostMe
This is a simple micro-blog server written in Elixir with use of NoSQL database system Riak.

## Prerequisites
In order to build and start server it is essential to take below steps:

### Installing RiakKV
According to http://docs.basho.com/riak/kv/2.2.3/setup/installing/ you should choose your platform to install riak. The easiest one would be probably from package.
For example when using Fedora it is completelly ok to copy below commands:
```console
[user@dir]$ sudo yum install http://yum.basho.com/gpg/basho-release-6-1.noarch.rpm
[user@dir]$ sudo yum install riak
```
In this case config will be placed in /etc/riak
```console
[user@dir]$ cd /etc/riak/
```
### Instalation test

```console
[user@dir]$ sudo riak start
[user@dir]$ riak ping
pong
[user@dir]$ curl -v http://127.0.0.1:8098/types/default/props
About to connect() to 127.0.0.1 port 8098 (#0)
  Trying 127.0.0.1... connected
  Connected to 127.0.0.1 (127.0.0.1) port 8098 (#0)
  GET /riak/test HTTP/1.1
  User-Agent: curl/7.21.6 (x86_64-pc-linux-gnu)
  Host: 127.0.0.1:8098
  Accept: */*
 
  HTTP/1.1 200 OK
  Vary: Accept-Encoding
  Server: MochiWeb/1.1 WebMachine/1.9.0 (someone had painted it blue)
  Date: Wed, 26 Dec 2012 15:50:20 GMT
  Content-Type: application/json
  Content-Length: 422
 
  Connection #0 to host 127.0.0.1 left intact
  Closing connection #0
{"props":{"name":"test","allow_mult":false,"basic_quorum":false,
 "big_vclock":50,"chash_keyfun":{"mod":"riak_core_util",
 "fun":"chash_std_keyfun"},"dw":"quorum","last_write_wins":false,
 "linkfun":{"mod":"riak_kv_wm_link_walker","fun":"mapreduce_linkfun"},
 "n_val":3,"notfound_ok":true,"old_vclock":86400,"postcommit":[],"pr":0,
 "precommit":[],"pw":0,"r":"quorum","rw":"quorum","small_vclock":50,
 "w":"quorum","young_vclock":20}}
[user@dir]$ sudo riak stop
```
### Config changes
By default server is set to use localhost:8087 (default config).
It's crutial to change riak configuration so that the database would be saved on disc (otherwise secondery indices may not work). To do that modify file app.config (could be for example in /etc/riak directory)
```p
{riak_kv, [
    %% ...
    {storage_backend, riak_kv_eleveldb_backend},
    %% ...
    ]}
```
For full details check 
* https://docs.basho.com/riak/kv/2.2.2/developing/usage/secondary-indexes/
* https://docs.basho.com/riak/kv/2.2.2/setup/planning/backend/leveldb/


### Prerequisites

### Building
When building the code for the first time:
```console
[user@PostMe]$ mix deps.get
```
Then:
```console
[user@PostMe]$ mix compile
```

### Running inside iex
```console
[user@PostMe]$ iex -S mix
```

## API
* PostMeServer.start_link() - starting server, gets run automatically when using `iex -S mix`
* PostMeServer.add_post(user, hash_tags, content) - adding post as an user with [hash_tags] list
* PostMeServer.find_user_posts(user) - getting all user's posts
* PostMeServer.find_hashtag_posts(hashtag) - getting all posts connected with given hashtag
* PostMeServer.list_all_hashtags() - list of all hashtags
* PostMeServer.list_all_users() - list of all users
* PostMeServer.delete_post(post_id) - deleting of post

## Further development
- [ ] Tests
- [ ] server RESTfull API
- [x] server supervisor module
- [ ] simple frontend (maybe)
