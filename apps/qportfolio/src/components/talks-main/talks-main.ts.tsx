import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./talks-main.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="wrapper">
      <article>
        <h1>Hi I'm Daniel Ostrovsky</h1>

        <img alt="Daniel Ostrovsky" width="100" height="100"
             className="head-image" loading="eager"
             src="https://res.cloudinary.com/danduh/image/upload/f_auto,q_auto/w_200,h_200/portfolio/head.jpg" />

        <p>Web development (Full Cycle) expert and teams manager with over twenty years of experience in the industry.
          Meetup organizer - "NG-Heroes".Volunteer at Tech-Career, nonprofit organisation which target to attain and advance professional
          careers In
          Israel’s High-Tech for Ethiopian Israeli young adults.
          Full Cycle Dev. enthusiast, Public speaker and writer, Community leader.
        </p>
        <p>I'm passionate about family, about my gorgeous wife and my adorable kids.
          In my free time, I'm "**The Best Developer in The World**" *based on my wife's ranking*.</p>
        {/*<mat-chip-listbox className="mat-card-header">*/ }
        {/*  <mat-chip color="primary">TypeScript</mat-chip>*/ }
        {/*  <mat-chip color="primary">JavaScript</mat-chip>*/ }
        {/*  <mat-chip color="primary">Angular</mat-chip>*/ }
        {/*  <mat-chip color="primary">React</mat-chip>*/ }
        {/*  <mat-chip color="primary">React-Native</mat-chip>*/ }
        {/*  <mat-chip color="primary">AWS</mat-chip>*/ }
        {/*  <mat-chip color="primary">Docker</mat-chip>*/ }
        {/*  <mat-chip color="primary">Kubernetes</mat-chip>*/ }
        {/*  <mat-chip color="primary">ArgoCD</mat-chip>*/ }
        {/*  <mat-chip color="primary">Jenkins</mat-chip>*/ }
        {/*  <mat-chip color="primary">Mongo</mat-chip>*/ }
        {/*  <mat-chip color="primary">Postgres</mat-chip>*/ }
        {/*  <mat-chip color="primary">DynamoDb</mat-chip>*/ }
        {/*</mat-chip-listbox>*/ }
      </article>
    </div>

  );
});
