import type {NextPage} from "next";
import Layout from "../components/layout";
import {ContactCard} from "../components/pages/contact/";

const Contact:NextPage = ()=>{
  return (
    <Layout>
      <ContactCard/>
    </Layout>
  )
};

export default Contact;
