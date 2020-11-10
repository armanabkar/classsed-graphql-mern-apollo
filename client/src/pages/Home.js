import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import CreatePost from "../components/CreatePost";

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <>
      {user && <CreatePost />}
      <Grid columns={3} doubling stackable>
        {user ? (
          <Grid.Row className="page-title">
            <h1 className="title">Recent Posts</h1>
          </Grid.Row>
        ) : (
          <Grid.Row className="page-title">
            <h1 className="welcome">Welcome!</h1>
            <span>
              <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </span>
            <br />
          </Grid.Row>
        )}
        <Grid.Row mobile={1} tablet={2}>
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Home;
