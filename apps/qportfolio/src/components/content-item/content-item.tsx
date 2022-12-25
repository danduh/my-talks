import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./content-item.css?inline";
import { ContentItem } from "~/services/interfaces";

export default component$((props: { state: ContentItem }) => {
  useStylesScoped$(styles);
  const event = props.state
  return (
    <div class="content-card">
      <div class="content-card-title">
        <div class="content-card-header-text">
          <div class="content-card-header-title">
            { event.title }
          </div>
          <div class="content-card-header-subtitle">
            Language: { event.language } <em> ({ event.events[0].date })</em>
          </div>
        </div>
      </div>
      <div class="content-card-content">
        <img src={ "https://res.cloudinary.com/danduh/image/upload/f_auto,q_auto/w_200,h_120/" + event.thumbnail }
             alt={ event.title }
             loading="lazy"
             width="200" height="120"
             class="content-card-image"/>
        <div class="content-card-content-description">
          <p>{ event.description }</p>
          <p>{ event.events.map(ev => {
            return <em><b>{ ev.eventName }</b> - { ev.location } / </em>
          }) }</p>
        </div>
      </div>
      <div className="content-card-actions">
        <a href={ event.url } aria-description={ event.title }>
          <span>Video</span>
        </a>
      </div>
    </div>
  )
})
