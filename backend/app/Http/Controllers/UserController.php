<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Post;
use App\Models\Like;
use App\Models\Follow;

class UserController extends Controller
{
    function createPost(Request $request){
        $user = auth()->user(); 
        try {
            $user = auth()->user(); 
    
            $post = Post::create([
                'user_id' => $user->id,
                'img_url' => $request->img_url,
                'caption' => $request->caption,
            ]);
    
            return response()->json(['message' => 'Posted successfully', 'post' => $post], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred while posting'], 500);
        }
    }

    function getPosts(Request $request){
        $user = auth()->user(); 
            $userPosts = DB::table('users as u')
            ->join('follows as f', 'f.follower_id', '=', 'u.id')
            ->join('posts as p', 'f.user_id', '=', 'p.user_id')
            ->select('u.name', 'p.img_url', 'p.caption')
            ->where('f.follower_id', $user->id)
            ->get();
        return response()->json(['message' => 'Posts retrieved successfully', 'posts' => $userPosts], 200);
    }

    public function toggleLike(Request $request)
    {
        $user = auth()->user();
        $post_id = $request->query('post_id'); 
        $like = Like::where(['user_id' => $user->id, 'post_id' => $post_id])->first();

        if ($like) {
            $like->delete();
            return response()->json(['message' => 'Post unliked successfully'], 200);
        } else {
            Like::create(['user_id' => $user->id, 'post_id' => $post_id]);
            return response()->json(['message' => 'Post liked successfully'], 200);
        }
    }

    public function follow(Request $request)
    {
        $follower = auth()->user();   # follower
        $user_id = $request->query('user_id'); 
        $follow = Follow::where(['user_id' => $user_id, 'follower_id' => $follower->id])->first();

        if ($follow) {
            $follow->delete();
            return response()->json(['message' => 'user unfollowed successfully'], 200);
        } else {
            Follow::create(['user_id' => $user_id, 'follower_id' => $follower->id]);
            return response()->json(['message' => 'user followed successfully'], 200);
        }
    }
}


