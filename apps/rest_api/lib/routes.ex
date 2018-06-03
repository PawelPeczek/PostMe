defmodule Rest.Router do
    use Maru.Router

    params do
        requires :user,    type: String
        requires :hashtag, type: String
        requires :content, type: String
    end
    post :posts do
        ret = PostMeServer.add_post(params[:user], params[:hashtag], params[:content])
        json(conn, ret)
    end

    get :users do
        json(conn, PostMeServer.list_all_users())
    end

    get :hashtags do
        json(conn, PostMeServer.list_all_hashtags())
    end

end