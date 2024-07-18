// g is a schema generator, config the final object to return
import { graph, config } from "@grafbase/sdk";

const g = graph.Standalone();

// types are generated with the `type` method,
// followed by the name and fields.
const User = g.type("User", {
  username: g.string(),
  email: g.email(),
  avatarUrl: g.url(),
  discription: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.ref("Project").list().optional(),
});

const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  imageUrl: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdBy: g.ref("User"),
});
// finally we export the default config
export default config({
  graph: g,
});
