import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import zee5 from "../../Assets/Projects/zee5.png";
import dineout from "../../Assets/Projects/dineout.png";
import masai2o from "../../Assets/Projects/masai2o.png";
import GoMasai from "../../Assets/Projects/GoMasai.png";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: zee5,
    title: "Zee5 Clone",
    description:
      "Watch premieres of your favourite TV show episodes a day before telecast on ZEE5 & explore blockbuster movies, 100+ original content, music videos, live TV .Watch premieres of your favourite TV show episodes on zee5.",
    link: "https://github.com/Akash2377/Zee5",
    demo: "https://zee5clone22.netlify.app",
    blog: "https://zee5.hashnode.dev/zee5-watch-online-movies",
    stack: ["javascript", "html", "css", "git"],
  },
  {
    imgPath: dineout,
    title: "Dineout Clone",
    description:
      "Find best restaurants in Delhi offering discounts on food & drinks, check out menu, reviews and also book a table through dineout for free.",
    link: "https://github.com/Akash2377/cloneItDineout",
    demo: "https://dineoutclone22.netlify.app/",
    blog: "https://dinoutclone.hashnode.dev/find-the-best-restaurants-deals-discounts-and-offers-dinout",
    stack: ["javascript", "html", "css", "git"],
  },
  {
    imgPath: masai2o,
    title: "masai2.0 learning platform",
    description:
      "Masai2.0 is a platform that allows instructors to build online courses and teach 49 million+ students. Students can wishlist, add to cart, buy and review courses.",
    link: "https://github.com/Akash2377/Masai_2.0",
    demo: "https://masai2-0learningapp.netlify.app/",
    blog: "https://learnwithmasai2.hashnode.dev/masai-20",
    stack: ["javascript", "html", "css", "git"],
  },
  {
    imgPath: GoMasai,
    title: "GoMasai Search Engine",
    description:
      "GoMasai is a search engine in which user can search anything then user will get results according to search",
    link: "https://github.com/Akash2377/gomasai",
    demo: "https://gomasai.netlify.app/",
    blog: "https://gomasai.hashnode.dev/gomasai",
    stack: ["javascript", "html", "css", "git"],
  },
];

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", gap: "0.5rem" }}>
          {projects.map((project) => (
            <Col
              key={project.title}
              xs={12}
              sm={10}
              lg={6}
              className="project-card"
            >
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
