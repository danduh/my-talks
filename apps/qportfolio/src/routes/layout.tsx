import { component$, useStore, useStylesScoped$, useTask$ } from "@builder.io/qwik";
import Header from "../components/header/header";
import TalksMain from "../components/talks-main/talks-main.ts";
import ContentItemCard from "../components/content-item/content-item";
import Footer from "../components/footer/footer";
import styles from "./layout.css?inline";
import { IState } from "~/services/interfaces";
import { getData } from "~/services/get-data";


export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore<IState>({
    content: {
      upcomming: [],
      videos: [],
      blogs: [],
      tbds: []
    }
  });

  useTask$(async () => {
    // track(signal);
    state.content = await getData();
  });

  return (
    <>
      <main>
        <Header/>
        <section>
          <TalksMain/>
          {
            state.content.videos.map((item) => {
              return <ContentItemCard state={ item }/>
            })
          }
        </section>
      </main>
      <Footer/>
    </>
  );
});

