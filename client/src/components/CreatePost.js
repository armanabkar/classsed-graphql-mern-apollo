import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { Grid, Button, Card } from "semantic-ui-react";

export default function CreatePost() {
  const [createPostMode, setCreatePostMode] = useState(false);

  const togglePostMode = () => {
    setCreatePostMode(!createPostMode);
  };
  return (
    <Grid textAlign="center" columns={3}>
      <Grid.Row mobile={1}>
        {createPostMode ? (
          <Card>
            <Card.Content header="Create Post" />
            <Card.Content>
              <PostForm />
            </Card.Content>
            <Button floated="right" onClick={togglePostMode}>
              Dismiss
            </Button>
          </Card>
        ) : (
          <Button onClick={togglePostMode} type="submit" color="blue">
            Create Post
          </Button>
        )}
      </Grid.Row>
    </Grid>
  );
}
