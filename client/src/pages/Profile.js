import React, { useContext } from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import { AuthContext } from "../context/auth";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { useQuery } from "@apollo/react-hooks";
import PostCard from "../components/PostCard";

export default function Profile(props) {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <>
      <br />
      <Grid textAlign="center">
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{user.username.toUpperCase()}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="pencil alternate" />
              15 posts
            </a>
          </Card.Content>
        </Card>
      </Grid>
      <Grid columns={3} doubling stackable>
        <Grid.Row className="page-title">
          <h1 className="title">Your Posts</h1>
        </Grid.Row>
        <Grid.Row mobile={1} tablet={2}>
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}
