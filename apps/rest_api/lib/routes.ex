defmodule Rest.Router do
    use Maru.Router
    require Protocol

    Protocol.derive(Jason.Encoder, UserPost)
    Protocol.derive(Jason.Encoder, HashtagPost)    
    Protocol.derive(Jason.Encoder, Post)    

    resource :users do
        get do
            json(conn, PostMeServer.list_all_users())
        end
    end

    resource :hashtags do
        get do
            json(conn, PostMeServer.list_all_hashtags())
        end
    end

    resource :posts do

        params do
            requires :user,     type: String
            requires :hashtags, type: List[String]
            requires :content,  type: String
        end
        post do
            ret = PostMeServer.add_post(params[:user], params[:hashtags], params[:content])
            json(conn, ret)
        end

        resource :user do   
            route_param :user, type: String do
                get do
                    ret = PostMeServer.find_user_posts(params[:user])
                    json(conn, ret.posts)
                end
            end
        end

        resource :hashtag do
            route_param :hashtag, type: String do
                get do
                    ret = PostMeServer.find_hashtag_posts(params[:hashtag])
                    json(conn, ret.posts)
                end
            end
        end


        route_param :id, type: String do
            delete do
                json(conn, PostMeServer.delete_post(params[:id]))
            end
        end
        
    end

end