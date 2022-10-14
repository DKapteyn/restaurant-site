import React, { useState } from "react";
import ResForm from "../components/OrderPage/ResForm";
import ResHeroPic from "../components/OrderPage/ResHeroPic";
import Layout from "../components/shared/Layout";

export default function OrderPage() {
  const [openModal, setModalOpen] = useState(false);
  return (
    <div>
      <Layout>
        <ResHeroPic />
        <ResForm setModalOpen={setModalOpen} />
        <Modal />
      </Layout>
    </div>
  );
}
