import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../componentes/layout/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" color="primary">
        hola fer
      </Typography>
    </Layout>
  );
};

export default HomePage;
