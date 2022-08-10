<script>
  import design_details from "$lib/assets/17/images/design-details.jpeg";
  import figma_sidebar from "$lib/assets/17/images/figma-sidebar.png";
  import framer_insert_menu from "$lib/assets/17/images/framer-insert-menu.png";
  import framer_qr_code from "$lib/assets/17/images/framer-qr-code.png";
  import framer_community_plugins from "$lib/assets/17/images/framer-community-plugins.gif";
  import framer_smart_components from "$lib/assets/17/images/framer-smart-components.gif";
</script>

<section>
  <div class="content">
    <aside>
      <div>
        <div class="table-of-contents">Table of Contents</div>
        <ul>
          <li class="selected">
            <a href="#">My Story</a>
          </li>
          <li>
            <a href="#">Priming</a>
          </li>
          <li>
            <a href="#">Enter Framer</a>
          </li>
          <li>
            <a href="#">For the no-coders. Framer is for you.</a>
          </li>
          <li>
            <a href="#">For the code-saavy. Framer is for you.</a>
          </li>
          <li>
            <a href="#">My Sweet Spot: How Our Team is Using Framer</a>
          </li>
          <li>
            <a href="#">Figma</a>
          </li>
          <li>
            <a href="#">My Framer Desktop</a>
          </li>
          <li>
            <a href="#">Tight Developer Schedule</a>
          </li>
        </ul>
      </div>
    </aside>

    <main>
      <h1>Framer is still alive and well… and it’s a game-changer</h1>
      <h2>A love letter to my prototyping tool of choice.</h2>

      <p>
        Earlier, this week, this post came across my feed: <a
          href="https://azumbrunnen.me/blog/framer-is-dead/"
          target="_blank">“Framer is Dead.”</a
        >
      </p>
      <p>
        <em>Impossible.</em> I've been using it non-stop for the past month.
      </p>
      <p>
        Sadly, this post has gotten some traction, and I've seen it pop-up on
        several round-ups.
      </p>
      <p>
        Two weeks ago, Framer launched <strong
          >a new home page design and Smart Components</strong
        >, with
        <strong>Variants</strong> coming out of Beta. Looking at new features alone,
        it's very much alive and well.
      </p>
      <p>
        The leading case this post made was that Framer was at fault for moving
        toward React. In doing so, it's alienating designers that aren't
        code-savvy. Or, on the opposite end of the spectrum, over-empowering UX
        engineers who over-value the code.
      </p>
      <p>
        Then, as if to drive the nail in the coffin: “Framer used to be about
        playing around. Now it's about building things.” — Frankly, I'm not sure
        why “playing around” and “building things” have to be mutually
        exclusive.
      </p>
      <p>Are we talking about the same product?</p>

      <h3>My Story</h3>

      <p>
        Before Framer, we were using <a
          href="http://invision.com"
          target="_blank">Invision</a
        > for prototyping. At best, this experience felt clunky. I was taking static
        images, creating hot spots, and linking them together. If anything, it demonstrated
        how screens were linked together. But, during pitches, there was still a
        considerable amount of hand waving and, “Imagine this. The user will scroll
        down, and this will happen…”
      </p>

      <p>
        While this worked for some clients, others still had trouble making that
        leap, however big or small. There was even a fair amount of redesigning
        once developers got involved. “Oh, I didn't realize that's what you
        meant.”
      </p>

      <h3>Priming</h3>

      <div class="image-text-wrapper">
        <div class="image-text-wrapper__image">
          <img src={design_details} alt="Design Details" />
        </div>

        <div class="image-text-wrapper__content">
          <p>
            In November (2020), I started working with a new client, designing a
            native application. About the same time, I was listening to the <a
              href="https://designdetails.fm/episodes/h5VhO2W3"
              target="_blank"
              >Design Details Podcast, Episode 377: Future-Proof Designer</a
            >. One of the skills they talked about was prototyping.
            <strong
              >The best designers at prototyping are the best communicators.</strong
            >
          </p>
        </div>
      </div>

      <blockquote>
        The best designers at prototyping are the best communicators.
      </blockquote>

      <p>Noted.</p>

      <p>
        At that moment, I knew that the most effective way to get stakeholders
        on board was to create a prototype true to the app's experience.
      </p>
      <p>That's the key: <strong>an app is an experience.</strong></p>

      <p>
        When you're designing a native application, you're pushing pixels on a
        laptop or a desktop. The point is: it's a different medium; it's a
        different device than how the end-user will experience the final
        product.
      </p>
      <p>
        I wanted to create a prototype that felt real. They could pull it up on
        their mobile device and feel like they were using an application — no
        smoke and mirrors. No handwaving. No magic.
      </p>

      <h3>Enter Framer</h3>

      <p>
        I've known about Framer for years but never explored it as an option.
        This project seemed like the perfect opportunity and the perfect fit.
      </p>

      <p>I've been blown away.</p>

      <h3>For the no-coders. Framer is for you.</h3>

      <p>
        You can import your designs directly from Figma or Sketch or design
        directly within Framer.
      </p>
      <p>
        It has plenty of built-in, interactive components that you can use to
        build a prototype without writing a line of code.
      </p>

      <div class="image">
        <img src=".{framer_insert_menu}" alt="Framer Insert Menu" />
        <caption>Insert Menu within Framer</caption>
      </div>

      <p>
        There’s an entire library of third-party components, at your disposal.
      </p>

      <div class="image">
        <img src={framer_community_plugins} alt="Framer Community Plugins" />
        <caption>Framer Community Plugins</caption>
      </div>

      <p>
        With the release of <a
          href="https://www.framer.com/blog/posts/5-interactive-components-with-variants/"
          target="_blank">Variants</a
        >
        and
        <a
          href="https://www.framer.com/blog/posts/announcing-smart-components/"
          target="_blank">Smart Components</a
        >, the sky’s the limit.
      </p>

      <div class="image">
        <img src={framer_smart_components} alt="Framer Smart Components" />
      </div>

      <h3>For the code-savvy. Framer is for you.</h3>

      <p>
        In Framer, you can code custom React components(!!) and use them
        alongside designed components. This is mind-blowing to me.
      </p>

      <blockquote>
        I can play with interactions while building something real.
      </blockquote>

      <p>The sky truly is the limit.</p>

      <h3>My Sweet Spot: How Our Team is Using Framer</h3>

      <p>
        I recognize that my skill set is different. I design and write code. Not
        all designers code, and not all developers design — and that’s perfectly
        fine. I’ve found Framer blends both worlds in a way that I’ve never seen
        in an application.
      </p>

      <h3>Figma</h3>

      <p>
        I’ve done all the initial design work within Figma. I have more
        experience there, and it’s allowed me to create multiple drafts and
        experiment in design without muddying my prototype in Framer.
      </p>

      <div class="image-text-wrapper">
        <div class="image-text-wrapper__image">
          <img src={figma_sidebar} alt="Figma Sidebar" />
        </div>

        <div class="image-text-wrapper__content">
          <p>
            Once the design is cleaned up, I have a page in Figma that I use
            specifically for a hand-off. This keeps unwanted elements out of
            Framer
          </p>
        </div>
      </div>

      <h3>Framer Desktop</h3>

      <p>
        You can do everything within the browser, through Framer Web. In fact,
        Framer Web has more features than Framer Desktop.
      </p>
      <p>
        However, with Framer Desktop, I can directly access the code folder.
        Meaning, I can write custom ****React components within <strong
          >VS Code</strong
        >, my choice IDE.
      </p>
      <p>
        I also have access to the <strong>package.json</strong> file to install
        npm packages, like any other project. This only extends my toolset,
        giving me access to packages like
        <a href="https://styled-components.com/" target="_blank"
          >Styled Components</a
        >
        and <a href="https://date-fns.org/" target="_blank">date-fns</a>.
      </p>
      <p>
        All code is committed to <strong>version control</strong>, either
        <a href="http://github.com/" target="_blank">GitHub</a>
        or <a href="https://bitbucket.org/" target="_blank">BitBucket</a>. This
        creates a better workflow for me, but also gives easy access to the
        engineers on the project.
      </p>

      <h4>JSON Data Files</h4>

      <p>
        I’ve created JSON files that outline the data. The state of the app and
        its design change based on the data passed in.
      </p>

      <p>
        What does it look like to have 1 notification vs. 12? What happens when
        the user has overdue payments? What does the app look like when the user
        is in Phase 1 vs. Phase 3 of the program? Instead of creating prototypes
        for each use case, I update the data passed in.
      </p>

      <p>
        We can always change the shape of the data in my JSON file, but it does
        have the potential to mirror a potential GraphQL query.
      </p>

      <h4>Sharing the Project</h4>

      <p>
        Once I have a working prototype, I’ll upload the project to <strong
          >Framer Web</strong
        >. This makes it easy to generate share links. Even better, if someone
        has the <a href="#" target="_blank">Framer Preview App</a> on their mobile
        device, I can generate a QR Code that allows them to interact with the prototype
        on their phone, just like the final native app.
      </p>

      <div class="image">
        <img src={framer_qr_code} alt="Framer QR Code" />
        <caption>Generating a QR Code for Framer Preview App</caption>
      </div>

      <h3>Tight Developer Schedule</h3>

      <p>
        As with most projects, this one has a tight developer schedule. One of
        the biggest perks that we’ve found is that Framer has gotten us to the
        end result faster. I’m able to hand over the React components I’ve
        created with minimal refactoring.
      </p>

      <p>
        While this process might sound more like <em>building</em> instead of
        <em>experimenting</em>, I didn’t list in detail all the “play” that is
        woven throughout the entire process.
      </p>

      <p>Framer is very much alive and well.</p>
    </main>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");

  section {
    padding: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 1;
    font-weight: 900;
    margin: 0 0 10px 0;
    padding: 0;
  }

  h2 {
    font-weight: 400;
    font-size: 1.625rem;
    margin: 0 0 40px;
  }

  h3 {
    font-size: 1.625rem;
    line-height: 2rem;
    font-weight: 800;
  }

  a {
    color: #f40082;
    font-weight: 800;
  }

  blockquote {
    font-size: 1.625rem;
    color: #8b8b8b;
    max-width: 466px;
    margin: 38px auto;
  }

  caption {
    text-align: center;
    color: gray;
    font-size: 0.875rem;
  }

  .image-text-wrapper {
    display: flex;
    gap: 50px;
    margin-bottom: 70px;
    margin-left: -70px;
    padding-top: 50px;
  }

  .image {
    margin-left: -70px;
    margin-bottom: 50px;
    padding-top: 50px;
  }

  .image-text-wrapper__image,
  .image-text-wrapper__content {
    flex: 1;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column-gap: 20px;
  }

  aside {
    grid-column: 2 / span 2;
  }

  aside > div {
    position: sticky;
    padding-top: 150px;
    top: 0px;
  }

  aside .table-of-contents {
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 3px;
    padding-left: 24px;
    margin-bottom: 30px;
  }

  aside ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  aside ul li {
    margin-bottom: 30px;
    padding: 0 0 0 24px;
    font-size: 1rem;
  }

  aside ul li.selected {
    color: #f40082;
    border-left: 2px solid #f40082;
  }

  aside ul li a {
    text-decoration: none;
    color: black;
    font-weight: normal;
  }

  aside ul li.selected a {
    font-weight: bold;
    color: #f40082;
  }

  main {
    padding-top: 50px;
    grid-column: 5 / span 5;
    margin-left: 100px;
  }

  p {
    font-size: 1rem;
    line-height: 2;
  }

  img {
    max-width: 100%;
  }
</style>
