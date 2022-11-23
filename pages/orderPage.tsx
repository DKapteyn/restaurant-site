import React, { useState } from "react";
import Head from "next/head";
import ResForm from "../components/OrderPage/ResForm";
import ResHeroPic from "../components/OrderPage/ResHeroPic";
import Layout from "../components/shared/Layout";
import Modal from "../components/OrderPage/Modal";
import Designs from "../components/OrderPage/Designs";

export default function OrderPage() {
  const [openModal, setModalOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Reservations</title>
        <meta
          name="restaurant site"
          content="reservation page for restaurant"
        />
      </Head>
      <Layout>
        <ResHeroPic />
        <ResForm setModalOpen={setModalOpen} />
        <Designs />
      </Layout>
      {openModal && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}
