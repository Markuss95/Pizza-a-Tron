import React from "react"
import { HomeComponent, Layout } from "../components"
import "../modules/firebase/firebase"

export default function Home() {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  )
}
