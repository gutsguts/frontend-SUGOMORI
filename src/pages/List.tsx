import React, { Component } from 'react';

import { Grid } from '@zeit-ui/react';

export const List = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>Hello Login app list</Grid>
    </Grid.Container>
  );
};
