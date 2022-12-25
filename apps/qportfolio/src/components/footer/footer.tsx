import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="logo">
        <a href="/">
          Home
        </a>
      </div>
      <div class="footer-social">
        <a target="_blank" href="https://twitter.com/danduh81">
          <img src="https://danduh.me/assets/twitter.svg" alt="Twitter @DanDuh81" class="social"/>
        </a>
        <a target="_blank" href="https://github.com/danduh">
          <img src="https://danduh.me/assets/github.svg" alt="GitHub DanDuh" class="social"/>
        </a>
        <a target="_blank" href="mailto:danduh@gmail.com">
          <img src="https://danduh.me/assets/gmail.svg" alt="Mail to DanDuh" class="social"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/danduh/">
          <img src="https://danduh.me/assets/linkedin.svg" alt="linkedin DanDuh Profile" class="social"/>
        </a>
        <a target="_blank" href="https://medium.com/@danduh">
          <img src="https://danduh.me/assets/medium_logo.png" alt="Medium Blogs @danduh" class="social"/>
        </a>
      </div>
    </footer>
  );
});
