import React from "react";
import ResForm from "../components/OrderPage/ResForm";
import ResHeroPic from "../components/OrderPage/ResHeroPic";
import Layout from "../components/shared/Layout";

export default function OrderPage() {
  return (
    <div>
      <Layout>
        <ResHeroPic />
        <ResForm />
      </Layout>
    </div>
  );
}
